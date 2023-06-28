export const EnvType = {
  isDevMode: false,
};
export const APP_ENV = EnvType.isDevMode;

export const DevConfig = {
  API_URL: '',
  BASE_URL: '',
  BASE_API: '',
  SOCKET_URL: '',
};
export const ProdConfig = {
  API_URL: '',
  BASE_URL: '',
  BASE_API: '',
  SOCKET_URL: '',
};
//Mixed Config
export const Config = {
  ...(EnvType.isDevMode ? DevConfig : ProdConfig),
};
