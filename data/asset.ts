// No GitHub Pages o site fica em /NOME-DO-REPO, então arquivos da pasta "public"
// precisam desse prefixo. Ex.: asset("/projects/app-clima.jpg")
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
