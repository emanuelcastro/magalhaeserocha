# Projeto: Site magalhaeserocha.com.br

## Contexto / histórico

- Domínio `magalhaeserocha.com.br` estava registrado no Registro.br e hospedado
  na Hostinger (WordPress, tema "Globaly"), sob a conta `rosinemagalhaes.adv@gmail.com`.
- A renovação da hospedagem falhou (pagamentos recusados out/nov 2025) e o
  plano "Premium Web Hosting" expirou em 11/11/2025. Confirmado no hPanel:
  não há mais assinatura ativa nem site listado — hospedagem e arquivos foram
  excluídos definitivamente pela Hostinger.
- O domínio em si foi comprado novamente pelo usuário, direto no Registro.br
  (ainda de posse dele — só precisa apontar o DNS para a nova hospedagem).
- Não há backup recuperável na Hostinger. Não foi confirmado ainda se há
  capturas úteis no Wayback Machine (web.archive.org/web/*/magalhaeserocha.com.br) —
  verificar como referência visual opcional.

## Decisão de stack (já validada com o usuário)

- **Hospedagem:** GitHub Pages (gratuito, HTTPS automático, domínio custom via
  DNS no Registro.br).
- **Gerador de site:** Astro (estático, rápido, bom SEO).
- **CMS para posts/notícias:** Decap CMS (open source, gratuito) — painel em
  `/admin` para criar/editar posts em Markdown, commitando direto no repo.
  GitHub Actions faz o rebuild automático a cada commit.
- **Autenticação do CMS:** exige um pequeno OAuth provider (não roda em GitHub
  Pages). Solução: deploy de um template pronto no Vercel (free tier) + criar
  um "OAuth App" no GitHub. Esses dois passos exigem login nas contas do
  usuário, então ficam por conta dele (~10 min, com passo a passo do Claude).
- **Formulário de contato:** usar serviço terceiro tipo Formspree ou EmailJS
  (GitHub Pages não roda backend).
- **E-mail:** independente da hospedagem do site — @magalhaeserocha.com.br
  pode continuar via Titan Email (Hostinger), Zoho Mail grátis, ou Google
  Workspace. Não afeta nem é afetado pela escolha acima.

## Configuração de DNS necessária (Registro.br → GitHub Pages)

- 4 registros A no domínio raiz apontando para:
  185.199.108.153 / .109.153 / .110.153 / .111.153
- 1 registro CNAME em `www` apontando para `usuario.github.io`

## Pendências de conteúdo (usuário ainda não enviou)

1. Nome do escritório e advogados que devem aparecer (nomes completos, OAB se
   quiser exibir). Domínio sugere "Magalhães e Rocha Advogados"; confirmar
   sócios/atuantes (Rosinê Magalhães confirmada como titular da conta).
2. Áreas de atuação (Direito Trabalhista é uma; quais outras?).
3. Contato: telefone/WhatsApp, e-mail, endereço físico ou "atendimento remoto".
4. Logo/fotos existentes, ou começar só com tipografia/paleta de cores.
5. Tom visual: tradicional/sóbrio vs. moderno/direto.

## Requisito confirmado

- O site PRECISA de uma área de notícias/publicações (posts), gerenciável sem
  precisar mexer em código — daí a escolha do Decap CMS.

## Próximos passos

1. Usuário fornece os dados de conteúdo acima.
2. Claude monta a primeira versão: estrutura Astro (Início, Áreas de Atuação,
   Sobre, Notícias/Publicações, Contato) + configuração do Decap CMS
   (`/admin/config.yml`) + GitHub Actions de build.
3. Usuário cria o repositório no GitHub, configura o custom domain no Pages,
   e ajusta o DNS no Registro.br.
4. Usuário cria o OAuth App no GitHub e faz o deploy do template de OAuth
   provider no Vercel (passo a passo fornecido pelo Claude).
5. Testar publicação de posts via `/admin` e confirmar build automático.
