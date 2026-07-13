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

const GRAMMAR_TENSES_TEST_VERB_C1 = [

  /* ===================== УРОВЕНЬ A — SIMPLE ===================== */

  

  /* ===================== УРОВЕНЬ B — CONTINUOUS ===================== */

  

  /* ============ УРОВЕНЬ C — PERFECT + PERFECT CONTINUOUS ============
     250 заданий, от простых к сложным (perfect: present / past / future
     + perfect continuous). Формат «Вопрос — Ответ», пропуски {gapN}.
     Сложность нарастает: 1 пропуск (только глагол) → 2 (вспом.+глагол)
     → отрицание / вопрос → 3 пропуска / Perfect Continuous.
     ================================================================ */

  {
    "id": "C1-0001",
    "level": "C",
    "text": "Is the report ready? — Yes, she has already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0002",
    "level": "C",
    "text": "Is the film familiar now? — Yes, Sharon has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "seen", "wrong": ["saw", "see"],
        "explanation": "Неправильный глагол: 3-я форма see → seen (нет «seeed»)." }
    ]
  },

  {
    "id": "C1-0003",
    "level": "C",
    "text": "Is the house finished? — Yes, Sharon has recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0004",
    "level": "C",
    "text": "Is the bike working now? — Yes, the children have already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "repaired", "wrong": ["repair", "repairing"],
        "explanation": "Правильный глагол: 3-я форма = repaired (-ed)." }
    ]
  },

  {
    "id": "C1-0005",
    "level": "C",
    "text": "Is the game over? — Yes, my brother has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "won", "wrong": ["win", "wined"],
        "explanation": "Неправильный глагол: 3-я форма win → won (нет «wined»)." }
    ]
  },

  {
    "id": "C1-0006",
    "level": "C",
    "text": "Is the fence finished? — Yes, they have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "painted", "wrong": ["paint", "painting"],
        "explanation": "Правильный глагол: 3-я форма = painted (-ed)." }
    ]
  },

  {
    "id": "C1-0007",
    "level": "C",
    "text": "Are the keys back now? — Yes, she has already {gap1} them.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0008",
    "level": "C",
    "text": "Is the window broken? — Yes, Maria has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "broken", "wrong": ["broke", "break"],
        "explanation": "Неправильный глагол: 3-я форма break → broken (нет «breaked»)." }
    ]
  },

  {
    "id": "C1-0009",
    "level": "C",
    "text": "Is the report ready? — Yes, Roberto and Selma have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0010",
    "level": "C",
    "text": "Is the house finished? — Yes, he has already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0011",
    "level": "C",
    "text": "Is the parcel on its way? — Yes, he has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0012",
    "level": "C",
    "text": "Is the parcel on its way? — Yes, we have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0013",
    "level": "C",
    "text": "Is the store open? — Yes, you have already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "opened", "wrong": ["open", "opening"],
        "explanation": "Правильный глагол: 3-я форма = opened (-ed)." }
    ]
  },

  {
    "id": "C1-0014",
    "level": "C",
    "text": "Are the tickets ready now? — Yes, Tom has just {gap1} them.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0015",
    "level": "C",
    "text": "Is everyone full now? — Yes, Maria has recently {gap1}.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0016",
    "level": "C",
    "text": "Is the medicine gone now? — Yes, he has already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0017",
    "level": "C",
    "text": "Is the movie finished? — Yes, my brother has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "watched", "wrong": ["watch", "watching"],
        "explanation": "Правильный глагол: 3-я форма = watched (-ed)." }
    ]
  },

  {
    "id": "C1-0018",
    "level": "C",
    "text": "Is the lesson clear now? — Yes, I have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0019",
    "level": "C",
    "text": "Is the car clean now? — Yes, he has already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "washed", "wrong": ["wash", "washing"],
        "explanation": "Правильный глагол: 3-я форма = washed (-ed)." }
    ]
  },

  {
    "id": "C1-0020",
    "level": "C",
    "text": "Is the letter ready? — Yes, she has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "written", "wrong": ["wrote", "write"],
        "explanation": "Неправильный глагол: 3-я форма write → written (нет «writeed»)." }
    ]
  },

  {
    "id": "C1-0021",
    "level": "C",
    "text": "Is the fence finished? — Yes, I have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "painted", "wrong": ["paint", "painting"],
        "explanation": "Правильный глагол: 3-я форма = painted (-ed)." }
    ]
  },

  {
    "id": "C1-0022",
    "level": "C",
    "text": "Are the new words easy now? — Yes, my brother has already {gap1} them.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "learned", "wrong": ["learn", "learning"],
        "explanation": "Правильный глагол: 3-я форма = learned (-ed)." }
    ]
  },

  {
    "id": "C1-0023",
    "level": "C",
    "text": "Is the film familiar now? — Yes, he has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "seen", "wrong": ["saw", "see"],
        "explanation": "Неправильный глагол: 3-я форма see → seen (нет «seeed»)." }
    ]
  },

  {
    "id": "C1-0024",
    "level": "C",
    "text": "Is the report ready? — Yes, you have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0025",
    "level": "C",
    "text": "Is the car clean now? — Yes, you have already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "washed", "wrong": ["wash", "washing"],
        "explanation": "Правильный глагол: 3-я форма = washed (-ed)." }
    ]
  },

  {
    "id": "C1-0026",
    "level": "C",
    "text": "Is the lesson clear now? — Yes, Sharon has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0027",
    "level": "C",
    "text": "Is the museum visit over? — Yes, Roberto and Selma have recently {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0028",
    "level": "C",
    "text": "Is the kitchen clean now? — Yes, we have already {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "cleaned", "wrong": ["clean", "cleaning"],
        "explanation": "Правильный глагол: 3-я форма = cleaned (-ed)." }
    ]
  },

  {
    "id": "C1-0029",
    "level": "C",
    "text": "Is the car clean now? — Yes, Sharon has just {gap1} it.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "washed", "wrong": ["wash", "washing"],
        "explanation": "Правильный глагол: 3-я форма = washed (-ed)." }
    ]
  },

  {
    "id": "C1-0030",
    "level": "C",
    "text": "Is the inbox empty now? — Yes, the children have recently {gap1} them.",
    "hint": "already/just/recently — результат важен сейчас → Present Perfect.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Связь с настоящим (have/has + 3-я форма) → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "answered", "wrong": ["answer", "answering"],
        "explanation": "Правильный глагол: 3-я форма = answered (-ed)." }
    ]
  },

  {
    "id": "C1-0031",
    "level": "C",
    "text": "Was everyone full by then? — Yes, she had already {gap1}.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0032",
    "level": "C",
    "text": "Was the medicine gone by then? — Yes, we had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0033",
    "level": "C",
    "text": "Was the car clean by then? — Yes, Irma and Ron had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "washed", "wrong": ["wash", "washing"],
        "explanation": "Правильный глагол: 3-я форма = washed (-ed)." }
    ]
  },

  {
    "id": "C1-0034",
    "level": "C",
    "text": "Was the shop closed by then? — Yes, my brother had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "closed", "wrong": ["close", "closing"],
        "explanation": "Правильный глагол: 3-я форма = closed (-ed)." }
    ]
  },

  {
    "id": "C1-0035",
    "level": "C",
    "text": "Was the parcel on its way by then? — Yes, Maria had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0036",
    "level": "C",
    "text": "Was the museum visit over by then? — Yes, the children had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0037",
    "level": "C",
    "text": "Were the keys back by then? — Yes, my brother had already {gap1} them.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0038",
    "level": "C",
    "text": "Was the house finished by then? — Yes, my brother had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0039",
    "level": "C",
    "text": "Was the lesson clear by then? — Yes, she had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0040",
    "level": "C",
    "text": "Were the keys back by then? — Yes, Maria had already {gap1} them.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0041",
    "level": "C",
    "text": "Was the milk all gone by morning? — Yes, they had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0042",
    "level": "C",
    "text": "What about the password by then? — Yes, Maria had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "forgotten", "wrong": ["forgot", "forget"],
        "explanation": "Неправильный глагол: 3-я форма forget → forgotten (нет «forgeted»)." }
    ]
  },

  {
    "id": "C1-0043",
    "level": "C",
    "text": "Was the meeting on by then? — Yes, the children had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "started", "wrong": ["start", "starting"],
        "explanation": "Правильный глагол: 3-я форма = started (-ed)." }
    ]
  },

  {
    "id": "C1-0044",
    "level": "C",
    "text": "Was the house finished by then? — Yes, we had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0045",
    "level": "C",
    "text": "Was the museum visit over by then? — Yes, she had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0046",
    "level": "C",
    "text": "Was the shop closed by then? — Yes, you had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "closed", "wrong": ["close", "closing"],
        "explanation": "Правильный глагол: 3-я форма = closed (-ed)." }
    ]
  },

  {
    "id": "C1-0047",
    "level": "C",
    "text": "Were the words easy by then? — Yes, I had already {gap1} them.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "learned", "wrong": ["learn", "learning"],
        "explanation": "Правильный глагол: 3-я форма = learned (-ed)." }
    ]
  },

  {
    "id": "C1-0048",
    "level": "C",
    "text": "Was the meeting on by then? — Yes, my brother had already {gap1} it.",
    "hint": "Действие случилось РАНЬШЕ другого прошлого → Past Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма для более раннего прошлого → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "started", "wrong": ["start", "starting"],
        "explanation": "Правильный глагол: 3-я форма = started (-ed)." }
    ]
  },

  {
    "id": "C1-0049",
    "level": "C",
    "text": "Will the kitchen be clean by tonight? — Yes, by then Maria will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "cleaned", "wrong": ["clean", "cleaning"],
        "explanation": "Правильный глагол: 3-я форма = cleaned (-ed)." }
    ]
  },

  {
    "id": "C1-0050",
    "level": "C",
    "text": "Will the meeting be on by then? — Yes, by then Sharon will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "started", "wrong": ["start", "starting"],
        "explanation": "Правильный глагол: 3-я форма = started (-ed)." }
    ]
  },

  {
    "id": "C1-0051",
    "level": "C",
    "text": "Will the words be easy by the test? — Yes, by then Tom will have {gap1} them.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "learned", "wrong": ["learn", "learning"],
        "explanation": "Правильный глагол: 3-я форма = learned (-ed)." }
    ]
  },

  {
    "id": "C1-0052",
    "level": "C",
    "text": "Will the inbox be empty by five? — Yes, by then the children will have {gap1} them.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "answered", "wrong": ["answer", "answering"],
        "explanation": "Правильный глагол: 3-я форма = answered (-ed)." }
    ]
  },

  {
    "id": "C1-0053",
    "level": "C",
    "text": "Will dinner be ready by eight? — Yes, by then my brother will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0054",
    "level": "C",
    "text": "Will the milk be gone by then? — Yes, by then you will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0055",
    "level": "C",
    "text": "Will the museum visit be over by then? — Yes, by then you will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0056",
    "level": "C",
    "text": "Will everyone be full by then? — Yes, by then Irma and Ron will have {gap1}.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0057",
    "level": "C",
    "text": "Will the keys be back by then? — Yes, by then the children will have {gap1} them.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0058",
    "level": "C",
    "text": "Will the window be broken by then? — Yes, by then Roberto and Selma will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "broken", "wrong": ["broke", "break"],
        "explanation": "Неправильный глагол: 3-я форма break → broken (нет «breaked»)." }
    ]
  },

  {
    "id": "C1-0059",
    "level": "C",
    "text": "Will the keys be back by then? — Yes, by then she will have {gap1} them.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0060",
    "level": "C",
    "text": "Will dinner be ready by eight? — Yes, by then Maria will have {gap1} it.",
    "hint": "Действие завершится К моменту в будущем → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "will have + 3-я форма → Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0061",
    "level": "C",
    "text": "Are the boxes in the new room? — Yes, they {gap1} already {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "moved", "wrong": ["move", "moving"],
        "explanation": "Правильный глагол: 3-я форма = moved (-ed)." }
    ]
  },

  {
    "id": "C1-0062",
    "level": "C",
    "text": "Is the kitchen clean now? — Yes, they {gap1} just {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "cleaned", "wrong": ["clean", "cleaning"],
        "explanation": "Правильный глагол: 3-я форма = cleaned (-ed)." }
    ]
  },

  {
    "id": "C1-0063",
    "level": "C",
    "text": "Is the medicine gone now? — Yes, Roberto and Selma {gap1} recently {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0064",
    "level": "C",
    "text": "Is the report ready? — Yes, I {gap1} {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0065",
    "level": "C",
    "text": "Is the file safe now? — Yes, she {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "saved", "wrong": ["save", "saving"],
        "explanation": "Правильный глагол: 3-я форма = saved (-ed)." }
    ]
  },

  {
    "id": "C1-0066",
    "level": "C",
    "text": "Are the tickets ready now? — Yes, he {gap1} just {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0067",
    "level": "C",
    "text": "Is the medicine gone now? — Yes, she {gap1} recently {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0068",
    "level": "C",
    "text": "Are the beds ready? — Yes, my brother {gap1} {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0069",
    "level": "C",
    "text": "Is the milk all gone? — Yes, Sharon {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0070",
    "level": "C",
    "text": "Is the museum visit over? — Yes, they {gap1} just {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0071",
    "level": "C",
    "text": "Are the beds ready? — Yes, Tom {gap1} recently {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0072",
    "level": "C",
    "text": "Are the new words easy now? — Yes, Irma and Ron {gap1} {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "learned", "wrong": ["learn", "learning"],
        "explanation": "Правильный глагол: 3-я форма = learned (-ed)." }
    ]
  },

  {
    "id": "C1-0073",
    "level": "C",
    "text": "Is the homework out of the way? — Yes, Maria {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "done", "wrong": ["did", "do"],
        "explanation": "Неправильный глагол: 3-я форма do → done (нет «doed»)." }
    ]
  },

  {
    "id": "C1-0074",
    "level": "C",
    "text": "Is everyone full now? — Yes, Sharon {gap1} just {gap2}.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0075",
    "level": "C",
    "text": "Is the window broken? — Yes, my brother {gap1} recently {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "broken", "wrong": ["broke", "break"],
        "explanation": "Неправильный глагол: 3-я форма break → broken (нет «breaked»)." }
    ]
  },

  {
    "id": "C1-0076",
    "level": "C",
    "text": "What about the password? — Yes, we {gap1} {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "forgotten", "wrong": ["forgot", "forget"],
        "explanation": "Неправильный глагол: 3-я форма forget → forgotten (нет «forgeted»)." }
    ]
  },

  {
    "id": "C1-0077",
    "level": "C",
    "text": "Is the letter ready? — Yes, he {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "written", "wrong": ["wrote", "write"],
        "explanation": "Неправильный глагол: 3-я форма write → written (нет «writeed»)." }
    ]
  },

  {
    "id": "C1-0078",
    "level": "C",
    "text": "Is the story familiar now? — Yes, Maria {gap1} just {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "read", "wrong": ["readed", "reads"],
        "explanation": "Неправильный глагол: 3-я форма read → read (нет «readed»)." }
    ]
  },

  {
    "id": "C1-0079",
    "level": "C",
    "text": "Is the car clean now? — Yes, my brother {gap1} recently {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "washed", "wrong": ["wash", "washing"],
        "explanation": "Правильный глагол: 3-я форма = washed (-ed)." }
    ]
  },

  {
    "id": "C1-0080",
    "level": "C",
    "text": "Are the boxes in the new room? — Yes, we {gap1} {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "moved", "wrong": ["move", "moving"],
        "explanation": "Правильный глагол: 3-я форма = moved (-ed)." }
    ]
  },

  {
    "id": "C1-0081",
    "level": "C",
    "text": "Is the trip planned? — Yes, Tom {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "planned", "wrong": ["plan", "planning"],
        "explanation": "Правильный глагол: 3-я форма = planned (-ed)." }
    ]
  },

  {
    "id": "C1-0082",
    "level": "C",
    "text": "What about the password? — Yes, Tom {gap1} just {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "forgotten", "wrong": ["forgot", "forget"],
        "explanation": "Неправильный глагол: 3-я форма forget → forgotten (нет «forgeted»)." }
    ]
  },

  {
    "id": "C1-0083",
    "level": "C",
    "text": "Is the house finished? — Yes, we {gap1} recently {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0084",
    "level": "C",
    "text": "Are the tickets ready now? — Yes, we {gap1} {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0085",
    "level": "C",
    "text": "Is the meeting on yet? — Yes, she {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "started", "wrong": ["start", "starting"],
        "explanation": "Правильный глагол: 3-я форма = started (-ed)." }
    ]
  },

  {
    "id": "C1-0086",
    "level": "C",
    "text": "Are the tickets ready now? — Yes, Maria {gap1} just {gap2} them.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0087",
    "level": "C",
    "text": "Is dinner ready? — Yes, he {gap1} recently {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0088",
    "level": "C",
    "text": "Is the parcel on its way? — Yes, Maria {gap1} {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0089",
    "level": "C",
    "text": "Is the homework out of the way? — Yes, Roberto and Selma {gap1} already {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "done", "wrong": ["did", "do"],
        "explanation": "Неправильный глагол: 3-я форма do → done (нет «doed»)." }
    ]
  },

  {
    "id": "C1-0090",
    "level": "C",
    "text": "Is the bike working now? — Yes, my brother {gap1} just {gap2} it.",
    "hint": "Результат связан с настоящим → Present Perfect (have/has + 3-я форма).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "have/has + 3-я форма → Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "repaired", "wrong": ["repair", "repairing"],
        "explanation": "Правильный глагол: 3-я форма = repaired (-ed)." }
    ]
  },

  {
    "id": "C1-0091",
    "level": "C",
    "text": "Was everyone full by then? — Yes, she {gap1} already {gap2}.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0092",
    "level": "C",
    "text": "Was the house finished by then? — Yes, my brother {gap1} just {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0093",
    "level": "C",
    "text": "Was everyone full by then? — Yes, he {gap1} {gap2}.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0094",
    "level": "C",
    "text": "Was the office empty by then? — Yes, they {gap1} already {gap2}.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "left", "wrong": ["leave", "leaveed"],
        "explanation": "Неправильный глагол: 3-я форма leave → left (нет «leaveed»)." }
    ]
  },

  {
    "id": "C1-0095",
    "level": "C",
    "text": "Were the beds ready by then? — Yes, Maria {gap1} just {gap2} them.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0096",
    "level": "C",
    "text": "Was the window broken by then? — Yes, Tom {gap1} {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "broken", "wrong": ["broke", "break"],
        "explanation": "Неправильный глагол: 3-я форма break → broken (нет «breaked»)." }
    ]
  },

  {
    "id": "C1-0097",
    "level": "C",
    "text": "Was the report ready by then? — Yes, Tom {gap1} already {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0098",
    "level": "C",
    "text": "Was the bike working by then? — Yes, Maria {gap1} just {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "repaired", "wrong": ["repair", "repairing"],
        "explanation": "Правильный глагол: 3-я форма = repaired (-ed)." }
    ]
  },

  {
    "id": "C1-0099",
    "level": "C",
    "text": "Were the boxes in the new room by then? — Yes, he {gap1} {gap2} them.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "moved", "wrong": ["move", "moving"],
        "explanation": "Правильный глагол: 3-я форма = moved (-ed)." }
    ]
  },

  {
    "id": "C1-0100",
    "level": "C",
    "text": "Was dinner ready by then? — Yes, Roberto and Selma {gap1} already {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0101",
    "level": "C",
    "text": "Was the window broken by then? — Yes, they {gap1} just {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "broken", "wrong": ["broke", "break"],
        "explanation": "Неправильный глагол: 3-я форма break → broken (нет «breaked»)." }
    ]
  },

  {
    "id": "C1-0102",
    "level": "C",
    "text": "Was the meeting on by then? — Yes, my brother {gap1} {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "started", "wrong": ["start", "starting"],
        "explanation": "Правильный глагол: 3-я форма = started (-ed)." }
    ]
  },

  {
    "id": "C1-0103",
    "level": "C",
    "text": "Was the kitchen clean by then? — Yes, I {gap1} already {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "cleaned", "wrong": ["clean", "cleaning"],
        "explanation": "Правильный глагол: 3-я форма = cleaned (-ed)." }
    ]
  },

  {
    "id": "C1-0104",
    "level": "C",
    "text": "Was the homework out of the way by then? — Yes, I {gap1} just {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "done", "wrong": ["did", "do"],
        "explanation": "Неправильный глагол: 3-я форма do → done (нет «doed»)." }
    ]
  },

  {
    "id": "C1-0105",
    "level": "C",
    "text": "Was the inbox empty by then? — Yes, my brother {gap1} {gap2} them.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "answered", "wrong": ["answer", "answering"],
        "explanation": "Правильный глагол: 3-я форма = answered (-ed)." }
    ]
  },

  {
    "id": "C1-0106",
    "level": "C",
    "text": "Was everyone full by then? — Yes, you {gap1} already {gap2}.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0107",
    "level": "C",
    "text": "Was the medicine gone by then? — Yes, you {gap1} just {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0108",
    "level": "C",
    "text": "Was the medicine gone by then? — Yes, she {gap1} {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0109",
    "level": "C",
    "text": "Was the bike working by then? — Yes, they {gap1} already {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "repaired", "wrong": ["repair", "repairing"],
        "explanation": "Правильный глагол: 3-я форма = repaired (-ed)." }
    ]
  },

  {
    "id": "C1-0110",
    "level": "C",
    "text": "Was the shop closed by then? — Yes, I {gap1} just {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": [],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "closed", "wrong": ["close", "closing"],
        "explanation": "Правильный глагол: 3-я форма = closed (-ed)." }
    ]
  },

  {
    "id": "C1-0111",
    "level": "C",
    "text": "Was the report ready by then? — Yes, Sharon {gap1} {gap2} it.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0112",
    "level": "C",
    "text": "Was everyone full by then? — Yes, Maria {gap1} already {gap2}.",
    "hint": "Более раннее прошлое → Past Perfect (had + 3-я форма для всех лиц).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "had + 3-я форма → Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "have"],
        "explanation": "Past Perfect для всех лиц — had." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0113",
    "level": "C",
    "text": "Will the keys be back by then? — Yes, by then she {gap1} {gap2} found them.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0114",
    "level": "C",
    "text": "Will the medicine be gone by then? — Yes, by then Irma and Ron {gap1} {gap2} taken it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0115",
    "level": "C",
    "text": "Will the letter be ready by noon? — Yes, by then she {gap1} {gap2} written it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0116",
    "level": "C",
    "text": "Will the milk be gone by then? — Yes, by then he {gap1} {gap2} drunk it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0117",
    "level": "C",
    "text": "Will the medicine be gone by then? — Yes, by then Maria {gap1} {gap2} taken it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0118",
    "level": "C",
    "text": "Will the medicine be gone by then? — Yes, by then we {gap1} {gap2} taken it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0119",
    "level": "C",
    "text": "Will the lesson be clear by Friday? — Yes, by then we {gap1} {gap2} studied it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0120",
    "level": "C",
    "text": "Will the story be familiar by then? — Yes, by then I {gap1} {gap2} read it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0121",
    "level": "C",
    "text": "Will the film be familiar by then? — Yes, by then he {gap1} {gap2} seen it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0122",
    "level": "C",
    "text": "Will the guests be on the list by then? — Yes, by then you {gap1} {gap2} invited them.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0123",
    "level": "C",
    "text": "Will the homework be out of the way by then? — Yes, by then you {gap1} {gap2} done it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0124",
    "level": "C",
    "text": "Will the letter be ready by noon? — Yes, by then Irma and Ron {gap1} {gap2} written it.",
    "hint": "Завершится к моменту в будущем → Future Perfect (will have + 3-я форма).",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have (не has/had)." }
    ]
  },

  {
    "id": "C1-0125",
    "level": "C",
    "text": "Are the new words easy now? — No, we {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "learned", "wrong": ["learn", "learning"],
        "explanation": "Правильный глагол: 3-я форма = learned (-ed)." }
    ]
  },

  {
    "id": "C1-0126",
    "level": "C",
    "text": "Is the lesson clear now? — No, Roberto and Selma {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0127",
    "level": "C",
    "text": "Are the guests on the list? — No, Roberto and Selma {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "invited", "wrong": ["invite", "inviting"],
        "explanation": "Правильный глагол: 3-я форма = invited (-ed)." }
    ]
  },

  {
    "id": "C1-0128",
    "level": "C",
    "text": "Is the office empty now? — No, I {gap1} {gap2} yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "left", "wrong": ["leave", "leaveed"],
        "explanation": "Неправильный глагол: 3-я форма leave → left (нет «leaveed»)." }
    ]
  },

  {
    "id": "C1-0129",
    "level": "C",
    "text": "Is everyone full now? — No, my brother {gap1} {gap2} yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0130",
    "level": "C",
    "text": "Are the guests on the list? — No, you {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "invited", "wrong": ["invite", "inviting"],
        "explanation": "Правильный глагол: 3-я форма = invited (-ed)." }
    ]
  },

  {
    "id": "C1-0131",
    "level": "C",
    "text": "Is the file safe now? — No, the children {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "saved", "wrong": ["save", "saving"],
        "explanation": "Правильный глагол: 3-я форма = saved (-ed)." }
    ]
  },

  {
    "id": "C1-0132",
    "level": "C",
    "text": "Are the boxes in the new room? — No, Sharon {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "moved", "wrong": ["move", "moving"],
        "explanation": "Правильный глагол: 3-я форма = moved (-ed)." }
    ]
  },

  {
    "id": "C1-0133",
    "level": "C",
    "text": "Is the medicine gone now? — No, Tom {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0134",
    "level": "C",
    "text": "Is dinner ready? — No, you {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0135",
    "level": "C",
    "text": "Is the lesson clear now? — No, Tom {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0136",
    "level": "C",
    "text": "Is the letter ready? — No, he {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "written", "wrong": ["wrote", "write"],
        "explanation": "Неправильный глагол: 3-я форма write → written (нет «writeed»)." }
    ]
  },

  {
    "id": "C1-0137",
    "level": "C",
    "text": "Are the keys back now? — No, my brother {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0138",
    "level": "C",
    "text": "Is dinner ready? — No, Roberto and Selma {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0139",
    "level": "C",
    "text": "Is dinner ready? — No, the children {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0140",
    "level": "C",
    "text": "Is the inbox empty now? — No, my brother {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "answered", "wrong": ["answer", "answering"],
        "explanation": "Правильный глагол: 3-я форма = answered (-ed)." }
    ]
  },

  {
    "id": "C1-0141",
    "level": "C",
    "text": "Are the boxes in the new room? — No, Tom {gap1} {gap2} them yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "moved", "wrong": ["move", "moving"],
        "explanation": "Правильный глагол: 3-я форма = moved (-ed)." }
    ]
  },

  {
    "id": "C1-0142",
    "level": "C",
    "text": "Is the shop closed? — No, Sharon {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "closed", "wrong": ["close", "closing"],
        "explanation": "Правильный глагол: 3-я форма = closed (-ed)." }
    ]
  },

  {
    "id": "C1-0143",
    "level": "C",
    "text": "Is the lesson clear now? — No, Irma and Ron {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "haven't", "wrong": ["hasn't", "didn't"],
        "explanation": "Для I/you/we/they отрицание — haven't." },
      { "id": "gap2", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0144",
    "level": "C",
    "text": "Is the trip planned? — No, my brother {gap1} {gap2} it yet.",
    "hint": "yet + результата ещё нет → Present Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "haven't/hasn't + 3-я форма → Present Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hasn't", "wrong": ["haven't", "didn't"],
        "explanation": "Для he/she/it отрицание — hasn't." },
      { "id": "gap2", "correct": "planned", "wrong": ["plan", "planning"],
        "explanation": "Правильный глагол: 3-я форма = planned (-ed)." }
    ]
  },

  {
    "id": "C1-0145",
    "level": "C",
    "text": "{gap1} I {gap2} the beds yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0146",
    "level": "C",
    "text": "{gap1} you {gap2} the fence yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "painted", "wrong": ["paint", "painting"],
        "explanation": "Правильный глагол: 3-я форма = painted (-ed)." }
    ]
  },

  {
    "id": "C1-0147",
    "level": "C",
    "text": "{gap1} my brother {gap2} the museum yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Has", "wrong": ["Have", "Did"],
        "explanation": "Вопрос для he/she/it начинается с Has." },
      { "id": "gap2", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0148",
    "level": "C",
    "text": "{gap1} I {gap2} yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0149",
    "level": "C",
    "text": "{gap1} we {gap2} the guests yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "invited", "wrong": ["invite", "inviting"],
        "explanation": "Правильный глагол: 3-я форма = invited (-ed)." }
    ]
  },

  {
    "id": "C1-0150",
    "level": "C",
    "text": "{gap1} they {gap2} yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0151",
    "level": "C",
    "text": "{gap1} she {gap2} the museum yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Has", "wrong": ["Have", "Did"],
        "explanation": "Вопрос для he/she/it начинается с Has." },
      { "id": "gap2", "correct": "visited", "wrong": ["visit", "visiting"],
        "explanation": "Правильный глагол: 3-я форма = visited (-ed)." }
    ]
  },

  {
    "id": "C1-0152",
    "level": "C",
    "text": "{gap1} you {gap2} the milk yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0153",
    "level": "C",
    "text": "{gap1} my brother {gap2} the beds yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Has", "wrong": ["Have", "Did"],
        "explanation": "Вопрос для he/she/it начинается с Has." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0154",
    "level": "C",
    "text": "{gap1} Irma and Ron {gap2} the game yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "won", "wrong": ["win", "wined"],
        "explanation": "Неправильный глагол: 3-я форма win → won (нет «wined»)." }
    ]
  },

  {
    "id": "C1-0155",
    "level": "C",
    "text": "{gap1} Roberto and Selma {gap2} the password yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "forgotten", "wrong": ["forgot", "forget"],
        "explanation": "Неправильный глагол: 3-я форма forget → forgotten (нет «forgeted»)." }
    ]
  },

  {
    "id": "C1-0156",
    "level": "C",
    "text": "{gap1} Tom {gap2} the keys yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Has", "wrong": ["Have", "Did"],
        "explanation": "Вопрос для he/she/it начинается с Has." },
      { "id": "gap2", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0157",
    "level": "C",
    "text": "{gap1} we {gap2} the lesson yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0158",
    "level": "C",
    "text": "{gap1} Tom {gap2} yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Has", "wrong": ["Have", "Did"],
        "explanation": "Вопрос для he/she/it начинается с Has." },
      { "id": "gap2", "correct": "eaten", "wrong": ["ate", "eat"],
        "explanation": "Неправильный глагол: 3-я форма eat → eaten (нет «eated»)." }
    ]
  },

  {
    "id": "C1-0159",
    "level": "C",
    "text": "{gap1} the children {gap2} the letter yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "written", "wrong": ["wrote", "write"],
        "explanation": "Неправильный глагол: 3-я форма write → written (нет «writeed»)." }
    ]
  },

  {
    "id": "C1-0160",
    "level": "C",
    "text": "{gap1} Irma and Ron {gap2} the guests yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "invited", "wrong": ["invite", "inviting"],
        "explanation": "Правильный глагол: 3-я форма = invited (-ed)." }
    ]
  },

  {
    "id": "C1-0161",
    "level": "C",
    "text": "{gap1} you {gap2} the lesson yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "studied", "wrong": ["study", "studying"],
        "explanation": "Правильный глагол: 3-я форма = studied (-ed)." }
    ]
  },

  {
    "id": "C1-0162",
    "level": "C",
    "text": "{gap1} I {gap2} the shop yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "closed", "wrong": ["close", "closing"],
        "explanation": "Правильный глагол: 3-я форма = closed (-ed)." }
    ]
  },

  {
    "id": "C1-0163",
    "level": "C",
    "text": "{gap1} the children {gap2} the parcel yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0164",
    "level": "C",
    "text": "{gap1} I {gap2} the medicine yet? — No, not yet.",
    "hint": "Вопрос о результате к настоящему → Present Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect",
      "wrong": ["Past Simple", "Past Perfect"],
      "explanation": "Have/Has + подлежащее + 3-я форма → вопрос в Present Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Have", "wrong": ["Has", "Did"],
        "explanation": "Вопрос для I/you/we/they начинается с Have." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0165",
    "level": "C",
    "text": "Were the beds ready by then? — No, the children {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0166",
    "level": "C",
    "text": "Was the milk all gone by morning? — No, he {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0167",
    "level": "C",
    "text": "Were the words easy by then? — No, the children {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "learned", "wrong": ["learn", "learning"],
        "explanation": "Правильный глагол: 3-я форма = learned (-ed)." }
    ]
  },

  {
    "id": "C1-0168",
    "level": "C",
    "text": "What about the password by then? — No, Maria {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "forgotten", "wrong": ["forgot", "forget"],
        "explanation": "Неправильный глагол: 3-я форма forget → forgotten (нет «forgeted»)." }
    ]
  },

  {
    "id": "C1-0169",
    "level": "C",
    "text": "Was the window broken by then? — No, he {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "broken", "wrong": ["broke", "break"],
        "explanation": "Неправильный глагол: 3-я форма break → broken (нет «breaked»)." }
    ]
  },

  {
    "id": "C1-0170",
    "level": "C",
    "text": "Were the beds ready by then? — No, we {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "made", "wrong": ["make", "makeed"],
        "explanation": "Неправильный глагол: 3-я форма make → made (нет «makeed»)." }
    ]
  },

  {
    "id": "C1-0171",
    "level": "C",
    "text": "Was the inbox empty by then? — No, you {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "answered", "wrong": ["answer", "answering"],
        "explanation": "Правильный глагол: 3-я форма = answered (-ed)." }
    ]
  },

  {
    "id": "C1-0172",
    "level": "C",
    "text": "Were the tickets ready by then? — No, Irma and Ron {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0173",
    "level": "C",
    "text": "Was dinner ready by then? — No, Sharon {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "cooked", "wrong": ["cook", "cooking"],
        "explanation": "Правильный глагол: 3-я форма = cooked (-ed)." }
    ]
  },

  {
    "id": "C1-0174",
    "level": "C",
    "text": "Were the guests on the list by then? — No, Maria {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "invited", "wrong": ["invite", "inviting"],
        "explanation": "Правильный глагол: 3-я форма = invited (-ed)." }
    ]
  },

  {
    "id": "C1-0175",
    "level": "C",
    "text": "Was the letter ready by then? — No, you {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "written", "wrong": ["wrote", "write"],
        "explanation": "Неправильный глагол: 3-я форма write → written (нет «writeed»)." }
    ]
  },

  {
    "id": "C1-0176",
    "level": "C",
    "text": "Was the house finished by then? — No, Irma and Ron {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "built", "wrong": ["build", "builded"],
        "explanation": "Неправильный глагол: 3-я форма build → built (нет «builded»)." }
    ]
  },

  {
    "id": "C1-0177",
    "level": "C",
    "text": "Were the keys back by then? — No, he {gap1} {gap2} them yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "found", "wrong": ["find", "finded"],
        "explanation": "Неправильный глагол: 3-я форма find → found (нет «finded»)." }
    ]
  },

  {
    "id": "C1-0178",
    "level": "C",
    "text": "Was the movie finished when you called? — No, Tom {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "watched", "wrong": ["watch", "watching"],
        "explanation": "Правильный глагол: 3-я форма = watched (-ed)." }
    ]
  },

  {
    "id": "C1-0179",
    "level": "C",
    "text": "Was the report ready by then? — No, he {gap1} {gap2} it yet.",
    "hint": "Более раннее прошлое не случилось → Past Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "hadn't + 3-я форма для всех лиц → Past Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "hadn't", "wrong": ["haven't", "didn't"],
        "explanation": "Отрицание Past Perfect — hadn't (для всех лиц)." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0180",
    "level": "C",
    "text": "Will the tickets be ready by Friday? — No, Maria {gap1} {gap2} bought them by then.",
    "hint": "Действие НЕ завершится к моменту будущего → Future Perfect, отрицание.",
    "tags": ["Отрицание", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "won't have + 3-я форма → Future Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "isn't"],
        "explanation": "Отрицание Future Perfect — won't have." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После won't всегда have." }
    ]
  },

  {
    "id": "C1-0181",
    "level": "C",
    "text": "Will the game be over by then? — No, I {gap1} {gap2} won it by then.",
    "hint": "Действие НЕ завершится к моменту будущего → Future Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "won't have + 3-я форма → Future Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "isn't"],
        "explanation": "Отрицание Future Perfect — won't have." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После won't всегда have." }
    ]
  },

  {
    "id": "C1-0182",
    "level": "C",
    "text": "Will the words be easy by the test? — No, I {gap1} {gap2} learned them by then.",
    "hint": "Действие НЕ завершится к моменту будущего → Future Perfect, отрицание.",
    "tags": ["Отрицание"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "won't have + 3-я форма → Future Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "isn't"],
        "explanation": "Отрицание Future Perfect — won't have." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После won't всегда have." }
    ]
  },

  {
    "id": "C1-0183",
    "level": "C",
    "text": "Will the keys be back by then? — No, you {gap1} {gap2} found them by then.",
    "hint": "Действие НЕ завершится к моменту будущего → Future Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "won't have + 3-я форма → Future Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "isn't"],
        "explanation": "Отрицание Future Perfect — won't have." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После won't всегда have." }
    ]
  },

  {
    "id": "C1-0184",
    "level": "C",
    "text": "Will the parcel be on its way by Monday? — No, I {gap1} {gap2} sent it by then.",
    "hint": "Действие НЕ завершится к моменту будущего → Future Perfect, отрицание.",
    "tags": ["Отрицание", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "won't have + 3-я форма → Future Perfect (отрицание)."
    },
    "gaps": [
      { "id": "gap1", "correct": "won't", "wrong": ["don't", "isn't"],
        "explanation": "Отрицание Future Perfect — won't have." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После won't всегда have." }
    ]
  },

  {
    "id": "C1-0185",
    "level": "C",
    "text": "{gap1} my brother {gap2} eaten by then? — Probably yes.",
    "hint": "Вопрос о завершении к моменту будущего → Future Perfect.",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Will + подлежащее + have + 3-я форма → вопрос Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Has", "Does"],
        "explanation": "Вопрос Future Perfect начинается с Will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После подлежащего — have (will ... have ...)." }
    ]
  },

  {
    "id": "C1-0186",
    "level": "C",
    "text": "{gap1} my brother {gap2} watched the movie by then? — Probably yes.",
    "hint": "Вопрос о завершении к моменту будущего → Future Perfect.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Will + подлежащее + have + 3-я форма → вопрос Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Has", "Does"],
        "explanation": "Вопрос Future Perfect начинается с Will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После подлежащего — have (will ... have ...)." }
    ]
  },

  {
    "id": "C1-0187",
    "level": "C",
    "text": "{gap1} he {gap2} studied the lesson by then? — Probably yes.",
    "hint": "Вопрос о завершении к моменту будущего → Future Perfect.",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Will + подлежащее + have + 3-я форма → вопрос Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Has", "Does"],
        "explanation": "Вопрос Future Perfect начинается с Will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После подлежащего — have (will ... have ...)." }
    ]
  },

  {
    "id": "C1-0188",
    "level": "C",
    "text": "{gap1} we {gap2} done the homework by then? — Probably yes.",
    "hint": "Вопрос о завершении к моменту будущего → Future Perfect.",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Present Perfect"],
      "explanation": "Will + подлежащее + have + 3-я форма → вопрос Future Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Will", "wrong": ["Has", "Does"],
        "explanation": "Вопрос Future Perfect начинается с Will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После подлежащего — have (will ... have ...)." }
    ]
  },

  {
    "id": "C1-0189",
    "level": "C",
    "text": "Will the tickets be ready by Friday? — Yes, by then Sharon {gap1} {gap2} {gap3} them.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0190",
    "level": "C",
    "text": "Will the game be over by then? — Yes, by then Maria {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "won", "wrong": ["win", "wined"],
        "explanation": "Неправильный глагол: 3-я форма win → won (нет «wined»)." }
    ]
  },

  {
    "id": "C1-0191",
    "level": "C",
    "text": "Will the bike be working by Saturday? — Yes, by then Roberto and Selma {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "repaired", "wrong": ["repair", "repairing"],
        "explanation": "Правильный глагол: 3-я форма = repaired (-ed)." }
    ]
  },

  {
    "id": "C1-0192",
    "level": "C",
    "text": "Will the parcel be on its way by Monday? — Yes, by then my brother {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0193",
    "level": "C",
    "text": "Will the store be open by nine? — Yes, by then he {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "opened", "wrong": ["open", "opening"],
        "explanation": "Правильный глагол: 3-я форма = opened (-ed)." }
    ]
  },

  {
    "id": "C1-0194",
    "level": "C",
    "text": "Will the report be ready by Friday? — Yes, by then my brother {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0195",
    "level": "C",
    "text": "Will the office be empty by six? — Yes, by then we {gap1} {gap2} {gap3}.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "left", "wrong": ["leave", "leaveed"],
        "explanation": "Неправильный глагол: 3-я форма leave → left (нет «leaveed»)." }
    ]
  },

  {
    "id": "C1-0196",
    "level": "C",
    "text": "Will the boxes be in the new room by noon? — Yes, by then Sharon {gap1} {gap2} {gap3} them.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "moved", "wrong": ["move", "moving"],
        "explanation": "Правильный глагол: 3-я форма = moved (-ed)." }
    ]
  },

  {
    "id": "C1-0197",
    "level": "C",
    "text": "Will the story be familiar by then? — Yes, by then Maria {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "read", "wrong": ["readed", "reads"],
        "explanation": "Неправильный глагол: 3-я форма read → read (нет «readed»)." }
    ]
  },

  {
    "id": "C1-0198",
    "level": "C",
    "text": "Will the file be safe by then? — Yes, by then they {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "saved", "wrong": ["save", "saving"],
        "explanation": "Правильный глагол: 3-я форма = saved (-ed)." }
    ]
  },

  {
    "id": "C1-0199",
    "level": "C",
    "text": "Will the milk be gone by then? — Yes, by then we {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0200",
    "level": "C",
    "text": "Will the meeting be on by then? — Yes, by then they {gap1} {gap2} {gap3} it.",
    "hint": "Действие полностью завершится к моменту будущего → Future Perfect.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect",
      "wrong": ["Future Simple", "Future Continuous"],
      "explanation": "Future Perfect = will + have + 3-я форма."
    },
    "gaps": [
      { "id": "gap1", "correct": "will", "wrong": ["has", "is"],
        "explanation": "Future Perfect строится с will." },
      { "id": "gap2", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will всегда have." },
      { "id": "gap3", "correct": "started", "wrong": ["start", "starting"],
        "explanation": "Правильный глагол: 3-я форма = started (-ed)." }
    ]
  },

  {
    "id": "C1-0201",
    "level": "C",
    "text": "{gap1} Sharon {gap2} the game before the others arrived? — Yes, Sharon had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "won", "wrong": ["win", "wined"],
        "explanation": "Неправильный глагол: 3-я форма win → won (нет «wined»)." }
    ]
  },

  {
    "id": "C1-0202",
    "level": "C",
    "text": "{gap1} they {gap2} the trip before the others arrived? — Yes, they had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "planned", "wrong": ["plan", "planning"],
        "explanation": "Правильный глагол: 3-я форма = planned (-ed)." }
    ]
  },

  {
    "id": "C1-0203",
    "level": "C",
    "text": "{gap1} she {gap2} the movie before the others arrived? — Yes, she had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "watched", "wrong": ["watch", "watching"],
        "explanation": "Правильный глагол: 3-я форма = watched (-ed)." }
    ]
  },

  {
    "id": "C1-0204",
    "level": "C",
    "text": "{gap1} we {gap2} the file before the others arrived? — Yes, we had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "saved", "wrong": ["save", "saving"],
        "explanation": "Правильный глагол: 3-я форма = saved (-ed)." }
    ]
  },

  {
    "id": "C1-0205",
    "level": "C",
    "text": "{gap1} you {gap2} the milk before the others arrived? — Yes, you had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "drunk", "wrong": ["drank", "drink"],
        "explanation": "Неправильный глагол: 3-я форма drink → drunk (нет «drinked»)." }
    ]
  },

  {
    "id": "C1-0206",
    "level": "C",
    "text": "{gap1} the children {gap2} the medicine before the others arrived? — Yes, the children had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0207",
    "level": "C",
    "text": "{gap1} Tom {gap2} the password before the others arrived? — Yes, Tom had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "forgotten", "wrong": ["forgot", "forget"],
        "explanation": "Неправильный глагол: 3-я форма forget → forgotten (нет «forgeted»)." }
    ]
  },

  {
    "id": "C1-0208",
    "level": "C",
    "text": "{gap1} they {gap2} the medicine before the others arrived? — Yes, they had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "taken", "wrong": ["took", "take"],
        "explanation": "Неправильный глагол: 3-я форма take → taken (нет «takeed»)." }
    ]
  },

  {
    "id": "C1-0209",
    "level": "C",
    "text": "{gap1} Tom {gap2} the report before the others arrived? — Yes, Tom had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0210",
    "level": "C",
    "text": "{gap1} I {gap2} the tickets before the others arrived? — Yes, I had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "bought", "wrong": ["buy", "buyed"],
        "explanation": "Неправильный глагол: 3-я форма buy → bought (нет «buyed»)." }
    ]
  },

  {
    "id": "C1-0211",
    "level": "C",
    "text": "{gap1} you {gap2} the report before the others arrived? — Yes, you had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0212",
    "level": "C",
    "text": "{gap1} we {gap2} the trip before the others arrived? — Yes, we had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "planned", "wrong": ["plan", "planning"],
        "explanation": "Правильный глагол: 3-я форма = planned (-ed)." }
    ]
  },

  {
    "id": "C1-0213",
    "level": "C",
    "text": "{gap1} Tom {gap2} the parcel before the others arrived? — Yes, Tom had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "sent", "wrong": ["send", "sended"],
        "explanation": "Неправильный глагол: 3-я форма send → sent (нет «sended»)." }
    ]
  },

  {
    "id": "C1-0214",
    "level": "C",
    "text": "{gap1} she {gap2} the store before the others arrived? — Yes, she had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "opened", "wrong": ["open", "opening"],
        "explanation": "Правильный глагол: 3-я форма = opened (-ed)." }
    ]
  },

  {
    "id": "C1-0215",
    "level": "C",
    "text": "{gap1} my brother {gap2} the report before the others arrived? — Yes, my brother had.",
    "hint": "Раньше другого прошлого события → Past Perfect (вопрос).",
    "tags": ["Вопрос", "He/She/It"],
    "tense": {
      "correct": "Past Perfect",
      "wrong": ["Present Perfect", "Past Simple"],
      "explanation": "Had + подлежащее + 3-я форма → вопрос в Past Perfect."
    },
    "gaps": [
      { "id": "gap1", "correct": "Had", "wrong": ["Has", "Did"],
        "explanation": "Вопрос Past Perfect начинается с Had (для всех лиц)." },
      { "id": "gap2", "correct": "finished", "wrong": ["finish", "finishing"],
        "explanation": "Правильный глагол: 3-я форма = finished (-ed)." }
    ]
  },

  {
    "id": "C1-0216",
    "level": "C",
    "text": "The progress is really impressive. — Roberto and Selma {gap1} {gap2} {gap3} for years.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "learning", "wrong": ["learn", "learned"],
        "explanation": "После been — форма -ing: learning." }
    ]
  },

  {
    "id": "C1-0217",
    "level": "C",
    "text": "There are papers all over the desk. — Sharon {gap1} {gap2} {gap3} for a long time.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "writing", "wrong": ["write", "wrote"],
        "explanation": "После been — форма -ing: writing." }
    ]
  },

  {
    "id": "C1-0218",
    "level": "C",
    "text": "The progress is really impressive. — Tom {gap1} {gap2} {gap3} for years.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "learning", "wrong": ["learn", "learned"],
        "explanation": "После been — форма -ing: learning." }
    ]
  },

  {
    "id": "C1-0219",
    "level": "C",
    "text": "The phone line is still busy. — Tom {gap1} {gap2} {gap3} for an hour.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "talking", "wrong": ["talk", "talked"],
        "explanation": "После been — форма -ing: talking." }
    ]
  },

  {
    "id": "C1-0220",
    "level": "C",
    "text": "Everyone is out of breath. — Irma and Ron {gap1} {gap2} {gap3} for half an hour.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "running", "wrong": ["run", "ran"],
        "explanation": "После been — форма -ing: running." }
    ]
  },

  {
    "id": "C1-0221",
    "level": "C",
    "text": "These boots are completely worn out. — She {gap1} {gap2} {gap3} for miles.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "walking", "wrong": ["walk", "walked"],
        "explanation": "После been — форма -ing: walking." }
    ]
  },

  {
    "id": "C1-0222",
    "level": "C",
    "text": "The suitcases are everywhere. — Tom {gap1} {gap2} {gap3} for weeks.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "traveling", "wrong": ["travel", "traveled"],
        "explanation": "После been — форма -ing: traveling." }
    ]
  },

  {
    "id": "C1-0223",
    "level": "C",
    "text": "The field is all muddy. — Roberto and Selma {gap1} {gap2} {gap3} all afternoon.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "playing", "wrong": ["play", "played"],
        "explanation": "После been — форма -ing: playing." }
    ]
  },

  {
    "id": "C1-0224",
    "level": "C",
    "text": "The desk is covered in notes. — Irma and Ron {gap1} {gap2} {gap3} all evening.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "studying", "wrong": ["study", "studied"],
        "explanation": "После been — форма -ing: studying." }
    ]
  },

  {
    "id": "C1-0225",
    "level": "C",
    "text": "The field is all muddy. — I {gap1} {gap2} {gap3} all afternoon.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "playing", "wrong": ["play", "played"],
        "explanation": "После been — форма -ing: playing." }
    ]
  },

  {
    "id": "C1-0226",
    "level": "C",
    "text": "The office lights are still on. — Irma and Ron {gap1} {gap2} {gap3} for hours.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "working", "wrong": ["work", "worked"],
        "explanation": "После been — форма -ing: working." }
    ]
  },

  {
    "id": "C1-0227",
    "level": "C",
    "text": "The walls look brand new. — Sharon {gap1} {gap2} {gap3} all day.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "has", "wrong": ["have", "had"],
        "explanation": "Для he/she/it вспомогательный глагол — has." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "painting", "wrong": ["paint", "painted"],
        "explanation": "После been — форма -ing: painting." }
    ]
  },

  {
    "id": "C1-0228",
    "level": "C",
    "text": "There are papers all over the desk. — You {gap1} {gap2} {gap3} for a long time.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "writing", "wrong": ["write", "wrote"],
        "explanation": "После been — форма -ing: writing." }
    ]
  },

  {
    "id": "C1-0229",
    "level": "C",
    "text": "The desk is covered in notes. — We {gap1} {gap2} {gap3} all evening.",
    "hint": "Процесс ДЛИТСЯ вплоть до настоящего → Present Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Present Perfect Continuous",
      "wrong": ["Present Perfect", "Present Continuous"],
      "explanation": "have/has + been + V-ing → Present Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "Для I/you/we/they вспомогательный глагол — have." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "have/has + been (3-я форма be)." },
      { "id": "gap3", "correct": "studying", "wrong": ["study", "studied"],
        "explanation": "После been — форма -ing: studying." }
    ]
  },

  {
    "id": "C1-0230",
    "level": "C",
    "text": "Roberto and Selma was completely worn out. — Roberto and Selma {gap1} {gap2} {gap3} for years.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "learning", "wrong": ["learn", "learned"],
        "explanation": "После been — форма -ing: learning." }
    ]
  },

  {
    "id": "C1-0231",
    "level": "C",
    "text": "Tom was completely worn out. — Tom {gap1} {gap2} {gap3} since lunch.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "reading", "wrong": ["read", "reads"],
        "explanation": "После been — форма -ing: reading." }
    ]
  },

  {
    "id": "C1-0232",
    "level": "C",
    "text": "Sharon was completely worn out. — Sharon {gap1} {gap2} {gap3} for miles.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "walking", "wrong": ["walk", "walked"],
        "explanation": "После been — форма -ing: walking." }
    ]
  },

  {
    "id": "C1-0233",
    "level": "C",
    "text": "We was completely worn out. — We {gap1} {gap2} {gap3} for half an hour.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "running", "wrong": ["run", "ran"],
        "explanation": "После been — форма -ing: running." }
    ]
  },

  {
    "id": "C1-0234",
    "level": "C",
    "text": "Tom was completely worn out. — Tom {gap1} {gap2} {gap3} all afternoon.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "playing", "wrong": ["play", "played"],
        "explanation": "После been — форма -ing: playing." }
    ]
  },

  {
    "id": "C1-0235",
    "level": "C",
    "text": "The children was completely worn out. — The children {gap1} {gap2} {gap3} since dawn.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "driving", "wrong": ["drive", "drove"],
        "explanation": "После been — форма -ing: driving." }
    ]
  },

  {
    "id": "C1-0236",
    "level": "C",
    "text": "She was completely worn out. — She {gap1} {gap2} {gap3} for weeks.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "traveling", "wrong": ["travel", "traveled"],
        "explanation": "После been — форма -ing: traveling." }
    ]
  },

  {
    "id": "C1-0237",
    "level": "C",
    "text": "Irma and Ron was completely worn out. — Irma and Ron {gap1} {gap2} {gap3} all evening.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "studying", "wrong": ["study", "studied"],
        "explanation": "После been — форма -ing: studying." }
    ]
  },

  {
    "id": "C1-0238",
    "level": "C",
    "text": "Tom was completely worn out. — Tom {gap1} {gap2} {gap3} for half an hour.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["He/She/It", "Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "running", "wrong": ["run", "ran"],
        "explanation": "После been — форма -ing: running." }
    ]
  },

  {
    "id": "C1-0239",
    "level": "C",
    "text": "I was completely worn out. — I {gap1} {gap2} {gap3} for half an hour.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "running", "wrong": ["run", "ran"],
        "explanation": "После been — форма -ing: running." }
    ]
  },

  {
    "id": "C1-0240",
    "level": "C",
    "text": "They was completely worn out. — They {gap1} {gap2} {gap3} since lunch.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "reading", "wrong": ["read", "reads"],
        "explanation": "После been — форма -ing: reading." }
    ]
  },

  {
    "id": "C1-0241",
    "level": "C",
    "text": "She was completely worn out. — She {gap1} {gap2} {gap3} all afternoon.",
    "hint": "Процесс ДЛИЛСЯ до определённого момента в прошлом → Past Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Past Perfect Continuous",
      "wrong": ["Past Perfect", "Past Continuous"],
      "explanation": "had + been + V-ing → Past Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "had", "wrong": ["has", "was"],
        "explanation": "Past Perfect Continuous: had для всех лиц." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "had + been (3-я форма be)." },
      { "id": "gap3", "correct": "playing", "wrong": ["play", "played"],
        "explanation": "После been — форма -ing: playing." }
    ]
  },

  {
    "id": "C1-0242",
    "level": "C",
    "text": "By next month the children will {gap1} {gap2} {gap3} for many hours. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "cooking", "wrong": ["cook", "cooked"],
        "explanation": "После been — форма -ing: cooking." }
    ]
  },

  {
    "id": "C1-0243",
    "level": "C",
    "text": "By next month Irma and Ron will {gap1} {gap2} {gap3} for a long time. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "learning", "wrong": ["learn", "learned"],
        "explanation": "После been — форма -ing: learning." }
    ]
  },

  {
    "id": "C1-0244",
    "level": "C",
    "text": "By next month we will {gap1} {gap2} {gap3} for several hours. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "waiting", "wrong": ["wait", "waited"],
        "explanation": "После been — форма -ing: waiting." }
    ]
  },

  {
    "id": "C1-0245",
    "level": "C",
    "text": "By next month I will {gap1} {gap2} {gap3} for hours and hours. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "driving", "wrong": ["drive", "drove"],
        "explanation": "После been — форма -ing: driving." }
    ]
  },

  {
    "id": "C1-0246",
    "level": "C",
    "text": "By next month Sharon will {gap1} {gap2} {gap3} for a long while. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": ["He/She/It"],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "playing", "wrong": ["play", "played"],
        "explanation": "После been — форма -ing: playing." }
    ]
  },

  {
    "id": "C1-0247",
    "level": "C",
    "text": "By next month we will {gap1} {gap2} {gap3} for a full hour. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "running", "wrong": ["run", "ran"],
        "explanation": "После been — форма -ing: running." }
    ]
  },

  {
    "id": "C1-0248",
    "level": "C",
    "text": "By next month the children will {gap1} {gap2} {gap3} for hours and hours. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "driving", "wrong": ["drive", "drove"],
        "explanation": "После been — форма -ing: driving." }
    ]
  },

  {
    "id": "C1-0249",
    "level": "C",
    "text": "By next month we will {gap1} {gap2} {gap3} for hours. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": [],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "dancing", "wrong": ["dance", "danced"],
        "explanation": "После been — форма -ing: dancing." }
    ]
  },

  {
    "id": "C1-0250",
    "level": "C",
    "text": "By next month we will {gap1} {gap2} {gap3} for ages. — That's a long time!",
    "hint": "Процесс будет ДЛИТЬСЯ вплоть до момента в будущем → Future Perfect Continuous.",
    "tags": ["Неправильный глагол"],
    "tense": {
      "correct": "Future Perfect Continuous",
      "wrong": ["Future Perfect", "Future Continuous"],
      "explanation": "will have + been + V-ing → Future Perfect Continuous."
    },
    "gaps": [
      { "id": "gap1", "correct": "have", "wrong": ["has", "had"],
        "explanation": "После will — have (will have been ...)." },
      { "id": "gap2", "correct": "been", "wrong": ["be", "being"],
        "explanation": "will have + been." },
      { "id": "gap3", "correct": "reading", "wrong": ["read", "reads"],
        "explanation": "После been — форма -ing: reading." }
    ]
  }

];
