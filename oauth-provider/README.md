# Provedor de OAuth do painel de conteúdo (Decap CMS)

Ponte pequena e sem estado entre o GitHub e o painel `/admin` do site. Roda
como funções serverless no Vercel — não hospeda o site em si, só resolve o
login. Baseado em [`netlify-cms-oauth-provider-node`](https://github.com/bericp1/netlify-cms-oauth-provider-node).

## Deploy no Vercel

1. Em [vercel.com](https://vercel.com), "Add New" → "Project" → importe o
   repositório `emanuelcastro/magalhaeserocha`.
2. Em "Root Directory", selecione `oauth-provider`.
3. Em "Environment Variables", adicione:
   - `OAUTH_PROVIDER` = `github`
   - `ORIGIN` = `magalhaeserocha.com.br,localhost:8000`
     (a segunda origem é só para testar o login em `npm run dev` antes do domínio
     estar no ar — pode remover depois se quiser restringir só à produção)
   - `COMPLETE_URL` = `https://<seu-projeto>.vercel.app/api/complete`
     (troque `<seu-projeto>` pelo domínio que o Vercel atribuir após o primeiro deploy)
   - `ADMIN_PANEL_URL` = `https://magalhaeserocha.com.br/admin/`
   - `OAUTH_CLIENT_ID` = *(do GitHub OAuth App — ver abaixo)*
   - `OAUTH_CLIENT_SECRET` = *(do GitHub OAuth App — ver abaixo)*
4. Deploy.

## GitHub OAuth App

Em GitHub → Settings → Developer settings → OAuth Apps → New OAuth App:

- **Homepage URL**: `https://magalhaeserocha.com.br`
- **Authorization callback URL**: `https://<seu-projeto>.vercel.app/api/complete`

Copie o Client ID e gere um Client Secret — esses são os valores de
`OAUTH_CLIENT_ID` / `OAUTH_CLIENT_SECRET` acima.

## Depois do deploy

Atualize `public/admin/config.yml` na raiz do projeto:

```yaml
backend:
  base_url: https://<seu-projeto>.vercel.app
  auth_endpoint: api/begin
```
