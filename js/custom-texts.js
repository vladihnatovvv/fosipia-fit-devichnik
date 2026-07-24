(() => {
  document.documentElement.lang = "ru";

  const PAYMENT_URL = "https://buy.stripe.com/7sY14m1Yhcbnd3Ock84Ja03";
  const VIP_PAYMENT_URL = "";
  const LITE_PAYMENT_URL = "";
  const INSTAGRAM_URL =
    "https://www.instagram.com/vlada.lavrichenko?igsh=NTVmMzg3MGxlZmt0";
  const SUPPORT_URL = "https://t.me/vlada_010";
  const q = (sel, root = document) => root.querySelector(sel);
  const qa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const setText = (sel, text, root = document) => {
    const el = q(sel, root);
    if (el) el.textContent = text;
  };

  const setHTML = (sel, html, root = document) => {
    const el = q(sel, root);
    if (el) el.innerHTML = html;
  };

  const setList = (root, items) => {
    if (!root) return;
    root.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  };

  const hideAll = (sel) => {
    qa(sel).forEach((el) => el.remove());
  };

  const setPrimaryButtonText = (root, text) => {
    if (!root) return;
    const textBlock = q(".cta-btn > div:first-child", root);
    if (textBlock) textBlock.textContent = text;
  };

  const bulletListMarkup = (items) =>
    items
      .map(
        (item) =>
          `<div class="slider-bullet-item"><div>${item}</div></div>`
      )
      .join("");

  const smoothScrollTo = (target) => {
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bindScrollButton = (button, target) => {
    if (!button || !target) return;
    button.setAttribute("href", "#pricing");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScrollTo(target);
    });
  };

  const startCountdown = () => {
    const timerGroups = qa(".timer-wrap");
    if (!timerGroups.length) return;

    const getDeadline = () => {
      const now = new Date();
      const deadline = new Date(now);
      deadline.setHours(24, 0, 0, 0);
      return deadline;
    };

    let deadline = getDeadline();
    const format = (value) => String(value).padStart(2, "0");

    const update = () => {
      const now = new Date();
      if (now >= deadline) {
        deadline = getDeadline();
      }

      const diff = Math.max(deadline.getTime() - now.getTime(), 0);
      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      timerGroups.forEach((timer) => {
        const hoursEl = q(".hours", timer);
        const minutesEl = q(".minutes", timer);
        const secondsEl = q(".seconds", timer);

        if (hoursEl) hoursEl.textContent = format(hours);
        if (minutesEl) minutesEl.textContent = format(minutes);
        if (secondsEl) secondsEl.textContent = format(seconds);
      });
    };

    update();
    window.setInterval(update, 1000);
  };

  const enableDesktopPhonePreview = () => {
    const root = q(".main-wrap");
    if (!root) return;

    const applyPreview = () => {
      const isDesktop = window.innerWidth > 479;
      const targetWidth = Math.min(430, window.innerWidth - 32);

      if (!isDesktop) {
        document.body.style.background = "";
        document.body.style.display = "";
        document.body.style.justifyContent = "";
        document.body.style.alignItems = "";
        document.body.style.padding = "";
        document.body.style.minHeight = "";
        root.style.display = "block";
        root.style.width = "";
        root.style.zoom = "";
        root.style.margin = "";
        root.style.background = "";
        root.style.boxShadow = "";
        root.style.borderRadius = "";
        root.style.overflow = "";

        const stickyBtn = q(".cta-btn-wrap");
        if (stickyBtn) {
          stickyBtn.style.width = "";
          stickyBtn.style.left = "";
          stickyBtn.style.right = "";
          stickyBtn.style.transform = "";
          stickyBtn.style.margin = "";
        }
        return;
      }

      const scale = targetWidth / window.innerWidth;
      document.body.style.background = "#f3f0f3";
      document.body.style.display = "flex";
      document.body.style.justifyContent = "center";
      document.body.style.alignItems = "flex-start";
      document.body.style.padding = "24px 16px";
      document.body.style.minHeight = "100vh";

      root.style.display = "block";
      root.style.width = `${window.innerWidth}px`;
      root.style.zoom = `${scale}`;
      root.style.margin = "0 auto";
      root.style.background = "#fff";
      root.style.boxShadow = "0 24px 80px rgba(21, 21, 21, 0.12)";
      root.style.borderRadius = "28px";
      root.style.overflow = "hidden";

      const stickyBtn = q(".cta-btn-wrap");
      if (stickyBtn) {
        stickyBtn.style.width = `${targetWidth}px`;
        stickyBtn.style.left = "50%";
        stickyBtn.style.right = "auto";
        stickyBtn.style.transform = "translateX(-50%)";
        stickyBtn.style.margin = "0 auto";
      }
    };

    applyPreview();
    window.addEventListener("resize", applyPreview);
  };

  const hero = q(".hero-sec");
  if (hero) {
    const content = q(".hero-content-wraper", hero);
    const marker = document.createElement("div");
    marker.className = "list-to-side upper";
    marker.textContent = "МОЁ ДО/ПОСЛЕ + ОТЗЫВ КАТИ";
    const heading = q(".hero-heading-wrapper", hero);
    if (content && heading && !q(".hero-marker", hero)) {
      marker.classList.add("hero-marker");
      content.insertBefore(marker, heading);
    }
    const heroPhoto = q(".hero-custom-photo", hero);
    if (heroPhoto) heroPhoto.remove();
    hero.style.backgroundImage =
      'linear-gradient(0deg, rgba(21, 21, 21, 0.9), rgba(21, 21, 21, 0.62)), url("images/hero-main.jpg")';
    hero.style.backgroundPosition = "50% 50%";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundRepeat = "no-repeat";

    setHTML(
      ".hero-heading-wrapper",
      '<h2 class="her-h">FIT-</h2><h2 class="her-h">ДЕВИЧНИК</h2>',
      hero
    );
    setText(
      ".hero-description",
      "Место, где женщины возвращают себе наглость жить так, как хотят.",
      hero
    );

    const heroBullets = q(".hero-rtb-bullets-wrapper", hero);
    if (heroBullets) {
      heroBullets.classList.remove("sec");
      heroBullets.style.display = "flex";
      heroBullets.style.flexDirection = "column";
      heroBullets.style.alignItems = "flex-start";
      heroBullets.style.gap = "3.2vw";
      heroBullets.innerHTML = bulletListMarkup([
        "🔥 Тело, которое хочется показывать, а не прятать",
        "🔥 Энергия, которой хватает на мечты, а не только на работу и детей",
        "🔥 Окружение, которое поджигает твои амбиции",
        "🔥 Уверенность, после которой ты перестаёшь соглашаться на меньшее",
        "🔥 Версия тебя, которая наконец начинает делать то, что годами откладывала",
      ]);
    }

    setPrimaryButtonText(hero, "🔥 Я ХОЧУ В ЭТУ ТУСОВКУ");
    const heroMeta = q(".hero-btn-timer", hero);
    if (heroMeta) {
      heroMeta.style.flexDirection = "column";
      heroMeta.style.alignItems = "flex-start";
      heroMeta.style.gap = "1.6vw";
      heroMeta.innerHTML =
        "<div>Отзыв Кати</div><div>Старт нового потока: ___</div><div>Осталось мест: ___</div>";
    }
  }

  const stickyButtonText = q(".cta-btn-wrap .cta-btn > div:first-child");
  if (stickyButtonText) {
    stickyButtonText.style.whiteSpace = "nowrap";
    stickyButtonText.style.fontSize = "4vw";
    stickyButtonText.style.lineHeight = "1";
  }
  hideAll(".new-price-div");

  qa('a[href*="wayforpay"], a[href*="buy.stripe.com"]').forEach((link) => {
    link.href = PAYMENT_URL;
  });

  const footer = q(".footer");
  if (footer) {
    const footerBtn = q(".footer-btn", footer);
    if (footerBtn) footerBtn.href = SUPPORT_URL;

    setText(".footer-title", "Возникли вопросы?", footer);
    setHTML(
      ".footer-p",
      "Нажми кнопку <span class=\"faq-pink\">«Поддержка»</span> внизу, и ты сразу попадёшь в наш Telegram, где сможешь получить всю информацию о программе.",
      q(".footer-cta-wrap", footer)
    );
    setText(".footer-btn div:last-child", "Поддержка", footer);
    setText(".footer-social-wrap .footer-p", "Я в соцсетях", footer);
    const footerLinks = qa(".footer-link", footer);
    if (footerLinks[0]) footerLinks[0].textContent = "Политика конфиденциальности";
    if (footerLinks[1]) footerLinks[1].textContent = "Публичная оферта";

    const footerLogo = q(".footer-bottom-wrap > img", footer);
    if (footerLogo) footerLogo.remove();

    const socialLinks = qa(".footer-social-link", footer);
    if (socialLinks[0]) socialLinks[0].href = INSTAGRAM_URL;
    if (socialLinks[1]) socialLinks[1].href = SUPPORT_URL;
  }

  const benefits = q(".benefits");
  if (benefits) {
    setHTML(
      ".benefits-cont-wrap > .h2",
      "⚠️ ПОБОЧНЫЕ ЭФФЕКТЫ <span class=\"ponk-italic\">FIT-ДЕВИЧНИКА</span>",
      benefits
    );
    if (!q(".benefits-intro", benefits)) {
      const intro = document.createElement("p");
      intro.className = "benefit-p benefits-intro";
      intro.innerHTML =
        "Мы начинаем с тела.<br>Но красивая фигура — это только начало. ✨<br>Самое интересное начинается после…";
      q(".benefits-cont-wrap", benefits)?.insertBefore(
        intro,
        q(".benefit-item", benefits)
      );
    }

    const benefitTexts = [
      "💥 Получают права.",
      "💥 Запускают бизнес.",
      "💥 Поднимают чек.",
      "💥 Находят новые отношения.",
      "💥 Уезжают реализовывать свои мечты.",
    ];
    qa(".benefit-item .benefit-p", benefits).forEach((el, i) => {
      if (benefitTexts[i]) el.textContent = benefitTexts[i];
    });

    if (!q(".benefits-outro", benefits)) {
      const outro = document.createElement("p");
      outro.className = "benefit-p benefits-outro";
      outro.innerHTML =
        "👇Не веришь? Почитай, что пишут сами девчонки.<br><br>Тут отзывы:<br>про энергию<br>про бизнес<br>про цели<br>про внутренние изменения<br>не только про тело";
      q(".benefits-cont-wrap", benefits)?.appendChild(outro);
    }
  }

  const about = q(".about");
  if (about) {
    setText(".about-h-wrap .h2", "КОРОЧЕ…", about);
    setHTML(
      ".about-h-wrap .title",
      "У меня есть <span class=\"border-bottom\">теория…</span>",
      about
    );

    const groups = qa(".about-steps-items-wrap", about);
    if (groups[0]) {
      setText(".about-p", "Когда женщина начинает:", groups[0]);
      const leftSteps = [
        "высыпаться",
        "нормально есть",
        "двигаться",
        "нравиться себе в зеркале",
        "перестаёт жить в режиме ПОСЛЕДНЕЙ НЕРВНОЙ КЛЕТКИ…",
      ];
      qa(".about-step", groups[0]).forEach((step, i) => {
        const text = q("p", step);
        if (leftSteps[i] && text) {
          text.innerHTML = leftSteps[i];
          step.style.display = "";
          return;
        }
        step.style.display = "none";
      });
    }

    if (groups[1]) {
      setText(".about-p", "У неё появляется НАГЛОСТЬ:", groups[1]);
      const rightSteps = [
        "✨ проявляться",
        "✨ сказать “нет”",
        "✨ запустить бизнес",
        "✨ поднять чек",
        "✨ уйти оттуда, где её не ценят",
        "✨ наконец выбрать себя",
      ];
      qa(".about-step", groups[1]).forEach((step, i) => {
        const text = q("p", step);
        if (rightSteps[i] && text) {
          text.innerHTML = rightSteps[i];
          step.style.display = "";
          return;
        }
        step.style.display = "none";
      });
    }
  }

  const system = q(".you-do-not-need");
  if (system) {
    const headings = qa(".you-do-not-need-heading-wrapper .h2", system);
    if (headings[0]) {
      headings[0].innerHTML =
        "Если ты думаешь, что я <span class=\"h2-accent pink\">темщица</span> …";
    }
    if (headings[1]) headings[1].textContent = "то НЕТ. 😏";
    setText(
      ".list-to-side",
      "У меня есть конкретная схема, как сделать так, чтобы изменения стали ЗАКОНОМЕРНОСТЬЮ, работая комплексно через…",
      system
    );

    const slides = qa(".slide-item", system);
    const slideData = [
      {
        title: "🧠 Психика.",
        bullets: [
          "Перестаём жить в режиме саботажа",
          "Учимся выбирать себя",
          "Меняем внутренние сценарии",
        ],
      },
      {
        title: "⚡ Гормоны.",
        bullets: [
          "Возвращаем энергию",
          "Работаем с дефицитами",
          "Создаём базу для больших изменений",
        ],
      },
      {
        title: "💪 Тело.",
        bullets: [
          "Запускаем тело",
          "Нравимся себе в зеркале",
          "Делаем изменения закономерностью",
        ],
      },
    ];
    slides.forEach((slide, i) => {
      const data = slideData[i];
      if (!data) return;
      setText(".slide-item-heading", data.title, slide);
      const photo = q(".system-photo", slide);
      if (photo && i === 0) {
        photo.src = "images/you-do-not-need-1.png";
        photo.alt = "FIT-Девичник";
      }
      if (photo && i === 1) {
        photo.src = "images/you-do-not-need-2.png";
        photo.alt = "FIT-Девичник";
      }
      if (photo && i === 2) {
        photo.src = "images/you-do-not-need-3.png";
        photo.alt = "FIT-Девичник";
      }
      const bullets = q(".slider-bullets-wrapper", slide);
      if (bullets) {
        bullets.innerHTML = data.bullets
          .map(
            (item) =>
              `<div class="slider-bullet-item"><img src="https://cdn.prod.website-files.com/69bb2c736344fec99e05628d/69bd64af96b79e9bfb1aec7f_bullet-arrow.svg" loading="lazy" alt="" class="bullet-arrow-icon"><div>${item}</div></div>`
          )
          .join("");
      }
    });
  }

  const reviews = q(".reviews-section");
  if (reviews) {
    setHTML(
      ".review-wrapper .h2",
      "👇Не веришь? Почитай, что пишут <span class=\"pink\">сами девчонки</span>",
      reviews
    );
    const labels = qa(".slider-with-name .list-to-side", reviews);
    if (labels[0]) labels[0].textContent = "/про энергию, бизнес, цели/";
    if (labels[1]) {
      labels[1].textContent =
        "/про внутренние изменения, не только про тело/";
    }
  }

  const weeks = qa(".program-week");
  if (weeks.length === 4) {
    const weekData = [
      {
        kicker: "🚀 НЕДЕЛЯ 1",
        title: "Я СКАЗАЛА СТАРТУЕМ!",
        subtitle:
          "Главная цель — почувствовать, сколько энергии у тебя на самом деле и начать ею пользоваться В СВОЮ ВЫГОДУ.",
        leftLabel: "/что внутри/",
        leftText: "",
        leftItems: [
          "🩺 Диагностика, анализы",
          "🍯 Первое гормональное меню с упором на дефициты",
          "🛒 Список покупок",
          "🏋️ Программа тренировок на этот месяц",
          "🍑 Запуск ягодиц",
          "👑 Работа над осанкой",
          "🧠 Мини задания для связи психики с гормонами",
        ],
        challengeLabel: "🚀 Челлендж недели",
        challengeTitle: "РЕЖИМ БОГА",
        challengeText:
          "7 дней живём по циркадным ритмам + запуск гормонов.",
        challengeItems: [
          "☀️ продуктивность по фазам дня",
          "🥗 питание по времени",
          "😴 похудение во сне",
          "📵 вечерняя рутина",
        ],
      },
      {
        kicker: "НЕДЕЛЯ 2",
        title: "ИМЯ САБОТАЖ ВАМ О ЧЁМ-НИБУДЬ ГОВОРИТ?",
        subtitle: "Самая опасная неделя.",
        leftLabel: "/что происходит/",
        leftText: "Потому что именно здесь мы разрушаем все:",
        leftItems: ["“не сейчас”", "“я боюсь”", "“я ещё не готова”"],
        challengeLabel: "Челлендж недели",
        challengeTitle: "АНТИСАБОТАЖ",
        challengeText:
          "Каждый день открывается новое короткое задание. Именно благодаря ему начинают происходить те самые истории:",
        challengeItems: [
          "🔥 запускаются проекты",
          "🔥 появляются права",
          "🔥 открываются бизнесы",
          "🔥 закрываются дела, которые откладывались годами.",
        ],
      },
      {
        kicker: "НЕДЕЛЯ 3",
        title: "НЕЗАКОННАЯ АКТИВНОСТЬ",
        subtitle: "(разрешена только участницам FIT-Девичника) 😏",
        leftLabel: "/что появляется/",
        leftText: "Вот тут обычно начинается движ. 😏<br>И жизнь начинает ускоряться х2 💨💨💨.",
        leftItems: ["— энергия.", "— азарт.", "— смелость.", "— драйв."],
        challengeLabel: "🚨 Челлендж недели",
        challengeTitle: "НЕДЕЛЯ ПОБЕД",
        challengeText:
          "Каждый день делаешь одно действие, которое давно откладывала.",
        challengeItems: [
          "📞 Позвонить.",
          "🎥 Записать видео.",
          "💸 Поднять чек.",
          "❤️ Познакомиться.",
          "🚗 Записаться на права.",
        ],
        challengeOutro:
          "Именно здесь обычно начинается та самая “незаконная активность”. 😂",
      },
      {
        kicker: "НЕДЕЛЯ 4",
        title: "ВЫ ЧЁ ТВОРИТЕ?! ВЫ ЧЁ ВЫТВОРЯЕТЕ?!",
        subtitle:
          "Последняя неделя. Но именно здесь рождается новая версия тебя.",
        leftLabel: "/что внутри/",
        leftText: "",
        leftItems: [
          "🥐 Финальное меню",
          "🏋️ Закрепляющие тренировки",
          "📋 План после программы",
          "📏 Финальные замеры",
          "🎁 Выпускной",
          "💜 Подведение итогов",
          "🏆 Призы за лучший результат",
        ],
        challengeLabel: "Челлендж недели",
        challengeTitle: "ТОЧКА НЕВОЗВРАТА",
        challengeText:
          "Создаём систему, с которой ты не откатишься через две недели.",
        challengeItems: [
          "План привычек.",
          "План питания.",
          "План тренировок.",
          "Следующие цели.",
        ],
        challengeOutro:
          "Чтобы FIT-Девичник закончился…<br>А изменения — нет. 😏",
      },
    ];

    weeks.forEach((week, i) => {
      const data = weekData[i];
      if (!data) return;
      setText(".program-week-kicker", data.kicker, week);
      setText(".program-week-title", data.title, week);
      setText(".program-week-subtitle", data.subtitle, week);

      const cols = qa(".program-week-column", week);
      if (cols[0]) {
        cols[0].innerHTML = `
          <div class="tab-result-txt">${data.leftLabel}</div>
          ${data.leftText ? `<p class="program-week-text">${data.leftText}</p>` : ""}
          <ul class="program-week-list${data.leftText ? " compact" : ""}">
            ${(data.leftItems || []).map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `;
      }
      if (cols[1]) {
        cols[1].innerHTML = `
          <div class="tab-result-txt">/челлендж недели/</div>
          <h4 class="program-week-challenge-title">${data.challengeLabel}</h4>
          <p class="program-week-text"><strong>${data.challengeTitle}</strong></p>
          ${data.challengeText ? `<p class="program-week-text">${data.challengeText}</p>` : ""}
          <ul class="program-week-list compact">
            ${(data.challengeItems || []).map((item) => `<li>${item}</li>`).join("")}
          </ul>
          ${data.challengeOutro ? `<p class="program-week-text">${data.challengeOutro}</p>` : ""}
        `;
      }
    });
  }

  const author = q(".author-of-course");
  if (author) {
    const stickyPart = q(".sticky-part", author);
    if (stickyPart) {
      stickyPart.style.backgroundImage = 'url("images/face-control-photo.jpg")';
      stickyPart.style.backgroundPosition = "50% 50%";
      stickyPart.style.backgroundSize = "cover";
      stickyPart.style.backgroundRepeat = "no-repeat";
    }

    setText(".sticky-top-text .list-to-side", "/фейс-контроль/", author);
    const authorHeadings = qa(".sticky-heading-wrap .h2", author);
    if (authorHeadings[0]) authorHeadings[0].textContent = "ГОП СТОП, БАРЫШНЯ.";
    if (authorHeadings[1]) authorHeadings[1].textContent = "Фейс-контроль FIT-Девичника.";

    const quoteParts = qa(".quote-part > div", author);
    const quoteTexts = [
      "Любишь вкусно поесть?<br><span class=\"quote-inline-accent\">Любишь дерзкие цели?</span><br>Готова к немного безумным идеям?<br>Способна влюбиться в новую версию себя?",
      "<div class=\"quote-sticker-wrap\"><span class=\"quote-sticker\">✦</span><span class=\"quote-sticker\">😉</span></div>",
      "Ну ладно...<br><span class=\"quote-inline-strong\">Гена, пропускай её!</span>",
      "Она выглядит подозрительно вайбовой.<br><span class=\"quote-inline-strong\">Боюсь, это наша бестия.</span>",
      "<span class=\"quote-cta-script\">Погнали, покажу,<br>что за дискотека внутри</span>",
    ];
    const quoteClasses = [
      "quote-card question-card",
      "quote-card sticker-card",
      "quote-card pass-card",
      "quote-card note-card",
      "quote-card cta-card",
    ];
    quoteParts.forEach((el, i) => {
      const wrapper = el.parentElement;
      if (wrapper && quoteClasses[i]) wrapper.className = `quote-part ${quoteClasses[i]}`;
      if (quoteTexts[i]) el.innerHTML = quoteTexts[i];
    });
  }

  const howItGoing = q(".how-it-going");
  if (howItGoing) {
    setText(".how-it-going-header .h2", "Что внутри FIT-Девичника", howItGoing);
    const howBadge = q(".how-it-going-image", howItGoing);
    if (howBadge) {
      const badge = document.createElement("div");
      badge.className = "list-to-side";
      badge.textContent = "#удобный формат";
      howBadge.replaceWith(badge);
    }
    const itemsWrap = q(".how-it-going-anim-wrapper", howItGoing);
    let items = qa(".how-it-going-item", howItGoing);
    while (itemsWrap && items.length < 7 && items[items.length - 1]) {
      itemsWrap.appendChild(items[items.length - 1].cloneNode(true));
      items = qa(".how-it-going-item", howItGoing);
    }

    const itemTexts = [
      "🥐🥐 Меню каждую неделю<br>Чтобы вкусно есть и не думать, что приготовить.",
      "🏋️ Тренировки для дома и зала<br>Под любой уровень подготовки.",
      "🍑 Талия + ягодицы + осанка<br>Да, всё сразу 😏",
      "🧠 Антисаботаж-челленджи<br>Потому что проблема редко только в еде.",
      "👯‍♀️ Чат девчонок<br>В котором экшена больше чем в турецких сериалах.",
      "💌 Моя поддержка<br>Потому что одной проходить путь всегда сложнее.",
      "🚀 Система, которая останется с тобой после FIT-Девичника<br>А не закончится вместе с последним днём.",
    ];

    items.forEach((item, i) => {
      const content = q(".how-it-going-item-content", item);
      if (!content) return;

      if (i === 0) {
        content.classList.add("menu-card-with-photos");
        content.innerHTML = `
          <div class="menu-photo-cluster" aria-hidden="true">
            <img src="images/menu-photo-1.jpg" alt="" class="menu-photo menu-photo-1"/>
            <img src="images/menu-photo-2.jpg" alt="" class="menu-photo menu-photo-2"/>
            <img src="images/menu-photo-3.jpg" alt="" class="menu-photo menu-photo-3"/>
          </div>
          <div class="menu-card-text">${itemTexts[i]}</div>
        `;
        return;
      }

      if (i === 1) {
        content.classList.add("training-card-with-photos");
        content.innerHTML = `
          <div class="training-photo-cluster" aria-hidden="true">
            <img src="images/training-photo-1.png" alt="" class="training-photo training-photo-1"/>
            <img src="images/training-photo-2.png" alt="" class="training-photo training-photo-2"/>
            <img src="images/training-photo-3.png" alt="" class="training-photo training-photo-3"/>
          </div>
          <div class="training-card-text">${itemTexts[i]}</div>
        `;
        return;
      }

      if (i === 2) {
        content.classList.add("body-card-with-photos");
        content.innerHTML = `
          <div class="body-photo-cluster" aria-hidden="true">
            <img src="images/body-photo-1.png" alt="" class="body-photo body-photo-1"/>
            <img src="images/body-photo-2.png" alt="" class="body-photo body-photo-2"/>
            <img src="images/body-photo-3.png" alt="" class="body-photo body-photo-3"/>
            <img src="images/body-photo-4.png" alt="" class="body-photo body-photo-4"/>
          </div>
          <div class="body-card-text">${itemTexts[i]}</div>
        `;
        return;
      }

      if (i === 3) {
        content.classList.add("challenge-card-with-photos");
        content.innerHTML = `
          <div class="challenge-photo-cluster" aria-hidden="true">
            <img src="images/challenge-photo-1.jpg" alt="" class="challenge-photo challenge-photo-1"/>
            <img src="images/challenge-photo-2.jpg" alt="" class="challenge-photo challenge-photo-2"/>
          </div>
          <div class="challenge-card-text">${itemTexts[i]}</div>
        `;
        return;
      }

      if (i === 4) {
        content.classList.add("chat-card-with-photos");
        content.innerHTML = `
          <div class="chat-photo-cluster" aria-hidden="true">
            <img src="images/chat-photo-1.png" alt="" class="chat-photo chat-photo-1"/>
            <img src="images/chat-photo-2.jpg" alt="" class="chat-photo chat-photo-2"/>
          </div>
          <div class="chat-card-text">${itemTexts[i]}</div>
        `;
        return;
      }

      const textEl = content.lastElementChild;
      if (textEl && itemTexts[i]) textEl.innerHTML = itemTexts[i];
    });
  }

  if (reviews) {
    setHTML(
      ".review-wrapper .h2",
      "🔥 АШАЛЕЕЕЕТЬ, МОИ <span class=\"pink\">ЛЕГЕНДЫ!!!</span> 🔥<br>Ни стыда. Ни совести. Одни результаты.",
      reviews
    );
    const labels = qa(".slider-with-name .list-to-side", reviews);
    if (labels[0]) labels[0].remove();
    if (labels[1]) labels[1].remove();

    const resultGroups = qa(".slider-with-name", reviews);
    const primaryCases = [
      {
        name: "Катя",
        meta: "фронт + профиль",
        image: "images/reviews/katyusha-main.jpg",
      },
      {
        name: "Карина",
        meta: "основной коллаж",
        image: "images/reviews/karina-main.jpg",
      },
      {
        name: "Наташка",
        meta: "фронт",
        image: "images/reviews/natashka-main.jpg",
      },
      {
        name: "Настя",
        meta: "фронт + профиль",
        image: "images/reviews/nastya-main.jpg",
      },
      {
        name: "Кейс 5",
        meta: "фронт + профиль",
        image: "images/reviews/case-5-main.jpg",
      },
      {
        name: "Кейс 6",
        meta: "профиль",
        image: "images/reviews/case-6-main.jpg",
      },
      {
        name: "Кейс 7",
        meta: "профиль",
        image: "images/reviews/case-7-main.jpg",
      },
      {
        name: "Кейс 8",
        meta: "профиль",
        image: "images/reviews/case-8-main.jpg",
      },
    ];
    const extraCases = [
      {
        name: "Катя",
        meta: "фронт + спина",
        image: "images/reviews/katyusha-back.jpg",
      },
      {
        name: "Карина",
        meta: "профиль",
        image: "images/reviews/karina-side.jpg",
      },
      {
        name: "Карина",
        meta: "крупный профиль",
        image: "images/reviews/karina-side-close.jpg",
      },
      {
        name: "Наташка",
        meta: "профиль",
        image: "images/reviews/natashka-side.jpg",
      },
      {
        name: "Наташка",
        meta: "результат в жизни",
        image: "images/reviews/natashka-life.jpg",
      },
      {
        name: "Настя",
        meta: "спина + фронт",
        image: "images/reviews/nastya-back.jpg",
      },
      {
        name: "Настя",
        meta: "дополнительный профиль",
        image: "images/reviews/nastya-side-alt.jpg",
      },
      {
        name: "Кейс 5",
        meta: "детальный профиль",
        image: "images/reviews/case-5-detail.jpg",
      },
      {
        name: "Кейс 6",
        meta: "деталь",
        image: "images/reviews/case-6-detail.png",
      },
    ];

    const renderReviewSlides = (group, cases, topClass = "") => {
      if (!group) return;
      const mask = q(".mask", group);
      if (!mask) return;
      mask.innerHTML = cases
        .map(
          (item) => {
            const titleClass = ["slide-result-text-wrap", topClass]
              .filter(Boolean)
              .join(" ");
            return `
            <div class="review-slide w-slide">
              <div class="review-slide-inner">
                <div class="${titleClass}">
                  <div class="medium">${item.name}</div>
                  <div class="_14-151515">${item.meta}</div>
                </div>
                <div>
                  <img src="${item.image}" loading="lazy" alt="${item.name}" class="review-slide-image"/>
                </div>
              </div>
            </div>
          `;
          }
        )
        .join("");
    };

    renderReviewSlides(resultGroups[0], primaryCases);
    if (resultGroups[1]) {
      resultGroups[1].remove();
    }
  }

  const approach = q(".approach");
  if (approach) {
    const approachTexts = qa(".approach-txt", approach);
    if (approachTexts[0]) approachTexts[0].innerHTML = "🚨 Я НЕ ДОГОВОРИЛА!!! 😂";
    if (approachTexts[1]) approachTexts[1].innerHTML = "Сейчас покажу варианты участия 😏👇";
    if (approachTexts[2]) approachTexts[2].innerHTML = "";
  }

  const faq = q(".faq");
  if (faq) {
    faq.id = "pricing";
    const faqHeadings = qa(".faq-heading-wrapper .h2-faq", faq);
    if (faqHeadings[0]) faqHeadings[0].innerHTML = "<span class=\"faq-pink\">ВОПРОСЫ</span> / ОТВЕТЫ";
    if (faqHeadings[1]) faqHeadings[1].innerHTML = "Всё, что тебе важно знать перед стартом";

    const itemsWrap = q(".faq-items-wrap", faq);
    const faqData = [
      {
        question: "❓ Можно ли платить частями?",
        label: "/ответ/",
        answer:
          "Да.<br><br>Если тебе удобнее разбить оплату на несколько частей — напиши мне, и мы спокойно подберём вариант. Главное — не откладывать свою жизнь ещё на один “идеальный момент”. 😏",
      },
      {
        question: "❓ А если я никогда не тренировалась?",
        label: "/ответ/",
        answer:
          "Идеально.<br><br>Программа рассчитана как на новичков, так и на тех, кто уже давно занимается.<br><br>Ты проходишь её в своём темпе, а упражнения всегда можно адаптировать под твой уровень подготовки.",
      },
      {
        question: "❓ А если у меня вообще нет времени?",
        label: "/ответ/",
        answer:
          "Именно поэтому многие и приходят.<br><br>Тренировки, питание и задания сделаны так, чтобы их можно было встроить в обычную жизнь, а не жить только ради программы.",
      },
      {
        question: "❓ Если я не хочу худеть, мне всё равно подойдёт?",
        label: "/ответ/",
        answer:
          "Да.<br><br>FIT-Девичник — это не только про похудение.<br><br>Многие приходят за энергией, дисциплиной, красивым телом, уверенностью или чтобы наконец перестать откладывать свою жизнь.",
      },
      {
        question: "❓ Что если я сорвусь или пропущу несколько дней?",
        label: "/ответ/",
        answer:
          "Ничего страшного.<br><br>Мы не играем в “идеальную девочку”.<br><br>Наша задача — научиться возвращаться обратно, а не бросать всё после первой ошибки.",
      },
      {
        question: "❓ На сколько времени уходит программа в день?",
        label: "/ответ/",
        answer:
          "В среднем достаточно 30–60 минут в день.<br><br>Всё зависит от твоего темпа и выбранного тарифа.",
      },
      {
        question: "❓ Что если у меня есть ограничения по здоровью?",
        label: "/ответ/",
        answer:
          "Перед стартом мы проводим диагностику и учитываем особенности организма.<br><br>Если есть серьёзные медицинские ограничения, лучше заранее написать мне — посмотрим, подойдёт ли тебе программа и как её адаптировать.",
      },
      {
        question: "❓ Я стесняюсь заходить в чат…",
        label: "/ответ/",
        answer:
          "😂 Через пару дней обычно уже не стесняются.<br><br>У нас очень тёплая атмосфера, где никто никого не сравнивает и не осуждает.<br><br>Наоборот — именно чат часто становится тем самым местом, из которого потом не хочется уходить.",
      },
    ];

    if (itemsWrap) {
      itemsWrap.classList.remove("pricing-cards");
      itemsWrap.innerHTML = faqData
        .map(
          (item, index) => `
            <div data-hover="false" data-delay="500" class="faq-item ${index === 0 ? "first" : ""} w-dropdown">
              <div class="faq-header w-dropdown-toggle">
                <div class="faq-question">${item.question}</div>
                <div class="faq-icon-wrap">
                  <div class="faq-icon w-embed">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 0V10M0 5H10" stroke="currentColor" stroke-width="1.2"/>
                    </svg>
                  </div>
                </div>
              </div>
              <nav class="faq-body w-dropdown-list">
                <div class="faq-body-wrap">
                  <div class="tab-result-txt">${item.label}</div>
                  <p class="faq-answer">${item.answer}</p>
                </div>
              </nav>
            </div>
          `
        )
        .join("");

      itemsWrap.insertAdjacentHTML(
        "beforeend",
        `
          <div class="faq-finale">
            <div class="faq-finale-text">
              <p>Кажется, вопросы закончились… 😏</p>
              <p>Теперь остался только один.</p>
              <p class="faq-finale-accent">Ты с нами? 💅</p>
            </div>
            <a class="faq-finale-btn cta-btn" href="#pricing-cta">
              <div>🔥 Я ХОЧУ В ЭТУ ТУСОВКУ</div>
            </a>
          </div>
        `
      );
    }
  }

const message = q(".message");
if (message) {
  message.remove();
}

  const cta = q(".cta");
  if (cta) {
    cta.style.backgroundImage =
      'linear-gradient(0deg, rgba(21, 21, 21, 0.56), rgba(21, 21, 21, 0.56)), url("images/final-cta-photo.jpg")';
    cta.style.backgroundPosition = "50% calc(22% - 50px)";
    cta.style.backgroundSize = "cover";
    cta.style.backgroundRepeat = "no-repeat";

    const ctaHeadings = qa(".cta-title-wrap .h2", cta);
    if (ctaHeadings[0]) ctaHeadings[0].textContent = "Если честно…";
    if (ctaHeadings[1]) {
      ctaHeadings[1].textContent = "лучше один раз прожить, чем сто раз прочитать";
    }
    setHTML(".cta-p", "", cta);
    setPrimaryButtonText(cta, "🔥 Я ХОЧУ В ЭТУ ТУСОВКУ");
    const ctaMeta = q(".hero-btn-timer", cta);
    if (ctaMeta) ctaMeta.innerHTML = "";
  }

  const pricingSection = q("#pricing");
  bindScrollButton(q(".hero-sec .cta-btn"), pricingSection);
  bindScrollButton(q(".cta .cta-btn"), pricingSection);
  bindScrollButton(q(".cta-btn-wrap .cta-btn"), pricingSection);
  bindScrollButton(q(".faq-finale-btn"), q(".cta-btn-wrap") || pricingSection);

  startCountdown();
  enableDesktopPhonePreview();
})();
