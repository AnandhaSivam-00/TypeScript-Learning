interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_POKEAPI_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}