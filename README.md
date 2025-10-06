# PADRÕES DE COMMIT UTILIZADOS NO PROJETO

🎉 start: Inicial  
📚 docs: Atualiza README  
🐛 fix: Corrige loop na 50  
✨ feat: Adiciona login  
💄 feat: Estiliza formulário  
🧱 ci: Modifica Dockerfile  
♻️ refactor: Refatora para arrow functions  
⚡ perf: Melhora resposta  
💥 fix: Reverte mudanças  
🧪 test: Adiciona teste  
💡 docs: Comenta função  
🗃️ raw: Adiciona dados RAW  
🧹 cleanup: Limpa validação  
🗑️ remove: Remove arquivos inúteis
AppCOdehaus

# COMMITS NO GIT HUB

bunx npm version minor --no-git-tag-version --no-git-checks
git init
git add .
git commit -m "✨ feat: "
git push -u origin producao

# COMANDOS DO WRANGLER:

npx wrangler d1 execute backend-assinatura --file=./schema.sql --local

npx wrangler d1 execute backend-assinatura --file=./schema.sql --remote

wrangler logout

wrangler login

# PADRÃO DO CRUD NAS CONTROLLERS E MODELS

```plaintext
POST::  criar
GET::   buscar_pelo_filtro
GET::   buscar_pelo_id
PATCH:: atualizar_pelo_id
DELETE:: deletar_pelo_id
```

### DESCOBRIR O IP DA PESSOA

https://cloudflare.com/cdn-cgi/trace

# Versionamento semântico (SemVer): Use o padrão X.Y.Z (Major.Minor.Patch)

X (Major): Primeiro número - aumentado quando ocorrem mudanças incompatíveis com versões anteriores (breaking changes)
Y (Minor): Número do meio - aumentado quando adicionados novos recursos compatíveis com versões anteriores
Z (Patch): Último número - aumentado para correções de bugs e pequenos ajustes que não alteram a funcionalidade existente

## SEO (Melhorias aplicadas)

Fiz melhorias básicas de SEO e discoverability no projeto. Resumo das mudanças:

- `src/app/index.html`: adicionadas tags essenciais — canonical, meta robots, Open Graph, Twitter Card, theme-color, favicons maiores e JSON-LD (Organization).
- `public/robots.txt` e `public/sitemap.xml`: arquivos criados apontando para `https://codehaus.app/`.
- Per-page metadata: implementado um hook simples `usePageMeta` em `src/app/lib/seo.ts` e aplicado nas páginas `Home` e `Infra` para atualizar dinamicamente title/description/OG quando a página é renderizada.

Como personalizar após o deploy:

- Atualize o domínio canonical e os caminhos de imagem em `src/app/index.html`, `public/sitemap.xml` e nos meta tags OG/Twitter para refletir o domínio final.
- Se preferir uma biblioteca para gerenciar head mais robusta, instale `react-helmet-async` (veja compatibilidade de versões com React 19) e substitua o hook pelo provider + Helmet.
- Submeta o `sitemap.xml` no Google Search Console e em outros serviços de webmaster.

Se quiser, eu posso:

- Adicionar hreflang se houver versões multilíngues.
- Gerar um sitemap dinâmico a partir das rotas do React durante o build.
- Integrar OpenGraph images geradas dinamicamente.

