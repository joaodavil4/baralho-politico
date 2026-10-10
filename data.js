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

// naipe e número exibidos no verso (a numeração vai de Ás a 12 em cada naipe)
const SUITS = {
  hearts:   { sym: "♥", name: "Copas" },
  spades:   { sym: "♠", name: "Espadas" },
  diamonds: { sym: "♦", name: "Ouros" },
  clubs:    { sym: "♣", name: "Paus" },
};

function suitOf(n) {
  let key, pos; // pos: posição (1-based) dentro do naipe
  if (n <= 8)       { key = "hearts";   pos = n; }
  else if (n <= 16) { key = "spades";   pos = n - 8; }
  else if (n <= 24) { key = "diamonds"; pos = n - 16; }
  else if (n <= 32) { key = "clubs";    pos = n - 24; }
  else {
    // extras de Flávio: alternam ouros/paus e continuam de 9 a 12;
    // passando de 12, a numeração volta para o Ás (são mais de 12 cartas por naipe)
    const k = n - 33;
    key = k % 2 === 0 ? "diamonds" : "clubs";
    pos = 8 + Math.floor(k / 2) + 1;
  }
  const num = ((pos - 1) % 12) + 1;
  const rank = num === 1 ? "Ás" : String(num);
  const { sym, name } = SUITS[key];
  return { sym, name, rank, label: `${rank} de ${name}` };
}

// Glossário: termos que aparecem nas frases ganham um botão "i" com a explicação.
// Descrições neutras, só para contextualizar (não opinam sobre a proposta).
const GLOSSARY = [
  { term: "licenciamento ambiental", title: "Licenciamento ambiental",
    text: "Processo em que um órgão ambiental analisa e autoriza obras e atividades que podem causar impacto ao meio ambiente (estradas, mineração, fábricas, usinas). Flexibilizar significa tornar as regras ou os prazos dessa análise menos rígidos." },
  { term: "autolicenciamento", title: "Autolicenciamento",
    text: "Quando o próprio empreendedor emite ou declara a licença da sua atividade, sem esperar a decisão do órgão ambiental. Quem defende cita agilidade; quem critica aponta o risco de menos fiscalização prévia." },
  { term: "fracking", title: "Fracking",
    text: "Fraturamento hidráulico: técnica que injeta água, areia e produtos químicos sob alta pressão para quebrar rochas e extrair gás natural e petróleo. Defensores destacam a produção de energia; críticos apontam riscos para água, solo e sismos." },
  { term: "tesouraço", title: "Tesouraço",
    text: "Termo usado na proposta para um corte forte e rápido de gastos públicos, com o objetivo de equilibrar as contas do governo." },
  { term: "maioridade penal", title: "Maioridade penal",
    text: "Idade a partir da qual uma pessoa responde criminalmente como adulta. No Brasil é 18 anos; abaixo disso, adolescentes cumprem medidas socioeducativas." },
  { term: "castração química", title: "Castração química",
    text: "Tratamento com medicamentos que reduzem o desejo sexual, proposto como pena ou condição para condenados por crimes sexuais." },
  { term: "voucher", title: "Voucher (vale)",
    text: "Um vale entregue à família para pagar um serviço, como creche ou escola privada, quando não há vaga na rede pública." },
  { term: "método fônico", title: "Método fônico",
    text: "Forma de alfabetizar que ensina primeiro a relação entre os sons da fala e as letras (fonemas e grafemas), antes de palavras e frases inteiras." },
  { term: "cívico-militares", title: "Escolas cívico-militares",
    text: "Escolas públicas em que militares participam da gestão e da disciplina, com regras próprias de comportamento e uniforme, ao lado da equipe pedagógica." },
  { term: "decisões monocráticas", title: "Decisão monocrática",
    text: "Decisão tomada por um único ministro do Supremo, sem passar pelo plenário ou por uma turma, geralmente de forma provisória e urgente." },
  { term: "anistia", title: "Anistia",
    text: "Perdão concedido por lei que apaga a punição de determinados crimes e de quem os cometeu." },
  { term: "tarifaço", title: "Tarifaço",
    text: "Aumento forte de tarifas de importação. Aqui, refere-se à elevação das tarifas sobre produtos brasileiros anunciada pelo governo dos Estados Unidos em 2025." },
  { term: "Muralha Brasileira", title: "Muralha Brasileira",
    text: "Nome dado na proposta a um sistema nacional de monitoramento com câmeras de reconhecimento facial em espaços públicos, portos e aeroportos." },
  { term: "cargos comissionados", title: "Cargos comissionados",
    text: "Cargos públicos de livre nomeação e exoneração pelo governo, sem concurso público, geralmente de chefia e assessoramento." },
  { term: "Sistema Único de Segurança", title: "Sistema Único de Segurança",
    text: "Ideia de integrar polícias e órgãos de segurança da União, estados e municípios num sistema nacional coordenado, como o SUS faz na saúde." },
  { term: "Casa da Mulher Brasileira", title: "Casa da Mulher Brasileira",
    text: "Espaço público que reúne em um só lugar serviços para mulheres em situação de violência: delegacia, atendimento psicológico e social, defensoria, justiça e abrigo." },
  { term: "Carretas de Saúde", title: "Carretas de Saúde",
    text: "Unidades móveis (carretas) que levam consultas, exames e procedimentos com especialistas a regiões com pouca oferta de saúde." },
  { term: "Quilombolas", title: "Quilombolas",
    text: "Pessoas de comunidades formadas por descendentes de africanos escravizados, os quilombos, que mantêm laços históricos e culturais com o território." },
  { term: "cotas", title: "Cotas",
    text: "Reserva de uma parte das vagas em universidades e concursos para grupos específicos, como pessoas negras, indígenas, quilombolas e estudantes de escola pública." },
  { term: "parcerias público-privadas", title: "Parcerias público-privadas (PPP)",
    text: "Contratos em que o poder público e empresas privadas dividem a construção, a gestão ou a oferta de um serviço, geralmente por longos prazos." },
  { term: "telessaúde", title: "Telessaúde",
    text: "Atendimento e acompanhamento de saúde à distância, por telefone, vídeo ou aplicativo." },
  { term: "Banco Master", title: "Banco Master",
    text: "Banco cujo controlador, Daniel Vorcaro, foi alvo de investigações, e que teve a liquidação decretada pelo Banco Central. A frase se refere à relação do político com ele. Consulte a fonte para os detalhes." },
  { term: "super-ricos", title: "Super-ricos",
    text: "Pessoas de patrimônio ou renda muito altos, normalmente o grupo de maior renda do país. A proposta é aumentar a tributação sobre elas." },
  { term: "saneamento básico", title: "Saneamento básico",
    text: "Serviços de água tratada, coleta e tratamento de esgoto, limpeza urbana e coleta de lixo, e drenagem da água da chuva." },
  { term: "duas folgas por semana", title: "Duas folgas por semana",
    text: "Jornada em que o trabalhador tem dois dias de descanso por semana, em vez de apenas um (como na escala 6x1, seis dias de trabalho e um de folga)." },
  { term: "acima da inflação", title: "Aumento acima da inflação",
    text: "Reajuste maior que a alta dos preços no período, o chamado aumento real, que faz o salário comprar mais do que antes." },
  { term: "soberania", title: "Soberania",
    text: "Poder de um país decidir sobre seu território, sua economia e suas leis sem interferência de outros países." },
  { term: "fake news", title: "Fake news",
    text: "Informações falsas divulgadas como se fossem verdadeiras, geralmente para enganar ou influenciar a opinião das pessoas." },
  { term: "MEC", title: "MEC",
    text: "Ministério da Educação, órgão federal que coordena a política de ensino do país, incluindo as universidades federais." },
];
