<div align="center">
  <img alt="auto-cli logo" width="120" height="120" src="./logo.png">
  <h1>px-to-vw-converter</h1>
  <span>English | <a href="./README.zh-CN.md">中文</a></span>
</div>

# Introduction
A tool for intelligently converting pixel units (px) to viewport width units (vw), designed for minimal responsive adaptation in projects using ant-design-vue, Vue 3, and Vite.

## ✨ Core Features
- Automatically convert `px` to `vw` in CSS/JS
- Support for Ant Design Vue's StyleProvider style transformation
- Provide Vite plugins for inline styles and build processes
- Support custom exclusion directories and manual conversion methods

---

## 🚀 Quick Start

### Installation

```sh
pnpm i @stellaround/px-to-vw-converter
```

### Global Configuration

Initialize in main.ts:

```ts
import { setConfig } from '@stellaround/px-to-vw-converter'

// Defaults: viewportWidth=1920, precision=2
setConfig({
    viewportWidth: 1920,  // Design draft width (px)
    precision: 3          // Decimal precision
})
```

### Ant Design Vue Setup
In root component:
```ts
import { transformAntdCss } from '@stellaround/px-to-vw-converter'

export default () => (
    <a-style-provider transformers={[transformAntdCss]}>
    <App />
    </a-style-provider>
)
```
### Vite Configuration
vite.config.ts:
```ts
import { 
  vitePluginInlinePxToVw,
  vitePluginPostCssPxToViewport 
} from '@stellaround/px-to-vw-converter'

export default defineConfig({
  plugins: [
    // Handle inline styles
    vitePluginInlinePxToVw({
      excludeDirs: ['src/pages/overview'] // Excluded paths
    }),
    
    // Process CSS files
    vitePluginPostCssPxToViewport()
  ]
})
```
### Manual Conversion
For dynamic scenarios:

```ts
import { convertPxToVw } from '@stellaround/px-to-vw-converter'

// Convert 100px to vw
const vwValue = convertPxToVw(100) // e.g. "5.128vw"
```

## License

[Apache](./LICENSE)

Copyright (c) 2024-present [spectature](https://github.com/Spectature)
