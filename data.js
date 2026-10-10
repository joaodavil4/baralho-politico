// 32 cartas do baralho "Isso é bom ou ruim?"
// 1–16: Lula (♥ 1–8, ♠ 9–16) · 17–32: Flávio Bolsonaro (♦ 17–24, ♣ 25–32)
const CANDIDATES = {
  lula:   { name: "Lula",             short: "Lula",   color: "#b3122b", dark: "#7d0b1e" },
  flavio: { name: "Flávio Bolsonaro", short: "Flávio", color: "#1e3f7a", dark: "#122850" },
};

const CARDS = [
  { n: 1, src: "https://tr.ee/P3CnvVp1fQ0i",  who: "lula",   tag: "economia",            text: "O Brasil tem um único dono: o povo brasileiro." },
  { n: 2, src: "https://tr.ee/Uii3CdShBwxl",  who: "lula",   tag: "economia",            text: "Defender nossas riquezas é defender nossa soberania." },
  { n: 3, src: "https://tr.ee/RuBjxDsa20u6",  who: "lula",   tag: "direitostrabalhistas", text: "Adotar jornada de trabalho com duas folgas por semana, sem redução de salário." },
  { n: 4, src: "https://tr.ee/dHGAbK07EeNi",  who: "lula",   tag: "seguranca",           text: "Fortalecer a autonomia da Polícia Federal." },
  { n: 5, src: "https://tr.ee/lmLDolxxmbe8",  who: "lula",   tag: "seguranca",           text: "Combater o crime organizado, atacando as suas fontes financeiras." },
  { n: 6, src: "https://tr.ee/6Y0k0NSEqYAf",  who: "lula",   tag: "educacao",            text: "Aumentar vagas nas universidades." },
  { n: 7, src: "https://tr.ee/Cp5ld7d74eJz",  who: "lula",   tag: "educacao",            text: "Manter cotas para Indígenas, Quilombolas e Negros nas universidades e concursos públicos." },
  { n: 8, src: "https://tr.ee/QHoDIaW0s76S",  who: "lula",   tag: "reformatributaria",   text: "Cobrar impostos dos super-ricos para melhorar saúde, educação e segurança." },
  { n: 9, src: "https://tr.ee/uAb6X5qlvgko",  who: "lula",   tag: "soberania",           text: "Regular as redes sociais para preservar a Democracia e combater as fake news e os crimes digitais." },
  { n: 10, src: "https://tr.ee/10EPtzvJ411n", who: "lula",   tag: "programassociais",    text: "Reforçar programas sociais para reduzir a pobreza." },
  { n: 11, src: "https://tr.ee/JmgHvVIK4FBU", who: "lula",   tag: "direitostrabalhistas", text: "Garantir o aumento anual do salário mínimo acima da inflação." },
  { n: 12, src: "https://tr.ee/2Sc5Lu0f8PPN", who: "lula",   tag: "programassociais",    text: "Aumentar o número de creches." },
  { n: 13, src: "https://tr.ee/SQUb1SmH42wq", who: "lula",   tag: "saude",               text: "Fortalecer o SUS para garantir saúde para todos." },
  { n: 14, src: "https://tr.ee/DMZ1zvaCDaw3", who: "lula",   tag: "defesadamulher",      text: "Fortalecer a Casa da Mulher Brasileira para acolher vítimas de violência doméstica." },
  { n: 15, src: "https://tr.ee/YyTiU7HM7WL7", who: "lula",   tag: "seguranca",           text: "Criação do Sistema Único de Segurança semelhante ao SUS." },
  { n: 16, src: "https://tr.ee/S0B0B1E97d8N", who: "lula",   tag: "saude",               text: "Ampliar o Programa das Carretas de Saúde com Especialistas." },

  { n: 17, src: "https://tr.ee/UoEx65lF6nZF", who: "flavio", tag: "economia",            text: "Apoiar o tarifaço imposto por Trump." },
  { n: 18, src: "https://tr.ee/IRpAL11u7tZb", who: "flavio", tag: "economia",            text: "Oferecer o Brasil para exploração dos Estados Unidos." },
  { n: 19, src: "https://tr.ee/FXJPpBwpARsu", who: "flavio", tag: "meioambiente",        text: "Não reconhecer as mudanças climáticas e apostar que saneamento básico é suficiente para enfrentar os desafios que estão surgindo." },
  { n: 20, src: "https://tr.ee/r3qicEHilUxB", who: "flavio", tag: "saude",               text: "Fazer parte de grupos antivacinas." },
  { n: 21, src: "https://tr.ee/G865aP0aFgA0", who: "flavio", tag: "seguranca",           text: "Defender o armamento da população." },
  { n: 22, src: "https://tr.ee/aWboVks4X5lT", who: "flavio", tag: "democracia",          text: "Defender anistia para os golpistas." },
  { n: 23, src: "https://tr.ee/q80ubrYZId3Z", who: "flavio", tag: "privatizacao",        text: "Parcerias público-privadas na educação e universidades públicas fora do MEC." },
  { n: 24, src: "https://tr.ee/uu6vzXHD7U5j", who: "flavio", tag: "estadominimo",        text: "Adotar o “tesouraço” (cortes extremos) nos gastos públicos." },
  { n: 25, src: "https://tr.ee/h17vk7S01piQ", who: "flavio", tag: "diversidade",         text: "Mudar a Lei do Racismo retirando a punição do agressor." },
  { n: 26, src: "https://tr.ee/m0iExcVCaq4R", who: "flavio", tag: "democracia",          text: "Afirmar que mulheres solteiras votam mal." },
  { n: 27, src: "https://tr.ee/P4cnvYcH4gdq", who: "flavio", tag: "direitostrabalhistas", text: "Afirmar que contratar mulheres dá prejuízo para o patrão." },
  { n: 28, src: "https://tr.ee/zOoIqlwZDYK2", who: "flavio", tag: "estadominimo",        text: "Cortar programas sociais." },
  { n: 29, src: "https://tr.ee/m4nC9mwZT0Xh", who: "flavio", tag: "direitostrabalhistas", text: "Congelar o salário-mínimo e aposentadorias." },
  { n: 30, src: "https://tr.ee/ySUaZPPBLM49", who: "flavio", tag: "estadominimo",        text: "Acabar com o SUS e adotar saúde somente para quem puder pagar." },
  { n: 31, src: "https://tr.ee/aW1h8Pyq2v1n", who: "flavio", tag: "direitostrabalhistas", text: "Acabar com as leis trabalhistas deixando cada empregado negociar direto com o patrão." },
  { n: 32, src: "https://tr.ee/jeBg9jv4F1r6", who: "flavio", tag: "corrupcao",           text: "Manter inexplicada a relação próxima com Vorcaro, do Banco Master, e os pedidos e recebimentos de dinheiro que realizou." },
];

// naipe e número como impressos nas cartas originais (aparecem só no verso)
function suitOf(n) {
  const rank = n === 1 ? "Ás" : String(n);
  if (n <= 8)  return { sym: "♥", name: "Copas",   rank, label: `${rank} de Copas` };
  if (n <= 16) return { sym: "♠", name: "Espadas", rank, label: `${rank} de Espadas` };
  if (n <= 24) return { sym: "♦", name: "Ouros",   rank, label: `${rank} de Ouros` };
  return        { sym: "♣", name: "Paus",    rank, label: `${rank} de Paus` };
}
