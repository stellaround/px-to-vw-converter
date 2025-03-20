import unitless from "@emotion/unitless";
import { convertPxToVw } from "./convert";

const pxRegex = /url$[^)]+$|var$[^)]+$|(\d+(?:\.\d+)?|\.\d+)px/g;

export const transformAntdCss = {
  visit: (cssObj: any) => {
    const clone: any = {};

    Object.entries(cssObj).forEach(([key, value]) => {
      let processedValue: any = value;

      // 处理数值类型
      if (typeof value === "number" && value !== 0 && !unitless[key]) {
        processedValue = convertPxToVw(value) ?? value;
      }
      // 处理字符串类型
      else if (typeof value === "string") {
        processedValue = value.replace(pxRegex, (_, pxValue) => {
          return pxValue ? (convertPxToVw(parseFloat(pxValue)) ?? _) : _;
        });
      }

      clone[key] = processedValue;
    });

    return clone;
  },
};
