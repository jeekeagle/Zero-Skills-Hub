---
title: 关于 Zero-Skills
sidebar_label: 关于
sidebar_position: 1
description: Zero-Skills 是一个视角、工具与方法论的集合仓库
---

# 关于 Zero-Skills

**Zero-Skills** 是 Zero Agent 的 Skill 集合。每一个 Skill 是一段可复用的认知框架 —— 分析视角、写作工具、或方法论。

## 这本书怎么读

这本"书"按两编组织：

- **第一编 · 视角类** — 分析视角(认知框架、理论锚定)
- **第二编 · 工具类** — 工具(发布、转换、维护)

每一"章"对应一个 Skill,内容是它的完整 `SKILL.md` 正文 —— 含七步工序、判据、反坍缩闸、写作规范与输出格式。

## 与仓库的对应关系

```
Zero-Skills-Hub (本仓库)         Zero-Skills (源仓库)
├── docs/                        └── skills/
│   ├── intro.md                     ├── (引言放在 README)
│   ├── perspective/                 ├── perspective/
│   │   └── taxonomy-perspective.md  │   └── taxonomy-perspective/
│   └── tool/                        │       └── SKILL.md
│       └── skill-to-github.md       └── tool/
│                                       └── skill-to-github/
│                                           └── SKILL.md
```

- **一编** = skills/ 下的二级文件夹(perspective、tool、methodology、router)
- **一章** = 该文件夹下的一个 Skill 目录
- **章节内容** = 该 Skill 的 SKILL.md 全文

## 怎么用这些 Skill

把任一 `SKILL.md` 复制到 Claude Code 的 skills 目录即可使用:

- 项目级:`.claude/skills/<name>/SKILL.md`
- 用户级:`~/.claude/skills/<name>/SKILL.md`

加载后,描述(description)中列出的触发关键词会激活它。详细说明写在每个 Skill 的"操作工序"小节。

## 设计原则

- **视角化** — 每个 Skill 提供一个独特认知框架,不是任务清单
- **理论锚定** — 核心观点都引用学科经典理论,标注原文与出处
- **工序可复用** — 每步操作有方法 + 工具 + 引用 + 输出格式四要素
- **判据自检** — 附判断闸门,使用前先过判据避免误用

## 反馈

仓库地址:https://github.com/jeekeagle/Zero-Skills
Hub 站点:https://jeekeagle.github.io/Zero-Skills-Hub
