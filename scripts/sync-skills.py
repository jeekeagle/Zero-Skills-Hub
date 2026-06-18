#!/usr/bin/env python3
"""
sync-skills.py — 把 Zero-Skills 仓库的 SKILL.md 同步到 Docusaurus 章节

输入:  $ZERO_SKILLS_DIR/skills/<category>/<slug>/SKILL.md
输出:  ./docs/<category>/<slug>.md
       ./sidebars.ts (动态生成)

规则:
- 读 SKILL.md frontmatter 提取 name / description
- 用 description 的前 60 字符作为 Docusaurus description
- 替换 frontmatter 为 Docusaurus 格式
- 保持正文不变

侧栏:
- 按 category 分组
- 顺序: 文件系统遍历顺序(字母序)
- 每个 category 是个 type:'category'
"""

import os
import re
import sys
from pathlib import Path

# 类别中文名映射(用于侧栏显示)
CATEGORY_LABELS = {
    "perspective": "视角类",
    "tool": "工具类",
    "methodology": "方法论类",
    "router": "视角路由器",
}


def read_frontmatter(text: str) -> tuple[dict, str]:
    """读 SKILL.md frontmatter,返回 (meta dict, 正文)"""
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not m:
        return {}, text
    raw_meta = m.group(1)
    body = m.group(2)
    meta = {}
    current_key = None
    for line in raw_meta.split("\n"):
        if line.startswith("  ") and current_key:
            # continuation
            continue
        if ":" in line:
            key, _, val = line.partition(":")
            meta[key.strip()] = val.strip().strip('"').strip("'")
            current_key = key.strip()
    return meta, body


def short_desc(description: str, n: int = 60) -> str:
    """截短 description"""
    # 去掉 'Make sure to use this skill whenever the user says ...' 营销话术
    desc = description
    if "Make sure to use" in desc:
        desc = desc.split("Make sure to use")[0].strip(" .,")
    if len(desc) > n:
        desc = desc[: n - 1] + "…"
    return desc


def convert_skill(skill_md_path: Path, output_path: Path) -> dict:
    """单个 SKILL.md → 章节页,返回 sidebars 用元数据"""
    text = skill_md_path.read_text(encoding="utf-8")
    meta, body = read_frontmatter(text)
    name = meta.get("name", skill_md_path.parent.name)
    description = meta.get("description", "")

    # 找元信息层的「核心问题」(支持中英文)
    core_q = ""
    m = re.search(r"[-*]\s*\**核心问题[-*]?\*?[:：]\s*([^\n]+)", body)
    if m:
        core_q = m.group(1).strip().strip("**").strip()
    else:
        m = re.search(r"[-*]\s*\**Core Question[-*]?\*?[:：]\s*([^\n]+)", body)
        if m:
            core_q = m.group(1).strip().strip("**").strip()

    new_fm = (
        f"---\n"
        f"title: {name}\n"
        f"sidebar_label: {name}\n"
        f"sidebar_position: 1\n"
        f"description: {short_desc(description)}\n"
        f"---\n\n"
    )
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(new_fm + body, encoding="utf-8")

    return {
        "name": name,
        "category": skill_md_path.parent.parent.name,
        "slug": skill_md_path.parent.name,
        "core_question": core_q,
    }


def generate_sidebars(skills: list[dict], output_path: Path):
    """按 category 分组生成 sidebars.ts"""
    by_cat: dict[str, list[dict]] = {}
    for s in skills:
        by_cat.setdefault(s["category"], []).append(s)
    # 排序
    for cat in by_cat:
        by_cat[cat].sort(key=lambda x: x["slug"])

    lines = [
        "import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';",
        "",
        "// 自动生成 by scripts/sync-skills.py — 不要手改",
        "// 源数据: Zero-Skills/skills/<category>/<slug>/SKILL.md",
        "const sidebars: SidebarsConfig = {",
        "  skillSidebar: [",
        "    {",
        "      type: 'category',",
        "      label: '引言',",
        "      collapsed: false,",
        "      items: ['intro'],",
        "    },",
    ]
    sorted_cats = sorted(by_cat.keys())
    chinese = '一二三四五六七八九十'
    for idx, cat in enumerate(sorted_cats):
        cn_label = CATEGORY_LABELS.get(cat, cat)
        ord_label = chinese[idx] if idx < len(chinese) else str(idx + 1)
        category_label = f"第{ord_label}编 · {cn_label}（{cat}/）"
        # 把单引号转义(不会发生因为没有,但保险)
        safe_label = category_label.replace("'", "\\'")
        lines.extend([
            "    {",
            "      type: 'category',",
            f"      label: '{safe_label}',",
            "      collapsed: false,",
            "      items: [",
        ])
        for s in by_cat[cat]:
            lines.append(f"        '{s['category']}/{s['slug']}',")
        lines.extend([
            "      ],",
            "    },",
        ])
    lines.extend([
        "  ],",
        "};",
        "",
        "export default sidebars;",
        "",
    ])
    output_path.write_text("\n".join(lines), encoding="utf-8")


def main():
    src_root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("zero-skills")
    if not src_root.exists():
        print(f"❌ Source dir not found: {src_root}")
        sys.exit(1)

    docs_root = Path("docs")
    # 清掉自动生成的章节(保留 intro.md)
    if docs_root.exists():
        for item in docs_root.iterdir():
            if item.is_dir():
                import shutil
                shutil.rmtree(item)

    skills = []
    for skill_md in sorted(src_root.glob("skills/*/*/SKILL.md")):
        category = skill_md.parent.parent.name
        slug = skill_md.parent.name
        out = docs_root / category / f"{slug}.md"
        info = convert_skill(skill_md, out)
        skills.append(info)
        print(f"  ✓ {category}/{slug}")

    generate_sidebars(skills, Path("sidebars.ts"))
    print(f"\n✅ Synced {len(skills)} skills; sidebars.ts regenerated")


if __name__ == "__main__":
    main()
