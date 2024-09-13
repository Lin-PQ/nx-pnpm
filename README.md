# 项目描述

基于 pnpm workspace + nx v8 搭建的 monorepo 项目

配置 husky + lint-staged + prettier + commitlint + commitLog 统一代码风格及 commit 信息

- apps 目录为应用项目,base 作为 Qiankun 基座模块,无特殊需求技术选型选择 React + Vite + tailwind + React Query

- libs 目录为依赖项目,技术选型为 dumi,包含

- UI(业务无关公用组件库)

- BUI(强业务相关组件库，如人员检索选择等)

- FUI(提供给 Formily 低代码平台使用的组件)

- requests(封装配置 apps 模块涉及的接口调用,统一封装 axios)

- utils(公用方法函数)

- icons(图标库)

其他说明：

- pnpm 版本目前使用 9.1.3,为避免报错,禁止使用 npm 及 yarn 管理依赖

# 项目使用

## 安装依赖

```bash
pnpm install

pnpx nx dev <app-name> // 启动apps项目

eg: pnpx nx dev @shared/ui


```

## 新建 apps 项目

## 新建 libs 项目

# 优化方向

- libs 中部分模块允许作为 npm 包统一发布
- ui 组件引用多个 antd 组件,载入时应该实现按需载入
- apps 模块统一 CI/CD 流程
- 为 apps 需求模块增加埋点
