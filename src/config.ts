export interface ConfigOptions {
  viewportWidth: number;
  precision: number;
}

const defaultConfig: ConfigOptions = {
  viewportWidth: 1920,
  precision: 2,
};

let currentConfig = { ...defaultConfig };

/** 获取全局配置 */
export const getConfig = (): ConfigOptions => currentConfig;

/** 设置全局配置 */
export const setConfig = (config: Partial<ConfigOptions>) => {
  currentConfig = { ...currentConfig, ...config };
};
