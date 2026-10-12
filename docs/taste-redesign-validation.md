# 首页优化验收

日期：2026-10-12。分支：`codex/taste-redesign`。

## 已完成

- fnm Node v22.22.2、pnpm 10.33.2，`pnpm check`：0 errors、0 warnings、0 hints。
- `pnpm build`：静态构建成功，保留 `/Covteam/` 基路径。
- CLI Playwright 使用本机 Chrome 无头模式，生产构建通过 `astro preview` 验证；未使用 computer use 或内置浏览器。
- 375、768、1440px：无横向溢出，奖项/现役/退役成员展开和收起正确，页面无 JavaScript 运行错误。
- 375px：菜单展开、Escape 关闭、点击链接关闭正确；导航 aria-expanded 和当前章节 aria-current 正确。
- 锚点不被 sticky 导航遮挡；图片和 favicon URL 全部返回 HTTP 200。
- 375px 无 JavaScript：导航和全部奖项、成员可见，无横向溢出。
- 320px 附加边界检查：无横向溢出。
- reduced-motion：scroll-behavior 为 auto，子组件按钮 transition-duration 为 0.01ms。
- 全局链接继承正文颜色，按钮 box-sizing 为 border-box，修复 Astro 作用域造成的浏览器默认链接色。

## 颜色对比度

| 用途         | 前景 / 背景           | 比值    |
| ------------ | --------------------- | ------- |
| 正文         | `#edf1e9` / `#111715` | 15.87:1 |
| 辅助文字     | `#aab7ae` / `#111715` | 8.72:1  |
| 表面辅助文字 | `#aab7ae` / `#19221e` | 7.83:1  |
| 主按钮       | `#111715` / `#b4d982` | 11.40:1 |

## 截图

- [桌面首屏](preview-desktop.png)、[移动首屏](preview-mobile.png)。
- 完整页面：[375px](preview-375.png)、[768px](preview-768.png)、[1440px](preview-1440.png)。

## 验证边界

本次在 macOS 上完成实际构建与无头 Chromium 检查。Windows 使用系统字体回退、标准 CSS/DOM API 和相同 Node/pnpm 工具链，README 提供 PowerShell 的 fnm 初始化命令；未进行 Windows 实机、Safari 或屏幕阅读器验收，不宣称跨浏览器完整验证。不添加额外依赖和大型测试套件。

用户已授权提交并合并到本地 `main`。未 push、未创建远程 PR、未部署。预览仅运行在本机 `127.0.0.1`。
