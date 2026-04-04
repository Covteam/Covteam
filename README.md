# 西华大学Covteam战队主页

Git Page: https://covteam.github.io/Covteam/


## 团队介绍

西华大学网络安全兴趣小组（Covteam）成立于 2005 年。以西华大学在校本科生、研究生为主力，依托于西华大学网络安全实验室，实验室主要负责网络和安全方向的研究，是培养我校在网络安全领域全面发展的人才的摇篮。

网络安全兴趣小组成员，涵盖四个年级各个学院。学习氛围浓厚，资源积淀丰富，独立实验室，空间大，高年级同学负责新人培养、团队管理、参与比赛、校内安全知识普及等事务。

网络安全兴趣小组大致分为四个方向：网络安全、内核安全、网络与服务器、网站开发。

### 网络安全

通过掌握的网络安全知识，模拟黑客攻击对企业进行渗透测试并撰写测试报告，提供漏洞解决方案。

### 内核安全

主要是逆向方面，学习汇编语言、Windows、Linux、Android、iOS 逆向知识。

### 网络与服务器

熟悉掌握计算机网络各层重要协议以及服务器相关知识。

### 网站开发

熟悉现代浏览器，如：Chrome、Firefox、Safari 等。制作一些专业性强的网站，比如说动态网页、ASP、PHP、JSP 网页。

## 技术栈

- Astro
- TypeScript

## 项目结构

当前项目的主要目录如下：

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── img/                        # 团队图片、Logo、历史素材
├── src/
│   ├── assets/                     # Astro 默认静态资源
│   ├── components/
│   │   ├── nav.astro               # 顶部导航
│   │   ├── Welcome.astro           # 默认示例组件，可按需删除
│   │   └── team/
│   │       ├── AchievementsSection.astro
│   │       ├── DirectionsSection.astro
│   │       ├── HeroSection.astro
│   │       ├── MembersSection.astro
│   │       ├── RecruitmentSection.astro
│   │       ├── SectionHeading.astro
│   │       └── TeamPageStyles.astro
│   ├── data/
│   │   └── covteam.ts              # 团队方向、奖项、成员、招新数据
│   ├── layouts/
│   │   └── Layout.astro            # 全局页面布局
│   └── pages/
│       └── index.astro             # 首页入口，负责组装各区块
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## 页面组织说明

- `src/pages/index.astro`
  负责引入数据与页面组件，是首页的装配层。
- `src/data/covteam.ts`
  集中维护团队介绍页用到的数据，适合后续继续补充成员和奖项。
- `src/components/team/`
  存放首页各个内容区块组件，便于拆分维护。
- `public/img/`
  存放团队图片素材，页面通过 `/img/...` 路径直接引用。

## 本地开发

先安装依赖：

```bash
pnpm install
```

启动开发环境：

```bash
pnpm dev
```

默认会在本地启动开发服务器，你可以在浏览器中查看页面效果。

## 常用命令

```bash
pnpm dev
pnpm build
pnpm preview
pnpm astro -- --help
```

各命令用途：

- `pnpm dev`：启动本地开发服务器
- `pnpm build`：构建生产版本到 `dist/`
- `pnpm preview`：本地预览构建产物
- `pnpm astro -- --help`：查看 Astro CLI 帮助

## 维护建议

- 新增成员、奖项、方向信息时，优先修改 `src/data/covteam.ts`
- 调整首页结构时，优先在 `src/components/team/` 中拆分和维护
- 如果后续要清理图片资源，建议统一 `public/img/` 中的命名风格
