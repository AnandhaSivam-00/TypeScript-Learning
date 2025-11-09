interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_POKEAPI_BASE_URL: string;
  readonly VITE_PROXY_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}