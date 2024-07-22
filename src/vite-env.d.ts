/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_ZIP_URL: string
  readonly VITE_API_API_URL: string
  readonly VITE_API_MULTIMC_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}