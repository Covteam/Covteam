# Changelog

## 2026-10-12 · 首页视觉与交互优化

- 参考 Taste Skill 的现有项目改造流程和 Echo-Tail 的去 AI 味方法论，先编写规格再实施。
- 将多色渐变、玻璃效果、重复圆角卡片改为深灰绿底、单一绿色强调、细线分隔与非对称布局。
- 首屏明确西华大学、成立年份和 CTF 学习场景，使用原始战队 Logo；移除将黑客插画描述为团队活动的展示。
- 方向改为编号条目，奖项按年份倒序展示，成员改为头像与简介直接可读的名录；保留全部数据、链接和展开功能。
- 统计移除无依据的加号，奖项标记为“收录奖项”。保留工作区同步新增的御网杯一等奖记录，不改写成员资料。
- 增加移动菜单、Escape 关闭、当前章节标识、实际导航高度的锚点留白与交互反馈。
- 修正全局样式的 Astro 作用域，统一导航、正文、页脚和焦点颜色，确保 reduced-motion 覆盖子组件。
- 网站图标引用战队 Logo；保持 GitHub Pages 基路径和原有 CTF 控制台彩蛋。
- docs 纳入版本管理，README 补充 Windows/macOS fnm 使用说明与禁止未经授权 push 的约束。
- 完成类型、构建、格式、无头 Chromium 的响应式/交互/无 JS/对比度检查，保存生产预览截图。

## 2026-10-12 · 本地合并

- 用户授权将 `codex/taste-redesign` 提交并合并到本地 `main`。保留远程 push 禁止约束。

## 2026-11-03 · 前端性能与资源优化

- 成员头像迁移到 `src/assets/avatars/`，通过 `astro:assets` 输出 56px 1x/2x WebP；34 张头像传输量由约 5 MB 降至约 160 KB。
- `members.ts` 的 `image` 字段改为文件名，新增 `src/data/avatars.ts` 统一解析；文件缺失时构建报错，移除运行时裂图兜底脚本。
- 导航 Logo 与 favicon 改由 125 KB PNG 源图生成小尺寸 WebP/PNG，新增 apple-touch-icon。
- 头像 `alt` 置空（姓名已在相邻标题中），避免读屏重复朗读；viewport 补充 `initial-scale=1`。
- 删除未使用的 Astro 模板残留（`favicon.svg`、`astro.svg`、`background.svg`）；新增 `sharp` 依赖。
