<div align="center">
  <img alt="convert-vue-scoped logo" width="120" height="120" src="./logo.png">
  <h1>px-to-vw-converter</h1>
  <span><a href="./README.md">English</a> | 中文</span>
</div>

# 简介
将像素单位（px）智能转换为视窗宽度单位（vw）的工具，用于给予基于ant-design-vue、vue3和vite项目的低限度的响应式。

## ✨核心功能
自动将 CSS/JS 中的 px 转换为 vw
支持 Ant Design Vue 的 StyleProvider 样式转换
提供 Vite 插件，覆盖内联样式和构建流程
支持自定义忽略目录和手动转换方法

## 🚀快速开始

### 安装依赖

```sh
pnpm i @stellaround/px-to-vw-converter
```

### 全局配置
在 main.ts 中初始化全局配置：

```ts
import { setConfig } from '@stellaround/px-to-vw-converter'

// 默认配置：viewportWidth=1920, precision=2
setConfig({
    viewportWidth: 1920,  // 设计稿宽度（单位：px）
    precision: 3          // 计算精度（小数位数）
})
```


### Ant Design Vue 集成
在根组件中注入样式转换器：
```ts
import { transformAntdCss } from '@stellaround/px-to-vw-converter'

export default () => (
    <a-style-provider transformers={[transformAntdCss]}>
    <App />
    </a-style-provider>
)
```
### Vite 插件配置
在 vite.config.ts 中启用转换插件：

```ts
import {
    vitePluginInlinePxToVw,
    vitePluginPostCssPxToViewport
} from '@stellaround/px-to-vw-converter'

export default defineConfig({
    plugins: [
        // 处理内联样式（如 Vue 文件中的 <style> 标签）
        vitePluginInlinePxToVw({
            excludeDirs: ['src/pages/overview'] // 忽略指定目录的转换
        }),

        // 处理 CSS 文件（包括 PostCSS 处理链）
        vitePluginPostCssPxToViewport()
    ]
})
```

### 手动转换方法

对于特殊场景（如动态样式），可使用 convertPxToVw：

```ts
import { convertPxToVw } from '@stellaround/px-to-vw-converter'

// 示例：转换 100px → 根据全局配置生成 vw 值
const vwValue = convertPxToVw(100) // 输出如 "5.128vw"
```


## License

[Apache](./LICENSE)

Copyright (c) 2025-present [spectature](https://github.com/Spectature)
