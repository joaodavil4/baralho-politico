(() => {
  const $ = (id) => document.getElementById(id);
  const screens = { start: $("screen-start"), game: $("screen-game"), result: $("screen-result") };
  const card = $("card");

  let deck = [], idx = 0, answers = [], locked = false;

  const show = (name) => Object.entries(screens).forEach(([k, el]) => el.classList.toggle("active", k === name));
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

  function start() {
    deck = shuffle(CARDS); idx = 0; answers = [];
    show("game"); renderCard(true);
  }

  function renderCard(animate) {
    const c = deck[idx];
    locked = false;
    card.classList.add("no-anim"); card.classList.remove("flipped", "leaving");
    $("f-num").textContent = $("f-num2").textContent = idx + 1;
    $("f-text").textContent = c.text;
    $("f-tag").textContent = c.tag;
    $("progress-bar").style.width = (idx / deck.length * 100) + "%";
    $("progress-label").textContent = `${idx + 1} / ${deck.length}`;
    $("choices").classList.remove("hidden"); $("btn-next").classList.add("hidden");
    void card.offsetWidth; card.classList.remove("no-anim");
    if (animate) { card.classList.remove("dealing"); void card.offsetWidth; card.classList.add("dealing"); }
  }

  function answer(good) {
    if (locked) return; locked = true;
    const c = deck[idx];
    answers.push({ card: c, good });
    const who = CANDIDATES[c.who], s = suitOf(c.n);
    const back = $("back"); back.dataset.who = c.who;
    $("b-rank").textContent = $("b-rank2").textContent = s.rank === "Ás" ? "A" : s.rank;
    $("b-suit").textContent = $("b-suit2").textContent = s.sym;
    $("b-big").textContent = s.sym;
    $("b-who").textContent = who.name;
    $("b-type").textContent = s.label;
    $("b-src").href = c.src;
    const v = $("b-verdict");
    v.textContent = `Você achou ${good ? "bom" : "ruim"}`;
    v.className = "verdict " + (good ? "agree" : "disagree");
    card.classList.add("flipped");
    $("choices").classList.add("hidden");
    const nxt = $("btn-next");
    nxt.textContent = idx === deck.length - 1 ? "Ver resultado →" : "Próxima carta →";
    nxt.classList.remove("hidden");
    nxt.style.animation = "none"; void nxt.offsetWidth; nxt.style.animation = "";
    if (navigator.vibrate) navigator.vibrate(15);
  }

  function next() {
    if (!card.classList.contains("flipped") || card.classList.contains("leaving")) return;
    card.classList.add("leaving");
    setTimeout(() => {
      idx++;
      if (idx >= deck.length) { card.classList.remove("leaving"); return result(); }
      renderCard(true);
    }, 340);
  }

  function finishEarly() {
    if (!answers.length) { show("start"); return; }
    const left = deck.length - answers.length;
    if (left <= 0) { card.classList.remove("leaving"); return result(); }
    $("modal-text").textContent = `Você respondeu ${answers.length} de ${deck.length} cartas. O resultado será parcial.`;
    $("modal").classList.remove("hidden");
  }

  /* ---------- resultado ---------- */
  function result() {
    // afinidade: "bom" nas propostas de um candidato e "ruim" nas do outro
    let lula = 0, flavio = 0;
    for (const { card: c, good } of answers) {
      if (c.who === "lula") { good ? lula++ : flavio++; } else { good ? flavio++ : lula++; }
    }
    const total = answers.length;
    const pl = Math.round(lula / total * 100), pf = 100 - pl;
    const goodL = answers.filter(a => a.card.who === "lula" && a.good).length;
    const goodF = answers.filter(a => a.card.who === "flavio" && a.good).length;
    const nL = answers.filter(a => a.card.who === "lula").length;
    const nF = total - nL;

    const win = $("r-winner");
    const kicker = document.querySelector(".kicker");
    kicker.textContent = lula === flavio ? "Suas respostas ficaram" : "Suas respostas combinam mais com";
    let color, suits;
    if (lula === flavio) { win.textContent = "Divididas meio a meio"; color = ["#f2d27a"]; suits = ["♥", "♠", "♦", "♣"]; }
    else if (lula > flavio) { win.textContent = CANDIDATES.lula.name; color = ["#e0324a", "#fff"]; suits = ["♥", "♠"]; }
    else { win.textContent = CANDIDATES.flavio.name; color = ["#4d7fd1", "#fff"]; suits = ["♦", "♣"]; }

    $("r-text").innerHTML = lula === flavio
      ? `Você ficou exatamente no meio: concordou com ${goodL} de ${nL} propostas atribuídas ao Lula e com ${goodF} de ${nF} atribuídas a Flávio Bolsonaro.`
      : `Você aprovou <b>${goodL} de ${nL}</b> propostas do Lula e <b>${goodF} de ${nF}</b> de Flávio Bolsonaro — e rejeitou ${nL - goodL} do Lula e ${nF - goodF} de Flávio.`;

    if (total < deck.length) $("r-text").innerHTML += `<br><small>Resultado parcial: ${total} de ${deck.length} cartas.</small>`;

    $("r-list").innerHTML = answers.map(({ card: c, good }) =>
      `<li><span class="dot ${good ? "good" : "bad"}">${good ? "✓" : "✕"}</span>
        <span>“${c.text}”<small>${CANDIDATES[c.who].name}</small></span></li>`).join("");

    // reinicia animações CSS
    ["r-winner", "r-text"].forEach(id => { const e = $(id); e.style.animation = "none"; void e.offsetWidth; e.style.animation = ""; });
    const rev = document.querySelector(".review"); rev.style.animation = "none"; void rev.offsetWidth; rev.style.animation = "";
    rev.open = false;

    show("result");
    $("progress-bar").style.width = "100%";
    const tl = $("tug-lula"), tf = $("tug-flavio");
    tl.style.width = tf.style.width = "50%";
    $("pct-lula").textContent = $("pct-flavio").textContent = "";
    setTimeout(() => {
      tl.style.width = pl + "%"; tf.style.width = pf + "%";
      countUp($("pct-lula"), "Lula ", pl); countUp($("pct-flavio"), "Flávio ", pf);
    }, 300);
    setTimeout(() => confetti(suits, color), 1300);
  }

  function countUp(el, label, to) {
    if (to < 12) { el.textContent = ""; return; }
    const t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = `${label}${Math.round(to * (1 - Math.pow(1 - p, 3)))}%`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* chuva de naipes */
  let raf;
  function confetti(suits, colors) {
    const cv = $("confetti"), ctx = cv.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.scale(dpr, dpr);
    const parts = Array.from({ length: 70 }, () => ({
      x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * .6,
      vy: 1.5 + Math.random() * 3, vx: (Math.random() - .5) * 1.5,
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .15,
      s: 18 + Math.random() * 22,
      ch: suits[Math.random() * suits.length | 0], col: colors[Math.random() * colors.length | 0],
    }));
    cancelAnimationFrame(raf);
    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      let alive = false;
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.r += p.vr;
        if (p.y < innerHeight + 40) alive = true;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.font = `${p.s}px Georgia, serif`; ctx.fillStyle = p.col; ctx.textAlign = "center";
        ctx.fillText(p.ch, 0, 0); ctx.restore();
      }
      if (alive) raf = requestAnimationFrame(loop); else ctx.clearRect(0, 0, innerWidth, innerHeight);
    };
    loop();
  }

  /* ---------- eventos ---------- */
  $("btn-start").onclick = start;
  $("btn-again").onclick = () => { cancelAnimationFrame(raf); start(); };
  $("btn-good").onclick = () => answer(true);
  $("btn-bad").onclick = () => answer(false);
  $("btn-next").onclick = next;
  $("btn-finish").onclick = finishEarly;
  $("modal-cancel").onclick = () => $("modal").classList.add("hidden");
  $("modal-ok").onclick = () => { $("modal").classList.add("hidden"); card.classList.remove("leaving"); result(); };
  $("b-src").addEventListener("click", (e) => e.stopPropagation());
  card.addEventListener("click", () => { if (card.classList.contains("flipped")) next(); });
  addEventListener("keydown", (e) => {
    if (!screens.game.classList.contains("active")) return;
    if (!card.classList.contains("flipped")) {
      if (e.key === "ArrowRight") answer(true);
      if (e.key === "ArrowLeft") answer(false);
    } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") { e.preventDefault(); next(); }
  });
})();
