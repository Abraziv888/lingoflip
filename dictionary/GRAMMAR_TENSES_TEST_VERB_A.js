/* ============================================================================
   GRAMMAR_TENSES_TEST_VERB.js
   Набор заданий для режима ГРАММАТИКА → ТЕСТ (игра "GRAMMAR_TENSES_TEST_VERB").
   Подключается как обычный словарь:  <script src="dictionary/GRAMMAR_TENSES_TEST_VERB.js"></script>
   Объявляет глобальный массив GRAMMAR_TENSES_TEST_VERB.

   ── СТРУКТУРА ОДНОГО ЗАДАНИЯ ────────────────────────────────────────────────
   {
     "level": "A",                  // A | B | C  (см. ниже)
     "text":  "... {gap1} ... {gap2} ...",
                                    // строка вопрос+ответ. Метки {gapN} интерфейс
                                    // автоматически заменяет на ___ (скрытый элемент).
                                    // Разделитель вопрос/ответ удобно ставить « — ».
     "hint":  "Подсказка по смыслу.",   // опц. — почему именно это время
     "tags":  ["Вопрос", "Отрицание"],  // опц. — чипы-подсказки над карточкой
                                    // (напр. «Вопрос», «Отрицание», «He/She/It»,
                                    //  «Неправильный глагол»). Любые короткие метки.
     "tense": {                     // 1-й под-вопрос: «в каком времени это написано?»
       "correct": "Present Simple",
       "wrong":   ["Past Simple", "Future Simple"],   // ровно 2 неверных
       "explanation": "Почему это время."
     },
     "gaps": [                      // далее по одному под-вопросу на каждый {gapN}
       {
         "id": "gap1",              // совпадает с меткой в text
         "correct": "does",
         "wrong":   ["do", "is"],   // ровно 2 неверных формы
         "explanation": "Почему именно эта форма."
       }
       // ...
     ]
   }

   ── УРОВНИ (по группам времён) ──────────────────────────────────────────────
   A — Simple:               Present / Past / Future Simple
   B — Continuous:           Present / Past / Future Continuous
   C — Perfect + Perfect Continuous:
                             Present / Past / Future Perfect (+ Perfect Continuous)

   ── ПОВЕДЕНИЕ ИНТЕРФЕЙСА (как это играется) ─────────────────────────────────
   1. Показывается предложение, скрытые элементы — как ___ .
   2. Сначала подсвечивается весь блок и игрок выбирает ВРЕМЯ (3 варианта).
   3. Затем поочерёдно подсвечивается каждый ___ — игрок выбирает форму глагола
      (3 варианта). Неверный ответ можно перевыбрать; в зачёт идёт ответ с 1-й попытки.
   4. После ответа показывается пояснение (explanation).

   ── ЧТО ТРЕНИРУЮТ ЗАДАНИЯ ────────────────────────────────────────────────────
   • -s/-es для He/She/it           • do/does/did + начальная форма
   • have/has                       • will + начальная форма (глагол не меняется)
   • правильные окончания -ed        • неправильные глаголы (2/3 формы)
   • -ing (удвоение, немая -e)       • be: am/is/are, was/were, will be, been
   • have/has/had + 3-я форма        • «второй глагол не меняется»
   ========================================================================== */

const GRAMMAR_TENSES_TEST_VERB_A = [

  /* ===================== УРОВЕНЬ A — SIMPLE ===================== */
  /* 250 заданий, отсортированы от простых к сложным. Источник примеров — учебник. */

  {
    "id": "A-0001",
    "level": "A",
    "text": "What does Linda do every day? — Linda {gap1} hard.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "works", "wrong": ["work", "worked"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: works." }
    ]
  },

  {
    "id": "A-0002",
    "level": "A",
    "text": "What does Felix do every morning? — Felix {gap1} the guitar.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "plays", "wrong": ["play", "played"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: plays." }
    ]
  },

  {
    "id": "A-0003",
    "level": "A",
    "text": "What does Marco do every night? — Marco {gap1} dinner.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "cooks", "wrong": ["cook", "cooked"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: cooks." }
    ]
  },

  {
    "id": "A-0004",
    "level": "A",
    "text": "What does Min do on Sundays? — Min {gap1} at home.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "rests", "wrong": ["rest", "rested"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: rests." }
    ]
  },

  {
    "id": "A-0005",
    "level": "A",
    "text": "What does Carlos do after work? — Carlos {gap1} the house.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "cleans", "wrong": ["clean", "cleaned"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: cleans." }
    ]
  },

  {
    "id": "A-0006",
    "level": "A",
    "text": "What does Mia do on weekends? — Mia {gap1} at home.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "helps", "wrong": ["help", "helped"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: helps." }
    ]
  },

  {
    "id": "A-0007",
    "level": "A",
    "text": "What does Ken do every day? — Ken {gap1} to music.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "listens", "wrong": ["listen", "listened"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: listens." }
    ]
  },

  {
    "id": "A-0008",
    "level": "A",
    "text": "What does Ed do every morning? — Ed {gap1} to work.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "walks", "wrong": ["walk", "walked"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: walks." }
    ]
  },

  {
    "id": "A-0009",
    "level": "A",
    "text": "What does Mary do every night? — Mary {gap1} hard.",
    "hint": "Действие повторяется регулярно — настоящее простое.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "works", "wrong": ["work", "worked"],
        "explanation": "Для He/She/It в утверждении к глаголу добавляем -s: works." }
    ]
  },

  {
    "id": "A-0010",
    "level": "A",
    "text": "What does Isaac do on Sundays? — Isaac {gap1} to the gym.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "goes", "wrong": ["go", "went"],
        "explanation": "Для He/She/It добавляем -s: goes (не go)." }
    ]
  },

  {
    "id": "A-0011",
    "level": "A",
    "text": "What does Sandra do after work? — Sandra {gap1} breakfast.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "makes", "wrong": ["make", "made"],
        "explanation": "Для He/She/It добавляем -s: makes (не make)." }
    ]
  },

  {
    "id": "A-0012",
    "level": "A",
    "text": "What does Celia do on weekends? — Celia {gap1} the bus.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "takes", "wrong": ["take", "took"],
        "explanation": "Для He/She/It добавляем -s: takes (не take)." }
    ]
  },

  {
    "id": "A-0013",
    "level": "A",
    "text": "What does Maria do every day? — Maria {gap1} friends.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "meets", "wrong": ["meet", "met"],
        "explanation": "Для He/She/It добавляем -s: meets (не meet)." }
    ]
  },

  {
    "id": "A-0014",
    "level": "A",
    "text": "What does Sergio do every morning? — Sergio {gap1} out.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "eats", "wrong": ["eat", "ate"],
        "explanation": "Для He/She/It добавляем -s: eats (не eat)." }
    ]
  },

  {
    "id": "A-0015",
    "level": "A",
    "text": "What does Trevor do every night? — Trevor {gap1} English.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "speaks", "wrong": ["speak", "spoke"],
        "explanation": "Для He/She/It добавляем -s: speaks (не speak)." }
    ]
  },

  {
    "id": "A-0016",
    "level": "A",
    "text": "What does Sharon do on Sundays? — Sharon {gap1} coffee.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "drinks", "wrong": ["drink", "drank"],
        "explanation": "Для He/She/It добавляем -s: drinks (не drink)." }
    ]
  },

  {
    "id": "A-0017",
    "level": "A",
    "text": "What does Roberto do after work? — Roberto {gap1} emails.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "writes", "wrong": ["write", "wrote"],
        "explanation": "Для He/She/It добавляем -s: writes (не write)." }
    ]
  },

  {
    "id": "A-0018",
    "level": "A",
    "text": "What does Ali do on weekends? — Ali {gap1} to the gym.",
    "hint": "Постоянная привычка в настоящем — Present Simple.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "goes", "wrong": ["go", "went"],
        "explanation": "Для He/She/It добавляем -s: goes (не go)." }
    ]
  },

  {
    "id": "A-0019",
    "level": "A",
    "text": "What do we do every day? — We {gap1} hard.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "work", "wrong": ["works", "worked"],
        "explanation": "Для I/You/We/They глагол без -s: work (не works)." }
    ]
  },

  {
    "id": "A-0020",
    "level": "A",
    "text": "What do they do every morning? — They {gap1} the guitar.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "play", "wrong": ["plays", "played"],
        "explanation": "Для I/You/We/They глагол без -s: play (не plays)." }
    ]
  },

  {
    "id": "A-0021",
    "level": "A",
    "text": "What do you do every night? — You {gap1} dinner.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "cook", "wrong": ["cooks", "cooked"],
        "explanation": "Для I/You/We/They глагол без -s: cook (не cooks)." }
    ]
  },

  {
    "id": "A-0022",
    "level": "A",
    "text": "What do they do on Sundays? — Brenda and Leo {gap1} at home.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "rest", "wrong": ["rests", "rested"],
        "explanation": "Для I/You/We/They глагол без -s: rest (не rests)." }
    ]
  },

  {
    "id": "A-0023",
    "level": "A",
    "text": "What do they do after work? — Jill and Brad {gap1} the house.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "clean", "wrong": ["cleans", "cleaned"],
        "explanation": "Для I/You/We/They глагол без -s: clean (не cleans)." }
    ]
  },

  {
    "id": "A-0024",
    "level": "A",
    "text": "What do they do on weekends? — Paul and Amy {gap1} at home.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "help", "wrong": ["helps", "helped"],
        "explanation": "Для I/You/We/They глагол без -s: help (не helps)." }
    ]
  },

  {
    "id": "A-0025",
    "level": "A",
    "text": "What do they do every day? — Nick and Tony {gap1} to music.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "listen", "wrong": ["listens", "listened"],
        "explanation": "Для I/You/We/They глагол без -s: listen (не listens)." }
    ]
  },

  {
    "id": "A-0026",
    "level": "A",
    "text": "What do they do every morning? — Kathy and Tom {gap1} to work.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "walk", "wrong": ["walks", "walked"],
        "explanation": "Для I/You/We/They глагол без -s: walk (не walks)." }
    ]
  },

  {
    "id": "A-0027",
    "level": "A",
    "text": "What do they do every night? — Irma and Ron {gap1} to the gym.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "go", "wrong": ["goes", "went"],
        "explanation": "Для I/You/We/They глагол без -s: go (не goes)." }
    ]
  },

  {
    "id": "A-0028",
    "level": "A",
    "text": "What do they do on Sundays? — Roberto and Selma {gap1} breakfast.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "make", "wrong": ["makes", "made"],
        "explanation": "Для I/You/We/They глагол без -s: make (не makes)." }
    ]
  },

  {
    "id": "A-0029",
    "level": "A",
    "text": "What do they do after work? — Juan and Ivana {gap1} the bus.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "take", "wrong": ["takes", "took"],
        "explanation": "Для I/You/We/They глагол без -s: take (не takes)." }
    ]
  },

  {
    "id": "A-0030",
    "level": "A",
    "text": "What do we do on weekends? — We {gap1} friends.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "meet", "wrong": ["meets", "met"],
        "explanation": "Для I/You/We/They глагол без -s: meet (не meets)." }
    ]
  },

  {
    "id": "A-0031",
    "level": "A",
    "text": "What do they do every day? — They {gap1} out.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "Для I/You/We/They глагол без -s: eat (не eats)." }
    ]
  },

  {
    "id": "A-0032",
    "level": "A",
    "text": "What do you do every morning? — You {gap1} English.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "speak", "wrong": ["speaks", "spoke"],
        "explanation": "Для I/You/We/They глагол без -s: speak (не speaks)." }
    ]
  },

  {
    "id": "A-0033",
    "level": "A",
    "text": "What do they do every night? — Brenda and Leo {gap1} coffee.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "Для I/You/We/They глагол без -s: drink (не drinks)." }
    ]
  },

  {
    "id": "A-0034",
    "level": "A",
    "text": "What do they do on Sundays? — Jill and Brad {gap1} emails.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "write", "wrong": ["writes", "wrote"],
        "explanation": "Для I/You/We/They глагол без -s: write (не writes)." }
    ]
  },

  {
    "id": "A-0035",
    "level": "A",
    "text": "What do they do after work? — Paul and Amy {gap1} hard.",
    "hint": "Для I/You/We/They глагол стоит в начальной форме.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "work", "wrong": ["works", "worked"],
        "explanation": "Для I/You/We/They глагол без -s: work (не works)." }
    ]
  },

  {
    "id": "A-0036",
    "level": "A",
    "text": "What {gap1} Linda need to do? — She needs to make dinner.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0037",
    "level": "A",
    "text": "What {gap1} Felix need to do? — He needs to find a job.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0038",
    "level": "A",
    "text": "What {gap1} Marco need to do? — He needs to take a class.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0039",
    "level": "A",
    "text": "What {gap1} Min need to do? — She needs to call the office.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0040",
    "level": "A",
    "text": "What {gap1} Carlos need to do? — He needs to clean the house.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0041",
    "level": "A",
    "text": "What {gap1} Mia need to do? — She needs to see a doctor.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0042",
    "level": "A",
    "text": "What {gap1} Ken need to do? — He needs to make dinner.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0043",
    "level": "A",
    "text": "What {gap1} Ed need to do? — He needs to find a job.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0044",
    "level": "A",
    "text": "What {gap1} Mary need to do? — She needs to take a class.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0045",
    "level": "A",
    "text": "What {gap1} Isaac need to do? — He needs to call the office.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0046",
    "level": "A",
    "text": "What {gap1} Sandra need to do? — She needs to clean the house.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0047",
    "level": "A",
    "text": "What {gap1} Celia need to do? — She needs to see a doctor.",
    "hint": "He/She/It требует does во вспомогательном.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "is"],
        "explanation": "Для He/She/It вспомогательный глагол в вопросе — does." }
    ]
  },

  {
    "id": "A-0048",
    "level": "A",
    "text": "What {gap1} we want to do? — We want to learn English.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0049",
    "level": "A",
    "text": "What {gap1} they want to do? — They want to get a GED.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0050",
    "level": "A",
    "text": "What {gap1} you want to do? — You want to buy a car.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0051",
    "level": "A",
    "text": "What {gap1} they want to do? — Brenda and Leo want to start a business.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0052",
    "level": "A",
    "text": "What {gap1} they want to do? — Jill and Brad want to travel abroad.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0053",
    "level": "A",
    "text": "What {gap1} they want to do? — Paul and Amy want to find an apartment.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0054",
    "level": "A",
    "text": "What {gap1} they want to do? — Nick and Tony want to learn English.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0055",
    "level": "A",
    "text": "What {gap1} they want to do? — Kathy and Tom want to get a GED.",
    "hint": "Для I/You/We/They вспомогательный — do.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "are"],
        "explanation": "Для I/You/We/They вспомогательный глагол в вопросе — do." }
    ]
  },

  {
    "id": "A-0056",
    "level": "A",
    "text": "How many brothers does Linda have? — Linda {gap1} two brothers, but I {gap2} one.",
    "hint": "Постоянный факт в настоящем; have для He/She/It → has.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "have для He/She/It → has." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "having"],
        "explanation": "Для I — форма have." }
    ]
  },

  {
    "id": "A-0057",
    "level": "A",
    "text": "How many brothers does Felix have? — Felix {gap1} two brothers, but I {gap2} one.",
    "hint": "Постоянный факт в настоящем; have для He/She/It → has.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "have для He/She/It → has." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "having"],
        "explanation": "Для I — форма have." }
    ]
  },

  {
    "id": "A-0058",
    "level": "A",
    "text": "How many brothers does Marco have? — Marco {gap1} two brothers, but I {gap2} one.",
    "hint": "Постоянный факт в настоящем; have для He/She/It → has.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "have для He/She/It → has." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "having"],
        "explanation": "Для I — форма have." }
    ]
  },

  {
    "id": "A-0059",
    "level": "A",
    "text": "How many brothers does Min have? — Min {gap1} two brothers, but I {gap2} one.",
    "hint": "Постоянный факт в настоящем; have для He/She/It → has.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "have для He/She/It → has." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "having"],
        "explanation": "Для I — форма have." }
    ]
  },

  {
    "id": "A-0060",
    "level": "A",
    "text": "How many brothers does Carlos have? — Carlos {gap1} two brothers, but I {gap2} one.",
    "hint": "Постоянный факт в настоящем; have для He/She/It → has.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "have для He/She/It → has." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "having"],
        "explanation": "Для I — форма have." }
    ]
  },

  {
    "id": "A-0061",
    "level": "A",
    "text": "How many brothers does Mia have? — Mia {gap1} two brothers, but I {gap2} one.",
    "hint": "Постоянный факт в настоящем; have для He/She/It → has.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "have для He/She/It → has." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "having"],
        "explanation": "Для I — форма have." }
    ]
  },

  {
    "id": "A-0062",
    "level": "A",
    "text": "When {gap1} Linda usually {gap2} friends? — She usually meets friends after work.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "meet", "wrong": ["meets", "met"],
        "explanation": "После does — начальная форма: meet (не meets)." }
    ]
  },

  {
    "id": "A-0063",
    "level": "A",
    "text": "When {gap1} Felix usually {gap2} English? — He usually studies English at night.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После does — начальная форма: study (не studies)." }
    ]
  },

  {
    "id": "A-0064",
    "level": "A",
    "text": "When {gap1} Marco usually {gap2} TV? — He usually watches TV in the evening.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После does — начальная форма: watch (не watches)." }
    ]
  },

  {
    "id": "A-0065",
    "level": "A",
    "text": "When {gap1} Min usually {gap2} tennis? — She usually plays tennis on weekends.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "play", "wrong": ["plays", "played"],
        "explanation": "После does — начальная форма: play (не plays)." }
    ]
  },

  {
    "id": "A-0066",
    "level": "A",
    "text": "When {gap1} Carlos usually {gap2} lunch? — He usually eats lunch at noon.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "После does — начальная форма: eat (не eats)." }
    ]
  },

  {
    "id": "A-0067",
    "level": "A",
    "text": "When {gap1} Mia usually {gap2} coffee? — She usually drinks coffee in the morning.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "После does — начальная форма: drink (не drinks)." }
    ]
  },

  {
    "id": "A-0068",
    "level": "A",
    "text": "When {gap1} Ken usually {gap2} to the gym? — He usually goes to the gym on Mondays.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "go", "wrong": ["goes", "went"],
        "explanation": "После does — начальная форма: go (не goes)." }
    ]
  },

  {
    "id": "A-0069",
    "level": "A",
    "text": "When {gap1} Ed usually {gap2} late? — He usually works late on Fridays.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "work", "wrong": ["works", "worked"],
        "explanation": "После does — начальная форма: work (не works)." }
    ]
  },

  {
    "id": "A-0070",
    "level": "A",
    "text": "When {gap1} Mary usually {gap2} work? — She usually starts work at eight.",
    "hint": "Вопрос в настоящем: does + начальная форма; в ответе -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "does", "wrong": ["do", "did"],
        "explanation": "He/She/It → does." },
      { "id": "gap2", "correct": "start", "wrong": ["starts", "started"],
        "explanation": "После does — начальная форма: start (не starts)." }
    ]
  },

  {
    "id": "A-0071",
    "level": "A",
    "text": "When {gap1} we usually {gap2} friends? — We usually meet friends after work.",
    "hint": "Для I/You/We/They: do + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "did"],
        "explanation": "I/You/We/They → do." },
      { "id": "gap2", "correct": "meet", "wrong": ["meets", "met"],
        "explanation": "После do — начальная форма: meet." }
    ]
  },

  {
    "id": "A-0072",
    "level": "A",
    "text": "When {gap1} they usually {gap2} English? — They usually study English at night.",
    "hint": "Для I/You/We/They: do + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "did"],
        "explanation": "I/You/We/They → do." },
      { "id": "gap2", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После do — начальная форма: study." }
    ]
  },

  {
    "id": "A-0073",
    "level": "A",
    "text": "When {gap1} you usually {gap2} TV? — You usually watch TV in the evening.",
    "hint": "Для I/You/We/They: do + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "did"],
        "explanation": "I/You/We/They → do." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После do — начальная форма: watch." }
    ]
  },

  {
    "id": "A-0074",
    "level": "A",
    "text": "When {gap1} we usually {gap2} tennis? — We usually play tennis on weekends.",
    "hint": "Для I/You/We/They: do + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "did"],
        "explanation": "I/You/We/They → do." },
      { "id": "gap2", "correct": "play", "wrong": ["plays", "played"],
        "explanation": "После do — начальная форма: play." }
    ]
  },

  {
    "id": "A-0075",
    "level": "A",
    "text": "When {gap1} they usually {gap2} lunch? — They usually eat lunch at noon.",
    "hint": "Для I/You/We/They: do + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "did"],
        "explanation": "I/You/We/They → do." },
      { "id": "gap2", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "После do — начальная форма: eat." }
    ]
  },

  {
    "id": "A-0076",
    "level": "A",
    "text": "When {gap1} you usually {gap2} coffee? — You usually drink coffee in the morning.",
    "hint": "Для I/You/We/They: do + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "do", "wrong": ["does", "did"],
        "explanation": "I/You/We/They → do." },
      { "id": "gap2", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "После do — начальная форма: drink." }
    ]
  },

  {
    "id": "A-0077",
    "level": "A",
    "text": "Does Linda like fish? — No, she {gap1} {gap2} fish.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "like", "wrong": ["likes", "liked"],
        "explanation": "После doesn't — начальная форма: like." }
    ]
  },

  {
    "id": "A-0078",
    "level": "A",
    "text": "Does Felix eat meat? — No, he {gap1} {gap2} meat.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "После doesn't — начальная форма: eat." }
    ]
  },

  {
    "id": "A-0079",
    "level": "A",
    "text": "Does Marco drink coffee? — No, he {gap1} {gap2} coffee.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "После doesn't — начальная форма: drink." }
    ]
  },

  {
    "id": "A-0080",
    "level": "A",
    "text": "Does Min watch horror films? — No, she {gap1} {gap2} horror films.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После doesn't — начальная форма: watch." }
    ]
  },

  {
    "id": "A-0081",
    "level": "A",
    "text": "Does Carlos play cards? — No, he {gap1} {gap2} cards.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "play", "wrong": ["plays", "played"],
        "explanation": "После doesn't — начальная форма: play." }
    ]
  },

  {
    "id": "A-0082",
    "level": "A",
    "text": "Does Mia study at night? — No, she {gap1} {gap2} at night.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После doesn't — начальная форма: study." }
    ]
  },

  {
    "id": "A-0083",
    "level": "A",
    "text": "Does Ken cook on Sundays? — No, he {gap1} {gap2} on Sundays.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "cook", "wrong": ["cooks", "cooked"],
        "explanation": "После doesn't — начальная форма: cook." }
    ]
  },

  {
    "id": "A-0084",
    "level": "A",
    "text": "Does Ed walk to work? — No, he {gap1} {gap2} to work.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "walk", "wrong": ["walks", "walked"],
        "explanation": "После doesn't — начальная форма: walk." }
    ]
  },

  {
    "id": "A-0085",
    "level": "A",
    "text": "Does Mary like fish? — No, she {gap1} {gap2} fish.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "like", "wrong": ["likes", "liked"],
        "explanation": "После doesn't — начальная форма: like." }
    ]
  },

  {
    "id": "A-0086",
    "level": "A",
    "text": "Does Isaac eat meat? — No, he {gap1} {gap2} meat.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "После doesn't — начальная форма: eat." }
    ]
  },

  {
    "id": "A-0087",
    "level": "A",
    "text": "Does Sandra drink coffee? — No, she {gap1} {gap2} coffee.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "После doesn't — начальная форма: drink." }
    ]
  },

  {
    "id": "A-0088",
    "level": "A",
    "text": "Does Celia watch horror films? — No, she {gap1} {gap2} horror films.",
    "hint": "Отрицание в настоящем для He/She/It — doesn't + начальная форма.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "doesn't", "wrong": ["don't", "isn't"],
        "explanation": "He/She/It → doesn't." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После doesn't — начальная форма: watch." }
    ]
  },

  {
    "id": "A-0089",
    "level": "A",
    "text": "Do we play cards? — No, we {gap1} {gap2} cards.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "play", "wrong": ["plays", "played"],
        "explanation": "После don't — начальная форма: play." }
    ]
  },

  {
    "id": "A-0090",
    "level": "A",
    "text": "Do they study at night? — No, they {gap1} {gap2} at night.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После don't — начальная форма: study." }
    ]
  },

  {
    "id": "A-0091",
    "level": "A",
    "text": "Do you cook on Sundays? — No, you {gap1} {gap2} on Sundays.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "cook", "wrong": ["cooks", "cooked"],
        "explanation": "После don't — начальная форма: cook." }
    ]
  },

  {
    "id": "A-0092",
    "level": "A",
    "text": "Do they walk to work? — No, they {gap1} {gap2} to work.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "walk", "wrong": ["walks", "walked"],
        "explanation": "После don't — начальная форма: walk." }
    ]
  },

  {
    "id": "A-0093",
    "level": "A",
    "text": "Do they like fish? — No, they {gap1} {gap2} fish.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "like", "wrong": ["likes", "liked"],
        "explanation": "После don't — начальная форма: like." }
    ]
  },

  {
    "id": "A-0094",
    "level": "A",
    "text": "Do they eat meat? — No, they {gap1} {gap2} meat.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "После don't — начальная форма: eat." }
    ]
  },

  {
    "id": "A-0095",
    "level": "A",
    "text": "Do they drink coffee? — No, they {gap1} {gap2} coffee.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "После don't — начальная форма: drink." }
    ]
  },

  {
    "id": "A-0096",
    "level": "A",
    "text": "Do they watch horror films? — No, they {gap1} {gap2} horror films.",
    "hint": "Отрицание для I/You/We/They — don't + начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "don't", "wrong": ["doesn't", "aren't"],
        "explanation": "I/You/We/They → don't." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После don't — начальная форма: watch." }
    ]
  },

  {
    "id": "A-0097",
    "level": "A",
    "text": "Elian hurt his leg. — He {gap1} get an X-ray.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0098",
    "level": "A",
    "text": "Marcia has a sprained ankle. — She {gap1} get a pair of crutches.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0099",
    "level": "A",
    "text": "Pam hurt her back. — She {gap1} go home early.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0100",
    "level": "A",
    "text": "My son broke his arm. — He {gap1} go to the hospital.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0101",
    "level": "A",
    "text": "Mia has a headache. — She {gap1} see a doctor.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0102",
    "level": "A",
    "text": "Ken's eyes hurt. — He {gap1} see a doctor.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0103",
    "level": "A",
    "text": "Sergio cut his hand. — He {gap1} get a bandage.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0104",
    "level": "A",
    "text": "Maria feels dizzy. — She {gap1} sit down.",
    "hint": "have to выражает необходимость; для He/She/It → has to.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "has to", "wrong": ["have to", "had to"],
        "explanation": "Для He/She/It have to превращается в has to." }
    ]
  },

  {
    "id": "A-0105",
    "level": "A",
    "text": "Kathy and Tom have asthma. — They {gap1} take their medicine.",
    "hint": "Для I/You/We/They необходимость — have to.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "have to", "wrong": ["has to", "having to"],
        "explanation": "Для I/You/We/They — have to." }
    ]
  },

  {
    "id": "A-0106",
    "level": "A",
    "text": "Nick and Tony had an accident at work. — They {gap1} fill out a report.",
    "hint": "Для I/You/We/They необходимость — have to.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "have to", "wrong": ["has to", "having to"],
        "explanation": "Для I/You/We/They — have to." }
    ]
  },

  {
    "id": "A-0107",
    "level": "A",
    "text": "Paul and Amy feel sick. — They {gap1} stay home today.",
    "hint": "Для I/You/We/They необходимость — have to.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "have to", "wrong": ["has to", "having to"],
        "explanation": "Для I/You/We/They — have to." }
    ]
  },

  {
    "id": "A-0108",
    "level": "A",
    "text": "The new workers just arrived. — They {gap1} fill out some forms.",
    "hint": "Для I/You/We/They необходимость — have to.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "have to", "wrong": ["has to", "having to"],
        "explanation": "Для I/You/We/They — have to." }
    ]
  },

  {
    "id": "A-0109",
    "level": "A",
    "text": "Brenda and Leo missed the bus. — They {gap1} walk to work.",
    "hint": "Для I/You/We/They необходимость — have to.",
    "tags": [],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "have to", "wrong": ["has to", "having to"],
        "explanation": "Для I/You/We/They — have to." }
    ]
  },

  {
    "id": "A-0110",
    "level": "A",
    "text": "What does Linda need to do? — Linda {gap1} learn English.",
    "hint": "want/need + to + глагол; для He/She/It добавляем -s.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "needs to", "wrong": ["need to", "needed to"],
        "explanation": "Для He/She/It → needs to." }
    ]
  },

  {
    "id": "A-0111",
    "level": "A",
    "text": "What does Felix want to do? — Felix {gap1} get a GED.",
    "hint": "want/need + to + глагол; для He/She/It добавляем -s.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "wants to", "wrong": ["want to", "wanted to"],
        "explanation": "Для He/She/It → wants to." }
    ]
  },

  {
    "id": "A-0112",
    "level": "A",
    "text": "What does Marco need to do? — Marco {gap1} find a new job.",
    "hint": "want/need + to + глагол; для He/She/It добавляем -s.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "needs to", "wrong": ["need to", "needed to"],
        "explanation": "Для He/She/It → needs to." }
    ]
  },

  {
    "id": "A-0113",
    "level": "A",
    "text": "What does Min want to do? — Min {gap1} study computers.",
    "hint": "want/need + to + глагол; для He/She/It добавляем -s.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "wants to", "wrong": ["want to", "wanted to"],
        "explanation": "Для He/She/It → wants to." }
    ]
  },

  {
    "id": "A-0114",
    "level": "A",
    "text": "What does Carlos need to do? — Carlos {gap1} take a class.",
    "hint": "want/need + to + глагол; для He/She/It добавляем -s.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "needs to", "wrong": ["need to", "needed to"],
        "explanation": "Для He/She/It → needs to." }
    ]
  },

  {
    "id": "A-0115",
    "level": "A",
    "text": "What does Mia want to do? — Mia {gap1} become a citizen.",
    "hint": "want/need + to + глагол; для He/She/It добавляем -s.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "wants to", "wrong": ["want to", "wanted to"],
        "explanation": "Для He/She/It → wants to." }
    ]
  },

  {
    "id": "A-0116",
    "level": "A",
    "text": "What did Trevor do yesterday? — He {gap1} X-rays.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "delivered", "wrong": ["deliver", "delivers"],
        "explanation": "Правильный глагол в прошедшем: deliver → delivered (-ed)." }
    ]
  },

  {
    "id": "A-0117",
    "level": "A",
    "text": "What did Felix do last night? — He {gap1} patients.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "helped", "wrong": ["help", "helps"],
        "explanation": "Правильный глагол в прошедшем: help → helped (-ed)." }
    ]
  },

  {
    "id": "A-0118",
    "level": "A",
    "text": "What did Marco do this morning? — He {gap1} the rooms.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "prepared", "wrong": ["prepare", "prepares"],
        "explanation": "Правильный глагол в прошедшем: prepare → prepared (-ed)." }
    ]
  },

  {
    "id": "A-0119",
    "level": "A",
    "text": "What did Linda do after lunch? — She {gap1} the kitchen.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "cleaned", "wrong": ["clean", "cleans"],
        "explanation": "Правильный глагол в прошедшем: clean → cleaned (-ed)." }
    ]
  },

  {
    "id": "A-0120",
    "level": "A",
    "text": "What did Ed do last week? — He {gap1} at home.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "relaxed", "wrong": ["relax", "relaxes"],
        "explanation": "Правильный глагол в прошедшем: relax → relaxed (-ed)." }
    ]
  },

  {
    "id": "A-0121",
    "level": "A",
    "text": "What did Min do last weekend? — She {gap1} the report.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "finished", "wrong": ["finish", "finishes"],
        "explanation": "Правильный глагол в прошедшем: finish → finished (-ed)." }
    ]
  },

  {
    "id": "A-0122",
    "level": "A",
    "text": "What did Carlos do after breakfast? — He {gap1} a new job.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "started", "wrong": ["start", "starts"],
        "explanation": "Правильный глагол в прошедшем: start → started (-ed)." }
    ]
  },

  {
    "id": "A-0123",
    "level": "A",
    "text": "What did Sharon do yesterday? — She {gap1} a movie.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "watched", "wrong": ["watch", "watches"],
        "explanation": "Правильный глагол в прошедшем: watch → watched (-ed)." }
    ]
  },

  {
    "id": "A-0124",
    "level": "A",
    "text": "What did Sandra do last night? — She {gap1} all night.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "studied", "wrong": ["study", "studies"],
        "explanation": "Правильный глагол в прошедшем: study → studied (-ed)." }
    ]
  },

  {
    "id": "A-0125",
    "level": "A",
    "text": "What did Ali do this morning? — He {gap1} the car.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "fixed", "wrong": ["fix", "fixes"],
        "explanation": "Правильный глагол в прошедшем: fix → fixed (-ed)." }
    ]
  },

  {
    "id": "A-0126",
    "level": "A",
    "text": "What did Nikos do after lunch? — He {gap1} soccer.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "played", "wrong": ["play", "plays"],
        "explanation": "Правильный глагол в прошедшем: play → played (-ed)." }
    ]
  },

  {
    "id": "A-0127",
    "level": "A",
    "text": "What did Pam do last week? — She {gap1} to music.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "listened", "wrong": ["listen", "listens"],
        "explanation": "Правильный глагол в прошедшем: listen → listened (-ed)." }
    ]
  },

  {
    "id": "A-0128",
    "level": "A",
    "text": "What did Mia do last weekend? — She {gap1} to school.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "walked", "wrong": ["walk", "walks"],
        "explanation": "Правильный глагол в прошедшем: walk → walked (-ed)." }
    ]
  },

  {
    "id": "A-0129",
    "level": "A",
    "text": "What did Maria do after breakfast? — She {gap1} dinner.",
    "hint": "Маркер прошлого + правильный глагол: добавляем -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "cooked", "wrong": ["cook", "cooks"],
        "explanation": "Правильный глагол в прошедшем: cook → cooked (-ed)." }
    ]
  },

  {
    "id": "A-0130",
    "level": "A",
    "text": "What did Brenda and Leo do yesterday? — They {gap1} hamburgers.",
    "hint": "Правильный глагол в прошедшем — окончание -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "grilled", "wrong": ["grill", "grills"],
        "explanation": "grill → grilled (-ed)." }
    ]
  },

  {
    "id": "A-0131",
    "level": "A",
    "text": "What did Jill and Brad do last night? — They {gap1} the office.",
    "hint": "Правильный глагол в прошедшем — окончание -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "cleaned", "wrong": ["clean", "cleans"],
        "explanation": "clean → cleaned (-ed)." }
    ]
  },

  {
    "id": "A-0132",
    "level": "A",
    "text": "What did Paul and Amy do this morning? — They {gap1} the new students.",
    "hint": "Правильный глагол в прошедшем — окончание -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "helped", "wrong": ["help", "helps"],
        "explanation": "help → helped (-ed)." }
    ]
  },

  {
    "id": "A-0133",
    "level": "A",
    "text": "What did Nick and Tony do after lunch? — They {gap1} a game.",
    "hint": "Правильный глагол в прошедшем — окончание -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "watched", "wrong": ["watch", "watches"],
        "explanation": "watch → watched (-ed)." }
    ]
  },

  {
    "id": "A-0134",
    "level": "A",
    "text": "What did Kathy and Tom do last week? — They {gap1} cards.",
    "hint": "Правильный глагол в прошедшем — окончание -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "played", "wrong": ["play", "plays"],
        "explanation": "play → played (-ed)." }
    ]
  },

  {
    "id": "A-0135",
    "level": "A",
    "text": "What did Irma and Ron do last weekend? — They {gap1} lunch.",
    "hint": "Правильный глагол в прошедшем — окончание -ed.",
    "tags": [],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "prepared", "wrong": ["prepare", "prepares"],
        "explanation": "prepare → prepared (-ed)." }
    ]
  },

  {
    "id": "A-0136",
    "level": "A",
    "text": "What did Linda do yesterday? — She {gap1} the beds.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "made", "wrong": ["maked", "make"],
        "explanation": "make — неправильный: 2-я форма made (нет «maked»)." }
    ]
  },

  {
    "id": "A-0137",
    "level": "A",
    "text": "What did Jill and Brad do last night? — They {gap1} the linens upstairs.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "took", "wrong": ["taked", "take"],
        "explanation": "take — неправильный: 2-я форма took (нет «taked»)." }
    ]
  },

  {
    "id": "A-0138",
    "level": "A",
    "text": "What did Suzanne do this morning? — She {gap1} a colleague.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "met", "wrong": ["meeted", "meet"],
        "explanation": "meet — неправильный: 2-я форма met (нет «meeted»)." }
    ]
  },

  {
    "id": "A-0139",
    "level": "A",
    "text": "What did Min do last week? — She {gap1} South Korea.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "left", "wrong": ["leaved", "leave"],
        "explanation": "leave — неправильный: 2-я форма left (нет «leaved»)." }
    ]
  },

  {
    "id": "A-0140",
    "level": "A",
    "text": "What did Carlos do last weekend? — He {gap1} a new job.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "got", "wrong": ["getted", "get"],
        "explanation": "get — неправильный: 2-я форма got (нет «getted»)." }
    ]
  },

  {
    "id": "A-0141",
    "level": "A",
    "text": "What did Paul and Amy do last Saturday? — They {gap1} in college.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "met", "wrong": ["meeted", "meet"],
        "explanation": "meet — неправильный: 2-я форма met (нет «meeted»)." }
    ]
  },

  {
    "id": "A-0142",
    "level": "A",
    "text": "What did Sandra do after lunch? — She {gap1} the train to New York.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "took", "wrong": ["taked", "take"],
        "explanation": "take — неправильный: 2-я форма took (нет «taked»)." }
    ]
  },

  {
    "id": "A-0143",
    "level": "A",
    "text": "What did Juan and Ivana do after work? — They {gap1} to the coffee shop.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "went", "wrong": ["goed", "go"],
        "explanation": "go — неправильный: 2-я форма went (нет «goed»)." }
    ]
  },

  {
    "id": "A-0144",
    "level": "A",
    "text": "What did Sarah do yesterday? — She {gap1} to the movies.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "went", "wrong": ["goed", "go"],
        "explanation": "go — неправильный: 2-я форма went (нет «goed»)." }
    ]
  },

  {
    "id": "A-0145",
    "level": "A",
    "text": "What did Nikos do last night? — He {gap1} to the beach.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "drove", "wrong": ["drived", "drive"],
        "explanation": "drive — неправильный: 2-я форма drove (нет «drived»)." }
    ]
  },

  {
    "id": "A-0146",
    "level": "A",
    "text": "What did Pedro do this morning? — He {gap1} groceries.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "bought", "wrong": ["buyed", "buy"],
        "explanation": "buy — неправильный: 2-я форма bought (нет «buyed»)." }
    ]
  },

  {
    "id": "A-0147",
    "level": "A",
    "text": "What did Ana do last week? — She {gap1} some coffee.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "drank", "wrong": ["drinked", "drink"],
        "explanation": "drink — неправильный: 2-я форма drank (нет «drinked»)." }
    ]
  },

  {
    "id": "A-0148",
    "level": "A",
    "text": "What did Marco do last weekend? — He {gap1} a sandwich.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "ate", "wrong": ["eated", "eat"],
        "explanation": "eat — неправильный: 2-я форма ate (нет «eated»)." }
    ]
  },

  {
    "id": "A-0149",
    "level": "A",
    "text": "What did Sharon do last Saturday? — She {gap1} her keys.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "found", "wrong": ["finded", "find"],
        "explanation": "find — неправильный: 2-я форма found (нет «finded»)." }
    ]
  },

  {
    "id": "A-0150",
    "level": "A",
    "text": "What did Maria do after lunch? — She {gap1} a letter.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "wrote", "wrong": ["writed", "write"],
        "explanation": "write — неправильный: 2-я форма wrote (нет «writed»)." }
    ]
  },

  {
    "id": "A-0151",
    "level": "A",
    "text": "What did Ken do after work? — He {gap1} some tea.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "drank", "wrong": ["drinked", "drink"],
        "explanation": "drink — неправильный: 2-я форма drank (нет «drinked»)." }
    ]
  },

  {
    "id": "A-0152",
    "level": "A",
    "text": "What did Felix do yesterday? — He {gap1} home late.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "came", "wrong": ["comed", "come"],
        "explanation": "come — неправильный: 2-я форма came (нет «comed»)." }
    ]
  },

  {
    "id": "A-0153",
    "level": "A",
    "text": "What did Mia do last night? — She {gap1} a new course.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "began", "wrong": ["beginned", "begin"],
        "explanation": "begin — неправильный: 2-я форма began (нет «beginned»)." }
    ]
  },

  {
    "id": "A-0154",
    "level": "A",
    "text": "What did Trevor do this morning? — He {gap1} the doctor.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "saw", "wrong": ["seed", "see"],
        "explanation": "see — неправильный: 2-я форма saw (нет «seed»)." }
    ]
  },

  {
    "id": "A-0155",
    "level": "A",
    "text": "What did Roberto do last week? — He {gap1} a speech.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "gave", "wrong": ["gived", "give"],
        "explanation": "give — неправильный: 2-я форма gave (нет «gived»)." }
    ]
  },

  {
    "id": "A-0156",
    "level": "A",
    "text": "What did Linda do last weekend? — She {gap1} the beds.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "made", "wrong": ["maked", "make"],
        "explanation": "make — неправильный: 2-я форма made (нет «maked»)." }
    ]
  },

  {
    "id": "A-0157",
    "level": "A",
    "text": "What did Jill and Brad do last Saturday? — They {gap1} the linens upstairs.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "took", "wrong": ["taked", "take"],
        "explanation": "take — неправильный: 2-я форма took (нет «taked»)." }
    ]
  },

  {
    "id": "A-0158",
    "level": "A",
    "text": "What did Suzanne do after lunch? — She {gap1} a colleague.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "met", "wrong": ["meeted", "meet"],
        "explanation": "meet — неправильный: 2-я форма met (нет «meeted»)." }
    ]
  },

  {
    "id": "A-0159",
    "level": "A",
    "text": "What did Min do after work? — She {gap1} South Korea.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "left", "wrong": ["leaved", "leave"],
        "explanation": "leave — неправильный: 2-я форма left (нет «leaved»)." }
    ]
  },

  {
    "id": "A-0160",
    "level": "A",
    "text": "What did Carlos do yesterday? — He {gap1} a new job.",
    "hint": "Неправильный глагол в прошедшем имеет особую 2-ю форму (без -ed).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "got", "wrong": ["getted", "get"],
        "explanation": "get — неправильный: 2-я форма got (нет «getted»)." }
    ]
  },

  {
    "id": "A-0161",
    "level": "A",
    "text": "{gap1} Sandra call last night? — Yes, she {gap2}.",
    "hint": "Краткий ответ в прошлом строится через did/didn't.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Общий вопрос в прошлом начинается с Did." },
      { "id": "gap2", "correct": "did", "wrong": ["does", "was"],
        "explanation": "Краткий положительный ответ: Yes, … did." }
    ]
  },

  {
    "id": "A-0162",
    "level": "A",
    "text": "Did Celia work yesterday? — No, she {gap1}.",
    "hint": "Краткий отрицательный ответ в прошлом — didn't.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Краткий отрицательный ответ: No, … didn't." }
    ]
  },

  {
    "id": "A-0163",
    "level": "A",
    "text": "{gap1} Maria study last night? — Yes, she {gap2}.",
    "hint": "Краткий ответ в прошлом строится через did/didn't.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Общий вопрос в прошлом начинается с Did." },
      { "id": "gap2", "correct": "did", "wrong": ["does", "was"],
        "explanation": "Краткий положительный ответ: Yes, … did." }
    ]
  },

  {
    "id": "A-0164",
    "level": "A",
    "text": "Did Sergio play yesterday? — No, he {gap1}.",
    "hint": "Краткий отрицательный ответ в прошлом — didn't.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Краткий отрицательный ответ: No, … didn't." }
    ]
  },

  {
    "id": "A-0165",
    "level": "A",
    "text": "{gap1} Trevor help last night? — Yes, he {gap2}.",
    "hint": "Краткий ответ в прошлом строится через did/didn't.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Общий вопрос в прошлом начинается с Did." },
      { "id": "gap2", "correct": "did", "wrong": ["does", "was"],
        "explanation": "Краткий положительный ответ: Yes, … did." }
    ]
  },

  {
    "id": "A-0166",
    "level": "A",
    "text": "Did Sharon come yesterday? — No, she {gap1}.",
    "hint": "Краткий отрицательный ответ в прошлом — didn't.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Краткий отрицательный ответ: No, … didn't." }
    ]
  },

  {
    "id": "A-0167",
    "level": "A",
    "text": "{gap1} Roberto call last night? — Yes, he {gap2}.",
    "hint": "Краткий ответ в прошлом строится через did/didn't.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Общий вопрос в прошлом начинается с Did." },
      { "id": "gap2", "correct": "did", "wrong": ["does", "was"],
        "explanation": "Краткий положительный ответ: Yes, … did." }
    ]
  },

  {
    "id": "A-0168",
    "level": "A",
    "text": "Did Ali work yesterday? — No, he {gap1}.",
    "hint": "Краткий отрицательный ответ в прошлом — didn't.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Краткий отрицательный ответ: No, … didn't." }
    ]
  },

  {
    "id": "A-0169",
    "level": "A",
    "text": "{gap1} Nikos study last night? — Yes, he {gap2}.",
    "hint": "Краткий ответ в прошлом строится через did/didn't.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Общий вопрос в прошлом начинается с Did." },
      { "id": "gap2", "correct": "did", "wrong": ["does", "was"],
        "explanation": "Краткий положительный ответ: Yes, … did." }
    ]
  },

  {
    "id": "A-0170",
    "level": "A",
    "text": "Did Pam play yesterday? — No, she {gap1}.",
    "hint": "Краткий отрицательный ответ в прошлом — didn't.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Краткий отрицательный ответ: No, … didn't." }
    ]
  },

  {
    "id": "A-0171",
    "level": "A",
    "text": "Will Maria come soon? — Yes, she will {gap1}.",
    "hint": "После will — всегда начальная форма глагола.",
    "tags": [],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "come", "wrong": ["comes", "came"],
        "explanation": "После will — начальная форма: come." }
    ]
  },

  {
    "id": "A-0172",
    "level": "A",
    "text": "Will Sergio help next month? — Yes, he will {gap1}.",
    "hint": "После will — всегда начальная форма глагола.",
    "tags": [],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "help", "wrong": ["helps", "helped"],
        "explanation": "После will — начальная форма: help." }
    ]
  },

  {
    "id": "A-0173",
    "level": "A",
    "text": "Will Trevor start this evening? — Yes, he will {gap1}.",
    "hint": "После will — всегда начальная форма глагола.",
    "tags": [],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "start", "wrong": ["starts", "started"],
        "explanation": "После will — начальная форма: start." }
    ]
  },

  {
    "id": "A-0174",
    "level": "A",
    "text": "Will Sharon work next Monday? — Yes, she will {gap1}.",
    "hint": "После will — всегда начальная форма глагола.",
    "tags": [],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "work", "wrong": ["works", "worked"],
        "explanation": "После will — начальная форма: work." }
    ]
  },

  {
    "id": "A-0175",
    "level": "A",
    "text": "Will Roberto study tomorrow? — Yes, he will {gap1}.",
    "hint": "После will — всегда начальная форма глагола.",
    "tags": [],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После will — начальная форма: study." }
    ]
  },

  {
    "id": "A-0176",
    "level": "A",
    "text": "Will Ali call next year? — Yes, he will {gap1}.",
    "hint": "После will — всегда начальная форма глагола.",
    "tags": [],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "call", "wrong": ["calls", "called"],
        "explanation": "После will — начальная форма: call." }
    ]
  },

  {
    "id": "A-0177",
    "level": "A",
    "text": "What {gap1} Linda do yesterday? — She {gap2} the beds.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makes"],
        "explanation": "В ответе — прошедшая форма: made." }
    ]
  },

  {
    "id": "A-0178",
    "level": "A",
    "text": "What {gap1} Felix do last night? — He {gap2} the linens upstairs.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "took", "wrong": ["take", "takes"],
        "explanation": "В ответе — прошедшая форма: took." }
    ]
  },

  {
    "id": "A-0179",
    "level": "A",
    "text": "What {gap1} Marco do this morning? — He {gap2} some friends.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "met", "wrong": ["meet", "meets"],
        "explanation": "В ответе — прошедшая форма: met." }
    ]
  },

  {
    "id": "A-0180",
    "level": "A",
    "text": "What {gap1} Min do last weekend? — She {gap2} to a meeting.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "went", "wrong": ["go", "goes"],
        "explanation": "В ответе — прошедшая форма: went." }
    ]
  },

  {
    "id": "A-0181",
    "level": "A",
    "text": "What {gap1} Carlos do after work? — He {gap2} a new job.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "started", "wrong": ["start", "starts"],
        "explanation": "В ответе — прошедшая форма: started." }
    ]
  },

  {
    "id": "A-0182",
    "level": "A",
    "text": "What {gap1} Mia do last Saturday? — She {gap2} the report.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishes"],
        "explanation": "В ответе — прошедшая форма: finished." }
    ]
  },

  {
    "id": "A-0183",
    "level": "A",
    "text": "What {gap1} Ken do yesterday? — He {gap2} all night.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "studied", "wrong": ["study", "studies"],
        "explanation": "В ответе — прошедшая форма: studied." }
    ]
  },

  {
    "id": "A-0184",
    "level": "A",
    "text": "What {gap1} Ed do last night? — He {gap2} groceries.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "bought", "wrong": ["buy", "buys"],
        "explanation": "В ответе — прошедшая форма: bought." }
    ]
  },

  {
    "id": "A-0185",
    "level": "A",
    "text": "What {gap1} Mary do this morning? — She {gap2} hamburgers.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "grilled", "wrong": ["grill", "grills"],
        "explanation": "В ответе — прошедшая форма: grilled." }
    ]
  },

  {
    "id": "A-0186",
    "level": "A",
    "text": "What {gap1} Isaac do last weekend? — He {gap2} the patients.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "helped", "wrong": ["help", "helps"],
        "explanation": "В ответе — прошедшая форма: helped." }
    ]
  },

  {
    "id": "A-0187",
    "level": "A",
    "text": "What {gap1} Sandra do after work? — She {gap2} the rooms.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "prepared", "wrong": ["prepare", "prepares"],
        "explanation": "В ответе — прошедшая форма: prepared." }
    ]
  },

  {
    "id": "A-0188",
    "level": "A",
    "text": "What {gap1} Celia do last Saturday? — She {gap2} the office.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "left", "wrong": ["leave", "leaves"],
        "explanation": "В ответе — прошедшая форма: left." }
    ]
  },

  {
    "id": "A-0189",
    "level": "A",
    "text": "What {gap1} Maria do yesterday? — She {gap2} the X-rays.",
    "hint": "Вопрос о прошлом: did + начальная форма; в ответе — 2-я форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "delivered", "wrong": ["deliver", "delivers"],
        "explanation": "В ответе — прошедшая форма: delivered." }
    ]
  },

  {
    "id": "A-0190",
    "level": "A",
    "text": "What {gap1} Brenda and Leo {gap2} yesterday? — They cleaned the kitchen.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "clean", "wrong": ["cleaned", "cleans"],
        "explanation": "После did — начальная форма: clean (не cleaned)." }
    ]
  },

  {
    "id": "A-0191",
    "level": "A",
    "text": "What {gap1} Jill and Brad {gap2} last night? — They made the beds.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "make", "wrong": ["made", "makes"],
        "explanation": "После did — начальная форма: make (не made)." }
    ]
  },

  {
    "id": "A-0192",
    "level": "A",
    "text": "What {gap1} Paul and Amy {gap2} this morning? — They took the linens upstairs.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "take", "wrong": ["took", "takes"],
        "explanation": "После did — начальная форма: take (не took)." }
    ]
  },

  {
    "id": "A-0193",
    "level": "A",
    "text": "Who {gap1} Nick and Tony {gap2} last weekend? — They met some friends.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "meet", "wrong": ["met", "meets"],
        "explanation": "После did — начальная форма: meet (не met)." }
    ]
  },

  {
    "id": "A-0194",
    "level": "A",
    "text": "Where {gap1} Kathy and Tom {gap2} after work? — They went to a meeting.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "go", "wrong": ["went", "goes"],
        "explanation": "После did — начальная форма: go (не went)." }
    ]
  },

  {
    "id": "A-0195",
    "level": "A",
    "text": "What {gap1} Irma and Ron {gap2} last Saturday? — They started a new job.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "start", "wrong": ["started", "starts"],
        "explanation": "После did — начальная форма: start (не started)." }
    ]
  },

  {
    "id": "A-0196",
    "level": "A",
    "text": "What {gap1} Roberto and Selma {gap2} yesterday? — They finished the report.",
    "hint": "Вопрос о прошлом: did + начальная форма глагола.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "did", "wrong": ["does", "do"],
        "explanation": "Вопрос в прошлом для всех лиц — did." },
      { "id": "gap2", "correct": "finish", "wrong": ["finished", "finishes"],
        "explanation": "После did — начальная форма: finish (не finished)." }
    ]
  },

  {
    "id": "A-0197",
    "level": "A",
    "text": "Did Linda finish the report? — No, she {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "finish", "wrong": ["finished", "finishes"],
        "explanation": "После didn't — начальная форма: finish (не finished)." }
    ]
  },

  {
    "id": "A-0198",
    "level": "A",
    "text": "Did Felix buy the tickets? — No, he {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "buy", "wrong": ["bought", "buys"],
        "explanation": "После didn't — начальная форма: buy (не bought)." }
    ]
  },

  {
    "id": "A-0199",
    "level": "A",
    "text": "Did Marco catch the train? — No, he {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "catch", "wrong": ["caught", "catches"],
        "explanation": "После didn't — начальная форма: catch (не caught)." }
    ]
  },

  {
    "id": "A-0200",
    "level": "A",
    "text": "Did Min watch the film? — No, she {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "watch", "wrong": ["watched", "watches"],
        "explanation": "После didn't — начальная форма: watch (не watched)." }
    ]
  },

  {
    "id": "A-0201",
    "level": "A",
    "text": "Did Carlos call you? — No, he {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "call", "wrong": ["called", "calls"],
        "explanation": "После didn't — начальная форма: call (не called)." }
    ]
  },

  {
    "id": "A-0202",
    "level": "A",
    "text": "Did Mia meet the team? — No, she {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "meet", "wrong": ["met", "meets"],
        "explanation": "После didn't — начальная форма: meet (не met)." }
    ]
  },

  {
    "id": "A-0203",
    "level": "A",
    "text": "Did Ken clean the room? — No, he {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "clean", "wrong": ["cleaned", "cleans"],
        "explanation": "После didn't — начальная форма: clean (не cleaned)." }
    ]
  },

  {
    "id": "A-0204",
    "level": "A",
    "text": "Did Ed play tennis? — No, he {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "play", "wrong": ["played", "plays"],
        "explanation": "После didn't — начальная форма: play (не played)." }
    ]
  },

  {
    "id": "A-0205",
    "level": "A",
    "text": "Did Mary take the bus? — No, she {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "take", "wrong": ["took", "takes"],
        "explanation": "После didn't — начальная форма: take (не took)." }
    ]
  },

  {
    "id": "A-0206",
    "level": "A",
    "text": "Did Isaac find the keys? — No, he {gap1} {gap2}.",
    "hint": "Отрицание в прошлом — didn't + начальная форма для всех лиц.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "didn't", "wrong": ["doesn't", "wasn't"],
        "explanation": "Отрицание в прошлом — didn't (для всех лиц)." },
      { "id": "gap2", "correct": "find", "wrong": ["found", "finds"],
        "explanation": "После didn't — начальная форма: find (не found)." }
    ]
  },

  {
    "id": "A-0207",
    "level": "A",
    "text": "What will Linda do tomorrow? — She {gap1} {gap2} classes.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "take", "wrong": ["takes", "took"],
        "explanation": "После will глагол НЕ меняется: take (не takes)." }
    ]
  },

  {
    "id": "A-0208",
    "level": "A",
    "text": "What will Felix do next year? — He {gap1} {gap2} a house.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "buy", "wrong": ["buys", "bought"],
        "explanation": "После will глагол НЕ меняется: buy (не buys)." }
    ]
  },

  {
    "id": "A-0209",
    "level": "A",
    "text": "What will Marco do tonight? — He {gap1} {gap2} a job.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "start", "wrong": ["starts", "started"],
        "explanation": "После will глагол НЕ меняется: start (не starts)." }
    ]
  },

  {
    "id": "A-0210",
    "level": "A",
    "text": "What will Min do next week? — She {gap1} {gap2} dinner.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "make", "wrong": ["makes", "made"],
        "explanation": "После will глагол НЕ меняется: make (не makes)." }
    ]
  },

  {
    "id": "A-0211",
    "level": "A",
    "text": "What will Carlos do soon? — He {gap1} {gap2} you.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "call", "wrong": ["calls", "called"],
        "explanation": "После will глагол НЕ меняется: call (не calls)." }
    ]
  },

  {
    "id": "A-0212",
    "level": "A",
    "text": "What will Mia do next month? — She {gap1} {gap2} you.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "help", "wrong": ["helps", "helped"],
        "explanation": "После will глагол НЕ меняется: help (не helps)." }
    ]
  },

  {
    "id": "A-0213",
    "level": "A",
    "text": "What will Ken do this evening? — He {gap1} {gap2} the team.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "meet", "wrong": ["meets", "met"],
        "explanation": "После will глагол НЕ меняется: meet (не meets)." }
    ]
  },

  {
    "id": "A-0214",
    "level": "A",
    "text": "What will Ed do next Monday? — He {gap1} {gap2} a film.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После will глагол НЕ меняется: watch (не watches)." }
    ]
  },

  {
    "id": "A-0215",
    "level": "A",
    "text": "What will Mary do tomorrow? — She {gap1} {gap2} classes.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "take", "wrong": ["takes", "took"],
        "explanation": "После will глагол НЕ меняется: take (не takes)." }
    ]
  },

  {
    "id": "A-0216",
    "level": "A",
    "text": "What will Isaac do next year? — He {gap1} {gap2} a house.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "buy", "wrong": ["buys", "bought"],
        "explanation": "После will глагол НЕ меняется: buy (не buys)." }
    ]
  },

  {
    "id": "A-0217",
    "level": "A",
    "text": "What will Sandra do tonight? — She {gap1} {gap2} a job.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "start", "wrong": ["starts", "started"],
        "explanation": "После will глагол НЕ меняется: start (не starts)." }
    ]
  },

  {
    "id": "A-0218",
    "level": "A",
    "text": "What will Celia do next week? — She {gap1} {gap2} dinner.",
    "hint": "will + начальная форма; глагол не берёт -s даже с He/She/It.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["does", "is"],
        "explanation": "Будущее простое строится с will." },
      { "id": "gap2", "correct": "make", "wrong": ["makes", "made"],
        "explanation": "После will глагол НЕ меняется: make (не makes)." }
    ]
  },

  {
    "id": "A-0219",
    "level": "A",
    "text": "Will we come tonight? — No, we {gap1} {gap2}.",
    "hint": "won't = will not; после него начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "doesn't"],
        "explanation": "Отрицание в будущем — won't (= will not)." },
      { "id": "gap2", "correct": "come", "wrong": ["comes", "came"],
        "explanation": "После won't — начальная форма: come." }
    ]
  },

  {
    "id": "A-0220",
    "level": "A",
    "text": "Will they help next week? — No, they {gap1} {gap2}.",
    "hint": "won't = will not; после него начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "doesn't"],
        "explanation": "Отрицание в будущем — won't (= will not)." },
      { "id": "gap2", "correct": "help", "wrong": ["helps", "helped"],
        "explanation": "После won't — начальная форма: help." }
    ]
  },

  {
    "id": "A-0221",
    "level": "A",
    "text": "Will you start soon? — No, you {gap1} {gap2}.",
    "hint": "won't = will not; после него начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "doesn't"],
        "explanation": "Отрицание в будущем — won't (= will not)." },
      { "id": "gap2", "correct": "start", "wrong": ["starts", "started"],
        "explanation": "После won't — начальная форма: start." }
    ]
  },

  {
    "id": "A-0222",
    "level": "A",
    "text": "Will they work next month? — No, they {gap1} {gap2}.",
    "hint": "won't = will not; после него начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "doesn't"],
        "explanation": "Отрицание в будущем — won't (= will not)." },
      { "id": "gap2", "correct": "work", "wrong": ["works", "worked"],
        "explanation": "После won't — начальная форма: work." }
    ]
  },

  {
    "id": "A-0223",
    "level": "A",
    "text": "Will they study this evening? — No, they {gap1} {gap2}.",
    "hint": "won't = will not; после него начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "doesn't"],
        "explanation": "Отрицание в будущем — won't (= will not)." },
      { "id": "gap2", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После won't — начальная форма: study." }
    ]
  },

  {
    "id": "A-0224",
    "level": "A",
    "text": "Will they call next Monday? — No, they {gap1} {gap2}.",
    "hint": "won't = will not; после него начальная форма.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "doesn't"],
        "explanation": "Отрицание в будущем — won't (= will not)." },
      { "id": "gap2", "correct": "call", "wrong": ["calls", "called"],
        "explanation": "После won't — начальная форма: call." }
    ]
  },

  {
    "id": "A-0225",
    "level": "A",
    "text": "{gap1} Nikos {gap2} me tomorrow? — Yes, he will.",
    "hint": "Вопрос в будущем: Will + подлежащее + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Does", "Did"],
        "explanation": "Вопрос в будущем начинается с Will." },
      { "id": "gap2", "correct": "call", "wrong": ["calls", "called"],
        "explanation": "После Will + подлежащее — начальная форма: call." }
    ]
  },

  {
    "id": "A-0226",
    "level": "A",
    "text": "{gap1} Pam {gap2} me next year? — Yes, she will.",
    "hint": "Вопрос в будущем: Will + подлежащее + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Does", "Did"],
        "explanation": "Вопрос в будущем начинается с Will." },
      { "id": "gap2", "correct": "help", "wrong": ["helps", "helped"],
        "explanation": "После Will + подлежащее — начальная форма: help." }
    ]
  },

  {
    "id": "A-0227",
    "level": "A",
    "text": "{gap1} Pedro {gap2} me tonight? — Yes, he will.",
    "hint": "Вопрос в будущем: Will + подлежащее + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Does", "Did"],
        "explanation": "Вопрос в будущем начинается с Will." },
      { "id": "gap2", "correct": "meet", "wrong": ["meets", "met"],
        "explanation": "После Will + подлежащее — начальная форма: meet." }
    ]
  },

  {
    "id": "A-0228",
    "level": "A",
    "text": "{gap1} Ana {gap2} me next week? — Yes, she will.",
    "hint": "Вопрос в будущем: Will + подлежащее + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Does", "Did"],
        "explanation": "Вопрос в будущем начинается с Will." },
      { "id": "gap2", "correct": "see", "wrong": ["sees", "saw"],
        "explanation": "После Will + подлежащее — начальная форма: see." }
    ]
  },

  {
    "id": "A-0229",
    "level": "A",
    "text": "{gap1} Linda {gap2} me soon? — Yes, she will.",
    "hint": "Вопрос в будущем: Will + подлежащее + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Does", "Did"],
        "explanation": "Вопрос в будущем начинается с Will." },
      { "id": "gap2", "correct": "call", "wrong": ["calls", "called"],
        "explanation": "После Will + подлежащее — начальная форма: call." }
    ]
  },

  {
    "id": "A-0230",
    "level": "A",
    "text": "{gap1} Felix {gap2} me next month? — Yes, he will.",
    "hint": "Вопрос в будущем: Will + подлежащее + начальная форма.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Does", "Did"],
        "explanation": "Вопрос в будущем начинается с Will." },
      { "id": "gap2", "correct": "help", "wrong": ["helps", "helped"],
        "explanation": "После Will + подлежащее — начальная форма: help." }
    ]
  },

  {
    "id": "A-0231",
    "level": "A",
    "text": "{gap1} Linda {gap2} coffee every day? — Yes, she {gap3} two cups.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "drink", "wrong": ["drinks", "drank"],
        "explanation": "После Does — начальная форма: drink." },
      { "id": "gap3", "correct": "drinks", "wrong": ["drink", "drank"],
        "explanation": "В утверждении для He/She/It добавляем -s: drinks." }
    ]
  },

  {
    "id": "A-0232",
    "level": "A",
    "text": "{gap1} Felix {gap2} TV every day? — Yes, he {gap3} the news.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "watch", "wrong": ["watches", "watched"],
        "explanation": "После Does — начальная форма: watch." },
      { "id": "gap3", "correct": "watches", "wrong": ["watch", "watched"],
        "explanation": "В утверждении для He/She/It добавляем -s: watches." }
    ]
  },

  {
    "id": "A-0233",
    "level": "A",
    "text": "{gap1} Marco {gap2} English every day? — Yes, he {gap3} hard.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "study", "wrong": ["studies", "studied"],
        "explanation": "После Does — начальная форма: study." },
      { "id": "gap3", "correct": "studies", "wrong": ["study", "studied"],
        "explanation": "В утверждении для He/She/It добавляем -s: studies." }
    ]
  },

  {
    "id": "A-0234",
    "level": "A",
    "text": "{gap1} Min {gap2} breakfast every day? — Yes, she {gap3} eggs.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "eat", "wrong": ["eats", "ate"],
        "explanation": "После Does — начальная форма: eat." },
      { "id": "gap3", "correct": "eats", "wrong": ["eat", "ate"],
        "explanation": "В утверждении для He/She/It добавляем -s: eats." }
    ]
  },

  {
    "id": "A-0235",
    "level": "A",
    "text": "{gap1} Carlos {gap2} tennis every day? — Yes, he {gap3} for an hour.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "play", "wrong": ["plays", "played"],
        "explanation": "После Does — начальная форма: play." },
      { "id": "gap3", "correct": "plays", "wrong": ["play", "played"],
        "explanation": "В утверждении для He/She/It добавляем -s: plays." }
    ]
  },

  {
    "id": "A-0236",
    "level": "A",
    "text": "{gap1} Mia {gap2} English every day? — Yes, she {gap3} fluently.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "speak", "wrong": ["speaks", "spoke"],
        "explanation": "После Does — начальная форма: speak." },
      { "id": "gap3", "correct": "speaks", "wrong": ["speak", "spoke"],
        "explanation": "В утверждении для He/She/It добавляем -s: speaks." }
    ]
  },

  {
    "id": "A-0237",
    "level": "A",
    "text": "{gap1} Ken {gap2} to the gym every day? — Yes, he {gap3} at 7.",
    "hint": "Вопрос: does + начальная форма; в ответе для He/She/It — форма с -s.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Simple",
      "wrong": ["Past Simple", "Future Simple"],
      "explanation": "Регулярное / постоянное действие или факт в настоящем → Present Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Does", "wrong": ["Do", "Did"],
        "explanation": "He/She/It → Does в вопросе." },
      { "id": "gap2", "correct": "go", "wrong": ["goes", "went"],
        "explanation": "После Does — начальная форма: go." },
      { "id": "gap3", "correct": "goes", "wrong": ["go", "went"],
        "explanation": "В утверждении для He/She/It добавляем -s: goes." }
    ]
  },

  {
    "id": "A-0238",
    "level": "A",
    "text": "{gap1} Ed {gap2} groceries yesterday? — No, he {gap3} groceries.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "buy", "wrong": ["bought", "buys"],
        "explanation": "После Did — начальная форма: buy (не bought)." },
      { "id": "gap3", "correct": "didn't buy", "wrong": ["doesn't buy", "didn't bought"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (buy)." }
    ]
  },

  {
    "id": "A-0239",
    "level": "A",
    "text": "{gap1} Mary {gap2} a friend yesterday? — No, she {gap3} a friend.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "meet", "wrong": ["met", "meets"],
        "explanation": "После Did — начальная форма: meet (не met)." },
      { "id": "gap3", "correct": "didn't meet", "wrong": ["doesn't meet", "didn't met"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (meet)." }
    ]
  },

  {
    "id": "A-0240",
    "level": "A",
    "text": "{gap1} Isaac {gap2} the bus yesterday? — No, he {gap3} the bus.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "take", "wrong": ["took", "takes"],
        "explanation": "После Did — начальная форма: take (не took)." },
      { "id": "gap3", "correct": "didn't take", "wrong": ["doesn't take", "didn't took"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (take)." }
    ]
  },

  {
    "id": "A-0241",
    "level": "A",
    "text": "{gap1} Sandra {gap2} the keys yesterday? — No, she {gap3} the keys.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "find", "wrong": ["found", "finds"],
        "explanation": "После Did — начальная форма: find (не found)." },
      { "id": "gap3", "correct": "didn't find", "wrong": ["doesn't find", "didn't found"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (find)." }
    ]
  },

  {
    "id": "A-0242",
    "level": "A",
    "text": "{gap1} Celia {gap2} home yesterday? — No, she {gap3} home.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "go", "wrong": ["went", "goes"],
        "explanation": "После Did — начальная форма: go (не went)." },
      { "id": "gap3", "correct": "didn't go", "wrong": ["doesn't go", "didn't went"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (go)." }
    ]
  },

  {
    "id": "A-0243",
    "level": "A",
    "text": "{gap1} Maria {gap2} lunch yesterday? — No, she {gap3} lunch.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "eat", "wrong": ["ate", "eats"],
        "explanation": "После Did — начальная форма: eat (не ate)." },
      { "id": "gap3", "correct": "didn't eat", "wrong": ["doesn't eat", "didn't ate"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (eat)." }
    ]
  },

  {
    "id": "A-0244",
    "level": "A",
    "text": "{gap1} Sergio {gap2} the film yesterday? — No, he {gap3} the film.",
    "hint": "Вопрос с did + начальная форма; отрицательный ответ — didn't + начальная форма.",
    "tags": ["Вопрос", "Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Simple",
      "wrong": ["Present Simple", "Future Simple"],
      "explanation": "Действие завершилось в прошлом (маркер прошлого) → Past Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "Did", "wrong": ["Does", "Do"],
        "explanation": "Вопрос в прошлом — Did." },
      { "id": "gap2", "correct": "see", "wrong": ["saw", "sees"],
        "explanation": "После Did — начальная форма: see (не saw)." },
      { "id": "gap3", "correct": "didn't see", "wrong": ["doesn't see", "didn't saw"],
        "explanation": "Отрицание в прошлом: didn't + начальная форма (see)." }
    ]
  },

  {
    "id": "A-0245",
    "level": "A",
    "text": "What {gap1} they {gap2} next year? — Brenda and Leo {gap3} become citizens.",
    "hint": "Будущее: will + начальная форма и в вопросе, и в ответе.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["do", "did"],
        "explanation": "Будущее простое — will." },
      { "id": "gap2", "correct": "do", "wrong": ["does", "did"],
        "explanation": "После will — начальная форма (здесь do)." },
      { "id": "gap3", "correct": "will", "wrong": ["are", "did"],
        "explanation": "В ответе тоже will + начальная форма." }
    ]
  },

  {
    "id": "A-0246",
    "level": "A",
    "text": "What {gap1} they {gap2} next year? — Jill and Brad {gap3} take classes.",
    "hint": "Будущее: will + начальная форма и в вопросе, и в ответе.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["do", "did"],
        "explanation": "Будущее простое — will." },
      { "id": "gap2", "correct": "do", "wrong": ["does", "did"],
        "explanation": "После will — начальная форма (здесь do)." },
      { "id": "gap3", "correct": "will", "wrong": ["are", "did"],
        "explanation": "В ответе тоже will + начальная форма." }
    ]
  },

  {
    "id": "A-0247",
    "level": "A",
    "text": "What {gap1} they {gap2} next year? — Paul and Amy {gap3} buy a house.",
    "hint": "Будущее: will + начальная форма и в вопросе, и в ответе.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["do", "did"],
        "explanation": "Будущее простое — will." },
      { "id": "gap2", "correct": "do", "wrong": ["does", "did"],
        "explanation": "После will — начальная форма (здесь do)." },
      { "id": "gap3", "correct": "will", "wrong": ["are", "did"],
        "explanation": "В ответе тоже will + начальная форма." }
    ]
  },

  {
    "id": "A-0248",
    "level": "A",
    "text": "What {gap1} they {gap2} next year? — Nick and Tony {gap3} start a business.",
    "hint": "Будущее: will + начальная форма и в вопросе, и в ответе.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["do", "did"],
        "explanation": "Будущее простое — will." },
      { "id": "gap2", "correct": "do", "wrong": ["does", "did"],
        "explanation": "После will — начальная форма (здесь do)." },
      { "id": "gap3", "correct": "will", "wrong": ["are", "did"],
        "explanation": "В ответе тоже will + начальная форма." }
    ]
  },

  {
    "id": "A-0249",
    "level": "A",
    "text": "What {gap1} they {gap2} next year? — Kathy and Tom {gap3} learn English.",
    "hint": "Будущее: will + начальная форма и в вопросе, и в ответе.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["do", "did"],
        "explanation": "Будущее простое — will." },
      { "id": "gap2", "correct": "do", "wrong": ["does", "did"],
        "explanation": "После will — начальная форма (здесь do)." },
      { "id": "gap3", "correct": "will", "wrong": ["are", "did"],
        "explanation": "В ответе тоже will + начальная форма." }
    ]
  },

  {
    "id": "A-0250",
    "level": "A",
    "text": "What {gap1} they {gap2} next year? — Irma and Ron {gap3} go abroad.",
    "hint": "Будущее: will + начальная форма и в вопросе, и в ответе.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Future Simple",
      "wrong": ["Present Simple", "Past Simple"],
      "explanation": "Действие относится к будущему (will + маркер будущего) → Future Simple."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["do", "did"],
        "explanation": "Будущее простое — will." },
      { "id": "gap2", "correct": "do", "wrong": ["does", "did"],
        "explanation": "После will — начальная форма (здесь do)." },
      { "id": "gap3", "correct": "will", "wrong": ["are", "did"],
        "explanation": "В ответе тоже will + начальная форма." }
    ]
  }
  /* ===================== УРОВЕНЬ B — CONTINUOUS ===================== */



  /* ============ УРОВЕНЬ C — PERFECT + PERFECT CONTINUOUS ============ */

 


];
