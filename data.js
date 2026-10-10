// 32 cartas do baralho original + 18 extras de Flávio "Isso é bom ou ruim?"
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
  // Cartas extras (n 33+): propostas e falas de Flávio Bolsonaro com fonte jornalística.
  { n: 33, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "seguranca", text: "Reduzir a maioridade penal para 16 anos, com punição a partir de 14 anos em crimes graves." },
  { n: 34, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "seguranca", text: "Criar 500 mil vagas em presídios em quatro anos e cinco presídios federais de segurança máxima." },
  { n: 35, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "seguranca", text: "Castração química para estupradores e abusadores de crianças condenados." },
  { n: 36, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "seguranca", text: "Criar a \u201CMuralha Brasileira\u201D: reconhecimento facial com mais de 1 milhão de câmeras em áreas públicas, portos e aeroportos." },
  { n: 37, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "estadominimo", text: "Cortar pelo menos 10 ministérios e reduzir cargos comissionados." },
  { n: 38, extra: true, kind: "plano", srcName: "Acessa", src: "https://www.acessa.com/politica/2026/09/340114-flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca.html", who: "flavio", tag: "economia", text: "Cortar gastos como principal medida para forçar a queda dos juros." },
  { n: 39, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "direitostrabalhistas", text: "Reduzir gradualmente o custo de contratação \u201Csem retirar direitos\u201D e criar contratos específicos para jovens de 18 a 24 anos." },
  { n: 40, extra: true, kind: "plano", srcName: "Diário de Pernambuco", src: "https://www.diariodepernambuco.com.br/politica/2026/10/11725729-tse-disponibiliza-plano-dos-candidatos-a-presidencia-da-republica-veja-principais-pontos.html", who: "flavio", tag: "educacao", text: "Criar um voucher-creche para famílias sem vaga." },
  { n: 41, extra: true, kind: "plano", srcName: "Acessa", src: "https://www.acessa.com/politica/2026/09/340114-flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca.html", who: "flavio", tag: "educacao", text: "Trocar o método de alfabetização pelo método fônico." },
  { n: 42, extra: true, kind: "plano", srcName: "Acessa", src: "https://www.acessa.com/politica/2026/09/340114-flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca.html", who: "flavio", tag: "educacao", text: "Criar mais escolas cívico-militares." },
  { n: 43, extra: true, kind: "plano", srcName: "Acessa", src: "https://www.acessa.com/politica/2026/09/340114-flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca.html", who: "flavio", tag: "educacao", text: "Transferir o ensino superior do MEC para o Ministério da Ciência, Tecnologia e Inovação." },
  { n: 44, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "saude", text: "Usar a rede privada de saúde em horários ociosos e ampliar a telessaúde." },
  { n: 45, extra: true, kind: "plano", srcName: "Acessa", src: "https://www.acessa.com/politica/2026/09/340114-flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca.html", who: "flavio", tag: "meioambiente", text: "Flexibilizar o licenciamento ambiental, com autolicenciamento quando o prazo de emissão expira, e liberar o fracking." },
  { n: 46, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "meioambiente", text: "Zerar o desmatamento ilegal até 2029." },
  { n: 47, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "democracia", text: "Limitar decisões monocráticas de ministros do STF e alterar suas competências." },
  { n: 48, extra: true, kind: "plano", srcName: "Portal Tela", src: "https://www.portaltela.com/politica/2026/08/14/plano-de-governo-de-flavio-bolsonaro-tem-9-eixos-veja-propostas/", who: "flavio", tag: "democracia", text: "Acabar com a reeleição para presidente." },
  { n: 49, extra: true, kind: "fala", srcName: "Band", src: "https://www.band.com.br/noticias/flavio-bolsonaro-propoe-pacote-da-paz-com-anistia-a-condenados-do-81-e-impeachment-de-moraes-202508051145", who: "flavio", tag: "democracia", text: "Defender anistia ampla, geral e irrestrita aos condenados do 8 de janeiro e o impeachment de Alexandre de Moraes." },
  { n: 50, extra: true, kind: "fala", srcName: "O Hoje", src: "https://ohoje.com/2025/12/05/flavio-bolsonaro-confirma-ser-o-escolhido-pelo-pai/", who: "flavio", tag: "democracia", text: "O meu preço é o Bolsonaro livre e nas urnas. Ou seja, não tem preço." },
];

// naipe e número como impressos nas cartas originais (aparecem só no verso)
function suitOf(n) {
  // cartas extras de Flávio: seguem os naipes dele (ouros/paus) e a numeração continua em 33
  if (n > 32) {
    const ouros = n % 2 === 1;
    return { sym: ouros ? "♦" : "♣", name: ouros ? "Ouros" : "Paus", rank: String(n), label: `${n} de ${ouros ? "Ouros" : "Paus"}` };
  }
  const rank = n === 1 ? "Ás" : String(n);
  if (n <= 8)  return { sym: "♥", name: "Copas",   rank, label: `${rank} de Copas` };
  if (n <= 16) return { sym: "♠", name: "Espadas", rank, label: `${rank} de Espadas` };
  if (n <= 24) return { sym: "♦", name: "Ouros",   rank, label: `${rank} de Ouros` };
  return        { sym: "♣", name: "Paus",    rank, label: `${rank} de Paus` };
}
