import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // 入口文件
  format: ["esm", "cjs"], // 生成 ESM 和 CommonJS 两种格式
  dts: true, // 生成类型声明文件
  splitting: false, // 关闭代码拆分（库模式下不需要）
  clean: true, // 先清理 dist 目录
  external: [], // 👈 让 tsup 打包所有依赖
  sourcemap: true, // 生成 source map 方便调试
  noExternal: [/./], // 👈 这样会匹配所有外部依赖
});
