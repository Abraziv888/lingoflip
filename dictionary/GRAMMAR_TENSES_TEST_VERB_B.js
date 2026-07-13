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

const GRAMMAR_TENSES_TEST_VERB_B = [

  /* ===================== УРОВЕНЬ A — SIMPLE ===================== */

 

  /* ===================== УРОВЕНЬ B — CONTINUOUS ===================== */

  {
    "id": "B-0001",
    "level": "B",
    "text": "Look — Sharon is {gap1} soccer in the park.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "Continuous требует форму -ing: playing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0002",
    "level": "B",
    "text": "Look — the children are {gap1} a book.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "Continuous требует форму -ing: reading (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0003",
    "level": "B",
    "text": "The boy is {gap1} dinner now.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "Continuous требует форму -ing: eating (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0004",
    "level": "B",
    "text": "The girl is {gap1} a movie this minute.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "Continuous требует форму -ing: watching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0005",
    "level": "B",
    "text": "My brother is {gap1} on the sofa right now.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "Continuous требует форму -ing: sleeping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0006",
    "level": "B",
    "text": "Tom is {gap1} in the garden these days.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "Continuous требует форму -ing: working (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0007",
    "level": "B",
    "text": "The children are {gap1} lunch these days.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "Continuous требует форму -ing: cooking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0008",
    "level": "B",
    "text": "The students are {gap1} to school right now.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "Continuous требует форму -ing: walking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0009",
    "level": "B",
    "text": "Irma and Ron are {gap1} on the phone at the moment.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "Continuous требует форму -ing: talking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0010",
    "level": "B",
    "text": "Look — the girl is {gap1} to music.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "Continuous требует форму -ing: listening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0011",
    "level": "B",
    "text": "I am {gap1} for the bus this minute.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "Continuous требует форму -ing: waiting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0012",
    "level": "B",
    "text": "Look — my friends are {gap1} English.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "Continuous требует форму -ing: learning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0013",
    "level": "B",
    "text": "My mother is {gap1} the windows now.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "opening",
        "wrong": [
          "open",
          "opened"
        ],
        "explanation": "Continuous требует форму -ing: opening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0014",
    "level": "B",
    "text": "Listen — the students are {gap1} the kitchen.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "Continuous требует форму -ing: cleaning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0015",
    "level": "B",
    "text": "Be quiet — the students are {gap1} the fence.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "Continuous требует форму -ing: painting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0016",
    "level": "B",
    "text": "My friends are {gap1} with the homework these days.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "Continuous требует форму -ing: helping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0017",
    "level": "B",
    "text": "Look — my sister is {gap1} a picture.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "drawing",
        "wrong": [
          "draw",
          "drew"
        ],
        "explanation": "Continuous требует форму -ing: drawing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0018",
    "level": "B",
    "text": "Be quiet — my friends are {gap1} warm clothes.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wearing",
        "wrong": [
          "wear",
          "wore"
        ],
        "explanation": "Continuous требует форму -ing: wearing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0019",
    "level": "B",
    "text": "Sharon is {gap1} for the test at the moment.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "Continuous требует форму -ing: studying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0020",
    "level": "B",
    "text": "Roberto and Selma are {gap1} heavy bags this minute.",
    "hint": "Сейчас / в момент речи → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "carrying",
        "wrong": [
          "carry",
          "carried"
        ],
        "explanation": "Continuous требует форму -ing: carrying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0021",
    "level": "B",
    "text": "At 9 PM yesterday, Mr. Lee was {gap1} over the ocean.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "flying",
        "wrong": [
          "fly",
          "flew"
        ],
        "explanation": "Continuous требует форму -ing: flying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0022",
    "level": "B",
    "text": "This time yesterday, Anna was {gap1} loudly.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "crying",
        "wrong": [
          "cry",
          "cried"
        ],
        "explanation": "Continuous требует форму -ing: crying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0023",
    "level": "B",
    "text": "At midnight last night, Roberto was {gap1} the homework.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "Continuous требует форму -ing: doing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0024",
    "level": "B",
    "text": "All evening yesterday, my friends were {gap1} to the store.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "going",
        "wrong": [
          "go",
          "went"
        ],
        "explanation": "Continuous требует форму -ing: going (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0025",
    "level": "B",
    "text": "This time yesterday, the teacher was {gap1} some friends.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "meeting",
        "wrong": [
          "meet",
          "met"
        ],
        "explanation": "Continuous требует форму -ing: meeting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0026",
    "level": "B",
    "text": "At noon yesterday, the man was {gap1} a treehouse.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "building",
        "wrong": [
          "build",
          "built"
        ],
        "explanation": "Continuous требует форму -ing: building (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0027",
    "level": "B",
    "text": "An hour ago, my brother was {gap1} the car.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "fixing",
        "wrong": [
          "fix",
          "fixed"
        ],
        "explanation": "Continuous требует форму -ing: fixing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0028",
    "level": "B",
    "text": "At noon yesterday, the teacher was {gap1} the dishes.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "washing",
        "wrong": [
          "wash",
          "washed"
        ],
        "explanation": "Continuous требует форму -ing: washing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0029",
    "level": "B",
    "text": "An hour ago, my friends were {gap1} to the teacher.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "Continuous требует форму -ing: speaking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0030",
    "level": "B",
    "text": "When the lights went out, the students were {gap1} a song.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "singing",
        "wrong": [
          "sing",
          "sang"
        ],
        "explanation": "Continuous требует форму -ing: singing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0031",
    "level": "B",
    "text": "At midnight last night, the teacher was {gap1} near the door.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "Continuous требует форму -ing: standing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0032",
    "level": "B",
    "text": "An hour ago, the teacher was {gap1} a class.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "Continuous требует форму -ing: teaching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0033",
    "level": "B",
    "text": "At noon yesterday, the boys were {gap1} a letter.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "writing",
        "wrong": [
          "writeing",
          "writes"
        ],
        "explanation": "write → writing: немая -e отбрасывается (не «writeing»)."
      }
    ]
  },

  {
    "id": "B-0034",
    "level": "B",
    "text": "When the lights went out, the boy was {gap1} a cake.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "making",
        "wrong": [
          "makeing",
          "makes"
        ],
        "explanation": "make → making: немая -e отбрасывается (не «makeing»)."
      }
    ]
  },

  {
    "id": "B-0035",
    "level": "B",
    "text": "This time yesterday, my sister was {gap1} home.",
    "hint": "Конкретный момент в прошлом → процесс тогда шёл.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "coming",
        "wrong": [
          "comeing",
          "comes"
        ],
        "explanation": "come → coming: немая -e отбрасывается (не «comeing»)."
      }
    ]
  },

  {
    "id": "B-0036",
    "level": "B",
    "text": "The children {gap1} taking photos now.",
    "hint": "«now» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0037",
    "level": "B",
    "text": "Roberto and Selma {gap1} riding a bike this minute.",
    "hint": "«this minute» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0038",
    "level": "B",
    "text": "Mr. Lee {gap1} using the computer right now.",
    "hint": "«right now» → действие идёт сейчас.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      }
    ]
  },

  {
    "id": "B-0039",
    "level": "B",
    "text": "My friends {gap1} closing the shop at the moment.",
    "hint": "«at the moment» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0040",
    "level": "B",
    "text": "Tom {gap1} driving to work at present.",
    "hint": "«at present» → действие идёт сейчас.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      }
    ]
  },

  {
    "id": "B-0041",
    "level": "B",
    "text": "Anna {gap1} leaving the office at the moment.",
    "hint": "«at the moment» → действие идёт сейчас.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      }
    ]
  },

  {
    "id": "B-0042",
    "level": "B",
    "text": "The children {gap1} baking bread at present.",
    "hint": "«at present» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0043",
    "level": "B",
    "text": "The boy {gap1} dancing at the party these days.",
    "hint": "«these days» → действие идёт сейчас.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      }
    ]
  },

  {
    "id": "B-0044",
    "level": "B",
    "text": "You {gap1} smiling at the camera these days.",
    "hint": "«these days» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0045",
    "level": "B",
    "text": "My mother {gap1} having lunch this minute.",
    "hint": "«this minute» → действие идёт сейчас.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      }
    ]
  },

  {
    "id": "B-0046",
    "level": "B",
    "text": "They {gap1} moving the table at the moment.",
    "hint": "«at the moment» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0047",
    "level": "B",
    "text": "My friends {gap1} preparing dinner right now.",
    "hint": "«right now» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0048",
    "level": "B",
    "text": "My friends {gap1} running in the park at the moment.",
    "hint": "«at the moment» → действие идёт сейчас.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      }
    ]
  },

  {
    "id": "B-0049",
    "level": "B",
    "text": "At 9 PM yesterday, the children {gap1} sitting by the window.",
    "hint": "«at 9 PM yesterday» → процесс в прошлом.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0050",
    "level": "B",
    "text": "When the lights went out, she {gap1} swimming in the lake.",
    "hint": "«when the lights went out» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0051",
    "level": "B",
    "text": "When the lights went out, the girl {gap1} stopping the car.",
    "hint": "«when the lights went out» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0052",
    "level": "B",
    "text": "All evening yesterday, Sharon {gap1} getting ready.",
    "hint": "«all evening yesterday» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0053",
    "level": "B",
    "text": "This time yesterday, Sharon {gap1} putting the books away.",
    "hint": "«this time yesterday» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0054",
    "level": "B",
    "text": "When the lights went out, Roberto {gap1} beginning the lesson.",
    "hint": "«when the lights went out» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0055",
    "level": "B",
    "text": "At 9 PM yesterday, the man {gap1} planning a trip.",
    "hint": "«at 9 PM yesterday» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0056",
    "level": "B",
    "text": "All evening yesterday, the boys {gap1} shopping downtown.",
    "hint": "«all evening yesterday» → процесс в прошлом.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0057",
    "level": "B",
    "text": "At midnight last night, my sister {gap1} cutting the grass.",
    "hint": "«at midnight last night» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0058",
    "level": "B",
    "text": "This time yesterday, I {gap1} winning the game.",
    "hint": "«this time yesterday» → процесс в прошлом.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "I → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0059",
    "level": "B",
    "text": "An hour ago, the boy {gap1} hitting the ball.",
    "hint": "«an hour ago» → процесс в прошлом.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      }
    ]
  },

  {
    "id": "B-0060",
    "level": "B",
    "text": "At 8 PM tonight the students {gap1} jogging along the river.",
    "hint": "«at 8 PM tonight» → процесс в будущем.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      }
    ]
  },

  {
    "id": "B-0061",
    "level": "B",
    "text": "At 8 PM tonight my mother {gap1} chatting with friends.",
    "hint": "«at 8 PM tonight» → процесс в будущем.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      }
    ]
  },

  {
    "id": "B-0062",
    "level": "B",
    "text": "This time next week we {gap1} lying on the grass.",
    "hint": "«this time next week» → процесс в будущем.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      }
    ]
  },

  {
    "id": "B-0063",
    "level": "B",
    "text": "At noon tomorrow the children {gap1} tying the laces.",
    "hint": "«at noon tomorrow» → процесс в будущем.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      }
    ]
  },

  {
    "id": "B-0064",
    "level": "B",
    "text": "At noon tomorrow the girls {gap1} playing soccer in the park.",
    "hint": "«at noon tomorrow» → процесс в будущем.",
    "tags": [],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      }
    ]
  },

  {
    "id": "B-0065",
    "level": "B",
    "text": "At 8 PM tonight Roberto and Selma {gap1} reading a book.",
    "hint": "«at 8 PM tonight» → процесс в будущем.",
    "tags": [],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      }
    ]
  },

  {
    "id": "B-0066",
    "level": "B",
    "text": "The teacher {gap1} {gap2} dinner right now.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "Continuous требует форму -ing: eating (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0067",
    "level": "B",
    "text": "Be quiet — we {gap1} {gap2} a movie.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "Continuous требует форму -ing: watching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0068",
    "level": "B",
    "text": "Listen — the girls {gap1} {gap2} on the sofa.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "Continuous требует форму -ing: sleeping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0069",
    "level": "B",
    "text": "Look — the boy {gap1} {gap2} in the garden.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "Continuous требует форму -ing: working (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0070",
    "level": "B",
    "text": "My friends {gap1} {gap2} lunch at present.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "Continuous требует форму -ing: cooking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0071",
    "level": "B",
    "text": "Sharon {gap1} {gap2} to school these days.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "Continuous требует форму -ing: walking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0072",
    "level": "B",
    "text": "The students {gap1} {gap2} on the phone now.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "Continuous требует форму -ing: talking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0073",
    "level": "B",
    "text": "Look — my mother {gap1} {gap2} to music.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "Continuous требует форму -ing: listening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0074",
    "level": "B",
    "text": "Mr. Lee {gap1} {gap2} for the bus right now.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "Continuous требует форму -ing: waiting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0075",
    "level": "B",
    "text": "My friends {gap1} {gap2} English these days.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "Continuous требует форму -ing: learning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0076",
    "level": "B",
    "text": "Look — the girl {gap1} {gap2} the windows.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "opening",
        "wrong": [
          "open",
          "opened"
        ],
        "explanation": "Continuous требует форму -ing: opening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0077",
    "level": "B",
    "text": "Listen — I {gap1} {gap2} the kitchen.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "am",
        "wrong": [
          "is",
          "are"
        ],
        "explanation": "Для I вспомогательный глагол be — am."
      },
      {
        "id": "gap2",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "Continuous требует форму -ing: cleaning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0078",
    "level": "B",
    "text": "The boy {gap1} {gap2} the fence at present.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "Continuous требует форму -ing: painting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0079",
    "level": "B",
    "text": "Sharon {gap1} {gap2} with the homework at present.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap2",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "Continuous требует форму -ing: helping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0080",
    "level": "B",
    "text": "Listen — you {gap1} {gap2} a picture.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "drawing",
        "wrong": [
          "draw",
          "drew"
        ],
        "explanation": "Continuous требует форму -ing: drawing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0081",
    "level": "B",
    "text": "The boys {gap1} {gap2} warm clothes now.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "wearing",
        "wrong": [
          "wear",
          "wore"
        ],
        "explanation": "Continuous требует форму -ing: wearing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0082",
    "level": "B",
    "text": "Be quiet — we {gap1} {gap2} for the test.",
    "hint": "Действие идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap2",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "Continuous требует форму -ing: studying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0083",
    "level": "B",
    "text": "At 9 PM yesterday, the students {gap1} {gap2} heavy bags.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "carrying",
        "wrong": [
          "carry",
          "carried"
        ],
        "explanation": "Continuous требует форму -ing: carrying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0084",
    "level": "B",
    "text": "This time yesterday, she {gap1} {gap2} over the ocean.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "flying",
        "wrong": [
          "fly",
          "flew"
        ],
        "explanation": "Continuous требует форму -ing: flying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0085",
    "level": "B",
    "text": "This time yesterday, the students {gap1} {gap2} loudly.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "crying",
        "wrong": [
          "cry",
          "cried"
        ],
        "explanation": "Continuous требует форму -ing: crying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0086",
    "level": "B",
    "text": "This time yesterday, the students {gap1} {gap2} the homework.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "Continuous требует форму -ing: doing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0087",
    "level": "B",
    "text": "At noon yesterday, Mr. Lee {gap1} {gap2} to the store.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "going",
        "wrong": [
          "go",
          "went"
        ],
        "explanation": "Continuous требует форму -ing: going (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0088",
    "level": "B",
    "text": "At 9 PM yesterday, my brother {gap1} {gap2} some friends.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "meeting",
        "wrong": [
          "meet",
          "met"
        ],
        "explanation": "Continuous требует форму -ing: meeting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0089",
    "level": "B",
    "text": "This time yesterday, Anna {gap1} {gap2} a treehouse.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "building",
        "wrong": [
          "build",
          "built"
        ],
        "explanation": "Continuous требует форму -ing: building (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0090",
    "level": "B",
    "text": "At noon yesterday, the man {gap1} {gap2} the car.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "fixing",
        "wrong": [
          "fix",
          "fixed"
        ],
        "explanation": "Continuous требует форму -ing: fixing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0091",
    "level": "B",
    "text": "At midnight last night, Roberto and Selma {gap1} {gap2} the dishes.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "washing",
        "wrong": [
          "wash",
          "washed"
        ],
        "explanation": "Continuous требует форму -ing: washing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0092",
    "level": "B",
    "text": "An hour ago, Irma and Ron {gap1} {gap2} to the teacher.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "Continuous требует форму -ing: speaking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0093",
    "level": "B",
    "text": "All evening yesterday, my friends {gap1} {gap2} a song.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "singing",
        "wrong": [
          "sing",
          "sang"
        ],
        "explanation": "Continuous требует форму -ing: singing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0094",
    "level": "B",
    "text": "At 9 PM yesterday, the man {gap1} {gap2} near the door.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "Continuous требует форму -ing: standing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0095",
    "level": "B",
    "text": "At noon yesterday, my brother {gap1} {gap2} a class.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "Continuous требует форму -ing: teaching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0096",
    "level": "B",
    "text": "When the lights went out, Mr. Lee {gap1} {gap2} a letter.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "writing",
        "wrong": [
          "writeing",
          "writes"
        ],
        "explanation": "write → writing: немая -e отбрасывается (не «writeing»)."
      }
    ]
  },

  {
    "id": "B-0097",
    "level": "B",
    "text": "This time yesterday, the boys {gap1} {gap2} a cake.",
    "hint": "Процесс в конкретный момент прошлого.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap2",
        "correct": "making",
        "wrong": [
          "makeing",
          "makes"
        ],
        "explanation": "make → making: немая -e отбрасывается (не «makeing»)."
      }
    ]
  },

  {
    "id": "B-0098",
    "level": "B",
    "text": "This time on Sunday the girls {gap1} {gap2} home.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "coming",
        "wrong": [
          "comeing",
          "comes"
        ],
        "explanation": "come → coming: немая -e отбрасывается (не «comeing»)."
      }
    ]
  },

  {
    "id": "B-0099",
    "level": "B",
    "text": "This time next week Roberto {gap1} {gap2} photos.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "taking",
        "wrong": [
          "takeing",
          "takes"
        ],
        "explanation": "take → taking: немая -e отбрасывается (не «takeing»)."
      }
    ]
  },

  {
    "id": "B-0100",
    "level": "B",
    "text": "At noon tomorrow the teacher {gap1} {gap2} a bike.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "riding",
        "wrong": [
          "rideing",
          "rides"
        ],
        "explanation": "ride → riding: немая -e отбрасывается (не «rideing»)."
      }
    ]
  },

  {
    "id": "B-0101",
    "level": "B",
    "text": "This time on Sunday my mother {gap1} {gap2} the computer.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "using",
        "wrong": [
          "useing",
          "uses"
        ],
        "explanation": "use → using: немая -e отбрасывается (не «useing»)."
      }
    ]
  },

  {
    "id": "B-0102",
    "level": "B",
    "text": "At 8 PM tonight the children {gap1} {gap2} the shop.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "closing",
        "wrong": [
          "closeing",
          "closes"
        ],
        "explanation": "close → closing: немая -e отбрасывается (не «closeing»)."
      }
    ]
  },

  {
    "id": "B-0103",
    "level": "B",
    "text": "At 8 PM tonight the students {gap1} {gap2} to work.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drives"
        ],
        "explanation": "drive → driving: немая -e отбрасывается (не «driveing»)."
      }
    ]
  },

  {
    "id": "B-0104",
    "level": "B",
    "text": "At noon tomorrow she {gap1} {gap2} the office.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "leaving",
        "wrong": [
          "leaveing",
          "leaves"
        ],
        "explanation": "leave → leaving: немая -e отбрасывается (не «leaveing»)."
      }
    ]
  },

  {
    "id": "B-0105",
    "level": "B",
    "text": "This time on Sunday the children {gap1} {gap2} bread.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bakes"
        ],
        "explanation": "bake → baking: немая -e отбрасывается (не «bakeing»)."
      }
    ]
  },

  {
    "id": "B-0106",
    "level": "B",
    "text": "At 8 PM tonight the man {gap1} {gap2} at the party.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dances"
        ],
        "explanation": "dance → dancing: немая -e отбрасывается (не «danceing»)."
      }
    ]
  },

  {
    "id": "B-0107",
    "level": "B",
    "text": "At noon tomorrow Anna {gap1} {gap2} at the camera.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "smiling",
        "wrong": [
          "smileing",
          "smiles"
        ],
        "explanation": "smile → smiling: немая -e отбрасывается (не «smileing»)."
      }
    ]
  },

  {
    "id": "B-0108",
    "level": "B",
    "text": "This time tomorrow I {gap1} {gap2} lunch.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "having",
        "wrong": [
          "haveing",
          "has"
        ],
        "explanation": "have → having: немая -e отбрасывается (не «haveing»)."
      }
    ]
  },

  {
    "id": "B-0109",
    "level": "B",
    "text": "This time next week the girls {gap1} {gap2} the table.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "moving",
        "wrong": [
          "moveing",
          "moves"
        ],
        "explanation": "move → moving: немая -e отбрасывается (не «moveing»)."
      }
    ]
  },

  {
    "id": "B-0110",
    "level": "B",
    "text": "Tomorrow afternoon the children {gap1} {gap2} dinner.",
    "hint": "Процесс в определённый момент будущего.",
    "tags": [
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "preparing",
        "wrong": [
          "prepareing",
          "prepares"
        ],
        "explanation": "prepare → preparing: немая -e отбрасывается (не «prepareing»)."
      }
    ]
  },

  {
    "id": "B-0111",
    "level": "B",
    "text": "Where {gap1} my brother {gap2} this minute?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "running",
        "wrong": [
          "runing",
          "ran"
        ],
        "explanation": "run → running: краткий ударный слог — согласная удваивается (не «runing»)."
      }
    ]
  },

  {
    "id": "B-0112",
    "level": "B",
    "text": "Why {gap1} my friends {gap2} by the window at the moment?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sat"
        ],
        "explanation": "sit → sitting: краткий ударный слог — согласная удваивается (не «siting»)."
      }
    ]
  },

  {
    "id": "B-0113",
    "level": "B",
    "text": "Where {gap1} Anna {gap2} at the moment?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swam"
        ],
        "explanation": "swim → swimming: краткий ударный слог — согласная удваивается (не «swiming»)."
      }
    ]
  },

  {
    "id": "B-0114",
    "level": "B",
    "text": "Why {gap1} the man {gap2} the car right now?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "stopping",
        "wrong": [
          "stoping",
          "stopped"
        ],
        "explanation": "stop → stopping: краткий ударный слог — согласная удваивается (не «stoping»)."
      }
    ]
  },

  {
    "id": "B-0115",
    "level": "B",
    "text": "Why {gap1} the man {gap2} ready at present?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "getting",
        "wrong": [
          "geting",
          "got"
        ],
        "explanation": "get → getting: краткий ударный слог — согласная удваивается (не «geting»)."
      }
    ]
  },

  {
    "id": "B-0116",
    "level": "B",
    "text": "Why {gap1} my mother {gap2} the books away this minute?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "putting",
        "wrong": [
          "puting",
          "put"
        ],
        "explanation": "put → putting: краткий ударный слог — согласная удваивается (не «puting»)."
      }
    ]
  },

  {
    "id": "B-0117",
    "level": "B",
    "text": "Why {gap1} my mother {gap2} the lesson now?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "beginning",
        "wrong": [
          "begining",
          "began"
        ],
        "explanation": "begin → beginning: краткий ударный слог — согласная удваивается (не «begining»)."
      }
    ]
  },

  {
    "id": "B-0118",
    "level": "B",
    "text": "What {gap1} Sharon {gap2} these days?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "planning",
        "wrong": [
          "planing",
          "planned"
        ],
        "explanation": "plan → planning: краткий ударный слог — согласная удваивается (не «planing»)."
      }
    ]
  },

  {
    "id": "B-0119",
    "level": "B",
    "text": "Why {gap1} my brother {gap2} downtown right now?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "shopping",
        "wrong": [
          "shoping",
          "shopped"
        ],
        "explanation": "shop → shopping: краткий ударный слог — согласная удваивается (не «shoping»)."
      }
    ]
  },

  {
    "id": "B-0120",
    "level": "B",
    "text": "What {gap1} you {gap2} these days?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "cutting",
        "wrong": [
          "cuting",
          "cut"
        ],
        "explanation": "cut → cutting: краткий ударный слог — согласная удваивается (не «cuting»)."
      }
    ]
  },

  {
    "id": "B-0121",
    "level": "B",
    "text": "Why {gap1} Mr. Lee {gap2} the game at present?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "winning",
        "wrong": [
          "wining",
          "won"
        ],
        "explanation": "win → winning: краткий ударный слог — согласная удваивается (не «wining»)."
      }
    ]
  },

  {
    "id": "B-0122",
    "level": "B",
    "text": "Why {gap1} the students {gap2} the ball at the moment?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "hitting",
        "wrong": [
          "hiting",
          "hit"
        ],
        "explanation": "hit → hitting: краткий ударный слог — согласная удваивается (не «hiting»)."
      }
    ]
  },

  {
    "id": "B-0123",
    "level": "B",
    "text": "Why {gap1} my brother {gap2} along the river these days?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jogged"
        ],
        "explanation": "jog → jogging: краткий ударный слог — согласная удваивается (не «joging»)."
      }
    ]
  },

  {
    "id": "B-0124",
    "level": "B",
    "text": "Why {gap1} Sharon {gap2} with friends now?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "chatting",
        "wrong": [
          "chating",
          "chatted"
        ],
        "explanation": "chat → chatting: краткий ударный слог — согласная удваивается (не «chating»)."
      }
    ]
  },

  {
    "id": "B-0125",
    "level": "B",
    "text": "Why {gap1} the boys {gap2} on the grass this minute?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lies"
        ],
        "explanation": "lie → lying: -ie меняется на -y перед -ing (не «lieing»)."
      }
    ]
  },

  {
    "id": "B-0126",
    "level": "B",
    "text": "What {gap1} Tom {gap2} at present?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "tying",
        "wrong": [
          "tieing",
          "ties"
        ],
        "explanation": "tie → tying: -ie меняется на -y перед -ing (не «tieing»)."
      }
    ]
  },

  {
    "id": "B-0127",
    "level": "B",
    "text": "What {gap1} the girls {gap2} now?",
    "hint": "Вопрос о действии, идущем сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "Continuous требует форму -ing: playing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0128",
    "level": "B",
    "text": "What {gap1} they {gap2} when the teacher came in?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "Continuous требует форму -ing: reading (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0129",
    "level": "B",
    "text": "What {gap1} Roberto {gap2} when you arrived?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "Continuous требует форму -ing: eating (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0130",
    "level": "B",
    "text": "Why {gap1} Irma and Ron {gap2} a movie while you were out?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "Continuous требует форму -ing: watching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0131",
    "level": "B",
    "text": "Why {gap1} Roberto {gap2} on the sofa when the teacher came in?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "Continuous требует форму -ing: sleeping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0132",
    "level": "B",
    "text": "Where {gap1} my brother {gap2} when the teacher came in?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "Continuous требует форму -ing: working (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0133",
    "level": "B",
    "text": "Why {gap1} my mother {gap2} lunch when the phone rang?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "Continuous требует форму -ing: cooking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0134",
    "level": "B",
    "text": "Where {gap1} Roberto and Selma {gap2} when I called?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "Continuous требует форму -ing: walking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0135",
    "level": "B",
    "text": "Why {gap1} we {gap2} on the phone while you were out?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "Continuous требует форму -ing: talking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0136",
    "level": "B",
    "text": "Why {gap1} the girl {gap2} to music while you were out?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "Continuous требует форму -ing: listening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0137",
    "level": "B",
    "text": "Why {gap1} Sharon {gap2} for the bus when I called?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "Continuous требует форму -ing: waiting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0138",
    "level": "B",
    "text": "What {gap1} the man {gap2} when the phone rang?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "Continuous требует форму -ing: learning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0139",
    "level": "B",
    "text": "What {gap1} we {gap2} when it started to rain?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "opening",
        "wrong": [
          "open",
          "opened"
        ],
        "explanation": "Continuous требует форму -ing: opening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0140",
    "level": "B",
    "text": "Where {gap1} Mr. Lee {gap2} when it started to rain?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "Continuous требует форму -ing: cleaning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0141",
    "level": "B",
    "text": "What {gap1} Roberto {gap2} when you arrived?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "Continuous требует форму -ing: painting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0142",
    "level": "B",
    "text": "Why {gap1} Roberto and Selma {gap2} with the homework when the phone rang?",
    "hint": "Вопрос о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "Continuous требует форму -ing: helping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0143",
    "level": "B",
    "text": "What {gap1} Sharon be {gap2} this time on Sunday?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "drawing",
        "wrong": [
          "draw",
          "drew"
        ],
        "explanation": "Continuous требует форму -ing: drawing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0144",
    "level": "B",
    "text": "Why {gap1} Roberto be {gap2} warm clothes at noon tomorrow?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "wearing",
        "wrong": [
          "wear",
          "wore"
        ],
        "explanation": "Continuous требует форму -ing: wearing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0145",
    "level": "B",
    "text": "Why {gap1} the man be {gap2} for the test this time next week?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "Continuous требует форму -ing: studying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0146",
    "level": "B",
    "text": "What {gap1} she be {gap2} at 8 PM tonight?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "carrying",
        "wrong": [
          "carry",
          "carried"
        ],
        "explanation": "Continuous требует форму -ing: carrying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0147",
    "level": "B",
    "text": "Where {gap1} my brother be {gap2} at 8 PM tonight?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "flying",
        "wrong": [
          "fly",
          "flew"
        ],
        "explanation": "Continuous требует форму -ing: flying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0148",
    "level": "B",
    "text": "Why {gap1} Sharon be {gap2} loudly this time on Sunday?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "crying",
        "wrong": [
          "cry",
          "cried"
        ],
        "explanation": "Continuous требует форму -ing: crying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0149",
    "level": "B",
    "text": "What {gap1} my brother be {gap2} at 8 PM tonight?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "Continuous требует форму -ing: doing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0150",
    "level": "B",
    "text": "Why {gap1} the girl be {gap2} to the store at noon tomorrow?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "going",
        "wrong": [
          "go",
          "went"
        ],
        "explanation": "Continuous требует форму -ing: going (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0151",
    "level": "B",
    "text": "Why {gap1} Mr. Lee be {gap2} some friends tomorrow afternoon?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "meeting",
        "wrong": [
          "meet",
          "met"
        ],
        "explanation": "Continuous требует форму -ing: meeting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0152",
    "level": "B",
    "text": "Why {gap1} Anna be {gap2} a treehouse this time next week?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "building",
        "wrong": [
          "build",
          "built"
        ],
        "explanation": "Continuous требует форму -ing: building (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0153",
    "level": "B",
    "text": "Why {gap1} the teacher be {gap2} the car tomorrow afternoon?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "fixing",
        "wrong": [
          "fix",
          "fixed"
        ],
        "explanation": "Continuous требует форму -ing: fixing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0154",
    "level": "B",
    "text": "Why {gap1} they be {gap2} the dishes this time tomorrow?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "washing",
        "wrong": [
          "wash",
          "washed"
        ],
        "explanation": "Continuous требует форму -ing: washing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0155",
    "level": "B",
    "text": "Why {gap1} my brother be {gap2} to the teacher this time next week?",
    "hint": "Вопрос о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "Continuous требует форму -ing: speaking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0156",
    "level": "B",
    "text": "Roberto and Selma {gap1} {gap2} a song at present.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "aren't",
        "wrong": [
          "isn't",
          "don't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (aren't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "singing",
        "wrong": [
          "sing",
          "sang"
        ],
        "explanation": "Continuous требует форму -ing: singing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0157",
    "level": "B",
    "text": "We {gap1} {gap2} near the door these days.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "aren't",
        "wrong": [
          "isn't",
          "don't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (aren't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "Continuous требует форму -ing: standing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0158",
    "level": "B",
    "text": "The boys {gap1} {gap2} a class at the moment.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "aren't",
        "wrong": [
          "isn't",
          "don't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (aren't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "Continuous требует форму -ing: teaching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0159",
    "level": "B",
    "text": "The children {gap1} {gap2} a letter at the moment.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "aren't",
        "wrong": [
          "isn't",
          "don't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (aren't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "writing",
        "wrong": [
          "writeing",
          "writes"
        ],
        "explanation": "write → writing: немая -e отбрасывается (не «writeing»)."
      }
    ]
  },

  {
    "id": "B-0160",
    "level": "B",
    "text": "He {gap1} {gap2} a cake this minute.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "making",
        "wrong": [
          "makeing",
          "makes"
        ],
        "explanation": "make → making: немая -e отбрасывается (не «makeing»)."
      }
    ]
  },

  {
    "id": "B-0161",
    "level": "B",
    "text": "The teacher {gap1} {gap2} home these days.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "coming",
        "wrong": [
          "comeing",
          "comes"
        ],
        "explanation": "come → coming: немая -e отбрасывается (не «comeing»)."
      }
    ]
  },

  {
    "id": "B-0162",
    "level": "B",
    "text": "Roberto {gap1} {gap2} photos right now.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "taking",
        "wrong": [
          "takeing",
          "takes"
        ],
        "explanation": "take → taking: немая -e отбрасывается (не «takeing»)."
      }
    ]
  },

  {
    "id": "B-0163",
    "level": "B",
    "text": "Mr. Lee {gap1} {gap2} a bike these days.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "riding",
        "wrong": [
          "rideing",
          "rides"
        ],
        "explanation": "ride → riding: немая -e отбрасывается (не «rideing»)."
      }
    ]
  },

  {
    "id": "B-0164",
    "level": "B",
    "text": "She {gap1} {gap2} the computer at present.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "using",
        "wrong": [
          "useing",
          "uses"
        ],
        "explanation": "use → using: немая -e отбрасывается (не «useing»)."
      }
    ]
  },

  {
    "id": "B-0165",
    "level": "B",
    "text": "The teacher {gap1} {gap2} the shop now.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "closing",
        "wrong": [
          "closeing",
          "closes"
        ],
        "explanation": "close → closing: немая -e отбрасывается (не «closeing»)."
      }
    ]
  },

  {
    "id": "B-0166",
    "level": "B",
    "text": "Anna {gap1} {gap2} to work right now.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drives"
        ],
        "explanation": "drive → driving: немая -e отбрасывается (не «driveing»)."
      }
    ]
  },

  {
    "id": "B-0167",
    "level": "B",
    "text": "The children {gap1} {gap2} the office this minute.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "aren't",
        "wrong": [
          "isn't",
          "don't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (aren't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "leaving",
        "wrong": [
          "leaveing",
          "leaves"
        ],
        "explanation": "leave → leaving: немая -e отбрасывается (не «leaveing»)."
      }
    ]
  },

  {
    "id": "B-0168",
    "level": "B",
    "text": "She {gap1} {gap2} bread right now.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bakes"
        ],
        "explanation": "bake → baking: немая -e отбрасывается (не «bakeing»)."
      }
    ]
  },

  {
    "id": "B-0169",
    "level": "B",
    "text": "I {gap1} {gap2} at the party this minute.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "am not",
        "wrong": [
          "isn't",
          "don't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (am not). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dances"
        ],
        "explanation": "dance → dancing: немая -e отбрасывается (не «danceing»)."
      }
    ]
  },

  {
    "id": "B-0170",
    "level": "B",
    "text": "Tom {gap1} {gap2} at the camera at present.",
    "hint": "Сейчас действие НЕ происходит.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "isn't",
        "wrong": [
          "aren't",
          "doesn't"
        ],
        "explanation": "Отрицание Continuous — форма be + not (isn't). Здесь be, а не do/does."
      },
      {
        "id": "gap2",
        "correct": "smiling",
        "wrong": [
          "smileing",
          "smiles"
        ],
        "explanation": "smile → smiling: немая -e отбрасывается (не «smileing»)."
      }
    ]
  },

  {
    "id": "B-0171",
    "level": "B",
    "text": "Roberto {gap1} {gap2} lunch when you arrived.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "having",
        "wrong": [
          "haveing",
          "has"
        ],
        "explanation": "have → having: немая -e отбрасывается (не «haveing»)."
      }
    ]
  },

  {
    "id": "B-0172",
    "level": "B",
    "text": "The teacher {gap1} {gap2} the table while you were out.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "moving",
        "wrong": [
          "moveing",
          "moves"
        ],
        "explanation": "move → moving: немая -e отбрасывается (не «moveing»)."
      }
    ]
  },

  {
    "id": "B-0173",
    "level": "B",
    "text": "You {gap1} {gap2} dinner when the teacher came in.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "weren't",
        "wrong": [
          "wasn't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (weren't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "preparing",
        "wrong": [
          "prepareing",
          "prepares"
        ],
        "explanation": "prepare → preparing: немая -e отбрасывается (не «prepareing»)."
      }
    ]
  },

  {
    "id": "B-0174",
    "level": "B",
    "text": "Sharon {gap1} {gap2} in the park when you arrived.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "running",
        "wrong": [
          "runing",
          "ran"
        ],
        "explanation": "run → running: краткий ударный слог — согласная удваивается (не «runing»)."
      }
    ]
  },

  {
    "id": "B-0175",
    "level": "B",
    "text": "Roberto and Selma {gap1} {gap2} by the window while you were out.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "weren't",
        "wrong": [
          "wasn't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (weren't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sat"
        ],
        "explanation": "sit → sitting: краткий ударный слог — согласная удваивается (не «siting»)."
      }
    ]
  },

  {
    "id": "B-0176",
    "level": "B",
    "text": "She {gap1} {gap2} in the lake when I called.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swam"
        ],
        "explanation": "swim → swimming: краткий ударный слог — согласная удваивается (не «swiming»)."
      }
    ]
  },

  {
    "id": "B-0177",
    "level": "B",
    "text": "We {gap1} {gap2} the car when it started to rain.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "weren't",
        "wrong": [
          "wasn't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (weren't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "stopping",
        "wrong": [
          "stoping",
          "stopped"
        ],
        "explanation": "stop → stopping: краткий ударный слог — согласная удваивается (не «stoping»)."
      }
    ]
  },

  {
    "id": "B-0178",
    "level": "B",
    "text": "The children {gap1} {gap2} ready when the teacher came in.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "weren't",
        "wrong": [
          "wasn't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (weren't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "getting",
        "wrong": [
          "geting",
          "got"
        ],
        "explanation": "get → getting: краткий ударный слог — согласная удваивается (не «geting»)."
      }
    ]
  },

  {
    "id": "B-0179",
    "level": "B",
    "text": "The teacher {gap1} {gap2} the books away while you were out.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "putting",
        "wrong": [
          "puting",
          "put"
        ],
        "explanation": "put → putting: краткий ударный слог — согласная удваивается (не «puting»)."
      }
    ]
  },

  {
    "id": "B-0180",
    "level": "B",
    "text": "The boy {gap1} {gap2} the lesson when it started to rain.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "beginning",
        "wrong": [
          "begining",
          "began"
        ],
        "explanation": "begin → beginning: краткий ударный слог — согласная удваивается (не «begining»)."
      }
    ]
  },

  {
    "id": "B-0181",
    "level": "B",
    "text": "The students {gap1} {gap2} a trip when it started to rain.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "weren't",
        "wrong": [
          "wasn't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (weren't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "planning",
        "wrong": [
          "planing",
          "planned"
        ],
        "explanation": "plan → planning: краткий ударный слог — согласная удваивается (не «planing»)."
      }
    ]
  },

  {
    "id": "B-0182",
    "level": "B",
    "text": "My mother {gap1} {gap2} downtown while you were out.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "shopping",
        "wrong": [
          "shoping",
          "shopped"
        ],
        "explanation": "shop → shopping: краткий ударный слог — согласная удваивается (не «shoping»)."
      }
    ]
  },

  {
    "id": "B-0183",
    "level": "B",
    "text": "Anna {gap1} {gap2} the grass while you were out.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "cutting",
        "wrong": [
          "cuting",
          "cut"
        ],
        "explanation": "cut → cutting: краткий ударный слог — согласная удваивается (не «cuting»)."
      }
    ]
  },

  {
    "id": "B-0184",
    "level": "B",
    "text": "Mr. Lee {gap1} {gap2} the game when you arrived.",
    "hint": "В тот момент прошлого процесс НЕ шёл.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "wasn't",
        "wrong": [
          "weren't",
          "didn't"
        ],
        "explanation": "Отрицание Past Continuous — was/were + not (wasn't), не didn't."
      },
      {
        "id": "gap2",
        "correct": "winning",
        "wrong": [
          "wining",
          "won"
        ],
        "explanation": "win → winning: краткий ударный слог — согласная удваивается (не «wining»)."
      }
    ]
  },

  {
    "id": "B-0185",
    "level": "B",
    "text": "This time on Sunday the children {gap1} {gap2} the ball.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "hitting",
        "wrong": [
          "hiting",
          "hit"
        ],
        "explanation": "hit → hitting: краткий ударный слог — согласная удваивается (не «hiting»)."
      }
    ]
  },

  {
    "id": "B-0186",
    "level": "B",
    "text": "This time on Sunday Irma and Ron {gap1} {gap2} along the river.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "jogging",
        "wrong": [
          "joging",
          "jogged"
        ],
        "explanation": "jog → jogging: краткий ударный слог — согласная удваивается (не «joging»)."
      }
    ]
  },

  {
    "id": "B-0187",
    "level": "B",
    "text": "At noon tomorrow Anna {gap1} {gap2} with friends.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "chatting",
        "wrong": [
          "chating",
          "chatted"
        ],
        "explanation": "chat → chatting: краткий ударный слог — согласная удваивается (не «chating»)."
      }
    ]
  },

  {
    "id": "B-0188",
    "level": "B",
    "text": "This time tomorrow Irma and Ron {gap1} {gap2} on the grass.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "lying",
        "wrong": [
          "lieing",
          "lies"
        ],
        "explanation": "lie → lying: -ie меняется на -y перед -ing (не «lieing»)."
      }
    ]
  },

  {
    "id": "B-0189",
    "level": "B",
    "text": "At 8 PM tonight you {gap1} {gap2} the laces.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "tying",
        "wrong": [
          "tieing",
          "ties"
        ],
        "explanation": "tie → tying: -ie меняется на -y перед -ing (не «tieing»)."
      }
    ]
  },

  {
    "id": "B-0190",
    "level": "B",
    "text": "At noon tomorrow my sister {gap1} {gap2} soccer in the park.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "playing",
        "wrong": [
          "play",
          "played"
        ],
        "explanation": "Continuous требует форму -ing: playing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0191",
    "level": "B",
    "text": "Tomorrow afternoon the teacher {gap1} {gap2} a book.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "reading",
        "wrong": [
          "read",
          "reads"
        ],
        "explanation": "Continuous требует форму -ing: reading (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0192",
    "level": "B",
    "text": "This time tomorrow my sister {gap1} {gap2} dinner.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "eating",
        "wrong": [
          "eat",
          "ate"
        ],
        "explanation": "Continuous требует форму -ing: eating (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0193",
    "level": "B",
    "text": "Tomorrow afternoon the man {gap1} {gap2} a movie.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "watching",
        "wrong": [
          "watch",
          "watched"
        ],
        "explanation": "Continuous требует форму -ing: watching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0194",
    "level": "B",
    "text": "This time tomorrow the teacher {gap1} {gap2} on the sofa.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "sleeping",
        "wrong": [
          "sleep",
          "slept"
        ],
        "explanation": "Continuous требует форму -ing: sleeping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0195",
    "level": "B",
    "text": "This time tomorrow Tom {gap1} {gap2} in the garden.",
    "hint": "В тот момент будущего процесса НЕ будет.",
    "tags": [
      "Отрицание",
      "He/She/It"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "won't be",
        "wrong": [
          "won't",
          "isn't"
        ],
        "explanation": "Отрицание Future Continuous — won't be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "working",
        "wrong": [
          "work",
          "worked"
        ],
        "explanation": "Continuous требует форму -ing: working (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0196",
    "level": "B",
    "text": "What {gap1} my sister {gap2} right now? — My sister {gap3} {gap4} lunch.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "cooking",
        "wrong": [
          "cook",
          "cooked"
        ],
        "explanation": "Continuous требует форму -ing: cooking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0197",
    "level": "B",
    "text": "What {gap1} Irma and Ron {gap2} this minute? — Irma and Ron {gap3} {gap4} to school.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap4",
        "correct": "walking",
        "wrong": [
          "walk",
          "walked"
        ],
        "explanation": "Continuous требует форму -ing: walking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0198",
    "level": "B",
    "text": "What {gap1} Mr. Lee {gap2} at present? — Mr. Lee {gap3} {gap4} on the phone.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "talking",
        "wrong": [
          "talk",
          "talked"
        ],
        "explanation": "Continuous требует форму -ing: talking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0199",
    "level": "B",
    "text": "What {gap1} he {gap2} these days? — He {gap3} {gap4} to music.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "listening",
        "wrong": [
          "listen",
          "listened"
        ],
        "explanation": "Continuous требует форму -ing: listening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0200",
    "level": "B",
    "text": "What {gap1} my mother {gap2} at the moment? — My mother {gap3} {gap4} for the bus.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "waiting",
        "wrong": [
          "wait",
          "waited"
        ],
        "explanation": "Continuous требует форму -ing: waiting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0201",
    "level": "B",
    "text": "What {gap1} my sister {gap2} at the moment? — My sister {gap3} {gap4} English.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "learning",
        "wrong": [
          "learn",
          "learned"
        ],
        "explanation": "Continuous требует форму -ing: learning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0202",
    "level": "B",
    "text": "What {gap1} the children {gap2} right now? — The children {gap3} {gap4} the windows.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap4",
        "correct": "opening",
        "wrong": [
          "open",
          "opened"
        ],
        "explanation": "Continuous требует форму -ing: opening (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0203",
    "level": "B",
    "text": "What {gap1} my brother {gap2} now? — My brother {gap3} {gap4} the kitchen.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "cleaning",
        "wrong": [
          "clean",
          "cleaned"
        ],
        "explanation": "Continuous требует форму -ing: cleaning (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0204",
    "level": "B",
    "text": "What {gap1} he {gap2} now? — He {gap3} {gap4} the fence.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "painting",
        "wrong": [
          "paint",
          "painted"
        ],
        "explanation": "Continuous требует форму -ing: painting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0205",
    "level": "B",
    "text": "What {gap1} the girl {gap2} at present? — The girl {gap3} {gap4} with the homework.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "helping",
        "wrong": [
          "help",
          "helped"
        ],
        "explanation": "Continuous требует форму -ing: helping (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0206",
    "level": "B",
    "text": "What {gap1} the teacher {gap2} these days? — The teacher {gap3} {gap4} a picture.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "drawing",
        "wrong": [
          "draw",
          "drew"
        ],
        "explanation": "Continuous требует форму -ing: drawing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0207",
    "level": "B",
    "text": "What {gap1} Irma and Ron {gap2} right now? — Irma and Ron {gap3} {gap4} warm clothes.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap4",
        "correct": "wearing",
        "wrong": [
          "wear",
          "wore"
        ],
        "explanation": "Continuous требует форму -ing: wearing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0208",
    "level": "B",
    "text": "What {gap1} the children {gap2} at present? — The children {gap3} {gap4} for the test.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap4",
        "correct": "studying",
        "wrong": [
          "study",
          "studied"
        ],
        "explanation": "Continuous требует форму -ing: studying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0209",
    "level": "B",
    "text": "What {gap1} Roberto and Selma {gap2} at present? — Roberto and Selma {gap3} {gap4} heavy bags.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap4",
        "correct": "carrying",
        "wrong": [
          "carry",
          "carried"
        ],
        "explanation": "Continuous требует форму -ing: carrying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0210",
    "level": "B",
    "text": "What {gap1} my friends {gap2} now? — My friends {gap3} {gap4} over the ocean.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … are + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "are",
        "wrong": [
          "is",
          "do"
        ],
        "explanation": "Мн. ч. / you / we → are (be), не do."
      },
      {
        "id": "gap4",
        "correct": "flying",
        "wrong": [
          "fly",
          "flew"
        ],
        "explanation": "Continuous требует форму -ing: flying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0211",
    "level": "B",
    "text": "What {gap1} my brother {gap2} right now? — My brother {gap3} {gap4} loudly.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "crying",
        "wrong": [
          "cry",
          "cried"
        ],
        "explanation": "Continuous требует форму -ing: crying (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0212",
    "level": "B",
    "text": "What {gap1} my brother {gap2} this minute? — My brother {gap3} {gap4} the homework.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "Continuous требует форму -ing: doing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0213",
    "level": "B",
    "text": "What {gap1} the boy {gap2} now? — The boy {gap3} {gap4} to the store.",
    "hint": "Диалог о том, что происходит прямо сейчас.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "В Wh-вопросе Continuous be идёт после вопросительного слова: … is + подлежащее + V-ing (не do/does)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "does"
        ],
        "explanation": "«What … doing?» — глагол do в форме -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "3-е лицо ед. ч. → is. Continuous строится с be, а не с do/does."
      },
      {
        "id": "gap4",
        "correct": "going",
        "wrong": [
          "go",
          "went"
        ],
        "explanation": "Continuous требует форму -ing: going (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0214",
    "level": "B",
    "text": "What {gap1} Roberto {gap2} when you arrived? — Roberto {gap3} {gap4} some friends.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "meeting",
        "wrong": [
          "meet",
          "met"
        ],
        "explanation": "Continuous требует форму -ing: meeting (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0215",
    "level": "B",
    "text": "What {gap1} the students {gap2} when I called? — The students {gap3} {gap4} a treehouse.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "building",
        "wrong": [
          "build",
          "built"
        ],
        "explanation": "Continuous требует форму -ing: building (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0216",
    "level": "B",
    "text": "What {gap1} Tom {gap2} while you were out? — Tom {gap3} {gap4} the car.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "fixing",
        "wrong": [
          "fix",
          "fixed"
        ],
        "explanation": "Continuous требует форму -ing: fixing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0217",
    "level": "B",
    "text": "What {gap1} they {gap2} when the phone rang? — They {gap3} {gap4} the dishes.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "washing",
        "wrong": [
          "wash",
          "washed"
        ],
        "explanation": "Continuous требует форму -ing: washing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0218",
    "level": "B",
    "text": "What {gap1} Sharon {gap2} when the teacher came in? — Sharon {gap3} {gap4} to the teacher.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "speaking",
        "wrong": [
          "speak",
          "spoke"
        ],
        "explanation": "Continuous требует форму -ing: speaking (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0219",
    "level": "B",
    "text": "What {gap1} Sharon {gap2} while you were out? — Sharon {gap3} {gap4} a song.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "singing",
        "wrong": [
          "sing",
          "sang"
        ],
        "explanation": "Continuous требует форму -ing: singing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0220",
    "level": "B",
    "text": "What {gap1} the girls {gap2} while you were out? — The girls {gap3} {gap4} near the door.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … were + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "were",
        "wrong": [
          "was",
          "did"
        ],
        "explanation": "Мн. ч. / you / we → were. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "standing",
        "wrong": [
          "stand",
          "stood"
        ],
        "explanation": "Continuous требует форму -ing: standing (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0221",
    "level": "B",
    "text": "What {gap1} Sharon {gap2} when the teacher came in? — Sharon {gap3} {gap4} a class.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "teaching",
        "wrong": [
          "teach",
          "taught"
        ],
        "explanation": "Continuous требует форму -ing: teaching (не начальную/прошедшую форму)."
      }
    ]
  },

  {
    "id": "B-0222",
    "level": "B",
    "text": "What {gap1} my sister {gap2} when the teacher came in? — My sister {gap3} {gap4} a letter.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "writing",
        "wrong": [
          "writeing",
          "writes"
        ],
        "explanation": "write → writing: немая -e отбрасывается (не «writeing»)."
      }
    ]
  },

  {
    "id": "B-0223",
    "level": "B",
    "text": "What {gap1} Mr. Lee {gap2} when I called? — Mr. Lee {gap3} {gap4} a cake.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "making",
        "wrong": [
          "makeing",
          "makes"
        ],
        "explanation": "make → making: немая -e отбрасывается (не «makeing»)."
      }
    ]
  },

  {
    "id": "B-0224",
    "level": "B",
    "text": "What {gap1} the boy {gap2} when I called? — The boy {gap3} {gap4} home.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "coming",
        "wrong": [
          "comeing",
          "comes"
        ],
        "explanation": "come → coming: немая -e отбрасывается (не «comeing»)."
      }
    ]
  },

  {
    "id": "B-0225",
    "level": "B",
    "text": "What {gap1} Sharon {gap2} when the phone rang? — Sharon {gap3} {gap4} photos.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "taking",
        "wrong": [
          "takeing",
          "takes"
        ],
        "explanation": "take → taking: немая -e отбрасывается (не «takeing»)."
      }
    ]
  },

  {
    "id": "B-0226",
    "level": "B",
    "text": "What {gap1} she {gap2} when the phone rang? — She {gap3} {gap4} a bike.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "riding",
        "wrong": [
          "rideing",
          "rides"
        ],
        "explanation": "ride → riding: немая -e отбрасывается (не «rideing»)."
      }
    ]
  },

  {
    "id": "B-0227",
    "level": "B",
    "text": "What {gap1} Sharon {gap2} when you arrived? — Sharon {gap3} {gap4} the computer.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "using",
        "wrong": [
          "useing",
          "uses"
        ],
        "explanation": "use → using: немая -e отбрасывается (не «useing»)."
      }
    ]
  },

  {
    "id": "B-0228",
    "level": "B",
    "text": "What {gap1} Anna {gap2} when the phone rang? — Anna {gap3} {gap4} the shop.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "closing",
        "wrong": [
          "closeing",
          "closes"
        ],
        "explanation": "close → closing: немая -e отбрасывается (не «closeing»)."
      }
    ]
  },

  {
    "id": "B-0229",
    "level": "B",
    "text": "What {gap1} the girl {gap2} when I called? — The girl {gap3} {gap4} to work.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "driving",
        "wrong": [
          "driveing",
          "drives"
        ],
        "explanation": "drive → driving: немая -e отбрасывается (не «driveing»)."
      }
    ]
  },

  {
    "id": "B-0230",
    "level": "B",
    "text": "What {gap1} Mr. Lee {gap2} when the phone rang? — Mr. Lee {gap3} {gap4} the office.",
    "hint": "Диалог о процессе в прошлом.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Wh-вопрос Past Continuous: … was + подлежащее + V-ing (не did)."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "«What … doing?» — форма -ing: doing (не did)."
      },
      {
        "id": "gap3",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "Ед. ч. → was. Continuous строится с be, не с did."
      },
      {
        "id": "gap4",
        "correct": "leaving",
        "wrong": [
          "leaveing",
          "leaves"
        ],
        "explanation": "leave → leaving: немая -e отбрасывается (не «leaveing»)."
      }
    ]
  },

  {
    "id": "B-0231",
    "level": "B",
    "text": "What {gap1} my friends be {gap2} this time tomorrow? — My friends {gap3} {gap4} bread.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "baking",
        "wrong": [
          "bakeing",
          "bakes"
        ],
        "explanation": "bake → baking: немая -e отбрасывается (не «bakeing»)."
      }
    ]
  },

  {
    "id": "B-0232",
    "level": "B",
    "text": "What {gap1} Mr. Lee be {gap2} this time on Sunday? — Mr. Lee {gap3} {gap4} at the party.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "dancing",
        "wrong": [
          "danceing",
          "dances"
        ],
        "explanation": "dance → dancing: немая -e отбрасывается (не «danceing»)."
      }
    ]
  },

  {
    "id": "B-0233",
    "level": "B",
    "text": "What {gap1} the boys be {gap2} this time on Sunday? — The boys {gap3} {gap4} at the camera.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "smiling",
        "wrong": [
          "smileing",
          "smiles"
        ],
        "explanation": "smile → smiling: немая -e отбрасывается (не «smileing»)."
      }
    ]
  },

  {
    "id": "B-0234",
    "level": "B",
    "text": "What {gap1} the students be {gap2} at 8 PM tonight? — The students {gap3} {gap4} lunch.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "having",
        "wrong": [
          "haveing",
          "has"
        ],
        "explanation": "have → having: немая -e отбрасывается (не «haveing»)."
      }
    ]
  },

  {
    "id": "B-0235",
    "level": "B",
    "text": "What {gap1} the students be {gap2} tomorrow afternoon? — The students {gap3} {gap4} the table.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "moving",
        "wrong": [
          "moveing",
          "moves"
        ],
        "explanation": "move → moving: немая -e отбрасывается (не «moveing»)."
      }
    ]
  },

  {
    "id": "B-0236",
    "level": "B",
    "text": "What {gap1} my sister be {gap2} this time on Sunday? — My sister {gap3} {gap4} dinner.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "preparing",
        "wrong": [
          "prepareing",
          "prepares"
        ],
        "explanation": "prepare → preparing: немая -e отбрасывается (не «prepareing»)."
      }
    ]
  },

  {
    "id": "B-0237",
    "level": "B",
    "text": "What {gap1} Irma and Ron be {gap2} at noon tomorrow? — Irma and Ron {gap3} {gap4} in the park.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "running",
        "wrong": [
          "runing",
          "ran"
        ],
        "explanation": "run → running: краткий ударный слог — согласная удваивается (не «runing»)."
      }
    ]
  },

  {
    "id": "B-0238",
    "level": "B",
    "text": "What {gap1} Tom be {gap2} this time tomorrow? — Tom {gap3} {gap4} by the window.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "sitting",
        "wrong": [
          "siting",
          "sat"
        ],
        "explanation": "sit → sitting: краткий ударный слог — согласная удваивается (не «siting»)."
      }
    ]
  },

  {
    "id": "B-0239",
    "level": "B",
    "text": "What {gap1} the man be {gap2} this time next week? — The man {gap3} {gap4} in the lake.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "swimming",
        "wrong": [
          "swiming",
          "swam"
        ],
        "explanation": "swim → swimming: краткий ударный слог — согласная удваивается (не «swiming»)."
      }
    ]
  },

  {
    "id": "B-0240",
    "level": "B",
    "text": "What {gap1} she be {gap2} at 8 PM tonight? — She {gap3} {gap4} the car.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "stopping",
        "wrong": [
          "stoping",
          "stopped"
        ],
        "explanation": "stop → stopping: краткий ударный слог — согласная удваивается (не «stoping»)."
      }
    ]
  },

  {
    "id": "B-0241",
    "level": "B",
    "text": "What {gap1} they be {gap2} this time next week? — They {gap3} {gap4} ready.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "getting",
        "wrong": [
          "geting",
          "got"
        ],
        "explanation": "get → getting: краткий ударный слог — согласная удваивается (не «geting»)."
      }
    ]
  },

  {
    "id": "B-0242",
    "level": "B",
    "text": "What {gap1} the teacher be {gap2} this time on Sunday? — The teacher {gap3} {gap4} the books away.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "putting",
        "wrong": [
          "puting",
          "put"
        ],
        "explanation": "put → putting: краткий ударный слог — согласная удваивается (не «puting»)."
      }
    ]
  },

  {
    "id": "B-0243",
    "level": "B",
    "text": "What {gap1} my sister be {gap2} this time tomorrow? — My sister {gap3} {gap4} the lesson.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "beginning",
        "wrong": [
          "begining",
          "began"
        ],
        "explanation": "begin → beginning: краткий ударный слог — согласная удваивается (не «begining»)."
      }
    ]
  },

  {
    "id": "B-0244",
    "level": "B",
    "text": "What {gap1} he be {gap2} this time tomorrow? — He {gap3} {gap4} a trip.",
    "hint": "Диалог о процессе в момент будущего.",
    "tags": [
      "Вопрос",
      "He/She/It",
      "Правописание -ing"
    ],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will",
        "wrong": [
          "are",
          "do"
        ],
        "explanation": "Wh-вопрос Future Continuous: … will + подлежащее + be + V-ing."
      },
      {
        "id": "gap2",
        "correct": "doing",
        "wrong": [
          "do",
          "did"
        ],
        "explanation": "После «be» — форма -ing: doing."
      },
      {
        "id": "gap3",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap4",
        "correct": "planning",
        "wrong": [
          "planing",
          "planned"
        ],
        "explanation": "plan → planning: краткий ударный слог — согласная удваивается (не «planing»)."
      }
    ]
  },

  {
    "id": "B-0245",
    "level": "B",
    "text": "Look — it is {gap1} now.",
    "hint": "«Look / now» → процесс идёт прямо сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "raining",
        "wrong": [
          "rains",
          "rain"
        ],
        "explanation": "Continuous требует форму -ing: raining."
      }
    ]
  },

  {
    "id": "B-0246",
    "level": "B",
    "text": "It {gap1} {gap2} hard at the moment.",
    "hint": "«at the moment» → сейчас.",
    "tags": [],
    "tense": {
      "correct": "Present Continuous",
      "wrong": [
        "Past Continuous",
        "Future Continuous"
      ],
      "explanation": "Действие происходит сейчас / в момент речи → Present Continuous (am/is/are + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "is",
        "wrong": [
          "are",
          "does"
        ],
        "explanation": "it → is (be), не do/does."
      },
      {
        "id": "gap2",
        "correct": "snowing",
        "wrong": [
          "snows",
          "snow"
        ],
        "explanation": "Continuous требует форму -ing: snowing."
      }
    ]
  },

  {
    "id": "B-0247",
    "level": "B",
    "text": "At noon yesterday, it was {gap1} hard.",
    "hint": "«yesterday» → момент в прошлом.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "raining",
        "wrong": [
          "rained",
          "rain"
        ],
        "explanation": "Continuous требует форму -ing: raining."
      }
    ]
  },

  {
    "id": "B-0248",
    "level": "B",
    "text": "When I called, it {gap1} {gap2} outside.",
    "hint": "Процесс в момент прошлого.",
    "tags": [],
    "tense": {
      "correct": "Past Continuous",
      "wrong": [
        "Present Continuous",
        "Future Continuous"
      ],
      "explanation": "Процесс в конкретный момент прошлого → Past Continuous (was/were + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "was",
        "wrong": [
          "were",
          "did"
        ],
        "explanation": "it → was (be), не did."
      },
      {
        "id": "gap2",
        "correct": "snowing",
        "wrong": [
          "snowed",
          "snow"
        ],
        "explanation": "Continuous требует форму -ing: snowing."
      }
    ]
  },

  {
    "id": "B-0249",
    "level": "B",
    "text": "At 8 PM tonight it will be {gap1}.",
    "hint": "«tonight» → момент в будущем.",
    "tags": [],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "raining",
        "wrong": [
          "rains",
          "rain"
        ],
        "explanation": "Continuous требует форму -ing: raining."
      }
    ]
  },

  {
    "id": "B-0250",
    "level": "B",
    "text": "This time tomorrow it {gap1} {gap2}.",
    "hint": "«this time tomorrow» → момент в будущем.",
    "tags": [],
    "tense": {
      "correct": "Future Continuous",
      "wrong": [
        "Present Continuous",
        "Past Continuous"
      ],
      "explanation": "Процесс в определённый момент будущего → Future Continuous (will be + V-ing)."
    },
    "gaps": [
      {
        "id": "gap1",
        "correct": "will be",
        "wrong": [
          "will",
          "are"
        ],
        "explanation": "Future Continuous = will be + V-ing. «will» без «be» — неверно."
      },
      {
        "id": "gap2",
        "correct": "snowing",
        "wrong": [
          "snows",
          "snow"
        ],
        "explanation": "Continuous требует форму -ing: snowing."
      }
    ]
  }

  /* ============ УРОВЕНЬ C — PERFECT + PERFECT CONTINUOUS ============ */



];
