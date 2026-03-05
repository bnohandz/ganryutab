export const topics = [
  {
    slug: "samurais-e-bushido",
    title: "Samurais e o código de honra Bushidō",
    intro: "Lealdade, disciplina e autocontrole moldaram a imagem do samurai.",
    story: [
      "Durante séculos, os samurais formaram a elite guerreira do Japão. Eles não eram apenas soldados: também atuavam como administradores, guardiões de províncias e conselheiros políticos.",
      "O Bushidō, conhecido como 'caminho do guerreiro', reuniu valores como coragem, retidão, respeito e honra pessoal. A reputação de uma família samurai dependia dessas virtudes no campo de batalha e na vida cotidiana.",
      "Com o fim das guerras internas e a modernização do Japão no século XIX, a classe samurai perdeu privilégios formais, mas o ideal de disciplina e dever continuou influenciando a cultura japonesa.",
    ],
  },
  {
    slug: "guerreiros-da-era-sengoku",
    title: "Grandes guerreiros da era Sengoku",
    intro:
      "A era dos estados em guerra revelou estrategistas que redefiniram o Japão.",
    story: [
      "Entre os séculos XV e XVI, o período Sengoku foi marcado por disputas constantes entre daimyōs. Nesse cenário surgiram líderes como Oda Nobunaga, Toyotomi Hideyoshi e Tokugawa Ieyasu.",
      "Nobunaga enfraqueceu antigos poderes regionais com campanhas ousadas. Hideyoshi consolidou boa parte do território e promoveu reformas administrativas importantes.",
      "Ieyasu concluiu o processo de unificação após a Batalha de Sekigahara (1600), abrindo caminho para o xogunato Tokugawa e para um longo período de estabilidade política.",
    ],
  },
  {
    slug: "vida-no-periodo-edo",
    title: "A vida no Japão durante o período Edo",
    intro: "Paz prolongada, crescimento urbano e cultura popular em expansão.",
    story: [
      "O período Edo (1603-1868) foi governado pelo xogunato Tokugawa. Com menos guerras entre clãs, cidades como Edo, Osaka e Kyoto cresceram com intenso comércio e vida cultural.",
      "Classes sociais eram rigidamente definidas, mas a economia urbana criou novas dinâmicas. Mercadores ganharam influência e financiaram teatros, artes e entretenimento.",
      "Foi nesse ambiente que prosperaram o kabuki, as gravuras ukiyo-e e bairros populares vibrantes, retratando o cotidiano de artesãos, comerciantes e viajantes.",
    ],
  },
  {
    slug: "lendas-miyamoto-musashi",
    title: "A história de lendas como Miyamoto Musashi",
    intro:
      "Duelo, estratégia e filosofia na trajetória de um espadachim lendário.",
    story: [
      "Miyamoto Musashi (c. 1584-1645) ficou famoso por vencer numerosos duelos e por desenvolver um estilo de combate com duas espadas, o Niten Ichi-ryū.",
      "Seu confronto com Sasaki Kojirō, na ilha de Ganryū, tornou-se uma das narrativas mais conhecidas da tradição marcial japonesa.",
      "Nos últimos anos de vida, Musashi escreveu o 'Livro dos Cinco Anéis', obra que combina tática, percepção e mentalidade estratégica, ainda estudada em artes marciais e gestão.",
    ],
  },
  {
    slug: "costumes-cultura-japonesa-antiga",
    title: "Costumes e curiosidades da cultura japonesa antiga",
    intro:
      "Rituais e hábitos diários revelam a profundidade da tradição japonesa.",
    story: [
      "A etiqueta social sempre teve papel central no Japão. Cumprimentos, linguagem respeitosa e regras de convivência ajudavam a manter harmonia em comunidades e cortes.",
      "O chá, as cerimônias sazonais e o cuidado com vestimentas como o quimono expressavam estética e simbolismo. Cada ocasião pedia padrões de comportamento específicos.",
      "Também era comum a transmissão oral de lendas locais, festivais religiosos e práticas artesanais, conectando família, território e memória coletiva.",
    ],
  },
  {
    slug: "literatura-conto-de-genji",
    title: "Literatura clássica como o Conto de Genji",
    intro:
      "A sofisticação literária da corte Heian influenciou séculos de arte.",
    story: [
      "Escrito por Murasaki Shikibu no século XI, o 'Conto de Genji' é frequentemente considerado um dos primeiros grandes romances do mundo.",
      "A obra acompanha a vida de Hikaru Genji e descreve relações políticas, emocionais e sociais da aristocracia de Heian com sensibilidade psicológica rara para a época.",
      "Além do valor histórico, o livro moldou poesia, pintura e teatro japoneses, tornando-se referência permanente na formação cultural do país.",
    ],
  },
  {
    slug: "castelos-tradicoes-filosofia",
    title: "Castelos, tradições e filosofia do Japão feudal",
    intro:
      "Arquitetura militar e pensamento ético lado a lado na história japonesa.",
    story: [
      "Castelos como Himeji e Matsumoto eram centros defensivos e administrativos. Sua engenharia combinava muralhas, fossos e torres com atenção ao relevo local.",
      "Ao redor desses castelos, surgiram cidades-castelo que organizavam comércio, moradia e serviços sob a autoridade dos senhores feudais.",
      "Ao mesmo tempo, correntes filosóficas como o confucionismo e o zen influenciaram decisões políticas, educação e a noção de dever entre governantes e guerreiros.",
    ],
  },
];

export function getTopicBySlug(slug) {
  return topics.find((topic) => topic.slug === slug);
}
