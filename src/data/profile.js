// ─────────────────────────────────────────────────────────────
//  EDITE AQUI  →  todos os dados do site ficam neste arquivo
// ─────────────────────────────────────────────────────────────

export const profile = {
  nome: 'Lara Azevedo',
  arroba: '@azevedo.model',
  titulo: 'UGC Creator',
  subtitulo: 'Criadora de conteúdo',
  local: 'Curitiba · PR',
  email: 'laraazisa94@gmail.com',

  // Número com DDI + DDD (só números)
  whatsapp: '554192378354',
  whatsappVisivel: '(41) 9237-8354',

  instagram: 'https://instagram.com/azevedo.model'
}

// ⚠️ Confira e atualize estes numeros de tempos em tempos — mídia kit com
// número velho passa impressão ruim. A data abaixo aparece no site.
export const audiencia = {
  atualizadoEm: 'agosto de 2026',
  metricas: [
    {
      icone: 'insta',
      prefixo: '+',
      valor: 14,
      unidade: 'mil',
      label: 'Seguidores',
      desc: 'Audiência acompanhando meus conteúdos de beleza, maquiagem e skincare.'
    },
    {
      icone: 'play',
      prefixo: '+',
      valor: 3,
      unidade: 'milhões',
      label: 'Visualizações',
      desc: 'Somadas nos vídeos que já produzi.'
    }
  ]
}

export const parceiros = [
  {
    nome: 'Follow Nutrition',
    categoria: 'Nutrição & skincare',
    descricao: 'Suplementos, nutrição e skincare — cuidado que começa de dentro pra fora.',
    cta: 'Acessar com meu convite',
    url: 'https://follownutrition.com.br/convite/?ref=larissa&utm_source=larissa&utm_medium=instagram&utm_campaign=lancamento&utm_content=link_in_bio',
    // salve o logo em public/media/ com este nome; se o arquivo nao existir,
    // o card mostra a letra de 'inicial' no lugar
    logo: './media/parceiro-follow-nutrition.png',
    logoW: 1080, logoH: 350,
    inicial: 'F'
  },
  {
    nome: 'Saint Germain',
    categoria: 'Acessórios & presentes',
    descricao: 'Relógios, óculos, joias e presentes que combinam com qualquer produção.',
    cta: 'Conhecer a marca',
    url: 'https://www.saintgermainbrand.com.br/',
    logo: './media/parceiro-saint-germain.png',
    logoW: 1044, logoH: 333,
    inicial: 'S'
  }
]

export const whatsappLink =
  `https://wa.me/${profile.whatsapp}?text=` +
  encodeURIComponent('Oi Lara! Vi seu mídia kit e quero falar sobre uma parceria ✨')

export const mailtoLink =
  `mailto:${profile.email}?subject=` +
  encodeURIComponent('Parceria com Lara Azevedo') +
  '&body=' +
  encodeURIComponent('Oi Lara! Encontrei seu mídia kit e gostaria de falar sobre uma parceria.')

export const nichos = [
  'Maquiagem', 'Skincare', 'Autocuidado', 'Reviews reais', 'Beleza', 'Dicas práticas'
]

export const servicos = [
  {
    icone: 'video',
    titulo: 'Vídeos UGC',
    texto: 'Vídeos autênticos em formato vertical, prontos para Reels, TikTok e anúncios — do roteiro à entrega.',
    tags: ['Reels', 'TikTok', 'Vertical 9:16']
  },
  {
    icone: 'batom',
    titulo: 'Review de produto',
    texto: 'Demonstração honesta de uso, textura e resultado. O tipo de conteúdo que faz a pessoa querer testar.',
    tags: ['Unboxing', 'Antes e depois', 'Aplicação']
  },
  {
    icone: 'camera',
    titulo: 'Fotos para marca',
    texto: 'Fotos limpas e bem iluminadas do produto em uso, prontas para feed, catálogo e campanhas.',
    tags: ['Feed', 'Still', 'Lifestyle']
  },
  {
    icone: 'brilho',
    titulo: 'Tutorial & Get Ready',
    texto: 'Passo a passo de maquiagem e skincare com o produto integrado de forma natural na rotina.',
    tags: ['GRWM', 'Passo a passo', 'Rotina']
  },
  {
    icone: 'megafone',
    titulo: 'Publi & Divulgação',
    texto: 'Publicação no meu perfil com legenda estratégica, stories e link direcionando para a marca.',
    tags: ['Post', 'Stories', 'Link na bio']
  },
  {
    icone: 'camadas',
    titulo: 'Campanha completa',
    texto: 'Pacote com múltiplos vídeos e fotos para você abastecer feed e anúncios com variação de criativo.',
    tags: ['Pacote', 'Criativos', 'Recorrência']
  }
]

export const videos = [
  { src: './media/video-1.mp4', poster: './media/poster-1.jpg', titulo: 'Skincare em ação', tag: 'UGC · Skincare' },
  { src: './media/video-2.mp4', poster: './media/poster-2.jpg', titulo: 'Review de produto', tag: 'UGC · Review' },
  { src: './media/video-3.mp4', poster: './media/poster-3.jpg', titulo: 'Rotina de beleza', tag: 'UGC · Rotina' }
]

export const fotos = [
  { src: './media/foto-1.jpg', w: 702, h: 1239, titulo: 'Aplicação de sérum' },
  { src: './media/foto-2.jpg', w: 704, h: 1521, titulo: 'Produto em uso' },
  { src: './media/foto-3.jpg', w: 704, h: 1521, titulo: 'Detalhe do produto' }
]

export const diferenciais = [
  { numero: '100%', label: 'Conteúdo autêntico', desc: 'Nada de script decorado — review real, do jeito que eu falaria com uma amiga.' },
  { numero: '9:16', label: 'Formato nativo', desc: 'Gravado pensando em Reels, TikTok e Stories: vertical, dinâmico e com boa retenção.' },
  { numero: '48h', label: 'Entrega ágil', desc: 'Prazo médio de entrega dos brutos e da edição depois do produto em mãos.' }
]

// ⚠️ Estas dicas são um ponto de partida — reescreva com as suas palavras
// e com os produtos que você realmente usa e indica.
export const dicas = [
  {
    cat: 'Skincare',
    icone: '☀️',
    titulo: 'Protetor solar é inegociável — inclusive em dia nublado',
    texto:
      'Não adianta gastar com sérum caro e pular o protetor. Ele é o que segura mancha, ' +
      'textura e linha fina lá na frente. Passa de manhã e reaplica a cada 3 horas se ' +
      'você fica perto de janela ou sai de casa.'
  },
  {
    cat: 'Skincare',
    icone: '🧪',
    titulo: 'Um ativo novo por vez, com 15 dias de intervalo',
    texto:
      'Montar rotina de 10 passos de uma vez é o caminho mais rápido pra irritar a pele — ' +
      'e você nunca vai saber qual produto causou. Introduz um, espera duas semanas, ' +
      'observa. Aí sim entra o próximo.'
  },
  {
    cat: 'Skincare',
    icone: '🌙',
    titulo: 'Vitamina C de manhã, ácido à noite',
    texto:
      'Vitamina C protege durante o dia e combina com o protetor solar. Já ácidos e ' +
      'retinóides pedem a noite, longe do sol. Misturar tudo no mesmo horário costuma ' +
      'dar ardência e descamação sem entregar resultado.'
  },
  {
    cat: 'Maquiagem',
    icone: '💧',
    titulo: 'Espera 2 minutos entre o hidratante e a base',
    texto:
      'Base em cima de pele ainda úmida escorrega e craquela no meio do dia. Passa o ' +
      'hidratante, deixa absorver de verdade, e só então a base. Muda completamente o acabamento.'
  },
  {
    cat: 'Maquiagem',
    icone: '🎨',
    titulo: 'Testa a base na mandíbula, com luz natural',
    texto:
      'No dorso da mão o tom é diferente do rosto, e a luz da loja engana. Passa uma ' +
      'listra na linha da mandíbula e vai até a janela: a cor certa some na pele em vez ' +
      'de marcar onde acaba.'
  },
  {
    cat: 'Maquiagem',
    icone: '🌸',
    titulo: 'Produto cremoso antes do pó, sempre',
    texto:
      'Blush e iluminador em creme vão por cima da base e por baixo do pó. Se você ' +
      'inverte, o cremoso levanta o pó e fica aquele aspecto de manchado.'
  },
  {
    cat: 'Autocuidado',
    icone: '🧼',
    titulo: 'Pincel sujo é a causa daquela espinha que não vai embora',
    texto:
      'Pincel acumula oleosidade, pele morta e bactéria. Lava com sabonete neutro a ' +
      'cada 15 dias e deixa secar deitado, nunca em pé — água escorrendo pro cabo ' +
      'solta a cola e o pincel começa a perder pelo.'
  },
  {
    cat: 'Autocuidado',
    icone: '🛏️',
    titulo: 'Dormir de maquiagem custa mais caro que a maquiagem',
    texto:
      'Uma noite já entope poro e resseca. Se estiver exausta, o mínimo é água micelar ' +
      'e um hidratante — leva 40 segundos e sua pele acorda outra.'
  }
]

export const dicasCategorias = ['Todas', 'Skincare', 'Maquiagem', 'Autocuidado']

export const passos = [
  { n: '01', t: 'Briefing', d: 'Você me conta sobre o produto, o público e o que quer destacar.' },
  { n: '02', t: 'Roteiro', d: 'Monto a ideia do conteúdo alinhada com a linguagem da marca.' },
  { n: '03', t: 'Gravação', d: 'Produzo o material com boa luz, som limpo e uso real do produto.' },
  { n: '04', t: 'Entrega', d: 'Você recebe os arquivos editados e prontos para publicar.' }
]
