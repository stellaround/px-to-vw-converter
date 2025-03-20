import type { Plugin } from "vite";
import { convertPxToVw } from "./convert";

/**
 * Vite 插件：转换 Vue 代码中的 px 为 vw，并转换 width/height 数值
 */
export default function vitePluginPxToVw(options?: {
  excludeDirs?: string[];
}): Plugin {
  const { excludeDirs = [] } = options || {};

  return {
    name: "vite-plugin-inline-style-px-to-vw",
    enforce: "post",
    transform(code, id) {
      // 1. 检查是否在排除的目录中**
      if (excludeDirs.some((dir) => id.includes(`/${dir}/`))) {
        return null; // 直接跳过转换
      }

      if (!/\.vue$/.test(id)) return null;

      let transformedCode = code;

      // 2. **转换所有 px 值**
      const pxRegex = /(?<![\w-])(\d+(\.\d+)?px)/g;
      transformedCode = transformedCode.replace(pxRegex, (match) => {
        return convertPxToVw(match) ?? match;
      });

      // 3. **转换 width: 100 这种数值**
      const styleNumberRegex =
        /(\b(?:width|height)\s*:\s*)(\d+(\.\d+)?)(?!px)/g;
      transformedCode = transformedCode.replace(
        styleNumberRegex,
        (_, prefix, value) => {
          return `${prefix}"${convertPxToVw(parseFloat(value)) ?? value}"`;
        },
      );

      return {
        code: transformedCode,
        map: null,
      };
    },
  };
}
