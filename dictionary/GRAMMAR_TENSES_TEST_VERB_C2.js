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

const GRAMMAR_TENSES_TEST_VERB_C2 = [

  /* ===================== УРОВЕНЬ A — SIMPLE ===================== */

  

  /* ===================== УРОВЕНЬ B — CONTINUOUS ===================== */

  

  /* ============ УРОВЕНЬ C — PERFECT + PERFECT CONTINUOUS ============ */

  {
    "id": "C2-0001",
    "level": "C",
    "text": "I {gap1} already {gap2} my homework.",
    "hint": "already — результат важен к настоящему моменту.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "already + результат к настоящему → Present Perfect (have/has + 3-я форма)."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "I → have." },
      { "id": "gap2", "correct": "done", "wrong": ["did", "do"],
        "explanation": "3-я форма do → done (не did)." }
    ]
  },

  {
    "id": "C2-0002",
    "level": "C",
    "text": "She {gap1} just {gap2} the door.",
    "hint": "just — только что, результат налицо сейчас.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "just + связь с настоящим → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "She → has." },
      { "id": "gap2", "correct": "closed", "wrong": ["close", "closing"],
        "explanation": "Правильный глагол: 3-я форма = closed (-ed)." }
    ]
  },

  {
    "id": "C2-0003",
    "level": "C",
    "text": "We {gap1} {gap2} him since Monday.",
    "hint": "since Monday — период, тянущийся до сейчас.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "since + период до настоящего → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "We → have, отрицание haven't." },
      { "id": "gap2", "correct": "seen", "wrong": ["saw", "see"],
        "explanation": "3-я форма see → seen (не saw)." }
    ]
  },

  {
    "id": "C2-0004",
    "level": "C",
    "text": "When I arrived, the train {gap1} already {gap2}.",
    "hint": "Одно прошлое действие случилось раньше другого.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Действие раньше другого прошлого → Past Perfect (had + 3-я форма)."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "left", "wrong": ["leave", "leaved"],
        "explanation": "3-я форма leave → left (нет «leaved»)." }
    ]
  },

  {
    "id": "C2-0005",
    "level": "C",
    "text": "You look tired. {gap1} you {gap2} {gap3} all day?",
    "hint": "Процесс, длившийся вплоть до настоящего момента.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "Длительный процесс до настоящего → Present Perfect Continuous (have/has been + V-ing)."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "you → Have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "working", "wrong": ["work", "worked"],
        "explanation": "После been — форма -ing: working." }
    ]
  },

  {
    "id": "C2-0006",
    "level": "C",
    "text": "She {gap1} {gap2} {gap3} English for three years.",
    "hint": "for three years + действие продолжается.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Past Perfect Continuous"],
      "explanation": "Процесс длится и сейчас (for + период) → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "She → has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "was"],
        "explanation": "has + been." },
      { "id": "gap3", "correct": "learning", "wrong": ["learn", "learned"],
        "explanation": "После been — форма -ing: learning." }
    ]
  },

  {
    "id": "C2-0007",
    "level": "C",
    "text": "By next June they {gap1} {gap2} {gap3} the bridge.",
    "hint": "By + момент будущего: действие завершится к нему.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма)."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["are", "have"],
        "explanation": "Future Perfect начинается с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "will + have (не has/had)." },
      { "id": "gap3", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "3-я форма build → built (нет «builded»)." }
    ]
  },

  /* ================================================================
     УРОВЕНЬ C — PERFECT CONTINUOUS (Present / Past / Future)
     250 заданий, от простых (1 пропуск) к сложным (вопрос+ответ).
     Формат: «Вопрос — Ответ». Тренируется have/has · had · will ·
     been · форма -ing (вкл. удвоение, немую -e, -ie→-ying),
     неправильные глаголы (2-я форма как дистрактор), отрицание, вопрос.
     ================================================================ */

  {
    "id": "C2-0008",
    "level": "C",
    "text": "How long have I been working? — I have been {gap1} for two hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0009",
    "level": "C",
    "text": "How long have I been playing? — I have been {gap1} for three hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0010",
    "level": "C",
    "text": "How long have I been waiting? — I have been {gap1} for an hour.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0011",
    "level": "C",
    "text": "How long have I been talking? — I have been {gap1} for half an hour.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0012",
    "level": "C",
    "text": "How long have I been walking? — I have been {gap1} for twenty minutes.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0013",
    "level": "C",
    "text": "How long have I been cleaning? — I have been {gap1} for forty minutes.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0014",
    "level": "C",
    "text": "How long have I been cooking? — I have been {gap1} for a while.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0015",
    "level": "C",
    "text": "How long have I been painting? — I have been {gap1} for a long time.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0016",
    "level": "C",
    "text": "How long have I been watching? — I have been {gap1} for ages.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0017",
    "level": "C",
    "text": "How long have I been learning? — I have been {gap1} for some time.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0018",
    "level": "C",
    "text": "How long have I been listening? — I have been {gap1} for two hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      }
    ]
  },

  {
    "id": "C2-0019",
    "level": "C",
    "text": "How long have I been studying? — I have been {gap1} for three hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "После been — форма -ing: studying."
      }
    ]
  },

  {
    "id": "C2-0020",
    "level": "C",
    "text": "How long have I been staying? — I have been {gap1} for an hour.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "staying",
        "wrong": [
          "stay",
          "stayed"
        ],
        "explanation": "После been — форма -ing: staying."
      }
    ]
  },

  {
    "id": "C2-0021",
    "level": "C",
    "text": "How long have I been helping? — I have been {gap1} for half an hour.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "После been — форма -ing: helping."
      }
    ]
  },

  {
    "id": "C2-0022",
    "level": "C",
    "text": "How long have I been eating? — I have been {gap1} for twenty minutes.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "После been — форма -ing: eating."
      }
    ]
  },

  {
    "id": "C2-0023",
    "level": "C",
    "text": "How long have I been reading? — I have been {gap1} for forty minutes.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "После been — форма -ing: reading."
      }
    ]
  },

  {
    "id": "C2-0024",
    "level": "C",
    "text": "How long have I been sleeping? — I have been {gap1} for a while.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "После been — форма -ing: sleeping."
      }
    ]
  },

  {
    "id": "C2-0025",
    "level": "C",
    "text": "How long have I been teaching? — I have been {gap1} for a long time.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "После been — форма -ing: teaching."
      }
    ]
  },

  {
    "id": "C2-0026",
    "level": "C",
    "text": "How long have I been speaking? — I have been {gap1} for ages.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "После been — форма -ing: speaking."
      }
    ]
  },

  {
    "id": "C2-0027",
    "level": "C",
    "text": "How long have I been standing? — I have been {gap1} for some time.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "После been — форма -ing: standing."
      }
    ]
  },

  {
    "id": "C2-0028",
    "level": "C",
    "text": "How long have I been running? — I have been {gap1} for two hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "running",
        "wrong": [
          "runing",
          "run"
        ],
        "explanation": "После been — форма -ing: running. Краткий слог — согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0029",
    "level": "C",
    "text": "How long have I been swimming? — I have been {gap1} for three hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swim"
        ],
        "explanation": "После been — форма -ing: swimming. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0030",
    "level": "C",
    "text": "How long have I been sitting? — I have been {gap1} for an hour.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sit"
        ],
        "explanation": "После been — форма -ing: sitting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0031",
    "level": "C",
    "text": "How long have I been jogging? — I have been {gap1} for half an hour.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jog"
        ],
        "explanation": "После been — форма -ing: jogging. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0032",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} planning all day.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0033",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} shopping all morning.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0034",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} chatting all night.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0035",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} writing all afternoon.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0036",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} driving all week.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0037",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} dancing all day.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0038",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} riding all morning.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0039",
    "level": "C",
    "text": "What have I been doing? — I have {gap1} baking all night.",
    "hint": "have/has + been + -ing.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0040",
    "level": "C",
    "text": "How long has it been raining? — It has been {gap1} for hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "raining",
        "wrong": [
          "rain",
          "rained"
        ],
        "explanation": "После been — форма -ing: raining."
      }
    ]
  },

  {
    "id": "C2-0041",
    "level": "C",
    "text": "How long has it been raining? — It {gap1} {gap2} {gap3} since morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "raining",
        "wrong": [
          "rain",
          "rained"
        ],
        "explanation": "После been — форма -ing: raining."
      }
    ]
  },

  {
    "id": "C2-0042",
    "level": "C",
    "text": "How long {gap1} it {gap2} {gap3}? — It has been raining all day.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "raining",
        "wrong": [
          "rain",
          "rained"
        ],
        "explanation": "После been — форма -ing: raining."
      }
    ]
  },

  {
    "id": "C2-0043",
    "level": "C",
    "text": "How long has it been snowing? — It has been {gap1} for hours.",
    "hint": "Continuous-часть всегда в форме -ing.",
    "tags": [
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "snowing",
        "wrong": [
          "snow",
          "snowed"
        ],
        "explanation": "После been — форма -ing: snowing."
      }
    ]
  },

  {
    "id": "C2-0044",
    "level": "C",
    "text": "How long has it been snowing? — It {gap1} {gap2} {gap3} since morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "snowing",
        "wrong": [
          "snow",
          "snowed"
        ],
        "explanation": "После been — форма -ing: snowing."
      }
    ]
  },

  {
    "id": "C2-0045",
    "level": "C",
    "text": "How long {gap1} it {gap2} {gap3}? — It has been snowing all day.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "snowing",
        "wrong": [
          "snow",
          "snowed"
        ],
        "explanation": "После been — форма -ing: snowing."
      }
    ]
  },

  {
    "id": "C2-0046",
    "level": "C",
    "text": "Why am I so tired? — Because I {gap1} been {gap2} for twenty minutes.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "exercising",
        "wrong": [
          "exerciseing",
          "exercise"
        ],
        "explanation": "После been — форма -ing: exercising. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0047",
    "level": "C",
    "text": "Why am I so tired? — Because I {gap1} been {gap2} for forty minutes.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lie"
        ],
        "explanation": "После been — форма -ing: lying. -ie → -ying."
      }
    ]
  },

  {
    "id": "C2-0048",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for a while.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0049",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for a long time.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0050",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for ages.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0051",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for some time.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0052",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for two hours.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0053",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for three hours.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0054",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for an hour.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0055",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for half an hour.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0056",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for twenty minutes.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0057",
    "level": "C",
    "text": "Why are you so tired? — Because you {gap1} been {gap2} for forty minutes.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0058",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for two hours.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0059",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for three hours.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0060",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for an hour.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0061",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for half an hour.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0062",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for twenty minutes.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0063",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for forty minutes.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0064",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for a while.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0065",
    "level": "C",
    "text": "Why are we so tired? — Because we {gap1} been {gap2} for a long time.",
    "hint": "have/has зависит от лица; основной глагол — в форме -ing.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0066",
    "level": "C",
    "text": "How long have we been watching? — We {gap1} {gap2} watching since morning.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0067",
    "level": "C",
    "text": "How long have we been learning? — We {gap1} {gap2} learning since 9 AM.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0068",
    "level": "C",
    "text": "How long have we been listening? — We {gap1} {gap2} listening since Monday.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0069",
    "level": "C",
    "text": "How long have we been studying? — We {gap1} {gap2} studying since lunchtime.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0070",
    "level": "C",
    "text": "How long have we been staying? — We {gap1} {gap2} staying since noon.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0071",
    "level": "C",
    "text": "How long have we been helping? — We {gap1} {gap2} helping since this morning.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0072",
    "level": "C",
    "text": "How long have we been eating? — We {gap1} {gap2} eating since last week.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0073",
    "level": "C",
    "text": "How long have we been reading? — We {gap1} {gap2} reading since breakfast.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0074",
    "level": "C",
    "text": "How long have we been sleeping? — We {gap1} {gap2} sleeping since morning.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0075",
    "level": "C",
    "text": "How long have we been teaching? — We {gap1} {gap2} teaching since 9 AM.",
    "hint": "Связка have/has + been.",
    "tags": [
      "been"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      }
    ]
  },

  {
    "id": "C2-0076",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for a while.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0077",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for a long time.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0078",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for ages.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0079",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for some time.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0080",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for two hours.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0081",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for three hours.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0082",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for an hour.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0083",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for half an hour.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0084",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for twenty minutes.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0085",
    "level": "C",
    "text": "Why were you so tired? — Because you {gap1} been {gap2} for forty minutes.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0086",
    "level": "C",
    "text": "Why were we so tired? — Because we {gap1} been {gap2} for two hours.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0087",
    "level": "C",
    "text": "Why were we so tired? — Because we {gap1} been {gap2} for three hours.",
    "hint": "had been + -ing — для всех лиц одинаково.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0088",
    "level": "C",
    "text": "By midnight, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0089",
    "level": "C",
    "text": "By next month, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0090",
    "level": "C",
    "text": "By the end of the day, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0091",
    "level": "C",
    "text": "By 6 PM, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0092",
    "level": "C",
    "text": "By next June, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0093",
    "level": "C",
    "text": "By the time you return, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0094",
    "level": "C",
    "text": "By tomorrow morning, he {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      }
    ]
  },

  {
    "id": "C2-0095",
    "level": "C",
    "text": "By the end of the day, she {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0096",
    "level": "C",
    "text": "By 6 PM, she {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0097",
    "level": "C",
    "text": "By next June, she {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0098",
    "level": "C",
    "text": "By the time you return, she {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0099",
    "level": "C",
    "text": "By tomorrow morning, she {gap1} have been {gap2} for hours. — Really? That long?",
    "hint": "will + have been + -ing.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0100",
    "level": "C",
    "text": "Have we been speaking all afternoon? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "После been — форма -ing: speaking."
      }
    ]
  },

  {
    "id": "C2-0101",
    "level": "C",
    "text": "Have we been standing all week? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "После been — форма -ing: standing."
      }
    ]
  },

  {
    "id": "C2-0102",
    "level": "C",
    "text": "Have we been running all day? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "running",
        "wrong": [
          "runing",
          "run"
        ],
        "explanation": "После been — форма -ing: running. Краткий слог — согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0103",
    "level": "C",
    "text": "Have we been swimming all morning? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swim"
        ],
        "explanation": "После been — форма -ing: swimming. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0104",
    "level": "C",
    "text": "Have we been sitting all night? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sit"
        ],
        "explanation": "После been — форма -ing: sitting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0105",
    "level": "C",
    "text": "Have we been jogging all afternoon? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jog"
        ],
        "explanation": "После been — форма -ing: jogging. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0106",
    "level": "C",
    "text": "Have we been planning all week? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "planning",
        "wrong": [
          "planing",
          "plan"
        ],
        "explanation": "После been — форма -ing: planning. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0107",
    "level": "C",
    "text": "Have we been shopping all day? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "shopping",
        "wrong": [
          "shoping",
          "shop"
        ],
        "explanation": "После been — форма -ing: shopping. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0108",
    "level": "C",
    "text": "Have we been chatting all morning? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "chatting",
        "wrong": [
          "chating",
          "chat"
        ],
        "explanation": "После been — форма -ing: chatting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0109",
    "level": "C",
    "text": "Have we been writing all night? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "writing",
        "wrong": [
          "writeing",
          "write"
        ],
        "explanation": "После been — форма -ing: writing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0110",
    "level": "C",
    "text": "Have we been driving all afternoon? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drive"
        ],
        "explanation": "После been — форма -ing: driving. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0111",
    "level": "C",
    "text": "Have we been dancing all week? — No, we {gap1} been {gap2} at all.",
    "hint": "Отрицание present perfect continuous: haven't/hasn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "Процесс длился весь период и важен сейчас → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "haven't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → haven't been."
      },
      {
        "id": "gap2",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dance"
        ],
        "explanation": "После been — форма -ing: dancing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0112",
    "level": "C",
    "text": "How long have we been riding? — We {gap1} {gap2} {gap3} since Monday.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "riding",
        "wrong": [
          "rideing",
          "ride"
        ],
        "explanation": "После been — форма -ing: riding. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0113",
    "level": "C",
    "text": "How long have we been baking? — We {gap1} {gap2} {gap3} since lunchtime.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bake"
        ],
        "explanation": "После been — форма -ing: baking. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0114",
    "level": "C",
    "text": "How long have we been exercising? — We {gap1} {gap2} {gap3} since noon.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "exercising",
        "wrong": [
          "exerciseing",
          "exercise"
        ],
        "explanation": "После been — форма -ing: exercising. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0115",
    "level": "C",
    "text": "How long have we been lying? — We {gap1} {gap2} {gap3} since this morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Правописание -ing",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lie"
        ],
        "explanation": "После been — форма -ing: lying. -ie → -ying."
      }
    ]
  },

  {
    "id": "C2-0116",
    "level": "C",
    "text": "How long have they been working? — They {gap1} {gap2} {gap3} since last week.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0117",
    "level": "C",
    "text": "How long have they been playing? — They {gap1} {gap2} {gap3} since breakfast.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0118",
    "level": "C",
    "text": "How long have they been waiting? — They {gap1} {gap2} {gap3} since morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0119",
    "level": "C",
    "text": "How long have they been talking? — They {gap1} {gap2} {gap3} since 9 AM.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0120",
    "level": "C",
    "text": "How long have they been walking? — They {gap1} {gap2} {gap3} since Monday.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0121",
    "level": "C",
    "text": "How long have they been cleaning? — They {gap1} {gap2} {gap3} since lunchtime.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0122",
    "level": "C",
    "text": "How long have they been cooking? — They {gap1} {gap2} {gap3} since noon.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0123",
    "level": "C",
    "text": "How long have they been painting? — They {gap1} {gap2} {gap3} since this morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0124",
    "level": "C",
    "text": "How long have they been watching? — They {gap1} {gap2} {gap3} since last week.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0125",
    "level": "C",
    "text": "How long have they been learning? — They {gap1} {gap2} {gap3} since breakfast.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0126",
    "level": "C",
    "text": "How long have they been listening? — They {gap1} {gap2} {gap3} since morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      }
    ]
  },

  {
    "id": "C2-0127",
    "level": "C",
    "text": "How long have they been studying? — They {gap1} {gap2} {gap3} since 9 AM.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "После been — форма -ing: studying."
      }
    ]
  },

  {
    "id": "C2-0128",
    "level": "C",
    "text": "How long have they been staying? — They {gap1} {gap2} {gap3} since Monday.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "staying",
        "wrong": [
          "stay",
          "stayed"
        ],
        "explanation": "После been — форма -ing: staying."
      }
    ]
  },

  {
    "id": "C2-0129",
    "level": "C",
    "text": "How long have they been helping? — They {gap1} {gap2} {gap3} since lunchtime.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "После been — форма -ing: helping."
      }
    ]
  },

  {
    "id": "C2-0130",
    "level": "C",
    "text": "How long have they been eating? — They {gap1} {gap2} {gap3} since noon.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "После been — форма -ing: eating."
      }
    ]
  },

  {
    "id": "C2-0131",
    "level": "C",
    "text": "How long have they been reading? — They {gap1} {gap2} {gap3} since this morning.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "После been — форма -ing: reading."
      }
    ]
  },

  {
    "id": "C2-0132",
    "level": "C",
    "text": "How long have they been sleeping? — They {gap1} {gap2} {gap3} since last week.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "После been — форма -ing: sleeping."
      }
    ]
  },

  {
    "id": "C2-0133",
    "level": "C",
    "text": "How long have they been teaching? — They {gap1} {gap2} {gap3} since breakfast.",
    "hint": "Вся формула: have/has + been + -ing.",
    "tags": [
      "Неправильный глагол",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "are"
        ],
        "explanation": "I/You/We/They → have been."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "После been — форма -ing: teaching."
      }
    ]
  },

  {
    "id": "C2-0134",
    "level": "C",
    "text": "How long had we been waiting before the bell rang? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0135",
    "level": "C",
    "text": "How long had we been talking before the meeting started? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0136",
    "level": "C",
    "text": "How long had we been walking before lunch? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0137",
    "level": "C",
    "text": "How long had we been cleaning before the guests arrived? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0138",
    "level": "C",
    "text": "How long had we been cooking by the time we got there? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0139",
    "level": "C",
    "text": "How long had we been painting before the rain stopped? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0140",
    "level": "C",
    "text": "How long had we been watching before the bell rang? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0141",
    "level": "C",
    "text": "How long had we been learning before the meeting started? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0142",
    "level": "C",
    "text": "How long had we been listening before lunch? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      }
    ]
  },

  {
    "id": "C2-0143",
    "level": "C",
    "text": "How long had we been studying before the guests arrived? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "После been — форма -ing: studying."
      }
    ]
  },

  {
    "id": "C2-0144",
    "level": "C",
    "text": "How long had we been staying by the time we got there? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "staying",
        "wrong": [
          "stay",
          "stayed"
        ],
        "explanation": "После been — форма -ing: staying."
      }
    ]
  },

  {
    "id": "C2-0145",
    "level": "C",
    "text": "How long had we been helping before the rain stopped? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "После been — форма -ing: helping."
      }
    ]
  },

  {
    "id": "C2-0146",
    "level": "C",
    "text": "How long had we been eating before the bell rang? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "После been — форма -ing: eating."
      }
    ]
  },

  {
    "id": "C2-0147",
    "level": "C",
    "text": "How long had we been reading before the meeting started? — We {gap1} {gap2} {gap3} for a while.",
    "hint": "Формула: had + been + -ing.",
    "tags": [
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "После been — форма -ing: reading."
      }
    ]
  },

  {
    "id": "C2-0148",
    "level": "C",
    "text": "Had we been sleeping long before lunch? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "После been — форма -ing: sleeping."
      }
    ]
  },

  {
    "id": "C2-0149",
    "level": "C",
    "text": "Had we been teaching long before the guests arrived? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "После been — форма -ing: teaching."
      }
    ]
  },

  {
    "id": "C2-0150",
    "level": "C",
    "text": "Had we been speaking long by the time we got there? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "После been — форма -ing: speaking."
      }
    ]
  },

  {
    "id": "C2-0151",
    "level": "C",
    "text": "Had we been standing long before the rain stopped? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "После been — форма -ing: standing."
      }
    ]
  },

  {
    "id": "C2-0152",
    "level": "C",
    "text": "Had we been running long before the bell rang? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "running",
        "wrong": [
          "runing",
          "run"
        ],
        "explanation": "После been — форма -ing: running. Краткий слог — согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0153",
    "level": "C",
    "text": "Had we been swimming long before the meeting started? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swim"
        ],
        "explanation": "После been — форма -ing: swimming. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0154",
    "level": "C",
    "text": "Had we been sitting long before lunch? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sit"
        ],
        "explanation": "После been — форма -ing: sitting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0155",
    "level": "C",
    "text": "Had we been jogging long before the guests arrived? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jog"
        ],
        "explanation": "После been — форма -ing: jogging. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0156",
    "level": "C",
    "text": "Had we been planning long by the time we got there? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "planning",
        "wrong": [
          "planing",
          "plan"
        ],
        "explanation": "После been — форма -ing: planning. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0157",
    "level": "C",
    "text": "Had we been shopping long before the rain stopped? — No, we {gap1} been {gap2} for long.",
    "hint": "Отрицание: hadn't been + -ing.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "hadn't",
        "wrong": [
          "hasn't",
          "didn't"
        ],
        "explanation": "Отрицание → hadn't been + -ing (для всех лиц)."
      },
      {
        "id": "gap2",
        "correct": "shopping",
        "wrong": [
          "shoping",
          "shop"
        ],
        "explanation": "После been — форма -ing: shopping. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0158",
    "level": "C",
    "text": "How long will she have been cleaning by midnight? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0159",
    "level": "C",
    "text": "How long will she have been cooking by next month? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0160",
    "level": "C",
    "text": "How long will she have been painting by the end of the day? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0161",
    "level": "C",
    "text": "How long will she have been watching by 6 PM? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0162",
    "level": "C",
    "text": "How long will she have been learning by next June? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0163",
    "level": "C",
    "text": "How long will she have been listening by the time you return? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      }
    ]
  },

  {
    "id": "C2-0164",
    "level": "C",
    "text": "How long will she have been studying by tomorrow morning? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "После been — форма -ing: studying."
      }
    ]
  },

  {
    "id": "C2-0165",
    "level": "C",
    "text": "How long will she have been staying by midnight? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "staying",
        "wrong": [
          "stay",
          "stayed"
        ],
        "explanation": "После been — форма -ing: staying."
      }
    ]
  },

  {
    "id": "C2-0166",
    "level": "C",
    "text": "How long will she have been helping by next month? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "После been — форма -ing: helping."
      }
    ]
  },

  {
    "id": "C2-0167",
    "level": "C",
    "text": "How long will she have been eating by the end of the day? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "После been — форма -ing: eating."
      }
    ]
  },

  {
    "id": "C2-0168",
    "level": "C",
    "text": "How long will she have been reading by 6 PM? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "После been — форма -ing: reading."
      }
    ]
  },

  {
    "id": "C2-0169",
    "level": "C",
    "text": "How long will she have been sleeping by next June? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "После been — форма -ing: sleeping."
      }
    ]
  },

  {
    "id": "C2-0170",
    "level": "C",
    "text": "How long will she have been teaching by the time you return? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "После been — форма -ing: teaching."
      }
    ]
  },

  {
    "id": "C2-0171",
    "level": "C",
    "text": "How long will she have been speaking by tomorrow morning? — She {gap1} {gap2} been {gap3} for a week.",
    "hint": "После will всегда have (не has).",
    "tags": [
      "He/She/It",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "Future Perfect Continuous начинается с will."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "После been — форма -ing: speaking."
      }
    ]
  },

  {
    "id": "C2-0172",
    "level": "C",
    "text": "Will she have been standing long by midnight? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "После been — форма -ing: standing."
      }
    ]
  },

  {
    "id": "C2-0173",
    "level": "C",
    "text": "Will she have been running long by next month? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "running",
        "wrong": [
          "runing",
          "run"
        ],
        "explanation": "После been — форма -ing: running. Краткий слог — согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0174",
    "level": "C",
    "text": "Will she have been swimming long by the end of the day? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swim"
        ],
        "explanation": "После been — форма -ing: swimming. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0175",
    "level": "C",
    "text": "Will she have been sitting long by 6 PM? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sit"
        ],
        "explanation": "После been — форма -ing: sitting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0176",
    "level": "C",
    "text": "Will she have been jogging long by next June? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jog"
        ],
        "explanation": "После been — форма -ing: jogging. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0177",
    "level": "C",
    "text": "Will she have been planning long by the time you return? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "planning",
        "wrong": [
          "planing",
          "plan"
        ],
        "explanation": "После been — форма -ing: planning. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0178",
    "level": "C",
    "text": "Will she have been shopping long by tomorrow morning? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "shopping",
        "wrong": [
          "shoping",
          "shop"
        ],
        "explanation": "После been — форма -ing: shopping. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0179",
    "level": "C",
    "text": "Will she have been chatting long by midnight? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "chatting",
        "wrong": [
          "chating",
          "chat"
        ],
        "explanation": "После been — форма -ing: chatting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0180",
    "level": "C",
    "text": "Will she have been writing long by next month? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "writing",
        "wrong": [
          "writeing",
          "write"
        ],
        "explanation": "После been — форма -ing: writing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0181",
    "level": "C",
    "text": "Will she have been driving long by the end of the day? — No, she {gap1} have been {gap2} for long.",
    "hint": "Отрицание: won't have been + -ing.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't",
        "wrong": [
          "wouldn't",
          "don't"
        ],
        "explanation": "Отрицание → won't have been + -ing."
      },
      {
        "id": "gap2",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drive"
        ],
        "explanation": "После been — форма -ing: driving. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0182",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been speaking since morning.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "После been — форма -ing: speaking."
      }
    ]
  },

  {
    "id": "C2-0183",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been standing since 9 AM.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Неправильный глагол"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "После been — форма -ing: standing."
      }
    ]
  },

  {
    "id": "C2-0184",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been running since Monday.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "running",
        "wrong": [
          "runing",
          "run"
        ],
        "explanation": "После been — форма -ing: running. Краткий слог — согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0185",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been swimming since lunchtime.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swim"
        ],
        "explanation": "После been — форма -ing: swimming. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0186",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been sitting since noon.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sit"
        ],
        "explanation": "После been — форма -ing: sitting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0187",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been jogging since this morning.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jog"
        ],
        "explanation": "После been — форма -ing: jogging. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0188",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been planning since last week.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "planning",
        "wrong": [
          "planing",
          "plan"
        ],
        "explanation": "После been — форма -ing: planning. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0189",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been shopping since breakfast.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "shopping",
        "wrong": [
          "shoping",
          "shop"
        ],
        "explanation": "После been — форма -ing: shopping. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0190",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been chatting since morning.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "chatting",
        "wrong": [
          "chating",
          "chat"
        ],
        "explanation": "После been — форма -ing: chatting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0191",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been writing since 9 AM.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "writing",
        "wrong": [
          "writeing",
          "write"
        ],
        "explanation": "После been — форма -ing: writing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0192",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been driving since Monday.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drive"
        ],
        "explanation": "После been — форма -ing: driving. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0193",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been dancing since lunchtime.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dance"
        ],
        "explanation": "После been — форма -ing: dancing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0194",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been riding since noon.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "riding",
        "wrong": [
          "rideing",
          "ride"
        ],
        "explanation": "После been — форма -ing: riding. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0195",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been baking since this morning.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bake"
        ],
        "explanation": "После been — форма -ing: baking. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0196",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been exercising since last week.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "exercising",
        "wrong": [
          "exerciseing",
          "exercise"
        ],
        "explanation": "После been — форма -ing: exercising. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0197",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3}? — They have been lying since breakfast.",
    "hint": "Вопрос: Have/Has + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "have",
        "wrong": [
          "has",
          "do"
        ],
        "explanation": "В вопросе — have (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lie"
        ],
        "explanation": "После been — форма -ing: lying. -ie → -ying."
      }
    ]
  },

  {
    "id": "C2-0198",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before the bell rang? — We had been chatting for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "chatting",
        "wrong": [
          "chating",
          "chat"
        ],
        "explanation": "После been — форма -ing: chatting. Согласная удваивается."
      }
    ]
  },

  {
    "id": "C2-0199",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before the meeting started? — We had been writing for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "writing",
        "wrong": [
          "writeing",
          "write"
        ],
        "explanation": "После been — форма -ing: writing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0200",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before lunch? — We had been driving for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drive"
        ],
        "explanation": "После been — форма -ing: driving. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0201",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before the guests arrived? — We had been dancing for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dance"
        ],
        "explanation": "После been — форма -ing: dancing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0202",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} by the time we got there? — We had been riding for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "riding",
        "wrong": [
          "rideing",
          "ride"
        ],
        "explanation": "После been — форма -ing: riding. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0203",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before the rain stopped? — We had been baking for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bake"
        ],
        "explanation": "После been — форма -ing: baking. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0204",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before the bell rang? — We had been exercising for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "exercising",
        "wrong": [
          "exerciseing",
          "exercise"
        ],
        "explanation": "После been — форма -ing: exercising. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0205",
    "level": "C",
    "text": "How long {gap1} we {gap2} {gap3} before the meeting started? — We had been lying for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lie"
        ],
        "explanation": "После been — форма -ing: lying. -ie → -ying."
      }
    ]
  },

  {
    "id": "C2-0206",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before lunch? — They had been working for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0207",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before the guests arrived? — They had been playing for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0208",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} by the time we got there? — They had been waiting for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0209",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before the rain stopped? — They had been talking for hours.",
    "hint": "Вопрос: Had + подлежащее + been + -ing.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0210",
    "level": "C",
    "text": "How long {gap1} she {gap2} been {gap3} by 6 PM? — She will have been dancing for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dance"
        ],
        "explanation": "После been — форма -ing: dancing. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0211",
    "level": "C",
    "text": "How long {gap1} she {gap2} been {gap3} by next June? — She will have been riding for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "riding",
        "wrong": [
          "rideing",
          "ride"
        ],
        "explanation": "После been — форма -ing: riding. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0212",
    "level": "C",
    "text": "How long {gap1} she {gap2} been {gap3} by the time you return? — She will have been baking for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bake"
        ],
        "explanation": "После been — форма -ing: baking. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0213",
    "level": "C",
    "text": "How long {gap1} she {gap2} been {gap3} by tomorrow morning? — She will have been exercising for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "exercising",
        "wrong": [
          "exerciseing",
          "exercise"
        ],
        "explanation": "После been — форма -ing: exercising. Немая -e отбрасывается."
      }
    ]
  },

  {
    "id": "C2-0214",
    "level": "C",
    "text": "How long {gap1} she {gap2} been {gap3} by midnight? — She will have been lying for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lie"
        ],
        "explanation": "После been — форма -ing: lying. -ie → -ying."
      }
    ]
  },

  {
    "id": "C2-0215",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by next month? — Tom will have been working for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0216",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by the end of the day? — Tom will have been playing for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0217",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by 6 PM? — Tom will have been waiting for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0218",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by next June? — Tom will have been talking for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0219",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by the time you return? — Tom will have been walking for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0220",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by tomorrow morning? — Tom will have been cleaning for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0221",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} been {gap3} by midnight? — Tom will have been cooking for ages.",
    "hint": "Вопрос: Will + подлежащее + have been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0222",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for ages.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0223",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for some time.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0224",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for two hours.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0225",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for three hours.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0226",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for an hour.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0227",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for half an hour.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0228",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for twenty minutes.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0229",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for forty minutes.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0230",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for a while.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0231",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3}? — He {gap4} {gap5} {gap6} for a long time.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0232",
    "level": "C",
    "text": "How long {gap1} she {gap2} {gap3}? — She {gap4} {gap5} {gap6} for an hour.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0233",
    "level": "C",
    "text": "How long {gap1} she {gap2} {gap3}? — She {gap4} {gap5} {gap6} for half an hour.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0234",
    "level": "C",
    "text": "How long {gap1} she {gap2} {gap3}? — She {gap4} {gap5} {gap6} for twenty minutes.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0235",
    "level": "C",
    "text": "How long {gap1} she {gap2} {gap3}? — She {gap4} {gap5} {gap6} for forty minutes.",
    "hint": "Собери всю конструкцию и в вопросе, и в ответе.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "for/since"
    ],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": [
        "Present Perfect",
        "Present Continuous"
      ],
      "explanation": "for/since + процесс, который тянется до настоящего → Present Perfect Continuous (have/has been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "has",
        "wrong": [
          "have",
          "does"
        ],
        "explanation": "В вопросе для He/She/It — has (… been …-ing)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      },
      {
        "id": "gap4",
        "correct": "has",
        "wrong": [
          "have",
          "is"
        ],
        "explanation": "He/She/It → has been."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0236",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before the bell rang? — They {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  },

  {
    "id": "C2-0237",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before the meeting started? — They {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "После been — форма -ing: cleaning."
      }
    ]
  },

  {
    "id": "C2-0238",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before lunch? — They {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "После been — форма -ing: cooking."
      }
    ]
  },

  {
    "id": "C2-0239",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before the guests arrived? — They {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0240",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} by the time we got there? — They {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0241",
    "level": "C",
    "text": "How long {gap1} they {gap2} {gap3} before the rain stopped? — They {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0242",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3} before the bell rang? — He {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0243",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3} before the meeting started? — He {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0244",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3} before lunch? — He {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0245",
    "level": "C",
    "text": "How long {gap1} he {gap2} {gap3} before the guests arrived? — He {gap4} {gap5} {gap6} for hours.",
    "hint": "Вся конструкция Past Perfect Continuous в вопросе и ответе.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": [
        "Past Perfect",
        "Past Continuous"
      ],
      "explanation": "Процесс длился до момента в прошлом → Past Perfect Continuous (had been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "had",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Past Perfect Continuous вспомогательный — had (How long had …)."
      },
      {
        "id": "gap2",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap3",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      },
      {
        "id": "gap4",
        "correct": "had",
        "wrong": [
          "has",
          "was"
        ],
        "explanation": "Past Perfect Continuous для всех лиц — had + been + -ing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "was"
        ],
        "explanation": "had + been (3-я форма be — been)."
      },
      {
        "id": "gap6",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0246",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by next month? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "После been — форма -ing: painting."
      }
    ]
  },

  {
    "id": "C2-0247",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by the end of the day? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "После been — форма -ing: watching."
      }
    ]
  },

  {
    "id": "C2-0248",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by 6 PM? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "После been — форма -ing: learning."
      }
    ]
  },

  {
    "id": "C2-0249",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by next June? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "После been — форма -ing: listening."
      }
    ]
  },

  {
    "id": "C2-0250",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by the time you return? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "После been — форма -ing: studying."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "После been — форма -ing: studying."
      }
    ]
  },

  {
    "id": "C2-0251",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by tomorrow morning? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "staying",
        "wrong": [
          "stay",
          "stayed"
        ],
        "explanation": "После been — форма -ing: staying."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "staying",
        "wrong": [
          "stay",
          "stayed"
        ],
        "explanation": "После been — форма -ing: staying."
      }
    ]
  },

  {
    "id": "C2-0252",
    "level": "C",
    "text": "How long {gap1} Tom {gap2} {gap3} {gap4} by midnight? — Tom will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "После been — форма -ing: helping."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "После been — форма -ing: helping."
      }
    ]
  },

  {
    "id": "C2-0253",
    "level": "C",
    "text": "How long {gap1} Sharon {gap2} {gap3} {gap4} by midnight? — Sharon will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "После been — форма -ing: working."
      }
    ]
  },

  {
    "id": "C2-0254",
    "level": "C",
    "text": "How long {gap1} Sharon {gap2} {gap3} {gap4} by next month? — Sharon will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "После been — форма -ing: playing."
      }
    ]
  },

  {
    "id": "C2-0255",
    "level": "C",
    "text": "How long {gap1} Sharon {gap2} {gap3} {gap4} by the end of the day? — Sharon will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "После been — форма -ing: waiting."
      }
    ]
  },

  {
    "id": "C2-0256",
    "level": "C",
    "text": "How long {gap1} Sharon {gap2} {gap3} {gap4} by 6 PM? — Sharon will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "После been — форма -ing: talking."
      }
    ]
  },

  {
    "id": "C2-0257",
    "level": "C",
    "text": "How long {gap1} Sharon {gap2} {gap3} {gap4} by next June? — Sharon will have {gap5} {gap6} for years.",
    "hint": "Полная формула: will + have + been + -ing.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": [
        "Future Perfect",
        "Future Continuous"
      ],
      "explanation": "К моменту в будущем процесс будет длиться уже какое-то время → Future Perfect Continuous (will have been + -ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "has",
          "did"
        ],
        "explanation": "В вопросе Future Perfect Continuous вспомогательный — will (How long will …)."
      },
      {
        "id": "gap2",
        "correct": "have",
        "wrong": [
          "has",
          "had"
        ],
        "explanation": "После will всегда have (не has/had), даже с He/She/It."
      },
      {
        "id": "gap3",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap4",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      },
      {
        "id": "gap5",
        "correct": "been",
        "wrong": [
          "be",
          "being"
        ],
        "explanation": "have/has + been (3-я форма be — been, не «be/being»)."
      },
      {
        "id": "gap6",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "После been — форма -ing: walking."
      }
    ]
  }

];
