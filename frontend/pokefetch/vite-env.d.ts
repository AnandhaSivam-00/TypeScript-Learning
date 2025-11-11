interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_PROXY_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}