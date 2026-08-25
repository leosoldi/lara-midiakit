# Mídia Kit — Lara Azevedo (@azevedo.model)

Site de mídia kit em **React + Vite**, mobile-first, com animações em `framer-motion`.

## Rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:5173 (o servidor escuta na rede local, então dá pra abrir no celular
usando o IP da máquina, ex.: `http://192.168.0.10:5173`).

Para gerar a versão final:

```bash
npm run build
```

Os arquivos prontos ficam em `dist/` — é só subir essa pasta em Vercel, Netlify, GitHub Pages
ou qualquer hospedagem estática. O `base` do Vite está como `'./'`, então funciona até em subpasta.

Para conferir o build de produção antes de subir:

```bash
npm run preview
```

## Publicar

### Antes de subir (obrigatório)

Abra `index.html` e troque `https://SEU-DOMINIO.com.br` pelo endereço real do site.
Ele aparece em 3 lugares (`canonical`, `og:url`, `og:image` / `twitter:image`).

Sem isso o site funciona normalmente, mas **o preview do link no WhatsApp e no Instagram
não mostra a foto** — essas tags exigem URL absoluta, caminho relativo não vale.

### Vercel / Netlify

Conecte o repositório e use:

- Build command: `npm run build`
- Output directory: `dist`

Ou, sem repositório, arraste a pasta `dist/` na área de deploy manual do Netlify.

### Hospedagem comum (cPanel, FTP)

Rode `npm run build` e mande **o conteúdo** da pasta `dist/` para a pasta pública do
servidor (`public_html`, `www` ou similar). Não precisa de Node no servidor — o site é
só HTML, CSS, JS e mídia.

### GitHub Pages

Publique o conteúdo de `dist/` na branch `gh-pages`. O `base: './'` já cobre o caso de
o site ficar em `usuario.github.io/repositorio/`.

## Onde editar

**Tudo que é texto, link e mídia está em `src/data/profile.js`** — não precisa mexer em componente.

| O que | Onde |
| --- | --- |
| Nome, @, e-mail, cidade, WhatsApp | `profile` |
| Nichos da faixa rolante | `nichos` |
| Cards de serviços | `servicos` |
| Vídeos do portfólio | `videos` |
| Fotos do portfólio | `fotos` |
| Seguidores / visualizações | `audiencia` |
| Números do "Sobre" | `diferenciais` |
| Marcas parceiras | `parceiros` |
| Etapas do "Como funciona" | `passos` |

> **WhatsApp**: o campo `whatsapp` em `src/data/profile.js` guarda o número no formato
> do link (`554192378354` = 55 + 41 + 92378354). Se o link não abrir a conversa, o número
> provavelmente tem o 9 extra de celular: troque para `5541992378354`.

### Trocar fotos e vídeos

Coloque os arquivos em `public/media/` e aponte o caminho em `profile.js` usando `./media/...`.
A foto de capa é `public/media/capa.jpg`.

## Cores

Definidas como variáveis CSS no topo de `src/styles.css`:

- Rosa claro de fundo: `--pink-50` `#FFF6FA`
- Rosas: `--pink-100/200/300/500`
- Roxo de destaque: `--violet` `#8B3DFF`
- Preto: `--ink` `#0A0A0B`
- Cinza claro: `--grey` `#F3F4F7`

## Detalhes de mobile

- Barra fixa inferior (`Dock`) com WhatsApp, Instagram e e-mail — some no desktop.
- Vídeos verticais 9:16 tocam sozinhos, mudos, só quando entram na tela (economiza bateria e dados),
  com botão pra ligar o som.
- `safe-area-inset` respeitado em iPhone com notch.
- Animações desligadas automaticamente para quem usa "reduzir movimento" no sistema.
