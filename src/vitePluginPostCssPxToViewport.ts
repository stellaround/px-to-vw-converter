import postcssPxToViewport from "postcss-px-to-viewport-8-plugin";
import { getConfig } from "./config";
export const vitePluginPostCssPxToViewport = (): {
  name: string;
  config(): {
    css: {
      postcss: {
        plugins: {
          postcssPlugin: string;
        }[];
      };
    };
  };
} => {
  const { viewportWidth, precision } = getConfig();

  return {
    name: "vite-plugin-postcss-px-to-viewport",
    config() {
      return {
        css: {
          postcss: {
            plugins: [
              postcssPxToViewport({
                unitToConvert: "px",
                viewportWidth,
                unitPrecision: precision,
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                minPixelValue: 1,
                replace: true,
              }),
            ],
          },
        },
      };
    },
  };
};
