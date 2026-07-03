# Projeto: Site magalhaeserocha.com.br

## Contexto / histórico

- Domínio `magalhaeserocha.com.br` estava registrado no Registro.br e hospedado
  na Hostinger (WordPress, tema "Globaly"), sob a conta `rosinemagalhaes.adv@gmail.com`.
- A renovação da hospedagem falhou (pagamentos recusados out/nov 2025) e o
  plano "Premium Web Hosting" expirou em 11/11/2025. Hospedagem e arquivos
  antigos foram excluídos definitivamente pela Hostinger — sem backup
  recuperável.
- O domínio foi recomprado pelo usuário no Registro.br (uso do DNS automático
  do próprio Registro.br, não nameservers externos).

## Stack (implementada)

- **Repositório:** [emanuelcastro/magalhaeserocha](https://github.com/emanuelcastro/magalhaeserocha)
  (público — necessário para GitHub Pages gratuito).
- **Site:** Astro, deploy automático via GitHub Actions (`.github/workflows/deploy.yml`)
  a cada push em `main`. GitHub Pages configurado com `build_type: workflow`.
- **CMS:** Decap CMS em `/admin`, collection `noticias` (`src/content/noticias/`,
  schema em `src/content.config.ts`). Login via backend `github`, autenticado
  por um provedor OAuth próprio em `oauth-provider/` (baseado em
  `netlify-cms-oauth-provider-node`), publicado no Vercel em
  `magalhaeserocha.vercel.app`. Já testado e funcionando de ponta a ponta
  (login → publicar → build automático).
- **Identidade visual:** logo real (monograma "MR", navy `#0a4d6e` + coral
  `#f1544f`), tipografia Fraunces (display) + Archivo (corpo/UI), auto-hospedadas
  em `public/fonts/` (sem CDN externo).
- **Conteúdo de referência:** `content/areas-atuacao.md` guarda o texto integral
  das 7 áreas de atuação (fonte: PDF fornecido pelo usuário) — a homepage usa
  versões resumidas; útil se algum dia criarmos páginas individuais por área.

## Pendente (aguardando o usuário)

1. **DNS no Registro.br** — domínio estava "em transição" (recompra recente),
   bloqueando edição da zona DNS. Registros a adicionar assim que liberar:
   - 4x A em `@`: `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
   - 1x CNAME em `www` → `emanuelcastro.github.io`
   Sem isso, `magalhaeserocha.com.br` não resolve (site só acessível via
   `magalhaeserocha.vercel.app`-like preview ou localhost).
2. **Google Business Profile** — ainda não existe. Usuário vai criar em
   business.google.com (exige verificação, pode levar dias). Quando tiver o
   link do perfil, adicionar bloco "nota média + botão para ver avaliações no
   Google" na seção de contato (decisão já tomada: link direto, não widget
   pago nem depoimentos manuais).
3. **Formulário de contato** — ainda não implementado (hoje o site só tem
   WhatsApp como CTA). Avaliar Formspree/EmailJS quando fizer sentido.
4. **E-mail do escritório** — independente da hospedagem do site; decidir
   entre Titan (Hostinger), Zoho Mail grátis ou Google Workspace.
5. **Endereço físico** — hoje o site não menciona endereço (só "Fortaleza/CE"
   e telefone). Confirmar se é atendimento remoto, presencial com endereço, ou
   ambos.

## Conteúdo confirmado

- Sócias: Dra. Rosinê Magalhães (OAB/CE 22.838, trabalhista/acidentes de
  trabalho) e Dra. Larissa Rocha (OAB/CE 39.149, LGPD/digital/empresarial).
- 7 áreas de atuação (ver `content/areas-atuacao.md`): Direito do Trabalho,
  Acidente de Trabalho e Doenças Ocupacionais, Direito Empresarial, Proteção
  de Dados/LGPD, Direito Digital, Direito Civil, Direito do Consumidor.
- Contato: WhatsApp (85) 99937-1776.
- Logo e fotos das sócias em `public/images/`.
