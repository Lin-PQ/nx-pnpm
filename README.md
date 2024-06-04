# 项目描述

基于pnpm workspace + nx v8 搭建的monorepo项目

配置husky + lint-staged + prettier + commitlint + commitLog 统一代码风格及commit信息 

-   apps目录为应用项目,base作为Qiankun基座模块,无特殊需求技术选型选择React + Vite + tailwind + React Query

-   libs目录为依赖项目,技术选型为dumi,包含

  - UI(业务无关公用组件库)

  - BUI(强业务相关组件库，如人员检索选择等)

  - FUI(提供给Formily低代码平台使用的组件)

  - requests(封装配置apps模块涉及的接口调用,统一封装axios)

  - utils(公用方法函数)

  - icons(图标库)


其他说明：

- pnpm版本目前使用9.1.3,为避免报错,禁止使用npm及yarn管理依赖

# 项目使用

## 安装依赖

```bash
pnpm install
```

## 新建apps项目



## 新建libs项目





# 优化方向

- libs中部分模块允许作为npm包统一发布
- ui组件引用多个antd组件,载入时应该实现按需载入
- apps模块统一CI/CD流程
- 为apps需求模块增加埋点

