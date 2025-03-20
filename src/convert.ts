import { getConfig } from "./config";

/**
 * 将数值或含 px 单位的字符串转换为 vw
 * @param value 需要转换的值（如：100 或 "100px"）
 * @returns 转换后的 vw 字符串（如："5.25vw"），无效值返回 undefined
 */
export const convertPxToVw = (value: number | string): string | undefined => {
  const { viewportWidth, precision } = getConfig();

  let pxValue: number;

  if (typeof value === "string") {
    const match = value.match(/^(-?\d+(?:\.\d*)?)(px)?$/);
    if (!match) return undefined;
    pxValue = parseFloat(match[1]);
  } else if (typeof value === "number") {
    pxValue = value;
  } else {
    return undefined;
  }

  if (isNaN(pxValue)) return undefined;
  if (pxValue === 0) return "0";

  const vwValue = (pxValue / viewportWidth) * 100;
  return `${vwValue.toFixed(precision)}vw`;
};
