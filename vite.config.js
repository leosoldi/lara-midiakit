import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // './' gera caminhos relativos nos assets — o site funciona tanto na raiz
  // do domínio (larazevedo.com.br) quanto dentro de uma subpasta
  // (meusite.com/midiakit). Só troque se for usar rotas de verdade.
  base: './',

  server: {
    host: true,   // permite abrir pelo IP da rede local, para testar no celular
    port: 5173
  },

  preview: {
    host: true,
    port: 4173
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',

    // navegadores dos últimos ~3 anos, incluindo Safari do iPhone
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],

    // sem sourcemap em produção: não expõe o código-fonte e deixa o build menor
    sourcemap: false,

    // arquivos até 4kb viram data URI (menos requisições);
    // acima disso vira arquivo com hash no nome
    assetsInlineLimit: 4096,

    cssCodeSplit: true,
    reportCompressedSize: true,

    // avisa só se algum chunk passar de 600kb
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // separa as bibliotecas do seu código: quando você editar um texto do
        // site, o visitante rebaixa só o seu bundle, e o react/framer continuam
        // vindo do cache do navegador
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion']
        },

        // nomes com hash — quando o conteúdo muda, o nome muda, e o navegador
        // é obrigado a baixar a versão nova (mata problema de "atualizei mas
        // continua aparecendo o site antigo")
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})
