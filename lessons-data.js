const lessons = [

    {
        id: 1,

        title: "ภาษาญี่ปุ่นคืออะไร?",

        subtitle:
            "ทำความรู้จักระบบตัวอักษร เสียง และวิธีคิดก่อนเริ่มจำตัวอักษร",

        category:
            "START HERE",

        duration:
            "10 นาที",

        level:
            "BEGINNER",

        objective: [
            "รู้ว่าภาษาญี่ปุ่นมีตัวอักษรหลักอะไรบ้าง",
            "เข้าใจว่าฮิรางานะ คาตากานะ และคันจิทำหน้าที่ต่างกันอย่างไร",
            "เข้าใจแนวทางการเรียนของคอร์สนี้"
        ],

        sections: [

            {
                type: "text",

                title: "เริ่มจากศูนย์ได้จริง",

                html: `
                    <p class="section-text">
                        ถ้าตอนนี้เห็นคำว่า
                        <strong>こんにちは</strong>
                        แล้วอ่านไม่ออกเลย
                        ไม่ต้องกังวล เพราะเราจะเริ่มตั้งแต่จุดนั้น
                        และค่อย ๆ สร้างความเข้าใจขึ้นมาทีละขั้น
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        สิ่งสำคัญที่สุดในช่วงแรกไม่ใช่การจำคำศัพท์
                        จำนวนมาก แต่คือการเข้าใจว่า
                        <strong>ตัวอักษรญี่ปุ่นทำงานอย่างไร</strong>
                        และเสียงแต่ละเสียงสัมพันธ์กับตัวอักษรอย่างไร
                    </p>
                `
            },

            {
                type: "script"
            },

            {
                type: "note",

                title:
                    "แนวคิดสำคัญ",

                text:
                    "อย่าเพิ่งพยายามจำทุกอย่างพร้อมกัน เราจะเรียนเป็นชั้น ๆ : ตัวอักษร → เสียง → คำ → ประโยค → ไวยากรณ์ → บทสนทนา"
            },

            {
                type: "concept",

                title:
                    "ระบบตัวอักษรที่ต้องรู้",

                cards: [

                    {
                        title:
                            "ひらがな — Hiragana",

                        text:
                            "ฮิรางานะเป็นตัวอักษรพื้นฐานที่ผู้เริ่มต้นควรเรียนก่อน ใช้เขียนคำญี่ปุ่น คำช่วย และส่วนของคำกริยา/คำคุณศัพท์จำนวนมาก"
                    },

                    {
                        title:
                            "カタカナ — Katakana",

                        text:
                            "คาตากานะมีเสียงพื้นฐานชุดเดียวกับฮิรางานะ แต่รูปร่างต่างกัน มักใช้กับคำยืมจากภาษาต่างประเทศ ชื่อบางประเภท และคำที่ต้องการเน้น"
                    },

                    {
                        title:
                            "漢字 — Kanji",

                        text:
                            "คันจิเป็นตัวอักษรที่มีความหมายในตัวเอง เช่น 人 หมายถึง คน และ 学 เกี่ยวข้องกับการเรียน เมื่อเรียนต่อไปเราจะค่อย ๆ เพิ่มคันจิทีละกลุ่ม"
                    }
                ]
            },

            {
                type: "text",

                title:
                    "แล้วภาษาญี่ปุ่นมีเสียงกี่เสียง?",

                html: `
                    <p class="section-text">
                        ช่วงเริ่มต้นให้คิดง่าย ๆ ว่า
                        ภาษาญี่ปุ่นมีชุดเสียงพื้นฐานที่จัดเป็นตาราง
                        เช่น
                        <strong>あ・い・う・え・お</strong>
                        ซึ่งอ่านว่า
                        a, i, u, e, o
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        จากนั้นเสียงเหล่านี้จะถูกนำไปสร้างเป็นแถวต่าง ๆ
                        เช่น か・き・く・け・こ
                        และเมื่อรวมกันเราจะสามารถอ่านคำต่าง ๆ ได้
                    </p>
                `
            },

            {
                type: "example",

                title:
                    "ตัวอย่างแรก",

                examples: [

                    {
                        jp:
                            "あ",

                        romaji:
                            "a",

                        thai:
                            "อะ / อาแบบสั้น"
                    },

                    {
                        jp:
                            "か",

                        romaji:
                            "ka",

                        thai:
                            "คะ / กะ เสียง k"
                    },

                    {
                        jp:
                            "ねこ",

                        romaji:
                            "neko",

                        thai:
                            "เนะโกะ — แมว"
                    }
                ]
            },

            {
                type: "tip",

                title:
                    "วิธีเรียนให้จำได้จริง",

                text:
                    "เวลาเจอตัวอักษรใหม่ อย่าจำแค่รูปร่าง ให้จำ 3 อย่างพร้อมกัน: รูปร่าง → เสียง → ตัวอย่างคำ เพราะเมื่อทั้งสามอย่างเชื่อมกัน การอ่านจะเร็วขึ้นมาก"
            },

            {
                type: "check",

                title:
                    "หลังจบบทนี้ควรตอบได้",

                items: [

                    "ฮิรางานะคืออะไร?",

                    "คาตากานะต่างจากฮิรางานะอย่างไร?",

                    "คันจิคืออะไร?",

                    "ทำไมเราจึงเริ่มจากฮิรางานะ?",

                    "あ มีเสียงอะไร?"
                ]
            }

        ]
    },


    /* =====================================================
       LESSON 2
    ====================================================== */

    {
        id: 2,

        title:
            "เสียงพื้นฐาน あいうえお",

        subtitle:
            "เริ่มอ่านฮิรางานะชุดแรก และเข้าใจเสียงสระภาษาญี่ปุ่น",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana:
            [

                {
                    char: "あ",
                    romaji: "a",
                    thai: "อะ"
                },

                {
                    char: "い",
                    romaji: "i",
                    thai: "อิ"
                },

                {
                    char: "う",
                    romaji: "u",
                    thai: "อุ"
                },

                {
                    char: "え",
                    romaji: "e",
                    thai: "เอะ"
                },

                {
                    char: "お",
                    romaji: "o",
                    thai: "โอะ"
                }

            ],

        sections: [

            {
                type: "text",

                title:
                    "5 เสียงแรกที่ต้องแม่น",

                html: `
                    <p class="section-text">
                        ฮิรางานะแถวแรกเรียกว่า
                        <strong>あ行 (あぎょう)</strong>
                        หรือ A-row
                        ประกอบด้วย 5 ตัว
                        <strong>あ い う え お</strong>
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        ทั้งห้าตัวนี้สำคัญมาก เพราะเป็นพื้นฐานของ
                        ตารางฮิรางานะเกือบทั้งหมด
                        ถ้าจำเสียงชุดนี้ได้ดี
                        การเรียนแถวต่อไปจะง่ายขึ้น
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "จำเสียงทีละตัว",

                kana: [

                    {
                        char: "あ",
                        romaji: "a",
                        thai: "อะ"
                    },

                    {
                        char: "い",
                        romaji: "i",
                        thai: "อิ"
                    },

                    {
                        char: "う",
                        romaji: "u",
                        thai: "อุ"
                    },

                    {
                        char: "え",
                        romaji: "e",
                        thai: "เอะ"
                    },

                    {
                        char: "お",
                        romaji: "o",
                        thai: "โอะ"
                    }

                ]
            },

            {
                type: "note",

                title:
                    "อย่าอ่านแบบภาษาอังกฤษตรง ๆ",

                text:
                    "ตัว a i u e o ในภาษาญี่ปุ่นเป็นระบบเสียงของญี่ปุ่นเอง คำอ่านภาษาไทยในเว็บนี้มีไว้ช่วยให้เริ่มออกเสียง แต่เมื่อเรียนต่อไปควรฟังเสียงจริงและเลียนแบบจังหวะเสียงด้วย"
            },

            {
                type: "example",

                title:
                    "ลองอ่านคำสั้น ๆ",

                examples: [

                    {
                        jp:
                            "あい",

                        romaji:
                            "ai",

                        thai:
                            "ไอ / การพบกันของเสียง a + i"
                    },

                    {
                        jp:
                            "いい",

                        romaji:
                            "ii",

                        thai:
                            "อีอิ"
                    },

                    {
                        jp:
                            "あお",

                        romaji:
                            "ao",

                        thai:
                            "อะโอะ"
                    }
                ]
            },

            {
                type: "practice",

                question:
                    "ตัวอักษรใดอ่านว่า “อิ”?",

                answer:
                    "い",

                accepted:
                    [
                        "い",
                        "i"
                    ]
            },

            {
                type: "flash",

                cards: [

                    {
                        front:
                            "あ",

                        back:
                            "a — อะ"
                    },

                    {
                        front:
                            "い",

                        back:
                            "i — อิ"
                    },

                    {
                        front:
                            "う",

                        back:
                            "u — อุ"
                    },

                    {
                        front:
                            "え",

                        back:
                            "e — เอะ"
                    },

                    {
                        front:
                            "お",

                        back:
                            "o — โอะ"
                    }

                ]
            }

        ]
    },


    /* =====================================================
       LESSON 3
    ====================================================== */

    {
        id: 3,

        title:
            "แถว かきくけこ",

        subtitle:
            "เพิ่มเสียง K และเริ่มผสมเสียงเป็นคำ",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "か",
                romaji: "ka",
                thai: "คะ"
            },

            {
                char: "き",
                romaji: "ki",
                thai: "คิ"
            },

            {
                char: "く",
                romaji: "ku",
                thai: "คุ"
            },

            {
                char: "け",
                romaji: "ke",
                thai: "เคะ"
            },

            {
                char: "こ",
                romaji: "ko",
                thai: "โคะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "หลักการของแถว か",

                html: `
                    <p class="section-text">
                        เมื่อเราเข้าใจ
                        <strong>あいうえお</strong>
                        แล้ว เราสามารถนำเสียง K
                        มาวางหน้าเสียงสระได้
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        K + A = か
                        <br>
                        K + I = き
                        <br>
                        K + U = く
                        <br>
                        K + E = け
                        <br>
                        K + O = こ
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "ตารางเสียง",

                kana: [

                    {
                        char: "か",
                        romaji: "ka",
                        thai: "คะ"
                    },

                    {
                        char: "き",
                        romaji: "ki",
                        thai: "คิ"
                    },

                    {
                        char: "く",
                        romaji: "ku",
                        thai: "คุ"
                    },

                    {
                        char: "け",
                        romaji: "ke",
                        thai: "เคะ"
                    },

                    {
                        char: "こ",
                        romaji: "ko",
                        thai: "โคะ"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "คำที่เริ่มอ่านได้แล้ว",

                examples: [

                    {
                        jp:
                            "かき",

                        romaji:
                            "kaki",

                        thai:
                            "คะคิ"
                    },

                    {
                        jp:
                            "ここ",

                        romaji:
                            "koko",

                        thai:
                            "โคะโคะ"
                    },

                    {
                        jp:
                            "きく",

                        romaji:
                            "kiku",

                        thai:
                            "คิคุ"
                    }

                ]
            },

            {
                type: "note",

                title:
                    "จำเป็นชุด ไม่ใช่จำแยก",

                text:
                    "ลองพูด あいうえお แล้วต่อด้วย かきくけこ เป็นจังหวะ วิธีนี้จะช่วยให้สมองเห็นรูปแบบของตาราง แทนที่จะรู้สึกว่าต้องจำตัวอักษร 10 ตัวแบบไม่มีความสัมพันธ์กัน"
            },

            {
                type: "practice",

                question:
                    "คำว่า かき มี romaji ว่าอะไร?",

                answer:
                    "kaki",

                accepted:
                    [
                        "kaki"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 4
    ====================================================== */

    {
        id: 4,

        title:
            "แถว さしすせそ",

        subtitle:
            "เรียนเสียง S และข้อยกเว้นสำคัญของ し",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "さ",
                romaji: "sa",
                thai: "สะ"
            },

            {
                char: "し",
                romaji: "shi",
                thai: "ชิ"
            },

            {
                char: "す",
                romaji: "su",
                thai: "สุ"
            },

            {
                char: "せ",
                romaji: "se",
                thai: "เสะ"
            },

            {
                char: "そ",
                romaji: "so",
                thai: "โสะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "แถว S",

                html: `
                    <p class="section-text">
                        แถวนี้ประกอบด้วย
                        <strong>さ し す せ そ</strong>
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        โดยมีข้อที่ต้องจำเป็นพิเศษคือ
                        <strong>し</strong>
                        ซึ่งเขียนเป็น
                        <strong>shi</strong>
                        ไม่ใช่ si
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "ตัวอักษรในแถวนี้",

                kana: [

                    {
                        char: "さ",
                        romaji: "sa",
                        thai: "สะ"
                    },

                    {
                        char: "し",
                        romaji: "shi",
                        thai: "ชิ"
                    },

                    {
                        char: "す",
                        romaji: "su",
                        thai: "สุ"
                    },

                    {
                        char: "せ",
                        romaji: "se",
                        thai: "เสะ"
                    },

                    {
                        char: "そ",
                        romaji: "so",
                        thai: "โสะ"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "ตัวอย่าง",

                examples: [

                    {
                        jp:
                            "すし",

                        romaji:
                            "sushi",

                        thai:
                            "ซูชิ"
                    },

                    {
                        jp:
                            "そこ",

                        romaji:
                            "soko",

                        thai:
                            "โสะโคะ"
                    },

                    {
                        jp:
                            "さけ",

                        romaji:
                            "sake",

                        thai:
                            "สาเกะ"
                    }

                ]
            },

            {
                type: "tip",

                title:
                    "จุดที่คนเริ่มต้นมักพลาด",

                text:
                    "し = shi เป็นตัวที่ควรจำให้เป็นภาพพร้อมเสียงตั้งแต่แรก ถ้าเผลอจำว่า si จะทำให้เวลาอ่าน romaji ในภายหลังสับสน"
            },

            {
                type: "practice",

                question:
                    "ข้อใดคือ し?",

                answer:
                    "し",

                accepted:
                    [
                    "し",
                    "shi"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 5
    ====================================================== */

    {
        id: 5,

        title:
            "แถว たちつてと",

        subtitle:
            "เรียนเสียง T พร้อมข้อยกเว้น ち และ つ",

        category:
            "HIRAGANA",

        duration:
            "17 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "た",
                romaji: "ta",
                thai: "ทะ"
            },

            {
                char: "ち",
                romaji: "chi",
                thai: "จิ / ชิ"
            },

            {
                char: "つ",
                romaji: "tsu",
                thai: "สึ"
            },

            {
                char: "て",
                romaji: "te",
                thai: "เทะ"
            },

            {
                char: "と",
                romaji: "to",
                thai: "โทะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "แถว T มีข้อพิเศษสองตัว",

                html: `
                    <p class="section-text">
                        โดยทั่วไปเราจะมองแถวนี้เป็น
                        T + สระ
                        แต่มีสองตัวที่เสียงไม่ตรงรูปแบบ
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        <strong>ち = chi</strong>
                        และ
                        <strong>つ = tsu</strong>
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        ส่วนตัวอื่น ๆ คือ
                        た = ta,
                        て = te,
                        と = to
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "จำทีละตัว",

                kana: [

                    {
                        char: "た",
                        romaji: "ta",
                        thai: "ทะ"
                    },

                    {
                        char: "ち",
                        romaji: "chi",
                        thai: "จิ"
                    },

                    {
                        char: "つ",
                        romaji: "tsu",
                        thai: "สึ"
                    },

                    {
                        char: "て",
                        romaji: "te",
                        thai: "เทะ"
                    },

                    {
                        char: "と",
                        romaji: "to",
                        thai: "โทะ"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "คำที่เริ่มอ่านได้",

                examples: [

                    {
                        jp:
                            "ちず",

                        romaji:
                            "chizu",

                        thai:
                            "ชิซุ"
                    },

                    {
                        jp:
                            "つき",

                        romaji:
                            "tsuki",

                        thai:
                            "สึกิ"
                    },

                    {
                        jp:
                            "たこ",

                        romaji:
                            "tako",

                        thai:
                            "ทะโคะ"
                    }

                ]
            },

            {
                type: "note",

                title:
                    "จำ ち กับ つ แยกกัน",

                text:
                    "สองตัวนี้หน้าตาคล้ายกันสำหรับคนเริ่มต้นได้ง่ายมาก ให้ฝึกอ่านออกเสียงพร้อมเขียนซ้ำ ไม่ควรพึ่งการมองรูปเพียงอย่างเดียว"
            },

            {
                type: "practice",

                question:
                    "คำว่า つき อ่านว่าอะไร?",

                answer:
                    "tsuki",

                accepted:
                    [
                        "tsuki"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 6
    ====================================================== */

    {
        id: 6,

        title:
            "แถว なにぬねの",

        subtitle:
            "เรียนเสียง N และเริ่มเห็นคำศัพท์จริงมากขึ้น",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "な",
                romaji: "na",
                thai: "นะ"
            },

            {
                char: "に",
                romaji: "ni",
                thai: "นิ"
            },

            {
                char: "ぬ",
                romaji: "nu",
                thai: "นุ"
            },

            {
                char: "ね",
                romaji: "ne",
                thai: "เนะ"
            },

            {
                char: "の",
                romaji: "no",
                thai: "โนะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "แถว N",

                html: `
                    <p class="section-text">
                        แถวนี้ค่อนข้างตรงไปตรงมา
                        ประกอบด้วย
                        <strong>な に ぬ ね の</strong>
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        เสียงคือ
                        na, ni, nu, ne, no
                        ตามลำดับ
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "ตัวอักษร",

                kana: [

                    {
                        char: "な",
                        romaji: "na",
                        thai: "นะ"
                    },

                    {
                        char: "に",
                        romaji: "ni",
                        thai: "นิ"
                    },

                    {
                        char: "ぬ",
                        romaji: "nu",
                        thai: "นุ"
                    },

                    {
                        char: "ね",
                        romaji: "ne",
                        thai: "เนะ"
                    },

                    {
                        char: "の",
                        romaji: "no",
                        thai: "โนะ"
                    }

                ]
            },

            {
                type: "vocab",

                title:
                    "คำศัพท์ตัวอย่าง",

                words: [

                    {
                        jp:
                            "なに",

                        reading:
                            "nani",

                        meaning:
                            "อะไร"
                    },

                    {
                        jp:
                            "ねこ",

                        reading:
                            "neko",

                        meaning:
                            "แมว"
                    },

                    {
                        jp:
                            "いぬ",

                        reading:
                            "inu",

                        meaning:
                            "สุนัข"
                    },

                    {
                        jp:
                            "なまえ",

                        reading:
                            "namae",

                        meaning:
                            "ชื่อ"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "ลองอ่านโดยไม่ดู romaji",

                examples: [

                    {
                        jp:
                            "ねこ",

                        romaji:
                            "neko",

                        thai:
                            "แมว"
                    },

                    {
                        jp:
                            "いぬ",

                        romaji:
                            "inu",

                        thai:
                            "สุนัข"
                    },

                    {
                        jp:
                            "なに",

                        romaji:
                            "nani",

                        thai:
                            "อะไร"
                    }

                ]
            },

            {
                type: "practice",

                question:
                    "คำว่า ねこ หมายถึงอะไร?",

                answer:
                    "แมว",

                accepted:
                    [
                    "แมว",
                    "neko"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 7
    ====================================================== */

    {
        id: 7,

        title:
            "แถว はひふへほ",

        subtitle:
            "เรียนเสียง H และคำศัพท์พื้นฐานที่ใช้บ่อย",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "は",
                romaji: "ha",
                thai: "ฮะ"
            },

            {
                char: "ひ",
                romaji: "hi",
                thai: "ฮิ"
            },

            {
                char: "ふ",
                romaji: "fu",
                thai: "ฟุ"
            },

            {
                char: "へ",
                romaji: "he",
                thai: "เฮะ"
            },

            {
                char: "ほ",
                romaji: "ho",
                thai: "โฮะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "แถว H",

                html: `
                    <p class="section-text">
                        แถวนี้คือ
                        <strong>は ひ ふ へ ほ</strong>
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        จุดที่ควรระวังคือ
                        <strong>ふ</strong>
                        ซึ่งมักเขียนเป็น
                        <strong>fu</strong>
                        ใน romaji
                        และเสียงอยู่ระหว่าง ฟุ กับ ฮุ
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "ตัวอักษร",

                kana: [

                    {
                        char: "は",
                        romaji: "ha",
                        thai: "ฮะ"
                    },

                    {
                        char: "ひ",
                        romaji: "hi",
                        thai: "ฮิ"
                    },

                    {
                        char: "ふ",
                        romaji: "fu",
                        thai: "ฟุ"
                    },

                    {
                        char: "へ",
                        romaji: "he",
                        thai: "เฮะ"
                    },

                    {
                        char: "ほ",
                        romaji: "ho",
                        thai: "โฮะ"
                    }

                ]
            },

            {
                type: "vocab",

                title:
                    "คำศัพท์",

                words: [

                    {
                        jp:
                            "はな",

                        reading:
                            "hana",

                        meaning:
                            "ดอกไม้ / จมูก"
                    },

                    {
                        jp:
                            "ひと",

                        reading:
                            "hito",

                        meaning:
                            "คน"
                    },

                    {
                        jp:
                            "ふね",

                        reading:
                            "fune",

                        meaning:
                            "เรือ"
                    },

                    {
                        jp:
                            "ほし",

                        reading:
                            "hoshi",

                        meaning:
                            "ดาว"
                    }

                ]
            },

            {
                type: "note",

                title:
                    "คำว่า は มีอีกบทบาทหนึ่ง",

                text:
                    "เมื่อเรียนไวยากรณ์ต่อไป เราจะพบ は ที่ทำหน้าที่เป็นคำช่วย และในกรณีนั้นมักอ่านว่า wa ไม่ใช่ ha เรื่องนี้จะเรียนอย่างละเอียดภายหลัง ไม่ต้องรีบจำตอนนี้"
            },

            {
                type: "practice",

                question:
                    "ข้อใดอ่านว่า hito?",

                answer:
                    "ひと",

                accepted:
                    [
                    "ひと",
                    "hito"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 8
    ====================================================== */

    {
        id: 8,

        title:
            "แถว まみむめも",

        subtitle:
            "เรียนเสียง M และเพิ่มคลังคำศัพท์",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "ま",
                romaji: "ma",
                thai: "มะ"
            },

            {
                char: "み",
                romaji: "mi",
                thai: "มิ"
            },

            {
                char: "む",
                romaji: "mu",
                thai: "มุ"
            },

            {
                char: "め",
                romaji: "me",
                thai: "เมะ"
            },

            {
                char: "も",
                romaji: "mo",
                thai: "โมะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "แถว M",

                html: `
                    <p class="section-text">
                        แถวนี้คือ
                        <strong>ま み む め も</strong>
                        และออกเสียง
                        ma, mi, mu, me, mo
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        แถว M ไม่มีข้อยกเว้นใหญ่ ๆ
                        จึงเป็นอีกแถวหนึ่งที่เหมาะกับการฝึกอ่านคำผสม
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "ตัวอักษร",

                kana: [

                    {
                        char: "ま",
                        romaji: "ma",
                        thai: "มะ"
                    },

                    {
                        char: "み",
                        romaji: "mi",
                        thai: "มิ"
                    },

                    {
                        char: "む",
                        romaji: "mu",
                        thai: "มุ"
                    },

                    {
                        char: "め",
                        romaji: "me",
                        thai: "เมะ"
                    },

                    {
                        char: "も",
                        romaji: "mo",
                        thai: "โมะ"
                    }

                ]
            },

            {
                type: "vocab",

                title:
                    "คำศัพท์ตัวอย่าง",

                words: [

                    {
                        jp:
                            "みみ",

                        reading:
                            "mimi",

                        meaning:
                            "หู"
                    },

                    {
                        jp:
                            "みず",

                        reading:
                            "mizu",

                        meaning:
                            "น้ำ"
                    },

                    {
                        jp:
                            "むし",

                        reading:
                            "mushi",

                        meaning:
                            "แมลง"
                    },

                    {
                        jp:
                            "もも",

                        reading:
                            "momo",

                        meaning:
                            "ลูกพีช"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "ฝึกอ่าน",

                examples: [

                    {
                        jp:
                            "みみ",

                        romaji:
                            "mimi",

                        thai:
                            "หู"
                    },

                    {
                        jp:
                            "みず",

                        romaji:
                            "mizu",

                        thai:
                            "น้ำ"
                    },

                    {
                        jp:
                            "もも",

                        romaji:
                            "momo",

                        thai:
                            "ลูกพีช"
                    }

                ]
            },

            {
                type: "practice",

                question:
                    "みず หมายถึงอะไร?",

                answer:
                    "น้ำ",

                accepted:
                    [
                    "น้ำ",
                    "mizu"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 9
    ====================================================== */

    {
        id: 9,

        title:
            "แถว やゆよ",

        subtitle:
            "เรียนแถว Y ที่มีเพียงสามตัว",

        category:
            "HIRAGANA",

        duration:
            "12 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "や",
                romaji: "ya",
                thai: "ยะ"
            },

            {
                char: "ゆ",
                romaji: "yu",
                thai: "ยุ"
            },

            {
                char: "よ",
                romaji: "yo",
                thai: "โยะ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "ทำไมมีแค่สามตัว?",

                html: `
                    <p class="section-text">
                        แถว Y ในภาษาญี่ปุ่นมาตรฐานมีเพียง
                        <strong>や ゆ よ</strong>
                        ไม่มี yi และ ye
                        ในตารางพื้นฐานที่เราใช้เรียน
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        ดังนั้นไม่ต้องพยายามเติม
                        や い ゆ え よ
                        แบบทุกช่อง เพราะจะทำให้จำผิด
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "สามตัวที่ต้องจำ",

                kana: [

                    {
                        char: "や",
                        romaji: "ya",
                        thai: "ยะ"
                    },

                    {
                        char: "ゆ",
                        romaji: "yu",
                        thai: "ยุ"
                    },

                    {
                        char: "よ",
                        romaji: "yo",
                        thai: "โยะ"
                    }

                ]
            },

            {
                type: "vocab",

                title:
                    "คำศัพท์",

                words: [

                    {
                        jp:
                            "やま",

                        reading:
                            "yama",

                        meaning:
                            "ภูเขา"
                    },

                    {
                        jp:
                            "ゆめ",

                        reading:
                            "yume",

                        meaning:
                            "ความฝัน"
                    },

                    {
                        jp:
                            "よる",

                        reading:
                            "yoru",

                        meaning:
                            "กลางคืน"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "อ่านคำผสม",

                examples: [

                    {
                        jp:
                            "やま",

                        romaji:
                            "yama",

                        thai:
                            "ภูเขา"
                    },

                    {
                        jp:
                            "ゆめ",

                        romaji:
                            "yume",

                        thai:
                            "ความฝัน"
                    },

                    {
                        jp:
                            "よる",

                        romaji:
                            "yoru",

                        thai:
                            "กลางคืน"
                    }

                ]
            },

            {
                type: "practice",

                question:
                    "ตัวใดอ่านว่า yo?",

                answer:
                    "よ",

                accepted:
                    [
                    "よ",
                    "yo"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 10
    ====================================================== */

    {
        id: 10,

        title:
            "แถว らりるれろ",

        subtitle:
            "เสียง R ของญี่ปุ่นที่ไม่เหมือน R ภาษาอังกฤษเสียทีเดียว",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "ら",
                romaji: "ra",
                thai: "ระ"
            },

            {
                char: "り",
                romaji: "ri",
                thai: "ริ"
            },

            {
                char: "る",
                romaji: "ru",
                thai: "รุ"
            },

            {
                char: "れ",
                romaji: "re",
                thai: "เระ"
            },

            {
                char: "ろ",
                romaji: "ro",
                thai: "โระ"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "เสียง R ของภาษาญี่ปุ่น",

                html: `
                    <p class="section-text">
                        เสียงในแถว
                        <strong>らりるれろ</strong>
                        มักถูกเขียนด้วย r
                        แต่เสียงจริงของญี่ปุ่นจะอยู่บริเวณกลาง ๆ
                        ระหว่างเสียง r, l และ d
                        สำหรับผู้เริ่มต้นไม่จำเป็นต้องพยายามทำให้เหมือน
                        เจ้าของภาษาในทันที
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        สิ่งสำคัญก่อนคือ
                        <strong>จำว่าตัวไหนอ่าน ra, ri, ru, re, ro</strong>
                        แล้วค่อยฝึกเสียงให้ละเอียดขึ้น
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "ตัวอักษร",

                kana: [

                    {
                        char: "ら",
                        romaji: "ra",
                        thai: "ระ"
                    },

                    {
                        char: "り",
                        romaji: "ri",
                        thai: "ริ"
                    },

                    {
                        char: "る",
                        romaji: "ru",
                        thai: "รุ"
                    },

                    {
                        char: "れ",
                        romaji: "re",
                        thai: "เระ"
                    },

                    {
                        char: "ろ",
                        romaji: "ro",
                        thai: "โระ"
                    }

                ]
            },

            {
                type: "vocab",

                title:
                    "คำศัพท์ตัวอย่าง",

                words: [

                    {
                        jp:
                            "さくら",

                        reading:
                            "sakura",

                        meaning:
                            "ซากุระ"
                    },

                    {
                        jp:
                            "そら",

                        reading:
                            "sora",

                        meaning:
                            "ท้องฟ้า"
                    },

                    {
                        jp:
                            "とり",

                        reading:
                            "tori",

                        meaning:
                            "นก"
                    },

                    {
                        jp:
                            "くるま",

                        reading:
                            "kuruma",

                        meaning:
                            "รถยนต์"
                    }

                ]
            },

            {
                type: "note",

                title:
                    "ไม่ต้องกลัวเสียง R",

                text:
                    "ช่วงนี้เป้าหมายคืออ่านให้ถูกก่อน เสียง R แบบญี่ปุ่นจะฝึกได้มากขึ้นเมื่อเราเริ่มฟังคำจริงและพูดตาม"
            },

            {
                type: "practice",

                question:
                    "さくら อ่านว่าอะไร?",

                answer:
                    "sakura",

                accepted:
                    [
                    "sakura"
                    ]
            }

        ]
    },


    /* =====================================================
       LESSON 11
    ====================================================== */

    {
        id: 11,

        title:
            "แถว わ และ ん",

        subtitle:
            "ปิดตารางฮิรางานะพื้นฐานชุดแรก",

        category:
            "HIRAGANA",

        duration:
            "15 นาที",

        level:
            "BEGINNER",

        kana: [

            {
                char: "わ",
                romaji: "wa",
                thai: "วะ"
            },

            {
                char: "を",
                romaji: "wo",
                thai: "โอะ / o"
            },

            {
                char: "ん",
                romaji: "n",
                thai: "น"
            }

        ],

        sections: [

            {
                type: "text",

                title:
                    "สามตัวสุดท้ายที่ต้องรู้",

                html: `
                    <p class="section-text">
                        ช่วงสุดท้ายของตารางพื้นฐานคือ
                        <strong>わ・を・ん</strong>
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        <strong>わ</strong>
                        อ่านว่า wa
                        ส่วน
                        <strong>を</strong>
                        ในภาษาญี่ปุ่นปัจจุบันมักออกเสียงเป็น
                        <strong>o</strong>
                        โดยเฉพาะเมื่อทำหน้าที่เป็นคำช่วย
                    </p>

                    <p class="section-text" style="margin-top:10px;">
                        และ
                        <strong>ん</strong>
                        เป็นเสียง n
                        ที่มีลักษณะเฉพาะ เพราะไม่ได้ทำหน้าที่เป็น
                        พยางค์แบบเดียวกับตัวอื่นทั้งหมด
                    </p>
                `
            },

            {
                type: "kana",

                title:
                    "จำสามตัวนี้",

                kana: [

                    {
                        char: "わ",
                        romaji: "wa",
                        thai: "วะ"
                    },

                    {
                        char: "を",
                        romaji: "wo",
                        thai: "โอะ"
                    },

                    {
                        char: "ん",
                        romaji: "n",
                        thai: "น"
                    }

                ]
            },

            {
                type: "vocab",

                title:
                    "คำศัพท์ตัวอย่าง",

                words: [

                    {
                        jp:
                            "わたし",

                        reading:
                            "watashi",

                        meaning:
                            "ฉัน / ผม"
                    },

                    {
                        jp:
                            "ほん",

                        reading:
                            "hon",

                        meaning:
                            "หนังสือ"
                    },

                    {
                        jp:
                            "にほん",

                        reading:
                            "nihon",

                        meaning:
                            "ญี่ปุ่น"
                    }

                ]
            },

            {
                type: "example",

                title:
                    "คำที่เราสามารถอ่านได้แล้ว",

                examples: [

                    {
                        jp:
                            "わたし",

                        romaji:
                            "watashi",

                        thai:
                            "ฉัน / ผม"
                    },

                    {
                        jp:
                            "にほん",

                        romaji:
                            "nihon",

                        thai:
                            "ญี่ปุ่น"
                    },

                    {
                        jp:
                            "ほん",

                        romaji:
                            "hon",

                        thai:
                            "หนังสือ"
                    }

                ]
            },

            {
                type: "tip",

                title:
                    "ยินดีด้วย — ตอนนี้เริ่มอ่านฮิรางานะได้แล้ว",

                text:
                    "หลังจากบทนี้ เราจะเริ่มฝึกอ่านโดยไม่พึ่ง romaji มากขึ้น เพราะเป้าหมายคือให้สมองเห็น ほん แล้วเชื่อมกับเสียง hon โดยตรง"
            },

            {
                type: "practice",

                question:
                    "にほん อ่านว่าอะไร?",

                answer:
                    "nihon",

                accepted:
                    [
                    "nihon"
                    ]
            }

        ]
    }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLesson = 1;

let quizState = {
    index: 0,
    score: 0,
    answered: false
};

let flashState = {
    cards: [],
    index: 0,
    flipped: false
};


/* =========================================================
   DOM REFERENCES
========================================================= */

const lessonPage =
    document.getElementById("lessonPage");

const lessonList =
    document.getElementById("lessonList");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        currentLesson = restoreCurrentLesson();

        buildLessonList();
        renderLesson(currentLesson);
        updateProgress();
        initializePart2Tools();
        setupMobileLessonMenu();

    }
);


/* =========================================================
   BUILD LESSON LIST
========================================================= */

function buildLessonList() {

    lessonList.innerHTML = "";

    lessons.forEach(
        lesson => {

            const button =
                document.createElement("button");

            button.className =
                "lesson-button";

            button.dataset.lesson =
                lesson.id;

            button.innerHTML = `

                <span class="lesson-number">
                    ${lesson.id}
                </span>

                <span>
                    ${lesson.title}
                </span>

            `;

            button.addEventListener(
                "click",
                () => {

                    currentLesson =
                        lesson.id;

                    renderLesson(
                        currentLesson
                    );

                    updateProgress();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );

            lessonList.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   RENDER LESSON
========================================================= */

function renderLesson(id) {

    const lesson =
        lessons.find(
            item => item.id === id
        );

    if (!lesson) {
        return;
    }

    lessonPage.classList.remove(
        "animate-in"
    );

    void lessonPage.offsetWidth;

    lessonPage.classList.add(
        "animate-in"
    );

    quizState = {
        index: 0,
        score: 0,
        answered: false
    };

    let html = `

        <div class="lesson-header">

            <div>

                <span class="lesson-label">
                    LESSON ${lesson.id}
                </span>

                <h2>
                    ${lesson.title}
                </h2>

                <p class="lesson-subtitle">
                    ${lesson.subtitle}
                </p>

            </div>

            <div class="lesson-meta">

                <span class="meta-pill">
                    ${lesson.category}
                </span>

                <span class="meta-pill">
                    ${lesson.duration}
                </span>

                <span class="meta-pill">
                    ${lesson.level}
                </span>

            </div>

        </div>

    `;


    if (lesson.objective) {

        html += `

            <section class="lesson-section">

                <h3 class="section-title">
                    เป้าหมายของบทนี้
                </h3>

                <div class="check-list">

                    ${lesson.objective
                        .map(
                            item => `
                                <div class="check-item">

                                    <span
                                        class="check-box"
                                    ></span>

                                    <span>
                                        ${item}
                                    </span>

                                </div>
                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        `;

    }


    if (lesson.sections) {

        lesson.sections.forEach(
            (section, index) => {

                html += renderSection(
                    section,
                    `${lesson.id}-${index}`
                );

            }
        );

    }


    html += `

        <div class="lesson-navigation">

            <button
                class="nav-button"
                onclick="previousLesson()"
                ${lesson.id === 1 ? "disabled" : ""}
            >

                <span>
                    ←
                </span>

                <span>
                    บทก่อนหน้า
                </span>

            </button>

            <div class="nav-center">

                บทที่ ${lesson.id}
                /
                ${lessons.length}

            </div>

            <button
                class="nav-button"
                onclick="nextLesson()"
                ${lesson.id === lessons.length ? "disabled" : ""}
            >

                <span>
                    บทถัดไป
                </span>

                <span>
                    →
                </span>

            </button>

        </div>

    `;


    lessonPage.innerHTML =
        html;

    updateLessonButtons();

    attachSectionEvents();

}


/* =========================================================
   RENDER SECTION
========================================================= */

function renderSection(
    section,
    uniqueId
) {

    if (!section) {
        return "";
    }


    /* -----------------------------------------------------
       TEXT
    ------------------------------------------------------ */

    if (section.type === "text") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ${section.title}
                </h3>

                ${section.html}

            </section>

        `;

    }


    /* -----------------------------------------------------
       NOTE
    ------------------------------------------------------ */

    if (section.type === "note") {

        return `

            <section class="lesson-section">

                <div class="note-card">

                    <h4>
                        ${section.title}
                    </h4>

                    <p>
                        ${section.text}
                    </p>

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       TIP
    ------------------------------------------------------ */

    if (section.type === "tip") {

        return `

            <section class="lesson-section">

                <div class="tip-box">

                    <div class="tip-icon">
                        TIP
                    </div>

                    <div>

                        <h4>
                            ${section.title}
                        </h4>

                        <p>
                            ${section.text}
                        </p>

                    </div>

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       CONCEPT
    ------------------------------------------------------ */

    if (section.type === "concept") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ${section.title}
                </h3>

                <div class="concept-grid">

                    ${section.cards
                        .map(
                            card => `

                                <div class="concept-card">

                                    <h4>
                                        ${card.title}
                                    </h4>

                                    <p>
                                        ${card.text}
                                    </p>

                                </div>

                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       SCRIPT
    ------------------------------------------------------ */

    if (section.type === "script") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ตัวอักษร 3 ระบบ
                </h3>

                <div class="script-grid">

                    <div class="script-card hiragana">

                        <div class="script-symbol jp">
                            あ
                        </div>

                        <h4>
                            ひらがな
                        </h4>

                        <p>
                            Hiragana
                            <br>
                            ตัวอักษรพื้นฐานสำหรับ
                            คำญี่ปุ่นและไวยากรณ์
                        </p>

                    </div>


                    <div class="script-card katakana">

                        <div class="script-symbol jp">
                            ア
                        </div>

                        <h4>
                            カタカナ
                        </h4>

                        <p>
                            Katakana
                            <br>
                            ใช้กับคำยืมและคำต่างประเทศ
                            เป็นหลัก
                        </p>

                    </div>


                    <div class="script-card kanji">

                        <div class="script-symbol jp">
                            学
                        </div>

                        <h4>
                            漢字
                        </h4>

                        <p>
                            Kanji
                            <br>
                            ตัวอักษรที่มีความหมาย
                            และมีประวัติจากอักษรจีน
                        </p>

                    </div>

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       KANA
    ------------------------------------------------------ */

    if (section.type === "kana") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ${section.title}
                </h3>

                <div class="vocab-grid">

                    ${section.kana
                        .map(
                            item => `

                                <div
                                    class="vocab-card"
                                    style="
                                        grid-template-columns:
                                        75px 1fr;
                                    "
                                >

                                    <div
                                        class="vocab-kanji jp"
                                        style="
                                            font-size:32px;
                                            text-align:center;
                                        "
                                    >
                                        ${item.char}
                                    </div>

                                    <div class="vocab-info">

                                        <div
                                            class="vocab-jp"
                                        >
                                            ${item.romaji}
                                        </div>

                                        <div
                                            class="vocab-reading"
                                        >
                                            ${item.thai}
                                        </div>

                                    </div>

                                </div>

                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       VOCABULARY
    ------------------------------------------------------ */

    if (section.type === "vocab") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ${section.title}
                </h3>

                <div class="vocab-grid">

                    ${section.words
                        .map(
                            (word, index) => `

                                <div class="vocab-card">

                                    <div
                                        class="vocab-kanji jp"
                                    >
                                        ${word.jp}
                                    </div>

                                    <div class="vocab-info">

                                        <div class="vocab-jp">
                                            ${word.reading}
                                        </div>

                                        <div class="vocab-meaning">
                                            ${word.meaning}
                                        </div>

                                    </div>

                                    <button
                                        class="audio-button"
                                        onclick="
                                            speakJapanese(
                                                '${escapeQuotes(word.jp)}'
                                            )
                                        "
                                        title="ฟังเสียง"
                                    >
                                        VOICE
                                    </button>

                                </div>

                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       EXAMPLES
    ------------------------------------------------------ */

    if (section.type === "example") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ${section.title}
                </h3>

                <div class="example-list">

                    ${section.examples
                        .map(
                            example => `

                                <div
                                    class="example-card"
                                >

                                    <div
                                        class="
                                            example-japanese
                                            jp
                                        "
                                    >
                                        ${example.jp}
                                    </div>

                                    <div
                                        class="
                                            example-romaji
                                        "
                                    >
                                        ${example.romaji}
                                    </div>

                                    <div
                                        class="
                                            example-thai
                                        "
                                    >
                                        ${example.thai}
                                    </div>

                                    <div
                                        class="
                                            example-breakdown
                                        "
                                    >

                                        ${[
                                            ...example.jp
                                        ]
                                            .map(
                                                char => `
                                                    <span
                                                        class="
                                                            breakdown-word
                                                            jp
                                                        "
                                                    >
                                                        ${char}
                                                    </span>
                                                `
                                            )
                                            .join("")
                                        }

                                    </div>

                                    <button
                                        class="
                                            btn
                                            btn-secondary
                                        "
                                        style="
                                            margin-top:10px;
                                            min-height:34px;
                                            padding:7px 12px;
                                            font-size:10px;
                                        "
                                        onclick="
                                            speakJapanese(
                                                '${escapeQuotes(example.jp)}'
                                            )
                                        "
                                    >
                                        ฟังการออกเสียง
                                    </button>

                                </div>

                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       PRACTICE
    ------------------------------------------------------ */

    if (section.type === "practice") {

        const practiceId =
            `practice-${uniqueId}`;

        return `

            <section class="lesson-section">

                <div class="practice-card">

                    <div class="practice-prompt">
                        แบบฝึกหัด
                    </div>

                    <p
                        class="section-text"
                        style="
                            margin-top:7px;
                            color:var(--brown);
                        "
                    >
                        ${section.question}
                    </p>

                    <div
                        class="practice-input-row"
                    >

                        <input
                            class="practice-input"
                            id="${practiceId}"
                            type="text"
                            autocomplete="off"
                            placeholder="
                                พิมพ์คำตอบที่นี่
                            "
                        >

                        <button
                            class="btn btn-primary"
                            onclick="
                                checkPractice(
                                    '${practiceId}',
                                    ${JSON.stringify(section.accepted)}
                                )
                            "
                        >
                            ตรวจคำตอบ
                        </button>

                    </div>

                    <div
                        class="practice-result"
                        id="${practiceId}-result"
                    ></div>

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       FLASHCARDS
    ------------------------------------------------------ */

    if (section.type === "flash") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    Flashcards
                </h3>

                <div class="flashcard-area">

                    <div
                        class="flashcard"
                        id="flashcard-${uniqueId}"
                        data-cards='${JSON.stringify(section.cards)}'
                        onclick="
                            flipFlashcard(
                                'flashcard-${uniqueId}'
                            )
                        "
                    >

                        <div
                            class="flashcard-label"
                        >
                            FLASHCARD
                        </div>

                        <div
                            class="
                                flashcard-main
                                jp
                            "
                        >
                            ${section.cards[0].front}
                        </div>

                        <div
                            class="flashcard-answer hidden"
                        >
                            ${section.cards[0].back}
                        </div>

                        <div
                            class="flashcard-hint"
                        >
                            แตะเพื่อเปิดคำตอบ
                        </div>

                    </div>

                    <div
                        style="
                            display:flex;
                            gap:8px;
                            margin-top:12px;
                        "
                    >

                        <button
                            class="
                                btn
                                btn-secondary
                            "
                            onclick="
                                previousFlashcard(
                                    'flashcard-${uniqueId}'
                                )
                            "
                        >
                            ก่อนหน้า
                        </button>

                        <button
                            class="
                                btn
                                btn-primary
                            "
                            onclick="
                                nextFlashcard(
                                    'flashcard-${uniqueId}'
                                )
                            "
                        >
                            ถัดไป
                        </button>

                    </div>

                </div>

            </section>

        `;

    }


    /* -----------------------------------------------------
       CHECKLIST
    ------------------------------------------------------ */

    if (section.type === "check") {

        return `

            <section class="lesson-section">

                <h3 class="section-title">
                    ${section.title}
                </h3>

                <div class="check-list">

                    ${section.items
                        .map(
                            item => `

                                <div class="check-item">

                                    <span
                                        class="check-box"
                                    ></span>

                                    <span>
                                        ${item}
                                    </span>

                                </div>

                            `
                        )
                        .join("")
                    }

                </div>

            </section>

        `;

    }


    return "";

}


/* =========================================================
   LESSON BUTTON STATE
========================================================= */

function updateLessonButtons() {

    document
        .querySelectorAll(
            ".lesson-button"
        )
        .forEach(
            button => {

                const id =
                    Number(
                        button.dataset.lesson
                    );

                button.classList.toggle(
                    "active",
                    id === currentLesson
                );

            }
        );

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const percent =
        Math.round(
            (
                currentLesson /
                lessons.length
            ) * 100
        );

    progressFill.style.width =
        `${percent}%`;

    progressText.textContent =
        `${percent}%`;

}


/* =========================================================
   NAVIGATION
========================================================= */

function nextLesson() {

    if (
        currentLesson >=
        lessons.length
    ) {
        return;
    }

    currentLesson++;

    renderLesson(
        currentLesson
    );

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function previousLesson() {

    if (
        currentLesson <= 1
    ) {
        return;
    }

    currentLesson--;

    renderLesson(
        currentLesson
    );

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   START COURSE
========================================================= */

function startCourse() {

    currentLesson = 1;

    renderLesson(
        currentLesson
    );

    updateProgress();

    document
        .querySelector(".lesson-page")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   GOTO KANA
========================================================= */

function goToKana() {

    const target =
        lessons.find(
            lesson =>
                lesson.id === 2
        );

    if (!target) {
        return;
    }

    currentLesson = 2;

    renderLesson(
        currentLesson
    );

    updateProgress();

    document
        .querySelector(".lesson-page")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   PRACTICE CHECK
========================================================= */

function checkPractice(
    inputId,
    accepted
) {

    const input =
        document.getElementById(
            inputId
        );

    const result =
        document.getElementById(
            `${inputId}-result`
        );

    if (!input || !result) {
        return;
    }

    const userAnswer =
        input.value
            .trim()
            .toLowerCase();

    const normalizedAccepted =
        accepted.map(
            answer =>
                String(answer)
                    .trim()
                    .toLowerCase()
        );

    if (!userAnswer) {

        result.textContent =
            "ลองพิมพ์คำตอบก่อน";

        result.style.color =
            "var(--yellow-dark)";

        return;

    }

    if (
        normalizedAccepted.includes(
            userAnswer
        )
    ) {

        result.textContent =
            "ถูกต้อง คำตอบนี้ใช้ได้";

        result.style.color =
            "var(--green-dark)";

        input.style.borderColor =
            "var(--green-dark)";

        input.classList.add(
            "pop"
        );

    } else {

        result.textContent =
            "ยังไม่ตรง ลองกลับไปดูตัวอย่างแล้วลองอีกครั้ง";

        result.style.color =
            "var(--pink-dark)";

        input.style.borderColor =
            "var(--pink-dark)";

    }

}


/* =========================================================
   SPEECH SYNTHESIS
========================================================= */

function speakJapanese(
    text
) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง"
        );

        return;

    }

    window.speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(
            text
        );

    utterance.lang =
        "ja-JP";

    utterance.rate =
        0.78;

    utterance.pitch =
        1;

    window.speechSynthesis.speak(
        utterance
    );

}


/* =========================================================
   ESCAPE QUOTES
========================================================= */

function escapeQuotes(
    text
) {

    return String(text)
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        )
        .replace(
            /"/g,
            "&quot;"
        );

}


/* =========================================================
   FLASHCARD SYSTEM
========================================================= */

const flashcardStates =
    new Map();


function initializeFlashcard(
    element
) {

    if (!element) {
        return;
    }

    const cards =
        JSON.parse(
            element.dataset.cards
        );

    flashcardStates.set(
        element.id,
        {
            cards,
            index: 0,
            flipped: false
        }
    );

}


function getFlashState(
    id
) {

    if (
        !flashcardStates.has(id)
    ) {

        const element =
            document.getElementById(id);

        initializeFlashcard(
            element
        );

    }

    return flashcardStates.get(
        id
    );

}


function flipFlashcard(
    id
) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    const state =
        getFlashState(id);

    if (!state) {
        return;
    }

    state.flipped =
        !state.flipped;

    const card =
        state.cards[state.index];

    const main =
        element.querySelector(
            ".flashcard-main"
        );

    const answer =
        element.querySelector(
            ".flashcard-answer"
        );

    if (
        state.flipped
    ) {

        main.textContent =
            card.front;

        answer.textContent =
            card.back;

        answer.classList.remove(
            "hidden"
        );

    } else {

        main.textContent =
            card.front;

        answer.textContent =
            card.back;

        answer.classList.add(
            "hidden"
        );

    }

}


function renderFlashcard(
    id
) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    const state =
        getFlashState(id);

    if (!state) {
        return;
    }

    const card =
        state.cards[state.index];

    const main =
        element.querySelector(
            ".flashcard-main"
        );

    const answer =
        element.querySelector(
            ".flashcard-answer"
        );

    main.textContent =
        card.front;

    answer.textContent =
        card.back;

    answer.classList.toggle(
        "hidden",
        !state.flipped
    );

}


function nextFlashcard(
    id
) {

    const state =
        getFlashState(id);

    if (!state) {
        return;
    }

    state.index++;

    if (
        state.index >=
        state.cards.length
    ) {

        state.index = 0;

    }

    state.flipped =
        false;

    renderFlashcard(id);

}


function previousFlashcard(
    id
) {

    const state =
        getFlashState(id);

    if (!state) {
        return;
    }

    state.index--;

    if (
        state.index < 0
    ) {

        state.index =
            state.cards.length - 1;

    }

    state.flipped =
        false;

    renderFlashcard(id);

}


/* =========================================================
   SECTION EVENTS
========================================================= */

function attachSectionEvents() {

    document
        .querySelectorAll(
            ".flashcard"
        )
        .forEach(
            element => {

                initializeFlashcard(
                    element
                );

            }
        );


    document
        .querySelectorAll(
            ".practice-input"
        )
        .forEach(
            input => {

                input.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                            "Enter"
                        ) {

                            const button =
                                input.parentElement
                                    .querySelector(
                                        "button"
                                    );

                            if (button) {
                                button.click();
                            }

                        }

                    }
                );

            }
        );

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.target.tagName ===
            "INPUT"
        ) {
            return;
        }

        if (
            event.key ===
            "ArrowRight"
        ) {

            nextLesson();

        }

        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousLesson();

        }

    }
);


/* =========================================================
   END OF PART 1
   PART 2 CONTINUES HERE
========================================================= */
/* =========================================================
   PART 2 — LESSONS 4–12
   ========================================================= */



/* =========================================================
   EXTRA DATA — HIRAGANA QUICK REFERENCE
   ========================================================= */

const hiraganaBasic = [
    { char: "あ", romaji: "a", thai: "อะ" },
    { char: "い", romaji: "i", thai: "อิ" },
    { char: "う", romaji: "u", thai: "อุ" },
    { char: "え", romaji: "e", thai: "เอะ" },
    { char: "お", romaji: "o", thai: "โอะ" },

    { char: "か", romaji: "ka", thai: "คะ" },
    { char: "き", romaji: "ki", thai: "คิ" },
    { char: "く", romaji: "ku", thai: "คุ" },
    { char: "け", romaji: "ke", thai: "เคะ" },
    { char: "こ", romaji: "ko", thai: "โคะ" },

    { char: "さ", romaji: "sa", thai: "ซะ" },
    { char: "し", romaji: "shi", thai: "ชิ" },
    { char: "す", romaji: "su", thai: "ซุ" },
    { char: "せ", romaji: "se", thai: "เซะ" },
    { char: "そ", romaji: "so", thai: "โซะ" },

    { char: "た", romaji: "ta", thai: "ทะ" },
    { char: "ち", romaji: "chi", thai: "จิ" },
    { char: "つ", romaji: "tsu", thai: "สึ" },
    { char: "て", romaji: "te", thai: "เทะ" },
    { char: "と", romaji: "to", thai: "โทะ" },

    { char: "な", romaji: "na", thai: "นะ" },
    { char: "に", romaji: "ni", thai: "นิ" },
    { char: "ぬ", romaji: "nu", thai: "นุ" },
    { char: "ね", romaji: "ne", thai: "เนะ" },
    { char: "の", romaji: "no", thai: "โนะ" },

    { char: "は", romaji: "ha", thai: "ฮะ" },
    { char: "ひ", romaji: "hi", thai: "ฮิ" },
    { char: "ふ", romaji: "fu", thai: "ฟุ" },
    { char: "へ", romaji: "he", thai: "เฮะ" },
    { char: "ほ", romaji: "ho", thai: "โฮะ" },

    { char: "ま", romaji: "ma", thai: "มะ" },
    { char: "み", romaji: "mi", thai: "มิ" },
    { char: "む", romaji: "mu", thai: "มุ" },
    { char: "め", romaji: "me", thai: "เมะ" },
    { char: "も", romaji: "mo", thai: "โมะ" },

    { char: "や", romaji: "ya", thai: "ยะ" },
    { char: "ゆ", romaji: "yu", thai: "ยุ" },
    { char: "よ", romaji: "yo", thai: "โยะ" },

    { char: "ら", romaji: "ra", thai: "ระ" },
    { char: "り", romaji: "ri", thai: "ริ" },
    { char: "る", romaji: "ru", thai: "รุ" },
    { char: "れ", romaji: "re", thai: "เระ" },
    { char: "ろ", romaji: "ro", thai: "โระ" },

    { char: "わ", romaji: "wa", thai: "วะ" },
    { char: "を", romaji: "wo", thai: "โอะ" },
    { char: "ん", romaji: "n", thai: "น" }
];


/* =========================================================
   REVIEW QUESTION BANK
   ========================================================= */

const hiraganaReviewQuestions = [
    {
        question: "あ อ่านว่าอะไร?",
        choices: ["a", "i", "u", "e"],
        answer: 0
    },
    {
        question: "い อ่านว่าอะไร?",
        choices: ["a", "i", "u", "o"],
        answer: 1
    },
    {
        question: "う อ่านว่าอะไร?",
        choices: ["e", "o", "u", "a"],
        answer: 2
    },
    {
        question: "え อ่านว่าอะไร?",
        choices: ["e", "i", "a", "o"],
        answer: 0
    },
    {
        question: "お อ่านว่าอะไร?",
        choices: ["a", "u", "o", "e"],
        answer: 2
    },
    {
        question: "か อ่านว่าอะไร?",
        choices: ["ka", "ki", "ku", "ko"],
        answer: 0
    },
    {
        question: "き อ่านว่าอะไร?",
        choices: ["ke", "ki", "ka", "ku"],
        answer: 1
    },
    {
        question: "く อ่านว่าอะไร?",
        choices: ["ku", "ko", "ka", "ki"],
        answer: 0
    },
    {
        question: "け อ่านว่าอะไร?",
        choices: ["ki", "ka", "ke", "ku"],
        answer: 2
    },
    {
        question: "こ อ่านว่าอะไร?",
        choices: ["ko", "ke", "ki", "ka"],
        answer: 0
    },
    {
        question: "し อ่านว่าอะไร?",
        choices: ["si", "shi", "su", "se"],
        answer: 1
    },
    {
        question: "ち อ่านว่าอะไร?",
        choices: ["ti", "chi", "tsu", "te"],
        answer: 1
    },
    {
        question: "つ อ่านว่าอะไร?",
        choices: ["tu", "tsu", "to", "chi"],
        answer: 1
    },
    {
        question: "ふ อ่านว่าอะไร?",
        choices: ["hu", "fu", "ho", "he"],
        answer: 1
    },
    {
        question: "を อ่านอย่างไรเมื่อเป็นคำช่วย?",
        choices: ["wo", "o", "wa", "n"],
        answer: 1
    },
    {
        question: "ん อ่านว่าอะไร?",
        choices: ["m", "n", "r", "y"],
        answer: 1
    }
];


/* =========================================================
   GLOBAL COURSE HELPERS
   ========================================================= */

function getLessonById(id) {
    return lessons.find(lesson => lesson.id === Number(id));
}


function getCompletedLessons() {
    try {
        const saved = JSON.parse(localStorage.getItem("jpNotebookCompleted") || "[]");

        if (!Array.isArray(saved)) {
            return [];
        }

        return saved.map(Number).filter(Number.isFinite);
    } catch (error) {
        return [];
    }
}


function saveCompletedLessons(list) {
    const clean = [...new Set(
        list
            .map(Number)
            .filter(Number.isFinite)
    )];

    localStorage.setItem(
        "jpNotebookCompleted",
        JSON.stringify(clean)
    );
}


function markLessonComplete(id) {
    const completed = getCompletedLessons();

    if (!completed.includes(Number(id))) {
        completed.push(Number(id));
        saveCompletedLessons(completed);
    }

    updateProgress();
    buildLessonList();
}


function isLessonComplete(id) {
    return getCompletedLessons().includes(Number(id));
}


function calculateCourseProgress() {
    const total = lessons.length;
    const completed = getCompletedLessons()
        .filter(id => lessons.some(lesson => lesson.id === id))
        .length;

    if (!total) {
        return 0;
    }

    return Math.round((completed / total) * 100);
}


/* =========================================================
   REPLACE / EXTEND PROGRESS FUNCTION
   ========================================================= */

function updateProgress() {
    const percent = calculateCourseProgress();

    const progressBar = document.querySelector(".progress-fill");
    const progressText = document.getElementById("progressText") || document.querySelector(".progress-percent");
    const progressLabel = document.querySelector(".progress-label");

    if (progressBar) {
        progressBar.style.width = `${percent}%`;
    }

    if (progressText) {
        progressText.textContent = `${percent}%`;
    }

    if (progressLabel) {
        progressLabel.textContent =
            `${getCompletedLessons().length} / ${lessons.length} บท`;
    }

    const currentNumber = document.querySelector(".current-lesson-number");

    if (currentNumber) {
        currentNumber.textContent = String(currentLesson).padStart(2, "0");
    }
}


/* =========================================================
   LESSON LIST — EXTENDED
   ========================================================= */

function buildLessonList() {
    if (!lessonList) {
        return;
    }

    lessonList.innerHTML = "";

    let previousCategory = "";

    lessons.forEach(lesson => {
        if (lesson.category !== previousCategory) {
            const categoryTitle = document.createElement("div");

            categoryTitle.className = "lesson-category";
            categoryTitle.textContent = lesson.category;

            lessonList.appendChild(categoryTitle);

            previousCategory = lesson.category;
        }

        const item = document.createElement("button");

        item.type = "button";
        item.className = "lesson-item";
        item.dataset.lesson = lesson.id;

        if (lesson.id === currentLesson) {
            item.classList.add("active");
        }

        if (isLessonComplete(lesson.id)) {
            item.classList.add("completed");
        }

        const number = document.createElement("span");

        number.className = "lesson-number";
        number.textContent = String(lesson.id).padStart(2, "0");

        const info = document.createElement("span");

        info.className = "lesson-item-info";

        const title = document.createElement("span");

        title.className = "lesson-item-title";
        title.textContent = lesson.title;

        const subtitle = document.createElement("span");

        subtitle.className = "lesson-item-subtitle";
        subtitle.textContent = lesson.subtitle;

        info.appendChild(title);
        info.appendChild(subtitle);

        const status = document.createElement("span");

        status.className = "lesson-status";

        if (isLessonComplete(lesson.id)) {
            status.textContent = "✓";
        } else {
            status.textContent = "";
        }

        item.appendChild(number);
        item.appendChild(info);
        item.appendChild(status);

        item.addEventListener("click", () => {
            renderLesson(lesson.id);
        });

        lessonList.appendChild(item);
    });
}


/* =========================================================
   LESSON COMPLETION UI
   ========================================================= */

function renderCompletionButton(lesson) {
    const wrapper = document.createElement("div");

    wrapper.className = "lesson-completion-area";

    const button = document.createElement("button");

    button.type = "button";
    button.className = "complete-lesson-button";

    if (isLessonComplete(lesson.id)) {
        button.classList.add("done");
        button.innerHTML = `
            <span class="complete-icon">✓</span>
            <span>เรียนบทนี้แล้ว</span>
        `;
    } else {
        button.innerHTML = `
            <span class="complete-icon">○</span>
            <span>ทำเครื่องหมายว่าเรียนจบแล้ว</span>
        `;
    }

    button.addEventListener("click", () => {
        markLessonComplete(lesson.id);

        button.classList.add("done");

        button.innerHTML = `
            <span class="complete-icon">✓</span>
            <span>เรียนบทนี้แล้ว</span>
        `;

        showToast("บันทึกบทเรียนเรียบร้อย");
    });

    wrapper.appendChild(button);

    return wrapper;
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {
    let toast = document.querySelector(".course-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "course-toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =========================================================
   ADD COMPLETION AREA TO LESSON PAGE
   ========================================================= */

const originalRenderLessonForPart2 = renderLesson;

renderLesson = function(id) {
    originalRenderLessonForPart2(id);

    const lesson = getLessonById(id);

    if (!lesson || !lessonPage) {
        return;
    }

    const existing = lessonPage.querySelector(".lesson-completion-area");

    if (existing) {
        existing.remove();
    }

    lessonPage.appendChild(renderCompletionButton(lesson));

    updateProgress();
    buildLessonList();
};


/* =========================================================
   RANDOM KANA PRACTICE
   ========================================================= */

let randomKanaState = {
    current: null,
    score: 0,
    total: 0
};


function createRandomKanaPractice(container) {
    if (!container) {
        return;
    }

    const pool = hiraganaBasic.slice();

    randomKanaState.current =
        pool[Math.floor(Math.random() * pool.length)];

    randomKanaState.total++;

    container.innerHTML = "";

    const title = document.createElement("div");

    title.className = "random-practice-title";
    title.textContent = "ตัวนี้อ่านว่าอะไร?";

    const character = document.createElement("div");

    character.className = "random-practice-character";
    character.textContent = randomKanaState.current.char;

    const hint = document.createElement("div");

    hint.className = "random-practice-hint";
    hint.textContent = "เลือกเสียงที่ถูกต้อง";

    const choices = document.createElement("div");

    choices.className = "random-practice-choices";

    const correct = randomKanaState.current;

    const candidates = pool
        .filter(item => item.char !== correct.char)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    candidates.push(correct);

    candidates.sort(() => Math.random() - 0.5);

    candidates.forEach(item => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "random-choice";
        button.textContent = item.romaji;

        button.addEventListener("click", () => {
            const allButtons =
                choices.querySelectorAll("button");

            allButtons.forEach(btn => {
                btn.disabled = true;
            });

            if (item.char === correct.char) {
                button.classList.add("correct");
                randomKanaState.score++;
                showToast("ถูกต้อง!");
            } else {
                button.classList.add("wrong");

                allButtons.forEach(btn => {
                    if (btn.textContent === correct.romaji) {
                        btn.classList.add("correct");
                    }
                });

                showToast(`คำตอบคือ ${correct.romaji}`);
            }

            setTimeout(() => {
                createRandomKanaPractice(container);
            }, 850);
        });

        choices.appendChild(button);
    });

    container.appendChild(title);
    container.appendChild(character);
    container.appendChild(hint);
    container.appendChild(choices);
}


/* =========================================================
   KANA FLASH REVIEW
   ========================================================= */

const kanaFlashPool = [
    ...hiraganaBasic
];


let kanaFlashIndex = 0;
let kanaFlashRevealed = false;


function renderKanaFlash(container) {
    if (!container || !kanaFlashPool.length) {
        return;
    }

    const card = kanaFlashPool[kanaFlashIndex];

    container.innerHTML = "";

    const flashCard = document.createElement("div");

    flashCard.className = "kana-flash-card";

    const number = document.createElement("div");

    number.className = "kana-flash-number";

    number.textContent =
        `${kanaFlashIndex + 1} / ${kanaFlashPool.length}`;

    const char = document.createElement("div");

    char.className = "kana-flash-character";
    char.textContent = card.char;

    const answer = document.createElement("div");

    answer.className = "kana-flash-answer";

    if (kanaFlashRevealed) {
        answer.innerHTML = `
            <strong>${card.romaji}</strong>
            <span>${card.thai}</span>
        `;
    } else {
        answer.textContent = "กดเพื่อเปิดคำตอบ";
    }

    const reveal = document.createElement("button");

    reveal.type = "button";
    reveal.className = "flash-reveal-button";
    reveal.textContent =
        kanaFlashRevealed
            ? "ซ่อนคำตอบ"
            : "เปิดคำตอบ";

    reveal.addEventListener("click", () => {
        kanaFlashRevealed = !kanaFlashRevealed;
        renderKanaFlash(container);
    });

    const controls = document.createElement("div");

    controls.className = "kana-flash-controls";

    const prev = document.createElement("button");

    prev.type = "button";
    prev.textContent = "← ก่อนหน้า";
    prev.className = "flash-nav-button";

    prev.addEventListener("click", () => {
        kanaFlashIndex--;

        if (kanaFlashIndex < 0) {
            kanaFlashIndex = kanaFlashPool.length - 1;
        }

        kanaFlashRevealed = false;

        renderKanaFlash(container);
    });

    const next = document.createElement("button");

    next.type = "button";
    next.textContent = "ถัดไป →";
    next.className = "flash-nav-button";

    next.addEventListener("click", () => {
        kanaFlashIndex++;

        if (kanaFlashIndex >= kanaFlashPool.length) {
            kanaFlashIndex = 0;
        }

        kanaFlashRevealed = false;

        renderKanaFlash(container);
    });

    controls.appendChild(prev);
    controls.appendChild(next);

    flashCard.appendChild(number);
    flashCard.appendChild(char);
    flashCard.appendChild(answer);
    flashCard.appendChild(reveal);
    flashCard.appendChild(controls);

    container.appendChild(flashCard);
}


/* =========================================================
   KANA SEARCH
   ========================================================= */

function createKanaSearch(container) {
    if (!container) {
        return;
    }

    container.innerHTML = "";

    const wrapper = document.createElement("div");

    wrapper.className = "kana-search-box";

    const input = document.createElement("input");

    input.type = "search";
    input.placeholder = "ค้นหา เช่น ねこ / neko / แมว";
    input.className = "kana-search-input";

    const results = document.createElement("div");

    results.className = "kana-search-results";

    function renderResults(query) {
        const q = query.trim().toLowerCase();

        if (!q) {
            results.innerHTML = `
                <div class="search-empty">
                    พิมพ์ตัวอักษร โรมาจิ หรือคำแปลเพื่อค้นหา
                </div>
            `;
            return;
        }

        const matches = hiraganaBasic.filter(item => {
            return (
                item.char.includes(q) ||
                item.romaji.toLowerCase().includes(q) ||
                item.thai.toLowerCase().includes(q)
            );
        });

        if (!matches.length) {
            results.innerHTML = `
                <div class="search-empty">
                    ไม่พบตัวที่ค้นหา
                </div>
            `;
            return;
        }

        results.innerHTML = "";

        matches.forEach(item => {
            const row = document.createElement("div");

            row.className = "kana-search-result";

            row.innerHTML = `
                <span class="search-result-char">
                    ${item.char}
                </span>
                <span class="search-result-romaji">
                    ${item.romaji}
                </span>
                <span class="search-result-thai">
                    ${item.thai}
                </span>
            `;

            results.appendChild(row);
        });
    }

    input.addEventListener("input", () => {
        renderResults(input.value);
    });

    wrapper.appendChild(input);
    wrapper.appendChild(results);

    container.appendChild(wrapper);

    renderResults("");
}


/* =========================================================
   WRITING PRACTICE CANVAS
   ========================================================= */

function createWritingCanvas(canvas, character) {
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return;
    }

    const rect = canvas.getBoundingClientRect();

    const ratio = window.devicePixelRatio || 1;

    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));

    ctx.scale(ratio, ratio);

    const width = rect.width;
    const height = rect.height;

    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    function getPoint(event) {
        const box = canvas.getBoundingClientRect();

        let clientX;
        let clientY;

        if (event.touches && event.touches.length) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        return {
            x: clientX - box.left,
            y: clientY - box.top
        };
    }

    function start(event) {
        event.preventDefault();

        const point = getPoint(event);

        drawing = true;
        lastX = point.x;
        lastY = point.y;
    }

    function move(event) {
        if (!drawing) {
            return;
        }

        event.preventDefault();

        const point = getPoint(event);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();

        lastX = point.x;
        lastY = point.y;
    }

    function end() {
        drawing = false;
    }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mouseleave", end);

    canvas.addEventListener("touchstart", start, {
        passive: false
    });

    canvas.addEventListener("touchmove", move, {
        passive: false
    });

    canvas.addEventListener("touchend", end);

    canvas.addEventListener("touchcancel", end);

    const clearButton =
        canvas.parentElement?.querySelector(".clear-writing");

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            ctx.clearRect(
                0,
                0,
                canvas.width / ratio,
                canvas.height / ratio
            );
        });
    }
}


/* =========================================================
   GENERATE WRITING PRACTICE
   ========================================================= */

function createWritingPractice(container, characters = []) {
    if (!container) {
        return;
    }

    container.innerHTML = "";

    const title = document.createElement("div");

    title.className = "writing-practice-heading";
    title.textContent = "ลองเขียนด้วยตัวเอง";

    const subtitle = document.createElement("div");

    subtitle.className = "writing-practice-subtitle";

    subtitle.textContent =
        "ดูตัวอย่างด้านบน แล้วลองเขียนตัวเดียวกันในช่องด้านล่าง";

    const grid = document.createElement("div");

    grid.className = "writing-practice-grid";

    characters.forEach(character => {
        const card = document.createElement("div");

        card.className = "writing-practice-card";

        const reference = document.createElement("div");

        reference.className = "writing-reference";
        reference.textContent = character;

        const canvas = document.createElement("canvas");

        canvas.className = "writing-canvas";

        const actions = document.createElement("div");

        actions.className = "writing-actions";

        const clear = document.createElement("button");

        clear.type = "button";
        clear.className = "clear-writing";
        clear.textContent = "ล้าง";

        actions.appendChild(clear);

        card.appendChild(reference);
        card.appendChild(canvas);
        card.appendChild(actions);

        grid.appendChild(card);

        requestAnimationFrame(() => {
            createWritingCanvas(canvas, character);
        });
    });

    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(grid);
}


/* =========================================================
   PRONUNCIATION HELP
   ========================================================= */

const pronunciationTips = {
    "あ": "เปิดปากตามธรรมชาติ เสียงอะ",
    "い": "ยิ้มเล็กน้อย เสียงอิ",
    "う": "ห่อปากเล็กน้อย เสียงอุ",
    "え": "เสียงเอะ เปิดปากพอดี",
    "お": "เสียงโอะ ปากกลมเล็กน้อย",

    "し": "ออกเสียง shi คล้าย ชิ",
    "ち": "ออกเสียง chi คล้าย จิ",
    "つ": "ออกเสียง tsu คล้าย สึ",
    "ふ": "ออกเสียง fu เบา ๆ ระหว่างฟุกับฮุ",

    "ら": "แตะปลายลิ้นเร็ว ๆ เป็นเสียง R ญี่ปุ่น",
    "り": "เสียง ri แบบแตะลิ้นเร็ว",
    "る": "เสียง ru แบบญี่ปุ่น",
    "れ": "เสียง re แบบญี่ปุ่น",
    "ろ": "เสียง ro แบบญี่ปุ่น",

    "ん": "เสียง n ท้ายพยางค์ อาจเปลี่ยนเล็กน้อยตามเสียงถัดไป"
};


function getPronunciationTip(character) {
    return pronunciationTips[character] || "";
}


/* =========================================================
   SPEAK SINGLE KANA
   ========================================================= */

function speakKana(character, lang = "ja-JP") {
    if (!("speechSynthesis" in window)) {
        showToast("เบราว์เซอร์นี้ไม่รองรับเสียงพูด");
        return;
    }

    window.speechSynthesis.cancel();

    const utterance =
        new SpeechSynthesisUtterance(character);

    utterance.lang = lang;
    utterance.rate = 0.72;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
}


/* =========================================================
   ADD SPEAKER BUTTONS TO KANA CARDS
   ========================================================= */

function attachKanaSpeakerButtons(root = document) {
    const cards = root.querySelectorAll(
        ".kana-card, .script-card, .vocab-card"
    );

    cards.forEach(card => {
        if (card.querySelector(".kana-speaker")) {
            return;
        }

        const jpElement =
            card.querySelector(".jp, .kana-character, .script-character");

        if (!jpElement) {
            return;
        }

        const character =
            jpElement.textContent.trim();

        if (!character) {
            return;
        }

        const button = document.createElement("button");

        button.type = "button";
        button.className = "kana-speaker";
        button.textContent = "ฟังเสียง";

        button.addEventListener("click", event => {
            event.stopPropagation();
            speakKana(character);
        });

        card.appendChild(button);
    });
}


/* =========================================================
   AUTO SPEAKER FOR KANA SECTION
   ========================================================= */

const previousAttachSectionEvents = attachSectionEvents;

attachSectionEvents = function() {
    previousAttachSectionEvents();

    attachKanaSpeakerButtons(lessonPage);
};


/* =========================================================
   QUICK KANA PANEL
   ========================================================= */

function createQuickKanaPanel(container) {
    if (!container) {
        return;
    }

    container.innerHTML = `
        <div class="quick-kana-panel">
            <div class="quick-kana-heading">
                ฮิรางานะที่เราเรียนแล้ว
            </div>

            <div class="quick-kana-grid">
                ${hiraganaBasic.map(item => `
                    <button
                        type="button"
                        class="quick-kana-button"
                        data-kana="${item.char}"
                    >
                        <span class="quick-kana-char">
                            ${item.char}
                        </span>

                        <span class="quick-kana-romaji">
                            ${item.romaji}
                        </span>
                    </button>
                `).join("")}
            </div>

            <div class="quick-kana-info">
                กดตัวอักษรเพื่อฟังเสียง
            </div>
        </div>
    `;

    container
        .querySelectorAll(".quick-kana-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                speakKana(button.dataset.kana);
            });
        });
}


/* =========================================================
   COURSE SEARCH
   ========================================================= */

function createCourseSearch(container) {
    if (!container) {
        return;
    }

    container.innerHTML = "";

    const wrapper = document.createElement("div");

    wrapper.className = "course-search";

    const input = document.createElement("input");

    input.type = "search";
    input.placeholder = "ค้นหาบทเรียน...";
    input.className = "course-search-input";

    const result = document.createElement("div");

    result.className = "course-search-result";

    function render(query) {
        const q = query.trim().toLowerCase();

        if (!q) {
            result.innerHTML = "";
            return;
        }

        const matches = lessons.filter(lesson => {
            const text = [
                lesson.title,
                lesson.subtitle,
                lesson.category,
                ...(lesson.objectives || [])
            ]
                .join(" ")
                .toLowerCase();

            return text.includes(q);
        });

        result.innerHTML = "";

        if (!matches.length) {
            result.innerHTML = `
                <div class="course-search-empty">
                    ไม่พบบทเรียนที่ตรงกัน
                </div>
            `;

            return;
        }

        matches.slice(0, 8).forEach(lesson => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "course-search-item";

            button.innerHTML = `
                <span class="course-search-number">
                    ${String(lesson.id).padStart(2, "0")}
                </span>

                <span class="course-search-name">
                    ${lesson.title}
                </span>
            `;

            button.addEventListener("click", () => {
                renderLesson(lesson.id);
                input.value = "";
                result.innerHTML = "";
            });

            result.appendChild(button);
        });
    }

    input.addEventListener("input", () => {
        render(input.value);
    });

    wrapper.appendChild(input);
    wrapper.appendChild(result);

    container.appendChild(wrapper);
}


/* =========================================================
   LESSON NAVIGATION — SAFER VERSION
   ========================================================= */

function goToNextLesson() {
    const index = lessons.findIndex(
        lesson => lesson.id === currentLesson
    );

    if (index === -1) {
        return;
    }

    if (index >= lessons.length - 1) {
        showToast("นี่คือบทสุดท้ายของคอร์สตอนนี้");
        return;
    }

    renderLesson(lessons[index + 1].id);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function goToPreviousLesson() {
    const index = lessons.findIndex(
        lesson => lesson.id === currentLesson
    );

    if (index <= 0) {
        showToast("นี่คือบทแรกของคอร์ส");
        return;
    }

    renderLesson(lessons[index - 1].id);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   GLOBAL KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener("keydown", event => {
    const target = event.target;

    const isTyping =
        target &&
        (
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable
        );

    if (isTyping) {
        return;
    }

    if (event.key === "ArrowRight") {
        goToNextLesson();
    }

    if (event.key === "ArrowLeft") {
        goToPreviousLesson();
    }

    if (event.key === "Escape") {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }
});


/* =========================================================
   RESET COURSE PROGRESS
   ========================================================= */

function resetCourseProgress() {
    const confirmed =
        window.confirm(
            "ต้องการล้างความคืบหน้าของคอร์สทั้งหมดหรือไม่?"
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem("jpNotebookCompleted");

    updateProgress();
    buildLessonList();

    showToast("ล้างความคืบหน้าแล้ว");
}


/* =========================================================
   EXPORT COURSE PROGRESS
   ========================================================= */

function exportCourseProgress() {
    const data = {
        completedLessons: getCompletedLessons(),
        currentLesson,
        progress: calculateCourseProgress(),
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        {
            type: "application/json"
        }
    );

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "japanese-notebook-progress.json";

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);

    showToast("ส่งออกความคืบหน้าแล้ว");
}


/* =========================================================
   IMPORT COURSE PROGRESS
   ========================================================= */

function importCourseProgress(file) {
    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = event => {
        try {
            const data =
                JSON.parse(event.target.result);

            if (
                !data ||
                !Array.isArray(data.completedLessons)
            ) {
                throw new Error("Invalid progress file");
            }

            saveCompletedLessons(
                data.completedLessons
                    .map(Number)
                    .filter(Number.isFinite)
            );

            updateProgress();
            buildLessonList();

            showToast("นำเข้าความคืบหน้าแล้ว");
        } catch (error) {
            showToast("ไฟล์ความคืบหน้าไม่ถูกต้อง");
        }
    };

    reader.readAsText(file);
}


/* =========================================================
   COURSE SETTINGS PANEL
   ========================================================= */

function createCourseSettings(container) {
    if (!container) {
        return;
    }

    container.innerHTML = `
        <div class="course-settings-panel">

            <div class="settings-title">
                ตั้งค่าคอร์ส
            </div>

            <div class="settings-row">
                <button
                    type="button"
                    class="settings-button"
                    id="resetProgressButton"
                >
                    ล้างความคืบหน้า
                </button>

                <button
                    type="button"
                    class="settings-button"
                    id="exportProgressButton"
                >
                    บันทึกความคืบหน้า
                </button>

                <label
                    class="settings-button settings-file"
                >
                    นำเข้าความคืบหน้า
                    <input
                        type="file"
                        id="importProgressInput"
                        accept=".json,application/json"
                        hidden
                    >
                </label>
            </div>

        </div>
    `;

    const reset =
        container.querySelector("#resetProgressButton");

    const exportButton =
        container.querySelector("#exportProgressButton");

    const importInput =
        container.querySelector("#importProgressInput");

    reset?.addEventListener(
        "click",
        resetCourseProgress
    );

    exportButton?.addEventListener(
        "click",
        exportCourseProgress
    );

    importInput?.addEventListener(
        "change",
        () => {
            importCourseProgress(
                importInput.files?.[0]
            );
        }
    );
}


/* =========================================================
   KANA MEMORY GAME
   ========================================================= */

let kanaMemoryState = {
    cards: [],
    flipped: [],
    matched: [],
    moves: 0,
    locked: false
};


function createKanaMemoryGame(container) {
    if (!container) {
        return;
    }

    const selected = hiraganaBasic
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);

    const cards = [];

    selected.forEach(item => {
        cards.push({
            id: `${item.char}-jp`,
            pair: item.romaji,
            type: "jp",
            value: item.char
        });

        cards.push({
            id: `${item.char}-romaji`,
            pair: item.romaji,
            type: "romaji",
            value: item.romaji
        });
    });

    cards.sort(() => Math.random() - 0.5);

    kanaMemoryState = {
        cards,
        flipped: [],
        matched: [],
        moves: 0,
        locked: false
    };

    renderKanaMemoryGame(container);
}


function renderKanaMemoryGame(container) {
    container.innerHTML = "";

    const header = document.createElement("div");

    header.className = "memory-header";

    header.innerHTML = `
        <div>
            <strong>จับคู่ฮิรางานะ</strong>
            <span>หาตัวอักษรกับเสียงโรมาจิที่ตรงกัน</span>
        </div>

        <div class="memory-moves">
            เดิน: ${kanaMemoryState.moves}
        </div>
    `;

    const grid = document.createElement("div");

    grid.className = "memory-grid";

    kanaMemoryState.cards.forEach(card => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "memory-card";

        const isFlipped =
            kanaMemoryState.flipped.includes(card.id);

        const isMatched =
            kanaMemoryState.matched.includes(card.id);

        if (isFlipped || isMatched) {
            button.classList.add("flipped");
        }

        if (isMatched) {
            button.classList.add("matched");
        }

        button.innerHTML = `
            <span class="memory-card-front">
                ?
            </span>

            <span class="memory-card-back">
                ${card.value}
            </span>
        `;

        if (
            isFlipped ||
            isMatched ||
            kanaMemoryState.locked
        ) {
            if (!isMatched) {
                button.disabled = true;
            }
        }

        button.addEventListener("click", () => {
            handleMemoryCardClick(
                container,
                card.id
            );
        });

        grid.appendChild(button);
    });

    const restart = document.createElement("button");

    restart.type = "button";
    restart.className = "memory-restart";
    restart.textContent = "เริ่มเกมใหม่";

    restart.addEventListener("click", () => {
        createKanaMemoryGame(container);
    });

    container.appendChild(header);
    container.appendChild(grid);
    container.appendChild(restart);
}


function handleMemoryCardClick(container, id) {
    if (kanaMemoryState.locked) {
        return;
    }

    if (kanaMemoryState.flipped.includes(id)) {
        return;
    }

    if (kanaMemoryState.matched.includes(id)) {
        return;
    }

    if (kanaMemoryState.flipped.length >= 2) {
        return;
    }

    kanaMemoryState.flipped.push(id);

    renderKanaMemoryGame(container);

    if (kanaMemoryState.flipped.length !== 2) {
        return;
    }

    kanaMemoryState.moves++;

    const [firstId, secondId] =
        kanaMemoryState.flipped;

    const first =
        kanaMemoryState.cards.find(
            card => card.id === firstId
        );

    const second =
        kanaMemoryState.cards.find(
            card => card.id === secondId
        );

    if (
        first &&
        second &&
        first.pair === second.pair
    ) {
        kanaMemoryState.matched.push(
            first.id,
            second.id
        );

        kanaMemoryState.flipped = [];

        renderKanaMemoryGame(container);

        if (
            kanaMemoryState.matched.length ===
            kanaMemoryState.cards.length
        ) {
            setTimeout(() => {
                showToast(
                    `เก่งมาก! จับคู่ครบใน ${kanaMemoryState.moves} ครั้ง`
                );
            }, 200);
        }

        return;
    }

    kanaMemoryState.locked = true;

    setTimeout(() => {
        kanaMemoryState.flipped = [];
        kanaMemoryState.locked = false;

        renderKanaMemoryGame(container);
    }, 850);
}


/* =========================================================
   VOCABULARY DATA — BEGINNER
   ========================================================= */

const beginnerVocabulary = [
    {
        jp: "ねこ",
        romaji: "neko",
        thai: "แมว",
        category: "สัตว์"
    },
    {
        jp: "いぬ",
        romaji: "inu",
        thai: "สุนัข",
        category: "สัตว์"
    },
    {
        jp: "とり",
        romaji: "tori",
        thai: "นก",
        category: "สัตว์"
    },
    {
        jp: "さかな",
        romaji: "sakana",
        thai: "ปลา",
        category: "สัตว์"
    },
    {
        jp: "みず",
        romaji: "mizu",
        thai: "น้ำ",
        category: "ของใช้"
    },
    {
        jp: "ほん",
        romaji: "hon",
        thai: "หนังสือ",
        category: "ของใช้"
    },
    {
        jp: "て",
        romaji: "te",
        thai: "มือ",
        category: "ร่างกาย"
    },
    {
        jp: "め",
        romaji: "me",
        thai: "ตา",
        category: "ร่างกาย"
    },
    {
        jp: "みみ",
        romaji: "mimi",
        thai: "หู",
        category: "ร่างกาย"
    },
    {
        jp: "はな",
        romaji: "hana",
        thai: "ดอกไม้ / จมูก",
        category: "ธรรมชาติ"
    },
    {
        jp: "やま",
        romaji: "yama",
        thai: "ภูเขา",
        category: "ธรรมชาติ"
    },
    {
        jp: "そら",
        romaji: "sora",
        thai: "ท้องฟ้า",
        category: "ธรรมชาติ"
    },
    {
        jp: "ほし",
        romaji: "hoshi",
        thai: "ดาว",
        category: "ธรรมชาติ"
    },
    {
        jp: "つき",
        romaji: "tsuki",
        thai: "พระจันทร์ / เดือน",
        category: "ธรรมชาติ"
    },
    {
        jp: "ゆき",
        romaji: "yuki",
        thai: "หิมะ",
        category: "ธรรมชาติ"
    },
    {
        jp: "よる",
        romaji: "yoru",
        thai: "กลางคืน",
        category: "เวลา"
    },
    {
        jp: "ひと",
        romaji: "hito",
        thai: "คน",
        category: "คน"
    },
    {
        jp: "せんせい",
        romaji: "sensei",
        thai: "ครู / อาจารย์",
        category: "คน"
    },
    {
        jp: "にほん",
        romaji: "nihon",
        thai: "ญี่ปุ่น",
        category: "สถานที่"
    }
];


/* =========================================================
   VOCAB FLASHCARD
   ========================================================= */

let vocabFlashIndex = 0;
let vocabFlashShowAnswer = false;


function createVocabularyFlashcards(container) {
    if (!container) {
        return;
    }

    renderVocabularyFlashcard(container);
}


function renderVocabularyFlashcard(container) {
    if (!container) {
        return;
    }

    const item =
        beginnerVocabulary[vocabFlashIndex];

    container.innerHTML = "";

    const card = document.createElement("div");

    card.className = "vocab-flashcard";

    card.innerHTML = `
        <div class="vocab-flash-count">
            ${vocabFlashIndex + 1} / ${beginnerVocabulary.length}
        </div>

        <div class="vocab-flash-jp">
            ${item.jp}
        </div>

        <div class="vocab-flash-answer">
            ${
                vocabFlashShowAnswer
                    ? `
                        <strong>${item.romaji}</strong>
                        <span>${item.thai}</span>
                    `
                    : "ลองอ่านเองก่อน"
            }
        </div>

        <div class="vocab-flash-category">
            ${item.category}
        </div>
    `;

    const actions = document.createElement("div");

    actions.className = "vocab-flash-actions";

    const reveal = document.createElement("button");

    reveal.type = "button";
    reveal.className = "vocab-flash-button";

    reveal.textContent =
        vocabFlashShowAnswer
            ? "ซ่อนคำตอบ"
            : "เปิดคำตอบ";

    reveal.addEventListener("click", () => {
        vocabFlashShowAnswer =
            !vocabFlashShowAnswer;

        renderVocabularyFlashcard(container);
    });

    const speak = document.createElement("button");

    speak.type = "button";
    speak.className = "vocab-flash-button";
    speak.textContent = "ฟังเสียง";

    speak.addEventListener("click", () => {
        speakJapanese(item.jp);
    });

    const previous = document.createElement("button");

    previous.type = "button";
    previous.className = "vocab-flash-button";
    previous.textContent = "←";

    previous.addEventListener("click", () => {
        vocabFlashIndex--;

        if (vocabFlashIndex < 0) {
            vocabFlashIndex =
                beginnerVocabulary.length - 1;
        }

        vocabFlashShowAnswer = false;

        renderVocabularyFlashcard(container);
    });

    const next = document.createElement("button");

    next.type = "button";
    next.className = "vocab-flash-button";
    next.textContent = "→";

    next.addEventListener("click", () => {
        vocabFlashIndex++;

        if (
            vocabFlashIndex >=
            beginnerVocabulary.length
        ) {
            vocabFlashIndex = 0;
        }

        vocabFlashShowAnswer = false;

        renderVocabularyFlashcard(container);
    });

    actions.appendChild(previous);
    actions.appendChild(reveal);
    actions.appendChild(speak);
    actions.appendChild(next);

    container.appendChild(card);
    container.appendChild(actions);
}


/* =========================================================
   DAILY REVIEW
   ========================================================= */

function createDailyReview(container) {
    if (!container) {
        return;
    }

    const shuffled = [
        ...beginnerVocabulary
    ].sort(() => Math.random() - 0.5);

    const selected = shuffled.slice(0, 5);

    container.innerHTML = `
        <div class="daily-review-heading">
            ทบทวนวันนี้
        </div>

        <div class="daily-review-subtitle">
            ลองอ่านคำศัพท์ 5 คำนี้โดยไม่เปิดโรมาจิก่อน
        </div>
    `;

    selected.forEach(item => {
        const row = document.createElement("div");

        row.className = "daily-review-row";

        row.innerHTML = `
            <div class="daily-review-word">
                ${item.jp}
            </div>

            <button
                type="button"
                class="daily-review-reveal"
            >
                ดูคำตอบ
            </button>

            <div class="daily-review-answer">
                ${item.romaji} — ${item.thai}
            </div>
        `;

        const button =
            row.querySelector(
                ".daily-review-reveal"
            );

        const answer =
            row.querySelector(
                ".daily-review-answer"
            );

        answer.hidden = true;

        button.addEventListener("click", () => {
            answer.hidden = !answer.hidden;

            button.textContent =
                answer.hidden
                    ? "ดูคำตอบ"
                    : "ซ่อนคำตอบ";
        });

        container.appendChild(row);
    });
}


/* =========================================================
   COURSE INIT EXTENSION
   ========================================================= */

function initializePart2Tools() {
    const randomPractice =
        document.querySelector(
            "#randomKanaPractice"
        );

    if (randomPractice) {
        createRandomKanaPractice(
            randomPractice
        );
    }

    const flashContainer =
        document.querySelector(
            "#kanaFlashReview"
        );

    if (flashContainer) {
        renderKanaFlash(flashContainer);
    }

    const kanaSearch =
        document.querySelector(
            "#kanaSearch"
        );

    if (kanaSearch) {
        createKanaSearch(kanaSearch);
    }

    const memory =
        document.querySelector(
            "#kanaMemoryGame"
        );

    if (memory) {
        createKanaMemoryGame(memory);
    }

    const vocabulary =
        document.querySelector(
            "#vocabularyFlashcards"
        );

    if (vocabulary) {
        createVocabularyFlashcards(
            vocabulary
        );
    }

    const dailyReview =
        document.querySelector(
            "#dailyReview"
        );

    if (dailyReview) {
        createDailyReview(dailyReview);
    }
}


/* =========================================================
   LESSON OBJECTIVE RENDERER
   ========================================================= */

function renderLessonObjectives(lesson) {
    const wrapper =
        document.createElement("div");

    wrapper.className =
        "lesson-objectives";

    const heading =
        document.createElement("div");

    heading.className =
        "objectives-heading";

    heading.textContent =
        "เมื่อจบบทนี้ เราจะทำได้";

    const list =
        document.createElement("ul");

    list.className =
        "objectives-list";

    (lesson.objectives || []).forEach(
        objective => {
            const item =
                document.createElement("li");

            item.textContent =
                objective;

            list.appendChild(item);
        }
    );

    wrapper.appendChild(heading);
    wrapper.appendChild(list);

    return wrapper;
}


/* =========================================================
   LESSON HEADER EXTENSION
   ========================================================= */

const originalRenderLessonForObjectives =
    renderLesson;

renderLesson = function(id) {
    originalRenderLessonForObjectives(id);

    const lesson =
        getLessonById(id);

    if (!lesson || !lessonPage) {
        return;
    }

    const main =
        lessonPage.querySelector(
            ".lesson-main"
        );

    if (!main) {
        return;
    }

    const oldObjectives =
        main.querySelector(
            ".lesson-objectives"
        );

    if (oldObjectives) {
        oldObjectives.remove();
    }

    const header =
        main.querySelector(
            ".lesson-header"
        );

    if (header) {
        header.insertAdjacentElement(
            "afterend",
            renderLessonObjectives(lesson)
        );
    }
};


/* =========================================================
   COURSE START BUTTON — EXTENSION
   ========================================================= */

function startFromFirstIncomplete() {
    const completed =
        getCompletedLessons();

    const next =
        lessons.find(
            lesson => !completed.includes(lesson.id)
        );

    if (next) {
        renderLesson(next.id);
    } else {
        renderLesson(
            lessons[lessons.length - 1].id
        );
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   MOBILE LESSON MENU
   ========================================================= */

function setupMobileLessonMenu() {
    const toggle =
        document.querySelector(
            ".lesson-menu-toggle"
        );

    const sidebar =
        document.querySelector(
            ".sidebar"
        );

    if (!toggle || !sidebar) {
        return;
    }

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            sidebar.classList.contains("open")
                ? "true"
                : "false"
        );
    });

    sidebar.addEventListener("click", event => {
        if (
            event.target.closest(
                ".lesson-item"
            )
        ) {
            sidebar.classList.remove("open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
}


/* =========================================================
   LESSON AUTOSAVE
   ========================================================= */

function saveCurrentLesson() {
    localStorage.setItem(
        "jpNotebookCurrentLesson",
        String(currentLesson)
    );
}


function restoreCurrentLesson() {
    const saved =
        Number(
            localStorage.getItem(
                "jpNotebookCurrentLesson"
            )
        );

    if (
        Number.isFinite(saved) &&
        lessons.some(
            lesson => lesson.id === saved
        )
    ) {
        return saved;
    }

    return 1;
}


/* =========================================================
   TRACK CURRENT LESSON
   ========================================================= */

const originalRenderLessonForAutosave =
    renderLesson;

renderLesson = function(id) {
    originalRenderLessonForAutosave(id);

    saveCurrentLesson();

    const page =
        document.querySelector(
            ".lesson-page"
        );

    if (page) {
        page.classList.remove(
            "lesson-enter"
        );

        void page.offsetWidth;

        page.classList.add(
            "lesson-enter"
        );
    }
};


/* FINAL INIT MOVED TO DOMContentLoaded ABOVE */


/* =========================================================
   PART 2 END
   ========================================================= */
  /* END OF PART 1 PART 2 CONTINUES AFTER THIS POINT */

lessons.push(
  {
    id: 12,
    title: "ตัว ん และเสียง n",
    subtitle: "Hiragana ตัวสุดท้าย",
    icon: "ん",
    category: "Hiragana",
    objectives: [
      "รู้จัก ん",
      "เข้าใจว่า ん แตกต่างจาก なにぬねの",
      "ฝึกอ่านคำที่มี ん",
      "เข้าใจการออกเสียง ん เบื้องต้น"
    ],
    sections: [

      {
        type: "text",
        title: "ในที่สุดก็เจอ ん",
        content: `
          <p>
            <strong>ん</strong> เป็นฮิรางานะพิเศษ
            เพราะไม่ได้แทนเสียงพยางค์แบบ
            ka, ki, ku หรือ sa, shi, su
          </p>

          <div class="formula-box">
            ん = n
          </div>

          <p>
            ตัวนี้มักใช้แทนเสียงพยัญชนะนาสิก
            และสามารถอยู่กลางหรือท้ายคำได้
          </p>

          <p>
            เช่น
            <strong>ほん</strong> อ่านว่า <strong>hon</strong>
            หมายถึง “หนังสือ”
          </p>
        `
      },

      {
        type: "kana",
        title: "ตัวอักษร ん",
        items: [
          {
            char: "ん",
            romaji: "n",
            thai: "น / ง ตามตำแหน่ง",
            example: "ほん",
            meaning: "หนังสือ"
          }
        ]
      },

      {
        type: "note",
        title: "ん ไม่เหมือน な",
        content: `
          <p>
            จุดที่มือใหม่มักสับสนคือ
            <strong>ん</strong> กับ
            <strong>な</strong>
          </p>

          <div class="kana-row">
            <span>ん</span>
            <span>な</span>
          </div>

          <p>
            <strong>な = na</strong>
            แต่
            <strong>ん = n</strong>
          </p>

          <p>
            เพราะฉะนั้น
          </p>

          <div class="formula-box">
            な = na<br>
            ん = n
          </div>

          <p>
            เช่น
            <strong>ねこ</strong> = neko<br>
            แต่
            <strong>ほん</strong> = hon
          </p>
        `
      },

      {
        type: "script",
        title: "ฝึกเขียน ん",
        items: [
          {
            char: "ん",
            romaji: "n",
            strokes: 1,
            tip: "เป็นเส้นเดียว ลากให้โค้งอย่างเป็นธรรมชาติ"
          }
        ]
      },

      {
        type: "vocab",
        title: "คำศัพท์ที่มี ん",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮง / ฮน",
            meaning: "หนังสือ"
          },
          {
            jp: "にほん",
            reading: "nihon",
            thai: "นิฮง",
            meaning: "ประเทศญี่ปุ่น"
          },
          {
            jp: "さん",
            reading: "san",
            thai: "ซัง / ซัน",
            meaning: "สาม / คำเรียกต่อท้ายชื่อ"
          },
          {
            jp: "みんな",
            reading: "minna",
            thai: "มินนะ",
            meaning: "ทุกคน"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซนเซ",
            meaning: "ครู / อาจารย์"
          }
        ]
      },

      {
        type: "example",
        title: "แยกเสียง ほん",
        content: `
          <div class="jp-example">
            <span class="jp-big">ほん</span>
            <span class="jp-romaji">hon</span>
            <span class="jp-thai">ฮน / ฮง</span>
          </div>

          <p>
            ほ = ho<br>
            ん = n
          </p>

          <p>
            รวมกันเป็น <strong>hon</strong>
            หมายถึง “หนังสือ”
          </p>

          <p>
            ในการพูดจริง เสียง ん สามารถเปลี่ยนลักษณะเล็กน้อย
            ตามเสียงที่อยู่ข้าง ๆ ดังนั้นช่วงแรกไม่ต้องกังวล
            เรื่องความแตกต่างของเสียงมากเกินไป
          </p>
        `
      },

      {
        type: "practice",
        question: "ตัวใดออกเสียงเป็น n?",
        choices: [
          "な",
          "に",
          "ん",
          "ね"
        ],
        answer: 2,
        explanation: "ん = n"
      },

      {
        type: "practice",
        question: "คำว่า ほん อ่านว่าอะไร?",
        choices: [
          "hona",
          "honi",
          "hon",
          "hono"
        ],
        answer: 2,
        explanation: "ほ = ho และ ん = n จึงอ่านว่า hon"
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “หนังสือ”?",
        choices: [
          "ほん",
          "ほし",
          "はな",
          "ひと"
        ],
        answer: 0,
        explanation: "ほん = hon หมายถึง หนังสือ"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ฉันรู้จัก ん",
          "ฉันแยก ん กับ な ได้",
          "ฉันอ่าน ほん ได้",
          "ฉันเข้าใจว่าเสียง ん อาจเปลี่ยนลักษณะเล็กน้อยตามเสียงรอบข้าง"
        ]
      }
    ]
  },

  {
    id: 13,
    title: "ทบทวนฮิรางานะทั้งหมด",
    subtitle: "จาก あ ถึง ん",
    icon: "あ",
    category: "Review",
    objectives: [
      "ทบทวนฮิรางานะพื้นฐานทั้งหมด",
      "อ่านตัวอักษรโดยไม่พึ่งโรมาจิมากเกินไป",
      "ฝึกอ่านคำศัพท์จากหลายแถวรวมกัน",
      "ตรวจจุดที่ยังจำไม่ได้ก่อนเข้าสู่บทถัดไป"
    ],
    sections: [

      {
        type: "text",
        title: "ถึงเวลารวมทุกอย่างเข้าด้วยกัน",
        content: `
          <p>
            ตอนนี้เราเรียนฮิรางานะพื้นฐานมาครบแล้ว
            ตั้งแต่ <strong>あ</strong> จนถึง <strong>ん</strong>
          </p>

          <p>
            เป้าหมายของบทนี้ไม่ใช่แค่ท่องตาราง
            แต่คือการมองตัวอักษรแล้วพยายามอ่านออกมา
            โดยไม่ต้องแปลงเป็นโรมาจิทีละตัว
          </p>

          <p>
            ถ้ายังจำไม่ได้ทั้งหมดไม่เป็นไร
            ให้ใช้บทนี้หาตัวที่ยังสับสน แล้วกลับไปทบทวน
          </p>
        `
      },

      {
        type: "kana",
        title: "ตารางฮิรางานะพื้นฐาน",
        items: [
          { char:"あ", romaji:"a", thai:"อะ", example:"あさ", meaning:"ตอนเช้า" },
          { char:"い", romaji:"i", thai:"อิ", example:"いえ", meaning:"บ้าน" },
          { char:"う", romaji:"u", thai:"อุ", example:"うみ", meaning:"ทะเล" },
          { char:"え", romaji:"e", thai:"เอะ", example:"えき", meaning:"สถานี" },
          { char:"お", romaji:"o", thai:"โอะ", example:"おちゃ", meaning:"ชา" },

          { char:"か", romaji:"ka", thai:"คะ", example:"かお", meaning:"ใบหน้า" },
          { char:"き", romaji:"ki", thai:"คิ", example:"き", meaning:"ต้นไม้" },
          { char:"く", romaji:"ku", thai:"คุ", example:"くち", meaning:"ปาก" },
          { char:"け", romaji:"ke", thai:"เคะ", example:"けしき", meaning:"ทิวทัศน์" },
          { char:"こ", romaji:"ko", thai:"โคะ", example:"ここ", meaning:"ที่นี่" },

          { char:"さ", romaji:"sa", thai:"สะ", example:"さかな", meaning:"ปลา" },
          { char:"し", romaji:"shi", thai:"ชิ", example:"しお", meaning:"เกลือ" },
          { char:"す", romaji:"su", thai:"สุ", example:"すし", meaning:"ซูชิ" },
          { char:"せ", romaji:"se", thai:"เสะ", example:"せかい", meaning:"โลก" },
          { char:"そ", romaji:"so", thai:"โสะ", example:"そら", meaning:"ท้องฟ้า" },

          { char:"た", romaji:"ta", thai:"ทะ", example:"たこ", meaning:"ปลาหมึก / ว่าว" },
          { char:"ち", romaji:"chi", thai:"จิ", example:"ちず", meaning:"แผนที่" },
          { char:"つ", romaji:"tsu", thai:"สึ", example:"つき", meaning:"พระจันทร์" },
          { char:"て", romaji:"te", thai:"เทะ", example:"て", meaning:"มือ" },
          { char:"と", romaji:"to", thai:"โทะ", example:"とり", meaning:"นก" },

          { char:"な", romaji:"na", thai:"นะ", example:"なつ", meaning:"ฤดูร้อน" },
          { char:"に", romaji:"ni", thai:"นิ", example:"にく", meaning:"เนื้อ" },
          { char:"ぬ", romaji:"nu", thai:"นุ", example:"ぬの", meaning:"ผ้า" },
          { char:"ね", romaji:"ne", thai:"เนะ", example:"ねこ", meaning:"แมว" },
          { char:"の", romaji:"no", thai:"โนะ", example:"のむ", meaning:"ดื่ม" },

          { char:"は", romaji:"ha", thai:"ฮะ", example:"はな", meaning:"ดอกไม้" },
          { char:"ひ", romaji:"hi", thai:"ฮิ", example:"ひ", meaning:"ไฟ" },
          { char:"ふ", romaji:"fu", thai:"ฟุ", example:"ふゆ", meaning:"ฤดูหนาว" },
          { char:"へ", romaji:"he", thai:"เฮะ", example:"へや", meaning:"ห้อง" },
          { char:"ほ", romaji:"ho", thai:"โฮะ", example:"ほし", meaning:"ดาว" },

          { char:"ま", romaji:"ma", thai:"มะ", example:"まめ", meaning:"ถั่ว" },
          { char:"み", romaji:"mi", thai:"มิ", example:"みみ", meaning:"หู" },
          { char:"む", romaji:"mu", thai:"มุ", example:"むし", meaning:"แมลง" },
          { char:"め", romaji:"me", thai:"เมะ", example:"め", meaning:"ตา" },
          { char:"も", romaji:"mo", thai:"โมะ", example:"もも", meaning:"ลูกพีช" },

          { char:"や", romaji:"ya", thai:"ยะ", example:"やま", meaning:"ภูเขา" },
          { char:"ゆ", romaji:"yu", thai:"ยุ", example:"ゆき", meaning:"หิมะ" },
          { char:"よ", romaji:"yo", thai:"โยะ", example:"よる", meaning:"กลางคืน" },

          { char:"ら", romaji:"ra", thai:"ระ", example:"らく", meaning:"สบาย / ง่าย" },
          { char:"り", romaji:"ri", thai:"ริ", example:"りんご", meaning:"แอปเปิล" },
          { char:"る", romaji:"ru", thai:"รุ", example:"さる", meaning:"ลิง" },
          { char:"れ", romaji:"re", thai:"เระ", example:"これ", meaning:"สิ่งนี้" },
          { char:"ろ", romaji:"ro", thai:"โระ", example:"ろく", meaning:"หก" },

          { char:"わ", romaji:"wa", thai:"วะ", example:"わたし", meaning:"ฉัน" },
          { char:"を", romaji:"wo", thai:"โอะ", example:"みずを", meaning:"คำช่วย" },
          { char:"ん", romaji:"n", thai:"น", example:"ほん", meaning:"หนังสือ" }
        ]
      },

      {
        type: "note",
        title: "วิธีทบทวนให้จำจริง",
        content: `
          <p>
            รอบแรกให้ลองอ่านตัวอักษรจากซ้ายไปขวา
            โดยปิดส่วน romaji เอาไว้ถ้าทำได้
          </p>

          <p>
            จากนั้นลองสุ่มตัวอักษรในใจ เช่น
            <strong>ぬ → へ → り → つ → め</strong>
            แล้วพูดเสียงออกมา
          </p>

          <p>
            ถ้าตัวไหนต้องหยุดคิดนาน แปลว่าตัวนั้นควรกลับไปฝึกเพิ่ม
          </p>
        `
      },

      {
        type: "vocab",
        title: "อ่านคำผสม",
        items: [
          {
            jp: "ねこ",
            reading: "neko",
            thai: "เนะโกะ",
            meaning: "แมว"
          },
          {
            jp: "すし",
            reading: "sushi",
            thai: "ซุชิ",
            meaning: "ซูชิ"
          },
          {
            jp: "やま",
            reading: "yama",
            thai: "ยะมะ",
            meaning: "ภูเขา"
          },
          {
            jp: "りんご",
            reading: "ringo",
            thai: "ริงโกะ",
            meaning: "แอปเปิล"
          },
          {
            jp: "わたし",
            reading: "watashi",
            thai: "วะตะชิ",
            meaning: "ฉัน / ผม"
          },
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮน / ฮง",
            meaning: "หนังสือ"
          },
          {
            jp: "ふゆ",
            reading: "fuyu",
            thai: "ฟุยุ",
            meaning: "ฤดูหนาว"
          },
          {
            jp: "そら",
            reading: "sora",
            thai: "โสะระ",
            meaning: "ท้องฟ้า"
          }
        ]
      },

      {
        type: "example",
        title: "ลองอ่านโดยไม่ดูคำอ่าน",
        content: `
          <div class="jp-example">
            <span class="jp-big">わたしは ねこが すき</span>
            <span class="jp-romaji">watashi wa neko ga suki</span>
            <span class="jp-thai">ฉันชอบแมว</span>
          </div>

          <p>
            ในตัวอย่างนี้เรามีตัวอักษรที่เรียนมาแล้วหลายแถว
            รวมถึง は ที่จะได้เรียนหน้าที่ทางไวยากรณ์อย่างละเอียด
            ในบทต่อไป
          </p>

          <p>
            ตอนนี้ยังไม่ต้องจำไวยากรณ์ทั้งหมด
            ให้โฟกัสที่การมองตัวอักษรและอ่านเสียงก่อน
          </p>
        `
      },

      {
        type: "practice",
        question: "ตัวใดอ่านว่า shi?",
        choices: [
          "さ",
          "し",
          "す",
          "せ"
        ],
        answer: 1,
        explanation: "し = shi"
      },

      {
        type: "practice",
        question: "ตัวใดอ่านว่า tsu?",
        choices: [
          "ち",
          "て",
          "つ",
          "と"
        ],
        answer: 2,
        explanation: "つ = tsu"
      },

      {
        type: "practice",
        question: "ตัวใดอ่านว่า fu?",
        choices: [
          "は",
          "ひ",
          "ふ",
          "へ"
        ],
        answer: 2,
        explanation: "ふ = fu"
      },

      {
        type: "practice",
        question: "ข้อใดอ่านว่า watashi?",
        choices: [
          "わたし",
          "わたち",
          "われし",
          "わてし"
        ],
        answer: 0,
        explanation: "わたし = wa + ta + shi = watashi"
      },

      {
        type: "practice",
        question: "ข้อใดอ่านว่า neko?",
        choices: [
          "ぬこ",
          "ねこ",
          "のこ",
          "にこ"
        ],
        answer: 1,
        explanation: "ね = ne และ こ = ko จึงเป็น neko"
      },

      {
        type: "practice",
        question: "ข้อใดอ่านว่า yuki?",
        choices: [
          "やき",
          "ゆき",
          "よき",
          "ゆけ"
        ],
        answer: 1,
        explanation: "ゆ = yu และ き = ki จึงเป็น yuki"
      },

      {
        type: "practice",
        question: "ข้อใดมีตัว ん?",
        choices: [
          "ねこ",
          "やま",
          "ほん",
          "すし"
        ],
        answer: 2,
        explanation: "ほん มีตัว ん อยู่ท้ายคำ"
      },

      {
        type: "check",
        title: "จบช่วงฮิรางานะพื้นฐาน",
        items: [
          "ฉันจำฮิรางานะพื้นฐานได้เกือบทั้งหมด",
          "ฉันสามารถอ่านคำง่าย ๆ โดยไม่ต้องสะกดทีละตัว",
          "ฉันแยกตัวที่มักสับสน เช่น ぬ・ね・れ ได้ดีขึ้น",
          "ฉันรู้จัก わ・を・ん",
          "ฉันพร้อมเริ่มเรื่องเสียงพิเศษและการผสมเสียง"
        ]
      }
    ]
  }
);
  lessons.push(
  {
    id: 14,
    title: "เสียงขุ่น ゛",
    subtitle: "Dakuten — が ざ だ ば",
    icon: "゛",
    category: "Hiragana",
    objectives: [
      "รู้จักเครื่องหมาย ゛ หรือ Dakuten",
      "เข้าใจว่าการเติม ゛ ทำให้เสียงของตัวอักษรเปลี่ยนอย่างไร",
      "อ่านแถว が ざ だ ば ได้",
      "แยกเสียงใสกับเสียงขุ่นได้"
    ],
    sections: [

      {
        type: "text",
        title: "ตัวอักษรเปลี่ยนเสียงได้",
        content: `
          <p>
            ตอนนี้เรารู้จักฮิรางานะพื้นฐานแล้ว
            แต่ภาษาญี่ปุ่นยังมีวิธีทำให้เสียงบางตัวเปลี่ยนไปอีก
          </p>

          <p>
            หนึ่งในวิธีนั้นคือการเติมเครื่องหมาย
            <strong>゛</strong> ที่เรียกว่า
            <strong>濁点 (だくてん / dakuten)</strong>
          </p>

          <p>
            เครื่องหมายนี้จะทำให้เสียงบางแถวกลายเป็น
            “เสียงขุ่น” เช่น
          </p>

          <div class="formula-box">
            か → が<br>
            さ → ざ<br>
            た → だ<br>
            は → ば
          </div>
        `
      },

      {
        type: "kana",
        title: "เสียงขุ่นชุดแรก",
        items: [
          {
            char: "が",
            romaji: "ga",
            thai: "กะ / กา",
            example: "がくせい",
            meaning: "นักเรียน"
          },
          {
            char: "ぎ",
            romaji: "gi",
            thai: "กิ",
            example: "ぎんこう",
            meaning: "ธนาคาร"
          },
          {
            char: "ぐ",
            romaji: "gu",
            thai: "กุ",
            example: "ぐん",
            meaning: "กองทัพ"
          },
          {
            char: "げ",
            romaji: "ge",
            thai: "เกะ",
            example: "げんき",
            meaning: "แข็งแรง / สบายดี"
          },
          {
            char: "ご",
            romaji: "go",
            thai: "โกะ",
            example: "ごご",
            meaning: "ตอนบ่าย"
          }
        ]
      },

      {
        type: "note",
        title: "จำกฎของ Dakuten",
        content: `
          <p>
            แถว か เมื่อเติม ゛ จะกลายเป็นแถว が
          </p>

          <div class="formula-box">
            か → が　ka → ga<br>
            き → ぎ　ki → gi<br>
            く → ぐ　ku → gu<br>
            け → げ　ke → ge<br>
            こ → ご　ko → go
          </div>

          <p>
            สังเกตว่ารูปร่างหลักของตัวอักษรยังคงเดิม
            เพียงเติมเครื่องหมายเล็ก ๆ ด้านบน
          </p>
        `
      },

      {
        type: "script",
        title: "ฝึกสังเกตตัวอักษร",
        items: [
          {
            char: "が",
            romaji: "ga",
            strokes: 3,
            tip: "มาจาก か แล้วเติม ゛"
          },
          {
            char: "ぎ",
            romaji: "gi",
            strokes: 4,
            tip: "จำรูป き ก่อน แล้วสังเกตเครื่องหมายสองขีด"
          },
          {
            char: "ぐ",
            romaji: "gu",
            strokes: 3,
            tip: "ぐ คือ く + ゛"
          },
          {
            char: "げ",
            romaji: "ge",
            strokes: 3,
            tip: "สังเกตส่วน ゛ ด้านบน"
          },
          {
            char: "ご",
            romaji: "go",
            strokes: 3,
            tip: "ご คือ こ + ゛"
          }
        ]
      },

      {
        type: "vocab",
        title: "คำศัพท์ที่เจอบ่อย",
        items: [
          {
            jp: "がくせい",
            reading: "gakusei",
            thai: "กักเซ",
            meaning: "นักเรียน"
          },
          {
            jp: "ぎんこう",
            reading: "ginkou",
            thai: "กิงโค",
            meaning: "ธนาคาร"
          },
          {
            jp: "げんき",
            reading: "genki",
            thai: "เกงคิ",
            meaning: "แข็งแรง / สบายดี"
          },
          {
            jp: "ごご",
            reading: "gogo",
            thai: "โกะโกะ",
            meaning: "ตอนบ่าย"
          },
          {
            jp: "かぎ",
            reading: "kagi",
            thai: "คะงิ",
            meaning: "กุญแจ"
          }
        ]
      },

      {
        type: "example",
        title: "เปรียบเทียบเสียงใสกับเสียงขุ่น",
        content: `
          <div class="jp-example">
            <span class="jp-big">か → が</span>
            <span class="jp-romaji">ka → ga</span>
            <span class="jp-thai">คะ → กะ</span>
          </div>

          <p>
            ตัวอักษรเดิมคือ <strong>か</strong>
            เมื่อเติม ゛ จะกลายเป็น <strong>が</strong>
          </p>

          <p>
            เพราะฉะนั้นเวลาเห็นเครื่องหมาย ゛
            อย่าอ่านเป็นตัวเดิม
            ต้องตรวจดูก่อนว่าเสียงเปลี่ยนเป็นอะไร
          </p>
        `
      },

      {
        type: "practice",
        question: "が มาจากตัวอักษรใด?",
        choices: [
          "さ",
          "か",
          "た",
          "は"
        ],
        answer: 1,
        explanation: "が = か + ゛"
      },

      {
        type: "practice",
        question: "ぎ อ่านว่าอะไร?",
        choices: [
          "ki",
          "gi",
          "ge",
          "gu"
        ],
        answer: 1,
        explanation: "ぎ = gi"
      },

      {
        type: "practice",
        question: "คำว่า がくせい อ่านว่าอะไร?",
        choices: [
          "gakusei",
          "gakuse",
          "kakusei",
          "gakushi"
        ],
        answer: 0,
        explanation: "がくせい = ga-ku-se-i = gakusei"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ฉันรู้จักเครื่องหมาย ゛",
          "ฉันเข้าใจว่า か เปลี่ยนเป็น が ได้",
          "ฉันอ่าน がぎぐげご ได้",
          "ฉันรู้ว่าเสียงขุ่นต่างจากเสียงใส"
        ]
      }
    ]
  },

  {
    id: 15,
    title: "แถว ざじずぜぞ",
    subtitle: "เสียง za ji zu ze zo",
    icon: "ざ",
    category: "Dakuten",
    objectives: [
      "รู้จักแถว ざじずぜぞ",
      "เข้าใจการเปลี่ยนจาก さしすせそ เป็นเสียงขุ่น",
      "ฝึกอ่าน じ และแยกจาก し",
      "อ่านคำศัพท์พื้นฐานที่มีเสียง z และ j"
    ],
    sections: [

      {
        type: "text",
        title: "จาก さ กลายเป็น ざ",
        content: `
          <p>
            เมื่อเติม Dakuten ให้กับแถว さ
            จะเกิดเสียงขุ่นชุดใหม่
          </p>

          <div class="formula-box">
            さ → ざ<br>
            し → じ<br>
            す → ず<br>
            せ → ぜ<br>
            そ → ぞ
          </div>

          <p>
            เสียงที่ได้คือ
            <strong>za, ji, zu, ze, zo</strong>
          </p>
        `
      },

      {
        type: "kana",
        title: "ตัวอักษรแถว ざ",
        items: [
          {
            char: "ざ",
            romaji: "za",
            thai: "ซะ / ซา",
            example: "ざっし",
            meaning: "นิตยสาร"
          },
          {
            char: "じ",
            romaji: "ji",
            thai: "จิ",
            example: "じかん",
            meaning: "เวลา"
          },
          {
            char: "ず",
            romaji: "zu",
            thai: "ซุ",
            example: "みず",
            meaning: "น้ำ"
          },
          {
            char: "ぜ",
            romaji: "ze",
            thai: "เซะ",
            example: "ぜんぶ",
            meaning: "ทั้งหมด"
          },
          {
            char: "ぞ",
            romaji: "zo",
            thai: "โซะ",
            example: "ぞう",
            meaning: "ช้าง"
          }
        ]
      },

      {
        type: "note",
        title: "จุดที่ต้องระวัง: し กับ じ",
        content: `
          <p>
            มือใหม่มักสับสนสองตัวนี้มาก
          </p>

          <div class="kana-row">
            <span>し</span>
            <span>じ</span>
          </div>

          <p>
            <strong>し = shi</strong>
          </p>

          <p>
            <strong>じ = ji</strong>
          </p>

          <p>
            ให้มองหาเครื่องหมาย ゛ บน じ
            ถ้ามีเครื่องหมายนี้ เสียงจะเปลี่ยน
          </p>

          <div class="formula-box">
            し = shi<br>
            じ = ji
          </div>
        `
      },

      {
        type: "script",
        title: "ฝึกเขียนแถว ざ",
        items: [
          {
            char: "ざ",
            romaji: "za",
            strokes: 3,
            tip: "เขียน さ ก่อน แล้วเติม ゛"
          },
          {
            char: "じ",
            romaji: "ji",
            strokes: 3,
            tip: "จำว่า じ คือ し ที่มีเครื่องหมาย ゛"
          },
          {
            char: "ず",
            romaji: "zu",
            strokes: 3,
            tip: "มาจาก す + ゛"
          },
          {
            char: "ぜ",
            romaji: "ze",
            strokes: 3,
            tip: "สังเกตเครื่องหมายด้านบน"
          },
          {
            char: "ぞ",
            romaji: "zo",
            strokes: 3,
            tip: "มาจาก そ + ゛"
          }
        ]
      },

      {
        type: "vocab",
        title: "คำศัพท์พื้นฐาน",
        items: [
          {
            jp: "じかん",
            reading: "jikan",
            thai: "จิคัง",
            meaning: "เวลา"
          },
          {
            jp: "みず",
            reading: "mizu",
            thai: "มิซุ",
            meaning: "น้ำ"
          },
          {
            jp: "ぞう",
            reading: "zou",
            thai: "โซ",
            meaning: "ช้าง"
          },
          {
            jp: "ぜんぶ",
            reading: "zenbu",
            thai: "เซมบุ",
            meaning: "ทั้งหมด"
          },
          {
            jp: "ざっし",
            reading: "zasshi",
            thai: "ซัชชิ",
            meaning: "นิตยสาร"
          }
        ]
      },

      {
        type: "example",
        title: "มอง じかん แล้วแยกเสียง",
        content: `
          <div class="jp-example">
            <span class="jp-big">じかん</span>
            <span class="jp-romaji">jikan</span>
            <span class="jp-thai">จิคัง</span>
          </div>

          <p>
            じ = ji<br>
            か = ka<br>
            ん = n
          </p>

          <p>
            รวมเป็น <strong>ji-ka-n</strong>
            หรือ <strong>jikan</strong>
          </p>

          <p>
            คำนี้หมายถึง “เวลา”
            และเป็นคำที่เจอบ่อยมากในภาษาญี่ปุ่น
          </p>
        `
      },

      {
        type: "practice",
        question: "じ อ่านว่าอะไร?",
        choices: [
          "shi",
          "ji",
          "za",
          "zu"
        ],
        answer: 1,
        explanation: "じ = ji"
      },

      {
        type: "practice",
        question: "ตัวใดเป็นเสียงขุ่นของ し?",
        choices: [
          "じ",
          "ず",
          "ぜ",
          "ぞ"
        ],
        answer: 0,
        explanation: "し + ゛ = じ"
      },

      {
        type: "practice",
        question: "คำว่า みず หมายถึงอะไร?",
        choices: [
          "ไฟ",
          "น้ำ",
          "ภูเขา",
          "หนังสือ"
        ],
        answer: 1,
        explanation: "みず (mizu) หมายถึง น้ำ"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ฉันอ่าน ざじずぜぞ ได้",
          "ฉันแยก し กับ じ ได้",
          "ฉันอ่าน みず ได้",
          "ฉันรู้ว่า じかん หมายถึงเวลา"
        ]
      }
    ]
  },

  {
    id: 16,
    title: "แถว だぢづでど",
    subtitle: "เสียง da ji zu de do",
    icon: "だ",
    category: "Dakuten",
    objectives: [
      "รู้จักแถว だぢづでど",
      "เข้าใจการเปลี่ยนเสียงจาก たちつてと",
      "เรียนรู้รูปที่พบจริงบ่อยที่สุดคือ だ で ど",
      "ทำความเข้าใจ ぢ และ づ เบื้องต้น"
    ],
    sections: [

      {
        type: "text",
        title: "แถว た เมื่อเติม ゛",
        content: `
          <p>
            เมื่อเติม Dakuten ให้กับแถว た
            จะได้ชุดตัวอักษร
          </p>

          <div class="formula-box">
            た → だ<br>
            ち → ぢ<br>
            つ → づ<br>
            て → で<br>
            と → ど
          </div>

          <p>
            ในภาษาญี่ปุ่นสมัยใหม่
            <strong>だ で ど</strong>
            พบได้บ่อยกว่า <strong>ぢ づ</strong>
          </p>
        `
      },

      {
        type: "kana",
        title: "ตัวอักษรแถว だ",
        items: [
          {
            char: "だ",
            romaji: "da",
            thai: "ดะ",
            example: "だれ",
            meaning: "ใคร"
          },
          {
            char: "ぢ",
            romaji: "ji",
            thai: "จิ",
            example: "はなぢ",
            meaning: "เลือดกำเดา"
          },
          {
            char: "づ",
            romaji: "zu",
            thai: "ซุ",
            example: "つづく",
            meaning: "ดำเนินต่อ"
          },
          {
            char: "で",
            romaji: "de",
            thai: "เดะ",
            example: "でんわ",
            meaning: "โทรศัพท์"
          },
          {
            char: "ど",
            romaji: "do",
            thai: "โดะ",
            example: "どこ",
            meaning: "ที่ไหน"
          }
        ]
      },

      {
        type: "note",
        title: "ทำไม ぢ กับ づ ถึงเจอน้อย?",
        content: `
          <p>
            ในภาษาญี่ปุ่นปัจจุบัน เสียงของ
            <strong>ぢ</strong> มักใกล้เคียงกับ
            <strong>じ</strong>
          </p>

          <p>
            และ <strong>づ</strong> มักใกล้เคียงกับ
            <strong>ず</strong>
          </p>

          <div class="formula-box">
            ぢ ≈ じ<br>
            づ ≈ ず
          </div>

          <p>
            แต่ไม่ได้หมายความว่าสองคู่สามารถเขียนแทนกันได้ทุกกรณี
            เพราะการสะกดภาษาญี่ปุ่นมีกฎของมันเอง
          </p>

          <p>
            สำหรับตอนนี้ให้จำรูปร่างและเสียงไว้ก่อน
            แล้วเราจะเจอการใช้งานจริงในบทที่สูงขึ้น
          </p>
        `
      },

      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "だ",
            romaji: "da",
            strokes: 5,
            tip: "だ คือ た ที่เติมเครื่องหมาย ゛"
          },
          {
            char: "ぢ",
            romaji: "ji",
            strokes: 4,
            tip: "มาจาก ち + ゛"
          },
          {
            char: "づ",
            romaji: "zu",
            strokes: 4,
            tip: "มาจาก つ + ゛"
          },
          {
            char: "で",
            romaji: "de",
            strokes: 3,
            tip: "มาจาก て + ゛"
          },
          {
            char: "ど",
            romaji: "do",
            strokes: 3,
            tip: "มาจาก と + ゛"
          }
        ]
      },

      {
        type: "vocab",
        title: "คำที่ใช้บ่อย",
        items: [
          {
            jp: "だれ",
            reading: "dare",
            thai: "ดะเระ",
            meaning: "ใคร"
          },
          {
            jp: "でんわ",
            reading: "denwa",
            thai: "เด็นวะ",
            meaning: "โทรศัพท์"
          },
          {
            jp: "どこ",
            reading: "doko",
            thai: "โดะโกะ",
            meaning: "ที่ไหน"
          },
          {
            jp: "どう",
            reading: "dou",
            thai: "โด",
            meaning: "อย่างไร / อย่างไหน"
          },
          {
            jp: "くだもの",
            reading: "kudamono",
            thai: "คุดะโมะโนะ",
            meaning: "ผลไม้"
          }
        ]
      },

      {
        type: "example",
        title: "คำถามง่าย ๆ",
        content: `
          <div class="jp-example">
            <span class="jp-big">だれ？</span>
            <span class="jp-romaji">dare?</span>
            <span class="jp-thai">ใคร?</span>
          </div>

          <p>
            だ = da<br>
            れ = re
          </p>

          <p>
            รวมกันเป็น <strong>dare</strong>
            หมายถึง “ใคร”
          </p>

          <p>
            เราจะนำคำศัพท์พวกนี้ไปสร้างประโยคจริง
            หลังจากเรียนโครงสร้างประโยคพื้นฐานแล้ว
          </p>
        `
      },

      {
        type: "practice",
        question: "だ อ่านว่าอะไร?",
        choices: [
          "ta",
          "da",
          "de",
          "do"
        ],
        answer: 1,
        explanation: "だ = da"
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “ใคร”?",
        choices: [
          "どこ",
          "だれ",
          "どう",
          "でんわ"
        ],
        answer: 1,
        explanation: "だれ (dare) หมายถึง ใคร"
      },

      {
        type: "practice",
        question: "でんわ อ่านว่าอะไร?",
        choices: [
          "denwa",
          "denka",
          "tenwa",
          "dengwa"
        ],
        answer: 0,
        explanation: "で = de, ん = n, わ = wa จึงเป็น denwa"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ฉันรู้ว่า た เปลี่ยนเป็น だ ได้",
          "ฉันจำ だ で ど ได้",
          "ฉันเข้าใจเบื้องต้นว่า ぢ ≈ じ และ づ ≈ ず",
          "ฉันอ่าน だれ และ どこ ได้"
        ]
      }
    ]
  }
);

  lessons.push(
  {
    id: 17,
    title: "แถว ばびぶべぼ",
    subtitle: "เสียง ba bi bu be bo",
    icon: "ば",
    category: "Dakuten",
    objectives: [
      "รู้จักแถว ばびぶべぼ",
      "เข้าใจการเปลี่ยนเสียงจาก はひふへほ",
      "อ่านคำศัพท์ที่มีเสียง b ได้",
      "แยกเสียง は กับ ば ได้"
    ],
    sections: [

      {
        type: "text",
        title: "จาก は กลายเป็น ば",
        content: `
          <p>
            อีกหนึ่งแถวที่สามารถเติม Dakuten ได้คือ
            <strong>はひふへほ</strong>
          </p>

          <div class="formula-box">
            は → ば<br>
            ひ → び<br>
            ふ → ぶ<br>
            へ → べ<br>
            ほ → ぼ
          </div>

          <p>
            เสียงที่ได้คือ
            <strong>ba, bi, bu, be, bo</strong>
          </p>

          <p>
            วิธีจำง่าย ๆ คือ
            ตัวอักษรเดิมยังมีรูปร่างหลักเหมือนเดิม
            เพียงเติมเครื่องหมาย <strong>゛</strong>
          </p>
        `
      },

      {
        type: "kana",
        title: "ตัวอักษรแถว ば",
        items: [
          {
            char: "ば",
            romaji: "ba",
            thai: "บะ",
            example: "ばんごう",
            meaning: "หมายเลข"
          },
          {
            char: "び",
            romaji: "bi",
            thai: "บิ",
            example: "びょういん",
            meaning: "โรงพยาบาล"
          },
          {
            char: "ぶ",
            romaji: "bu",
            thai: "บุ",
            example: "ぶた",
            meaning: "หมู"
          },
          {
            char: "べ",
            romaji: "be",
            thai: "เบะ",
            example: "べんきょう",
            meaning: "การเรียน"
          },
          {
            char: "ぼ",
            romaji: "bo",
            thai: "โบะ",
            example: "ぼうし",
            meaning: "หมวก"
          }
        ]
      },

      {
        type: "note",
        title: "เสียง は กับ ば",
        content: `
          <p>
            ให้สังเกตเครื่องหมายด้านบนให้ดี
          </p>

          <div class="kana-row">
            <span>は</span>
            <span>ば</span>
          </div>

          <p>
            <strong>は = ha</strong>
          </p>

          <p>
            <strong>ば = ba</strong>
          </p>

          <p>
            ดังนั้นถ้าเห็น ゛ ต้องเปลี่ยนเสียงด้วย
            ไม่ใช่แค่อ่านตัวเดิมแล้วเติมเสียงเพิ่ม
          </p>
        `
      },

      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ば",
            romaji: "ba",
            strokes: 5,
            tip: "เขียน は แล้วเติม ゛"
          },
          {
            char: "び",
            romaji: "bi",
            strokes: 5,
            tip: "จำรูป ひ แล้วสังเกตเครื่องหมายด้านบน"
          },
          {
            char: "ぶ",
            romaji: "bu",
            strokes: 6,
            tip: "ระวังส่วนล่างของ ふ ก่อนเติม ゛"
          },
          {
            char: "べ",
            romaji: "be",
            strokes: 3,
            tip: "มาจาก へ + ゛"
          },
          {
            char: "ぼ",
            romaji: "bo",
            strokes: 5,
            tip: "มาจาก ほ + ゛"
          }
        ]
      },

      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ばんごう",
            reading: "bangou",
            thai: "บังโก",
            meaning: "หมายเลข"
          },
          {
            jp: "ぶた",
            reading: "buta",
            thai: "บุทะ",
            meaning: "หมู"
          },
          {
            jp: "べんきょう",
            reading: "benkyou",
            thai: "เบ็งเคียว",
            meaning: "การเรียน / เรียนหนังสือ"
          },
          {
            jp: "ぼうし",
            reading: "boushi",
            thai: "โบชิ",
            meaning: "หมวก"
          },
          {
            jp: "えび",
            reading: "ebi",
            thai: "เอบิ",
            meaning: "กุ้ง"
          }
        ]
      },

      {
        type: "example",
        title: "คำว่า べんきょう",
        content: `
          <div class="jp-example">
            <span class="jp-big">べんきょう</span>
            <span class="jp-romaji">benkyou</span>
            <span class="jp-thai">เบ็งเคียว</span>
          </div>

          <p>
            คำนี้หมายถึง <strong>การเรียน / เรียนหนังสือ</strong>
          </p>

          <p>
            べ = be<br>
            ん = n<br>
            き = ki<br>
            ょ = เสียง yo ขนาดเล็ก
          </p>

          <p>
            ตัว <strong>ょ</strong> ในคำนี้เป็นตัวเล็ก
            ซึ่งเราจะเรียนเรื่องเสียงผสมอย่างละเอียดในบทต่อไป
          </p>
        `
      },

      {
        type: "practice",
        question: "ば มาจากตัวใด?",
        choices: [
          "は",
          "ひ",
          "ふ",
          "ほ"
        ],
        answer: 0,
        explanation: "ば = は + ゛"
      },

      {
        type: "practice",
        question: "ぶ อ่านว่าอะไร?",
        choices: [
          "bu",
          "ba",
          "be",
          "bo"
        ],
        answer: 0,
        explanation: "ぶ = bu"
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “หมู”?",
        choices: [
          "ぶた",
          "ぼうし",
          "ばんごう",
          "えび"
        ],
        answer: 0,
        explanation: "ぶた (buta) หมายถึง หมู"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ฉันจำ ばびぶべぼ ได้",
          "ฉันแยก は กับ ば ได้",
          "ฉันอ่าน ぶた ได้",
          "ฉันเข้าใจว่าตัวเล็กใน べんきょう จะเกี่ยวกับเสียงผสม"
        ]
      }
    ]
  },

  {
    id: 18,
    title: "เสียงกึ่งขุ่น ゜",
    subtitle: "Handakuten — ぱぴぷぺぽ",
    icon: "゜",
    category: "Handakuten",
    objectives: [
      "รู้จักเครื่องหมาย ゜ หรือ Handakuten",
      "เข้าใจการเปลี่ยน はひふへほ เป็น ぱぴぷぺぽ",
      "อ่านเสียง pa pi pu pe po ได้",
      "แยก ば กับ ぱ ได้"
    ],
    sections: [

      {
        type: "text",
        title: "จาก は ไปถึง ぱ",
        content: `
          <p>
            นอกจากเครื่องหมาย ゛ แล้ว
            ภาษาญี่ปุ่นยังมีเครื่องหมายอีกแบบหนึ่งคือ
            <strong>゜</strong>
          </p>

          <p>
            เรียกว่า <strong>半濁点 (はんだくてん / handakuten)</strong>
          </p>

          <p>
            เมื่อนำไปใส่กับแถว は
            จะเปลี่ยนเสียงเป็น p
          </p>

          <div class="formula-box">
            は → ぱ<br>
            ひ → ぴ<br>
            ふ → ぷ<br>
            へ → ぺ<br>
            ほ → ぽ
          </div>
        `
      },

      {
        type: "kana",
        title: "แถว ぱ",
        items: [
          {
            char: "ぱ",
            romaji: "pa",
            thai: "ปะ",
            example: "ぱん",
            meaning: "ขนมปัง"
          },
          {
            char: "ぴ",
            romaji: "pi",
            thai: "ปิ",
            example: "えんぴつ",
            meaning: "ดินสอ"
          },
          {
            char: "ぷ",
            romaji: "pu",
            thai: "ปุ",
            example: "ぷりん",
            meaning: "พุดดิ้ง"
          },
          {
            char: "ぺ",
            romaji: "pe",
            thai: "เปะ",
            example: "ぺん",
            meaning: "ปากกา"
          },
          {
            char: "ぽ",
            romaji: "po",
            thai: "โปะ",
            example: "ぽかぽか",
            meaning: "อบอุ่น"
          }
        ]
      },

      {
        type: "note",
        title: "゛ กับ ゜ ต่างกัน",
        content: `
          <p>
            ตอนนี้เรามีเครื่องหมายสองแบบแล้ว
          </p>

          <div class="formula-box">
            ゛ = Dakuten<br>
            ゜ = Handakuten
          </div>

          <p>
            สำหรับแถว は เราจะได้สองกลุ่ม
          </p>

          <div class="formula-box">
            は → ば　เสียง b<br>
            は → ぱ　เสียง p
          </div>

          <p>
            เช่น
            <strong>ば</strong> = ba
            แต่
            <strong>ぱ</strong> = pa
          </p>
        `
      },

      {
        type: "script",
        title: "ฝึกเขียนตัวเสียง p",
        items: [
          {
            char: "ぱ",
            romaji: "pa",
            strokes: 5,
            tip: "เขียน は แล้วเติมวงกลม ゜"
          },
          {
            char: "ぴ",
            romaji: "pi",
            strokes: 5,
            tip: "สังเกตว่าด้านบนเป็นวงกลม ไม่ใช่สองขีด"
          },
          {
            char: "ぷ",
            romaji: "pu",
            strokes: 6,
            tip: "จำว่า ぷ = ふ + ゜"
          },
          {
            char: "ぺ",
            romaji: "pe",
            strokes: 3,
            tip: "เปลี่ยนเครื่องหมายจาก ゛ เป็น ゜"
          },
          {
            char: "ぽ",
            romaji: "po",
            strokes: 5,
            tip: "ぽ = ほ + ゜"
          }
        ]
      },

      {
        type: "vocab",
        title: "คำศัพท์ที่ใช้บ่อย",
        items: [
          {
            jp: "ぱん",
            reading: "pan",
            thai: "ปัง",
            meaning: "ขนมปัง"
          },
          {
            jp: "えんぴつ",
            reading: "enpitsu",
            thai: "เอ็มปิสึ",
            meaning: "ดินสอ"
          },
          {
            jp: "ぷりん",
            reading: "purin",
            thai: "ปุริน",
            meaning: "พุดดิ้ง"
          },
          {
            jp: "ぺん",
            reading: "pen",
            thai: "เป็น",
            meaning: "ปากกา"
          },
          {
            jp: "いっぱい",
            reading: "ippai",
            thai: "อิปไป",
            meaning: "เต็ม / หนึ่งแก้วหรือหนึ่งถ้วยเต็ม"
          }
        ]
      },

      {
        type: "example",
        title: "แยก ば และ ぱ",
        content: `
          <div class="jp-example">
            <span class="jp-big">ば　ぱ</span>
            <span class="jp-romaji">ba　pa</span>
            <span class="jp-thai">บะ　ปะ</span>
          </div>

          <p>
            ทั้งสองตัวมีพื้นฐานมาจาก <strong>は</strong>
          </p>

          <p>
            は + ゛ = ば<br>
            は + ゜ = ぱ
          </p>

          <p>
            ให้สังเกตเครื่องหมายให้ดี
            เพราะ ゛ เป็นขีดสองขีด
            ส่วน ゜ เป็นวงกลม
          </p>
        `
      },

      {
        type: "practice",
        question: "ぱ มาจากตัวใด?",
        choices: [
          "か",
          "さ",
          "は",
          "た"
        ],
        answer: 2,
        explanation: "ぱ = は + ゜"
      },

      {
        type: "practice",
        question: "ぴ อ่านว่าอะไร?",
        choices: [
          "bi",
          "pi",
          "pa",
          "pu"
        ],
        answer: 1,
        explanation: "ぴ = pi"
      },

      {
        type: "practice",
        question: "เครื่องหมายใดคือ Handakuten?",
        choices: [
          "゛",
          "゜",
          "ー",
          "っ"
        ],
        answer: 1,
        explanation: "゜ คือ Handakuten หรือเครื่องหมายเสียงกึ่งขุ่น"
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “ขนมปัง”?",
        choices: [
          "ばん",
          "ぱん",
          "ほん",
          "ぽん"
        ],
        answer: 1,
        explanation: "ぱん (pan) หมายถึง ขนมปัง"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ฉันรู้จักเครื่องหมาย ゜",
          "ฉันอ่าน ぱぴぷぺぽ ได้",
          "ฉันแยก ば กับ ぱ ได้",
          "ฉันรู้ว่า ぱん หมายถึงขนมปัง"
        ]
      }
    ]
  },

  {
    id: 19,
    title: "ทบทวนเสียงขุ่นทั้งหมด",
    subtitle: "Dakuten & Handakuten Review",
    icon: "が",
    category: "Review",
    objectives: [
      "ทบทวน が ざ だ ば และ ぱ",
      "ฝึกเปลี่ยนเสียงจากตัวพื้นฐาน",
      "ฝึกอ่านคำศัพท์ที่มีเสียงขุ่นและกึ่งขุ่น",
      "เตรียมพร้อมสำหรับเสียงผสม"
    ],
    sections: [

      {
        type: "text",
        title: "รวมระบบเสียงที่เราเรียนมา",
        content: `
          <p>
            ตอนนี้เราสามารถเพิ่มเครื่องหมายให้กับตัวอักษรบางกลุ่ม
            เพื่อสร้างเสียงใหม่ได้แล้ว
          </p>

          <div class="formula-box">
            か → が　ka → ga<br>
            さ → ざ　sa → za<br>
            た → だ　ta → da<br>
            は → ば　ha → ba<br>
            は → ぱ　ha → pa
          </div>

          <p>
            สิ่งสำคัญคือไม่ต้องจำตัวใหม่แบบแยกขาดจากตัวเดิม
            แต่ให้จำเป็น “คู่”
          </p>

          <p>
            เช่นเห็น <strong>ぎ</strong>
            ให้คิดทันทีว่า
            <strong>き + ゛</strong>
          </p>
        `
      },

      {
        type: "kana",
        title: "ตารางเสียงขุ่นและกึ่งขุ่น",
        items: [
          { char:"が", romaji:"ga", thai:"กะ", example:"がくせい", meaning:"นักเรียน" },
          { char:"ぎ", romaji:"gi", thai:"กิ", example:"かぎ", meaning:"กุญแจ" },
          { char:"ぐ", romaji:"gu", thai:"กุ", example:"すぐ", meaning:"ทันที" },
          { char:"げ", romaji:"ge", thai:"เกะ", example:"げんき", meaning:"สบายดี" },
          { char:"ご", romaji:"go", thai:"โกะ", example:"ごご", meaning:"ตอนบ่าย" },

          { char:"ざ", romaji:"za", thai:"ซะ", example:"ざっし", meaning:"นิตยสาร" },
          { char:"じ", romaji:"ji", thai:"จิ", example:"じかん", meaning:"เวลา" },
          { char:"ず", romaji:"zu", thai:"ซุ", example:"みず", meaning:"น้ำ" },
          { char:"ぜ", romaji:"ze", thai:"เซะ", example:"ぜんぶ", meaning:"ทั้งหมด" },
          { char:"ぞ", romaji:"zo", thai:"โซะ", example:"ぞう", meaning:"ช้าง" },

          { char:"だ", romaji:"da", thai:"ดะ", example:"だれ", meaning:"ใคร" },
          { char:"で", romaji:"de", thai:"เดะ", example:"でんわ", meaning:"โทรศัพท์" },
          { char:"ど", romaji:"do", thai:"โดะ", example:"どこ", meaning:"ที่ไหน" },

          { char:"ば", romaji:"ba", thai:"บะ", example:"ばんごう", meaning:"หมายเลข" },
          { char:"び", romaji:"bi", thai:"บิ", example:"えび", meaning:"กุ้ง" },
          { char:"ぶ", romaji:"bu", thai:"บุ", example:"ぶた", meaning:"หมู" },
          { char:"べ", romaji:"be", thai:"เบะ", example:"べんきょう", meaning:"การเรียน" },
          { char:"ぼ", romaji:"bo", thai:"โบะ", example:"ぼうし", meaning:"หมวก" },

          { char:"ぱ", romaji:"pa", thai:"ปะ", example:"ぱん", meaning:"ขนมปัง" },
          { char:"ぴ", romaji:"pi", thai:"ปิ", example:"えんぴつ", meaning:"ดินสอ" },
          { char:"ぷ", romaji:"pu", thai:"ปุ", example:"ぷりん", meaning:"พุดดิ้ง" },
          { char:"ぺ", romaji:"pe", thai:"เปะ", example:"ぺん", meaning:"ปากกา" },
          { char:"ぽ", romaji:"po", thai:"โปะ", example:"ぽかぽか", meaning:"อบอุ่น" }
        ]
      },

      {
        type: "note",
        title: "วิธีจำแบบเป็นระบบ",
        content: `
          <p>
            ไม่จำเป็นต้องท่องตัวอักษรทั้งหมดแบบสุ่ม
            ให้จำจากตัวต้นทาง
          </p>

          <div class="formula-box">
            K → G<br>
            S → Z<br>
            T → D<br>
            H → B / P
          </div>

          <p>
            ส่วน H มีสองทาง
          </p>

          <p>
            <strong>H + ゛ → B</strong><br>
            <strong>H + ゜ → P</strong>
          </p>

          <p>
            วิธีนี้จะช่วยให้เราจำตัวอักษรใหม่ได้เร็วขึ้นมาก
          </p>
        `
      },

      {
        type: "example",
        title: "ฝึกอ่านคำรวม",
        content: `
          <div class="jp-example">
            <span class="jp-big">がくせい</span>
            <span class="jp-romaji">gakusei</span>
            <span class="jp-thai">นักเรียน</span>
          </div>

          <div class="jp-example">
            <span class="jp-big">でんわ</span>
            <span class="jp-romaji">denwa</span>
            <span class="jp-thai">โทรศัพท์</span>
          </div>

          <div class="jp-example">
            <span class="jp-big">えんぴつ</span>
            <span class="jp-romaji">enpitsu</span>
            <span class="jp-thai">ดินสอ</span>
          </div>

          <p>
            ลองอ่านภาษาญี่ปุ่นก่อน แล้วค่อยเปิดดู romaji
            เพื่อเช็กว่าตัวเองอ่านถูกหรือไม่
          </p>
        `
      },

      {
        type: "practice",
        question: "か เมื่อเติม ゛ จะเป็นตัวใด?",
        choices: [
          "が",
          "ざ",
          "だ",
          "ば"
        ],
        answer: 0,
        explanation: "か + ゛ = が"
      },

      {
        type: "practice",
        question: "は เมื่อเติม ゛ จะเป็นอะไร?",
        choices: [
          "ぱ",
          "ば",
          "だ",
          "ざ"
        ],
        answer: 1,
        explanation: "は + ゛ = ば"
      },

      {
        type: "practice",
        question: "は เมื่อเติม ゜ จะเป็นอะไร?",
        choices: [
          "ば",
          "ぱ",
          "ぴ",
          "ふ"
        ],
        answer: 1,
        explanation: "は + ゜ = ぱ"
      },

      {
        type: "practice",
        question: "คำว่า げんき อ่านว่าอะไร?",
        choices: [
          "genki",
          "kenki",
          "zenki",
          "ginki"
        ],
        answer: 0,
        explanation: "げ = ge, ん = n, き = ki จึงเป็น genki"
      },

      {
        type: "practice",
        question: "คำว่า ぞう หมายถึงอะไร?",
        choices: [
          "ช้าง",
          "น้ำ",
          "หนังสือ",
          "หมู"
        ],
        answer: 0,
        explanation: "ぞう (zou) หมายถึง ช้าง"
      },

      {
        type: "practice",
        question: "คำว่า ぱん อ่านว่าอะไร?",
        choices: [
          "ban",
          "pan",
          "pon",
          "pin"
        ],
        answer: 1,
        explanation: "ぱ = pa และ ん = n จึงเป็น pan"
      },

      {
        type: "check",
        title: "ผ่านช่วงเสียงขุ่น",
        items: [
          "ฉันรู้จัก Dakuten ゛",
          "ฉันรู้จัก Handakuten ゜",
          "ฉันอ่าน がざだば ได้",
          "ฉันอ่าน ぱぴぷぺぽ ได้",
          "ฉันพร้อมเริ่มเรียนเสียงผสม ゃ ゅ ょ"
        ]
      }
    ]
  }
);

  lessons.push(
  {
    id: 20,
    title: "เสียงผสม ゃ ゅ ょ",
    subtitle: "เริ่มต้นเรียนเสียงควบในภาษาญี่ปุ่น",
    sections: [
      {
        type: "text",
        title: "เสียงผสมคืออะไร?",
        content: `
          <p>เมื่อเราเรียนฮิรางานะพื้นฐานและเสียงขุ่นมาแล้ว ขั้นต่อไปคือ <strong>เสียงผสม</strong> หรือเสียงที่เกิดจากการนำตัวอักษรบางตัวมารวมกับ <strong>ゃ ゅ ょ</strong> ตัวเล็ก</p>
          <p>ตัว ゃ ゅ ょ แบบเล็กจะไม่อ่านแยกเป็น <strong>ya / yu / yo</strong> เต็มเสียง แต่จะรวมกับพยางค์ก่อนหน้าให้กลายเป็นเสียงใหม่ เช่น</p>
          <div class="jp-big">き + ゃ → きゃ</div>
          <p class="center">きゃ อ่านว่า <strong>kya</strong> ประมาณเสียง "เคีย"</p>
          <p>จุดสำคัญคือขนาดของ ゃ ゅ ょ ถ้าเขียนเป็นตัวใหญ่ <strong>や ゆ よ</strong> จะเป็นคนละรูปแบบกับตัวเล็ก</p>
        `
      },
      {
        type: "concept",
        title: "จำกฎง่าย ๆ",
        items: [
          "ゃ ตัวเล็ก → เสียงประมาณ ya",
          "ゅ ตัวเล็ก → เสียงประมาณ yu",
          "ょ ตัวเล็ก → เสียงประมาณ yo",
          "มักนำไปต่อท้ายตัวอักษรแถวเสียง -i เช่น き, し, ち, に, ひ, み, り",
          "เสียงขุ่นและกึ่งขุ่นก็สามารถนำมาผสมได้ เช่น ぎゃ และ ぴょ"
        ]
      },
      {
        type: "kana",
        title: "ตัวอย่างเสียงผสมชุดแรก",
        items: [
          {
            char: "きゃ",
            romaji: "kya",
            thai: "เคีย",
            example: "きゃく",
            meaning: "แขก / ลูกค้า"
          },
          {
            char: "きゅ",
            romaji: "kyu",
            thai: "คิว",
            example: "きゅう",
            meaning: "เก้า"
          },
          {
            char: "きょ",
            romaji: "kyo",
            thai: "เคียว",
            example: "きょう",
            meaning: "วันนี้"
          }
        ]
      },
      {
        type: "note",
        title: "ระวังเรื่องการอ่าน",
        content: `
          <p><strong>きゃ</strong> ไม่ได้อ่านว่า "คิ-ยะ"</p>
          <p>แต่รวมเสียงเป็น <strong>kya</strong></p>
          <p>เช่นเดียวกับ <strong>きゅ = kyu</strong> และ <strong>きょ = kyo</strong></p>
          <p>เวลาพูดให้คิดว่าเป็น <strong>หนึ่งจังหวะเสียง</strong> ไม่ใช่สองพยางค์แยกกัน</p>
        `
      },
      {
        type: "practice",
        question: "きゃ อ่านว่าอะไร?",
        choices: [
          "kya",
          "kiya",
          "kaya",
          "ya"
        ],
        answer: 0,
        explanation: "き + ゃ ตัวเล็ก รวมกันเป็น きゃ อ่านว่า kya"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงผสม?",
        choices: [
          "や",
          "きゃ",
          "か",
          "よ"
        ],
        answer: 1,
        explanation: "きゃ เกิดจาก き + ゃ ตัวเล็ก จึงเป็นเสียงผสม"
      },
      {
        type: "vocab",
        title: "คำศัพท์ที่ควรรู้",
        items: [
          {
            jp: "きょう",
            reading: "kyou",
            thai: "เคียว",
            meaning: "วันนี้"
          },
          {
            jp: "きゅう",
            reading: "kyuu",
            thai: "คิว",
            meaning: "เก้า"
          },
          {
            jp: "きゃく",
            reading: "kyaku",
            thai: "เคียคุ",
            meaning: "แขก / ลูกค้า"
          }
        ]
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "ตัวใดต้องเป็นตัวเล็กในคำว่า きゃ?",
            answer: "ゃ"
          },
          {
            question: "きゅ อ่านว่าอะไร?",
            answer: "kyu"
          },
          {
            question: "きょ อ่านว่าอะไร?",
            answer: "kyo"
          }
        ]
      }
    ]
  },

  {
    id: 21,
    title: "เสียง きゃ きゅ きょ",
    subtitle: "ฝึกเสียง kya, kyu, kyo ให้คล่อง",
    sections: [
      {
        type: "text",
        title: "ชุดเสียง きゃ きゅ きょ",
        content: `
          <p>ชุดแรกที่เราจะฝึกเต็ม ๆ คือเสียงที่เกิดจาก <strong>き</strong> + ゃ ゅ ょ</p>
          <div class="jp-big">きゃ　きゅ　きょ</div>
          <p class="center"><strong>kya　kyu　kyo</strong></p>
          <p>เสียงกลุ่มนี้เจอได้บ่อยในคำศัพท์ภาษาญี่ปุ่น ดังนั้นควรจำรูปตัวอักษรให้ได้ตั้งแต่ตอนนี้</p>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "きゃ",
            romaji: "kya",
            strokes: "き + ゃ",
            tip: "เขียน き ก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "きゅ",
            romaji: "kyu",
            strokes: "き + ゅ",
            tip: "เขียน き ก่อน แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "きょ",
            romaji: "kyo",
            strokes: "き + ょ",
            tip: "เขียน き ก่อน แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านให้คล่อง",
        items: [
          {
            char: "きゃ",
            romaji: "kya",
            thai: "เคีย",
            example: "きゃく",
            meaning: "แขก / ลูกค้า"
          },
          {
            char: "きゅ",
            romaji: "kyu",
            thai: "คิว",
            example: "きゅう",
            meaning: "เก้า"
          },
          {
            char: "きょ",
            romaji: "kyo",
            thai: "เคียว",
            example: "きょう",
            meaning: "วันนี้"
          }
        ]
      },
      {
        type: "example",
        title: "ลองอ่านคำ",
        content: `
          <div class="example-card">
            <div class="example-jp">きょう</div>
            <div class="example-reading">kyou</div>
            <div class="example-thai">วันนี้</div>
          </div>
          <div class="example-card">
            <div class="example-jp">きゃく</div>
            <div class="example-reading">kyaku</div>
            <div class="example-thai">แขก / ลูกค้า</div>
          </div>
          <div class="example-card">
            <div class="example-jp">きゅう</div>
            <div class="example-reading">kyuu</div>
            <div class="example-thai">เก้า</div>
          </div>
        `
      },
      {
        type: "practice",
        question: "きょ ตรงกับเสียงใด?",
        choices: [
          "kya",
          "kyu",
          "kyo",
          "ko"
        ],
        answer: 2,
        explanation: "きょ = kyo"
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า kyu?",
        choices: [
          "きゃ",
          "きゅ",
          "きょ",
          "きよ"
        ],
        answer: 1,
        explanation: "きゅ = kyu ส่วน きよ เป็น き + よ ตัวใหญ่ จึงไม่ใช่เสียงผสม"
      },
      {
        type: "practice",
        question: "ข้อใดเขียนคำว่า kyaku ได้ถูกต้อง?",
        choices: [
          "きやく",
          "きゃく",
          "きゅく",
          "きょく"
        ],
        answer: 1,
        explanation: "きゃく = kyaku"
      },
      {
        type: "tip",
        title: "เทคนิคจำ",
        content: `
          <p>ให้จำเป็นชุดเดียวเลย:</p>
          <div class="jp-big">きゃ → きゅ → きょ</div>
          <p class="center">kya → kyu → kyo</p>
          <p>ถ้าเห็น き ตามด้วย ゃ ゅ ょ ตัวเล็ก ให้รู้ทันทีว่าเป็นเสียง <strong>ky-</strong></p>
        `
      },
      {
        type: "check",
        title: "เช็กก่อนผ่านบท",
        items: [
          {
            question: "きゃ อ่านว่าอะไร?",
            answer: "kya"
          },
          {
            question: "きゅ อ่านว่าอะไร?",
            answer: "kyu"
          },
          {
            question: "きょ อ่านว่าอะไร?",
            answer: "kyo"
          }
        ]
      }
    ]
  },

  {
    id: 22,
    title: "เสียง しゃ しゅ しょ",
    subtitle: "เสียง sha, shu, sho",
    sections: [
      {
        type: "text",
        title: "จาก し สู่ しゃ しゅ しょ",
        content: `
          <p>ต่อไปเราจะนำ <strong>し</strong> มาผสมกับ ゃ ゅ ょ</p>
          <div class="jp-big">しゃ　しゅ　しょ</div>
          <p class="center"><strong>sha　shu　sho</strong></p>
          <p>ตรงนี้มีจุดที่ต้องจำเป็นพิเศษ เพราะเสียงของ <strong>し</strong> ไม่ได้ออกเสียงเหมือน si แบบตรง ๆ แต่เมื่อผสมจะกลายเป็นเสียง <strong>sh-</strong></p>
        `
      },
      {
        type: "concept",
        title: "รูปแบบการผสม",
        items: [
          "し + ゃ → しゃ = sha",
          "し + ゅ → しゅ = shu",
          "し + ょ → しょ = sho",
          "ゃ ゅ ょ ต้องเป็นตัวเล็ก",
          "しゃ และ しや ไม่ใช่รูปเดียวกัน"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "しゃ",
            romaji: "sha",
            strokes: "し + ゃ",
            tip: "เขียน し แล้วเติม ゃ ตัวเล็กด้านข้าง"
          },
          {
            char: "しゅ",
            romaji: "shu",
            strokes: "し + ゅ",
            tip: "เขียน し แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "しょ",
            romaji: "sho",
            strokes: "し + ょ",
            tip: "เขียน し แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านทีละตัว",
        items: [
          {
            char: "しゃ",
            romaji: "sha",
            thai: "ชา / ชะ",
            example: "しゃしん",
            meaning: "รูปถ่าย"
          },
          {
            char: "しゅ",
            romaji: "shu",
            thai: "ชุ",
            example: "しゅくだい",
            meaning: "การบ้าน"
          },
          {
            char: "しょ",
            romaji: "sho",
            thai: "โช",
            example: "しょくどう",
            meaning: "โรงอาหาร"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ตัวอย่าง",
        items: [
          {
            jp: "しゃしん",
            reading: "shashin",
            thai: "ชะชิน",
            meaning: "รูปถ่าย"
          },
          {
            jp: "しゅくだい",
            reading: "shukudai",
            thai: "ชุคุได",
            meaning: "การบ้าน"
          },
          {
            jp: "しょうがくせい",
            reading: "shougakusei",
            thai: "โชงักเซ",
            meaning: "นักเรียนประถม"
          }
        ]
      },
      {
        type: "example",
        title: "สังเกตตัวเล็ก",
        content: `
          <div class="compare-box">
            <div>
              <span class="jp-small-title">เสียงผสม</span>
              <div class="jp-big">しゃ</div>
              <p>sha</p>
            </div>
            <div>
              <span class="jp-small-title">ไม่ใช่เสียงผสม</span>
              <div class="jp-big">しや</div>
              <p>shiya</p>
            </div>
          </div>
          <p>ความแตกต่างอยู่ที่ขนาดของ ゃ ถ้าเป็นตัวเล็ก จะรวมเสียงกับ し</p>
        `
      },
      {
        type: "practice",
        question: "しゃ อ่านว่าอะไร?",
        choices: [
          "sya",
          "sha",
          "shiya",
          "sa"
        ],
        answer: 1,
        explanation: "しゃ = sha"
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า shu?",
        choices: [
          "しゃ",
          "しゅ",
          "しょ",
          "しよ"
        ],
        answer: 1,
        explanation: "しゅ = shu"
      },
      {
        type: "practice",
        question: "คำว่า しゃしん มีเสียงผสมตัวใด?",
        choices: [
          "しゃ",
          "しゅ",
          "しょ",
          "ไม่มีเสียงผสม"
        ],
        answer: 0,
        explanation: "しゃしん เริ่มต้นด้วย しゃ ซึ่งเป็นเสียงผสม"
      },
      {
        type: "flash",
        title: "แฟลชการ์ดเสียงผสม",
        cards: [
          {
            front: "しゃ",
            back: "sha — ชา / ชะ"
          },
          {
            front: "しゅ",
            back: "shu — ชุ"
          },
          {
            front: "しょ",
            back: "sho — โช"
          },
          {
            front: "しゃしん",
            back: "shashin — รูปถ่าย"
          }
        ]
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "しゃ = ?",
            answer: "sha"
          },
          {
            question: "しゅ = ?",
            answer: "shu"
          },
          {
            question: "しょ = ?",
            answer: "sho"
          },
          {
            question: "ตัว ゃ ใน しゃ ต้องเขียนขนาดไหน?",
            answer: "ตัวเล็ก"
          }
        ]
      }
    ]
  },

  {
    id: 23,
    title: "เสียง ちゃ ちゅ ちょ",
    subtitle: "เสียง cha, chu, cho",
    sections: [
      {
        type: "text",
        title: "เสียงจาก ち",
        content: `
          <p>ต่อไปคืออีกชุดที่สำคัญมาก คือการนำ <strong>ち</strong> มาผสมกับ ゃ ゅ ょ</p>
          <div class="jp-big">ちゃ　ちゅ　ちょ</div>
          <p class="center"><strong>cha　chu　cho</strong></p>
          <p>ชุดนี้พบในคำศัพท์ทั่วไปจำนวนมาก และเสียงของมันควรจำเป็นชุดเดียว</p>
        `
      },
      {
        type: "concept",
        title: "จำสามรูปนี้",
        items: [
          "ち + ゃ → ちゃ = cha",
          "ち + ゅ → ちゅ = chu",
          "ち + ょ → ちょ = cho"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ちゃ",
            romaji: "cha",
            strokes: "ち + ゃ",
            tip: "เขียน ち ก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "ちゅ",
            romaji: "chu",
            strokes: "ち + ゅ",
            tip: "เขียน ち ก่อน แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "ちょ",
            romaji: "cho",
            strokes: "ち + ょ",
            tip: "เขียน ち ก่อน แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านเสียง",
        items: [
          {
            char: "ちゃ",
            romaji: "cha",
            thai: "จะ / ชะ",
            example: "ちゃ",
            meaning: "ชา"
          },
          {
            char: "ちゅ",
            romaji: "chu",
            thai: "ชุ",
            example: "ちゅうがくせい",
            meaning: "นักเรียนมัธยมต้น"
          },
          {
            char: "ちょ",
            romaji: "cho",
            thai: "โช",
            example: "ちょっと",
            meaning: "นิดหน่อย"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ที่เจอบ่อย",
        items: [
          {
            jp: "ちゃ",
            reading: "cha",
            thai: "ชะ",
            meaning: "ชา"
          },
          {
            jp: "ちゅうがくせい",
            reading: "chuugakusei",
            thai: "ชูงักเซ",
            meaning: "นักเรียนมัธยมต้น"
          },
          {
            jp: "ちょっと",
            reading: "chotto",
            thai: "ช็อตโตะ",
            meaning: "นิดหน่อย / สักครู่"
          }
        ]
      },
      {
        type: "note",
        title: "จำให้ต่างจาก し",
        content: `
          <p>อย่าสับสนระหว่าง</p>
          <div class="jp-big">しゃ　↔　ちゃ</div>
          <p class="center">sha　↔　cha</p>
          <p>ตัวแรกมาจาก <strong>し</strong> ส่วนตัวหลังมาจาก <strong>ち</strong></p>
        `
      },
      {
        type: "practice",
        question: "ちゃ อ่านว่าอะไร?",
        choices: [
          "sha",
          "cha",
          "kya",
          "ta"
        ],
        answer: 1,
        explanation: "ちゃ = cha"
      },
      {
        type: "practice",
        question: "ちょ ตรงกับข้อใด?",
        choices: [
          "chu",
          "cho",
          "cha",
          "chi"
        ],
        answer: 1,
        explanation: "ちょ = cho"
      },
      {
        type: "practice",
        question: "คำว่า ちょっと หมายถึงอะไร?",
        choices: [
          "มาก",
          "นิดหน่อย",
          "วันนี้",
          "การบ้าน"
        ],
        answer: 1,
        explanation: "ちょっと ใช้ในความหมายว่า นิดหน่อย / สักครู่"
      },
      {
        type: "check",
        title: "เช็กก่อนผ่านบท",
        items: [
          {
            question: "ちゃ = ?",
            answer: "cha"
          },
          {
            question: "ちゅ = ?",
            answer: "chu"
          },
          {
            question: "ちょ = ?",
            answer: "cho"
          }
        ]
      }
    ]
  },

  {
    id: 24,
    title: "เสียง にゃ にゅ にょ",
    subtitle: "เสียง nya, nyu, nyo",
    sections: [
      {
        type: "text",
        title: "เสียงผสมจาก に",
        content: `
          <p>ชุดต่อไปคือ <strong>にゃ にゅ にょ</strong> ซึ่งเกิดจาก に + ゃ ゅ ょ</p>
          <div class="jp-big">にゃ　にゅ　にょ</div>
          <p class="center"><strong>nya　nyu　nyo</strong></p>
          <p>ให้สังเกตว่าเสียงจะเริ่มด้วย <strong>ny-</strong> คล้ายเสียง "เนีย / นิว / เนียว" ในการถอดเสียงแบบไทยอย่างคร่าว ๆ</p>
        `
      },
      {
        type: "concept",
        title: "รูปแบบ",
        items: [
          "に + ゃ → にゃ = nya",
          "に + ゅ → にゅ = nyu",
          "に + ょ → にょ = nyo"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "にゃ",
            romaji: "nya",
            strokes: "に + ゃ",
            tip: "เขียน に แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "にゅ",
            romaji: "nyu",
            strokes: "に + ゅ",
            tip: "เขียน に แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "にょ",
            romaji: "nyo",
            strokes: "に + ょ",
            tip: "เขียน に แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านทีละเสียง",
        items: [
          {
            char: "にゃ",
            romaji: "nya",
            thai: "เนีย",
            example: "にゃ",
            meaning: "เสียงแมวแบบภาษาพูด"
          },
          {
            char: "にゅ",
            romaji: "nyu",
            thai: "นิว",
            example: "にゅうがく",
            meaning: "การเข้าเรียน / การเข้าโรงเรียน"
          },
          {
            char: "にょ",
            romaji: "nyo",
            thai: "เนียว",
            example: "にょ",
            meaning: "ใช้เป็นส่วนประกอบของคำบางคำ"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างคำ",
        content: `
          <div class="example-card">
            <div class="example-jp">にゅうがく</div>
            <div class="example-reading">nyuugaku</div>
            <div class="example-thai">การเข้าเรียน / การเข้าโรงเรียน</div>
          </div>
          <div class="example-card">
            <div class="example-jp">こんにゃく</div>
            <div class="example-reading">konnyaku</div>
            <div class="example-thai">บุกญี่ปุ่น</div>
          </div>
        `
      },
      {
        type: "practice",
        question: "にゃ อ่านว่าอะไร?",
        choices: [
          "nya",
          "nyaa",
          "nya",
          "na"
        ],
        answer: 0,
        explanation: "にゃ = nya"
      },
      {
        type: "practice",
        question: "ข้อใดคือ nyu?",
        choices: [
          "にゃ",
          "にゅ",
          "にょ",
          "にゆ"
        ],
        answer: 1,
        explanation: "にゅ = nyu เพราะใช้ ゅ ตัวเล็ก"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงผสม?",
        choices: [
          "に",
          "な",
          "にょ",
          "よ"
        ],
        answer: 2,
        explanation: "にょ เกิดจาก に + ょ ตัวเล็ก จึงเป็นเสียงผสม"
      },
      {
        type: "tip",
        title: "ฝึกอ่านต่อเนื่อง",
        content: `
          <div class="jp-big">にゃ → にゅ → にょ</div>
          <p class="center">nya → nyu → nyo</p>
          <p>ลองอ่านต่อกันหลายรอบ โดยพยายามไม่หยุดตรงกลางระหว่าง に กับตัวเล็ก</p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "にゃ = ?",
            answer: "nya"
          },
          {
            question: "にゅ = ?",
            answer: "nyu"
          },
          {
            question: "にょ = ?",
            answer: "nyo"
          }
        ]
      }
    ]
  }
);

  lessons.push(
  {
    id: 25,
    title: "เสียง ひゃ ひゅ ひょ",
    subtitle: "เสียง hya, hyu, hyo",
    sections: [
      {
        type: "text",
        title: "เสียงผสมจาก ひ",
        content: `
          <p>คราวนี้เราจะนำ <strong>ひ</strong> มาผสมกับ ゃ ゅ ょ ตัวเล็ก</p>
          <div class="jp-big">ひゃ　ひゅ　ひょ</div>
          <p class="center"><strong>hya　hyu　hyo</strong></p>
          <p>เสียงชุดนี้เริ่มต้นด้วยเสียง <strong>hy-</strong> และควรอ่านให้เป็นเสียงเดียว ไม่แยกเป็น ひ + ゃ แบบสองจังหวะ</p>
        `
      },
      {
        type: "concept",
        title: "รูปแบบการผสม",
        items: [
          "ひ + ゃ → ひゃ = hya",
          "ひ + ゅ → ひゅ = hyu",
          "ひ + ょ → ひょ = hyo",
          "ゃ ゅ ょ ต้องเป็นตัวเล็ก",
          "ถ้าเขียนเป็น ひや จะไม่ใช่เสียงผสมแบบเดียวกัน"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ひゃ",
            romaji: "hya",
            strokes: "ひ + ゃ",
            tip: "เขียน ひ ก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "ひゅ",
            romaji: "hyu",
            strokes: "ひ + ゅ",
            tip: "เขียน ひ ก่อน แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "ひょ",
            romaji: "hyo",
            strokes: "ひ + ょ",
            tip: "เขียน ひ ก่อน แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านทีละตัว",
        items: [
          {
            char: "ひゃ",
            romaji: "hya",
            thai: "เฮีย",
            example: "ひゃく",
            meaning: "หนึ่งร้อย"
          },
          {
            char: "ひゅ",
            romaji: "hyu",
            thai: "ฮิว",
            example: "ひゅう",
            meaning: "เสียงเลียนแบบลมพัด"
          },
          {
            char: "ひょ",
            romaji: "hyo",
            thai: "เฮียว",
            example: "ひょう",
            meaning: "เสือดาว / เครื่องหมายหรือสัญลักษณ์ ขึ้นกับคำ"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ตัวอย่าง",
        items: [
          {
            jp: "ひゃく",
            reading: "hyaku",
            thai: "เฮียคุ",
            meaning: "หนึ่งร้อย"
          },
          {
            jp: "ひょう",
            reading: "hyou",
            thai: "เฮียว",
            meaning: "เสือดาว / ตารางหรือรายการ ขึ้นกับคำ"
          },
          {
            jp: "ひょうばん",
            reading: "hyouban",
            thai: "เฮียวบัง",
            meaning: "ชื่อเสียง / การประเมิน"
          }
        ]
      },
      {
        type: "practice",
        question: "ひゃ อ่านว่าอะไร?",
        choices: [
          "hya",
          "hya",
          "hiy a",
          "ha"
        ],
        answer: 0,
        explanation: "ひゃ = hya"
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า hyo?",
        choices: [
          "ひゃ",
          "ひゅ",
          "ひょ",
          "ひよ"
        ],
        answer: 2,
        explanation: "ひょ = hyo เพราะใช้ ょ ตัวเล็ก"
      },
      {
        type: "practice",
        question: "ひゃく หมายถึงอะไร?",
        choices: [
          "สิบ",
          "หนึ่งร้อย",
          "หนึ่งพัน",
          "หนึ่งหมื่น"
        ],
        answer: 1,
        explanation: "ひゃく = hyaku หมายถึงหนึ่งร้อย"
      },
      {
        type: "tip",
        title: "จำเป็นชุด",
        content: `
          <div class="jp-big">ひゃ　ひゅ　ひょ</div>
          <p class="center">hya → hyu → hyo</p>
          <p>ให้จำว่าแค่เปลี่ยน ゃ ゅ ょ เสียงท้ายก็เปลี่ยนตามทันที</p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "ひゃ = ?",
            answer: "hya"
          },
          {
            question: "ひゅ = ?",
            answer: "hyu"
          },
          {
            question: "ひょ = ?",
            answer: "hyo"
          }
        ]
      }
    ]
  },

  {
    id: 26,
    title: "เสียง みゃ みゅ みょ",
    subtitle: "เสียง mya, myu, myo",
    sections: [
      {
        type: "text",
        title: "เสียงผสมจาก み",
        content: `
          <p>ต่อไปคือเสียงผสมจาก <strong>み</strong></p>
          <div class="jp-big">みゃ　みゅ　みょ</div>
          <p class="center"><strong>mya　myu　myo</strong></p>
          <p>จำหลักการเดิมได้เลย คือใช้ตัวในแถวเสียง -i แล้วเติม ゃ ゅ ょ ตัวเล็ก</p>
        `
      },
      {
        type: "concept",
        title: "รูปแบบ",
        items: [
          "み + ゃ → みゃ = mya",
          "み + ゅ → みゅ = myu",
          "み + ょ → みょ = myo"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "みゃ",
            romaji: "mya",
            strokes: "み + ゃ",
            tip: "เขียน み แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "みゅ",
            romaji: "myu",
            strokes: "み + ゅ",
            tip: "เขียน み แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "みょ",
            romaji: "myo",
            strokes: "み + ょ",
            tip: "เขียน み แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านเสียง",
        items: [
          {
            char: "みゃ",
            romaji: "mya",
            thai: "เมีย",
            example: "みゃく",
            meaning: "ชีพจร / จังหวะ"
          },
          {
            char: "みゅ",
            romaji: "myu",
            thai: "มิว",
            example: "みゅーじっく",
            meaning: "ดนตรี (รูปแบบคาตาคานะ)"
          },
          {
            char: "みょ",
            romaji: "myo",
            thai: "เมียว",
            example: "みょう",
            meaning: "แปลก / ลึกลับ ในบางคำ"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ตัวอย่าง",
        items: [
          {
            jp: "みゃく",
            reading: "myaku",
            thai: "เมียคุ",
            meaning: "ชีพจร / จังหวะ"
          },
          {
            jp: "みょうじ",
            reading: "myouji",
            thai: "เมียวจิ",
            meaning: "นามสกุล"
          },
          {
            jp: "みょう",
            reading: "myou",
            thai: "เมียว",
            meaning: "แปลก / น่าประหลาด"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างที่ควรสังเกต",
        content: `
          <div class="example-card">
            <div class="example-jp">みょうじ</div>
            <div class="example-reading">myouji</div>
            <div class="example-thai">นามสกุล</div>
          </div>
          <p>ในคำว่า <strong>みょうじ</strong> ตัว みょ เป็นเสียงผสม ส่วน う ที่ตามมาจะเกี่ยวข้องกับการเขียนเสียงยาว ซึ่งเราจะเรียนละเอียดในบทถัด ๆ ไป</p>
        `
      },
      {
        type: "practice",
        question: "みゅ อ่านว่าอะไร?",
        choices: [
          "mya",
          "myu",
          "myo",
          "mu"
        ],
        answer: 1,
        explanation: "みゅ = myu"
      },
      {
        type: "practice",
        question: "ข้อใดคือ myo?",
        choices: [
          "みゃ",
          "みゅ",
          "みょ",
          "みよ"
        ],
        answer: 2,
        explanation: "みょ = myo"
      },
      {
        type: "practice",
        question: "คำว่า みょうじ หมายถึงอะไร?",
        choices: [
          "ชื่อจริง",
          "นามสกุล",
          "ชื่อเล่น",
          "ที่อยู่"
        ],
        answer: 1,
        explanation: "みょうじ = myouji หมายถึงนามสกุล"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "みゃ = ?",
            answer: "mya"
          },
          {
            question: "みゅ = ?",
            answer: "myu"
          },
          {
            question: "みょ = ?",
            answer: "myo"
          }
        ]
      }
    ]
  },

  {
    id: 27,
    title: "เสียง りゃ りゅ りょ",
    subtitle: "เสียง rya, ryu, ryo",
    sections: [
      {
        type: "text",
        title: "เสียงผสมจาก り",
        content: `
          <p>ต่อไปเป็นอีกชุดหนึ่งที่ต้องฝึกให้ชิน คือ <strong>りゃ りゅ りょ</strong></p>
          <div class="jp-big">りゃ　りゅ　りょ</div>
          <p class="center"><strong>rya　ryu　ryo</strong></p>
          <p>เสียง r ในภาษาญี่ปุ่นไม่ตรงกับ ร หรือ ล ของภาษาไทยแบบเป๊ะ ๆ ให้พยายามออกเสียงสั้นและเบา โดยแตะลิ้นบริเวณด้านหน้าปากอย่างรวดเร็ว</p>
        `
      },
      {
        type: "concept",
        title: "รูปแบบการผสม",
        items: [
          "り + ゃ → りゃ = rya",
          "り + ゅ → りゅ = ryu",
          "り + ょ → りょ = ryo"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "りゃ",
            romaji: "rya",
            strokes: "り + ゃ",
            tip: "เขียน り ก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "りゅ",
            romaji: "ryu",
            strokes: "り + ゅ",
            tip: "เขียน り ก่อน แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "りょ",
            romaji: "ryo",
            strokes: "り + ょ",
            tip: "เขียน り ก่อน แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านเสียง",
        items: [
          {
            char: "りゃ",
            romaji: "rya",
            thai: "เรีย",
            example: "りゃく",
            meaning: "คำย่อ / การย่อ"
          },
          {
            char: "りゅ",
            romaji: "ryu",
            thai: "ริว",
            example: "りゅう",
            meaning: "มังกร"
          },
          {
            char: "りょ",
            romaji: "ryo",
            thai: "เรียว",
            example: "りょこう",
            meaning: "การท่องเที่ยว"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์สำคัญ",
        items: [
          {
            jp: "りゅう",
            reading: "ryuu",
            thai: "ริว",
            meaning: "มังกร"
          },
          {
            jp: "りょこう",
            reading: "ryokou",
            thai: "เรียวโค",
            meaning: "การท่องเที่ยว"
          },
          {
            jp: "りょうり",
            reading: "ryouri",
            thai: "เรียวริ",
            meaning: "อาหาร / การทำอาหาร"
          }
        ]
      },
      {
        type: "example",
        title: "ลองอ่านคำจริง",
        content: `
          <div class="example-card">
            <div class="example-jp">りょこう</div>
            <div class="example-reading">ryokou</div>
            <div class="example-thai">การท่องเที่ยว</div>
          </div>
          <div class="example-card">
            <div class="example-jp">りょうり</div>
            <div class="example-reading">ryouri</div>
            <div class="example-thai">อาหาร / การทำอาหาร</div>
          </div>
          <div class="example-card">
            <div class="example-jp">りゅう</div>
            <div class="example-reading">ryuu</div>
            <div class="example-thai">มังกร</div>
          </div>
        `
      },
      {
        type: "practice",
        question: "りゃ อ่านว่าอะไร?",
        choices: [
          "rya",
          "ryu",
          "ryo",
          "ra"
        ],
        answer: 0,
        explanation: "りゃ = rya"
      },
      {
        type: "practice",
        question: "りょこう หมายถึงอะไร?",
        choices: [
          "การเรียน",
          "การท่องเที่ยว",
          "อาหาร",
          "มังกร"
        ],
        answer: 1,
        explanation: "りょこう = ryokou หมายถึงการท่องเที่ยว"
      },
      {
        type: "practice",
        question: "ข้อใดเป็น ryu?",
        choices: [
          "りゃ",
          "りゅ",
          "りょ",
          "りよ"
        ],
        answer: 1,
        explanation: "りゅ = ryu"
      },
      {
        type: "tip",
        title: "เรื่องเสียง R",
        content: `
          <p>อย่ากังวลถ้ายังออกเสียง r แบบญี่ปุ่นไม่ได้เป๊ะตั้งแต่ครั้งแรก</p>
          <p>ตอนนี้ให้เน้นที่ <strong>การแยกรูปตัวอักษรและจำเสียง</strong> ก่อน เมื่อฟังภาษาญี่ปุ่นมากขึ้นจะค่อย ๆ จับเสียงได้แม่นขึ้น</p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "りゃ = ?",
            answer: "rya"
          },
          {
            question: "りゅ = ?",
            answer: "ryu"
          },
          {
            question: "りょ = ?",
            answer: "ryo"
          }
        ]
      }
    ]
  },

  {
    id: 28,
    title: "เสียง ぎゃ ぎゅ ぎょ",
    subtitle: "เสียง gya, gyu, gyo",
    sections: [
      {
        type: "text",
        title: "เสียงผสมจาก ぎ",
        content: `
          <p>ตอนนี้เราจะเริ่มนำ <strong>เสียงขุ่น</strong> มาผสมกับ ゃ ゅ ょ กันแล้ว</p>
          <div class="jp-big">ぎゃ　ぎゅ　ぎょ</div>
          <p class="center"><strong>gya　gyu　gyo</strong></p>
          <p>ぎ มาจาก き ที่เติม dakuten ゛ ดังนั้นเมื่อนำมาผสมก็จะได้เสียงกลุ่ม <strong>gy-</strong></p>
        `
      },
      {
        type: "concept",
        title: "จาก き เป็น ぎ",
        items: [
          "きゃ → ぎゃ",
          "きゅ → ぎゅ",
          "きょ → ぎょ",
          "เสียงเปลี่ยนจาก ky- เป็น gy-",
          "ぎゃ ぎゅ ぎょ เป็นเสียงผสมและมี dakuten อยู่บน ぎ"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ぎゃ",
            romaji: "gya",
            strokes: "ぎ + ゃ",
            tip: "เขียน ぎ ก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "ぎゅ",
            romaji: "gyu",
            strokes: "ぎ + ゅ",
            tip: "เขียน ぎ ก่อน แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "ぎょ",
            romaji: "gyo",
            strokes: "ぎ + ょ",
            tip: "เขียน ぎ ก่อน แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านทีละเสียง",
        items: [
          {
            char: "ぎゃ",
            romaji: "gya",
            thai: "เกีย",
            example: "ぎゃく",
            meaning: "ตรงข้าม / ย้อนกลับ"
          },
          {
            char: "ぎゅ",
            romaji: "gyu",
            thai: "กิว",
            example: "ぎゅうにゅう",
            meaning: "นม"
          },
          {
            char: "ぎょ",
            romaji: "gyo",
            thai: "เกียว",
            example: "ぎょかい",
            meaning: "อุตสาหกรรมประมง"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ตัวอย่าง",
        items: [
          {
            jp: "ぎゅうにゅう",
            reading: "gyuunyuu",
            thai: "กิว-นิว",
            meaning: "นม"
          },
          {
            jp: "ぎゃく",
            reading: "gyaku",
            thai: "เกียคุ",
            meaning: "ตรงข้าม / ย้อนกลับ"
          },
          {
            jp: "ぎょうざ",
            reading: "gyouza",
            thai: "เกียวซะ",
            meaning: "เกี๊ยวซ่า"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างที่ใช้บ่อย",
        content: `
          <div class="example-card">
            <div class="example-jp">ぎゅうにゅう</div>
            <div class="example-reading">gyuunyuu</div>
            <div class="example-thai">นม</div>
          </div>
          <div class="example-card">
            <div class="example-jp">ぎょうざ</div>
            <div class="example-reading">gyouza</div>
            <div class="example-thai">เกี๊ยวซ่า</div>
          </div>
        `
      },
      {
        type: "practice",
        question: "ぎゃ อ่านว่าอะไร?",
        choices: [
          "kya",
          "gya",
          "ga",
          "gya"
        ],
        answer: 1,
        explanation: "ぎゃ = gya"
      },
      {
        type: "practice",
        question: "คำว่า ぎゅうにゅう หมายถึงอะไร?",
        choices: [
          "น้ำ",
          "ชา",
          "นม",
          "กาแฟ"
        ],
        answer: 2,
        explanation: "ぎゅうにゅう = gyuunyuu หมายถึงนม"
      },
      {
        type: "practice",
        question: "ข้อใดเปลี่ยนจาก きょ เป็นเสียงขุ่นได้ถูกต้อง?",
        choices: [
          "ぎょ",
          "ぎゅ",
          "ぎゃ",
          "ごょ"
        ],
        answer: 0,
        explanation: "きょ → ぎょ โดยเปลี่ยน き เป็น ぎ"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "ぎゃ = ?",
            answer: "gya"
          },
          {
            question: "ぎゅ = ?",
            answer: "gyu"
          },
          {
            question: "ぎょ = ?",
            answer: "gyo"
          }
        ]
      }
    ]
  },

  {
    id: 29,
    title: "เสียง じゃ じゅ じょ",
    subtitle: "เสียง ja, ju, jo",
    sections: [
      {
        type: "text",
        title: "เสียงผสมจาก じ",
        content: `
          <p>อีกชุดที่เจอบ่อยมากคือ <strong>じゃ じゅ じょ</strong></p>
          <div class="jp-big">じゃ　じゅ　じょ</div>
          <p class="center"><strong>ja　ju　jo</strong></p>
          <p>จำไว้ว่า じ เป็นเสียงขุ่นของ し ในชุดนี้ และเมื่อนำมาผสมกับ ゃ ゅ ょ จะได้เสียง j-</p>
        `
      },
      {
        type: "concept",
        title: "รูปแบบการผสม",
        items: [
          "じ + ゃ → じゃ = ja",
          "じ + ゅ → じゅ = ju",
          "じ + ょ → じょ = jo",
          "ต้องสังเกตว่า ゃ ゅ ょ เป็นตัวเล็ก",
          "เสียง じゃ じゅ じょ พบในคำศัพท์ทั่วไปค่อนข้างบ่อย"
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "じゃ",
            romaji: "ja",
            strokes: "じ + ゃ",
            tip: "เขียน じ แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "じゅ",
            romaji: "ju",
            strokes: "じ + ゅ",
            tip: "เขียน じ แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "じょ",
            romaji: "jo",
            strokes: "じ + ょ",
            tip: "เขียน じ แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "อ่านทีละเสียง",
        items: [
          {
            char: "じゃ",
            romaji: "ja",
            thai: "จะ",
            example: "じゃあ",
            meaning: "ถ้าอย่างนั้น / งั้น"
          },
          {
            char: "じゅ",
            romaji: "ju",
            thai: "จุ",
            example: "じゅう",
            meaning: "สิบ"
          },
          {
            char: "じょ",
            romaji: "jo",
            thai: "โจ",
            example: "じょせい",
            meaning: "ผู้หญิง"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ตัวอย่าง",
        items: [
          {
            jp: "じゅう",
            reading: "juu",
            thai: "จู",
            meaning: "สิบ"
          },
          {
            jp: "じょせい",
            reading: "josei",
            thai: "โจเซ",
            meaning: "ผู้หญิง"
          },
          {
            jp: "じょうず",
            reading: "jouzu",
            thai: "โจซุ",
            meaning: "เก่ง / ชำนาญ"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างคำ",
        content: `
          <div class="example-card">
            <div class="example-jp">じょうず</div>
            <div class="example-reading">jouzu</div>
            <div class="example-thai">เก่ง / ชำนาญ</div>
          </div>
          <div class="example-card">
            <div class="example-jp">じゅう</div>
            <div class="example-reading">juu</div>
            <div class="example-thai">สิบ</div>
          </div>
          <div class="example-card">
            <div class="example-jp">じょせい</div>
            <div class="example-reading">josei</div>
            <div class="example-thai">ผู้หญิง</div>
          </div>
        `
      },
      {
        type: "practice",
        question: "じゃ อ่านว่าอะไร?",
        choices: [
          "ja",
          "jiya",
          "sha",
          "ga"
        ],
        answer: 0,
        explanation: "じゃ = ja"
      },
      {
        type: "practice",
        question: "じゅう หมายถึงอะไร?",
        choices: [
          "เก้า",
          "สิบ",
          "หนึ่งร้อย",
          "พัน"
        ],
        answer: 1,
        explanation: "じゅう = juu หมายถึงสิบ"
      },
      {
        type: "practice",
        question: "คำว่า じょうず หมายถึงอะไร?",
        choices: [
          "ไม่เก่ง",
          "เก่ง / ชำนาญ",
          "ผู้หญิง",
          "การบ้าน"
        ],
        answer: 1,
        explanation: "じょうず = jouzu หมายถึงเก่งหรือชำนาญ"
      },
      {
        type: "tip",
        title: "จำคู่เสียง",
        content: `
          <div class="jp-big">しゃ　→　じゃ</div>
          <p class="center">sha → ja</p>
          <p>เมื่อเติม dakuten ให้ し กลายเป็น じ และเมื่อนำไปผสมกับ ゃ จะได้ じゃ</p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "じゃ = ?",
            answer: "ja"
          },
          {
            question: "じゅ = ?",
            answer: "ju"
          },
          {
            question: "じょ = ?",
            answer: "jo"
          }
        ]
      }
    ]
  }
);

  lessons.push(
  {
    id: 30,
    title: "เสียง びゃ びゅ びょ และ ぴゃ ぴゅ ぴょ",
    subtitle: "เสียงผสมจาก び และ ぴ",
    sections: [
      {
        type: "text",
        title: "เสียงผสมชุดสุดท้ายของกลุ่มหลัก",
        content: `
          <p>ตอนนี้เราเรียนเสียงผสมมาเกือบครบแล้ว เหลืออีกสองกลุ่มสำคัญคือเสียงจาก <strong>び</strong> และ <strong>ぴ</strong></p>

          <div class="jp-big">びゃ　びゅ　びょ</div>
          <p class="center"><strong>bya　byu　byo</strong></p>

          <div class="jp-big">ぴゃ　ぴゅ　ぴょ</div>
          <p class="center"><strong>pya　pyu　pyo</strong></p>

          <p>หลักการเหมือนกับที่เรียนมาก่อนหน้านี้ทั้งหมด คือเอาตัวในแถวเสียง -i มาผสมกับ ゃ ゅ ょ ตัวเล็ก</p>
        `
      },
      {
        type: "concept",
        title: "จำที่มาของเสียง",
        items: [
          "びゃ = び + ゃ → bya",
          "びゅ = び + ゅ → byu",
          "びょ = び + ょ → byo",
          "ぴゃ = ぴ + ゃ → pya",
          "ぴゅ = ぴ + ゅ → pyu",
          "ぴょ = ぴ + ょ → pyo"
        ]
      },
      {
        type: "note",
        title: "เปรียบเทียบ ひ → び → ぴ",
        content: `
          <p>สามกลุ่มนี้จำเป็นชุดเดียวได้เลย</p>

          <div class="jp-big">ひゃ　→　びゃ　→　ぴゃ</div>
          <div class="jp-big">ひゅ　→　びゅ　→　ぴゅ</div>
          <div class="jp-big">ひょ　→　びょ　→　ぴょ</div>

          <p class="center">hya → bya → pya</p>
          <p class="center">hyu → byu → pyu</p>
          <p class="center">hyo → byo → pyo</p>

          <p>จุดต่างคือ <strong>び</strong> มี dakuten ゛ ส่วน <strong>ぴ</strong> มี handakuten ゜</p>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียนเสียงผสม",
        items: [
          {
            char: "びゃ",
            romaji: "bya",
            strokes: "び + ゃ",
            tip: "เขียน び ให้ครบเสียงขุ่นก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "びゅ",
            romaji: "byu",
            strokes: "び + ゅ",
            tip: "เขียน び แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "びょ",
            romaji: "byo",
            strokes: "び + ょ",
            tip: "เขียน び แล้วเติม ょ ตัวเล็ก"
          },
          {
            char: "ぴゃ",
            romaji: "pya",
            strokes: "ぴ + ゃ",
            tip: "เขียน ぴ ให้มีวงกลม ゜ ก่อน แล้วเติม ゃ ตัวเล็ก"
          },
          {
            char: "ぴゅ",
            romaji: "pyu",
            strokes: "ぴ + ゅ",
            tip: "เขียน ぴ แล้วเติม ゅ ตัวเล็ก"
          },
          {
            char: "ぴょ",
            romaji: "pyo",
            strokes: "ぴ + ょ",
            tip: "เขียน ぴ แล้วเติม ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "kana",
        title: "เสียง びゃ びゅ びょ",
        items: [
          {
            char: "びゃ",
            romaji: "bya",
            thai: "เบีย",
            example: "びゃく",
            meaning: "พบในคำประสมบางคำ"
          },
          {
            char: "びゅ",
            romaji: "byu",
            thai: "บิว",
            example: "びゅう",
            meaning: "เสียงเลียนแบบลม / พบในคำเฉพาะ"
          },
          {
            char: "びょ",
            romaji: "byo",
            thai: "เบียว",
            example: "びょういん",
            meaning: "โรงพยาบาล"
          }
        ]
      },
      {
        type: "kana",
        title: "เสียง ぴゃ ぴゅ ぴょ",
        items: [
          {
            char: "ぴゃ",
            romaji: "pya",
            thai: "เพีย",
            example: "ぴゃっ",
            meaning: "เสียงอุทาน / พบในรูปแบบภาษาพูด"
          },
          {
            char: "ぴゅ",
            romaji: "pyu",
            thai: "พิว",
            example: "ぴゅー",
            meaning: "เสียงพุ่งหรือเสียงลม"
          },
          {
            char: "ぴょ",
            romaji: "pyo",
            thai: "เพียว",
            example: "ぴょん",
            meaning: "เสียงหรือท่าทางกระโดด"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ที่ควรรู้",
        items: [
          {
            jp: "びょういん",
            reading: "byouin",
            thai: "เบียวอิน",
            meaning: "โรงพยาบาล"
          },
          {
            jp: "びょうき",
            reading: "byouki",
            thai: "เบียวคิ",
            meaning: "ความเจ็บป่วย / ป่วย"
          },
          {
            jp: "ぴょんぴょん",
            reading: "pyonpyon",
            thai: "เพียว เพียว",
            meaning: "กระโดดดึ๋ง ๆ"
          }
        ]
      },
      {
        type: "practice",
        question: "びゃ อ่านว่าอะไร?",
        choices: [
          "hya",
          "bya",
          "pya",
          "ba"
        ],
        answer: 1,
        explanation: "びゃ = bya"
      },
      {
        type: "practice",
        question: "ぴゅ อ่านว่าอะไร?",
        choices: [
          "byu",
          "pyu",
          "pu",
          "pyo"
        ],
        answer: 1,
        explanation: "ぴゅ = pyu"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงกึ่งขุ่น?",
        choices: [
          "びゃ",
          "ぴゃ",
          "ひゃ",
          "みゃ"
        ],
        answer: 1,
        explanation: "ぴ อยู่ในกลุ่มเสียงกึ่งขุ่นที่ใช้ handakuten ゜"
      },
      {
        type: "practice",
        question: "びょういん หมายถึงอะไร?",
        choices: [
          "โรงเรียน",
          "โรงพยาบาล",
          "ร้านอาหาร",
          "สถานีรถไฟ"
        ],
        answer: 1,
        explanation: "びょういん = byouin หมายถึงโรงพยาบาล"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "びゃ = ?",
            answer: "bya"
          },
          {
            question: "びゅ = ?",
            answer: "byu"
          },
          {
            question: "びょ = ?",
            answer: "byo"
          },
          {
            question: "ぴゃ = ?",
            answer: "pya"
          },
          {
            question: "ぴゅ = ?",
            answer: "pyu"
          },
          {
            question: "ぴょ = ?",
            answer: "pyo"
          }
        ]
      }
    ]
  },

  {
    id: 31,
    title: "ทบทวนเสียงผสมทั้งหมด",
    subtitle: "รวมเสียง ゃ ゅ ょ ตั้งแต่ต้นจนจบ",
    sections: [
      {
        type: "text",
        title: "ถึงเวลารวมทุกกลุ่ม",
        content: `
          <p>ตอนนี้เราเรียนเสียงผสมกลุ่มหลักครบแล้ว</p>
          <p>ก่อนจะไปเรื่องใหม่ ต้องทำให้เรามองคำอย่าง <strong>きょう / しゃしん / ちょっと / りょこう</strong> แล้วอ่านได้โดยไม่ต้องนึกทีละตัว</p>
          <p>ตารางด้านล่างคือสรุปทั้งหมดที่เราควรรู้ในตอนนี้</p>
        `
      },
      {
        type: "kana",
        title: "เสียงผสมพื้นฐาน",
        items: [
          {
            char: "きゃ",
            romaji: "kya",
            thai: "เคีย",
            example: "きゃく",
            meaning: "แขก / ลูกค้า"
          },
          {
            char: "きゅ",
            romaji: "kyu",
            thai: "คิว",
            example: "きゅう",
            meaning: "เก้า"
          },
          {
            char: "きょ",
            romaji: "kyo",
            thai: "เคียว",
            example: "きょう",
            meaning: "วันนี้"
          },
          {
            char: "しゃ",
            romaji: "sha",
            thai: "ชา",
            example: "しゃしん",
            meaning: "รูปถ่าย"
          },
          {
            char: "しゅ",
            romaji: "shu",
            thai: "ชุ",
            example: "しゅくだい",
            meaning: "การบ้าน"
          },
          {
            char: "しょ",
            romaji: "sho",
            thai: "โช",
            example: "しょくどう",
            meaning: "โรงอาหาร"
          }
        ]
      },
      {
        type: "kana",
        title: "ชุดต่อมา",
        items: [
          {
            char: "ちゃ",
            romaji: "cha",
            thai: "ชะ",
            example: "ちゃ",
            meaning: "ชา"
          },
          {
            char: "ちゅ",
            romaji: "chu",
            thai: "ชุ",
            example: "ちゅうがくせい",
            meaning: "นักเรียนมัธยมต้น"
          },
          {
            char: "ちょ",
            romaji: "cho",
            thai: "โช",
            example: "ちょっと",
            meaning: "นิดหน่อย"
          },
          {
            char: "にゃ",
            romaji: "nya",
            thai: "เนีย",
            example: "こんにゃく",
            meaning: "บุกญี่ปุ่น"
          },
          {
            char: "にゅ",
            romaji: "nyu",
            thai: "นิว",
            example: "にゅうがく",
            meaning: "การเข้าเรียน"
          },
          {
            char: "にょ",
            romaji: "nyo",
            thai: "เนียว",
            example: "にょ",
            meaning: "เสียงผสม"
          }
        ]
      },
      {
        type: "kana",
        title: "ชุด h, m, r",
        items: [
          {
            char: "ひゃ",
            romaji: "hya",
            thai: "เฮีย",
            example: "ひゃく",
            meaning: "หนึ่งร้อย"
          },
          {
            char: "ひゅ",
            romaji: "hyu",
            thai: "ฮิว",
            example: "ひゅう",
            meaning: "เสียงลม"
          },
          {
            char: "ひょ",
            romaji: "hyo",
            thai: "เฮียว",
            example: "ひょう",
            meaning: "เสือดาว / ตาราง"
          },
          {
            char: "みゃ",
            romaji: "mya",
            thai: "เมีย",
            example: "みゃく",
            meaning: "ชีพจร"
          },
          {
            char: "みゅ",
            romaji: "myu",
            thai: "มิว",
            example: "みゅー",
            meaning: "เสียงมิว"
          },
          {
            char: "みょ",
            romaji: "myo",
            thai: "เมียว",
            example: "みょうじ",
            meaning: "นามสกุล"
          },
          {
            char: "りゃ",
            romaji: "rya",
            thai: "เรีย",
            example: "りゃく",
            meaning: "คำย่อ"
          },
          {
            char: "りゅ",
            romaji: "ryu",
            thai: "ริว",
            example: "りゅう",
            meaning: "มังกร"
          },
          {
            char: "りょ",
            romaji: "ryo",
            thai: "เรียว",
            example: "りょこう",
            meaning: "การท่องเที่ยว"
          }
        ]
      },
      {
        type: "kana",
        title: "ชุดเสียงขุ่นและกึ่งขุ่น",
        items: [
          {
            char: "ぎゃ",
            romaji: "gya",
            thai: "เกีย",
            example: "ぎゃく",
            meaning: "ตรงข้าม"
          },
          {
            char: "ぎゅ",
            romaji: "gyu",
            thai: "กิว",
            example: "ぎゅうにゅう",
            meaning: "นม"
          },
          {
            char: "ぎょ",
            romaji: "gyo",
            thai: "เกียว",
            example: "ぎょかい",
            meaning: "อุตสาหกรรมประมง"
          },
          {
            char: "じゃ",
            romaji: "ja",
            thai: "จะ",
            example: "じゃあ",
            meaning: "ถ้าอย่างนั้น"
          },
          {
            char: "じゅ",
            romaji: "ju",
            thai: "จุ",
            example: "じゅう",
            meaning: "สิบ"
          },
          {
            char: "じょ",
            romaji: "jo",
            thai: "โจ",
            example: "じょせい",
            meaning: "ผู้หญิง"
          },
          {
            char: "びゃ",
            romaji: "bya",
            thai: "เบีย",
            example: "びゃく",
            meaning: "เสียงผสม"
          },
          {
            char: "びゅ",
            romaji: "byu",
            thai: "บิว",
            example: "びゅう",
            meaning: "เสียงลม"
          },
          {
            char: "びょ",
            romaji: "byo",
            thai: "เบียว",
            example: "びょういん",
            meaning: "โรงพยาบาล"
          },
          {
            char: "ぴゃ",
            romaji: "pya",
            thai: "เพีย",
            example: "ぴゃっ",
            meaning: "เสียงอุทาน"
          },
          {
            char: "ぴゅ",
            romaji: "pyu",
            thai: "พิว",
            example: "ぴゅー",
            meaning: "เสียงลม"
          },
          {
            char: "ぴょ",
            romaji: "pyo",
            thai: "เพียว",
            example: "ぴょん",
            meaning: "กระโดดดึ๋ง ๆ"
          }
        ]
      },
      {
        type: "note",
        title: "กฎใหญ่ที่ต้องจำ",
        content: `
          <p>เสียงผสมไม่ได้เกิดจากตัวอักษรอะไรก็ได้ เราใช้รูปแบบหลักคือ</p>

          <div class="jp-big">ตัวเสียง -i + ゃ / ゅ / ょ</div>

          <p>ตัวอย่างเช่น</p>

          <div class="jp-big">き + ゃ = きゃ</div>
          <div class="jp-big">し + ゅ = しゅ</div>
          <div class="jp-big">ち + ょ = ちょ</div>

          <p>และสามารถใช้กับเสียงขุ่นหรือกึ่งขุ่นได้ด้วย เช่น</p>

          <div class="jp-big">ぎゃ　じゃ　びょ　ぴゅ</div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า ryo?",
        choices: [
          "りゃ",
          "りゅ",
          "りょ",
          "りよ"
        ],
        answer: 2,
        explanation: "りょ = ryo"
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า gyo?",
        choices: [
          "きょ",
          "ぎょ",
          "じょ",
          "びょ"
        ],
        answer: 1,
        explanation: "ぎょ = gyo"
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า pyo?",
        choices: [
          "ひょ",
          "びょ",
          "ぴょ",
          "ぴゅ"
        ],
        answer: 2,
        explanation: "ぴょ = pyo"
      },
      {
        type: "practice",
        question: "ข้อใดไม่ใช่เสียงผสม?",
        choices: [
          "きゃ",
          "しゅ",
          "や",
          "りょ"
        ],
        answer: 2,
        explanation: "や เป็นฮิรางานะพื้นฐาน ไม่ใช่เสียงผสม"
      },
      {
        type: "practice",
        question: "ข้อใดเขียนด้วย ょ ตัวเล็ก?",
        choices: [
          "きゃ",
          "しゅ",
          "りょ",
          "じゃ"
        ],
        answer: 2,
        explanation: "りょ ประกอบด้วย り + ょ ตัวเล็ก"
      },
      {
        type: "flash",
        title: "แฟลชการ์ดรวม",
        cards: [
          {
            front: "きゃ",
            back: "kya"
          },
          {
            front: "しゃ",
            back: "sha"
          },
          {
            front: "ちゃ",
            back: "cha"
          },
          {
            front: "にゃ",
            back: "nya"
          },
          {
            front: "ひゃ",
            back: "hya"
          },
          {
            front: "みゃ",
            back: "mya"
          },
          {
            front: "りゃ",
            back: "rya"
          },
          {
            front: "ぎゃ",
            back: "gya"
          },
          {
            front: "じゃ",
            back: "ja"
          },
          {
            front: "びゃ",
            back: "bya"
          },
          {
            front: "ぴゃ",
            back: "pya"
          }
        ]
      }
    ]
  },

  {
    id: 32,
    title: "ฝึกอ่านคำที่มีเสียงผสม",
    subtitle: "เปลี่ยนจากการจำตัวอักษรเป็นการอ่านคำจริง",
    sections: [
      {
        type: "text",
        title: "ถึงเวลาประกอบคำ",
        content: `
          <p>ที่ผ่านมาเราเน้นจำเสียงทีละตัว ตอนนี้ลองนำเสียงเหล่านั้นไปอ่านเป็นคำจริง</p>
          <p>เวลามองคำภาษาญี่ปุ่น อย่ารีบแยกทุกตัวเป็นเสียงเดี่ยว ให้สังเกตว่าเจอ <strong>ゃ ゅ ょ ตัวเล็ก</strong> หรือไม่</p>
          <p>ถ้าเจอ ให้รวมกับตัวก่อนหน้าเป็นเสียงผสมทันที</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างการอ่าน",
        content: `
          <div class="example-card">
            <div class="example-jp">きょう</div>
            <div class="example-reading">kyou</div>
            <div class="example-thai">วันนี้</div>
            <p>きょ + う</p>
          </div>

          <div class="example-card">
            <div class="example-jp">しゃしん</div>
            <div class="example-reading">shashin</div>
            <div class="example-thai">รูปถ่าย</div>
            <p>しゃ + し + ん</p>
          </div>

          <div class="example-card">
            <div class="example-jp">ちょっと</div>
            <div class="example-reading">chotto</div>
            <div class="example-thai">นิดหน่อย</div>
            <p>ちょ + っ + と</p>
          </div>

          <div class="example-card">
            <div class="example-jp">りょこう</div>
            <div class="example-reading">ryokou</div>
            <div class="example-thai">การท่องเที่ยว</div>
            <p>りょ + こ + う</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "วิธีมองคำ",
        items: [
          "きょう → きょ + う",
          "しゃしん → しゃ + し + ん",
          "ちょっと → ちょ + っ + と",
          "りょこう → りょ + こ + う",
          "ぎゅうにゅう → ぎゅ + う + にゅ + う"
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "きょう",
            reading: "kyou",
            thai: "เคียว",
            meaning: "วันนี้"
          },
          {
            jp: "しゃしん",
            reading: "shashin",
            thai: "ชะชิน",
            meaning: "รูปถ่าย"
          },
          {
            jp: "ちょっと",
            reading: "chotto",
            thai: "ช็อตโตะ",
            meaning: "นิดหน่อย"
          },
          {
            jp: "りょこう",
            reading: "ryokou",
            thai: "เรียวโค",
            meaning: "การท่องเที่ยว"
          },
          {
            jp: "ぎゅうにゅう",
            reading: "gyuunyuu",
            thai: "กิวนิว",
            meaning: "นม"
          },
          {
            jp: "びょういん",
            reading: "byouin",
            thai: "เบียวอิน",
            meaning: "โรงพยาบาล"
          },
          {
            jp: "じょうず",
            reading: "jouzu",
            thai: "โจซุ",
            meaning: "เก่ง / ชำนาญ"
          }
        ]
      },
      {
        type: "practice",
        question: "きょう ควรแบ่งเสียงอย่างไร?",
        choices: [
          "き + よ + う",
          "きょ + う",
          "き + ょ + う",
          "きょうทั้งหมดเป็นเสียงเดียว"
        ],
        answer: 1,
        explanation: "きょう แบ่งได้เป็น きょ + う โดย きょ เป็นเสียงผสม"
      },
      {
        type: "practice",
        question: "しゃしん มีเสียงผสมอยู่ตรงไหน?",
        choices: [
          "しゃ",
          "しん",
          "しゃし",
          "ไม่มี"
        ],
        answer: 0,
        explanation: "しゃ เป็นเสียงผสมจาก し + ゃ"
      },
      {
        type: "practice",
        question: "りょこう อ่านว่าอะไร?",
        choices: [
          "ryokou",
          "riyokou",
          "ryuku",
          "ryou"
        ],
        answer: 0,
        explanation: "りょこう = ryokou"
      },
      {
        type: "practice",
        question: "ぎゅうにゅう หมายถึงอะไร?",
        choices: [
          "ชา",
          "น้ำ",
          "นม",
          "ข้าว"
        ],
        answer: 2,
        explanation: "ぎゅうにゅう = gyuunyuu หมายถึงนม"
      },
      {
        type: "practice",
        question: "びょういん หมายถึงอะไร?",
        choices: [
          "โรงพยาบาล",
          "โรงเรียน",
          "ร้านค้า",
          "สถานี"
        ],
        answer: 0,
        explanation: "びょういん = byouin หมายถึงโรงพยาบาล"
      },
      {
        type: "tip",
        title: "อย่าอ่านแบบสะกดไทยทีละตัว",
        content: `
          <p>เช่นเห็น <strong>きょ</strong> อย่าอ่านว่า "คิ-โยะ"</p>
          <p>ให้มองเป็นก้อนเดียวว่า <strong>kyo</strong></p>

          <p>ฝึกแบบนี้:</p>
          <div class="jp-big">きゃ　しゃ　ちゃ　にゃ</div>
          <div class="jp-big">ひゃ　みゃ　りゃ　ぎゃ</div>
          <div class="jp-big">じゃ　びゃ　ぴゃ</div>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "きょう = ?",
            answer: "kyou"
          },
          {
            question: "しゃしん = ?",
            answer: "shashin"
          },
          {
            question: "りょこう = ?",
            answer: "ryokou"
          },
          {
            question: "ぎゅうにゅう = ?",
            answer: "gyuunyuu"
          }
        ]
      }
    ]
  },

  {
    id: 33,
    title: "เสียงผสมขั้นสูงและรูปที่พบไม่บ่อย",
    subtitle: "รู้ไว้เพื่ออ่านคำจริงได้กว้างขึ้น",
    sections: [
      {
        type: "text",
        title: "ไม่ได้มีแค่ชุดหลัก",
        content: `
          <p>ในภาษาญี่ปุ่นจริง ๆ ยังมีเสียงผสมรูปอื่นที่พบได้ โดยเฉพาะในคำที่มาจากภาษาต่างประเทศ ชื่อเฉพาะ หรือคำเลียนเสียง</p>
          <p>แต่สำหรับผู้เริ่มต้น เราจะยังไม่เน้นให้จำทั้งหมด เพราะชุดหลักที่เรียนมาก่อนหน้านี้สำคัญกว่ามาก</p>
        `
      },
      {
        type: "concept",
        title: "ตัวอย่างรูปเพิ่มเติม",
        items: [
          "ふぁ = fa",
          "ふぃ = fi",
          "ふぇ = fe",
          "ふぉ = fo",
          "うぃ = wi",
          "うぇ = we",
          "うぉ = wo",
          "てぃ = ti",
          "でぃ = di",
          "とぅ = tu",
          "どぅ = du"
        ]
      },
      {
        type: "note",
        title: "ยังไม่ต้องท่องทั้งหมด",
        content: `
          <p>รูปเหล่านี้แตกต่างจากเสียงผสมหลัก เช่น きゃ しゃ ちゃ เพราะบางรูปถูกใช้เพื่อถ่ายทอดเสียงจากภาษาต่างประเทศ</p>
          <p>ดังนั้นตอนนี้ให้จำไว้เพียงว่า <strong>ภาษาญี่ปุ่นสามารถสร้างเสียงเพิ่มเติมด้วยตัวเล็กได้</strong></p>
          <p>เราจะกลับมาเรียนกลุ่มนี้อย่างละเอียดอีกครั้งเมื่อเข้าสู่บท <strong>คาตาคานะและคำยืมจากต่างประเทศ</strong></p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างที่อาจพบในอนาคต",
        content: `
          <div class="example-card">
            <div class="example-jp">ファイル</div>
            <div class="example-reading">fairu</div>
            <div class="example-thai">ไฟล์</div>
          </div>

          <div class="example-card">
            <div class="example-jp">テレビ</div>
            <div class="example-reading">terebi</div>
            <div class="example-thai">โทรทัศน์</div>
          </div>

          <p>ตัวอย่างเหล่านี้เป็น <strong>คาตาคานะ</strong> ซึ่งเราจะเรียนเป็นระบบในช่วงถัดไป</p>
        `
      },
      {
        type: "practice",
        question: "รูปใดเป็นเสียงที่ใช้สร้าง fa?",
        choices: [
          "ふぁ",
          "ふゃ",
          "は",
          "ふあ"
        ],
        answer: 0,
        explanation: "ふぁ ใช้ถ่ายทอดเสียง fa ในคำต่างประเทศบางคำ"
      },
      {
        type: "practice",
        question: "รูปใดใช้สร้างเสียง fi?",
        choices: [
          "ふぃ",
          "ひ",
          "ふい",
          "ぴ"
        ],
        answer: 0,
        explanation: "ふぃ = fi"
      },
      {
        type: "practice",
        question: "เราควรทำอย่างไรกับเสียงผสมขั้นสูงในตอนนี้?",
        choices: [
          "ต้องท่องทั้งหมดทันที",
          "ไม่ต้องเรียนอีกเลย",
          "จำไว้ว่ามีอยู่ และจะเรียนละเอียดภายหลัง",
          "ใช้แทนเสียงผสมทุกชนิด"
        ],
        answer: 2,
        explanation: "ตอนนี้ให้โฟกัสเสียงผสมหลักก่อน ส่วนรูปเพิ่มเติมจะเรียนอย่างละเอียดภายหลัง"
      },
      {
        type: "tip",
        title: "เป้าหมายของบทนี้",
        content: `
          <p>ไม่ใช่การท่องเสียงพิเศษทั้งหมด แต่คือการทำให้เราไม่ตกใจเมื่อเห็นรูปอย่าง <strong>ふぁ</strong> หรือ <strong>てぃ</strong></p>
          <p>เมื่อเจอในอนาคต เราจะรู้ทันทีว่าตัวเล็กกำลังช่วยสร้างเสียงเพิ่มเติม</p>
        `
      }
    ]
  },

  {
    id: 34,
    title: "จังหวะเสียงของภาษาญี่ปุ่น",
    subtitle: "Mora และการอ่านให้เป็นจังหวะ",
    sections: [
      {
        type: "text",
        title: "ทำไมภาษาญี่ปุ่นถึงฟังเป็นจังหวะ?",
        content: `
          <p>ภาษาญี่ปุ่นมีแนวคิดเรื่อง <strong>mora</strong> หรือหน่วยจังหวะเสียง ซึ่งสำคัญมากเวลาอ่านและพูด</p>
          <p>สำหรับผู้เริ่มต้น เราสามารถคิดง่าย ๆ ว่าแต่ละส่วนของคำมีจังหวะของตัวเอง และเสียงผสมอย่าง <strong>きゃ</strong> จะนับเป็นหนึ่งจังหวะ ไม่ใช่สองจังหวะ</p>
        `
      },
      {
        type: "concept",
        title: "ลองนับจังหวะ",
        items: [
          "きゃ = 1 จังหวะ",
          "しゃ = 1 จังหวะ",
          "ちょ = 1 จังหวะ",
          "きょう = 2 จังหวะ → きょ + う",
          "しゃしん = 3 จังหวะ → しゃ + し + ん"
        ]
      },
      {
        type: "example",
        title: "เปรียบเทียบให้เห็นภาพ",
        content: `
          <div class="example-card">
            <div class="example-jp">きゃ</div>
            <div class="example-reading">kya</div>
            <div class="example-thai">1 จังหวะ</div>
          </div>

          <div class="example-card">
            <div class="example-jp">きや</div>
            <div class="example-reading">kiya</div>
            <div class="example-thai">2 จังหวะ</div>
          </div>

          <p>ดังนั้น <strong>きゃ</strong> กับ <strong>きや</strong> จึงไม่ได้เหมือนกัน</p>
        `
      },
      {
        type: "note",
        title: "นี่สำคัญมากสำหรับการฟัง",
        content: `
          <p>เวลาฟังเจ้าของภาษาพูด เราอาจรู้สึกว่าเสียงบางคำเร็วมาก เพราะเสียงผสมถูกรวมเป็นจังหวะเดียว</p>
          <p>เช่น <strong>きゃ</strong> ไม่ควรฟังเป็น "คิ-ยะ" แต่เป็นเสียงเดียวที่ไหลต่อกัน</p>
        `
      },
      {
        type: "practice",
        question: "きゃ มีกี่จังหวะ?",
        choices: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 0,
        explanation: "きゃ เป็นเสียงผสมหนึ่งหน่วยจังหวะ"
      },
      {
        type: "practice",
        question: "きや มีกี่จังหวะ?",
        choices: [
          "1",
          "2",
          "3",
          "ขึ้นอยู่กับคำ"
        ],
        answer: 1,
        explanation: "き + や ตัวใหญ่ เป็นสองหน่วยเสียง"
      },
      {
        type: "practice",
        question: "しゃしん สามารถแบ่งจังหวะได้อย่างไร?",
        choices: [
          "しゃ + し + ん",
          "し + ゃ + し + ん",
          "しゃ + しん ทั้งหมด 2 จังหวะ",
          "し + ゃし + ん"
        ],
        answer: 0,
        explanation: "しゃ เป็นหนึ่งจังหวะ ตามด้วย し และ ん รวมเป็น 3 จังหวะ"
      },
      {
        type: "tip",
        title: "ฝึกด้วยการเคาะโต๊ะ",
        content: `
          <p>ลองอ่านแล้วเคาะจังหวะตาม:</p>
          <div class="jp-big">きゃ　しゃ　ちゃ</div>
          <p>หนึ่งคำต่อหนึ่งจังหวะ</p>

          <div class="jp-big">きょう</div>
          <p>เคาะ 2 ครั้ง: きょ → う</p>

          <div class="jp-big">しゃしん</div>
          <p>เคาะ 3 ครั้ง: しゃ → し → ん</p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "きゃ = กี่จังหวะ?",
            answer: "1"
          },
          {
            question: "きや = กี่จังหวะ?",
            answer: "2"
          },
          {
            question: "しゃしん = กี่จังหวะ?",
            answer: "3"
          }
        ]
      }
    ]
  },

  {
    id: 35,
    title: "แบบทดสอบใหญ่: เสียงผสม",
    subtitle: "ทดสอบก่อนเข้าสู่ っ ตัวเล็ก",
    sections: [
      {
        type: "text",
        title: "Final Check: เสียงผสม",
        content: `
          <p>มาถึงบททดสอบเสียงผสมแล้ว</p>
          <p>รอบนี้จะไม่ได้ถามแค่เสียงทีละตัว แต่จะรวมทั้งการอ่าน การแยกคำ และการสังเกตตัวเล็ก</p>
          <p>ถ้าทำได้ไม่หมดไม่เป็นไร ให้ย้อนกลับไปทบทวน Lesson 20–34 แล้วลองใหม่</p>
        `
      },
      {
        type: "practice",
        question: "きゃ อ่านว่าอะไร?",
        choices: [
          "kya",
          "ka",
          "kiya",
          "ya"
        ],
        answer: 0,
        explanation: "きゃ = kya"
      },
      {
        type: "practice",
        question: "しゅ อ่านว่าอะไร?",
        choices: [
          "sha",
          "shu",
          "sho",
          "su"
        ],
        answer: 1,
        explanation: "しゅ = shu"
      },
      {
        type: "practice",
        question: "ちょ อ่านว่าอะไร?",
        choices: [
          "cha",
          "chu",
          "cho",
          "to"
        ],
        answer: 2,
        explanation: "ちょ = cho"
      },
      {
        type: "practice",
        question: "にゅ อ่านว่าอะไร?",
        choices: [
          "nya",
          "nyu",
          "nyo",
          "nu"
        ],
        answer: 1,
        explanation: "にゅ = nyu"
      },
      {
        type: "practice",
        question: "ひゃ อ่านว่าอะไร?",
        choices: [
          "hya",
          "hyu",
          "hyo",
          "ha"
        ],
        answer: 0,
        explanation: "ひゃ = hya"
      },
      {
        type: "practice",
        question: "りょ อ่านว่าอะไร?",
        choices: [
          "rya",
          "ryu",
          "ryo",
          "ro"
        ],
        answer: 2,
        explanation: "りょ = ryo"
      },
      {
        type: "practice",
        question: "ぎゅ อ่านว่าอะไร?",
        choices: [
          "kyu",
          "gyu",
          "gyo",
          "gu"
        ],
        answer: 1,
        explanation: "ぎゅ = gyu"
      },
      {
        type: "practice",
        question: "じゃ อ่านว่าอะไร?",
        choices: [
          "sha",
          "ja",
          "jiya",
          "ga"
        ],
        answer: 1,
        explanation: "じゃ = ja"
      },
      {
        type: "practice",
        question: "ぴょ อ่านว่าอะไร?",
        choices: [
          "pya",
          "pyu",
          "pyo",
          "po"
        ],
        answer: 2,
        explanation: "ぴょ = pyo"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงผสม?",
        choices: [
          "や",
          "ゆ",
          "きょ",
          "よ"
        ],
        answer: 2,
        explanation: "きょ = き + ょ ตัวเล็ก จึงเป็นเสียงผสม"
      },
      {
        type: "practice",
        question: "ข้อใดไม่ใช่เสียงผสม?",
        choices: [
          "しゃ",
          "ちゃ",
          "きや",
          "りょ"
        ],
        answer: 2,
        explanation: "きや ใช้ や ตัวใหญ่ จึงไม่ใช่เสียงผสม"
      },
      {
        type: "practice",
        question: "คำว่า きょう แบ่งเป็นอะไร?",
        choices: [
          "き + よ + う",
          "きょ + う",
          "き + ょ + う",
          "きょうเป็นเสียงเดียวทั้งหมด"
        ],
        answer: 1,
        explanation: "きょう = きょ + う"
      },
      {
        type: "practice",
        question: "しゃしん อ่านว่าอะไร?",
        choices: [
          "shashin",
          "shiyashin",
          "sashin",
          "shushin"
        ],
        answer: 0,
        explanation: "しゃしん = shashin"
      },
      {
        type: "practice",
        question: "りょこう หมายถึงอะไร?",
        choices: [
          "โรงพยาบาล",
          "การท่องเที่ยว",
          "การบ้าน",
          "วันนี้"
        ],
        answer: 1,
        explanation: "りょこう = ryokou หมายถึงการท่องเที่ยว"
      },
      {
        type: "practice",
        question: "びょういん หมายถึงอะไร?",
        choices: [
          "โรงพยาบาล",
          "โรงเรียน",
          "ร้านอาหาร",
          "สถานี"
        ],
        answer: 0,
        explanation: "びょういん = byouin หมายถึงโรงพยาบาล"
      },
      {
        type: "practice",
        question: "ぎゅうにゅう หมายถึงอะไร?",
        choices: [
          "นม",
          "ชา",
          "น้ำ",
          "ข้าว"
        ],
        answer: 0,
        explanation: "ぎゅうにゅう = gyuunyuu หมายถึงนม"
      },
      {
        type: "practice",
        question: "ตัว ゃ ใน きゃ ต้องเป็นแบบใด?",
        choices: [
          "ตัวใหญ่ や",
          "ตัวเล็ก ゃ",
          "ตัวคาตาคานะ",
          "ไม่สำคัญ"
        ],
        answer: 1,
        explanation: "เสียงผสมต้องใช้ ゃ ตัวเล็ก"
      },
      {
        type: "practice",
        question: "ถ้าเห็น きや จะอ่านแบบเสียงผสม kya หรือไม่?",
        choices: [
          "ใช่",
          "ไม่ใช่",
          "อ่านได้ทั้งสองแบบ",
          "ขึ้นอยู่กับฟอนต์"
        ],
        answer: 1,
        explanation: "きや ใช้ や ตัวใหญ่ จึงไม่ใช่ きゃ และไม่ใช่ kya แบบเสียงผสม"
      },
      {
        type: "tip",
        title: "ผ่านบทนี้แล้ว",
        content: `
          <p>ถ้าเริ่มอ่านเสียงผสมได้แล้ว ถือว่าเราเข้าใจพื้นฐานฮิรางานะไปอีกขั้นหนึ่ง</p>
          <p>สิ่งต่อไปที่สำคัญมากคือ <strong>っ ตัวเล็ก</strong> ซึ่งทำหน้าที่ต่างจาก ゃ ゅ ょ อย่างชัดเจน</p>
          <div class="jp-big">きゃ　↔　きっ</div>
          <p>ตัวหนึ่งเป็นเสียงผสม อีกตัวเกี่ยวข้องกับการออกเสียงพยัญชนะซ้ำและจังหวะหยุดสั้น ๆ</p>
        `
      },
      {
        type: "check",
        title: "ภารกิจสุดท้าย",
        items: [
          {
            question: "เสียงผสมใช้ ゃ ゅ ょ แบบไหน?",
            answer: "ตัวเล็ก"
          },
          {
            question: "きゃ = ?",
            answer: "kya"
          },
          {
            question: "しゃ = ?",
            answer: "sha"
          },
          {
            question: "ちゃ = ?",
            answer: "cha"
          },
          {
            question: "りょ = ?",
            answer: "ryo"
          },
          {
            question: "ぴょ = ?",
            answer: "pyo"
          }
        ]
      }
    ]
  }
);
  
  lessons.push(
  {
    id: 36,
    title: "っ ตัวเล็ก",
    subtitle: "เสียงหยุดสั้นและพยัญชนะซ้ำ",
    sections: [
      {
        type: "text",
        title: "っ คืออะไร?",
        content: `
          <p>ตัวต่อไปที่สำคัญมากคือ <strong>っ</strong> หรือที่เรียกว่า <strong>小さいつ</strong> (chiisai tsu) ซึ่งแปลตรงตัวว่า "つ ตัวเล็ก"</p>
          <div class="jp-big">っ</div>
          <p>มันไม่อ่านว่า <strong>tsu</strong> แบบตัว <strong>つ</strong> ปกติ</p>
          <p>แต่ทำหน้าที่สร้าง <strong>จังหวะหยุดสั้น ๆ</strong> ก่อนเสียงพยัญชนะถัดไป</p>
        `
      },
      {
        type: "concept",
        title: "ตัวใหญ่กับตัวเล็กต่างกัน",
        items: [
          "つ = tsu เป็นหนึ่งเสียงปกติ",
          "っ = ตัวเล็ก ใช้สร้างจังหวะหยุดสั้น",
          "っ ไม่ได้มีเสียงสระของตัวเอง",
          "ต้องดูตัวที่อยู่หลัง っ เพื่อรู้ว่าพยัญชนะจะซ้ำเป็นเสียงอะไร",
          "ในการเขียนโรมาจิมักแสดงพยัญชนะของตัวถัดไปซ้ำ เช่น きって = kitte"
        ]
      },
      {
        type: "example",
        title: "เปรียบเทียบ",
        content: `
          <div class="compare-box">
            <div>
              <span class="jp-small-title">つ ตัวใหญ่</span>
              <div class="jp-big">つ</div>
              <p>tsu</p>
            </div>

            <div>
              <span class="jp-small-title">っ ตัวเล็ก</span>
              <div class="jp-big">っ</div>
              <p>จังหวะหยุด</p>
            </div>
          </div>

          <div class="example-card">
            <div class="example-jp">つき</div>
            <div class="example-reading">tsuki</div>
            <div class="example-thai">พระจันทร์</div>
          </div>

          <div class="example-card">
            <div class="example-jp">っき</div>
            <div class="example-reading">kki</div>
            <div class="example-thai">เป็นส่วนหนึ่งของคำที่มีเสียงซ้ำ</div>
          </div>
        `
      },
      {
        type: "note",
        title: "คิดเป็นจังหวะ",
        content: `
          <p>เวลาเจอ っ ให้คิดว่าเรามี <strong>ช่องว่างสั้น ๆ</strong> ก่อนออกเสียงตัวถัดไป</p>
          <div class="jp-big">っ + て → tte</div>
          <p>ดังนั้น <strong>きって</strong> จะเป็น</p>
          <div class="jp-big">き → っ → て</div>
          <p>และอ่านเป็น <strong>kitte</strong></p>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียน っ",
        items: [
          {
            char: "っ",
            romaji: "small tsu",
            strokes: "รูปเล็กของ つ",
            tip: "เขียนให้เล็กกว่าขนาดของ つ ปกติอย่างชัดเจน"
          }
        ]
      },
      {
        type: "practice",
        question: "っ อ่านว่า tsu ตามปกติหรือไม่?",
        choices: [
          "ใช่",
          "ไม่ใช่",
          "อ่านว่า chi",
          "อ่านว่า shi"
        ],
        answer: 1,
        explanation: "っ เป็นตัวเล็กที่ใช้สร้างจังหวะหยุดสั้น ไม่ได้อ่านว่า tsu เต็มเสียง"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นตัวเล็ก?",
        choices: [
          "つ",
          "っ",
          "す",
          "し"
        ],
        answer: 1,
        explanation: "っ คือ つ ตัวเล็ก"
      },
      {
        type: "practice",
        question: "ใน きって ตัว っ ทำหน้าที่อะไร?",
        choices: [
          "สร้างเสียง tsu",
          "สร้างเสียง ki",
          "สร้างจังหวะหยุดก่อนเสียง t",
          "ทำให้คำเป็นอดีต"
        ],
        answer: 2,
        explanation: "っ ทำให้เกิดจังหวะหยุดสั้นก่อนเสียง t ของ て"
      },
      {
        type: "tip",
        title: "จำสั้น ๆ",
        content: `
          <div class="jp-big">つ = อ่าน</div>
          <div class="jp-big">っ = หยุด</div>
          <p>อย่าเผลออ่าน っ เป็น "สึ" ทุกครั้งที่เจอ</p>
        `
      }
    ]
  },

  {
    id: 37,
    title: "っ กับเสียงพยัญชนะซ้ำ",
    subtitle: "เรียนวิธีดูว่าเสียงไหนต้องซ้ำ",
    sections: [
      {
        type: "text",
        title: "ดูตัวหลัง っ",
        content: `
          <p>วิธีอ่าน っ ที่ง่ายที่สุดคือ <strong>ดูตัวอักษรที่อยู่หลังมัน</strong></p>
          <p>โดยทั่วไปเราจะนำเสียงพยัญชนะของตัวถัดไปมาซ้ำในโรมาจิ</p>

          <div class="jp-big">っ + か → kka</div>
          <div class="jp-big">っ + さ → ssa</div>
          <div class="jp-big">っ + た → tta</div>
          <div class="jp-big">っ + ぱ → ppa</div>
        `
      },
      {
        type: "concept",
        title: "ตัวอย่างการเปลี่ยนเสียง",
        items: [
          "っか → kka",
          "っき → kki",
          "っく → kku",
          "っけ → kke",
          "っこ → kko",
          "っさ → ssa",
          "った → tta",
          "っぱ → ppa"
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างคำจริง",
        content: `
          <div class="example-card">
            <div class="example-jp">がっこう</div>
            <div class="example-reading">gakkou</div>
            <div class="example-thai">โรงเรียน</div>
          </div>

          <div class="example-card">
            <div class="example-jp">きって</div>
            <div class="example-reading">kitte</div>
            <div class="example-thai">แสตมป์</div>
          </div>

          <div class="example-card">
            <div class="example-jp">ざっし</div>
            <div class="example-reading">zasshi</div>
            <div class="example-thai">นิตยสาร</div>
          </div>

          <div class="example-card">
            <div class="example-jp">いっぱい</div>
            <div class="example-reading">ippai</div>
            <div class="example-thai">เต็ม / มากมายหนึ่งถ้วยหรือหนึ่งแก้ว</div>
          </div>
        `
      },
      {
        type: "note",
        title: "จังหวะสำคัญมาก",
        content: `
          <p>อย่าออกเสียงรวบ <strong>がっこう</strong> เป็น "กะโก"</p>
          <p>ให้มีจังหวะหยุดสั้นก่อน <strong>こ</strong></p>

          <div class="jp-big">が → っ → こ → う</div>

          <p>โรมาจิคือ <strong>gakkou</strong></p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "がっこう",
            reading: "gakkou",
            thai: "กักโค",
            meaning: "โรงเรียน"
          },
          {
            jp: "きって",
            reading: "kitte",
            thai: "คิตเตะ",
            meaning: "แสตมป์"
          },
          {
            jp: "ざっし",
            reading: "zasshi",
            thai: "ซัสชิ",
            meaning: "นิตยสาร"
          },
          {
            jp: "いっぱい",
            reading: "ippai",
            thai: "อิปไป",
            meaning: "เต็ม / มากมาย"
          }
        ]
      },
      {
        type: "practice",
        question: "がっこう อ่านว่าอะไร?",
        choices: [
          "gakou",
          "gakkou",
          "gatsuou",
          "gakkouu"
        ],
        answer: 1,
        explanation: "がっこう = gakkou"
      },
      {
        type: "practice",
        question: "きって อ่านว่าอะไร?",
        choices: [
          "kite",
          "kitsute",
          "kitte",
          "kiite"
        ],
        answer: 2,
        explanation: "きって = kitte"
      },
      {
        type: "practice",
        question: "ざっし อ่านว่าอะไร?",
        choices: [
          "zashi",
          "zasshi",
          "zatsushi",
          "zashi"
        ],
        answer: 1,
        explanation: "ざっし = zasshi"
      },
      {
        type: "practice",
        question: "ถ้าเห็น っ ตามด้วย か โดยทั่วไปจะเกิดอะไร?",
        choices: [
          "ka",
          "kka",
          "tsuka",
          "kya"
        ],
        answer: 1,
        explanation: "っ + か ทำให้เกิดเสียง k ซ้ำ จึงเขียนเป็น kka"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "っか = ?",
            answer: "kka"
          },
          {
            question: "っさ = ?",
            answer: "ssa"
          },
          {
            question: "った = ?",
            answer: "tta"
          },
          {
            question: "っぱ = ?",
            answer: "ppa"
          }
        ]
      }
    ]
  },

  {
    id: 38,
    title: "っ ในคำศัพท์จริง",
    subtitle: "ฝึกอ่านคำที่ใช้ในชีวิตประจำวัน",
    sections: [
      {
        type: "text",
        title: "เจอ っ ในชีวิตจริงเยอะมาก",
        content: `
          <p>เมื่อเริ่มอ่านภาษาญี่ปุ่นจริง เราจะเจอ っ บ่อยมาก โดยเฉพาะในคำทั่วไปและคำกริยาบางรูป</p>
          <p>ดังนั้นอย่าจำแค่กฎ แต่ให้ฝึกมองคำทั้งคำแล้วจับจังหวะให้ได้</p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ที่พบบ่อย",
        items: [
          {
            jp: "ちょっと",
            reading: "chotto",
            thai: "ช็อตโตะ",
            meaning: "นิดหน่อย / สักครู่"
          },
          {
            jp: "もっと",
            reading: "motto",
            thai: "ม็อตโตะ",
            meaning: "มากกว่านี้"
          },
          {
            jp: "ずっと",
            reading: "zutto",
            thai: "ซุตโตะ",
            meaning: "ตลอด / เรื่อยมา"
          },
          {
            jp: "きっと",
            reading: "kitto",
            thai: "คิตโตะ",
            meaning: "แน่นอน / ต้อง..."
          },
          {
            jp: "やっぱり",
            reading: "yappari",
            thai: "ยัปปาริ",
            meaning: "อย่างที่คิดไว้ / สุดท้ายก็"
          },
          {
            jp: "いっぱい",
            reading: "ippai",
            thai: "อิปไป",
            meaning: "เต็ม / มากมาย"
          }
        ]
      },
      {
        type: "example",
        title: "แยกจังหวะคำ",
        content: `
          <div class="example-card">
            <div class="example-jp">ちょっと</div>
            <div class="example-reading">cho → t → to</div>
            <div class="example-thai">นิดหน่อย</div>
          </div>

          <div class="example-card">
            <div class="example-jp">もっと</div>
            <div class="example-reading">mo → t → to</div>
            <div class="example-thai">มากกว่านี้</div>
          </div>

          <div class="example-card">
            <div class="example-jp">きっと</div>
            <div class="example-reading">ki → t → to</div>
            <div class="example-thai">แน่นอน</div>
          </div>
        `
      },
      {
        type: "note",
        title: "っ ไม่ได้แปลว่าอะไร",
        content: `
          <p>สำคัญมาก: <strong>っ ไม่ได้มีความหมายเป็นคำศัพท์แยกตัวเอง</strong></p>
          <p>มันทำหน้าที่ด้านการออกเสียงและจังหวะ</p>
          <p>ดังนั้นอย่าพยายามแปล っ ว่า "สึ" หรือคำใดคำหนึ่ง</p>
        `
      },
      {
        type: "practice",
        question: "ちょっと หมายถึงอะไร?",
        choices: [
          "วันนี้",
          "นิดหน่อย",
          "มากกว่านี้",
          "แน่นอน"
        ],
        answer: 1,
        explanation: "ちょっと = chotto หมายถึงนิดหน่อยหรือใช้ในความหมายว่าสักครู่"
      },
      {
        type: "practice",
        question: "もっと หมายถึงอะไร?",
        choices: [
          "มากกว่านี้",
          "นิดหน่อย",
          "ตลอด",
          "แน่นอน"
        ],
        answer: 0,
        explanation: "もっと = motto หมายถึงมากกว่านี้"
      },
      {
        type: "practice",
        question: "คำใดมี っ?",
        choices: [
          "きょう",
          "しゃしん",
          "ちょっと",
          "りょこう"
        ],
        answer: 2,
        explanation: "ちょっと มี っ อยู่ระหว่าง と สองตัว"
      },
      {
        type: "practice",
        question: "やっぱり อ่านว่าอะไร?",
        choices: [
          "yapari",
          "yappari",
          "yappuri",
          "yatsupari"
        ],
        answer: 1,
        explanation: "やっぱり = yappari มี っ ทำให้เสียง p ซ้ำ"
      },
      {
        type: "flash",
        title: "แฟลชการ์ด っ",
        cards: [
          {
            front: "ちょっと",
            back: "chotto — นิดหน่อย"
          },
          {
            front: "もっと",
            back: "motto — มากกว่านี้"
          },
          {
            front: "ずっと",
            back: "zutto — ตลอด / เรื่อยมา"
          },
          {
            front: "きっと",
            back: "kitto — แน่นอน"
          },
          {
            front: "やっぱり",
            back: "yappari — อย่างที่คิดไว้ / สุดท้ายก็"
          }
        ]
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "ちょっと = ?",
            answer: "chotto"
          },
          {
            question: "もっと = ?",
            answer: "motto"
          },
          {
            question: "きっと = ?",
            answer: "kitto"
          },
          {
            question: "やっぱり = ?",
            answer: "yappari"
          }
        ]
      }
    ]
  },

  {
    id: 39,
    title: "ฝึกแยก っ กับ ゃ ゅ ょ",
    subtitle: "ตัวเล็กเหมือนกัน แต่หน้าที่ต่างกัน",
    sections: [
      {
        type: "text",
        title: "ตัวเล็กไม่ได้ทำหน้าที่เหมือนกันทั้งหมด",
        content: `
          <p>ตอนนี้เราเรียนตัวเล็กมาสองกลุ่มแล้ว</p>

          <div class="jp-big">ゃ　ゅ　ょ</div>
          <p class="center">ใช้สร้างเสียงผสม</p>

          <div class="jp-big">っ</div>
          <p class="center">ใช้สร้างจังหวะหยุดและเสียงพยัญชนะซ้ำ</p>

          <p>ต้องแยกให้ออก เพราะหน้าที่ต่างกันโดยสิ้นเชิง</p>
        `
      },
      {
        type: "concept",
        title: "ตารางเปรียบเทียบ",
        items: [
          "きゃ → เสียงผสม kya",
          "きゅ → เสียงผสม kyu",
          "きょ → เสียงผสม kyo",
          "きって → っ ทำให้เกิดเสียง t ซ้ำ",
          "がっこう → っ ทำให้เกิดเสียง k ซ้ำ",
          "ちょっと → มีทั้ง ちょ และ っ อยู่ในคำเดียวกัน"
        ]
      },
      {
        type: "example",
        title: "คำที่มีตัวเล็กหลายชนิด",
        content: `
          <div class="example-card">
            <div class="example-jp">ちょっと</div>
            <div class="example-reading">chotto</div>
            <div class="example-thai">นิดหน่อย</div>
            <p><strong>ちょ</strong> = เสียงผสม</p>
            <p><strong>っ</strong> = จังหวะหยุด</p>
          </div>

          <div class="example-card">
            <div class="example-jp">きょう</div>
            <div class="example-reading">kyou</div>
            <div class="example-thai">วันนี้</div>
            <p><strong>きょ</strong> = เสียงผสม</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ตัวใดใช้สร้างเสียงผสม?",
        choices: [
          "っ",
          "ゃ ゅ ょ",
          "ん",
          "゛"
        ],
        answer: 1,
        explanation: "ゃ ゅ ょ ตัวเล็กใช้สร้างเสียงผสม เช่น きゃ しゃ ちょ"
      },
      {
        type: "practice",
        question: "ตัวใดสร้างจังหวะหยุดสั้น?",
        choices: [
          "ゃ",
          "ゅ",
          "ょ",
          "っ"
        ],
        answer: 3,
        explanation: "っ ใช้สร้างจังหวะหยุดสั้นก่อนพยัญชนะถัดไป"
      },
      {
        type: "practice",
        question: "ในคำว่า ちょっと มีตัวเล็กอะไรบ้าง?",
        choices: [
          "มีแค่ っ",
          "มีแค่ ょ",
          "มีทั้ง ょ และ っ",
          "ไม่มีตัวเล็ก"
        ],
        answer: 2,
        explanation: "ちょ มี ょ ตัวเล็ก และคำเดียวกันยังมี っ ด้วย"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงผสม ไม่ใช่เสียงหยุด?",
        choices: [
          "っか",
          "っこ",
          "きゃ",
          "った"
        ],
        answer: 2,
        explanation: "きゃ เป็นเสียงผสมจาก き + ゃ"
      },
      {
        type: "practice",
        question: "ข้อใดมีทั้งเสียงผสมและ っ?",
        choices: [
          "きょう",
          "しゃしん",
          "ちょっと",
          "りょこう"
        ],
        answer: 2,
        explanation: "ちょ = เสียงผสม และ っ = จังหวะหยุด"
      },
      {
        type: "tip",
        title: "จำด้วยหน้าที่",
        content: `
          <p>ไม่ต้องจำแค่ว่าหน้าตาเป็นตัวเล็ก ให้จำว่าแต่ละตัว <strong>ทำอะไร</strong></p>

          <div class="jp-big">ゃ ゅ ょ → ผสมเสียง</div>
          <div class="jp-big">っ → หยุดสั้น</div>

          <p>ถ้าจำสองบรรทัดนี้ได้ จะอ่านคำต่อไปง่ายขึ้นมาก</p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "ゃ ゅ ょ ทำหน้าที่อะไร?",
            answer: "สร้างเสียงผสม"
          },
          {
            question: "っ ทำหน้าที่อะไร?",
            answer: "สร้างจังหวะหยุดสั้น"
          },
          {
            question: "ちょっと มีตัวเล็กอะไร?",
            answer: "ょ และ っ"
          }
        ]
      }
    ]
  },

  {
    id: 40,
    title: "ทบทวน っ และจังหวะการอ่าน",
    subtitle: "แบบฝึกใหญ่ก่อนเข้าสู่เสียงยาว",
    sections: [
      {
        type: "text",
        title: "สรุปสิ่งที่เราเรียน",
        content: `
          <p>ตอนนี้เราอ่านฮิรางานะพื้นฐานได้แล้ว รู้จักเสียงขุ่น เสียงกึ่งขุ่น เสียงผสม และเริ่มรู้จัก っ</p>
          <p>สิ่งสำคัญของบทนี้คือการอ่าน <strong>จังหวะ</strong> ให้ถูกต้อง</p>

          <div class="jp-big">きって</div>
          <p class="center">ki → t → te</p>

          <div class="jp-big">がっこう</div>
          <p class="center">ga → k → ko → u</p>

          <div class="jp-big">ちょっと</div>
          <p class="center">cho → t → to</p>
        `
      },
      {
        type: "practice",
        question: "っ ใน きって ทำให้เกิดเสียงพยัญชนะอะไร?",
        choices: [
          "k",
          "s",
          "t",
          "p"
        ],
        answer: 2,
        explanation: "ตัวหลัง っ คือ て ซึ่งขึ้นต้นด้วยเสียง t จึงเกิด tt"
      },
      {
        type: "practice",
        question: "っ ใน がっこう ทำให้เกิดเสียงพยัญชนะอะไร?",
        choices: [
          "g",
          "k",
          "s",
          "t"
        ],
        answer: 1,
        explanation: "ตัวหลัง っ คือ こ ซึ่งขึ้นต้นด้วยเสียง k จึงเกิด kk"
      },
      {
        type: "practice",
        question: "っ ใน いっぱい ทำให้เกิดเสียงอะไร?",
        choices: [
          "bb",
          "kk",
          "tt",
          "pp"
        ],
        answer: 3,
        explanation: "ตัวหลัง っ คือ ぱ ซึ่งขึ้นต้นด้วย p จึงเกิด pp"
      },
      {
        type: "practice",
        question: "ข้อใดเขียนโรมาจิถูกต้อง?",
        choices: [
          "がっこう = gakou",
          "がっこう = gakkou",
          "がっこう = gatsukou",
          "がっこう = gakukou"
        ],
        answer: 1,
        explanation: "がっこう = gakkou"
      },
      {
        type: "practice",
        question: "ข้อใดเขียนโรมาจิถูกต้อง?",
        choices: [
          "きって = kite",
          "きって = kitsute",
          "きって = kitte",
          "きって = ktsute"
        ],
        answer: 2,
        explanation: "きって = kitte"
      },
      {
        type: "practice",
        question: "ข้อใดเขียนโรมาจิถูกต้อง?",
        choices: [
          "ちょっと = choto",
          "ちょっと = chotto",
          "ちょっと = chiyotto",
          "ちょっと = chotsuto"
        ],
        answer: 1,
        explanation: "ちょっと = chotto โดย ちょ เป็นเสียงผสม และ っ ทำให้ t ซ้ำ"
      },
      {
        type: "practice",
        question: "ข้อใดมีทั้งเสียงผสมและ っ?",
        choices: [
          "きょう",
          "りょこう",
          "ちょっと",
          "しゃしん"
        ],
        answer: 2,
        explanation: "ちょ เป็นเสียงผสม และ っ เป็นตัวเล็กสำหรับจังหวะหยุด"
      },
      {
        type: "practice",
        question: "ถ้าเจอ っ เราควรดูอะไรเพื่อช่วยอ่าน?",
        choices: [
          "ตัวก่อนหน้าเท่านั้น",
          "ตัวหลัง っ",
          "จำนวนตัวอักษรทั้งหมด",
          "ความยาวของคำเท่านั้น"
        ],
        answer: 1,
        explanation: "ตัวหลัง っ ช่วยบอกว่าพยัญชนะตัวใดจะถูกทำให้ซ้ำ"
      },
      {
        type: "flash",
        title: "แฟลชการ์ดทบทวน",
        cards: [
          {
            front: "きって",
            back: "kitte — แสตมป์"
          },
          {
            front: "がっこう",
            back: "gakkou — โรงเรียน"
          },
          {
            front: "ざっし",
            back: "zasshi — นิตยสาร"
          },
          {
            front: "ちょっと",
            back: "chotto — นิดหน่อย"
          },
          {
            front: "もっと",
            back: "motto — มากกว่านี้"
          },
          {
            front: "いっぱい",
            back: "ippai — เต็ม / มากมาย"
          }
        ]
      },
      {
        type: "tip",
        title: "ภารกิจอ่านออกเสียง",
        content: `
          <p>ลองอ่านคำต่อไปนี้ออกเสียงจริง ๆ โดยเคาะจังหวะเบา ๆ</p>

          <div class="jp-big">きって</div>
          <div class="jp-big">がっこう</div>
          <div class="jp-big">ざっし</div>
          <div class="jp-big">ちょっと</div>
          <div class="jp-big">もっと</div>
          <div class="jp-big">いっぱい</div>

          <p>พยายามให้ช่วงก่อนพยัญชนะซ้ำมีจังหวะหยุดสั้น ๆ ไม่ใช่เติมเสียง "สึ" เข้าไป</p>
        `
      },
      {
        type: "check",
        title: "ผ่านด่าน っ",
        items: [
          {
            question: "っ อ่านว่า tsu เต็มเสียงหรือไม่?",
            answer: "ไม่"
          },
          {
            question: "っ ทำหน้าที่อะไร?",
            answer: "สร้างจังหวะหยุดสั้น"
          },
          {
            question: "きって = ?",
            answer: "kitte"
          },
          {
            question: "がっこう = ?",
            answer: "gakkou"
          },
          {
            question: "ちょっと = ?",
            answer: "chotto"
          }
        ]
      }
    ]
  }
);

  lessons.push(
  {
    id: 41,
    title: "เสียงยาวในภาษาญี่ปุ่น",
    subtitle: "อ่านเสียงสั้นกับเสียงยาวให้ต่างกัน",
    sections: [
      {
        type: "concept",
        title: "เสียงยาวคืออะไร?",
        content: `
          <p>
            ภาษาญี่ปุ่นให้ความสำคัญกับ <strong>ความยาวของเสียง</strong> มาก
            เพราะคำที่เสียงสั้นกับเสียงยาวอาจเป็นคนละคำหรือมีความหมายต่างกันได้
          </p>
          <p>
            สำหรับฮิรางานะ เราจะไม่ได้ใช้ขีด <strong>ー</strong> แบบเดียวกับคาตากานะ
            แต่จะใช้ตัวสระต่อกันตามรูปแบบของคำ
          </p>
        `
      },
      {
        type: "text",
        title: "จำง่าย ๆ",
        content: `
          <div class="mini-grid">
            <div class="mini-card">
              <strong>おう</strong>
              <span>มักทำให้เสียง お ยาวขึ้น</span>
            </div>
            <div class="mini-card">
              <strong>おお</strong>
              <span>เสียง お ยาวเช่นกัน</span>
            </div>
            <div class="mini-card">
              <strong>えい</strong>
              <span>มักออกเสียงคล้ายเสียง え ยาว</span>
            </div>
            <div class="mini-card">
              <strong>ええ</strong>
              <span>สามารถใช้แสดงเสียง え ยาวได้ในบางคำ</span>
            </div>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <div class="jp-big">こうこう</div>
            <div class="reading">こうこう — koukou</div>
            <div class="meaning">โรงเรียนมัธยม</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おおきい</div>
            <div class="reading">おおきい — ookii</div>
            <div class="meaning">ใหญ่</div>
          </div>

          <div class="example-box">
            <div class="jp-big">せんせい</div>
            <div class="reading">せんせい — sensei</div>
            <div class="meaning">ครู / อาจารย์</div>
          </div>

          <div class="example-box">
            <div class="jp-big">えいが</div>
            <div class="reading">えいが — eiga</div>
            <div class="meaning">ภาพยนตร์</div>
          </div>
        `
      },
      {
        type: "note",
        title: "จุดที่ต้องระวัง",
        content: `
          <p>
            เวลาเห็น <strong>せんせい</strong> อย่ารีบอ่านแยกเป็น
            "เซ็น-เซ-อิ" แบบแข็ง ๆ
          </p>
          <p>
            ในการพูดจริง <strong>えい</strong> มักฟังคล้ายเสียง
            <strong>เอ</strong> ที่ยาวขึ้น เช่น せんせい จะฟังใกล้เคียง
            "เซ็นเซ" มากกว่าการเน้นเสียง "อิ" แยกออกมา
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "こうこう",
            reading: "koukou",
            thai: "โคโค",
            meaning: "โรงเรียนมัธยม"
          },
          {
            jp: "おおきい",
            reading: "ookii",
            thai: "โอกี",
            meaning: "ใหญ่"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู / อาจารย์"
          },
          {
            jp: "えいが",
            reading: "eiga",
            thai: "เอกะ",
            meaning: "ภาพยนตร์"
          },
          {
            jp: "おとうさん",
            reading: "otousan",
            thai: "โอโตซัง",
            meaning: "พ่อ"
          }
        ]
      },
      {
        type: "practice",
        question: "คำใดมีเสียงยาวจาก えい?",
        choices: [
          "せんせい",
          "さかな",
          "たまご",
          "ここ"
        ],
        answer: 0,
        explanation: "せんせい มี せい ซึ่งใช้รูป えい และมักออกเสียงเป็นเสียง e ยาว"
      },
      {
        type: "practice",
        question: "ข้อใดมีรูป おお?",
        choices: [
          "おおきい",
          "こうこう",
          "せんせい",
          "えいが"
        ],
        answer: 0,
        explanation: "おおきい สะกดด้วย お + お ก่อนเข้าสู่ きい"
      }
    ]
  },

  {
    id: 42,
    title: "おう และ おお",
    subtitle: "เสียงโอที่ยาวขึ้น",
    sections: [
      {
        type: "concept",
        title: "สองรูปแบบที่เจอบ่อย",
        content: `
          <p>
            เสียง <strong>お</strong> ที่ยาวสามารถเขียนได้หลายแบบ
            โดยที่เจอบ่อยสำหรับผู้เริ่มต้นคือ <strong>おう</strong> และ <strong>おお</strong>
          </p>
          <p>
            สิ่งสำคัญคืออย่าอ่านตัวท้ายให้เด่นเกินไป
            เพราะทั้งคำจะมีจังหวะเสียงที่ต่อเนื่องกัน
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง おう",
        content: `
          <div class="example-box">
            <div class="jp-big">こうこう</div>
            <div class="reading">koukou</div>
            <div class="meaning">โรงเรียนมัธยม</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おとうさん</div>
            <div class="reading">otousan</div>
            <div class="meaning">พ่อ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ありがとう</div>
            <div class="reading">arigatou</div>
            <div class="meaning">ขอบคุณ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">どうぞ</div>
            <div class="reading">douzo</div>
            <div class="meaning">เชิญ / เชิญเลย</div>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง おお",
        content: `
          <div class="example-box">
            <div class="jp-big">おおきい</div>
            <div class="reading">ookii</div>
            <div class="meaning">ใหญ่</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おおい</div>
            <div class="reading">ooi</div>
            <div class="meaning">มาก / เยอะ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おおきな</div>
            <div class="reading">ookina</div>
            <div class="meaning">ใหญ่</div>
          </div>
        `
      },
      {
        type: "tip",
        title: "เทคนิคการอ่าน",
        content: `
          <p>
            ลองนับจังหวะของเสียงแทนการพยายามลากเสียงแบบภาษาไทย
          </p>
          <p>
            <strong>こ・う・こ・う</strong>
            มีจังหวะเท่ากับ 4 หน่วยเสียง
          </p>
          <p>
            การฝึกนับจังหวะจะช่วยให้เราอ่านภาษาญี่ปุ่นเป็นธรรมชาติมากขึ้น
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ありがとう",
            reading: "arigatou",
            thai: "อะริกาโต",
            meaning: "ขอบคุณ"
          },
          {
            jp: "どうぞ",
            reading: "douzo",
            thai: "โดโซ",
            meaning: "เชิญ"
          },
          {
            jp: "こうこう",
            reading: "koukou",
            thai: "โคโค",
            meaning: "โรงเรียนมัธยม"
          },
          {
            jp: "おとうさん",
            reading: "otousan",
            thai: "โอโตซัง",
            meaning: "พ่อ"
          },
          {
            jp: "おおきい",
            reading: "ookii",
            thai: "โอกี",
            meaning: "ใหญ่"
          }
        ]
      },
      {
        type: "practice",
        question: "คำว่า 'ขอบคุณ' ในภาษาญี่ปุ่นข้อใดถูกต้อง?",
        choices: [
          "ありがとう",
          "ありがと",
          "ありかとう",
          "ありがとうう"
        ],
        answer: 0,
        explanation: "ありがとう เป็นรูปมาตรฐานที่ใช้เขียนคำว่า ขอบคุณ"
      },
      {
        type: "practice",
        question: "คำใดใช้ おお?",
        choices: [
          "おおきい",
          "ありがとう",
          "どうぞ",
          "こうこう"
        ],
        answer: 0,
        explanation: "おおきい มี お + お อยู่ต้นคำ"
      }
    ]
  },

  {
    id: 43,
    title: "えい และ ええ",
    subtitle: "เสียงเอที่ยาวและคำที่พบบ่อย",
    sections: [
      {
        type: "concept",
        title: "เสียง え ที่ยาว",
        content: `
          <p>
            อีกกลุ่มที่ผู้เริ่มต้นจะเจอบ่อยคือ <strong>えい</strong>
            ซึ่งในหลายคำเมื่อพูดจริงจะฟังใกล้เคียงเสียง <strong>เอ</strong> ยาว
          </p>
          <p>
            ส่วน <strong>ええ</strong> ก็สามารถพบได้เช่นกัน
            โดยเฉพาะในคำพูดหรือการตอบรับบางรูปแบบ
          </p>
        `
      },
      {
        type: "example",
        title: "คำที่มี えい",
        content: `
          <div class="example-box">
            <div class="jp-big">せんせい</div>
            <div class="reading">sensei</div>
            <div class="meaning">ครู / อาจารย์</div>
          </div>

          <div class="example-box">
            <div class="jp-big">がくせい</div>
            <div class="reading">gakusei</div>
            <div class="meaning">นักเรียน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">えいが</div>
            <div class="reading">eiga</div>
            <div class="meaning">ภาพยนตร์</div>
          </div>

          <div class="example-box">
            <div class="jp-big">せいかつ</div>
            <div class="reading">seikatsu</div>
            <div class="meaning">ชีวิตประจำวัน / การใช้ชีวิต</div>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง ええ",
        content: `
          <div class="example-box">
            <div class="jp-big">ええ</div>
            <div class="reading">ee</div>
            <div class="meaning">ค่ะ / ครับ / ใช่</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おねえさん</div>
            <div class="reading">oneesan</div>
            <div class="meaning">พี่สาว</div>
          </div>
        `
      },
      {
        type: "note",
        title: "อย่าสับสน",
        content: `
          <p>
            <strong>えい</strong> ไม่ได้หมายความว่าเราต้องออกเสียง
            "เอ-อิ" แยกกันชัด ๆ ทุกครั้ง
          </p>
          <p>
            ในคำศัพท์ทั่วไป เสียงจะไหลต่อกันและมักฟังเป็นเสียง e ยาว
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู"
          },
          {
            jp: "がくせい",
            reading: "gakusei",
            thai: "กักเซ",
            meaning: "นักเรียน"
          },
          {
            jp: "えいが",
            reading: "eiga",
            thai: "เอกะ",
            meaning: "ภาพยนตร์"
          },
          {
            jp: "せいかつ",
            reading: "seikatsu",
            thai: "เซคัตสึ",
            meaning: "ชีวิตประจำวัน"
          },
          {
            jp: "おねえさん",
            reading: "oneesan",
            thai: "โอเนซัง",
            meaning: "พี่สาว"
          }
        ]
      },
      {
        type: "practice",
        question: "คำใดหมายถึง 'นักเรียน'?",
        choices: [
          "がくせい",
          "せんせい",
          "えいが",
          "おねえさん"
        ],
        answer: 0,
        explanation: "がくせい (gakusei) หมายถึง นักเรียน"
      },
      {
        type: "practice",
        question: "คำว่า えいが หมายถึงอะไร?",
        choices: [
          "ภาพยนตร์",
          "นักเรียน",
          "ครู",
          "พี่สาว"
        ],
        answer: 0,
        explanation: "えいが (eiga) หมายถึง ภาพยนตร์"
      }
    ]
  },

  {
    id: 44,
    title: "จังหวะเสียงและการนับโมระ",
    subtitle: "ฝึกอ่านให้ไม่เร็วหรือช้าเกินไป",
    sections: [
      {
        type: "concept",
        title: "โมระคืออะไร?",
        content: `
          <p>
            ในภาษาญี่ปุ่น เราสามารถนับหน่วยจังหวะเล็ก ๆ ของคำที่เรียกว่า
            <strong>โมระ (mora)</strong> ได้
          </p>
          <p>
            สำหรับผู้เริ่มต้น ให้คิดง่าย ๆ ว่า
            <strong>ตัวเล็ก っ และเสียงยาวมีผลต่อจังหวะของคำ</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "ลองนับจังหวะ",
        content: `
          <div class="example-box">
            <div class="jp-big">ねこ</div>
            <div class="reading">ね・こ</div>
            <div class="meaning">2 จังหวะ — แมว</div>
          </div>

          <div class="example-box">
            <div class="jp-big">がっこう</div>
            <div class="reading">が・っ・こ・う</div>
            <div class="meaning">4 จังหวะ — โรงเรียน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">せんせい</div>
            <div class="reading">せ・ん・せ・い</div>
            <div class="meaning">4 จังหวะ — ครู</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おおきい</div>
            <div class="reading">お・お・き・い</div>
            <div class="meaning">4 จังหวะ — ใหญ่</div>
          </div>
        `
      },
      {
        type: "text",
        title: "ทำไมต้องนับจังหวะ?",
        content: `
          <p>
            เพราะถ้าเราตัดเสียงยาวออก คำอาจฟังไม่เหมือนภาษาญี่ปุ่นจริง
            และบางครั้งอาจกลายเป็นอีกคำหนึ่ง
          </p>
          <p>
            การฝึกนับจังหวะจึงมีประโยชน์มาก โดยเฉพาะตอนเริ่มฝึกพูดตามเสียงเจ้าของภาษา
          </p>
        `
      },
      {
        type: "tip",
        title: "วิธีฝึก",
        content: `
          <p>
            ลองเคาะโต๊ะเบา ๆ ตามแต่ละโมระ เช่น
          </p>
          <p>
            <strong>が・っ・こ・う</strong>
          </p>
          <p>
            เคาะ 4 ครั้ง โดยอย่ารวม っ หายไปกับพยางค์ก่อนหน้า
          </p>
        `
      },
      {
        type: "vocab",
        title: "ลองนับคำเหล่านี้",
        items: [
          {
            jp: "すし",
            reading: "sushi",
            thai: "สุชิ",
            meaning: "ซูชิ — 2 จังหวะ"
          },
          {
            jp: "がっこう",
            reading: "gakkou",
            thai: "กักโค",
            meaning: "โรงเรียน — 4 จังหวะ"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู — 4 จังหวะ"
          },
          {
            jp: "おおきい",
            reading: "ookii",
            thai: "โอกี",
            meaning: "ใหญ่ — 4 จังหวะ"
          },
          {
            jp: "きって",
            reading: "kitte",
            thai: "คิตเตะ",
            meaning: "แสตมป์ — 3 จังหวะ"
          }
        ]
      },
      {
        type: "practice",
        question: "がっこう มีกี่โมระ?",
        choices: [
          "2",
          "3",
          "4",
          "5"
        ],
        answer: 2,
        explanation: "が・っ・こ・う = 4 โมระ"
      },
      {
        type: "practice",
        question: "ข้อใดมี 4 โมระ?",
        choices: [
          "ねこ",
          "すし",
          "せんせい",
          "いぬ"
        ],
        answer: 2,
        explanation: "せ・ん・せ・い = 4 โมระ"
      }
    ]
  },

  {
    id: 45,
    title: "ทบทวนเสียงยาว",
    subtitle: "ฝึกแยก おう おお えい และจังหวะ",
    sections: [
      {
        type: "text",
        title: "สรุปบทนี้",
        content: `
          <p>
            ตอนนี้เราเจอรูปแบบเสียงยาวที่สำคัญแล้ว ได้แก่
          </p>
          <ul>
            <li><strong>おう</strong> เช่น ありがとう, こうこう</li>
            <li><strong>おお</strong> เช่น おおきい, おおい</li>
            <li><strong>えい</strong> เช่น せんせい, がくせい, えいが</li>
            <li><strong>ええ</strong> เช่น ええ, おねえさん</li>
          </ul>
          <p>
            และอย่าลืมว่า <strong>ー</strong> เป็นเครื่องหมายที่พบเด่นชัดในคาตากานะ
            ส่วนฮิรางานะมักใช้ตัวสระตามรูปแบบของคำ
          </p>
        `
      },
      {
        type: "example",
        title: "รวมคำสำคัญ",
        content: `
          <div class="example-box">
            <div class="jp-big">ありがとう</div>
            <div class="reading">arigatou</div>
            <div class="meaning">ขอบคุณ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おおきい</div>
            <div class="reading">ookii</div>
            <div class="meaning">ใหญ่</div>
          </div>

          <div class="example-box">
            <div class="jp-big">せんせい</div>
            <div class="reading">sensei</div>
            <div class="meaning">ครู</div>
          </div>

          <div class="example-box">
            <div class="jp-big">がくせい</div>
            <div class="reading">gakusei</div>
            <div class="meaning">นักเรียน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">こうこう</div>
            <div class="reading">koukou</div>
            <div class="meaning">โรงเรียนมัธยม</div>
          </div>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "รูปใดใช้เขียนเสียงยาวแบบที่พบใน せんせい?",
            choices: ["えい", "おう", "おお", "ああ"],
            answer: 0
          },
          {
            question: "คำใดหมายถึง 'ขอบคุณ'?",
            choices: ["どうぞ", "ありがとう", "えいが", "こうこう"],
            answer: 1
          },
          {
            question: "คำใดมี おお?",
            choices: ["せんせい", "ありがとう", "おおきい", "がくせい"],
            answer: 2
          },
          {
            question: "せんせい มีทั้งหมดกี่โมระ?",
            choices: ["2", "3", "4", "5"],
            answer: 2
          },
          {
            question: "ข้อใดหมายถึง 'ภาพยนตร์'?",
            choices: ["えいが", "おとうさん", "がくせい", "どうぞ"],
            answer: 0
          }
        ]
      },
      {
        type: "practice",
        question: "ข้อใดเป็นการสะกดที่ถูกต้องของคำว่า 'โรงเรียนมัธยม'?",
        choices: [
          "こうこう",
          "こおこお",
          "こうこ",
          "こっこう"
        ],
        answer: 0,
        explanation: "こうこう คือรูปที่ถูกต้องของคำว่า โรงเรียนมัธยม"
      },
      {
        type: "practice",
        question: "ข้อใดมีทั้งเสียง っ และเสียงยาว?",
        choices: [
          "がっこう",
          "ねこ",
          "すし",
          "せんせい"
        ],
        answer: 0,
        explanation: "がっこう มีทั้ง っ และ う ที่ทำให้เกิดเสียงยาวในช่วง こう"
      },
      {
        type: "tip",
        title: "ภารกิจท้ายบท",
        content: `
          <p>
            ก่อนเข้าสู่บทถัดไป ลองอ่านคำเหล่านี้ออกเสียงช้า ๆ
            แล้วนับจังหวะไปพร้อมกัน
          </p>
          <p class="jp-practice-line">
            ありがとう　おおきい　せんせい　がくせい　こうこう
          </p>
          <p>
            เป้าหมายไม่ใช่การอ่านเร็ว แต่คือการอ่านให้เห็นทุกจังหวะของคำ
          </p>
        `
      }
    ]
  }
);

  lessons.push(
  {
    id: 46,
    title: "ん แบบละเอียด",
    subtitle: "ตัวเดียว แต่เสียงเปลี่ยนได้ตามตัวถัดไป",
    sections: [
      {
        type: "concept",
        title: "ん คืออะไร?",
        content: `
          <p>
            <strong>ん</strong> เป็นฮิรางานะตัวเดียวที่ทำหน้าที่เป็นเสียงพิเศษ
            มันไม่เหมือน あいうえお หรือพยัญชนะในแถวอื่น ๆ
          </p>
          <p>
            โดยทั่วไป ん จะอยู่ <strong>หลังสระหรือพยางค์อื่น</strong>
            และไม่ใช้ขึ้นต้นคำภาษาญี่ปุ่นทั่วไป
          </p>
          <p>
            เวลาอ่าน ん เสียงอาจเปลี่ยนเล็กน้อยตามเสียงที่อยู่ถัดไป
            ดังนั้นอย่าจำว่า ん ต้องออกเสียงเหมือน "น" แบบเดียวทุกครั้ง
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างพื้นฐาน",
        content: `
          <div class="example-box">
            <div class="jp-big">ほん</div>
            <div class="reading">hon</div>
            <div class="meaning">หนังสือ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">にほん</div>
            <div class="reading">nihon</div>
            <div class="meaning">ญี่ปุ่น</div>
          </div>

          <div class="example-box">
            <div class="jp-big">さん</div>
            <div class="reading">san</div>
            <div class="meaning">คุณ... / ใช้เป็นคำลงท้ายชื่ออย่างสุภาพ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">みんな</div>
            <div class="reading">minna</div>
            <div class="meaning">ทุกคน</div>
          </div>
        `
      },
      {
        type: "note",
        title: "จำให้แม่น",
        content: `
          <p>
            <strong>ん</strong> เป็นหนึ่งจังหวะของคำ
            ดังนั้นคำอย่าง <strong>ほん</strong> ไม่ควรอ่านรวบจน ん หายไป
          </p>
          <p>
            ลองนับเป็น <strong>ほ・ん</strong>
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮน",
            meaning: "หนังสือ"
          },
          {
            jp: "にほん",
            reading: "nihon",
            thai: "นิฮง",
            meaning: "ประเทศญี่ปุ่น"
          },
          {
            jp: "さん",
            reading: "san",
            thai: "ซัง",
            meaning: "คำลงท้ายชื่ออย่างสุภาพ"
          },
          {
            jp: "みんな",
            reading: "minna",
            thai: "มินนะ",
            meaning: "ทุกคน"
          },
          {
            jp: "こん",
            reading: "kon",
            thai: "คง",
            meaning: "คำนำหน้าบางคำ เช่น こんにちは"
          }
        ]
      },
      {
        type: "practice",
        question: "ข้อใดมี ん?",
        choices: [
          "ねこ",
          "ほん",
          "さかな",
          "すし"
        ],
        answer: 1,
        explanation: "ほん เขียนว่า ほ + ん จึงมี ん"
      },
      {
        type: "practice",
        question: "คำว่า にほん หมายถึงอะไร?",
        choices: [
          "หนังสือ",
          "ทุกคน",
          "ประเทศญี่ปุ่น",
          "ครู"
        ],
        answer: 2,
        explanation: "にほん (nihon) เป็นหนึ่งในคำอ่านของ 日本 ซึ่งหมายถึงประเทศญี่ปุ่น"
      }
    ]
  },

  {
    id: 47,
    title: "เสียงของ ん ตามตัวถัดไป",
    subtitle: "ทำไมบางครั้ง ん ฟังเหมือน น ง หรือ ม",
    sections: [
      {
        type: "concept",
        title: "เสียง ん ไม่ได้เหมือนกันทุกครั้ง",
        content: `
          <p>
            ในการพูดจริง เสียง <strong>ん</strong> สามารถเปลี่ยนลักษณะตามเสียงที่ตามหลัง
            เพื่อให้พูดได้ต่อเนื่องและเป็นธรรมชาติมากขึ้น
          </p>
          <p>
            สำหรับผู้เริ่มต้นยังไม่จำเป็นต้องท่องกฎการออกเสียงทั้งหมด
            แค่รู้ว่าเสียงที่เราได้ยินอาจไม่ตรงกับ "น" แบบไทยเป๊ะ ๆ ก็พอ
          </p>
        `
      },
      {
        type: "text",
        title: "รูปแบบที่ควรรู้",
        content: `
          <div class="mini-grid">
            <div class="mini-card">
              <strong>ん + เสียงทั่วไป</strong>
              <span>มักได้ยินเป็นเสียงนาสิกคล้าย น</span>
            </div>
            <div class="mini-card">
              <strong>ん + ま / ば / ぱ</strong>
              <span>อาจฟังใกล้เคียงเสียง ม</span>
            </div>
            <div class="mini-card">
              <strong>ん + か / が</strong>
              <span>อาจฟังใกล้เคียงเสียง ง</span>
            </div>
            <div class="mini-card">
              <strong>ก่อนหยุดเสียง</strong>
              <span>เสียงจะออกทางจมูกชัดขึ้น</span>
            </div>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างคำ",
        content: `
          <div class="example-box">
            <div class="jp-big">せんせい</div>
            <div class="reading">sensei</div>
            <div class="meaning">ครู</div>
          </div>

          <div class="example-box">
            <div class="jp-big">さんぽ</div>
            <div class="reading">sanpo</div>
            <div class="meaning">เดินเล่น</div>
          </div>

          <div class="example-box">
            <div class="jp-big">しんぶん</div>
            <div class="reading">shinbun</div>
            <div class="meaning">หนังสือพิมพ์</div>
          </div>

          <div class="example-box">
            <div class="jp-big">げんき</div>
            <div class="reading">genki</div>
            <div class="meaning">สบายดี / แข็งแรง</div>
          </div>
        `
      },
      {
        type: "tip",
        title: "ไม่ต้องพยายามเปลี่ยน ん เองแรง ๆ",
        content: `
          <p>
            ตอนอ่านหนังสือ ให้เริ่มจากจำว่า <strong>ん = เสียง n</strong> ก่อน
          </p>
          <p>
            เมื่อฟังเจ้าของภาษามากขึ้น เราจะค่อย ๆ จับความแตกต่างของเสียง
            ได้เองจากบริบท
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์เพิ่ม",
        items: [
          {
            jp: "さんぽ",
            reading: "sanpo",
            thai: "ซัมโปะ",
            meaning: "เดินเล่น"
          },
          {
            jp: "しんぶん",
            reading: "shinbun",
            thai: "ชิมบุน",
            meaning: "หนังสือพิมพ์"
          },
          {
            jp: "げんき",
            reading: "genki",
            thai: "เกงกิ",
            meaning: "สบายดี / แข็งแรง"
          },
          {
            jp: "てんき",
            reading: "tenki",
            thai: "เทงกิ",
            meaning: "สภาพอากาศ"
          }
        ]
      },
      {
        type: "practice",
        question: "ในคำว่า さんぽ เสียง ん อยู่หน้าตัวใด?",
        choices: [
          "さ",
          "ん",
          "ぽ",
          "ไม่มีคำตอบ"
        ],
        answer: 2,
        explanation: "さんぽ แบ่งได้เป็น さん + ぽ ดังนั้น ん อยู่หน้า ぽ"
      },
      {
        type: "practice",
        question: "คำใดมี ん อยู่หน้ากลุ่มเสียง か/が?",
        choices: [
          "げんき",
          "さんぽ",
          "しんぶん",
          "ほん"
        ],
        answer: 0,
        explanation: "げんき มี ん ตามด้วย き ซึ่งอยู่ในกลุ่มเสียง k"
      }
    ]
  },

  {
    id: 48,
    title: "ฝึกอ่านคำที่มี ん",
    subtitle: "ต่อเสียงให้เป็นคำจริง",
    sections: [
      {
        type: "text",
        title: "อย่าแยกเสียงจนเกินไป",
        content: `
          <p>
            เวลาเริ่มเรียนภาษาญี่ปุ่น เรามักอ่านทีละตัว เช่น
            <strong>に・ほ・ん</strong>
          </p>
          <p>
            วิธีนี้ดีสำหรับการฝึกอ่าน แต่เมื่อเริ่มคล่องแล้ว
            ให้ลองเชื่อมเสียงทั้งคำเข้าด้วยกัน
          </p>
          <p>
            เป้าหมายคือเห็นตัวอักษรแล้วสามารถนึกเสียงของคำได้ทันที
          </p>
        `
      },
      {
        type: "example",
        title: "ฝึกจากง่ายไปยาก",
        content: `
          <div class="example-box">
            <div class="jp-big">ほん</div>
            <div class="reading">ほ・ん → hon</div>
            <div class="meaning">หนังสือ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">にほん</div>
            <div class="reading">に・ほ・ん → nihon</div>
            <div class="meaning">ญี่ปุ่น</div>
          </div>

          <div class="example-box">
            <div class="jp-big">げんき</div>
            <div class="reading">げ・ん・き → genki</div>
            <div class="meaning">สบายดี</div>
          </div>

          <div class="example-box">
            <div class="jp-big">てんき</div>
            <div class="reading">て・ん・き → tenki</div>
            <div class="meaning">อากาศ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">さんぽ</div>
            <div class="reading">さ・ん・ぽ → sanpo</div>
            <div class="meaning">เดินเล่น</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ที่ควรรู้",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮง",
            meaning: "หนังสือ"
          },
          {
            jp: "にほん",
            reading: "nihon",
            thai: "นิฮง",
            meaning: "ญี่ปุ่น"
          },
          {
            jp: "げんき",
            reading: "genki",
            thai: "เกงกิ",
            meaning: "สบายดี"
          },
          {
            jp: "てんき",
            reading: "tenki",
            thai: "เทงกิ",
            meaning: "อากาศ"
          },
          {
            jp: "さんぽ",
            reading: "sanpo",
            thai: "ซัมโปะ",
            meaning: "เดินเล่น"
          },
          {
            jp: "でんわ",
            reading: "denwa",
            thai: "เด็นวะ",
            meaning: "โทรศัพท์"
          }
        ]
      },
      {
        type: "example",
        title: "อ่านเป็นคำ",
        content: `
          <div class="practice-card">
            <div class="jp-practice-line">にほん</div>
            <p>ลองอ่านโดยไม่สะกดทีละตัว</p>
          </div>

          <div class="practice-card">
            <div class="jp-practice-line">げんき</div>
            <p>สังเกต ん ก่อน き</p>
          </div>

          <div class="practice-card">
            <div class="jp-practice-line">さんぽ</div>
            <p>สังเกต ん ก่อน ぽ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำใดอ่านว่า denwa?",
        choices: [
          "でんわ",
          "でわん",
          "てんわ",
          "でんな"
        ],
        answer: 0,
        explanation: "でんわ = denwa หมายถึง โทรศัพท์"
      },
      {
        type: "practice",
        question: "คำว่า げんき มีความหมายว่าอะไร?",
        choices: [
          "อากาศ",
          "หนังสือ",
          "สบายดี / แข็งแรง",
          "เดินเล่น"
        ],
        answer: 2,
        explanation: "げんき (genki) ใช้พูดถึงความสบายดีหรือความแข็งแรง"
      }
    ]
  },

  {
    id: 49,
    title: "ทบทวนฮิรางานะชุดใหญ่",
    subtitle: "จาก あ ถึง ん",
    sections: [
      {
        type: "concept",
        title: "เรารู้จักฮิรางานะเกือบครบแล้ว",
        content: `
          <p>
            ตอนนี้เราผ่านตัวอักษรพื้นฐานของฮิรางานะมาแล้ว
            รวมถึงเสียงขุ่น เสียงกึ่งขุ่น ตัวเล็ก และเสียงพิเศษ
          </p>
          <p>
            ก่อนเข้าสู่บทถัดไป ลองจัดระบบทั้งหมดใหม่อีกครั้ง
            เพื่อให้การจำไม่ได้กระจัดกระจาย
          </p>
        `
      },
      {
        type: "kana",
        title: "ตารางฮิรางานะพื้นฐาน",
        items: [
          { char: "あ", romaji: "a", thai: "อะ", example: "あさ", meaning: "ตอนเช้า" },
          { char: "い", romaji: "i", thai: "อิ", example: "いえ", meaning: "บ้าน" },
          { char: "う", romaji: "u", thai: "อุ", example: "うみ", meaning: "ทะเล" },
          { char: "え", romaji: "e", thai: "เอะ", example: "えき", meaning: "สถานี" },
          { char: "お", romaji: "o", thai: "โอะ", example: "おと", meaning: "เสียง" },

          { char: "か", romaji: "ka", thai: "คะ", example: "かお", meaning: "ใบหน้า" },
          { char: "き", romaji: "ki", thai: "คิ", example: "き", meaning: "ต้นไม้" },
          { char: "く", romaji: "ku", thai: "คุ", example: "くち", meaning: "ปาก" },
          { char: "け", romaji: "ke", thai: "เคะ", example: "けさ", meaning: "เช้านี้" },
          { char: "こ", romaji: "ko", thai: "โคะ", example: "ここ", meaning: "ที่นี่" },

          { char: "さ", romaji: "sa", thai: "สะ", example: "さかな", meaning: "ปลา" },
          { char: "し", romaji: "shi", thai: "ชิ", example: "しお", meaning: "เกลือ" },
          { char: "す", romaji: "su", thai: "สุ", example: "すし", meaning: "ซูชิ" },
          { char: "せ", romaji: "se", thai: "เซะ", example: "せんせい", meaning: "ครู" },
          { char: "そ", romaji: "so", thai: "โสะ", example: "そら", meaning: "ท้องฟ้า" },

          { char: "た", romaji: "ta", thai: "ทะ", example: "たまご", meaning: "ไข่" },
          { char: "ち", romaji: "chi", thai: "จิ", example: "ちず", meaning: "แผนที่" },
          { char: "つ", romaji: "tsu", thai: "สึ", example: "つき", meaning: "พระจันทร์" },
          { char: "て", romaji: "te", thai: "เทะ", example: "て", meaning: "มือ" },
          { char: "と", romaji: "to", thai: "โทะ", example: "とり", meaning: "นก" },

          { char: "な", romaji: "na", thai: "นะ", example: "なまえ", meaning: "ชื่อ" },
          { char: "に", romaji: "ni", thai: "นิ", example: "にく", meaning: "เนื้อ" },
          { char: "ぬ", romaji: "nu", thai: "นุ", example: "いぬ", meaning: "สุนัข" },
          { char: "ね", romaji: "ne", thai: "เนะ", example: "ねこ", meaning: "แมว" },
          { char: "の", romaji: "no", thai: "โนะ", example: "のむ", meaning: "ดื่ม" },

          { char: "は", romaji: "ha", thai: "ฮะ", example: "はな", meaning: "ดอกไม้" },
          { char: "ひ", romaji: "hi", thai: "ฮิ", example: "ひと", meaning: "คน" },
          { char: "ふ", romaji: "fu", thai: "ฟุ", example: "ふゆ", meaning: "ฤดูหนาว" },
          { char: "へ", romaji: "he", thai: "เฮะ", example: "へや", meaning: "ห้อง" },
          { char: "ほ", romaji: "ho", thai: "โฮะ", example: "ほん", meaning: "หนังสือ" },

          { char: "ま", romaji: "ma", thai: "มะ", example: "まど", meaning: "หน้าต่าง" },
          { char: "み", romaji: "mi", thai: "มิ", example: "みみ", meaning: "หู" },
          { char: "む", romaji: "mu", thai: "มุ", example: "むし", meaning: "แมลง" },
          { char: "め", romaji: "me", thai: "เมะ", example: "め", meaning: "ตา" },
          { char: "も", romaji: "mo", thai: "โมะ", example: "もの", meaning: "สิ่งของ" },

          { char: "や", romaji: "ya", thai: "ยะ", example: "やま", meaning: "ภูเขา" },
          { char: "ゆ", romaji: "yu", thai: "ยุ", example: "ゆき", meaning: "หิมะ" },
          { char: "よ", romaji: "yo", thai: "โยะ", example: "よる", meaning: "กลางคืน" },

          { char: "ら", romaji: "ra", thai: "ระ", example: "らく", meaning: "สบาย" },
          { char: "り", romaji: "ri", thai: "ริ", example: "りんご", meaning: "แอปเปิล" },
          { char: "る", romaji: "ru", thai: "รุ", example: "るす", meaning: "ไม่อยู่บ้าน" },
          { char: "れ", romaji: "re", thai: "เร", example: "れきし", meaning: "ประวัติศาสตร์" },
          { char: "ろ", romaji: "ro", thai: "โระ", example: "ろく", meaning: "หก" },

          { char: "わ", romaji: "wa", thai: "วะ", example: "わたし", meaning: "ฉัน" },
          { char: "を", romaji: "wo", thai: "โอะ", example: "みずを", meaning: "ดื่มน้ำ" },
          { char: "ん", romaji: "n", thai: "ง/น", example: "ほん", meaning: "หนังสือ" }
        ]
      },
      {
        type: "note",
        title: "จำเป็นกลุ่ม ไม่ต้องจำมั่ว",
        content: `
          <p>
            ให้มองฮิรางานะเป็นแถว ๆ
            เช่น あいうえお → かきくけこ → さしすせそ
          </p>
          <p>
            ถ้าจำตำแหน่งของแต่ละตัวได้ เวลาเจอคำใหม่
            เราจะเดาเสียงได้เร็วขึ้นมาก
          </p>
        `
      },
      {
        type: "practice",
        question: "ตัวใดอ่านว่า 'shi'?",
        choices: ["さ", "し", "す", "せ"],
        answer: 1,
        explanation: "し = shi"
      },
      {
        type: "practice",
        question: "ตัวใดอ่านว่า 'tsu'?",
        choices: ["ち", "つ", "て", "と"],
        answer: 1,
        explanation: "つ = tsu"
      },
      {
        type: "practice",
        question: "ตัวใดอ่านว่า 'fu'?",
        choices: ["は", "ひ", "ふ", "へ"],
        answer: 2,
        explanation: "ふ = fu"
      },
      {
        type: "practice",
        question: "ตัวใดอ่านว่า 'yu'?",
        choices: ["や", "ゆ", "よ", "よ"],
        answer: 1,
        explanation: "ゆ = yu"
      }
    ]
  },

  {
    id: 50,
    title: "แบบทดสอบฮิรางานะ",
    subtitle: "ทดสอบความจำก่อนออกจากด่านฮิรางานะ",
    sections: [
      {
        type: "text",
        title: "กติกา",
        content: `
          <p>
            บทนี้เป็นการทดสอบรวม ไม่ต้องย้อนดูตารางก่อนตอบ
          </p>
          <p>
            ลองอ่านตัวอักษรจากความจำก่อน แล้วค่อยตรวจคำตอบ
          </p>
        `
      },
      {
        type: "check",
        title: "Part 1 — อ่านตัวอักษร",
        items: [
          {
            question: "あ อ่านว่าอะไร?",
            choices: ["a", "i", "u", "e"],
            answer: 0
          },
          {
            question: "き อ่านว่าอะไร?",
            choices: ["ka", "ki", "ku", "ke"],
            answer: 1
          },
          {
            question: "し อ่านว่าอะไร?",
            choices: ["sa", "shi", "su", "so"],
            answer: 1
          },
          {
            question: "つ อ่านว่าอะไร?",
            choices: ["ta", "chi", "tsu", "te"],
            answer: 2
          },
          {
            question: "ね อ่านว่าอะไร?",
            choices: ["na", "ni", "nu", "ne"],
            answer: 3
          },
          {
            question: "ふ อ่านว่าอะไร?",
            choices: ["ha", "hi", "fu", "ho"],
            answer: 2
          },
          {
            question: "む อ่านว่าอะไร?",
            choices: ["ma", "mi", "mu", "me"],
            answer: 2
          },
          {
            question: "よ อ่านว่าอะไร?",
            choices: ["ya", "yu", "yo", "wa"],
            answer: 2
          },
          {
            question: "り อ่านว่าอะไร?",
            choices: ["ra", "ri", "ru", "re"],
            answer: 1
          },
          {
            question: "を อ่านว่าอะไร?",
            choices: ["wa", "wo", "n", "o"],
            answer: 1
          }
        ]
      },
      {
        type: "check",
        title: "Part 2 — อ่านคำ",
        items: [
          {
            question: "ねこ อ่านว่าอะไร?",
            choices: ["neko", "nekoe", "niko", "neku"],
            answer: 0
          },
          {
            question: "すし อ่านว่าอะไร?",
            choices: ["sashi", "sushi", "susi", "soshi"],
            answer: 1
          },
          {
            question: "いぬ หมายถึงอะไร?",
            choices: ["แมว", "นก", "สุนัข", "ปลา"],
            answer: 2
          },
          {
            question: "ほん หมายถึงอะไร?",
            choices: ["หนังสือ", "บ้าน", "น้ำ", "มือ"],
            answer: 0
          },
          {
            question: "やま หมายถึงอะไร?",
            choices: ["ทะเล", "ภูเขา", "ท้องฟ้า", "ดอกไม้"],
            answer: 1
          },
          {
            question: "りんご หมายถึงอะไร?",
            choices: ["ส้ม", "แอปเปิล", "กล้วย", "องุ่น"],
            answer: 1
          },
          {
            question: "せんせい หมายถึงอะไร?",
            choices: ["นักเรียน", "ครู", "เพื่อน", "พ่อ"],
            answer: 1
          },
          {
            question: "がくせい หมายถึงอะไร?",
            choices: ["นักเรียน", "ครู", "พี่สาว", "หมอ"],
            answer: 0
          }
        ]
      },
      {
        type: "check",
        title: "Part 3 — เสียงพิเศษ",
        items: [
          {
            question: "ข้อใดมีตัว っ?",
            choices: ["きて", "きって", "きいて", "きた"],
            answer: 1
          },
          {
            question: "ข้อใดมีเสียงยาว?",
            choices: ["ねこ", "すし", "おおきい", "いぬ"],
            answer: 2
          },
          {
            question: "ข้อใดมี ん?",
            choices: ["さかな", "ほん", "ねこ", "やま"],
            answer: 1
          },
          {
            question: "がっこう แบ่งจังหวะได้อย่างไร?",
            choices: [
              "が・こ・う",
              "が・っ・こ・う",
              "が・こ・っ・う",
              "がっ・こ・う"
            ],
            answer: 1
          }
        ]
      },
      {
        type: "tip",
        title: "ผ่านด่านฮิรางานะ",
        content: `
          <p>
            ถ้าตอนนี้เริ่มอ่านคำอย่าง
            <strong>ねこ / ほん / がくせい / ありがとう</strong>
            ได้โดยไม่ต้องสะกดทีละตัว แปลว่าเรากำลังเริ่มสร้างพื้นฐานการอ่านจริง ๆ แล้ว
          </p>
          <p>
            หลังจากนี้เราจะค่อย ๆ เพิ่มตัวอักษรและรูปแบบเสียงที่ซับซ้อนขึ้น
            โดยไม่ทิ้งสิ่งที่เรียนมาก่อน
          </p>
        `
      }
    ]
  }
);

  lessons.push(
  {
    id: 51,
    title: "เสียงผสม ゃ ゅ ょ",
    subtitle: "ตัวเล็กที่เปลี่ยนเสียงของพยางค์",
    sections: [
      {
        type: "concept",
        title: "ตัวเล็กสามตัวนี้สำคัญมาก",
        content: `
          <p>
            หลังจากรู้จักฮิรางานะพื้นฐานแล้ว เราจะเจอตัวเล็ก
            <strong>ゃ ゅ ょ</strong>
          </p>
          <p>
            ตัวเล็กเหล่านี้ไม่ได้อ่านเป็น <strong>ya / yu / yo</strong>
            เต็มเสียงเหมือน や ゆ よ
            แต่จะนำไปผสมกับตัวอักษรบางตัวเพื่อสร้างเสียงใหม่
          </p>
          <p>
            ตัวอย่างเช่น
            <strong>き + ゃ = きゃ</strong>
            อ่านว่า <strong>kya</strong>
          </p>
        `
      },
      {
        type: "text",
        title: "หลักการจำ",
        content: `
          <div class="mini-grid">
            <div class="mini-card">
              <strong>きゃ</strong>
              <span>kya — คยะ</span>
            </div>
            <div class="mini-card">
              <strong>きゅ</strong>
              <span>kyu — คิวะ</span>
            </div>
            <div class="mini-card">
              <strong>きょ</strong>
              <span>kyo — คโยะ</span>
            </div>
          </div>

          <p>
            จุดสำคัญคือ <strong>ゃ ゅ ょ ต้องเป็นตัวเล็ก</strong>
            ถ้าเขียนเป็น や ゆ よ ขนาดปกติ จะกลายเป็นคนละรูปแบบ
          </p>
        `
      },
      {
        type: "example",
        title: "เปรียบเทียบตัวใหญ่กับตัวเล็ก",
        content: `
          <div class="example-box">
            <div class="jp-big">きや</div>
            <div class="reading">kiya</div>
            <div class="meaning">き + や ปกติ เป็นเสียงแยกกัน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">きゃ</div>
            <div class="reading">kya</div>
            <div class="meaning">き + ゃ ตัวเล็ก เป็นเสียงผสม</div>
          </div>

          <div class="example-box">
            <div class="jp-big">きゆ</div>
            <div class="reading">kiyu</div>
            <div class="meaning">เสียงแยกกัน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">きゅ</div>
            <div class="reading">kyu</div>
            <div class="meaning">เสียงผสม</div>
          </div>
        `
      },
      {
        type: "note",
        title: "ดูขนาดตัวอักษรด้วย",
        content: `
          <p>
            <strong>や</strong> กับ <strong>ゃ</strong> ไม่เหมือนกัน
          </p>
          <p>
            <strong>ゆ</strong> กับ <strong>ゅ</strong> ไม่เหมือนกัน
          </p>
          <p>
            <strong>よ</strong> กับ <strong>ょ</strong> ไม่เหมือนกัน
          </p>
          <p>
            เวลาพิมพ์ภาษาญี่ปุ่นก็ต้องเลือกตัวเล็กให้ถูกด้วย
          </p>
        `
      },
      {
        type: "practice",
        question: "きゃ อ่านว่าอะไร?",
        choices: [
          "kiya",
          "kya",
          "kayu",
          "kyo"
        ],
        answer: 1,
        explanation: "きゃ = kya เพราะ ゃ เป็นตัวเล็กและรวมเสียงกับ き"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงผสม?",
        choices: [
          "きや",
          "きゃ",
          "きゆ",
          "きよ"
        ],
        answer: 1,
        explanation: "きゃ ใช้ ゃ ตัวเล็ก จึงเป็นเสียงผสม kya"
      }
    ]
  },

  {
    id: 52,
    title: "きゃ きゅ きょ",
    subtitle: "เสียง kya kyu kyo",
    sections: [
      {
        type: "concept",
        title: "ชุดแรก: き + ゃゅょ",
        content: `
          <p>
            เมื่อเอา <strong>き</strong> มาผสมกับ ゃ ゅ ょ
            จะได้เสียงสามแบบ
          </p>

          <div class="mini-grid">
            <div class="mini-card">
              <strong>きゃ</strong>
              <span>kya</span>
            </div>
            <div class="mini-card">
              <strong>きゅ</strong>
              <span>kyu</span>
            </div>
            <div class="mini-card">
              <strong>きょ</strong>
              <span>kyo</span>
            </div>
          </div>
        `
      },
      {
        type: "script",
        title: "ฝึกอ่าน",
        items: [
          {
            char: "きゃ",
            romaji: "kya",
            strokes: "き + ゃ",
            tip: "อ่านเป็นเสียงเดียว ไม่แยกเป็น ki-ya"
          },
          {
            char: "きゅ",
            romaji: "kyu",
            strokes: "き + ゅ",
            tip: "เสียง yu ถูกผสมเข้ากับ ki"
          },
          {
            char: "きょ",
            romaji: "kyo",
            strokes: "き + ょ",
            tip: "อ่านเป็น kyo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์จริง",
        content: `
          <div class="example-box">
            <div class="jp-big">きゃく</div>
            <div class="reading">kyaku</div>
            <div class="meaning">แขก / ลูกค้า</div>
          </div>

          <div class="example-box">
            <div class="jp-big">きゅう</div>
            <div class="reading">kyuu</div>
            <div class="meaning">เก้า</div>
          </div>

          <div class="example-box">
            <div class="jp-big">きょう</div>
            <div class="reading">kyou</div>
            <div class="meaning">วันนี้</div>
          </div>

          <div class="example-box">
            <div class="jp-big">きょうしつ</div>
            <div class="reading">kyoushitsu</div>
            <div class="meaning">ห้องเรียน</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "きゃく",
            reading: "kyaku",
            thai: "คยะคุ",
            meaning: "แขก / ลูกค้า"
          },
          {
            jp: "きゅう",
            reading: "kyuu",
            thai: "คิว",
            meaning: "เก้า"
          },
          {
            jp: "きょう",
            reading: "kyou",
            thai: "เคียว",
            meaning: "วันนี้"
          },
          {
            jp: "きょうしつ",
            reading: "kyoushitsu",
            thai: "เคียวชิสึ",
            meaning: "ห้องเรียน"
          }
        ]
      },
      {
        type: "tip",
        title: "จำเป็นชุด",
        content: `
          <p>
            ไม่ต้องจำแยกแบบสุ่ม ให้จำเป็นแพตเทิร์น
          </p>
          <p class="jp-practice-line">
            きゃ　きゅ　きょ
          </p>
          <p>
            จากนั้นเปลี่ยนเฉพาะตัวเล็กด้านหลัง
          </p>
        `
      },
      {
        type: "practice",
        question: "きょう อ่านว่าอะไร?",
        choices: [
          "kiyou",
          "kyou",
          "kyuu",
          "kyo"
        ],
        answer: 1,
        explanation: "きょう = kyou"
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง 'วันนี้'?",
        choices: [
          "きゃく",
          "きゅう",
          "きょう",
          "きょうしつ"
        ],
        answer: 2,
        explanation: "きょう (kyou) หมายถึง วันนี้"
      }
    ]
  },

  {
    id: 53,
    title: "しゃ しゅ しょ",
    subtitle: "เสียง sha shu sho",
    sections: [
      {
        type: "concept",
        title: "เสียงพิเศษของ し",
        content: `
          <p>
            เมื่อเอา <strong>し</strong> มาผสมกับตัวเล็ก ゃ ゅ ょ
            จะได้
          </p>

          <div class="mini-grid">
            <div class="mini-card">
              <strong>しゃ</strong>
              <span>sha</span>
            </div>
            <div class="mini-card">
              <strong>しゅ</strong>
              <span>shu</span>
            </div>
            <div class="mini-card">
              <strong>しょ</strong>
              <span>sho</span>
            </div>
          </div>

          <p>
            จำไว้ว่า <strong>し</strong> เดี่ยว ๆ อ่านว่า shi
            แต่เมื่อผสมกับ ゃ ゅ ょ จะเปลี่ยนเป็น sha, shu, sho
          </p>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียนและอ่าน",
        items: [
          {
            char: "しゃ",
            romaji: "sha",
            strokes: "し + ゃ",
            tip: "ใช้ ゃ ตัวเล็ก"
          },
          {
            char: "しゅ",
            romaji: "shu",
            strokes: "し + ゅ",
            tip: "ใช้ ゅ ตัวเล็ก"
          },
          {
            char: "しょ",
            romaji: "sho",
            strokes: "し + ょ",
            tip: "ใช้ ょ ตัวเล็ก"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์จริง",
        content: `
          <div class="example-box">
            <div class="jp-big">しゃしん</div>
            <div class="reading">shashin</div>
            <div class="meaning">รูปถ่าย</div>
          </div>

          <div class="example-box">
            <div class="jp-big">しゅくだい</div>
            <div class="reading">shukudai</div>
            <div class="meaning">การบ้าน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">しょくどう</div>
            <div class="reading">shokudou</div>
            <div class="meaning">โรงอาหาร</div>
          </div>

          <div class="example-box">
            <div class="jp-big">でんしゃ</div>
            <div class="reading">densha</div>
            <div class="meaning">รถไฟ</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "しゃしん",
            reading: "shashin",
            thai: "ชะชิน",
            meaning: "รูปถ่าย"
          },
          {
            jp: "しゅくだい",
            reading: "shukudai",
            thai: "ชุคุได",
            meaning: "การบ้าน"
          },
          {
            jp: "しょくどう",
            reading: "shokudou",
            thai: "โชคุโด",
            meaning: "โรงอาหาร"
          },
          {
            jp: "でんしゃ",
            reading: "densha",
            thai: "เด็นชะ",
            meaning: "รถไฟ"
          },
          {
            jp: "しゃべる",
            reading: "shaberu",
            thai: "ชะเบะรุ",
            meaning: "พูด / คุย"
          }
        ]
      },
      {
        type: "note",
        title: "สังเกต しゃ",
        content: `
          <p>
            <strong>しゃ</strong> ไม่ใช่ し + や แบบแยกเสียง
          </p>
          <p>
            เพราะ ゃ เป็นตัวเล็ก จึงรวมกับ し เป็นเสียง
            <strong>sha</strong>
          </p>
        `
      },
      {
        type: "practice",
        question: "しゃ อ่านว่าอะไร?",
        choices: [
          "shiya",
          "sha",
          "shi",
          "sya"
        ],
        answer: 1,
        explanation: "しゃ = sha"
      },
      {
        type: "practice",
        question: "คำว่า しゅくだい หมายถึงอะไร?",
        choices: [
          "การบ้าน",
          "โรงอาหาร",
          "รถไฟ",
          "รูปถ่าย"
        ],
        answer: 0,
        explanation: "しゅくだい = shukudai หมายถึง การบ้าน"
      }
    ]
  },

  {
    id: 54,
    title: "ちゃ ちゅ ちょ",
    subtitle: "เสียง cha chu cho",
    sections: [
      {
        type: "concept",
        title: "ชุดเสียงของ ち",
        content: `
          <p>
            <strong>ち</strong> เป็นอีกตัวที่ต้องจำรูปพิเศษ
            เพราะไม่ได้กลายเป็น tia/tiu/tio แบบตรงตัว
          </p>

          <div class="mini-grid">
            <div class="mini-card">
              <strong>ちゃ</strong>
              <span>cha</span>
            </div>
            <div class="mini-card">
              <strong>ちゅ</strong>
              <span>chu</span>
            </div>
            <div class="mini-card">
              <strong>ちょ</strong>
              <span>cho</span>
            </div>
          </div>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ちゃ",
            romaji: "cha",
            strokes: "ち + ゃ",
            tip: "อ่านเป็น cha"
          },
          {
            char: "ちゅ",
            romaji: "chu",
            strokes: "ち + ゅ",
            tip: "อ่านเป็น chu"
          },
          {
            char: "ちょ",
            romaji: "cho",
            strokes: "ち + ょ",
            tip: "อ่านเป็น cho"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์จริง",
        content: `
          <div class="example-box">
            <div class="jp-big">ちゃ</div>
            <div class="reading">cha</div>
            <div class="meaning">ชา</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ちゅうごく</div>
            <div class="reading">chuugoku</div>
            <div class="meaning">ประเทศจีน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ちょっと</div>
            <div class="reading">chotto</div>
            <div class="meaning">นิดหน่อย / เดี๋ยวก่อน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">おちゃ</div>
            <div class="reading">ocha</div>
            <div class="meaning">ชา</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ちゃ",
            reading: "cha",
            thai: "จะ",
            meaning: "ชา"
          },
          {
            jp: "おちゃ",
            reading: "ocha",
            thai: "โอะจะ",
            meaning: "ชา"
          },
          {
            jp: "ちゅうごく",
            reading: "chuugoku",
            thai: "จูโกะคุ",
            meaning: "ประเทศจีน"
          },
          {
            jp: "ちょっと",
            reading: "chotto",
            thai: "จ็อตโตะ",
            meaning: "นิดหน่อย / เดี๋ยวก่อน"
          },
          {
            jp: "ちょうど",
            reading: "choudo",
            thai: "โจโดะ",
            meaning: "พอดี"
          }
        ]
      },
      {
        type: "note",
        title: "อย่าสับสน ちゃ กับ ちや",
        content: `
          <p>
            <strong>ちゃ</strong> = cha เพราะ ゃ เป็นตัวเล็ก
          </p>
          <p>
            ส่วน <strong>ちや</strong> เป็น ち + や ที่แยกกัน
            จึงไม่ใช่เสียงเดียวกัน
          </p>
        `
      },
      {
        type: "practice",
        question: "ちょ อ่านว่าอะไร?",
        choices: [
          "chi",
          "cho",
          "chu",
          "chiyo"
        ],
        answer: 1,
        explanation: "ちょ = cho"
      },
      {
        type: "practice",
        question: "คำว่า おちゃ หมายถึงอะไร?",
        choices: [
          "ข้าว",
          "ชา",
          "น้ำ",
          "กาแฟ"
        ],
        answer: 1,
        explanation: "おちゃ (ocha) หมายถึง ชา"
      }
    ]
  },

  {
    id: 55,
    title: "じゃ じゅ じょ",
    subtitle: "เสียง ja ju jo และการทบทวนชุดแรก",
    sections: [
      {
        type: "concept",
        title: "เสียงผสมของ じ",
        content: `
          <p>
            เมื่อ <strong>じ</strong> ผสมกับ ゃ ゅ ょ
            จะได้เสียง
          </p>

          <div class="mini-grid">
            <div class="mini-card">
              <strong>じゃ</strong>
              <span>ja</span>
            </div>
            <div class="mini-card">
              <strong>じゅ</strong>
              <span>ju</span>
            </div>
            <div class="mini-card">
              <strong>じょ</strong>
              <span>jo</span>
            </div>
          </div>
        `
      },
      {
        type: "script",
        title: "ฝึกอ่าน",
        items: [
          {
            char: "じゃ",
            romaji: "ja",
            strokes: "じ + ゃ",
            tip: "เสียง ja"
          },
          {
            char: "じゅ",
            romaji: "ju",
            strokes: "じ + ゅ",
            tip: "เสียง ju"
          },
          {
            char: "じょ",
            romaji: "jo",
            strokes: "じ + ょ",
            tip: "เสียง jo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์จริง",
        content: `
          <div class="example-box">
            <div class="jp-big">じゃま</div>
            <div class="reading">jama</div>
            <div class="meaning">เกะกะ / รบกวน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">じゅぎょう</div>
            <div class="reading">jugyou</div>
            <div class="meaning">คาบเรียน / การเรียนการสอน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">じょうず</div>
            <div class="reading">jouzu</div>
            <div class="meaning">เก่ง / ชำนาญ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">だいじょうぶ</div>
            <div class="reading">daijoubu</div>
            <div class="meaning">ไม่เป็นไร / ไม่เป็นอะไร</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "じゃま",
            reading: "jama",
            thai: "จะมะ",
            meaning: "เกะกะ / รบกวน"
          },
          {
            jp: "じゅぎょう",
            reading: "jugyou",
            thai: "จุกโย",
            meaning: "คาบเรียน"
          },
          {
            jp: "じょうず",
            reading: "jouzu",
            thai: "โจซุ",
            meaning: "เก่ง / ชำนาญ"
          },
          {
            jp: "だいじょうぶ",
            reading: "daijoubu",
            thai: "ไดโจบุ",
            meaning: "ไม่เป็นไร"
          }
        ]
      },
      {
        type: "text",
        title: "ทบทวน 4 ชุดแรก",
        content: `
          <p class="jp-practice-line">
            きゃ　きゅ　きょ
          </p>
          <p class="jp-practice-line">
            しゃ　しゅ　しょ
          </p>
          <p class="jp-practice-line">
            ちゃ　ちゅ　ちょ
          </p>
          <p class="jp-practice-line">
            じゃ　じゅ　じょ
          </p>
          <p>
            ทั้งหมดนี้เป็นเสียงผสมที่เกิดจากพยัญชนะบางตัว
            กับตัวเล็ก ゃ ゅ ょ
          </p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          {
            question: "きゅ อ่านว่าอะไร?",
            choices: ["kya", "kyu", "kyo", "kiyu"],
            answer: 1
          },
          {
            question: "しょ อ่านว่าอะไร?",
            choices: ["sha", "shu", "sho", "shiyo"],
            answer: 2
          },
          {
            question: "ちゃ อ่านว่าอะไร?",
            choices: ["cha", "chiya", "chu", "cho"],
            answer: 0
          },
          {
            question: "じゅ อ่านว่าอะไร?",
            choices: ["ja", "jiyu", "ju", "jo"],
            answer: 2
          },
          {
            question: "ข้อใดหมายถึง 'ไม่เป็นไร'?",
            choices: [
              "じゃま",
              "じゅぎょう",
              "じょうず",
              "だいじょうぶ"
            ],
            answer: 3
          }
        ]
      },
      {
        type: "practice",
        question: "ข้อใดเป็นเสียงผสมของ し?",
        choices: [
          "しや",
          "しゃ",
          "しあ",
          "しよ"
        ],
        answer: 1,
        explanation: "しゃ ใช้ ゃ ตัวเล็ก จึงเป็นเสียงผสม sha"
      },
      {
        type: "practice",
        question: "ตัวเล็กตัวใดใช้สร้างเสียง kya?",
        choices: [
          "や",
          "ゅ",
          "ゃ",
          "ょ"
        ],
        answer: 2,
        explanation: "き + ゃ = きゃ = kya"
      }
    ]
  }
);

  lessons.push(
  {
    id: 56,
    title: "にゃ にゅ にょ",
    subtitle: "เสียง nya nyu nyo",
    sections: [
      {
        type: "concept",
        title: "เสียงผสมของแถว な",
        content: `
          <p>
            คราวนี้เราจะนำ <strong>に</strong> มาผสมกับ
            <strong>ゃ ゅ ょ</strong>
          </p>
          <div class="mini-grid">
            <div class="mini-card">
              <strong>にゃ</strong>
              <span>nya</span>
            </div>
            <div class="mini-card">
              <strong>にゅ</strong>
              <span>nyu</span>
            </div>
            <div class="mini-card">
              <strong>にょ</strong>
              <span>nyo</span>
            </div>
          </div>
          <p>
            จุดสำคัญคือเสียงจะรวมกันเป็นเสียงเดียว
            ไม่อ่านแยกเป็น ni-ya, ni-yu, ni-yo
          </p>
        `
      },
      {
        type: "script",
        title: "ฝึกอ่านและเขียน",
        items: [
          {
            char: "にゃ",
            romaji: "nya",
            strokes: "に + ゃ",
            tip: "อ่านเป็น nya"
          },
          {
            char: "にゅ",
            romaji: "nyu",
            strokes: "に + ゅ",
            tip: "อ่านเป็น nyu"
          },
          {
            char: "にょ",
            romaji: "nyo",
            strokes: "に + ょ",
            tip: "อ่านเป็น nyo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์ที่พบจริง",
        content: `
          <div class="example-box">
            <div class="jp-big">にゃんこ</div>
            <div class="reading">nyanko</div>
            <div class="meaning">แมว</div>
          </div>

          <div class="example-box">
            <div class="jp-big">にゅうがく</div>
            <div class="reading">nyuugaku</div>
            <div class="meaning">การเข้าเรียน / การเข้าโรงเรียน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">にゅうりょく</div>
            <div class="reading">nyuuryoku</div>
            <div class="meaning">การป้อนข้อมูล</div>
          </div>
        `
      },
      {
        type: "note",
        title: "จำเสียง nya nyu nyo",
        content: `
          <p>
            ให้จำเป็นชุดเหมือนที่เราเคยทำกับ きゃ きゅ きょ
          </p>
          <p class="jp-practice-line">
            にゃ　にゅ　にょ
          </p>
          <p>
            เปลี่ยนเฉพาะตัวเล็กด้านหลัง แล้วเสียงของ に จะเปลี่ยนตาม
          </p>
        `
      },
      {
        type: "practice",
        question: "にゃ อ่านว่าอะไร?",
        choices: [
          "niya",
          "nya",
          "nyu",
          "naya"
        ],
        answer: 1,
        explanation: "にゃ = nya"
      },
      {
        type: "practice",
        question: "ข้อใดมีเสียง nyu?",
        choices: [
          "にゃ",
          "にゅ",
          "にょ",
          "にや"
        ],
        answer: 1,
        explanation: "にゅ = nyu"
      }
    ]
  },

  {
    id: 57,
    title: "ひゃ ひゅ ひょ",
    subtitle: "เสียง hya hyu hyo",
    sections: [
      {
        type: "concept",
        title: "เสียงผสมของ ひ",
        content: `
          <p>
            <strong>ひ</strong> สามารถผสมกับ ゃ ゅ ょ ได้เป็น
          </p>
          <div class="mini-grid">
            <div class="mini-card">
              <strong>ひゃ</strong>
              <span>hya</span>
            </div>
            <div class="mini-card">
              <strong>ひゅ</strong>
              <span>hyu</span>
            </div>
            <div class="mini-card">
              <strong>ひょ</strong>
              <span>hyo</span>
            </div>
          </div>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ひゃ",
            romaji: "hya",
            strokes: "ひ + ゃ",
            tip: "เสียง hya"
          },
          {
            char: "ひゅ",
            romaji: "hyu",
            strokes: "ひ + ゅ",
            tip: "เสียง hyu"
          },
          {
            char: "ひょ",
            romaji: "hyo",
            strokes: "ひ + ょ",
            tip: "เสียง hyo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์",
        content: `
          <div class="example-box">
            <div class="jp-big">ひゃく</div>
            <div class="reading">hyaku</div>
            <div class="meaning">หนึ่งร้อย</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ひゃくえん</div>
            <div class="reading">hyaku-en</div>
            <div class="meaning">100 เยน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ひょう</div>
            <div class="reading">hyou</div>
            <div class="meaning">ตาราง / รายการ / แผนภูมิ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ひょうばん</div>
            <div class="reading">hyouban</div>
            <div class="meaning">ชื่อเสียง / การได้รับการกล่าวถึง</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "ひゃく",
            reading: "hyaku",
            thai: "เฮียะคุ",
            meaning: "หนึ่งร้อย"
          },
          {
            jp: "ひゃくえん",
            reading: "hyaku-en",
            thai: "เฮียะคุเอ็น",
            meaning: "100 เยน"
          },
          {
            jp: "ひょう",
            reading: "hyou",
            thai: "เฮียว",
            meaning: "ตาราง / แผนภูมิ"
          },
          {
            jp: "ひょうばん",
            reading: "hyouban",
            thai: "เฮียวบัง",
            meaning: "ชื่อเสียง / การกล่าวถึง"
          }
        ]
      },
      {
        type: "practice",
        question: "ひゃく หมายถึงอะไร?",
        choices: [
          "สิบ",
          "หนึ่งร้อย",
          "หนึ่งพัน",
          "หนึ่งหมื่น"
        ],
        answer: 1,
        explanation: "ひゃく (hyaku) = หนึ่งร้อย"
      },
      {
        type: "practice",
        question: "hyo เขียนเป็นฮิรางานะข้อใด?",
        choices: [
          "ひや",
          "ひゅ",
          "ひょ",
          "ひよ"
        ],
        answer: 2,
        explanation: "ひょ = hyo"
      }
    ]
  },

  {
    id: 58,
    title: "みゃ みゅ みょ",
    subtitle: "เสียง mya myu myo",
    sections: [
      {
        type: "concept",
        title: "เสียงผสมของ み",
        content: `
          <p>
            แถว ま ก็สามารถสร้างเสียงผสมได้ โดยใช้ <strong>み</strong>
          </p>
          <div class="mini-grid">
            <div class="mini-card">
              <strong>みゃ</strong>
              <span>mya</span>
            </div>
            <div class="mini-card">
              <strong>みゅ</strong>
              <span>myu</span>
            </div>
            <div class="mini-card">
              <strong>みょ</strong>
              <span>myo</span>
            </div>
          </div>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียนและอ่าน",
        items: [
          {
            char: "みゃ",
            romaji: "mya",
            strokes: "み + ゃ",
            tip: "อ่านเป็น mya"
          },
          {
            char: "みゅ",
            romaji: "myu",
            strokes: "み + ゅ",
            tip: "อ่านเป็น myu"
          },
          {
            char: "みょ",
            romaji: "myo",
            strokes: "み + ょ",
            tip: "อ่านเป็น myo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์จริง",
        content: `
          <div class="example-box">
            <div class="jp-big">みゃく</div>
            <div class="reading">myaku</div>
            <div class="meaning">ชีพจร</div>
          </div>

          <div class="example-box">
            <div class="jp-big">みょうじ</div>
            <div class="reading">myouji</div>
            <div class="meaning">นามสกุล</div>
          </div>

          <div class="example-box">
            <div class="jp-big">みょう</div>
            <div class="reading">myou</div>
            <div class="meaning">แปลก / ประหลาด</div>
          </div>
        `
      },
      {
        type: "note",
        title: "ไม่ใช่ทุกเสียงจะเจอบ่อยเท่ากัน",
        content: `
          <p>
            เสียงผสมบางชุดพบในคำศัพท์บ่อยมาก
            แต่บางชุดพบค่อนข้างน้อย
          </p>
          <p>
            ดังนั้นตอนนี้ให้เน้นที่การ
            <strong>อ่านรูปแบบได้</strong>
            ก่อน ไม่จำเป็นต้องท่องคำศัพท์ทุกคำให้หมด
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "みゃく",
            reading: "myaku",
            thai: "เมียะคุ",
            meaning: "ชีพจร"
          },
          {
            jp: "みょうじ",
            reading: "myouji",
            thai: "เมียวจิ",
            meaning: "นามสกุล"
          },
          {
            jp: "みょう",
            reading: "myou",
            thai: "เมียว",
            meaning: "แปลก / ประหลาด"
          }
        ]
      },
      {
        type: "practice",
        question: "みょ อ่านว่าอะไร?",
        choices: [
          "miyo",
          "mya",
          "myu",
          "myo"
        ],
        answer: 3,
        explanation: "みょ = myo"
      },
      {
        type: "practice",
        question: "ข้อใดมีเสียง mya?",
        choices: [
          "みゃ",
          "みゅ",
          "みょ",
          "みや"
        ],
        answer: 0,
        explanation: "みゃ = mya"
      }
    ]
  },

  {
    id: 59,
    title: "りゃ りゅ りょ",
    subtitle: "เสียง rya ryu ryo",
    sections: [
      {
        type: "concept",
        title: "เสียงผสมของ り",
        content: `
          <p>
            ต่อไปคือ <strong>り</strong> ซึ่งสร้างเสียง
            <strong>りゃ りゅ りょ</strong>
          </p>
          <div class="mini-grid">
            <div class="mini-card">
              <strong>りゃ</strong>
              <span>rya</span>
            </div>
            <div class="mini-card">
              <strong>りゅ</strong>
              <span>ryu</span>
            </div>
            <div class="mini-card">
              <strong>りょ</strong>
              <span>ryo</span>
            </div>
          </div>
          <p>
            เสียง r ของภาษาญี่ปุ่นเป็นเสียงเฉพาะ
            ไม่จำเป็นต้องพยายามเทียบกับ ร หรือ ล ในภาษาไทยแบบตรงตัว
          </p>
        `
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "りゃ",
            romaji: "rya",
            strokes: "り + ゃ",
            tip: "อ่านเป็น rya"
          },
          {
            char: "りゅ",
            romaji: "ryu",
            strokes: "り + ゅ",
            tip: "อ่านเป็น ryu"
          },
          {
            char: "りょ",
            romaji: "ryo",
            strokes: "り + ょ",
            tip: "อ่านเป็น ryo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์",
        content: `
          <div class="example-box">
            <div class="jp-big">りゅう</div>
            <div class="reading">ryuu</div>
            <div class="meaning">มังกร</div>
          </div>

          <div class="example-box">
            <div class="jp-big">りょうり</div>
            <div class="reading">ryouri</div>
            <div class="meaning">อาหาร / การทำอาหาร</div>
          </div>

          <div class="example-box">
            <div class="jp-big">りょこう</div>
            <div class="reading">ryokou</div>
            <div class="meaning">การท่องเที่ยว</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "りゅう",
            reading: "ryuu",
            thai: "ริว",
            meaning: "มังกร"
          },
          {
            jp: "りょうり",
            reading: "ryouri",
            thai: "เรียวริ",
            meaning: "อาหาร / การทำอาหาร"
          },
          {
            jp: "りょこう",
            reading: "ryokou",
            thai: "เรียวโค",
            meaning: "การท่องเที่ยว"
          }
        ]
      },
      {
        type: "tip",
        title: "ฝึกปาก",
        content: `
          <p>
            ลองพูดช้า ๆ
            <strong>りゃ → りゅ → りょ</strong>
          </p>
          <p>
            แล้วค่อยเร่งให้เป็นเสียงต่อเนื่อง
          </p>
          <p class="jp-practice-line">
            りゃりゅりょ
          </p>
        `
      },
      {
        type: "practice",
        question: "りょこう หมายถึงอะไร?",
        choices: [
          "อาหาร",
          "มังกร",
          "การท่องเที่ยว",
          "โรงเรียน"
        ],
        answer: 2,
        explanation: "りょこう (ryokou) หมายถึง การท่องเที่ยว"
      },
      {
        type: "practice",
        question: "ryu เขียนเป็นฮิรางานะข้อใด?",
        choices: [
          "りゃ",
          "りゅ",
          "りょ",
          "りや"
        ],
        answer: 1,
        explanation: "りゅ = ryu"
      }
    ]
  },

  {
    id: 60,
    title: "ทบทวนเสียงผสม",
    subtitle: "รวม kya ถึง ryo",
    sections: [
      {
        type: "text",
        title: "ตารางเสียงผสมหลัก",
        content: `
          <div class="kana-table-wrap">
            <table class="kana-table">
              <thead>
                <tr>
                  <th></th>
                  <th>ゃ</th>
                  <th>ゅ</th>
                  <th>ょ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>き</th>
                  <td>きゃ<br><small>kya</small></td>
                  <td>きゅ<br><small>kyu</small></td>
                  <td>きょ<br><small>kyo</small></td>
                </tr>
                <tr>
                  <th>し</th>
                  <td>しゃ<br><small>sha</small></td>
                  <td>しゅ<br><small>shu</small></td>
                  <td>しょ<br><small>sho</small></td>
                </tr>
                <tr>
                  <th>ち</th>
                  <td>ちゃ<br><small>cha</small></td>
                  <td>ちゅ<br><small>chu</small></td>
                  <td>ちょ<br><small>cho</small></td>
                </tr>
                <tr>
                  <th>に</th>
                  <td>にゃ<br><small>nya</small></td>
                  <td>にゅ<br><small>nyu</small></td>
                  <td>にょ<br><small>nyo</small></td>
                </tr>
                <tr>
                  <th>ひ</th>
                  <td>ひゃ<br><small>hya</small></td>
                  <td>ひゅ<br><small>hyu</small></td>
                  <td>ひょ<br><small>hyo</small></td>
                </tr>
                <tr>
                  <th>み</th>
                  <td>みゃ<br><small>mya</small></td>
                  <td>みゅ<br><small>myu</small></td>
                  <td>みょ<br><small>myo</small></td>
                </tr>
                <tr>
                  <th>り</th>
                  <td>りゃ<br><small>rya</small></td>
                  <td>りゅ<br><small>ryu</small></td>
                  <td>りょ<br><small>ryo</small></td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        type: "concept",
        title: "กฎจำง่าย",
        content: `
          <p>
            เสียงผสมชุดหลักจะเกิดจากตัวในกลุ่มเสียง i
            แล้วตามด้วย <strong>ゃ ゅ ょ ตัวเล็ก</strong>
          </p>
          <p>
            ตัวอย่าง:
          </p>
          <p class="jp-practice-line">
            き + ゃ → きゃ
          </p>
          <p class="jp-practice-line">
            に + ゅ → にゅ
          </p>
          <p class="jp-practice-line">
            り + ょ → りょ
          </p>
        `
      },
      {
        type: "example",
        title: "ลองอ่านแบบสุ่ม",
        content: `
          <div class="practice-card">
            <div class="jp-practice-line">きょ　しゃ　ちゃ</div>
            <p>kyo — sha — cha</p>
          </div>

          <div class="practice-card">
            <div class="jp-practice-line">にゅ　ひょ　みゃ</div>
            <p>nyu — hyo — mya</p>
          </div>

          <div class="practice-card">
            <div class="jp-practice-line">りょ　きゅ　しょ</div>
            <p>ryo — kyu — sho</p>
          </div>
        `
      },
      {
        type: "check",
        title: "ทดสอบชุดเสียงผสม",
        items: [
          {
            question: "きゅ อ่านว่าอะไร?",
            choices: ["kya", "kyu", "kyo", "ku"],
            answer: 1
          },
          {
            question: "しゃ อ่านว่าอะไร?",
            choices: ["sha", "shu", "sho", "shi"],
            answer: 0
          },
          {
            question: "ちょ อ่านว่าอะไร?",
            choices: ["cha", "chu", "cho", "chi"],
            answer: 2
          },
          {
            question: "にゅ อ่านว่าอะไร?",
            choices: ["nya", "nyu", "nyo", "niyu"],
            answer: 1
          },
          {
            question: "ひょ อ่านว่าอะไร?",
            choices: ["hya", "hyu", "hyo", "hiyo"],
            answer: 2
          },
          {
            question: "みゃ อ่านว่าอะไร?",
            choices: ["mya", "myu", "myo", "miya"],
            answer: 0
          },
          {
            question: "りょ อ่านว่าอะไร?",
            choices: ["rya", "ryu", "ryo", "riyo"],
            answer: 2
          }
        ]
      }
    ]
  },

  {
    id: 61,
    title: "เสียงขุ่นผสม ゃ ゅ ょ",
    subtitle: "ぎゃ じゃ びゃ ぴゃ และกลุ่มอื่น ๆ",
    sections: [
      {
        type: "concept",
        title: "เสียงผสมไม่ได้มีแค่ชุดพื้นฐาน",
        content: `
          <p>
            หลังจากเรียนเสียงผสมพื้นฐานแล้ว เราสามารถนำ
            <strong>เสียงขุ่น ゛</strong> และ <strong>เสียงกึ่งขุ่น ゜</strong>
            มาผสมกับ ゃ ゅ ょ ได้ด้วย
          </p>
          <p>
            ตัวอย่างเช่น
            <strong>ぎ + ゃ = ぎゃ</strong>
          </p>
        `
      },
      {
        type: "text",
        title: "กลุ่มที่ควรรู้",
        content: `
          <div class="mini-grid">
            <div class="mini-card">
              <strong>ぎゃ ぎゅ ぎょ</strong>
              <span>gya / gyu / gyo</span>
            </div>
            <div class="mini-card">
              <strong>じゃ じゅ じょ</strong>
              <span>ja / ju / jo</span>
            </div>
            <div class="mini-card">
              <strong>びゃ びゅ びょ</strong>
              <span>bya / byu / byo</span>
            </div>
            <div class="mini-card">
              <strong>ぴゃ ぴゅ ぴょ</strong>
              <span>pya / pyu / pyo</span>
            </div>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง ぎゃ",
        content: `
          <div class="example-box">
            <div class="jp-big">ぎゃく</div>
            <div class="reading">gyaku</div>
            <div class="meaning">ตรงกันข้าม / กลับด้าน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ぎゅうにゅう</div>
            <div class="reading">gyuunyuu</div>
            <div class="meaning">นมวัว</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ぎょうざ</div>
            <div class="reading">gyouza</div>
            <div class="meaning">เกี๊ยวซ่า</div>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง びゃ และ ぴゃ",
        content: `
          <div class="example-box">
            <div class="jp-big">びょういん</div>
            <div class="reading">byouin</div>
            <div class="meaning">โรงพยาบาล</div>
          </div>

          <div class="example-box">
            <div class="jp-big">さんびゃく</div>
            <div class="reading">sanbyaku</div>
            <div class="meaning">สามร้อย</div>
          </div>

          <div class="example-box">
            <div class="jp-big">はっぴょう</div>
            <div class="reading">happyou</div>
            <div class="meaning">การนำเสนอ / การประกาศ</div>
          </div>
        `
      },
      {
        type: "note",
        title: "ไม่ต้องท่องทั้งหมดในครั้งเดียว",
        content: `
          <p>
            กลุ่มเสียงขุ่นผสมมีจำนวนมากขึ้น
            ให้เริ่มจากจำรูปแบบก่อน
          </p>
          <p>
            เช่น <strong>ぎゃ・ぎゅ・ぎょ</strong>
            แล้วค่อยฝึกคำศัพท์ที่เจอบ่อย
          </p>
        `
      },
      {
        type: "practice",
        question: "ぎゃ อ่านว่าอะไร?",
        choices: [
          "gya",
          "gya",
          "gyu",
          "giyo"
        ],
        answer: 0,
        explanation: "ぎゃ = gya"
      },
      {
        type: "practice",
        question: "ข้อใดอ่านว่า byouin?",
        choices: [
          "びょういん",
          "びよういん",
          "びゅいん",
          "びょいん"
        ],
        answer: 0,
        explanation: "びょういん = byouin หมายถึง โรงพยาบาล"
      }
    ]
  },

  {
    id: 62,
    title: "ぎゃ ぎゅ ぎょ",
    subtitle: "ฝึกเสียง gya gyu gyo",
    sections: [
      {
        type: "script",
        title: "ชุดเสียง",
        items: [
          {
            char: "ぎゃ",
            romaji: "gya",
            strokes: "ぎ + ゃ",
            tip: "เสียง gya"
          },
          {
            char: "ぎゅ",
            romaji: "gyu",
            strokes: "ぎ + ゅ",
            tip: "เสียง gyu"
          },
          {
            char: "ぎょ",
            romaji: "gyo",
            strokes: "ぎ + ょ",
            tip: "เสียง gyo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์สำคัญ",
        content: `
          <div class="example-box">
            <div class="jp-big">ぎゅうにゅう</div>
            <div class="reading">gyuunyuu</div>
            <div class="meaning">นมวัว</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ぎょうざ</div>
            <div class="reading">gyouza</div>
            <div class="meaning">เกี๊ยวซ่า</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ぎゃく</div>
            <div class="reading">gyaku</div>
            <div class="meaning">ตรงกันข้าม</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ぎゅうにゅう",
            reading: "gyuunyuu",
            thai: "กิว-นิว",
            meaning: "นมวัว"
          },
          {
            jp: "ぎょうざ",
            reading: "gyouza",
            thai: "เกียวซะ",
            meaning: "เกี๊ยวซ่า"
          },
          {
            jp: "ぎゃく",
            reading: "gyaku",
            thai: "เกียะคุ",
            meaning: "ตรงกันข้าม"
          }
        ]
      },
      {
        type: "practice",
        question: "ぎゅうにゅう หมายถึงอะไร?",
        choices: [
          "น้ำ",
          "ชา",
          "นมวัว",
          "กาแฟ"
        ],
        answer: 2,
        explanation: "ぎゅうにゅう = gyuunyuu หมายถึง นมวัว"
      },
      {
        type: "practice",
        question: "gyo เขียนอย่างไร?",
        choices: [
          "ぎゃ",
          "ぎゅ",
          "ぎょ",
          "ぎよ"
        ],
        answer: 2,
        explanation: "ぎょ = gyo"
      }
    ]
  },

  {
    id: 63,
    title: "びゃ びゅ びょ",
    subtitle: "ฝึกเสียง bya byu byo",
    sections: [
      {
        type: "script",
        title: "ชุดเสียง",
        items: [
          {
            char: "びゃ",
            romaji: "bya",
            strokes: "び + ゃ",
            tip: "เสียง bya"
          },
          {
            char: "びゅ",
            romaji: "byu",
            strokes: "び + ゅ",
            tip: "เสียง byu"
          },
          {
            char: "びょ",
            romaji: "byo",
            strokes: "び + ょ",
            tip: "เสียง byo"
          }
        ]
      },
      {
        type: "example",
        title: "คำศัพท์",
        content: `
          <div class="example-box">
            <div class="jp-big">びょういん</div>
            <div class="reading">byouin</div>
            <div class="meaning">โรงพยาบาล</div>
          </div>

          <div class="example-box">
            <div class="jp-big">びょうき</div>
            <div class="reading">byouki</div>
            <div class="meaning">อาการป่วย / โรค</div>
          </div>

          <div class="example-box">
            <div class="jp-big">さんびゃく</div>
            <div class="reading">sanbyaku</div>
            <div class="meaning">สามร้อย</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ฝึกอ่าน",
        items: [
          {
            jp: "びょういん",
            reading: "byouin",
            thai: "เบียวอิน",
            meaning: "โรงพยาบาล"
          },
          {
            jp: "びょうき",
            reading: "byouki",
            thai: "เบียวกิ",
            meaning: "อาการป่วย / โรค"
          },
          {
            jp: "さんびゃく",
            reading: "sanbyaku",
            thai: "ซัมเบียะคุ",
            meaning: "สามร้อย"
          }
        ]
      },
      {
        type: "note",
        title: "สังเกตเสียงยาว",
        content: `
          <p>
            ใน <strong>びょういん</strong> เรามีทั้งเสียงผสม
            <strong>びょ</strong> และเสียงที่เขียนต่อด้วย <strong>う</strong>
          </p>
          <p>
            จึงเป็นตัวอย่างที่ดีของการนำหลายสิ่งที่เรียนมาใช้พร้อมกัน
          </p>
        `
      },
      {
        type: "practice",
        question: "びょういん หมายถึงอะไร?",
        choices: [
          "โรงเรียน",
          "โรงพยาบาล",
          "สถานี",
          "ร้านค้า"
        ],
        answer: 1,
        explanation: "びょういん = โรงพยาบาล"
      },
      {
        type: "practice",
        question: "bya เขียนอย่างไร?",
        choices: [
          "びゃ",
          "びゅ",
          "びょ",
          "びや"
        ],
        answer: 0,
        explanation: "びゃ = bya"
      }
    ]
  },

  {
    id: 64,
    title: "ぴゃ ぴゅ ぴょ",
    subtitle: "เสียงกึ่งขุ่น pya pyu pyo",
    sections: [
      {
        type: "concept",
        title: "เสียงจาก ぴ",
        content: `
          <p>
            ตัว <strong>ぴ</strong> สามารถผสมกับ ゃ ゅ ょ
            ได้เป็น
          </p>
          <div class="mini-grid">
            <div class="mini-card">
              <strong>ぴゃ</strong>
              <span>pya</span>
            </div>
            <div class="mini-card">
              <strong>ぴゅ</strong>
              <span>pyu</span>
            </div>
            <div class="mini-card">
              <strong>ぴょ</strong>
              <span>pyo</span>
            </div>
          </div>
        `
      },
      {
        type: "script",
        title: "ฝึกอ่าน",
        items: [
          {
            char: "ぴゃ",
            romaji: "pya",
            strokes: "ぴ + ゃ",
            tip: "เสียง pya"
          },
          {
            char: "ぴゅ",
            romaji: "pyu",
            strokes: "ぴ + ゅ",
            tip: "เสียง pyu"
          },
          {
            char: "ぴょ",
            romaji: "pyo",
            strokes: "ぴ + ょ",
            tip: "เสียง pyo"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างคำ",
        content: `
          <div class="example-box">
            <div class="jp-big">ぴょんぴょん</div>
            <div class="reading">pyonpyon</div>
            <div class="meaning">กระโดดดึ๋ง ๆ</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ぴゅあ</div>
            <div class="reading">pyua</div>
            <div class="meaning">บริสุทธิ์ / ใสสะอาด</div>
          </div>
        `
      },
      {
        type: "note",
        title: "คำกลุ่มนี้พบไม่บ่อยเท่ากลุ่มอื่น",
        content: `
          <p>
            ぴゃ ぴゅ ぴょ มีอยู่จริง แต่ไม่ได้เจอบ่อยเท่า
            きゃ หรือ しゃ ในคำศัพท์พื้นฐาน
          </p>
          <p>
            ตอนนี้จำให้ได้ว่าอ่านอย่างไรและเขียนอย่างไร
            ก็ถือว่าผ่านแล้ว
          </p>
        `
      },
      {
        type: "practice",
        question: "ぴょ อ่านว่าอะไร?",
        choices: [
          "pya",
          "pyu",
          "pyo",
          "piyo"
        ],
        answer: 2,
        explanation: "ぴょ = pyo"
      },
      {
        type: "practice",
        question: "ข้อใดเป็น pya?",
        choices: [
          "ぴゃ",
          "ぴゅ",
          "ぴょ",
          "ぴや"
        ],
        answer: 0,
        explanation: "ぴゃ = pya"
      }
    ]
  },

  {
    id: 65,
    title: "ทบทวนเสียงผสมทั้งหมด",
    subtitle: "รวมเสียงพื้นฐานและเสียงขุ่น",
    sections: [
      {
        type: "concept",
        title: "ตอนนี้เราอ่านเสียงผสมได้หลายชุดแล้ว",
        content: `
          <p>
            กลุ่มหลักที่เราเรียนมา ได้แก่
          </p>
          <p class="jp-practice-line">
            きゃ きゅ きょ
          </p>
          <p class="jp-practice-line">
            しゃ しゅ しょ
          </p>
          <p class="jp-practice-line">
            ちゃ ちゅ ちょ
          </p>
          <p class="jp-practice-line">
            にゃ にゅ にょ
          </p>
          <p class="jp-practice-line">
            ひゃ ひゅ ひょ
          </p>
          <p class="jp-practice-line">
            みゃ みゅ みょ
          </p>
          <p class="jp-practice-line">
            りゃ りゅ りょ
          </p>
          <p>
            และกลุ่มเสียงขุ่น/กึ่งขุ่น เช่น
          </p>
          <p class="jp-practice-line">
            ぎゃ ぎゅ ぎょ　びゃ びゅ びょ　ぴゃ ぴゅ ぴょ
          </p>
        `
      },
      {
        type: "example",
        title: "ลองอ่านคำที่รวมหลายกฎ",
        content: `
          <div class="example-box">
            <div class="jp-big">きょう</div>
            <div class="reading">kyou</div>
            <div class="meaning">วันนี้</div>
          </div>

          <div class="example-box">
            <div class="jp-big">しゅくだい</div>
            <div class="reading">shukudai</div>
            <div class="meaning">การบ้าน</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ちょっと</div>
            <div class="reading">chotto</div>
            <div class="meaning">นิดหน่อย</div>
          </div>

          <div class="example-box">
            <div class="jp-big">りょこう</div>
            <div class="reading">ryokou</div>
            <div class="meaning">การท่องเที่ยว</div>
          </div>

          <div class="example-box">
            <div class="jp-big">ぎゅうにゅう</div>
            <div class="reading">gyuunyuu</div>
            <div class="meaning">นมวัว</div>
          </div>

          <div class="example-box">
            <div class="jp-big">びょういん</div>
            <div class="reading">byouin</div>
            <div class="meaning">โรงพยาบาล</div>
          </div>
        `
      },
      {
        type: "check",
        title: "แบบทดสอบรวม",
        items: [
          {
            question: "kya คือข้อใด?",
            choices: ["きゃ", "きゅ", "きょ", "きや"],
            answer: 0
          },
          {
            question: "shu คือข้อใด?",
            choices: ["しゃ", "しゅ", "しょ", "しや"],
            answer: 1
          },
          {
            question: "cho คือข้อใด?",
            choices: ["ちゃ", "ちゅ", "ちょ", "ちよ"],
            answer: 2
          },
          {
            question: "nyo คือข้อใด?",
            choices: ["にゃ", "にゅ", "にょ", "によ"],
            answer: 2
          },
          {
            question: "hya คือข้อใด?",
            choices: ["ひゃ", "ひゅ", "ひょ", "ひや"],
            answer: 0
          },
          {
            question: "myu คือข้อใด?",
            choices: ["みゃ", "みゅ", "みょ", "みゆ"],
            answer: 1
          },
          {
            question: "ryo คือข้อใด?",
            choices: ["りゃ", "りゅ", "りょ", "りよ"],
            answer: 2
          },
          {
            question: "gya คือข้อใด?",
            choices: ["ぎゃ", "ぎゅ", "ぎょ", "ぎや"],
            answer: 0
          },
          {
            question: "byo คือข้อใด?",
            choices: ["びゃ", "びゅ", "びょ", "びよ"],
            answer: 2
          },
          {
            question: "pya คือข้อใด?",
            choices: ["ぴゃ", "ぴゅ", "ぴょ", "ぴや"],
            answer: 0
          }
        ]
      },
      {
        type: "practice",
        question: "คำใดมีทั้งเสียงผสมและเสียงยาว?",
        choices: [
          "きょう",
          "ねこ",
          "すし",
          "いぬ"
        ],
        answer: 0,
        explanation: "きょう มี きょ ซึ่งเป็นเสียงผสม และ う ที่ทำให้เสียงยาว"
      },
      {
        type: "practice",
        question: "คำใดมีทั้งเสียงผสมและ っ?",
        choices: [
          "ちょっと",
          "ねこ",
          "ほん",
          "やま"
        ],
        answer: 0,
        explanation: "ちょっと มี ちょ เป็นเสียงผสม และ っ เป็นตัวเล็กที่ทำให้เกิดเสียงพยัญชนะซ้ำ"
      },
      {
        type: "tip",
        title: "พร้อมไปต่อ",
        content: `
          <p>
            ตอนนี้พื้นฐานฮิรางานะของเราครบขึ้นมากแล้ว
          </p>
          <p>
            ขั้นต่อไปเราจะเริ่มฝึกเอาตัวอักษรทั้งหมดมารวมกันจริง ๆ
            ทั้งเสียงพื้นฐาน เสียงขุ่น เสียงยาว っ ん และ ゃ ゅ ょ
          </p>
          <p>
            เป้าหมายคือไม่ใช่แค่จำตัวอักษรได้
            แต่ต้อง <strong>เห็นคำแล้วอ่านออก</strong>
          </p>
        `
      }
    ]
  }
);

  lessons.push(
  {
    id: 66,
    title: "ฝึกอ่านฮิรางานะแบบผสม",
    subtitle: "เอาตัวอักษรหลายแบบมารวมกัน",
    sections: [
      {
        type: "concept",
        title: "จากจำตัว → อ่านคำ",
        content: `
          <p>
            ตอนนี้เราไม่ได้ฝึกจำฮิรางานะแยกทีละตัวแล้ว
            แต่จะเริ่มฝึกมองคำทั้งคำแล้วอ่านออก
          </p>
          <p>
            เวลาอ่านภาษาญี่ปุ่น ให้ค่อย ๆ แบ่งคำออกเป็นเสียงเล็ก ๆ
            เช่น <strong>さかな</strong> = さ・か・な
          </p>
          <p>
            อ่านทีละส่วนก่อน แล้วค่อยรวมเป็นคำเดียว
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำพื้นฐาน",
        items: [
          {
            jp: "さかな",
            reading: "sakana",
            thai: "ซะคะนะ",
            meaning: "ปลา"
          },
          {
            jp: "たまご",
            reading: "tamago",
            thai: "ทะมะโกะ",
            meaning: "ไข่"
          },
          {
            jp: "こころ",
            reading: "kokoro",
            thai: "โคะโคะโระ",
            meaning: "หัวใจ / จิตใจ"
          },
          {
            jp: "はな",
            reading: "hana",
            thai: "ฮะนะ",
            meaning: "ดอกไม้ / จมูก"
          },
          {
            jp: "やま",
            reading: "yama",
            thai: "ยะมะ",
            meaning: "ภูเขา"
          }
        ]
      },
      {
        type: "example",
        title: "ลองอ่านทีละส่วน",
        content: `
          <div class="example-box">
            <p><strong>さかな</strong></p>
            <p>さ → か → な</p>
            <p class="example-answer">sa → ka → na → sakana</p>
          </div>

          <div class="example-box">
            <p><strong>たまご</strong></p>
            <p>た → ま → ご</p>
            <p class="example-answer">ta → ma → go → tamago</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำว่า 「やま」 อ่านว่าอะไร?",
        choices: [
          "yama",
          "yamae",
          "yamo",
          "yamu"
        ],
        answer: 0,
        explanation: "や = ya และ ま = ma จึงเป็น yama"
      },
      {
        type: "practice",
        question: "คำว่า 「こころ」 อ่านว่าอะไร?",
        choices: [
          "kokoro",
          "kokuro",
          "kakoro",
          "kokora"
        ],
        answer: 0,
        explanation: "こ = ko, こ = ko, ろ = ro"
      },
      {
        type: "tip",
        title: "เทคนิค",
        content: `
          <p>
            ถ้าเห็นคำยาว ๆ แล้วอ่านไม่ออก อย่าพยายามอ่านรวดเดียว
          </p>
          <p>
            ให้แบ่งเป็นจังหวะ เช่น
            <strong>た・ま・ご</strong>
            แล้วค่อยรวมเสียง
          </p>
        `
      }
    ]
  },

  {
    id: 67,
    title: "ฝึกอ่านเสียงขุ่นในคำจริง",
    subtitle: "が ざ だ ば ぱ",
    sections: [
      {
        type: "concept",
        title: "เสียงขุ่นไม่ได้อยู่แค่ตัวเดียว",
        content: `
          <p>
            เสียงขุ่นสามารถอยู่รวมกับฮิรางานะตัวอื่นในคำเดียวกันได้
          </p>
          <p>
            เช่น <strong>たまご</strong> มี ご ซึ่งเป็นเสียงขุ่น
          </p>
          <p>
            ดังนั้นเวลาเจอคำจริง เราต้องอ่านทั้งเสียงธรรมดา
            และเสียงขุ่นให้ต่อกัน
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำที่มีเสียงขุ่น",
        items: [
          {
            jp: "たまご",
            reading: "tamago",
            thai: "ทะมะโกะ",
            meaning: "ไข่"
          },
          {
            jp: "かぎ",
            reading: "kagi",
            thai: "คะงิ",
            meaning: "กุญแจ"
          },
          {
            jp: "みず",
            reading: "mizu",
            thai: "มิซึ",
            meaning: "น้ำ"
          },
          {
            jp: "かぜ",
            reading: "kaze",
            thai: "คะเซะ",
            meaning: "ลม"
          },
          {
            jp: "でんわ",
            reading: "denwa",
            thai: "เด็นวะ",
            meaning: "โทรศัพท์"
          }
        ]
      },
      {
        type: "kana",
        title: "เสียงที่ควรจำ",
        items: [
          {
            char: "が",
            romaji: "ga",
            thai: "กะ/งะ",
            example: "がくせい",
            meaning: "นักเรียน"
          },
          {
            char: "ざ",
            romaji: "za",
            thai: "ซะ/ซะมีเสียงก้อง",
            example: "かぜ",
            meaning: "ลม"
          },
          {
            char: "だ",
            romaji: "da",
            thai: "ดะ",
            example: "だれ",
            meaning: "ใคร"
          },
          {
            char: "ば",
            romaji: "ba",
            thai: "บะ",
            example: "ばんごはん",
            meaning: "อาหารเย็น"
          },
          {
            char: "ぱ",
            romaji: "pa",
            thai: "ปะ",
            example: "いっぱい",
            meaning: "เต็ม / หนึ่งแก้วหรือหนึ่งถ้วย"
          }
        ]
      },
      {
        type: "practice",
        question: "「かぎ」 มีเสียงอะไรเป็นเสียงขุ่น?",
        choices: [
          "か",
          "ぎ",
          "き",
          "ไม่มี"
        ],
        answer: 1,
        explanation: "ぎ คือเสียง gi ซึ่งเป็นเสียงขุ่นของ き"
      },
      {
        type: "practice",
        question: "「みず」 อ่านว่าอะไร?",
        choices: [
          "misa",
          "mizu",
          "mida",
          "mizuya"
        ],
        answer: 1,
        explanation: "み = mi และ ず = zu จึงเป็น mizu"
      }
    ]
  },

  {
    id: 68,
    title: "ฝึกอ่าน っ ในคำจริง",
    subtitle: "เสียงหยุดก่อนพยัญชนะ",
    sections: [
      {
        type: "concept",
        title: "อย่าอ่าน っ เป็นเสียง tsu",
        content: `
          <p>
            จำให้แม่นว่า <strong>っ</strong> ตัวเล็กไม่ใช่ つ ปกติ
          </p>
          <p>
            มันทำหน้าที่บอกว่าให้มีจังหวะหยุดสั้น ๆ
            ก่อนเสียงพยัญชนะตัวถัดไป
          </p>
          <p>
            ตัวอย่างเช่น
            <strong>きって</strong>
            อ่านประมาณว่า <strong>kit-te</strong>
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำที่มี っ",
        items: [
          {
            jp: "きって",
            reading: "kitte",
            thai: "คิตเตะ",
            meaning: "แสตมป์"
          },
          {
            jp: "がっこう",
            reading: "gakkou",
            thai: "กักโก",
            meaning: "โรงเรียน"
          },
          {
            jp: "きっぷ",
            reading: "kippu",
            thai: "คิปปุ",
            meaning: "ตั๋ว"
          },
          {
            jp: "ちょっと",
            reading: "chotto",
            thai: "ช็อตโตะ",
            meaning: "นิดหน่อย"
          }
        ]
      },
      {
        type: "example",
        title: "ดูความแตกต่าง",
        content: `
          <div class="example-box">
            <p><strong>きて</strong></p>
            <p>ki + te</p>
            <p>มาที่นี่ / มา</p>
          </div>

          <div class="example-box">
            <p><strong>きって</strong></p>
            <p>ki + っ + te</p>
            <p>แสตมป์</p>
          </div>

          <p>
            ตัวเล็ก <strong>っ</strong> ทำให้จังหวะการออกเสียงต่างออกไป
          </p>
        `
      },
      {
        type: "practice",
        question: "ในคำว่า 「きって」 ตัว っ ทำหน้าที่อะไร?",
        choices: [
          "อ่านว่า tsu",
          "ทำให้เสียงก่อนหน้านี้ยาว",
          "ทำให้เกิดจังหวะหยุดและพยัญชนะถัดไปซ้ำ",
          "ไม่ต้องอ่านคำนี้"
        ],
        answer: 2,
        explanation: "っ เป็นตัวเล็กที่ทำให้เกิดจังหวะหยุดสั้น ๆ ก่อนพยัญชนะถัดไป"
      },
      {
        type: "tip",
        title: "วิธีฝึก",
        content: `
          <p>
            ลองอ่าน <strong>きって</strong> ช้า ๆ เป็น
            <strong>き・(หยุด)・て</strong>
          </p>
          <p>
            แล้วค่อยเพิ่มความเร็ว
            จะช่วยให้จับจังหวะ っ ได้ง่ายขึ้น
          </p>
        `
      }
    ]
  },

  {
    id: 69,
    title: "ฝึกอ่านเสียงยาว",
    subtitle: "ยืดเสียงให้ถูกจังหวะ",
    sections: [
      {
        type: "concept",
        title: "เสียงยาวคืออะไร?",
        content: `
          <p>
            ภาษาญี่ปุ่นให้ความสำคัญกับความยาวของเสียง
            เพราะเสียงสั้นกับเสียงยาวอาจทำให้คำแตกต่างกันได้
          </p>
          <p>
            ในฮิรางานะ เสียงยาวมักเขียนด้วยการเติมสระอีกตัว
            เช่น <strong>おとうさん</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>おとうさん</strong></p>
            <p>o-to-u-sa-n</p>
            <p>พ่อ</p>
          </div>

          <div class="example-box">
            <p><strong>おかあさん</strong></p>
            <p>o-ka-a-sa-n</p>
            <p>แม่</p>
          </div>

          <div class="example-box">
            <p><strong>せんせい</strong></p>
            <p>se-n-se-i</p>
            <p>ครู</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำที่มีเสียงยาว",
        items: [
          {
            jp: "おかあさん",
            reading: "okaasan",
            thai: "โอะคาซัง",
            meaning: "แม่"
          },
          {
            jp: "おとうさん",
            reading: "otousan",
            thai: "โอะโตซัง",
            meaning: "พ่อ"
          },
          {
            jp: "おねえさん",
            reading: "oneesan",
            thai: "โอะเนซัง",
            meaning: "พี่สาว"
          },
          {
            jp: "おにいさん",
            reading: "oniisan",
            thai: "โอะนีซัง",
            meaning: "พี่ชาย"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู"
          }
        ]
      },
      {
        type: "practice",
        question: "คำว่า 「おかあさん」 หมายถึงอะไร?",
        choices: [
          "พ่อ",
          "แม่",
          "ครู",
          "พี่ชาย"
        ],
        answer: 1,
        explanation: "おかあさん หมายถึง แม่"
      },
      {
        type: "practice",
        question: "ใน 「おとうさん」 มีอะไรที่ทำให้เสียงยาว?",
        choices: [
          "お + っ",
          "と + う",
          "さ + ん",
          "ไม่มี"
        ],
        answer: 1,
        explanation: "と + う ทำให้เกิดเสียงยาวประมาณ tō"
      }
    ]
  },

  {
    id: 70,
    title: "ทบทวนฮิรางานะขั้นใหญ่",
    subtitle: "อ่านคำที่รวมหลายกฎ",
    sections: [
      {
        type: "concept",
        title: "ตอนนี้เรารู้จักอะไรแล้ว?",
        content: `
          <p>
            ตอนนี้เราเจอทั้ง
            <strong>ฮิรางานะพื้นฐาน</strong>,
            <strong>เสียงขุ่น</strong>,
            <strong>เสียงกึ่งขุ่น</strong>,
            <strong>っ</strong>,
            <strong>เสียงยาว</strong>
            และ <strong>ゃ ゅ ょ</strong>
          </p>
          <p>
            ต่อไปคือการฝึกเอาทั้งหมดมาปะปนกัน
            เพื่อให้การอ่านเริ่มเหมือนการอ่านภาษาญี่ปุ่นจริง ๆ
          </p>
        `
      },
      {
        type: "vocab",
        title: "ชุดทบทวน",
        items: [
          {
            jp: "がっこう",
            reading: "gakkou",
            thai: "กักโก",
            meaning: "โรงเรียน"
          },
          {
            jp: "きょう",
            reading: "kyou",
            thai: "เคียว",
            meaning: "วันนี้"
          },
          {
            jp: "ちょっと",
            reading: "chotto",
            thai: "ช็อตโตะ",
            meaning: "นิดหน่อย"
          },
          {
            jp: "びょういん",
            reading: "byouin",
            thai: "เบียวอิน",
            meaning: "โรงพยาบาล"
          },
          {
            jp: "おとうさん",
            reading: "otousan",
            thai: "โอะโตซัง",
            meaning: "พ่อ"
          }
        ]
      },
      {
        type: "check",
        title: "เช็กตัวเอง",
        items: [
          "เห็น っ แล้วรู้ว่าต้องหยุดจังหวะสั้น ๆ",
          "เห็น ゃ ゅ ょ แล้วรู้ว่าเป็นเสียงผสม",
          "แยกเสียงขุ่นออกจากเสียงธรรมดาได้",
          "อ่านเสียงยาวได้โดยไม่ตัดเสียงสระทิ้ง",
          "สามารถแบ่งคำเป็นจังหวะเล็ก ๆ ก่อนอ่านรวมได้"
        ]
      },
      {
        type: "practice",
        question: "「がっこう」 อ่านว่าอะไร?",
        choices: [
          "gakou",
          "gakkou",
          "gatsukou",
          "gakkouu"
        ],
        answer: 1,
        explanation: "が = ga, っ = หยุด/เพิ่ม k, こ = ko, う = เสียงยาว จึงเป็น gakkou"
      },
      {
        type: "practice",
        question: "「きょう」 อ่านว่าอะไร?",
        choices: [
          "kiyou",
          "kyou",
          "kyo",
          "kiyo"
        ],
        answer: 1,
        explanation: "き + ょ = kyo และ う ทำให้เสียงยาว จึงอ่านว่า kyou"
      },
      {
        type: "tip",
        title: "ผ่านด่านฮิรางานะ",
        content: `
          <p>
            ถ้าอ่านคำพวกนี้ได้แล้ว ถือว่าเราเริ่มพร้อมเข้าสู่
            ตัวอักษรชุดที่สองของภาษาญี่ปุ่นแล้ว
          </p>
        `
      }
    ]
  },

  {
    id: 71,
    title: "เริ่มคาตาคานะ",
    subtitle: "รู้จักตัวอักษรสำหรับคำต่างประเทศ",
    sections: [
      {
        type: "concept",
        title: "คาตาคานะคืออะไร?",
        content: `
          <p>
            ภาษาญี่ปุ่นมีตัวอักษรอีกชุดหนึ่งชื่อว่า
            <strong>คาตาคานะ (カタカナ)</strong>
          </p>
          <p>
            รูปแบบการใช้หลัก ๆ คือเขียนคำที่มาจากภาษาต่างประเทศ
            ชื่อบางชนิด เสียงเลียนแบบ และคำที่ต้องการเน้น
          </p>
          <p>
            ตัวอย่างเช่นคำว่า coffee จะเขียนว่า
            <strong>コーヒー</strong>
          </p>
        `
      },
      {
        type: "note",
        title: "คาตาคานะกับฮิรางานะ",
        content: `
          <p>
            ทั้งสองชุดใช้ระบบเสียงเดียวกัน
            แต่รูปร่างตัวอักษรต่างกันและหน้าที่ในการเขียนต่างกัน
          </p>
          <p>
            เพราะฉะนั้น ถ้าเรารู้เสียงฮิรางานะแล้ว
            การเรียนคาตาคานะจะง่ายขึ้นมาก
          </p>
        `
      },
      {
        type: "kana",
        title: "แถว ア",
        items: [
          {
            char: "ア",
            romaji: "a",
            thai: "อะ",
            example: "アニメ",
            meaning: "anime"
          },
          {
            char: "イ",
            romaji: "i",
            thai: "อิ",
            example: "イギリス",
            meaning: "อังกฤษ"
          },
          {
            char: "ウ",
            romaji: "u",
            thai: "อุ",
            example: "ウイルス",
            meaning: "ไวรัส"
          },
          {
            char: "エ",
            romaji: "e",
            thai: "เอะ",
            example: "エアコン",
            meaning: "เครื่องปรับอากาศ"
          },
          {
            char: "オ",
            romaji: "o",
            thai: "โอะ",
            example: "オレンジ",
            meaning: "ส้ม"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียนแถว ア",
        items: [
          {
            char: "ア",
            romaji: "a",
            strokes: 2,
            tip: "จำรูปร่างให้ต่างจาก あ"
          },
          {
            char: "イ",
            romaji: "i",
            strokes: 2,
            tip: "มีเส้นสองส่วน"
          },
          {
            char: "ウ",
            romaji: "u",
            strokes: 3,
            tip: "สังเกตส่วนด้านบน"
          },
          {
            char: "エ",
            romaji: "e",
            strokes: 3,
            tip: "มีเส้นแนวนอนเด่น"
          },
          {
            char: "オ",
            romaji: "o",
            strokes: 3,
            tip: "สังเกตเส้นตัดตรงกลาง"
          }
        ]
      },
      {
        type: "practice",
        question: "ตัวไหนคือเสียง 「i」?",
        choices: [
          "ア",
          "イ",
          "ウ",
          "エ"
        ],
        answer: 1,
        explanation: "イ อ่านว่า i"
      }
    ]
  },

  {
    id: 72,
    title: "คาตาคานะแถว カ",
    subtitle: "カ キ ク ケ コ",
    sections: [
      {
        type: "kana",
        title: "แถว カ",
        items: [
          {
            char: "カ",
            romaji: "ka",
            thai: "คะ",
            example: "カメラ",
            meaning: "กล้อง"
          },
          {
            char: "キ",
            romaji: "ki",
            thai: "คิ",
            example: "キロ",
            meaning: "กิโล"
          },
          {
            char: "ク",
            romaji: "ku",
            thai: "คุ",
            example: "クラス",
            meaning: "ห้องเรียน"
          },
          {
            char: "ケ",
            romaji: "ke",
            thai: "เคะ",
            example: "ケーキ",
            meaning: "เค้ก"
          },
          {
            char: "コ",
            romaji: "ko",
            thai: "โคะ",
            example: "コーヒー",
            meaning: "กาแฟ"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "カ",
            romaji: "ka",
            strokes: 2,
            tip: "ระวังอย่าสับสนกับ か"
          },
          {
            char: "キ",
            romaji: "ki",
            strokes: 3,
            tip: "มีเส้นแนวนอนหลายเส้น"
          },
          {
            char: "ク",
            romaji: "ku",
            strokes: 2,
            tip: "รูปร่างเปิดด้านหนึ่ง"
          },
          {
            char: "ケ",
            romaji: "ke",
            strokes: 3,
            tip: "มีเส้นตั้งและเส้นตัด"
          },
          {
            char: "コ",
            romaji: "ko",
            strokes: 2,
            tip: "เป็นเส้นคล้ายกรอบเปิด"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำที่เจอบ่อย",
        items: [
          {
            jp: "カメラ",
            reading: "kamera",
            thai: "คะเมะระ",
            meaning: "กล้อง"
          },
          {
            jp: "ケーキ",
            reading: "keeki",
            thai: "เคกี",
            meaning: "เค้ก"
          },
          {
            jp: "コーヒー",
            reading: "koohii",
            thai: "โคฮี",
            meaning: "กาแฟ"
          },
          {
            jp: "クラス",
            reading: "kurasu",
            thai: "คุระสุ",
            meaning: "ห้องเรียน"
          }
        ]
      },
      {
        type: "practice",
        question: "「ケーキ」 หมายถึงอะไร?",
        choices: [
          "กล้อง",
          "กาแฟ",
          "เค้ก",
          "ห้องเรียน"
        ],
        answer: 2,
        explanation: "ケーキ คือ cake หรือ เค้ก"
      }
    ]
  },

  {
    id: 73,
    title: "คาตาคานะแถว サ",
    subtitle: "サ シ ス セ ソ",
    sections: [
      {
        type: "kana",
        title: "แถว サ",
        items: [
          {
            char: "サ",
            romaji: "sa",
            thai: "ซะ",
            example: "サラダ",
            meaning: "สลัด"
          },
          {
            char: "シ",
            romaji: "shi",
            thai: "ชิ",
            example: "シャツ",
            meaning: "เสื้อเชิ้ต"
          },
          {
            char: "ス",
            romaji: "su",
            thai: "สุ",
            example: "スポーツ",
            meaning: "กีฬา"
          },
          {
            char: "セ",
            romaji: "se",
            thai: "เซะ",
            example: "セーター",
            meaning: "เสื้อกันหนาว"
          },
          {
            char: "ソ",
            romaji: "so",
            thai: "โซะ",
            example: "ソース",
            meaning: "ซอส"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียนแถว サ",
        items: [
          {
            char: "サ",
            romaji: "sa",
            strokes: 3,
            tip: "มีส่วนที่คล้ายเส้นตัดกัน"
          },
          {
            char: "シ",
            romaji: "shi",
            strokes: 3,
            tip: "ระวังสับสนกับ ツ"
          },
          {
            char: "ス",
            romaji: "su",
            strokes: 2,
            tip: "จำเส้นเฉียงยาวด้านล่าง"
          },
          {
            char: "セ",
            romaji: "se",
            strokes: 2,
            tip: "มีเส้นตั้งตัดกลาง"
          },
          {
            char: "ソ",
            romaji: "so",
            strokes: 2,
            tip: "ระวังสับสนกับ ン"
          }
        ]
      },
      {
        type: "note",
        title: "คู่ที่ต้องระวัง",
        content: `
          <p>
            <strong>シ</strong> กับ <strong>ツ</strong>
            หน้าตาคล้ายกันมาก
          </p>
          <p>
            และ <strong>ソ</strong> กับ <strong>ン</strong>
            ก็เป็นอีกคู่ที่ผู้เริ่มต้นมักสับสน
          </p>
          <p>
            เราจะมีบทแยกสำหรับฝึกสองคู่นี้โดยเฉพาะ
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "サラダ",
            reading: "sarada",
            thai: "ซะระดะ",
            meaning: "สลัด"
          },
          {
            jp: "スポーツ",
            reading: "supootsu",
            thai: "สุโปตสึ",
            meaning: "กีฬา"
          },
          {
            jp: "ソース",
            reading: "soosu",
            thai: "โซสุ",
            meaning: "ซอส"
          }
        ]
      },
      {
        type: "practice",
        question: "ตัว 「シ」 อ่านว่าอะไร?",
        choices: [
          "sa",
          "shi",
          "su",
          "so"
        ],
        answer: 1,
        explanation: "シ อ่านว่า shi"
      }
    ]
  },

  {
    id: 74,
    title: "คาตาคานะ カ + サ อ่านคำ",
    subtitle: "เริ่มผสมคาตาคานะ",
    sections: [
      {
        type: "concept",
        title: "อย่าจำแค่ตัวเดี่ยว",
        content: `
          <p>
            เหมือนกับฮิรางานะ เราต้องฝึกนำตัวอักษรหลายตัว
            มาต่อกันเป็นคำ
          </p>
          <p>
            ตัวอย่างเช่น
            <strong>カメラ</strong>
            แบ่งเป็น カ・メ・ラ
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำที่ใช้จริง",
        items: [
          {
            jp: "カメラ",
            reading: "kamera",
            thai: "คะเมะระ",
            meaning: "กล้อง"
          },
          {
            jp: "サラダ",
            reading: "sarada",
            thai: "ซะระดะ",
            meaning: "สลัด"
          },
          {
            jp: "カフェ",
            reading: "kafe",
            thai: "คะเฟะ",
            meaning: "คาเฟ่"
          },
          {
            jp: "ホテル",
            reading: "hoteru",
            thai: "โฮะเทะรุ",
            meaning: "โรงแรม"
          }
        ]
      },
      {
        type: "example",
        title: "ฝึกแบ่งเสียง",
        content: `
          <div class="example-box">
            <p><strong>カメラ</strong></p>
            <p>カ・メ・ラ</p>
            <p>ka・me・ra</p>
          </div>

          <div class="example-box">
            <p><strong>サラダ</strong></p>
            <p>サ・ラ・ダ</p>
            <p>sa・ra・da</p>
          </div>

          <div class="example-box">
            <p><strong>カフェ</strong></p>
            <p>カ・フェ</p>
            <p>ka・fe</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「カメラ」 หมายถึงอะไร?",
        choices: [
          "คาเฟ่",
          "กล้อง",
          "สลัด",
          "โรงแรม"
        ],
        answer: 1,
        explanation: "カメラ มาจาก camera หมายถึง กล้อง"
      },
      {
        type: "practice",
        question: "「サラダ」 อ่านว่าอะไร?",
        choices: [
          "sarada",
          "sarata",
          "serada",
          "sorada"
        ],
        answer: 0,
        explanation: "サ = sa, ラ = ra, ダ = da"
      },
      {
        type: "tip",
        title: "จำไว้",
        content: `
          <p>
            คาตาคานะจำนวนมากที่เราจะเจอต่อไป
            มาจากคำภาษาอังกฤษหรือภาษาอื่น
          </p>
          <p>
            ถ้าเราเดาคำต้นฉบับได้ การจำศัพท์จะง่ายขึ้นมาก
          </p>
        `
      }
    ]
  },

  {
    id: 75,
    title: "คาตาคานะกับเสียงยาว ー",
    subtitle: "เครื่องหมายที่เจอบ่อยมาก",
    sections: [
      {
        type: "concept",
        title: "เครื่องหมาย ー",
        content: `
          <p>
            ในคาตาคานะ เราจะเจอเครื่องหมาย
            <strong>ー</strong>
            บ่อยมาก
          </p>
          <p>
            เครื่องหมายนี้ใช้บอกว่า
            <strong>ให้ยืดเสียงสระของพยางค์ก่อนหน้า</strong>
          </p>
          <p>
            เช่น <strong>ケーキ</strong>
            จะมีเสียงยาวหลัง ケ
          </p>
        `
      },
      {
        type: "vocab",
        title: "ตัวอย่างคำ",
        items: [
          {
            jp: "ケーキ",
            reading: "keeki",
            thai: "เคกี",
            meaning: "เค้ก"
          },
          {
            jp: "コーヒー",
            reading: "koohii",
            thai: "โคฮี",
            meaning: "กาแฟ"
          },
          {
            jp: "スーパー",
            reading: "suupaa",
            thai: "ซูปา",
            meaning: "ซูเปอร์มาร์เก็ต"
          },
          {
            jp: "ホテル",
            reading: "hoteru",
            thai: "โฮะเทะรุ",
            meaning: "โรงแรม"
          },
          {
            jp: "タクシー",
            reading: "takushii",
            thai: "ทะคุชี",
            meaning: "แท็กซี่"
          }
        ]
      },
      {
        type: "example",
        title: "สังเกต ー",
        content: `
          <div class="example-box">
            <p><strong>ケーキ</strong></p>
            <p>ケ + ー + キ</p>
            <p>ke + เสียงยาว + ki</p>
          </div>

          <div class="example-box">
            <p><strong>コーヒー</strong></p>
            <p>コ + ー + ヒ + ー</p>
            <p>ko + เสียงยาว + hi + เสียงยาว</p>
          </div>

          <p>
            <strong>ข้อควรจำ:</strong>
            เครื่องหมาย ー ใช้บ่อยในคาตาคานะ
            โดยเฉพาะคำยืมจากภาษาต่างประเทศ
          </p>
        `
      },
      {
        type: "practice",
        question: "「ー」 ในคาตาคานะทำหน้าที่อะไร?",
        choices: [
          "ทำให้พยัญชนะซ้ำ",
          "ทำให้เกิดเสียง n",
          "ทำให้เสียงสระยาวขึ้น",
          "ทำให้คำเป็นคำถาม"
        ],
        answer: 2,
        explanation: "ー เป็นเครื่องหมายเสียงยาวในคาตาคานะ"
      },
      {
        type: "practice",
        question: "คำไหนมีเสียงยาวจาก ー?",
        choices: [
          "カメラ",
          "サラダ",
          "ケーキ",
          "ホテル"
        ],
        answer: 2,
        explanation: "ケーキ มี ー หลัง ケ จึงมีเสียงยาว"
      },
      {
        type: "tip",
        title: "จุดสำคัญ",
        content: `
          <p>
            ต่อจากนี้เวลาพบคำคาตาคานะ
            ให้สังเกต <strong>ー</strong> ทุกครั้ง
          </p>
          <p>
            อย่าอ่านข้าม เพราะความยาวของเสียงเป็นส่วนหนึ่งของการออกเสียง
          </p>
        `
      }
    ]
  }
);

// END OF LESSON 75
// LESSON 76 CONTINUES NEXT

  lessons.push(
  {
    id: 76,
    title: "คาตาคานะแถว タ",
    subtitle: "タ チ ツ テ ト",
    sections: [
      {
        type: "concept",
        title: "แถว タ",
        content: `
          <p>
            ต่อไปคือคาตาคานะแถว タ ซึ่งมีจุดที่ต้องระวังเป็นพิเศษ
            เพราะ <strong>チ</strong> และ <strong>ツ</strong>
            ออกเสียงไม่ตรงกับการอ่านแบบตรงตัวจากตาราง
          </p>
          <p>
            จำเป็นชุดว่า
            <strong>タ = ta, チ = chi, ツ = tsu, テ = te, ト = to</strong>
          </p>
        `
      },
      {
        type: "kana",
        title: "タ チ ツ テ ト",
        items: [
          {
            char: "タ",
            romaji: "ta",
            thai: "ทะ",
            example: "タオル",
            meaning: "ผ้าเช็ดตัว"
          },
          {
            char: "チ",
            romaji: "chi",
            thai: "จิ/ชิ",
            example: "チーズ",
            meaning: "ชีส"
          },
          {
            char: "ツ",
            romaji: "tsu",
            thai: "สึ",
            example: "ツアー",
            meaning: "ทัวร์"
          },
          {
            char: "テ",
            romaji: "te",
            thai: "เทะ",
            example: "テスト",
            meaning: "แบบทดสอบ"
          },
          {
            char: "ト",
            romaji: "to",
            thai: "โทะ",
            example: "トマト",
            meaning: "มะเขือเทศ"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "タ",
            romaji: "ta",
            strokes: 3,
            tip: "สังเกตเส้นเฉียงและส่วนตัดกัน"
          },
          {
            char: "チ",
            romaji: "chi",
            strokes: 3,
            tip: "รูปร่างต่างจาก ち อย่างชัดเจน"
          },
          {
            char: "ツ",
            romaji: "tsu",
            strokes: 3,
            tip: "ต้องแยกจาก シ ให้ได้"
          },
          {
            char: "テ",
            romaji: "te",
            strokes: 3,
            tip: "จำเส้นแนวนอนด้านบน"
          },
          {
            char: "ト",
            romaji: "to",
            strokes: 2,
            tip: "มีเส้นตั้งเป็นหลัก"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "タオル",
            reading: "taoru",
            thai: "ทะโอะรุ",
            meaning: "ผ้าเช็ดตัว"
          },
          {
            jp: "チーズ",
            reading: "chiizu",
            thai: "ชีซุ",
            meaning: "ชีส"
          },
          {
            jp: "ツアー",
            reading: "tsuaa",
            thai: "สึอา",
            meaning: "ทัวร์"
          },
          {
            jp: "テスト",
            reading: "tesuto",
            thai: "เทะสุโตะ",
            meaning: "แบบทดสอบ"
          },
          {
            jp: "トマト",
            reading: "tomato",
            thai: "โทะมะโตะ",
            meaning: "มะเขือเทศ"
          }
        ]
      },
      {
        type: "practice",
        question: "「チ」 อ่านว่าอะไร?",
        choices: [
          "ta",
          "chi",
          "tsu",
          "to"
        ],
        answer: 1,
        explanation: "チ อ่านว่า chi"
      },
      {
        type: "practice",
        question: "「ツ」 อ่านว่าอะไร?",
        choices: [
          "chi",
          "te",
          "tsu",
          "to"
        ],
        answer: 2,
        explanation: "ツ อ่านว่า tsu"
      }
    ]
  },

  {
    id: 77,
    title: "คาตาคานะแถว ナ",
    subtitle: "ナ ニ ヌ ネ ノ",
    sections: [
      {
        type: "kana",
        title: "แถว ナ",
        items: [
          {
            char: "ナ",
            romaji: "na",
            thai: "นะ",
            example: "ナイフ",
            meaning: "มีด"
          },
          {
            char: "ニ",
            romaji: "ni",
            thai: "นิ",
            example: "ニュース",
            meaning: "ข่าว"
          },
          {
            char: "ヌ",
            romaji: "nu",
            thai: "นุ",
            example: "ヌードル",
            meaning: "เส้น / นู้ดเดิล"
          },
          {
            char: "ネ",
            romaji: "ne",
            thai: "เนะ",
            example: "ネクタイ",
            meaning: "เนกไท"
          },
          {
            char: "ノ",
            romaji: "no",
            thai: "โนะ",
            example: "ノート",
            meaning: "สมุดโน้ต"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียนแถว ナ",
        items: [
          {
            char: "ナ",
            romaji: "na",
            strokes: 2,
            tip: "มีเส้นตัดกันตรงกลาง"
          },
          {
            char: "ニ",
            romaji: "ni",
            strokes: 2,
            tip: "จำเป็นเส้นแนวนอนสองเส้น"
          },
          {
            char: "ヌ",
            romaji: "nu",
            strokes: 2,
            tip: "มีส่วนโค้งคล้ายเส้นไขว้"
          },
          {
            char: "ネ",
            romaji: "ne",
            strokes: 4,
            tip: "มีหลายส่วนรวมกัน"
          },
          {
            char: "ノ",
            romaji: "no",
            strokes: 1,
            tip: "มีเส้นเดียวเฉียงลง"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ナイフ",
            reading: "naifu",
            thai: "ไนฟุ",
            meaning: "มีด"
          },
          {
            jp: "ニュース",
            reading: "nyuusu",
            thai: "นิวสุ",
            meaning: "ข่าว"
          },
          {
            jp: "ネクタイ",
            reading: "nekutai",
            thai: "เนะคุไต",
            meaning: "เนกไท"
          },
          {
            jp: "ノート",
            reading: "nooto",
            thai: "โนโตะ",
            meaning: "สมุดโน้ต"
          }
        ]
      },
      {
        type: "practice",
        question: "「ノート」 หมายถึงอะไร?",
        choices: [
          "ข่าว",
          "มีด",
          "สมุดโน้ต",
          "เนกไท"
        ],
        answer: 2,
        explanation: "ノート มาจาก note หมายถึงสมุดโน้ต"
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「ne」?",
        choices: [
          "ナ",
          "ニ",
          "ネ",
          "ノ"
        ],
        answer: 2,
        explanation: "ネ อ่านว่า ne"
      }
    ]
  },

  {
    id: 78,
    title: "คาตาคานะแถว ハ",
    subtitle: "ハ ヒ フ ヘ ホ",
    sections: [
      {
        type: "concept",
        title: "แถว ハ",
        content: `
          <p>
            แถวนี้มีตัวที่สำคัญมากคือ <strong>フ</strong>
            ซึ่งออกเสียงประมาณ fu
          </p>
          <p>
            เสียงของ フ ไม่เหมือน f ภาษาอังกฤษแบบตรง ๆ
            แต่เป็นเสียงที่ใช้ริมฝีปากร่วมกับลม
          </p>
        `
      },
      {
        type: "kana",
        title: "ハ ヒ フ ヘ ホ",
        items: [
          {
            char: "ハ",
            romaji: "ha",
            thai: "ฮะ",
            example: "ハンバーガー",
            meaning: "แฮมเบอร์เกอร์"
          },
          {
            char: "ヒ",
            romaji: "hi",
            thai: "ฮิ",
            example: "ヒーロー",
            meaning: "ฮีโร่"
          },
          {
            char: "フ",
            romaji: "fu",
            thai: "ฟุ",
            example: "フルーツ",
            meaning: "ผลไม้"
          },
          {
            char: "ヘ",
            romaji: "he",
            thai: "เฮะ",
            example: "ヘア",
            meaning: "ผม / hair"
          },
          {
            char: "ホ",
            romaji: "ho",
            thai: "โฮะ",
            example: "ホテル",
            meaning: "โรงแรม"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ハ",
            romaji: "ha",
            strokes: 2,
            tip: "เป็นเส้นสองส่วนแยกกัน"
          },
          {
            char: "ヒ",
            romaji: "hi",
            strokes: 2,
            tip: "มีเส้นแนวนอนและเส้นโค้ง"
          },
          {
            char: "フ",
            romaji: "fu",
            strokes: 1,
            tip: "เป็นเส้นโค้งเดียว"
          },
          {
            char: "ヘ",
            romaji: "he",
            strokes: 1,
            tip: "รูปร่างเหมือนภูเขาเล็ก ๆ"
          },
          {
            char: "ホ",
            romaji: "ho",
            strokes: 4,
            tip: "มีเส้นตั้งตัดกับเส้นอื่น"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ハンバーガー",
            reading: "hanbaagaa",
            thai: "ฮัมบากา",
            meaning: "แฮมเบอร์เกอร์"
          },
          {
            jp: "ヒーロー",
            reading: "hiiroo",
            thai: "ฮีโร",
            meaning: "ฮีโร่"
          },
          {
            jp: "フルーツ",
            reading: "furuutsu",
            thai: "ฟุรุตสึ",
            meaning: "ผลไม้"
          },
          {
            jp: "ホテル",
            reading: "hoteru",
            thai: "โฮะเทะรุ",
            meaning: "โรงแรม"
          }
        ]
      },
      {
        type: "practice",
        question: "「フ」 อ่านว่าอะไร?",
        choices: [
          "ha",
          "hi",
          "fu",
          "ho"
        ],
        answer: 2,
        explanation: "フ อ่านว่า fu"
      }
    ]
  },

  {
    id: 79,
    title: "คาตาคานะแถว マ",
    subtitle: "マ ミ ム メ モ",
    sections: [
      {
        type: "kana",
        title: "แถว マ",
        items: [
          {
            char: "マ",
            romaji: "ma",
            thai: "มะ",
            example: "マスク",
            meaning: "หน้ากาก"
          },
          {
            char: "ミ",
            romaji: "mi",
            thai: "มิ",
            example: "ミルク",
            meaning: "นม"
          },
          {
            char: "ム",
            romaji: "mu",
            thai: "มุ",
            example: "ムード",
            meaning: "บรรยากาศ / mood"
          },
          {
            char: "メ",
            romaji: "me",
            thai: "เมะ",
            example: "メニュー",
            meaning: "เมนู"
          },
          {
            char: "モ",
            romaji: "mo",
            thai: "โมะ",
            example: "モデル",
            meaning: "นางแบบ / นายแบบ / โมเดล"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "マ",
            romaji: "ma",
            strokes: 2,
            tip: "มีเส้นเฉียงและเส้นโค้ง"
          },
          {
            char: "ミ",
            romaji: "mi",
            strokes: 3,
            tip: "จำเป็นเส้นสามเส้น"
          },
          {
            char: "ム",
            romaji: "mu",
            strokes: 2,
            tip: "รูปร่างค่อนข้างเหลี่ยม"
          },
          {
            char: "メ",
            romaji: "me",
            strokes: 2,
            tip: "เส้นสองเส้นไขว้กัน"
          },
          {
            char: "モ",
            romaji: "mo",
            strokes: 3,
            tip: "มีเส้นแนวนอนหลายส่วน"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "マスク",
            reading: "masuku",
            thai: "มะสุคุ",
            meaning: "หน้ากาก"
          },
          {
            jp: "ミルク",
            reading: "miruku",
            thai: "มิรุคุ",
            meaning: "นม"
          },
          {
            jp: "メニュー",
            reading: "menyuu",
            thai: "เมนิว",
            meaning: "เมนู"
          },
          {
            jp: "モデル",
            reading: "moderu",
            thai: "โมะเดะรุ",
            meaning: "โมเดล / นายแบบ / นางแบบ"
          }
        ]
      },
      {
        type: "practice",
        question: "「ミルク」 หมายถึงอะไร?",
        choices: [
          "นม",
          "หน้ากาก",
          "เมนู",
          "โมเดล"
        ],
        answer: 0,
        explanation: "ミルク มาจาก milk หมายถึงนม"
      }
    ]
  },

  {
    id: 80,
    title: "คาตาคานะแถว ヤ และ ラ",
    subtitle: "ヤ ユ ヨ / ラ リ ル レ ロ",
    sections: [
      {
        type: "kana",
        title: "แถว ヤ",
        items: [
          {
            char: "ヤ",
            romaji: "ya",
            thai: "ยะ",
            example: "ヤング",
            meaning: "young"
          },
          {
            char: "ユ",
            romaji: "yu",
            thai: "ยุ",
            example: "ユニフォーム",
            meaning: "เครื่องแบบ"
          },
          {
            char: "ヨ",
            romaji: "yo",
            thai: "โยะ",
            example: "ヨーグルト",
            meaning: "โยเกิร์ต"
          }
        ]
      },
      {
        type: "kana",
        title: "แถว ラ",
        items: [
          {
            char: "ラ",
            romaji: "ra",
            thai: "ระ",
            example: "ラジオ",
            meaning: "วิทยุ"
          },
          {
            char: "リ",
            romaji: "ri",
            thai: "ริ",
            example: "リモコン",
            meaning: "รีโมต"
          },
          {
            char: "ル",
            romaji: "ru",
            thai: "รุ",
            example: "ルール",
            meaning: "กฎ"
          },
          {
            char: "レ",
            romaji: "re",
            thai: "เระ",
            example: "レストラン",
            meaning: "ร้านอาหาร"
          },
          {
            char: "ロ",
            romaji: "ro",
            thai: "โระ",
            example: "ロボット",
            meaning: "หุ่นยนต์"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ヤ",
            romaji: "ya",
            strokes: 2,
            tip: "สังเกตส่วนที่แยกออกด้านบน"
          },
          {
            char: "ユ",
            romaji: "yu",
            strokes: 2,
            tip: "เป็นเส้นคล้ายกรอบ"
          },
          {
            char: "ヨ",
            romaji: "yo",
            strokes: 3,
            tip: "มีเส้นแนวนอนสามระดับ"
          },
          {
            char: "ラ",
            romaji: "ra",
            strokes: 2,
            tip: "มีเส้นสั้นด้านบน"
          },
          {
            char: "リ",
            romaji: "ri",
            strokes: 2,
            tip: "เป็นเส้นสองส่วน"
          },
          {
            char: "ル",
            romaji: "ru",
            strokes: 2,
            tip: "มีส่วนโค้งด้านล่าง"
          },
          {
            char: "レ",
            romaji: "re",
            strokes: 1,
            tip: "เส้นเดียวคล้ายมุม"
          },
          {
            char: "ロ",
            romaji: "ro",
            strokes: 3,
            tip: "คล้ายกรอบสี่เหลี่ยม"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ヨーグルト",
            reading: "yooguruto",
            thai: "โยกุรุโตะ",
            meaning: "โยเกิร์ต"
          },
          {
            jp: "ラジオ",
            reading: "rajio",
            thai: "ระจิโอะ",
            meaning: "วิทยุ"
          },
          {
            jp: "リモコン",
            reading: "rimokon",
            thai: "ริโมะคง",
            meaning: "รีโมต"
          },
          {
            jp: "レストラン",
            reading: "resutoran",
            thai: "เระสุโตะรัง",
            meaning: "ร้านอาหาร"
          },
          {
            jp: "ロボット",
            reading: "robotto",
            thai: "โระบ็อตโตะ",
            meaning: "หุ่นยนต์"
          }
        ]
      },
      {
        type: "practice",
        question: "「ロボット」 หมายถึงอะไร?",
        choices: [
          "วิทยุ",
          "รีโมต",
          "ร้านอาหาร",
          "หุ่นยนต์"
        ],
        answer: 3,
        explanation: "ロボット มาจาก robot หมายถึงหุ่นยนต์"
      }
    ]
  },

  {
    id: 81,
    title: "คาตาคานะแถว ワ และ ン",
    subtitle: "ワ ヲ ン",
    sections: [
      {
        type: "concept",
        title: "สามตัวที่ต้องรู้",
        content: `
          <p>
            แถวสุดท้ายที่ใช้บ่อยของคาตาคานะคือ
            <strong>ワ</strong> และ <strong>ン</strong>
          </p>
          <p>
            ส่วน <strong>ヲ</strong> มีอยู่ในระบบอักษร
            แต่ในคำทั่วไปแทบไม่พบ เพราะมักใช้ を ในการเขียนอนุภาค
          </p>
        `
      },
      {
        type: "kana",
        title: "ワ ヲ ン",
        items: [
          {
            char: "ワ",
            romaji: "wa",
            thai: "วะ",
            example: "ワイン",
            meaning: "ไวน์"
          },
          {
            char: "ヲ",
            romaji: "wo",
            thai: "โวะ",
            example: "—",
            meaning: "พบไม่บ่อยในคำทั่วไป"
          },
          {
            char: "ン",
            romaji: "n",
            thai: "น",
            example: "パン",
            meaning: "ขนมปัง"
          }
        ]
      },
      {
        type: "script",
        title: "ฝึกเขียน",
        items: [
          {
            char: "ワ",
            romaji: "wa",
            strokes: 2,
            tip: "ระวังไม่ให้สับสนกับ ウ"
          },
          {
            char: "ヲ",
            romaji: "wo",
            strokes: 3,
            tip: "ปัจจุบันเจอไม่บ่อยในคำศัพท์ทั่วไป"
          },
          {
            char: "ン",
            romaji: "n",
            strokes: 2,
            tip: "ต้องแยกจาก ソ ให้ได้"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ワイン",
            reading: "wain",
            thai: "ไวน์",
            meaning: "ไวน์"
          },
          {
            jp: "パン",
            reading: "pan",
            thai: "ปัง",
            meaning: "ขนมปัง"
          },
          {
            jp: "ペン",
            reading: "pen",
            thai: "เป็น",
            meaning: "ปากกา"
          },
          {
            jp: "カメラ",
            reading: "kamera",
            thai: "คะเมะระ",
            meaning: "กล้อง"
          }
        ]
      },
      {
        type: "practice",
        question: "「ン」 อ่านว่าอะไร?",
        choices: [
          "wa",
          "wo",
          "n",
          "mu"
        ],
        answer: 2,
        explanation: "ン คือเสียง n"
      },
      {
        type: "tip",
        title: "คู่ที่ต้องจำ",
        content: `
          <p>
            <strong>ソ</strong> กับ <strong>ン</strong>
            เป็นคู่ที่ผู้เริ่มต้นสับสนบ่อย
          </p>
          <p>
            อย่าดูแค่รูปร่างรวม ๆ ให้สังเกตทิศทางและตำแหน่งของเส้นด้วย
          </p>
        `
      }
    ]
  },

  {
    id: 82,
    title: "ทบทวนคาตาคานะพื้นฐาน",
    subtitle: "ア ถึง ン",
    sections: [
      {
        type: "concept",
        title: "แผนที่คาตาคานะ",
        content: `
          <p>
            ตอนนี้เราเรียนคาตาคานะพื้นฐานเกือบครบชุดแล้ว
          </p>
          <p>
            สิ่งสำคัญที่สุดในช่วงนี้ไม่ใช่การท่องตามลำดับ
            แต่คือการเห็นตัวอักษรแบบสุ่มแล้วรู้เสียงทันที
          </p>
        `
      },
      {
        type: "example",
        title: "ตารางเสียงหลัก",
        content: `
          <div class="kana-review-grid">
            <div>ア a</div>
            <div>イ i</div>
            <div>ウ u</div>
            <div>エ e</div>
            <div>オ o</div>

            <div>カ ka</div>
            <div>キ ki</div>
            <div>ク ku</div>
            <div>ケ ke</div>
            <div>コ ko</div>

            <div>サ sa</div>
            <div>シ shi</div>
            <div>ス su</div>
            <div>セ se</div>
            <div>ソ so</div>

            <div>タ ta</div>
            <div>チ chi</div>
            <div>ツ tsu</div>
            <div>テ te</div>
            <div>ト to</div>

            <div>ナ na</div>
            <div>ニ ni</div>
            <div>ヌ nu</div>
            <div>ネ ne</div>
            <div>ノ no</div>

            <div>ハ ha</div>
            <div>ヒ hi</div>
            <div>フ fu</div>
            <div>ヘ he</div>
            <div>ホ ho</div>

            <div>マ ma</div>
            <div>ミ mi</div>
            <div>ム mu</div>
            <div>メ me</div>
            <div>モ mo</div>

            <div>ヤ ya</div>
            <div>ユ yu</div>
            <div>ヨ yo</div>

            <div>ラ ra</div>
            <div>リ ri</div>
            <div>ル ru</div>
            <div>レ re</div>
            <div>ロ ro</div>

            <div>ワ wa</div>
            <div>ン n</div>
          </div>
        `
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「shi」?",
        choices: [
          "サ",
          "シ",
          "ス",
          "セ"
        ],
        answer: 1,
        explanation: "シ อ่านว่า shi"
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「tsu」?",
        choices: [
          "チ",
          "ツ",
          "テ",
          "ト"
        ],
        answer: 1,
        explanation: "ツ อ่านว่า tsu"
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「fu」?",
        choices: [
          "ハ",
          "ヒ",
          "フ",
          "ホ"
        ],
        answer: 2,
        explanation: "フ อ่านว่า fu"
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「me」?",
        choices: [
          "マ",
          "ミ",
          "ム",
          "メ"
        ],
        answer: 3,
        explanation: "メ อ่านว่า me"
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「ro」?",
        choices: [
          "ラ",
          "リ",
          "レ",
          "ロ"
        ],
        answer: 3,
        explanation: "ロ อ่านว่า ro"
      }
    ]
  },

  {
    id: 83,
    title: "คาตาคานะเสียงขุ่น",
    subtitle: "ガ ザ ダ バ パ",
    sections: [
      {
        type: "concept",
        title: "เพิ่ม ゛ และ ゜",
        content: `
          <p>
            เหมือนฮิรางานะ คาตาคานะก็สามารถเปลี่ยนเสียงด้วย
            <strong>゛</strong> และ <strong>゜</strong>
          </p>
          <p>
            ตัวอย่างเช่น
            <strong>カ → ガ</strong>
            และ
            <strong>ハ → バ / パ</strong>
          </p>
        `
      },
      {
        type: "kana",
        title: "เสียงขุ่น",
        items: [
          {
            char: "ガ",
            romaji: "ga",
            thai: "กะ/งะ",
            example: "ガス",
            meaning: "แก๊ส"
          },
          {
            char: "ザ",
            romaji: "za",
            thai: "ซะเสียงก้อง",
            example: "サイズ",
            meaning: "ขนาด"
          },
          {
            char: "ダ",
            romaji: "da",
            thai: "ดะ",
            example: "ダンス",
            meaning: "เต้นรำ"
          },
          {
            char: "バ",
            romaji: "ba",
            thai: "บะ",
            example: "バス",
            meaning: "รถบัส"
          },
          {
            char: "パ",
            romaji: "pa",
            thai: "ปะ",
            example: "パン",
            meaning: "ขนมปัง"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ガス",
            reading: "gasu",
            thai: "กะสุ",
            meaning: "แก๊ส"
          },
          {
            jp: "サイズ",
            reading: "saizu",
            thai: "ไซซุ",
            meaning: "ขนาด"
          },
          {
            jp: "ダンス",
            reading: "dansu",
            thai: "ดันสุ",
            meaning: "เต้นรำ"
          },
          {
            jp: "バス",
            reading: "basu",
            thai: "บะสุ",
            meaning: "รถบัส"
          },
          {
            jp: "パン",
            reading: "pan",
            thai: "ปัง",
            meaning: "ขนมปัง"
          }
        ]
      },
      {
        type: "practice",
        question: "「ガ」 เกิดจากคาตาคานะตัวใด?",
        choices: [
          "カ",
          "キ",
          "サ",
          "ハ"
        ],
        answer: 0,
        explanation: "カ เติม ゛ กลายเป็น ガ"
      },
      {
        type: "practice",
        question: "「パ」 ต่างจาก 「バ」 อย่างไร?",
        choices: [
          "パ ไม่มีเครื่องหมาย",
          "パ ใช้ ゜ ส่วน バ ใช้ ゛",
          "ทั้งสองตัวเหมือนกัน",
          "バ ใช้ ゜"
        ],
        answer: 1,
        explanation: "パ เป็นเสียงกึ่งขุ่น ใช้ ゜ ส่วน バ ใช้ ゛"
      }
    ]
  },

  {
    id: 84,
    title: "คาตาคานะเสียงขุ่นในคำ",
    subtitle: "ฝึกอ่าน ガ ザ ダ バ パ",
    sections: [
      {
        type: "vocab",
        title: "คำที่เจอบ่อย",
        items: [
          {
            jp: "バッグ",
            reading: "baggu",
            thai: "แบ็กกุ",
            meaning: "กระเป๋า"
          },
          {
            jp: "ピザ",
            reading: "piza",
            thai: "พิซะ",
            meaning: "พิซซ่า"
          },
          {
            jp: "テレビ",
            reading: "terebi",
            thai: "เทะเระบิ",
            meaning: "โทรทัศน์"
          },
          {
            jp: "ビデオ",
            reading: "bideo",
            thai: "บิเดโอะ",
            meaning: "วิดีโอ"
          },
          {
            jp: "パーティー",
            reading: "paatii",
            thai: "ปาตี",
            meaning: "ปาร์ตี้"
          }
        ]
      },
      {
        type: "example",
        title: "ลองแบ่งคำ",
        content: `
          <div class="example-box">
            <p><strong>バッグ</strong></p>
            <p>バ・ッ・グ</p>
            <p>ba + หยุด + gu</p>
          </div>

          <div class="example-box">
            <p><strong>ピザ</strong></p>
            <p>ピ・ザ</p>
            <p>pi・za</p>
          </div>

          <div class="example-box">
            <p><strong>パーティー</strong></p>
            <p>パ・ー・ティ・ー</p>
            <p>pa + ยาว + ti + ยาว</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「バッグ」 หมายถึงอะไร?",
        choices: [
          "พิซซ่า",
          "กระเป๋า",
          "วิดีโอ",
          "ปาร์ตี้"
        ],
        answer: 1,
        explanation: "バッグ มาจาก bag หมายถึงกระเป๋า"
      },
      {
        type: "practice",
        question: "ใน 「バッグ」 มี ッ ทำหน้าที่อะไร?",
        choices: [
          "ทำเสียง n",
          "ทำเสียงยาว",
          "ทำจังหวะหยุดก่อน g",
          "ทำให้เป็นคำถาม"
        ],
        answer: 2,
        explanation: "ッ ทำให้เกิดจังหวะหยุดและพยัญชนะถัดไปเป็นเสียงซ้ำ"
      },
      {
        type: "tip",
        title: "สังเกตคำยืม",
        content: `
          <p>
            คำอย่าง bag, pizza, party เมื่อถูกนำมาใช้ในภาษาญี่ปุ่น
            จะถูกปรับให้เข้ากับระบบเสียงภาษาญี่ปุ่น
          </p>
          <p>
            จึงไม่ควรอ่านตามภาษาอังกฤษตรง ๆ ทุกตัว
            แต่ให้อ่านตามคาตาคานะที่เขียนไว้
          </p>
        `
      }
    ]
  },

  {
    id: 85,
    title: "เสียงผสมคาตาคานะ",
    subtitle: "キャ シュ チョ และเสียงอื่น ๆ",
    sections: [
      {
        type: "concept",
        title: "คาตาคานะก็มี ゃ ゅ ょ",
        content: `
          <p>
            คาตาคานะสามารถใช้ตัวเล็ก
            <strong>ャ ュ ョ</strong>
            เพื่อสร้างเสียงผสมได้เหมือนฮิรางานะ
          </p>
          <p>
            ตัวอย่างเช่น
            <strong>キ + ャ = キャ</strong>
            อ่านว่า kya
          </p>
        `
      },
      {
        type: "kana",
        title: "เสียงผสมพื้นฐาน",
        items: [
          {
            char: "キャ",
            romaji: "kya",
            thai: "เคียะ",
            example: "キャベツ",
            meaning: "กะหล่ำปลี"
          },
          {
            char: "キュ",
            romaji: "kyu",
            thai: "คิว",
            example: "キュート",
            meaning: "น่ารัก"
          },
          {
            char: "キョ",
            romaji: "kyo",
            thai: "เคียว",
            example: "キョロキョロ",
            meaning: "เหลียวมองไปมา"
          },
          {
            char: "シャ",
            romaji: "sha",
            thai: "ชะ",
            example: "シャツ",
            meaning: "เสื้อเชิ้ต"
          },
          {
            char: "シュ",
            romaji: "shu",
            thai: "ชุ",
            example: "シュガー",
            meaning: "น้ำตาล"
          },
          {
            char: "ショ",
            romaji: "sho",
            thai: "โชะ",
            example: "ショッピング",
            meaning: "ชอปปิง"
          }
        ]
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "キャベツ",
            reading: "kyabetsu",
            thai: "เคียะเบ็ตสึ",
            meaning: "กะหล่ำปลี"
          },
          {
            jp: "キュート",
            reading: "kyuuto",
            thai: "คิวโตะ",
            meaning: "น่ารัก"
          },
          {
            jp: "シャツ",
            reading: "shatsu",
            thai: "ชัตสึ",
            meaning: "เสื้อเชิ้ต"
          },
          {
            jp: "シュガー",
            reading: "shugaa",
            thai: "ชุกา",
            meaning: "น้ำตาล"
          },
          {
            jp: "ショッピング",
            reading: "shoppingu",
            thai: "ช็อปปิงกุ",
            meaning: "การชอปปิง"
          }
        ]
      },
      {
        type: "practice",
        question: "「キャ」 เกิดจากอะไร?",
        choices: [
          "キ + ャ",
          "カ + ャ",
          "キ + ユ",
          "ケ + ャ"
        ],
        answer: 0,
        explanation: "キ + ャ รวมกันเป็น キャ อ่านว่า kya"
      },
      {
        type: "practice",
        question: "「シャツ」 หมายถึงอะไร?",
        choices: [
          "น้ำตาล",
          "เสื้อเชิ้ต",
          "กะหล่ำปลี",
          "การชอปปิง"
        ],
        answer: 1,
        explanation: "シャツ หมายถึงเสื้อเชิ้ต"
      }
    ]
  },

  {
    id: 86,
    title: "เสียงผสมคาตาคานะเพิ่มเติม",
    subtitle: "ティ ディ ファ フィ フェ フォ",
    sections: [
      {
        type: "concept",
        title: "เสียงที่ไม่มีในตารางพื้นฐาน",
        content: `
          <p>
            คำต่างประเทศบางคำมีเสียงที่ภาษาญี่ปุ่นดั้งเดิมไม่มี
            จึงใช้คาตาคานะหลายตัวมาช่วยสร้างเสียงใหม่
          </p>
          <p>
            เช่น <strong>ティ</strong> ใช้แทนเสียงประมาณ ti
            และ <strong>ファ</strong> ใช้แทนเสียงประมาณ fa
          </p>
        `
      },
      {
        type: "kana",
        title: "ชุดเสียงพิเศษ",
        items: [
          {
            char: "ティ",
            romaji: "ti",
            thai: "ทิ",
            example: "パーティー",
            meaning: "ปาร์ตี้"
          },
          {
            char: "ディ",
            romaji: "di",
            thai: "ดิ",
            example: "ディナー",
            meaning: "อาหารค่ำ"
          },
          {
            char: "ファ",
            romaji: "fa",
            thai: "ฟะ",
            example: "ファイル",
            meaning: "ไฟล์"
          },
          {
            char: "フィ",
            romaji: "fi",
            thai: "ฟิ",
            example: "フィルム",
            meaning: "ฟิล์ม"
          },
          {
            char: "フェ",
            romaji: "fe",
            thai: "เฟะ",
            example: "カフェ",
            meaning: "คาเฟ่"
          },
          {
            char: "フォ",
            romaji: "fo",
            thai: "โฟะ",
            example: "フォーク",
            meaning: "ส้อม"
          }
        ]
      },
      {
        type: "example",
        title: "วิธีสังเกต",
        content: `
          <p>
            ตัวเล็ก <strong>ィ</strong> ใน ティ ไม่ได้อ่านแยกเป็น i เต็มเสียง
            แต่ช่วยเปลี่ยน テ ให้เกิดเสียง ti
          </p>
          <p>
            เช่น
            <strong>ティ</strong>
            = ti
          </p>

          <p>
            เช่นเดียวกับ
            <strong>ファ</strong>
            ที่ใช้ フ + ァ เพื่อสร้างเสียง fa
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "パーティー",
            reading: "paatii",
            thai: "ปาตี",
            meaning: "ปาร์ตี้"
          },
          {
            jp: "ディナー",
            reading: "dinaa",
            thai: "ดินา",
            meaning: "อาหารค่ำ"
          },
          {
            jp: "ファイル",
            reading: "fairu",
            thai: "ฟะอิรุ",
            meaning: "ไฟล์"
          },
          {
            jp: "カフェ",
            reading: "kafe",
            thai: "คะเฟะ",
            meaning: "คาเฟ่"
          },
          {
            jp: "フォーク",
            reading: "fooku",
            thai: "โฟคุ",
            meaning: "ส้อม"
          }
        ]
      },
      {
        type: "practice",
        question: "「ファ」 ใช้สร้างเสียงใด?",
        choices: [
          "fa",
          "fi",
          "fu",
          "fo"
        ],
        answer: 0,
        explanation: "ファ อ่านประมาณ fa"
      },
      {
        type: "practice",
        question: "「ティ」 อ่านประมาณว่าอะไร?",
        choices: [
          "ta",
          "chi",
          "ti",
          "te"
        ],
        answer: 2,
        explanation: "ティ ใช้แทนเสียงประมาณ ti ในคำต่างประเทศ"
      }
    ]
  },

  {
    id: 87,
    title: "คาตาคานะกับ ッ",
    subtitle: "เสียงซ้ำในคำต่างประเทศ",
    sections: [
      {
        type: "concept",
        title: "ッ ตัวเล็ก",
        content: `
          <p>
            คาตาคานะก็ใช้ <strong>ッ</strong> ตัวเล็กเหมือนกับ
            <strong>っ</strong> ในฮิรางานะ
          </p>
          <p>
            หน้าที่คือสร้างจังหวะหยุดสั้น ๆ ก่อนพยัญชนะถัดไป
          </p>
        `
      },
      {
        type: "vocab",
        title: "ตัวอย่าง",
        items: [
          {
            jp: "ベッド",
            reading: "beddo",
            thai: "เบ็ดโดะ",
            meaning: "เตียง"
          },
          {
            jp: "バッグ",
            reading: "baggu",
            thai: "แบ็กกุ",
            meaning: "กระเป๋า"
          },
          {
            jp: "カップ",
            reading: "kappu",
            thai: "คัปปุ",
            meaning: "ถ้วย"
          },
          {
            jp: "チケット",
            reading: "chiketto",
            thai: "ชิเค็ตโตะ",
            meaning: "ตั๋ว"
          },
          {
            jp: "ペット",
            reading: "petto",
            thai: "เป็ตโตะ",
            meaning: "สัตว์เลี้ยง"
          }
        ]
      },
      {
        type: "example",
        title: "แบ่งจังหวะ",
        content: `
          <div class="example-box">
            <p><strong>ベッド</strong></p>
            <p>ベ・ッ・ド</p>
            <p>be・หยุด・do</p>
          </div>

          <div class="example-box">
            <p><strong>チケット</strong></p>
            <p>チ・ケ・ッ・ト</p>
            <p>chi・ke・หยุด・to</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ペット」 หมายถึงอะไร?",
        choices: [
          "เตียง",
          "สัตว์เลี้ยง",
          "ตั๋ว",
          "ถ้วย"
        ],
        answer: 1,
        explanation: "ペット มาจาก pet หมายถึงสัตว์เลี้ยง"
      },
      {
        type: "practice",
        question: "「ッ」 ใน 「ベッド」 ทำหน้าที่อะไร?",
        choices: [
          "ยืดเสียง",
          "ทำเสียง n",
          "หยุดก่อนเสียง d",
          "เปลี่ยนคำเป็นอดีต"
        ],
        answer: 2,
        explanation: "ッ ทำให้มีจังหวะหยุดก่อนเสียง d"
      }
    ]
  },

  {
    id: 88,
    title: "คาตาคานะกับ ン",
    subtitle: "เสียง n ในคำต่างประเทศ",
    sections: [
      {
        type: "concept",
        title: "ン เป็นหนึ่งจังหวะ",
        content: `
          <p>
            <strong>ン</strong> ทำหน้าที่คล้าย <strong>ん</strong>
            ในฮิรางานะ คือเป็นเสียง n ที่อยู่ท้ายหรือกลางคำได้
          </p>
          <p>
            เวลาเจอคำคาตาคานะยาว ๆ
            ให้จำว่า ン เป็นหนึ่งจังหวะของคำ ไม่ใช่ตัวที่ต้องอ่านข้าม
          </p>
        `
      },
      {
        type: "vocab",
        title: "ตัวอย่าง",
        items: [
          {
            jp: "パン",
            reading: "pan",
            thai: "ปัง",
            meaning: "ขนมปัง"
          },
          {
            jp: "ペン",
            reading: "pen",
            thai: "เป็น",
            meaning: "ปากกา"
          },
          {
            jp: "コンピューター",
            reading: "konpyuutaa",
            thai: "คงพิวตา",
            meaning: "คอมพิวเตอร์"
          },
          {
            jp: "レストラン",
            reading: "resutoran",
            thai: "เระสุโตะรัง",
            meaning: "ร้านอาหาร"
          },
          {
            jp: "サンドイッチ",
            reading: "sandoicchi",
            thai: "ซันโดะอิตจิ",
            meaning: "แซนด์วิช"
          }
        ]
      },
      {
        type: "example",
        title: "แบ่งคำ",
        content: `
          <div class="example-box">
            <p><strong>パン</strong></p>
            <p>パ・ン</p>
            <p>pa・n</p>
          </div>

          <div class="example-box">
            <p><strong>ペン</strong></p>
            <p>ペ・ン</p>
            <p>pe・n</p>
          </div>

          <div class="example-box">
            <p><strong>サンドイッチ</strong></p>
            <p>サ・ン・ド・イ・ッ・チ</p>
            <p>san・do・i・หยุด・chi</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「パン」 หมายถึงอะไร?",
        choices: [
          "ปากกา",
          "ขนมปัง",
          "ร้านอาหาร",
          "แซนด์วิช"
        ],
        answer: 1,
        explanation: "パン หมายถึงขนมปัง"
      },
      {
        type: "practice",
        question: "ใน 「サンドイッチ」 มีทั้ง ン และ ッ หรือไม่?",
        choices: [
          "มีทั้งสองตัว",
          "มีแค่ ン",
          "มีแค่ ッ",
          "ไม่มีทั้งคู่"
        ],
        answer: 0,
        explanation: "サンドイッチ มีทั้ง ン และ ッ"
      }
    ]
  },

  {
    id: 89,
    title: "แยก シ ツ ソ ン",
    subtitle: "คู่ปราบเซียนของคาตาคานะ",
    sections: [
      {
        type: "concept",
        title: "ทำไมถึงสับสน?",
        content: `
          <p>
            <strong>シ・ツ・ソ・ン</strong>
            มีรูปร่างคล้ายกันมาก
            โดยเฉพาะตอนเห็นตัวอักษรเล็ก ๆ หรือฟอนต์บางชนิด
          </p>
          <p>
            วิธีเรียนที่ดีคือไม่ท่องว่า "หน้าตาคล้ายอะไร"
            แต่ให้สังเกตทิศทางของเส้นและตำแหน่งของเส้น
          </p>
        `
      },
      {
        type: "example",
        title: "จำเป็นกลุ่ม",
        content: `
          <div class="example-box">
            <p><strong>シ</strong> = shi</p>
            <p>ใช้ในคำว่า シャツ</p>
          </div>

          <div class="example-box">
            <p><strong>ツ</strong> = tsu</p>
            <p>ใช้ในคำว่า ツアー</p>
          </div>

          <div class="example-box">
            <p><strong>ソ</strong> = so</p>
            <p>ใช้ในคำว่า ソース</p>
          </div>

          <div class="example-box">
            <p><strong>ン</strong> = n</p>
            <p>ใช้ในคำว่า パン</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "เทียบคำ",
        items: [
          {
            jp: "シャツ",
            reading: "shatsu",
            thai: "ชัตสึ",
            meaning: "เสื้อเชิ้ต"
          },
          {
            jp: "ツアー",
            reading: "tsuaa",
            thai: "สึอา",
            meaning: "ทัวร์"
          },
          {
            jp: "ソース",
            reading: "soosu",
            thai: "โซสุ",
            meaning: "ซอส"
          },
          {
            jp: "パン",
            reading: "pan",
            thai: "ปัง",
            meaning: "ขนมปัง"
          }
        ]
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「shi」?",
        choices: [
          "シ",
          "ツ",
          "ソ",
          "ン"
        ],
        answer: 0,
        explanation: "シ อ่านว่า shi"
      },
      {
        type: "practice",
        question: "ตัวไหนอ่านว่า 「n」?",
        choices: [
          "シ",
          "ツ",
          "ソ",
          "ン"
        ],
        answer: 3,
        explanation: "ン อ่านว่า n"
      },
      {
        type: "practice",
        question: "「ソース」 อ่านว่าอะไร?",
        choices: [
          "shuusu",
          "soosu",
          "suusu",
          "sose"
        ],
        answer: 1,
        explanation: "ソ = so และ ー ทำให้เสียงยาว จึงเป็น soosu"
      },
      {
        type: "tip",
        title: "อย่ารีบท่องจากหน้าตา",
        content: `
          <p>
            ถ้ายังสับสนไม่เป็นไรเลย
            คู่นี้ต้องอาศัยการเห็นซ้ำ ๆ และฝึกเขียนจริง
          </p>
          <p>
            ต่อไปในแบบฝึกหัดจะมีการสุ่มตัวเหล่านี้มาให้แยกมากขึ้น
          </p>
        `
      }
    ]
  },

  {
    id: 90,
    title: "ทบทวนคาตาคานะทั้งหมด",
    subtitle: "จากตัวเดี่ยวสู่คำจริง",
    sections: [
      {
        type: "concept",
        title: "จบพื้นฐานคาตาคานะ",
        content: `
          <p>
            เราผ่านคาตาคานะพื้นฐานมาถึงจุดที่สามารถเริ่มอ่านคำยืมง่าย ๆ ได้แล้ว
          </p>
          <p>
            สิ่งที่ต้องจำมีหลายอย่าง:
          </p>
          <ul>
            <li>คาตาคานะพื้นฐาน</li>
            <li>เสียงขุ่น ゛</li>
            <li>เสียงกึ่งขุ่น ゜</li>
            <li>เสียงผสม ャ ュ ョ</li>
            <li>เสียงพิเศษ เช่น ティ และ ファ</li>
            <li>ッ ตัวเล็ก</li>
            <li>ン</li>
            <li>ー เสียงยาว</li>
          </ul>
        `
      },
      {
        type: "vocab",
        title: "คำท้าทาย",
        items: [
          {
            jp: "コンピューター",
            reading: "konpyuutaa",
            thai: "คงพิวตา",
            meaning: "คอมพิวเตอร์"
          },
          {
            jp: "ショッピング",
            reading: "shoppingu",
            thai: "ช็อปปิงกุ",
            meaning: "การชอปปิง"
          },
          {
            jp: "パーティー",
            reading: "paatii",
            thai: "ปาตี",
            meaning: "ปาร์ตี้"
          },
          {
            jp: "サンドイッチ",
            reading: "sandoicchi",
            thai: "ซันโดะอิตจิ",
            meaning: "แซนด์วิช"
          },
          {
            jp: "レストラン",
            reading: "resutoran",
            thai: "เระสุโตะรัง",
            meaning: "ร้านอาหาร"
          }
        ]
      },
      {
        type: "example",
        title: "ลองแกะคำ",
        content: `
          <div class="example-box">
            <p><strong>コンピューター</strong></p>
            <p>
              コ・ン・ピュ・ー・タ・ー
            </p>
            <p>
              ko・n・pyu・ยาว・ta・ยาว
            </p>
          </div>

          <div class="example-box">
            <p><strong>ショッピング</strong></p>
            <p>
              ショ・ッ・ピ・ン・グ
            </p>
            <p>
              sho・หยุด・pi・n・gu
            </p>
          </div>

          <div class="example-box">
            <p><strong>パーティー</strong></p>
            <p>
              パ・ー・ティ・ー
            </p>
            <p>
              pa・ยาว・ti・ยาว
            </p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「コンピューター」 มีตัวเล็กอะไร?",
        choices: [
          "ャ",
          "ュ",
          "ョ",
          "ไม่มีตัวเล็ก"
        ],
        answer: 1,
        explanation: "ピュ เป็นเสียงผสมจาก ピ + ュ"
      },
      {
        type: "practice",
        question: "「ショッピング」 มี ッ ทำหน้าที่อะไร?",
        choices: [
          "ทำเสียงยาว",
          "ทำเสียง n",
          "สร้างจังหวะหยุดก่อน p",
          "เปลี่ยนเสียง sho"
        ],
        answer: 2,
        explanation: "ッ ทำให้เกิดจังหวะหยุดก่อนเสียง p"
      },
      {
        type: "practice",
        question: "「パーティー」 มีเครื่องหมาย ー กี่ตัว?",
        choices: [
          "0",
          "1",
          "2",
          "3"
        ],
        answer: 2,
        explanation: "มี ー สองตัว คือหลัง パ และหลัง ティ"
      },
      {
        type: "check",
        title: "เช็กความพร้อม",
        items: [
          "อ่านคาตาคานะพื้นฐานได้",
          "รู้จัก ゛ และ ゜",
          "อ่าน ッ ตัวเล็กได้",
          "รู้จัก ン",
          "รู้จัก ー",
          "เริ่มอ่านเสียงผสม ャ ュ ョ ได้",
          "แยก シ กับ ツ ได้ดีขึ้น",
          "แยก ソ กับ ン ได้ดีขึ้น",
          "อ่านคำยืมง่าย ๆ ได้โดยแบ่งเป็นจังหวะ"
        ]
      },
      {
        type: "tip",
        title: "ด่านต่อไป",
        content: `
          <p>
            จากตรงนี้เราจะเริ่มเข้าสู่ส่วนที่สำคัญมากของภาษาญี่ปุ่น:
            <strong>การสร้างประโยค</strong>
          </p>
          <p>
            เราจะเริ่มจากประโยคง่ายที่สุดก่อน
            เช่น "นี่คือ..." "ฉันเป็น..." "อันนั้นคือ..."
            แล้วค่อยเพิ่มคำช่วยและรูปประโยคทีละขั้น
          </p>
          <p>
            เป้าหมายคือให้จากเดิมที่อ่านตัวอักษรได้
            กลายเป็น <strong>อ่านและสร้างประโยคภาษาญี่ปุ่นเองได้</strong>
          </p>
        `
      }
    ]
  }
);

// END OF LESSON 90
// LESSON 91 CONTINUES NEXT
  lessons.push(
  {
    id: 91,
    title: "ภาษาญี่ปุ่นเรียงประโยคยังไง?",
    subtitle: "รู้จักโครงสร้างประโยคพื้นฐาน",
    sections: [
      {
        type: "concept",
        title: "ประธาน + ส่วนขยาย + กริยา",
        content: `
          <p>
            สิ่งหนึ่งที่ต้องปรับตัวเมื่อเริ่มเรียนภาษาญี่ปุ่นคือ
            <strong>ลำดับคำในประโยค</strong>
          </p>
          <p>
            ภาษาไทยมักเรียงประมาณ
            <strong>ประธาน + กริยา + กรรม</strong>
          </p>
          <p>
            แต่ภาษาญี่ปุ่นมักวางกริยาไว้ด้านท้ายประโยค
          </p>

          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>watashi wa gakusei desu.</p>
            <p>ฉันเป็นนักเรียน</p>
          </div>

          <p>
            ในช่วงแรกให้จำภาพง่าย ๆ ว่า
            <strong>สิ่งที่กำลังพูดถึง → ข้อมูลเกี่ยวกับสิ่งนั้น → กริยา/です</strong>
          </p>
        `
      },
      {
        type: "concept",
        title: "ตัวช่วย は",
        content: `
          <p>
            <strong>は</strong> เป็นคำช่วยที่ใช้บอกว่า
            "สิ่งที่กำลังพูดถึงคือ..."
          </p>
          <p>
            แม้เขียนว่า は แต่เมื่อใช้เป็นคำช่วยจะอ่านว่า
            <strong>wa</strong>
          </p>

          <div class="example-box">
            <p>わたし<strong>は</strong> がくせいです。</p>
            <p>watashi <strong>wa</strong> gakusei desu.</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "わたし",
            reading: "watashi",
            thai: "วะตะชิ",
            meaning: "ฉัน / ผม"
          },
          {
            jp: "がくせい",
            reading: "gakusei",
            thai: "กักเซ",
            meaning: "นักเรียน"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู"
          },
          {
            jp: "ともだち",
            reading: "tomodachi",
            thai: "โทะโมะดะจิ",
            meaning: "เพื่อน"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>
          </div>

          <div class="example-box">
            <p>たなかさんは せんせいです。</p>
            <p>คุณทานากะเป็นครู</p>
          </div>

          <div class="example-box">
            <p>マイさんは ともだちです。</p>
            <p>คุณไมเป็นเพื่อน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ในประโยค 「わたしは がくせいです。」 は ทำหน้าที่อะไร?",
        choices: [
          "บอกอดีต",
          "บอกสิ่งที่กำลังพูดถึง",
          "ทำให้เป็นคำถาม",
          "บอกสถานที่"
        ],
        answer: 1,
        explanation: "は ใช้กำหนดหัวข้อของประโยค หรือสิ่งที่เรากำลังพูดถึง"
      }
    ]
  },

  {
    id: 92,
    title: "です คืออะไร?",
    subtitle: "ประโยคบอกว่าเป็น / คือ",
    sections: [
      {
        type: "concept",
        title: "です",
        content: `
          <p>
            <strong>です</strong> เป็นรูปสุภาพที่ใช้ท้ายประโยค
            เพื่อบอกลักษณะว่า "เป็น..." หรือ "คือ..."
          </p>

          <div class="example-box">
            <p>わたしは がくせい<strong>です</strong>。</p>
            <p>ฉันเป็นนักเรียน</p>
          </div>

          <div class="example-box">
            <p>これは ほん<strong>です</strong>。</p>
            <p>นี่คือหนังสือ</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "โครงสร้างพื้นฐาน",
        content: `
          <p class="formula-box">
            A は B です。
          </p>

          <p>
            อ่านง่าย ๆ ว่า
            <strong>A คือ B</strong>
          </p>

          <p>
            ตัวอย่าง:
          </p>

          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันคือนักเรียน</p>
          </div>

          <div class="example-box">
            <p>これは ほんです。</p>
            <p>นี่คือหนังสือ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำนามพื้นฐาน",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮง",
            meaning: "หนังสือ"
          },
          {
            jp: "ペン",
            reading: "pen",
            thai: "เป็น",
            meaning: "ปากกา"
          },
          {
            jp: "かばん",
            reading: "kaban",
            thai: "คะบัง",
            meaning: "กระเป๋า"
          },
          {
            jp: "ねこ",
            reading: "neko",
            thai: "เนะโกะ",
            meaning: "แมว"
          },
          {
            jp: "いぬ",
            reading: "inu",
            thai: "อินุ",
            meaning: "สุนัข"
          }
        ]
      },
      {
        type: "practice",
        question: "「これは ほんです。」 แปลว่าอะไร?",
        choices: [
          "นี่คือหนังสือ",
          "นั่นคือปากกา",
          "นี่คือแมว",
          "ฉันเป็นนักเรียน"
        ],
        answer: 0,
        explanation: "これ = นี้, ほん = หนังสือ, です = คือ"
      },
      {
        type: "practice",
        question: "เติมคำให้ถูก: わたしは がくせい___。",
        choices: [
          "は",
          "を",
          "です",
          "に"
        ],
        answer: 2,
        explanation: "ประโยค A は B です ใช้ です ปิดท้าย"
      }
    ]
  },

  {
    id: 93,
    title: "นี่ นั่น โน่น",
    subtitle: "これ それ あれ",
    sections: [
      {
        type: "concept",
        title: "คำชี้สิ่งของ",
        content: `
          <p>
            ภาษาญี่ปุ่นมีคำสำหรับชี้สิ่งของ 3 ระยะ
          </p>

          <div class="example-box">
            <p><strong>これ</strong> = สิ่งนี้</p>
            <p>อยู่ใกล้ผู้พูด</p>
          </div>

          <div class="example-box">
            <p><strong>それ</strong> = สิ่งนั้น</p>
            <p>อยู่ใกล้ผู้ฟัง</p>
          </div>

          <div class="example-box">
            <p><strong>あれ</strong> = สิ่งโน้น</p>
            <p>อยู่ไกลจากทั้งผู้พูดและผู้ฟัง</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ใช้กับ です",
        content: `
          <div class="example-box">
            <p>これは ほんです。</p>
            <p>นี่คือหนังสือ</p>
          </div>

          <div class="example-box">
            <p>それは ペンです。</p>
            <p>นั่นคือปากกา</p>
          </div>

          <div class="example-box">
            <p>あれは かばんです。</p>
            <p>โน่นคือกระเป๋า</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "これ",
            reading: "kore",
            thai: "โคะเระ",
            meaning: "สิ่งนี้"
          },
          {
            jp: "それ",
            reading: "sore",
            thai: "โซะเระ",
            meaning: "สิ่งนั้น"
          },
          {
            jp: "あれ",
            reading: "are",
            thai: "อะเระ",
            meaning: "สิ่งโน้น"
          },
          {
            jp: "これら",
            reading: "korera",
            thai: "โคะเระระ",
            meaning: "สิ่งเหล่านี้"
          }
        ]
      },
      {
        type: "practice",
        question: "ถ้าของอยู่ใกล้ผู้พูด ควรใช้คำไหน?",
        choices: [
          "これ",
          "それ",
          "あれ",
          "どれ"
        ],
        answer: 0,
        explanation: "これ ใช้ชี้สิ่งที่อยู่ใกล้ผู้พูด"
      },
      {
        type: "practice",
        question: "「あれは ねこです。」 หมายถึงอะไร?",
        choices: [
          "นี่คือแมว",
          "นั่นคือแมว",
          "โน่นคือแมว",
          "แมวอยู่ตรงนี้"
        ],
        answer: 2,
        explanation: "あれ ใช้กับสิ่งที่อยู่ไกลจากทั้งผู้พูดและผู้ฟัง"
      }
    ]
  },

  {
    id: 94,
    title: "ถามว่าอะไร?",
    subtitle: "これ は なんですか",
    sections: [
      {
        type: "concept",
        title: "คำถาม なんですか",
        content: `
          <p>
            <strong>なん</strong> แปลว่า "อะไร"
            และ <strong>ですか</strong> ใช้ทำให้ประโยคเป็นคำถามสุภาพ
          </p>

          <div class="example-box">
            <p>これは なんですか。</p>
            <p>นี่คืออะไร?</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "โครงสร้าง",
        content: `
          <p class="formula-box">
            これは なんですか。
          </p>

          <p>
            これ = สิ่งนี้<br>
            は = หัวข้อ<br>
            なん = อะไร<br>
            ですか = คือ...? / เป็น...? แบบคำถาม
          </p>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> これは なんですか。</p>
            <p>นี่คืออะไร?</p>

            <p><strong>B:</strong> ほんです。</p>
            <p>หนังสือครับ/ค่ะ</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> それは なんですか。</p>
            <p>นั่นคืออะไร?</p>

            <p><strong>B:</strong> ペンです。</p>
            <p>ปากกาครับ/ค่ะ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "なん",
            reading: "nan",
            thai: "นัน",
            meaning: "อะไร"
          },
          {
            jp: "かさ",
            reading: "kasa",
            thai: "คะสะ",
            meaning: "ร่ม"
          },
          {
            jp: "とけい",
            reading: "tokei",
            thai: "โทะเค",
            meaning: "นาฬิกา"
          },
          {
            jp: "えんぴつ",
            reading: "enpitsu",
            thai: "เอ็นพิทสึ",
            meaning: "ดินสอ"
          }
        ]
      },
      {
        type: "practice",
        question: "「これは なんですか。」 หมายถึงอะไร?",
        choices: [
          "นี่อยู่ที่ไหน?",
          "นี่คือใคร?",
          "นี่คืออะไร?",
          "นี่ใช่ไหม?"
        ],
        answer: 2,
        explanation: "なん แปลว่าอะไร และ ですか ทำให้เป็นคำถาม"
      },
      {
        type: "practice",
        question: "เติมคำ: これは ___ ですか。",
        choices: [
          "だれ",
          "なん",
          "どこ",
          "いつ"
        ],
        answer: 1,
        explanation: "なん ใช้ถามว่าสิ่งนั้นคืออะไร"
      }
    ]
  },

  {
    id: 95,
    title: "ถามว่าใคร?",
    subtitle: "だれですか",
    sections: [
      {
        type: "concept",
        title: "だれ = ใคร",
        content: `
          <p>
            ถ้า <strong>なん</strong> ใช้ถามว่า "อะไร"
            <strong>だれ</strong> ใช้ถามว่า "ใคร"
          </p>

          <div class="example-box">
            <p>あのひとは だれですか。</p>
            <p>คนนั้นคือใคร?</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำเกี่ยวกับคน",
        items: [
          {
            jp: "ひと",
            reading: "hito",
            thai: "ฮิโตะ",
            meaning: "คน"
          },
          {
            jp: "ともだち",
            reading: "tomodachi",
            thai: "โทะโมะดะจิ",
            meaning: "เพื่อน"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู"
          },
          {
            jp: "がくせい",
            reading: "gakusei",
            thai: "กักเซ",
            meaning: "นักเรียน"
          }
        ]
      },
      {
        type: "example",
        title: "ถามและตอบ",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> あのひとは だれですか。</p>
            <p>คนนั้นคือใคร?</p>

            <p><strong>B:</strong> たなかさんです。</p>
            <p>คุณทานากะครับ/ค่ะ</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> そのひとは だれですか。</p>
            <p>คนนั้นคือใคร?</p>

            <p><strong>B:</strong> わたしの ともだちです。</p>
            <p>เป็นเพื่อนของฉัน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำว่า 「だれ」 หมายถึงอะไร?",
        choices: [
          "อะไร",
          "ใคร",
          "ที่ไหน",
          "เมื่อไร"
        ],
        answer: 1,
        explanation: "だれ = ใคร"
      },
      {
        type: "practice",
        question: "「あのひとは だれですか。」 หมายถึงอะไร?",
        choices: [
          "คนนั้นคือใคร?",
          "คนนั้นอยู่ที่ไหน?",
          "คนนั้นเป็นอะไร?",
          "นี่คือใคร?"
        ],
        answer: 0,
        explanation: "あのひと = คนนั้น และ だれ = ใคร"
      }
    ]
  },

  {
    id: 96,
    title: "คำชี้แบบ この その あの",
    subtitle: "ใช้หน้าคำนาม",
    sections: [
      {
        type: "concept",
        title: "これ กับ この ต่างกัน",
        content: `
          <p>
            <strong>これ / それ / あれ</strong>
            สามารถใช้เดี่ยว ๆ ได้
          </p>
          <p>
            แต่ <strong>この / その / あの</strong>
            ต้องมีคำนามตามหลัง
          </p>

          <div class="example-box">
            <p>これは ほんです。</p>
            <p>นี่คือหนังสือ</p>
          </div>

          <div class="example-box">
            <p>この ほんは おもしろいです。</p>
            <p>หนังสือเล่มนี้น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "สามระยะ",
        content: `
          <p>
            <strong>この + คำนาม</strong> = คำนามนี้<br>
            <strong>その + คำนาม</strong> = คำนามนั้น<br>
            <strong>あの + คำนาม</strong> = คำนามโน้น
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮง",
            meaning: "หนังสือ"
          },
          {
            jp: "かばん",
            reading: "kaban",
            thai: "คะบัง",
            meaning: "กระเป๋า"
          },
          {
            jp: "くるま",
            reading: "kuruma",
            thai: "คุรุมะ",
            meaning: "รถยนต์"
          },
          {
            jp: "じてんしゃ",
            reading: "jitensha",
            thai: "จิเท็นชะ",
            meaning: "จักรยาน"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>この ほん</p>
            <p>หนังสือเล่มนี้</p>
          </div>

          <div class="example-box">
            <p>その かばん</p>
            <p>กระเป๋าใบนั้น</p>
          </div>

          <div class="example-box">
            <p>あの くるま</p>
            <p>รถคันโน้น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อไหนถูกต้อง?",
        choices: [
          "このです ほん",
          "この ほん",
          "これ ほん",
          "このは ほん"
        ],
        answer: 1,
        explanation: "この ต้องตามด้วยคำนามโดยตรง เช่น この ほん"
      },
      {
        type: "practice",
        question: "「その かばん」 หมายถึงอะไร?",
        choices: [
          "กระเป๋าใบนี้",
          "กระเป๋าใบนั้น",
          "กระเป๋าใบนู้น",
          "กระเป๋าของฉัน"
        ],
        answer: 1,
        explanation: "その = นั้น เมื่อวางหน้าคำนาม"
      }
    ]
  },

  {
    id: 97,
    title: "ของใคร?",
    subtitle: "の แสดงความเป็นเจ้าของ",
    sections: [
      {
        type: "concept",
        title: "คำช่วย の",
        content: `
          <p>
            <strong>の</strong> เป็นคำช่วยที่ใช้เชื่อมคำนาม
            โดยในระดับพื้นฐานมักแปลว่า
            <strong>"ของ..."</strong>
          </p>

          <div class="example-box">
            <p>わたし<strong>の</strong> ほん</p>
            <p>หนังสือของฉัน</p>
          </div>

          <div class="example-box">
            <p>たなかさん<strong>の</strong> かばん</p>
            <p>กระเป๋าของคุณทานากะ</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "โครงสร้าง",
        content: `
          <p class="formula-box">
            A の B
          </p>
          <p>
            = B ของ A
          </p>

          <p>
            จุดสำคัญคือภาษาญี่ปุ่นวาง
            <strong>เจ้าของไว้ก่อน の</strong>
            และสิ่งที่เป็นของนั้นไว้หลัง の
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "わたし",
            reading: "watashi",
            thai: "วะตะชิ",
            meaning: "ฉัน"
          },
          {
            jp: "あなた",
            reading: "anata",
            thai: "อะนะตะ",
            meaning: "คุณ"
          },
          {
            jp: "ともだち",
            reading: "tomodachi",
            thai: "โทะโมะดะจิ",
            meaning: "เพื่อน"
          },
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮง",
            meaning: "หนังสือ"
          },
          {
            jp: "かさ",
            reading: "kasa",
            thai: "คะสะ",
            meaning: "ร่ม"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างประโยค",
        content: `
          <div class="example-box">
            <p>これは わたしの ほんです。</p>
            <p>นี่คือหนังสือของฉัน</p>
          </div>

          <div class="example-box">
            <p>それは あなたの かさです。</p>
            <p>นั่นคือร่มของคุณ</p>
          </div>

          <div class="example-box">
            <p>あれは ともだちの かばんです。</p>
            <p>โน่นคือกระเป๋าของเพื่อน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「わたしの ほん」 หมายถึงอะไร?",
        choices: [
          "ฉันอ่านหนังสือ",
          "หนังสือของฉัน",
          "หนังสือเล่มนั้น",
          "หนังสืออยู่กับฉัน"
        ],
        answer: 1,
        explanation: "わたしの = ของฉัน และ ほん = หนังสือ"
      },
      {
        type: "practice",
        question: "เติมคำ: これは わたし___ かばんです。",
        choices: [
          "は",
          "を",
          "の",
          "に"
        ],
        answer: 2,
        explanation: "の ใช้เชื่อมเจ้าของกับสิ่งของ"
      }
    ]
  },

  {
    id: 98,
    title: "ของฉัน ของคุณ ของใคร",
    subtitle: "ฝึก の ในบทสนทนา",
    sections: [
      {
        type: "concept",
        title: "ถามเจ้าของ",
        content: `
          <p>
            เมื่อเราต้องการถามว่า "นี่ของใคร?"
            สามารถใช้รูปแบบ
            <strong>だれの</strong>
            ได้
          </p>

          <div class="example-box">
            <p>これは だれの ほんですか。</p>
            <p>นี่คือหนังสือของใคร?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> これは だれの かばんですか。</p>
            <p>นี่คือกระเป๋าของใคร?</p>

            <p><strong>B:</strong> わたしの かばんです。</p>
            <p>กระเป๋าของฉัน</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> それは だれの ペンですか。</p>
            <p>นั่นคือปากกาของใคร?</p>

            <p><strong>B:</strong> たなかさんの ペンです。</p>
            <p>ปากกาของคุณทานากะ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์เพิ่ม",
        items: [
          {
            jp: "スマホ",
            reading: "sumaho",
            thai: "สุมาโฮะ",
            meaning: "สมาร์ตโฟน"
          },
          {
            jp: "じしょ",
            reading: "jisho",
            thai: "จิโชะ",
            meaning: "พจนานุกรม"
          },
          {
            jp: "つくえ",
            reading: "tsukue",
            thai: "สึคุเอะ",
            meaning: "โต๊ะ"
          },
          {
            jp: "いす",
            reading: "isu",
            thai: "อิสุ",
            meaning: "เก้าอี้"
          }
        ]
      },
      {
        type: "practice",
        question: "「だれの」 ใช้ถามเรื่องอะไร?",
        choices: [
          "อะไร",
          "ใคร",
          "ของใคร",
          "ที่ไหน"
        ],
        answer: 2,
        explanation: "だれ = ใคร + の = ของ จึงเป็น 'ของใคร'"
      },
      {
        type: "practice",
        question: "「これは だれの ほんですか。」 หมายถึงอะไร?",
        choices: [
          "นี่คือหนังสืออะไร?",
          "นี่คือหนังสือของใคร?",
          "นี่คือใคร?",
          "ใครอ่านหนังสือ?"
        ],
        answer: 1,
        explanation: "だれの ほん = หนังสือของใคร"
      }
    ]
  },

  {
    id: 99,
    title: "ก็เหมือนกัน",
    subtitle: "คำช่วย も",
    sections: [
      {
        type: "concept",
        title: "も = ก็ / ด้วย",
        content: `
          <p>
            <strong>も</strong> ใช้เมื่อเราต้องการบอกว่า
            สิ่งหนึ่งมีข้อมูลแบบเดียวกับสิ่งที่พูดไปก่อนหน้า
          </p>

          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p>ともだちも がくせいです。</p>
            <p>เพื่อนก็เป็นนักเรียนเหมือนกัน</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "は เปลี่ยนเป็น も",
        content: `
          <p>
            ในประโยคพื้นฐาน
            <strong>A は B です</strong>
          </p>
          <p>
            ถ้าต้องการบอกว่า A อีกคนก็เป็น B เช่นกัน
            สามารถใช้
            <strong>A も B です</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p>たなかさんも がくせいです。</p>
            <p>คุณทานากะก็เป็นนักเรียน</p>
          </div>

          <div class="example-box">
            <p>これは ほんです。</p>
            <p>นี่คือหนังสือ</p>

            <p>それも ほんです。</p>
            <p>นั่นก็เป็นหนังสือเหมือนกัน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「も」 ในระดับพื้นฐานมักมีความหมายว่าอะไร?",
        choices: [
          "ที่",
          "และ",
          "ก็ / ด้วย",
          "จาก"
        ],
        answer: 2,
        explanation: "も ใช้บอกว่าสิ่งนั้นก็มีคุณสมบัติหรือข้อมูลเดียวกัน"
      },
      {
        type: "practice",
        question: "เติมคำ: わたしは がくせいです。ともだち___ がくせいです。",
        choices: [
          "は",
          "も",
          "を",
          "に"
        ],
        answer: 1,
        explanation: "ใช้ も เพื่อบอกว่าเพื่อนก็เป็นนักเรียนเหมือนกัน"
      }
    ]
  },

  {
    id: 100,
    title: "ทบทวนบทที่ 91–99",
    subtitle: "สร้างประโยคแรกของเรา",
    sections: [
      {
        type: "concept",
        title: "สิ่งที่เรียนมา",
        content: `
          <p>
            ตอนนี้เราเริ่มสร้างประโยคภาษาญี่ปุ่นได้แล้ว
          </p>
          <ul>
            <li>は = หัวข้อ</li>
            <li>です = เป็น / คือ</li>
            <li>か = คำถาม</li>
            <li>これ・それ・あれ = นี้ / นั้น / โน่น</li>
            <li>この・その・あの = นี้ / นั้น / โน่น + คำนาม</li>
            <li>なん = อะไร</li>
            <li>だれ = ใคร</li>
            <li>の = ของ</li>
            <li>も = ก็ / ด้วย</li>
          </ul>
        `
      },
      {
        type: "example",
        title: "ประกอบร่างประโยค",
        content: `
          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>
          </div>

          <div class="example-box">
            <p>これは わたしの ほんです。</p>
            <p>นี่คือหนังสือของฉัน</p>
          </div>

          <div class="example-box">
            <p>これは なんですか。</p>
            <p>นี่คืออะไร?</p>
          </div>

          <div class="example-box">
            <p>これは だれの かばんですか。</p>
            <p>นี่คือกระเป๋าของใคร?</p>
          </div>

          <div class="example-box">
            <p>ともだちも がくせいです。</p>
            <p>เพื่อนก็เป็นนักเรียนเหมือนกัน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อไหนแปลว่า 「นี่คือหนังสือของฉัน」?",
        choices: [
          "これは わたしは ほんです。",
          "これは わたしの ほんです。",
          "これは わたしも ほんです。",
          "これは だれの ほんです。"
        ],
        answer: 1,
        explanation: "わたしの ほん = หนังสือของฉัน"
      },
      {
        type: "practice",
        question: "ข้อไหนแปลว่า 「นี่คืออะไร?」",
        choices: [
          "これは だれですか。",
          "これは なんですか。",
          "これは どこですか。",
          "これは ほんですか。"
        ],
        answer: 1,
        explanation: "なん ใช้ถามว่าอะไร"
      },
      {
        type: "practice",
        question: "「たなかさんも がくせいです。」 หมายถึงอะไร?",
        choices: [
          "ทานากะเป็นนักเรียน",
          "ทานากะไม่ใช่นักเรียน",
          "ทานากะก็เป็นนักเรียนเหมือนกัน",
          "ทานากะถามนักเรียน"
        ],
        answer: 2,
        explanation: "も มีความหมายว่า 'ก็ / ด้วย' ในบริบทนี้"
      },
      {
        type: "check",
        title: "ผ่านบทพื้นฐานหรือยัง?",
        items: [
          "เข้าใจ A は B です",
          "เข้าใจคำถาม ですか",
          "แยก これ กับ この ได้",
          "ใช้ なん และ だれ ได้",
          "ใช้ の บอกความเป็นเจ้าของได้",
          "ใช้ も เพื่อบอกว่า 'ก็เหมือนกัน' ได้",
          "อ่านประโยคง่าย ๆ ได้โดยไม่ต้องแปลทุกตัว"
        ]
      }
    ]
  },

  {
    id: 101,
    title: "สถานที่อยู่ที่ไหน?",
    subtitle: "どこですか",
    sections: [
      {
        type: "concept",
        title: "どこ = ที่ไหน",
        content: `
          <p>
            เมื่อเราต้องการถามสถานที่ ใช้คำว่า
            <strong>どこ</strong>
            ซึ่งแปลว่า "ที่ไหน"
          </p>

          <div class="example-box">
            <p>トイレは どこですか。</p>
            <p>ห้องน้ำอยู่ที่ไหน?</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "สถานที่พื้นฐาน",
        items: [
          {
            jp: "トイレ",
            reading: "toire",
            thai: "โทะอิเระ",
            meaning: "ห้องน้ำ"
          },
          {
            jp: "がっこう",
            reading: "gakkou",
            thai: "กักโก",
            meaning: "โรงเรียน"
          },
          {
            jp: "えき",
            reading: "eki",
            thai: "เอะคิ",
            meaning: "สถานี"
          },
          {
            jp: "うち",
            reading: "uchi",
            thai: "อุจิ",
            meaning: "บ้าน"
          },
          {
            jp: "コンビニ",
            reading: "konbini",
            thai: "คงบินิ",
            meaning: "ร้านสะดวกซื้อ"
          }
        ]
      },
      {
        type: "example",
        title: "ถามและตอบ",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> トイレは どこですか。</p>
            <p>ห้องน้ำอยู่ที่ไหน?</p>

            <p><strong>B:</strong> あそこです。</p>
            <p>อยู่ตรงโน้น</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> がっこうは どこですか。</p>
            <p>โรงเรียนอยู่ที่ไหน?</p>

            <p><strong>B:</strong> あそこです。</p>
            <p>อยู่ตรงโน้น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「どこ」 หมายถึงอะไร?",
        choices: [
          "ใคร",
          "อะไร",
          "ที่ไหน",
          "เมื่อไร"
        ],
        answer: 2,
        explanation: "どこ = ที่ไหน"
      },
      {
        type: "practice",
        question: "「トイレは どこですか。」 หมายถึงอะไร?",
        choices: [
          "ห้องน้ำคืออะไร?",
          "ห้องน้ำอยู่ที่ไหน?",
          "ห้องน้ำของใคร?",
          "ใครอยู่ในห้องน้ำ?"
        ],
        answer: 1,
        explanation: "トイレ = ห้องน้ำ และ どこ = ที่ไหน"
      }
    ]
  },

  {
    id: 102,
    title: "ตรงนี้ ตรงนั้น ตรงโน้น",
    subtitle: "ここ そこ あそこ",
    sections: [
      {
        type: "concept",
        title: "คำบอกสถานที่",
        content: `
          <p>
            ถ้า <strong>これ・それ・あれ</strong>
            ใช้ชี้สิ่งของ
            เรามีคำอีกชุดสำหรับชี้สถานที่
          </p>

          <div class="example-box">
            <p><strong>ここ</strong> = ตรงนี้</p>
          </div>

          <div class="example-box">
            <p><strong>そこ</strong> = ตรงนั้น</p>
          </div>

          <div class="example-box">
            <p><strong>あそこ</strong> = ตรงโน้น</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ここは がっこうです。</p>
            <p>ที่นี่คือโรงเรียน</p>
          </div>

          <div class="example-box">
            <p>そこは トイレです。</p>
            <p>ตรงนั้นคือห้องน้ำ</p>
          </div>

          <div class="example-box">
            <p>あそこは えきです。</p>
            <p>ตรงโน้นคือสถานี</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "สถานที่",
        items: [
          {
            jp: "えき",
            reading: "eki",
            thai: "เอะคิ",
            meaning: "สถานี"
          },
          {
            jp: "みせ",
            reading: "mise",
            thai: "มิสิ",
            meaning: "ร้าน"
          },
          {
            jp: "びょういん",
            reading: "byouin",
            thai: "เบียวอิน",
            meaning: "โรงพยาบาล"
          },
          {
            jp: "ぎんこう",
            reading: "ginkou",
            thai: "กิงโก",
            meaning: "ธนาคาร"
          }
        ]
      },
      {
        type: "practice",
        question: "「ここ」 ใช้กับอะไร?",
        choices: [
          "คนที่อยู่ไกล",
          "สิ่งของเท่านั้น",
          "สถานที่ตรงนี้",
          "เวลา"
        ],
        answer: 2,
        explanation: "ここ ใช้ชี้สถานที่ที่อยู่ตรงนี้"
      },
      {
        type: "practice",
        question: "「あそこは えきです。」 หมายถึงอะไร?",
        choices: [
          "ตรงนี้คือสถานี",
          "ตรงนั้นคือสถานี",
          "ตรงโน้นคือสถานี",
          "สถานีอยู่ที่ไหน?"
        ],
        answer: 2,
        explanation: "あそこ = ตรงโน้น และ えき = สถานี"
      }
    ]
  },

  {
    id: 103,
    title: "ประเทศและภาษา",
    subtitle: "国 と 言葉",
    sections: [
      {
        type: "concept",
        title: "พูดถึงประเทศ",
        content: `
          <p>
            คำว่า <strong>くに</strong> หมายถึง "ประเทศ"
          </p>
          <p>
            ส่วนชื่อประเทศต่าง ๆ มักเขียนด้วยคาตาคานะ
            เมื่อเป็นชื่อประเทศต่างประเทศ
          </p>
        `
      },
      {
        type: "vocab",
        title: "ประเทศ",
        items: [
          {
            jp: "にほん",
            reading: "nihon",
            thai: "นิฮง",
            meaning: "ญี่ปุ่น"
          },
          {
            jp: "タイ",
            reading: "Tai",
            thai: "ไทย",
            meaning: "ประเทศไทย"
          },
          {
            jp: "アメリカ",
            reading: "Amerika",
            thai: "อะเมะริกะ",
            meaning: "สหรัฐอเมริกา"
          },
          {
            jp: "イギリス",
            reading: "Igirisu",
            thai: "อิงิริสุ",
            meaning: "สหราชอาณาจักร"
          },
          {
            jp: "かんこく",
            reading: "kankoku",
            thai: "คังคกุ",
            meaning: "เกาหลีใต้"
          }
        ]
      },
      {
        type: "concept",
        title: "ภาษา",
        content: `
          <p>
            <strong>にほんご</strong> = ภาษาญี่ปุ่น
          </p>
          <p>
            <strong>えいご</strong> = ภาษาอังกฤษ
          </p>
          <p>
            <strong>タイご</strong> = ภาษาไทย
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>わたしは タイじんです。</p>
            <p>ฉันเป็นคนไทย</p>
          </div>

          <div class="example-box">
            <p>にほんごを べんきょうします。</p>
            <p>เรียนภาษาญี่ปุ่น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「にほんご」 หมายถึงอะไร?",
        choices: [
          "ประเทศญี่ปุ่น",
          "คนญี่ปุ่น",
          "ภาษาญี่ปุ่น",
          "โรงเรียนญี่ปุ่น"
        ],
        answer: 2,
        explanation: "にほん = ญี่ปุ่น และ ご ในที่นี้หมายถึงภาษา"
      },
      {
        type: "practice",
        question: "「タイ」 อ่านว่าอะไร?",
        choices: [
          "Tai",
          "Tei",
          "Toi",
          "Tsu"
        ],
        answer: 0,
        explanation: "タイ อ่านว่า Tai และหมายถึงประเทศไทย"
      }
    ]
  },

  {
    id: 104,
    title: "ฉันเป็นคนชาติอะไร?",
    subtitle: "～じん",
    sections: [
      {
        type: "concept",
        title: "じん = คนชาติ...",
        content: `
          <p>
            <strong>じん</strong> สามารถใช้ต่อท้ายชื่อประเทศ
            เพื่อหมายถึง "คนจากประเทศนั้น"
          </p>

          <div class="example-box">
            <p>タイ + じん = タイじん</p>
            <p>คนไทย</p>
          </div>

          <div class="example-box">
            <p>にほん + じん = にほんじん</p>
            <p>คนญี่ปุ่น</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "タイじん",
            reading: "Taijin",
            thai: "ไทจิน",
            meaning: "คนไทย"
          },
          {
            jp: "にほんじん",
            reading: "nihonjin",
            thai: "นิฮงจิน",
            meaning: "คนญี่ปุ่น"
          },
          {
            jp: "アメリカじん",
            reading: "Amerikajin",
            thai: "อะเมะริกะจิน",
            meaning: "คนอเมริกัน"
          },
          {
            jp: "かんこくじん",
            reading: "kankokujin",
            thai: "คังคกุจิน",
            meaning: "คนเกาหลี"
          }
        ]
      },
      {
        type: "example",
        title: "สร้างประโยค",
        content: `
          <div class="example-box">
            <p>わたしは タイじんです。</p>
            <p>ฉันเป็นคนไทย</p>
          </div>

          <div class="example-box">
            <p>たなかさんは にほんじんです。</p>
            <p>คุณทานากะเป็นคนญี่ปุ่น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「にほんじん」 หมายถึงอะไร?",
        choices: [
          "ประเทศญี่ปุ่น",
          "ภาษาญี่ปุ่น",
          "คนญี่ปุ่น",
          "นักเรียนญี่ปุ่น"
        ],
        answer: 2,
        explanation: "にほん + じん = คนญี่ปุ่น"
      },
      {
        type: "practice",
        question: "ถ้าจะพูดว่า 「ฉันเป็นคนไทย」 ข้อไหนถูก?",
        choices: [
          "わたしは タイです。",
          "わたしは タイじんです。",
          "わたしは タイごです。",
          "わたしは タイのです。"
        ],
        answer: 1,
        explanation: "タイじん = คนไทย"
      }
    ]
  },

  {
    id: 105,
    title: "แนะนำตัวครั้งแรก",
    subtitle: "はじめまして",
    sections: [
      {
        type: "concept",
        title: "ประโยคสำคัญมาก",
        content: `
          <p>
            เมื่อเจอใครเป็นครั้งแรก ภาษาญี่ปุ่นมีรูปแบบแนะนำตัว
            ที่ควรรู้ตั้งแต่ระดับเริ่มต้น
          </p>

          <div class="example-box">
            <p><strong>はじめまして。</strong></p>
            <p>ยินดีที่ได้รู้จัก</p>
          </div>

          <div class="example-box">
            <p><strong>わたしは ○○です。</strong></p>
            <p>ฉันชื่อ / ฉันคือ ○○</p>
          </div>

          <div class="example-box">
            <p><strong>よろしく おねがいします。</strong></p>
            <p>ฝากเนื้อฝากตัวด้วย / ยินดีที่ได้รู้จัก</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำสำคัญ",
        items: [
          {
            jp: "はじめまして",
            reading: "hajimemashite",
            thai: "ฮะจิเมะมะชิเตะ",
            meaning: "ยินดีที่ได้รู้จัก"
          },
          {
            jp: "よろしく",
            reading: "yoroshiku",
            thai: "โยะโระชิคุ",
            meaning: "ฝากเนื้อฝากตัว / ขอความกรุณา"
          },
          {
            jp: "おねがいします",
            reading: "onegaishimasu",
            thai: "โอะเนะไกชิมะสุ",
            meaning: "ขอความกรุณา / กรุณาด้วย"
          },
          {
            jp: "なまえ",
            reading: "namae",
            thai: "นะมะเอะ",
            meaning: "ชื่อ"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างการแนะนำตัว",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> はじめまして。</p>
            <p>ยินดีที่ได้รู้จัก</p>

            <p><strong>A:</strong> わたしは ミナです。</p>
            <p>ฉันชื่อมินะ</p>

            <p><strong>A:</strong> タイじんです。</p>
            <p>เป็นคนไทย</p>

            <p><strong>A:</strong> よろしく おねがいします。</p>
            <p>ฝากเนื้อฝากตัวด้วย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「はじめまして」 ใช้ในสถานการณ์ใด?",
        choices: [
          "บอกลา",
          "ขอโทษ",
          "พบกันครั้งแรก",
          "ถามทาง"
        ],
        answer: 2,
        explanation: "はじめまして ใช้เมื่อพบหรือแนะนำตัวกับคนเป็นครั้งแรก"
      },
      {
        type: "practice",
        question: "「わたしは ○○です。」 ใช้ทำอะไร?",
        choices: [
          "ถามชื่ออีกฝ่าย",
          "บอกชื่อตัวเอง",
          "บอกสถานที่",
          "บอกเวลา"
        ],
        answer: 1,
        explanation: "ใช้แนะนำตัวเอง เช่น わたしは ミナです。"
      },
      {
        type: "tip",
        title: "ลองพูดออกเสียง",
        content: `
          <p>
            ลองพูดชุดนี้ต่อกัน:
          </p>

          <div class="example-box">
            <p>はじめまして。</p>
            <p>わたしは ○○です。</p>
            <p>タイじんです。</p>
            <p>よろしく おねがいします。</p>
          </div>

          <p>
            ไม่ต้องรีบพูดเร็ว ให้เน้นจังหวะและออกเสียงแต่ละส่วนให้ชัดก่อน
          </p>
        `
      }
    ]
  }
);

// END OF LESSON 105
// LESSON 106 CONTINUES NEXT
  lessons.push(
  {
    id: 106,
    title: "ถามชื่อและบอกชื่อ",
    subtitle: "おなまえは なんですか",
    sections: [
      {
        type: "concept",
        title: "ถามชื่ออย่างง่าย",
        content: `
          <p>
            ถ้าเราอยากถามชื่อของอีกฝ่าย สามารถใช้ประโยค
            <strong>おなまえは なんですか。</strong>
          </p>

          <div class="example-box">
            <p><strong>おなまえは なんですか。</strong></p>
            <p>ชื่ออะไรครับ/คะ</p>
          </div>

          <p>
            คำว่า <strong>おなまえ</strong> หมายถึง "ชื่อ"
            ส่วน <strong>なんですか</strong> มีความหมายประมาณว่า
            "คืออะไร?" ในรูปแบบคำถาม
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "なまえ",
            reading: "namae",
            thai: "นะมะเอะ",
            meaning: "ชื่อ"
          },
          {
            jp: "おなまえ",
            reading: "onamae",
            thai: "โอะนะมะเอะ",
            meaning: "ชื่อ (รูปสุภาพ)"
          },
          {
            jp: "なん",
            reading: "nan",
            thai: "นัน",
            meaning: "อะไร"
          }
        ]
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> おなまえは なんですか。</p>
            <p>ชื่ออะไรครับ/คะ</p>

            <p><strong>B:</strong> ミナです。</p>
            <p>มินะค่ะ/ครับ</p>

            <p><strong>A:</strong> はじめまして。</p>
            <p>ยินดีที่ได้รู้จัก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「おなまえは なんですか。」 หมายถึงอะไร?",
        choices: [
          "คุณมาจากไหน",
          "คุณชื่ออะไร",
          "คุณเป็นนักเรียนไหม",
          "คุณอายุเท่าไร"
        ],
        answer: 1,
        explanation: "おなまえは なんですか ใช้ถามชื่อของอีกฝ่าย"
      },
      {
        type: "practice",
        question: "ถ้ามีคนถาม おなまえは なんですか คำตอบใดเหมาะสมที่สุด?",
        choices: [
          "ミナです。",
          "タイじんです。",
          "がくせいです。",
          "はい、そうです。"
        ],
        answer: 0,
        explanation: "ミナです。 = ฉันชื่อมินะ"
      }
    ]
  },

  {
    id: 107,
    title: "ถามอายุ",
    subtitle: "なんさいですか",
    sections: [
      {
        type: "concept",
        title: "ถามว่าอายุเท่าไร",
        content: `
          <p>
            การถามอายุในภาษาญี่ปุ่นใช้
            <strong>なんさいですか。</strong>
          </p>

          <div class="example-box">
            <p><strong>なんさいですか。</strong></p>
            <p>อายุเท่าไร?</p>
          </div>

          <p>
            เมื่อตอบ เราสามารถใช้รูปแบบ
            <strong>○○さいです。</strong>
          </p>

          <div class="example-box">
            <p><strong>じゅうごさいです。</strong></p>
            <p>อายุ 15 ปี</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำสำคัญ",
        items: [
          {
            jp: "なんさい",
            reading: "nansai",
            thai: "นันไซ",
            meaning: "อายุเท่าไร"
          },
          {
            jp: "さい",
            reading: "sai",
            thai: "ไซ",
            meaning: "ปี (ใช้บอกอายุ)"
          },
          {
            jp: "とし",
            reading: "toshi",
            thai: "โทะชิ",
            meaning: "อายุ / ปี"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>A:</strong> なんさいですか。</p>
            <p>อายุเท่าไร?</p>

            <p><strong>B:</strong> じゅうごさいです。</p>
            <p>อายุ 15 ปี</p>
          </div>
        `
      },
      {
        type: "tip",
        title: "จำรูปประโยค",
        content: `
          <p>
            จำเป็นโครงง่าย ๆ:
          </p>

          <div class="example-box">
            <p>ถาม → なんさいですか。</p>
            <p>ตอบ → ○○さいです。</p>
          </div>

          <p>
            เวลาเรียนตัวเลขเพิ่มขึ้น เราจะสามารถเปลี่ยนตัวเลขตรงกลาง
            เพื่อบอกอายุที่แตกต่างกันได้
          </p>
        `
      },
      {
        type: "practice",
        question: "「なんさいですか。」 ใช้ถามอะไร?",
        choices: [
          "ชื่อ",
          "ประเทศ",
          "อายุ",
          "สถานที่"
        ],
        answer: 2,
        explanation: "なんさいですか ใช้ถามว่าอายุเท่าไร"
      }
    ]
  },

  {
    id: 108,
    title: "ตัวเลข 1–10",
    subtitle: "いち に さん よん ご",
    sections: [
      {
        type: "concept",
        title: "ตัวเลขพื้นฐาน",
        content: `
          <p>
            ตัวเลขเป็นพื้นฐานสำคัญมาก เพราะจะนำไปใช้กับอายุ ราคา เวลา
            จำนวนสิ่งของ และคำศัพท์อีกหลายประเภท
          </p>

          <div class="number-grid">
            <div><strong>1</strong><br>いち<br>ichi</div>
            <div><strong>2</strong><br>に<br>ni</div>
            <div><strong>3</strong><br>さん<br>san</div>
            <div><strong>4</strong><br>よん / し<br>yon / shi</div>
            <div><strong>5</strong><br>ご<br>go</div>
            <div><strong>6</strong><br>ろく<br>roku</div>
            <div><strong>7</strong><br>なな / しち<br>nana / shichi</div>
            <div><strong>8</strong><br>はち<br>hachi</div>
            <div><strong>9</strong><br>きゅう / く<br>kyuu / ku</div>
            <div><strong>10</strong><br>じゅう<br>juu</div>
          </div>
        `
      },
      {
        type: "vocab",
        title: "1–5",
        items: [
          {
            jp: "いち",
            reading: "ichi",
            thai: "อิชิ",
            meaning: "หนึ่ง"
          },
          {
            jp: "に",
            reading: "ni",
            thai: "นิ",
            meaning: "สอง"
          },
          {
            jp: "さん",
            reading: "san",
            thai: "ซัง",
            meaning: "สาม"
          },
          {
            jp: "よん",
            reading: "yon",
            thai: "ยง",
            meaning: "สี่"
          },
          {
            jp: "ご",
            reading: "go",
            thai: "โกะ",
            meaning: "ห้า"
          }
        ]
      },
      {
        type: "vocab",
        title: "6–10",
        items: [
          {
            jp: "ろく",
            reading: "roku",
            thai: "โระคุ",
            meaning: "หก"
          },
          {
            jp: "なな",
            reading: "nana",
            thai: "นะนะ",
            meaning: "เจ็ด"
          },
          {
            jp: "はち",
            reading: "hachi",
            thai: "ฮะจิ",
            meaning: "แปด"
          },
          {
            jp: "きゅう",
            reading: "kyuu",
            thai: "คิว",
            meaning: "เก้า"
          },
          {
            jp: "じゅう",
            reading: "juu",
            thai: "จู",
            meaning: "สิบ"
          }
        ]
      },
      {
        type: "practice",
        question: "เลข 8 ภาษาญี่ปุ่นคืออะไร?",
        choices: [
          "なな",
          "はち",
          "ろく",
          "きゅう"
        ],
        answer: 1,
        explanation: "8 = はち (hachi)"
      },
      {
        type: "practice",
        question: "「さん」 คือเลขอะไร?",
        choices: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 2,
        explanation: "さん = 3"
      }
    ]
  },

  {
    id: 109,
    title: "ตัวเลข 11–20",
    subtitle: "じゅういち から にじゅう",
    sections: [
      {
        type: "concept",
        title: "หลักสิบแบบง่าย",
        content: `
          <p>
            ภาษาญี่ปุ่นสร้างเลข 11–19 โดยนำ
            <strong>じゅう</strong> ซึ่งหมายถึง 10
            มาวางไว้ข้างหน้า แล้วตามด้วยเลขหลักหน่วย
          </p>

          <div class="example-box">
            <p>11 = じゅういち</p>
            <p>12 = じゅうに</p>
            <p>13 = じゅうさん</p>
            <p>14 = じゅうよん</p>
            <p>15 = じゅうご</p>
          </div>

          <p>
            ส่วน 20 คือ <strong>にじゅう</strong>
            ซึ่งคิดง่าย ๆ ว่า 2 × 10
          </p>
        `
      },
      {
        type: "vocab",
        title: "11–20",
        items: [
          {
            jp: "じゅういち",
            reading: "juuichi",
            thai: "จูอิชิ",
            meaning: "สิบเอ็ด"
          },
          {
            jp: "じゅうに",
            reading: "juuni",
            thai: "จูนี",
            meaning: "สิบสอง"
          },
          {
            jp: "じゅうさん",
            reading: "juusan",
            thai: "จูซัง",
            meaning: "สิบสาม"
          },
          {
            jp: "じゅうよん",
            reading: "juuyon",
            thai: "จูยง",
            meaning: "สิบสี่"
          },
          {
            jp: "じゅうご",
            reading: "juugo",
            thai: "จูโกะ",
            meaning: "สิบห้า"
          },
          {
            jp: "じゅうろく",
            reading: "juuroku",
            thai: "จูโระคุ",
            meaning: "สิบหก"
          },
          {
            jp: "じゅうなな",
            reading: "juunana",
            thai: "จูนานะ",
            meaning: "สิบเจ็ด"
          },
          {
            jp: "じゅうはち",
            reading: "juuhachi",
            thai: "จูฮะจิ",
            meaning: "สิบแปด"
          },
          {
            jp: "じゅうきゅう",
            reading: "juukyuu",
            thai: "จูคิว",
            meaning: "สิบเก้า"
          },
          {
            jp: "にじゅう",
            reading: "nijuu",
            thai: "นิจู",
            meaning: "ยี่สิบ"
          }
        ]
      },
      {
        type: "example",
        title: "นำไปใช้กับอายุ",
        content: `
          <div class="example-box">
            <p><strong>じゅうごさいです。</strong></p>
            <p>อายุ 15 ปี</p>

            <p><strong>じゅうろくさいです。</strong></p>
            <p>อายุ 16 ปี</p>

            <p><strong>にじゅうさいです。</strong></p>
            <p>อายุ 20 ปี</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「じゅうはち」 คือเลขอะไร?",
        choices: [
          "16",
          "17",
          "18",
          "19"
        ],
        answer: 2,
        explanation: "じゅう = 10 และ はち = 8 จึงเป็น 18"
      }
    ]
  },

  {
    id: 110,
    title: "ทบทวนการแนะนำตัว",
    subtitle: "じこしょうかい",
    sections: [
      {
        type: "concept",
        title: "ข้อมูลพื้นฐานของตัวเอง",
        content: `
          <p>
            ตอนนี้เรามีเครื่องมือสำหรับแนะนำตัวหลายอย่างแล้ว
            เช่น ชื่อ ประเทศ และอายุ
          </p>

          <div class="example-box">
            <p>はじめまして。</p>
            <p>わたしは ミナです。</p>
            <p>タイじんです。</p>
            <p>じゅうごさいです。</p>
            <p>よろしく おねがいします。</p>
          </div>
        `
      },
      {
        type: "note",
        title: "じこしょうかい",
        content: `
          <p>
            <strong>じこしょうかい</strong> (自己紹介) หมายถึง
            "การแนะนำตัวเอง"
          </p>

          <p>
            เวลาเจอคนใหม่ เราไม่จำเป็นต้องพูดข้อมูลทุกอย่างเสมอไป
            สามารถเลือกข้อมูลที่เหมาะกับสถานการณ์ได้
          </p>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดหมายถึง \"ฉันเป็นคนไทย\"?",
        choices: [
          "タイじんです。",
          "タイごです。",
          "タイですか。",
          "タイは なんですか。"
        ],
        answer: 0,
        explanation: "タイじんです = เป็นคนไทย"
      },
      {
        type: "practice",
        question: "ข้อใดเรียงเป็นการแนะนำตัวได้เหมาะสม?",
        choices: [
          "はじめまして → ชื่อ → ประเทศ → อายุ",
          "อายุ → ลา → ชื่อ → ประเทศ",
          "ประเทศ → ถามทาง → ชื่อ",
          "ชื่อ → ขอโทษ → ราคา"
        ],
        answer: 0,
        explanation: "การแนะนำตัวพื้นฐานสามารถเริ่มจาก はじめまして แล้วบอกชื่อ ประเทศ และอายุ"
      },
      {
        type: "tip",
        title: "ภารกิจ",
        content: `
          <p>
            ลองเปลี่ยน ミナ และอายุในตัวอย่างให้เป็นข้อมูลของตัวเอง
            แล้วอ่านออกเสียงตั้งแต่ต้นจนจบ
          </p>
        `
      }
    ]
  },

  {
    id: 111,
    title: "คำถามด้วย か",
    subtitle: "ですか",
    sections: [
      {
        type: "concept",
        title: "เติม か เพื่อทำประโยคคำถาม",
        content: `
          <p>
            หนึ่งในสิ่งที่สำคัญมากของภาษาญี่ปุ่นระดับเริ่มต้นคือ
            <strong>か</strong>
          </p>

          <p>
            เมื่อใช้หลังประโยคแบบสุภาพด้วย <strong>です</strong>
            จะทำให้ประโยคนั้นกลายเป็นคำถาม
          </p>

          <div class="example-box">
            <p>がくせいです。</p>
            <p>เป็นนักเรียน</p>

            <p>がくせいですか。</p>
            <p>เป็นนักเรียนไหม?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างคำถาม",
        content: `
          <div class="example-box">
            <p>タイじんですか。</p>
            <p>เป็นคนไทยไหม?</p>

            <p>がくせいですか。</p>
            <p>เป็นนักเรียนไหม?</p>

            <p>せんせいですか。</p>
            <p>เป็นครูไหม?</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์เพิ่มเติม",
        items: [
          {
            jp: "がくせい",
            reading: "gakusei",
            thai: "กะคุเซ",
            meaning: "นักเรียน / นักศึกษา"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซนเซ",
            meaning: "ครู / อาจารย์"
          }
        ]
      },
      {
        type: "practice",
        question: "ถ้าเติม 「か」 ท้าย 「がくせいです」 จะได้ความหมายใด?",
        choices: [
          "ฉันเป็นนักเรียน",
          "เขาเป็นนักเรียน",
          "เป็นนักเรียนไหม?",
          "ไม่ใช่นักเรียน"
        ],
        answer: 2,
        explanation: "がくせいですか = เป็นนักเรียนไหม?"
      },
      {
        type: "tip",
        title: "จำง่าย ๆ",
        content: `
          <div class="example-box">
            <p>です → บอกข้อมูล</p>
            <p>ですか → ถามข้อมูล</p>
          </div>
        `
      }
    ]
  },

  {
    id: 112,
    title: "ตอบคำถาม はい และ いいえ",
    subtitle: "はい / いいえ",
    sections: [
      {
        type: "concept",
        title: "คำตอบพื้นฐาน",
        content: `
          <p>
            เมื่อมีคนถามคำถามแบบใช่หรือไม่ใช่
            เราสามารถเริ่มคำตอบด้วย
            <strong>はい</strong> หรือ <strong>いいえ</strong>
          </p>

          <div class="example-box">
            <p><strong>はい</strong> = ใช่ / ครับ / ค่ะ</p>
            <p><strong>いいえ</strong> = ไม่ใช่ / ไม่ครับ / ไม่ค่ะ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> がくせいですか。</p>
            <p>เป็นนักเรียนไหม?</p>

            <p><strong>B:</strong> はい、がくせいです。</p>
            <p>ใช่ เป็นนักเรียน</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> せんせいですか。</p>
            <p>เป็นครูไหม?</p>

            <p><strong>B:</strong> いいえ、せんせいじゃありません。</p>
            <p>ไม่ใช่ ไม่ได้เป็นครู</p>
          </div>
        `
      },
      {
        type: "note",
        title: "รูปปฏิเสธของ です",
        content: `
          <p>
            รูปสุภาพที่ใช้บอกว่า "ไม่ใช่" คือ
            <strong>じゃありません</strong>
          </p>

          <div class="example-box">
            <p>がくせいじゃありません。</p>
            <p>ไม่ได้เป็นนักเรียน</p>
          </div>

          <p>
            รูปนี้จะได้ใช้บ่อยมาก จึงควรจำไว้ตั้งแต่ตอนนี้
          </p>
        `
      },
      {
        type: "practice",
        question: "「いいえ」 หมายถึงอะไร?",
        choices: [
          "ใช่",
          "ไม่ใช่",
          "อะไร",
          "ใคร"
        ],
        answer: 1,
        explanation: "いいえ ใช้ตอบปฏิเสธ"
      }
    ]
  },

  {
    id: 113,
    title: "じゃありません",
    subtitle: "การบอกว่าไม่ใช่",
    sections: [
      {
        type: "concept",
        title: "ประโยคปฏิเสธ",
        content: `
          <p>
            เราเคยเห็นรูป <strong>じゃありません</strong>
            จากบทก่อนแล้ว ตอนนี้มาดูโครงสร้างให้ชัดขึ้น
          </p>

          <div class="example-box">
            <p>がくせいです。</p>
            <p>เป็นนักเรียน</p>

            <p>がくせいじゃありません。</p>
            <p>ไม่ใช่นักเรียน</p>
          </div>

          <p>
            สามารถนำไปใช้กับคำนามอื่น ๆ ได้เช่นกัน
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>せんせいじゃありません。</p>
            <p>ไม่ใช่ครู</p>

            <p>タイじんじゃありません。</p>
            <p>ไม่ใช่คนไทย</p>

            <p>がくせいじゃありません。</p>
            <p>ไม่ใช่นักเรียน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดหมายถึง \"ไม่ใช่ครู\"?",
        choices: [
          "せんせいです。",
          "せんせいですか。",
          "せんせいじゃありません。",
          "せんせいですか。"
        ],
        answer: 2,
        explanation: "せんせいじゃありません = ไม่ใช่ครู"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "です ใช้บอกข้อมูลแบบสุภาพ",
          "ですか ใช้สร้างคำถาม",
          "じゃありません ใช้ปฏิเสธคำนาม",
          "はい ใช้ตอบรับ",
          "いいえ ใช้ตอบปฏิเสธ"
        ]
      }
    ]
  },

  {
    id: 114,
    title: "นักเรียน ครู และอาชีพ",
    subtitle: "がくせい / せんせい",
    sections: [
      {
        type: "vocab",
        title: "คำศัพท์เกี่ยวกับคน",
        items: [
          {
            jp: "がくせい",
            reading: "gakusei",
            thai: "กะคุเซ",
            meaning: "นักเรียน / นักศึกษา"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซนเซ",
            meaning: "ครู / อาจารย์"
          },
          {
            jp: "かいしゃいん",
            reading: "kaishain",
            thai: "ไคฉะอิน",
            meaning: "พนักงานบริษัท"
          },
          {
            jp: "いしゃ",
            reading: "isha",
            thai: "อิฉะ",
            meaning: "หมอ"
          },
          {
            jp: "せんもん",
            reading: "senmon",
            thai: "เซ็นมน",
            meaning: "สาขา / ความเชี่ยวชาญ"
          }
        ]
      },
      {
        type: "concept",
        title: "สร้างประโยค",
        content: `
          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p>わたしは せんせいじゃありません。</p>
            <p>ฉันไม่ใช่ครู</p>
          </div>

          <p>
            จำโครงสร้าง
            <strong>わたしは + คำนาม + です</strong>
            ไว้ให้ดี เพราะจะใช้ต่อยอดอีกเยอะมาก
          </p>
        `
      },
      {
        type: "practice",
        question: "「わたしは がくせいです。」 หมายถึงอะไร?",
        choices: [
          "ฉันเป็นครู",
          "ฉันเป็นนักเรียน",
          "ฉันเป็นหมอ",
          "ฉันไม่ใช่นักเรียน"
        ],
        answer: 1,
        explanation: "わたし = ฉัน, がくせい = นักเรียน, です = เป็น/คือ"
      }
    ]
  },

  {
    id: 115,
    title: "คำช่วย は แบบละเอียด",
    subtitle: "หัวข้อของประโยค",
    sections: [
      {
        type: "concept",
        title: "は ทำหน้าที่อะไร?",
        content: `
          <p>
            ในบทก่อนเราเห็นคำว่า <strong>は</strong> บ่อยมาก
            เช่น <strong>わたしは</strong>
          </p>

          <p>
            ในกรณีนี้ は เป็นคำช่วยที่ใช้บอก
            <strong>หัวข้อของประโยค</strong>
          </p>

          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>สำหรับฉัน → เป็นนักเรียน</p>
          </div>

          <p>
            แม้ตัวอักษรจะเขียนว่า <strong>は</strong>
            แต่เมื่อทำหน้าที่เป็นคำช่วย จะอ่านว่า
            <strong>wa</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>わたしは ミナです。</p>
            <p>ฉันคือมินะ</p>

            <p>これは ほんです。</p>
            <p>นี่คือหนังสือ</p>

            <p>タイは くにです。</p>
            <p>ประเทศไทยเป็นประเทศ</p>
          </div>
        `
      },
      {
        type: "tip",
        title: "อย่าสับสน",
        content: `
          <p>
            ตัว <strong>は</strong> ในคำศัพท์อาจอ่านว่า "ha"
            แต่ถ้าเป็นคำช่วยหลังคำนามหรือวลีหัวข้อ
            จะอ่านว่า "wa"
          </p>

          <div class="example-box">
            <p>はな → hana</p>
            <p>わたし<strong>は</strong> → watashi <strong>wa</strong></p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ในประโยค 「わたしは がくせいです」 ตัว は อ่านว่าอะไร?",
        choices: [
          "ha",
          "hi",
          "wa",
          "ho"
        ],
        answer: 2,
        explanation: "เมื่อ は ทำหน้าที่เป็นคำช่วย จะอ่านว่า wa"
      }
    ]
  },

  {
    id: 116,
    title: "คำช่วย の",
    subtitle: "ความเป็นเจ้าของและความสัมพันธ์",
    sections: [
      {
        type: "concept",
        title: "A の B",
        content: `
          <p>
            คำช่วย <strong>の</strong> ใช้เชื่อมคำนามสองคำ
            เพื่อบอกความสัมพันธ์ เช่น "ของ" หรือ
            "ที่เกี่ยวข้องกับ"
          </p>

          <div class="example-box">
            <p>わたしの ほん</p>
            <p>หนังสือของฉัน</p>

            <p>にほんごの せんせい</p>
            <p>ครูภาษาญี่ปุ่น</p>
          </div>

          <p>
            รูปพื้นฐานที่ควรจำคือ
            <strong>A の B</strong>
            = B ที่เกี่ยวข้องกับ A
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮน",
            meaning: "หนังสือ"
          },
          {
            jp: "にほんご",
            reading: "nihongo",
            thai: "นิฮงโกะ",
            meaning: "ภาษาญี่ปุ่น"
          },
          {
            jp: "えいご",
            reading: "eigo",
            thai: "เอโกะ",
            meaning: "ภาษาอังกฤษ"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซนเซ",
            meaning: "ครู / อาจารย์"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างเพิ่มเติม",
        content: `
          <div class="example-box">
            <p>わたしの なまえ</p>
            <p>ชื่อของฉัน</p>

            <p>にほんの くるま</p>
            <p>รถของญี่ปุ่น / รถญี่ปุ่น</p>

            <p>がっこうの せんせい</p>
            <p>ครูของโรงเรียน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「わたしの ほん」 หมายถึงอะไร?",
        choices: [
          "ฉันอ่านหนังสือ",
          "หนังสือของฉัน",
          "ฉันเป็นหนังสือ",
          "หนังสืออยู่ที่ฉัน"
        ],
        answer: 1,
        explanation: "わたしの ほん = หนังสือของฉัน"
      }
    ]
  },

  {
    id: 117,
    title: "ของฉัน ของคุณ ของเขา",
    subtitle: "だれのですか",
    sections: [
      {
        type: "concept",
        title: "ถามว่าเป็นของใคร",
        content: `
          <p>
            เมื่อใช้ <strong>の</strong> ร่วมกับคำถาม
            เราสามารถถามว่า "ของใคร?"
          </p>

          <div class="example-box">
            <p><strong>だれの ほんですか。</strong></p>
            <p>เป็นหนังสือของใคร?</p>
          </div>

          <p>
            คำว่า <strong>だれ</strong> หมายถึง "ใคร"
            เมื่อนำมาใช้กับ の จึงได้
            <strong>だれの</strong> = ของใคร
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> これは だれの ほんですか。</p>
            <p>นี่เป็นหนังสือของใคร?</p>

            <p><strong>B:</strong> わたしの ほんです。</p>
            <p>เป็นหนังสือของฉัน</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำสรรพนามพื้นฐาน",
        items: [
          {
            jp: "わたし",
            reading: "watashi",
            thai: "วะตะชิ",
            meaning: "ฉัน"
          },
          {
            jp: "あなた",
            reading: "anata",
            thai: "อะนะตะ",
            meaning: "คุณ"
          },
          {
            jp: "だれ",
            reading: "dare",
            thai: "ดะเระ",
            meaning: "ใคร"
          }
        ]
      },
      {
        type: "practice",
        question: "「だれの」 หมายถึงอะไร?",
        choices: [
          "อะไร",
          "ที่ไหน",
          "ของใคร",
          "เมื่อไร"
        ],
        answer: 2,
        explanation: "だれ = ใคร และ の เชื่อมความสัมพันธ์ จึงได้ だれの = ของใคร"
      }
    ]
  },

  {
    id: 118,
    title: "คำช่วย も",
    subtitle: "ก็...เหมือนกัน",
    sections: [
      {
        type: "concept",
        title: "も แทน は ในบางกรณี",
        content: `
          <p>
            คำช่วย <strong>も</strong> มีความหมายประมาณว่า
            "ก็...เหมือนกัน" หรือ "ก็ด้วย"
          </p>

          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p>ミナさんも がくせいです。</p>
            <p>คุณมินะก็เป็นนักเรียนเหมือนกัน</p>
          </div>

          <p>
            ในตัวอย่างนี้ も เข้ามาแทนตำแหน่งของ は
            เพราะต้องการเพิ่มข้อมูลว่าอีกคนก็มีสถานะเดียวกัน
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> わたしは タイじんです。</p>
            <p>ฉันเป็นคนไทย</p>

            <p><strong>B:</strong> わたしも タイじんです。</p>
            <p>ฉันก็เป็นคนไทยเหมือนกัน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「わたしも がくせいです」 หมายถึงอะไร?",
        choices: [
          "ฉันไม่ใช่นักเรียน",
          "ฉันเป็นนักเรียนเหมือนกัน",
          "ฉันถามว่าเป็นนักเรียนไหม",
          "ฉันเป็นครู"
        ],
        answer: 1,
        explanation: "も ใช้สื่อความหมายว่า 'ก็...เหมือนกัน'"
      },
      {
        type: "tip",
        title: "คู่ที่ควรจำ",
        content: `
          <div class="example-box">
            <p>わたしは → ฉัน...</p>
            <p>わたしも → ฉันก็...</p>
          </div>
        `
      }
    ]
  },

  {
    id: 119,
    title: "คำนาม + です แบบเต็ม",
    subtitle: "สร้างประโยคด้วยตัวเอง",
    sections: [
      {
        type: "concept",
        title: "โครงสร้างสำคัญ",
        content: `
          <p>
            ตอนนี้เราสามารถประกอบประโยคพื้นฐานได้แล้ว
          </p>

          <div class="example-box">
            <p><strong>A は B です。</strong></p>
            <p>A คือ B / A เป็น B</p>
          </div>

          <p>
            A คือหัวข้อ ส่วน B เป็นข้อมูลเกี่ยวกับ A
          </p>

          <p>
            เช่น
          </p>

          <div class="example-box">
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p>ミナさんは せんせいです。</p>
            <p>คุณมินะเป็นครู</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า \"ฉันเป็นนักเรียน\" ควรเลือกข้อใด?",
        choices: [
          "わたしは がくせいです。",
          "わたしの がくせいです。",
          "わたしも がくせいですか。",
          "わたしは がくせいじゃありません。"
        ],
        answer: 0,
        explanation: "รูปพื้นฐาน A は B です ใช้บอกว่า A เป็น B"
      },
      {
        type: "practice",
        question: "เติมคำให้ถูกต้อง: 「ミナさん ___ がくせいです。」",
        choices: [
          "の",
          "も",
          "は",
          "を"
        ],
        answer: 2,
        explanation: "ミナさん เป็นหัวข้อของประโยค จึงใช้ は"
      },
      {
        type: "tip",
        title: "ลองแต่งเอง",
        content: `
          <p>
            ลองนำคำเหล่านี้มาแต่งประโยค
          </p>

          <div class="example-box">
            <p>わたし / がくせい</p>
            <p>ミナさん / タイじん</p>
            <p>わたし / せんせい</p>
          </div>

          <p>
            ระวังประโยคสุดท้าย ถ้าต้องการบอกว่า
            "ฉันไม่ใช่ครู" ให้ใช้ じゃありません
          </p>
        `
      }
    ]
  },

  {
    id: 120,
    title: "ทบทวนคำช่วย は・の・も・か",
    subtitle: "Particle Review",
    sections: [
      {
        type: "concept",
        title: "4 ตัวที่ต้องจำ",
        content: `
          <div class="example-box">
            <p><strong>は</strong> → บอกหัวข้อ</p>
            <p><strong>の</strong> → เชื่อมความสัมพันธ์ / ของ</p>
            <p><strong>も</strong> → ก็...เหมือนกัน</p>
            <p><strong>か</strong> → ทำให้เป็นคำถาม</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ดูความแตกต่าง",
        content: `
          <div class="example-box">
            <p>わたし<strong>は</strong> がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p>わたし<strong>の</strong> ほんです。</p>
            <p>เป็นหนังสือของฉัน</p>

            <p>わたし<strong>も</strong> がくせいです。</p>
            <p>ฉันก็เป็นนักเรียนเหมือนกัน</p>

            <p>がくせいです<strong>か</strong>。</p>
            <p>เป็นนักเรียนไหม?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำช่วยใดมีความหมายว่า \"ก็...เหมือนกัน\"?",
        choices: [
          "は",
          "の",
          "も",
          "か"
        ],
        answer: 2,
        explanation: "も ใช้บอกว่าข้อมูลนั้นเหมือนกับสิ่งที่กล่าวมาก่อน"
      },
      {
        type: "practice",
        question: "คำช่วยใดใช้ทำประโยค 「がくせいです」 ให้เป็นคำถาม?",
        choices: [
          "は",
          "の",
          "も",
          "か"
        ],
        answer: 3,
        explanation: "เติม か ท้ายประโยค → がくせいですか"
      },
      {
        type: "check",
        title: "เช็กความจำ",
        items: [
          "は = หัวข้อ",
          "の = ความเป็นเจ้าของ / ความสัมพันธ์",
          "も = ก็...เหมือนกัน",
          "か = คำถาม"
        ]
      }
    ]
  },

  {
    id: 121,
    title: "เริ่มเรียนคำกริยา",
    subtitle: "たべます・のみます",
    sections: [
      {
        type: "concept",
        title: "คำกริยาคืออะไร?",
        content: `
          <p>
            คำกริยาเป็นคำที่บอกการกระทำ เช่น
            กิน ดื่ม ดู ฟัง อ่าน เขียน ไป และกลับ
          </p>

          <p>
            ในภาษาญี่ปุ่นระดับเริ่มต้น เราจะเจอรูปสุภาพที่ลงท้ายด้วย
            <strong>ます</strong> บ่อยมาก
          </p>

          <div class="example-box">
            <p>たべます = กิน</p>
            <p>のみます = ดื่ม</p>
            <p>みます = ดู</p>
            <p>ききます = ฟัง / ถาม</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำกริยาชุดแรก",
        items: [
          {
            jp: "たべます",
            reading: "tabemasu",
            thai: "ทะเบะมะสุ",
            meaning: "กิน"
          },
          {
            jp: "のみます",
            reading: "nomimasu",
            thai: "โนะมิมะสุ",
            meaning: "ดื่ม"
          },
          {
            jp: "みます",
            reading: "mimasu",
            thai: "มิมะสุ",
            meaning: "ดู"
          },
          {
            jp: "ききます",
            reading: "kikimasu",
            thai: "คิคิมะสุ",
            meaning: "ฟัง / ถาม"
          },
          {
            jp: "よみます",
            reading: "yomimasu",
            thai: "โยะมิมะสุ",
            meaning: "อ่าน"
          },
          {
            jp: "かきます",
            reading: "kakimasu",
            thai: "คะคิมะสุ",
            meaning: "เขียน"
          }
        ]
      },
      {
        type: "tip",
        title: "อย่าเพิ่งจำการผันทั้งหมด",
        content: `
          <p>
            ตอนนี้ให้คุ้นกับรูป <strong>ます</strong> ก่อน
            เพราะเราจะใช้รูปนี้สร้างประโยคง่าย ๆ
          </p>
        `
      },
      {
        type: "practice",
        question: "「たべます」 หมายถึงอะไร?",
        choices: [
          "ดื่ม",
          "กิน",
          "อ่าน",
          "เขียน"
        ],
        answer: 1,
        explanation: "たべます = กิน"
      }
    ]
  },

  {
    id: 122,
    title: "ฉันกินอะไร",
    subtitle: "を + คำกริยา",
    sections: [
      {
        type: "concept",
        title: "คำช่วย を",
        content: `
          <p>
            เมื่อเราต้องการบอกว่า "ทำอะไรกับอะไร"
            เช่น กินข้าว อ่านหนังสือ หรือดื่มน้ำ
            จะพบคำช่วย <strong>を</strong>
          </p>

          <div class="example-box">
            <p>ごはん<strong>を</strong> たべます。</p>
            <p>กินข้าว</p>
          </div>

          <p>
            ตัว を ในกรณีนี้โดยทั่วไปออกเสียงใกล้เคียงกับ
            <strong>o</strong>
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ごはん",
            reading: "gohan",
            thai: "โกะฮัง",
            meaning: "ข้าว / อาหาร"
          },
          {
            jp: "みず",
            reading: "mizu",
            thai: "มิซุ",
            meaning: "น้ำ"
          },
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮน",
            meaning: "หนังสือ"
          },
          {
            jp: "おちゃ",
            reading: "ocha",
            thai: "โอะฉะ",
            meaning: "ชา"
          }
        ]
      },
      {
        type: "example",
        title: "ประโยคพื้นฐาน",
        content: `
          <div class="example-box">
            <p>ごはんを たべます。</p>
            <p>กินข้าว</p>

            <p>みずを のみます。</p>
            <p>ดื่มน้ำ</p>

            <p>ほんを よみます。</p>
            <p>อ่านหนังสือ</p>

            <p>てがみを かきます。</p>
            <p>เขียนจดหมาย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำช่วย: 「みず ___ のみます。」",
        choices: [
          "は",
          "の",
          "も",
          "を"
        ],
        answer: 3,
        explanation: "สิ่งที่ถูกดื่มเป็นกรรมของคำกริยา จึงใช้ を"
      }
    ]
  },

  {
    id: 123,
    title: "สิ่งของรอบตัวกับ を",
    subtitle: "ほんを よみます",
    sections: [
      {
        type: "concept",
        title: "โครงสร้างใหม่",
        content: `
          <div class="example-box">
            <p><strong>N を Vます。</strong></p>
            <p>ทำกริยา V กับสิ่งของ N</p>
          </div>

          <p>
            เช่น ถ้า N คือ ほん และ V คือ よみます
            จะได้
          </p>

          <div class="example-box">
            <p>ほんを よみます。</p>
            <p>อ่านหนังสือ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์สิ่งของ",
        items: [
          {
            jp: "てがみ",
            reading: "tegami",
            thai: "เทะงะมิ",
            meaning: "จดหมาย"
          },
          {
            jp: "えいが",
            reading: "eiga",
            thai: "เอ-งะ",
            meaning: "ภาพยนตร์"
          },
          {
            jp: "おんがく",
            reading: "ongaku",
            thai: "องกะคุ",
            meaning: "ดนตรี"
          },
          {
            jp: "しゃしん",
            reading: "shashin",
            thai: "ชะชิน",
            meaning: "รูปถ่าย"
          },
          {
            jp: "テレビ",
            reading: "terebi",
            thai: "เทะเระบิ",
            meaning: "โทรทัศน์"
          }
        ]
      },
      {
        type: "example",
        title: "ลองสังเกต",
        content: `
          <div class="example-box">
            <p>えいがを みます。</p>
            <p>ดูภาพยนตร์</p>

            <p>おんがくを ききます。</p>
            <p>ฟังดนตรี</p>

            <p>しゃしんを みます。</p>
            <p>ดูรูปถ่าย</p>

            <p>てがみを かきます。</p>
            <p>เขียนจดหมาย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「おんがくを ききます。」 หมายถึงอะไร?",
        choices: [
          "ดูภาพยนตร์",
          "ฟังดนตรี",
          "อ่านหนังสือ",
          "เขียนจดหมาย"
        ],
        answer: 1,
        explanation: "おんがく = ดนตรี และ ききます = ฟัง"
      },
      {
        type: "tip",
        title: "สูตรจำ",
        content: `
          <div class="example-box">
            <p>สิ่งที่ทำ → を → การกระทำ</p>
            <p>ほん → を → よみます</p>
            <p>みず → を → のみます</p>
          </div>
        `
      }
    ]
  },

  {
    id: 124,
    title: "คำกริยาในชีวิตประจำวัน",
    subtitle: "たべる・のむ・みる",
    sections: [
      {
        type: "concept",
        title: "สร้างประโยคเกี่ยวกับกิจวัตร",
        content: `
          <p>
            ตอนนี้เราสามารถพูดถึงกิจกรรมง่าย ๆ ในชีวิตประจำวันได้แล้ว
          </p>

          <div class="example-box">
            <p>あさごはんを たべます。</p>
            <p>กินอาหารเช้า</p>

            <p>みずを のみます。</p>
            <p>ดื่มน้ำ</p>

            <p>テレビを みます。</p>
            <p>ดูโทรทัศน์</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์เพิ่มเติม",
        items: [
          {
            jp: "あさごはん",
            reading: "asagohan",
            thai: "อะสะโกะฮัง",
            meaning: "อาหารเช้า"
          },
          {
            jp: "ひるごはん",
            reading: "hirugohan",
            thai: "ฮิรุโกะฮัง",
            meaning: "อาหารกลางวัน"
          },
          {
            jp: "ばんごはん",
            reading: "bangohan",
            thai: "บังโกะฮัง",
            meaning: "อาหารเย็น"
          },
          {
            jp: "テレビ",
            reading: "terebi",
            thai: "เทะเระบิ",
            meaning: "โทรทัศน์"
          }
        ]
      },
      {
        type: "example",
        title: "ประโยคตัวอย่าง",
        content: `
          <div class="example-box">
            <p>あさごはんを たべます。</p>
            <p>กินอาหารเช้า</p>

            <p>ひるごはんを たべます。</p>
            <p>กินอาหารกลางวัน</p>

            <p>ばんごはんを たべます。</p>
            <p>กินอาหารเย็น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า \"ดูโทรทัศน์\" ข้อใดถูก?",
        choices: [
          "テレビを たべます。",
          "テレビを のみます。",
          "テレビを みます。",
          "テレビを かきます。"
        ],
        answer: 2,
        explanation: "テレビを みます = ดูโทรทัศน์"
      }
    ]
  },

  {
    id: 125,
    title: "ทบทวน を + คำกริยา",
    subtitle: "N を Vます",
    sections: [
      {
        type: "concept",
        title: "สรุปบท",
        content: `
          <p>
            วันนี้เราได้เรียนโครงสร้างที่สำคัญมากอีกหนึ่งแบบ
          </p>

          <div class="example-box">
            <p><strong>N を Vます。</strong></p>
            <p>N = สิ่งที่ถูกกระทำ</p>
            <p>V = การกระทำ</p>
          </div>

          <p>
            ตัวอย่างเช่น
          </p>

          <div class="example-box">
            <p>ごはんを たべます。</p>
            <p>กินข้าว</p>

            <p>みずを のみます。</p>
            <p>ดื่มน้ำ</p>

            <p>ほんを よみます。</p>
            <p>อ่านหนังสือ</p>

            <p>えいがを みます。</p>
            <p>ดูภาพยนตร์</p>

            <p>おんがくを ききます。</p>
            <p>ฟังดนตรี</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดแปลว่า \"อ่านหนังสือ\"?",
        choices: [
          "ほんを よみます。",
          "ほんを みます。",
          "ほんを のみます。",
          "ほんを たべます。"
        ],
        answer: 0,
        explanation: "ほん = หนังสือ และ よみます = อ่าน"
      },
      {
        type: "practice",
        question: "ข้อใดใช้ を ได้ถูกต้อง?",
        choices: [
          "みずを のみます。",
          "みずを ほんです。",
          "みずを がくせいです。",
          "みずを ですか。"
        ],
        answer: 0,
        explanation: "みずを のみます = ดื่มน้ำ เป็นรูป N を Vます ที่ถูกต้อง"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "を เป็นคำช่วยที่ใช้กับกรรมของคำกริยา",
          "を ในรูปนี้โดยทั่วไปออกเสียงใกล้เคียง o",
          "たべます = กิน",
          "のみます = ดื่ม",
          "みます = ดู",
          "よみます = อ่าน",
          "かきます = เขียน",
          "ききます = ฟัง / ถาม"
        ]
      },
      {
        type: "tip",
        title: "ภารกิจท้ายบท",
        content: `
          <p>
            ลองแต่งประโยคด้วยตัวเองอย่างน้อย 5 ประโยค
            โดยใช้รูปแบบ
            <strong>N を Vます</strong>
          </p>

          <div class="example-box">
            <p>ตัวอย่าง: ほんを よみます。</p>
            <p>จากนั้นลองเปลี่ยนทั้ง N และ V เป็นคำอื่น</p>
          </div>
        `
      }
    ]
  }
);

// END OF LESSON 125
// LESSON 126 CONTINUES NEXT

  lessons.push(
  {
    id: 126,
    title: "ไปที่ไหน",
    subtitle: "いきます",
    sections: [
      {
        type: "concept",
        title: "คำกริยา いきます",
        content: `
          <p>
            <strong>いきます</strong> แปลว่า "ไป"
            เป็นคำกริยาที่ใช้บ่อยมากในชีวิตประจำวัน
          </p>

          <div class="example-box">
            <p><strong>がっこうへ いきます。</strong></p>
            <p>ไปโรงเรียน</p>
          </div>

          <p>
            เมื่อพูดถึง "ไปที่ไหน" เราจะเริ่มใช้คำช่วย
            <strong>へ</strong> เพื่อบอกทิศทางหรือจุดหมาย
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์สถานที่",
        items: [
          {
            jp: "がっこう",
            reading: "gakkou",
            thai: "กักโค",
            meaning: "โรงเรียน"
          },
          {
            jp: "えき",
            reading: "eki",
            thai: "เอะคิ",
            meaning: "สถานี"
          },
          {
            jp: "スーパー",
            reading: "suupaa",
            thai: "ซูปา",
            meaning: "ซูเปอร์มาร์เก็ต"
          },
          {
            jp: "コンビニ",
            reading: "konbini",
            thai: "คงบินิ",
            meaning: "ร้านสะดวกซื้อ"
          },
          {
            jp: "こうえん",
            reading: "kouen",
            thai: "โคเอ็น",
            meaning: "สวนสาธารณะ"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうへ いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>えきへ いきます。</p>
            <p>ไปสถานี</p>

            <p>こうえんへ いきます。</p>
            <p>ไปสวนสาธารณะ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いきます」 หมายถึงอะไร?",
        choices: [
          "มา",
          "กลับ",
          "ไป",
          "กิน"
        ],
        answer: 2,
        explanation: "いきます = ไป"
      }
    ]
  },

  {
    id: 127,
    title: "คำช่วย へ",
    subtitle: "จุดหมายปลายทาง",
    sections: [
      {
        type: "concept",
        title: "へ ใช้บอกทิศทาง",
        content: `
          <p>
            คำช่วย <strong>へ</strong> ใช้หลังสถานที่
            เพื่อบอกว่าการเคลื่อนที่มุ่งหน้าไปยังสถานที่นั้น
          </p>

          <div class="example-box">
            <p>がっこう<strong>へ</strong> いきます。</p>
            <p>ไปโรงเรียน</p>
          </div>

          <p>
            ถึงแม้ตัวอักษรจะเขียนว่า <strong>へ</strong>
            แต่เมื่อเป็นคำช่วยจะอ่านว่า <strong>e</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "สังเกตการออกเสียง",
        content: `
          <div class="example-box">
            <p>へや → heya</p>
            <p>ห้อง</p>

            <p>がっこう<strong>へ</strong> → gakkou<strong>e</strong></p>
            <p>ไปโรงเรียน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ในประโยค 「がっこうへ いきます」 ตัว へ อ่านว่าอะไร?",
        choices: [
          "he",
          "ha",
          "e",
          "ho"
        ],
        answer: 2,
        explanation: "เมื่อ へ เป็นคำช่วย จะออกเสียงว่า e"
      },
      {
        type: "practice",
        question: "「えきへ いきます」 หมายถึงอะไร?",
        choices: [
          "อยู่ที่สถานี",
          "ไปสถานี",
          "กลับจากสถานี",
          "ดูสถานี"
        ],
        answer: 1,
        explanation: "えき = สถานี, へ = ไปยัง, いきます = ไป"
      }
    ]
  },

  {
    id: 128,
    title: "ไปกับใคร",
    subtitle: "ともだちと",
    sections: [
      {
        type: "concept",
        title: "คำช่วย と",
        content: `
          <p>
            คำช่วย <strong>と</strong> สามารถใช้เพื่อบอกว่า
            เราทำกิจกรรมหรือเดินทาง "กับใคร"
          </p>

          <div class="example-box">
            <p>ともだちと いきます。</p>
            <p>ไปกับเพื่อน</p>
          </div>

          <p>
            ดังนั้นสามารถนำมารวมกับสถานที่และคำกริยาได้
          </p>

          <div class="example-box">
            <p>ともだちと がっこうへ いきます。</p>
            <p>ไปโรงเรียนกับเพื่อน</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "ともだち",
            reading: "tomodachi",
            thai: "โทะโมะดะจิ",
            meaning: "เพื่อน"
          },
          {
            jp: "かぞく",
            reading: "kazoku",
            thai: "คะโซะคุ",
            meaning: "ครอบครัว"
          },
          {
            jp: "おかあさん",
            reading: "okaasan",
            thai: "โอะคาซัง",
            meaning: "แม่"
          },
          {
            jp: "おとうさん",
            reading: "otousan",
            thai: "โอะโทซัง",
            meaning: "พ่อ"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ともだちと えきへ いきます。</p>
            <p>ไปสถานีกับเพื่อน</p>

            <p>かぞくと こうえんへ いきます。</p>
            <p>ไปสวนสาธารณะกับครอบครัว</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ともだちと」 หมายถึงอะไร?",
        choices: [
          "จากเพื่อน",
          "ของเพื่อน",
          "กับเพื่อน",
          "เพื่อนอยู่ที่ไหน"
        ],
        answer: 2,
        explanation: "ともだち = เพื่อน และ と ใช้บอกผู้ร่วมกิจกรรม"
      }
    ]
  },

  {
    id: 129,
    title: "มาและกลับ",
    subtitle: "きます・かえります",
    sections: [
      {
        type: "concept",
        title: "คำกริยาเกี่ยวกับการเคลื่อนที่",
        content: `
          <p>
            นอกจาก いきます = ไป
            ยังมีคำกริยาสำคัญอีกสองคำ
          </p>

          <div class="example-box">
            <p><strong>きます</strong> = มา</p>
            <p><strong>かえります</strong> = กลับ</p>
          </div>

          <p>
            ทั้งสามคำนี้ควรจำเป็นชุด
          </p>

          <div class="example-box">
            <p>いきます → ไป</p>
            <p>きます → มา</p>
            <p>かえります → กลับ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "きます",
            reading: "kimasu",
            thai: "คิมะสุ",
            meaning: "มา"
          },
          {
            jp: "かえります",
            reading: "kaerimasu",
            thai: "คะเอะริมะสุ",
            meaning: "กลับ"
          },
          {
            jp: "うち",
            reading: "uchi",
            thai: "อุจิ",
            meaning: "บ้าน"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうへ いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>がっこうへ きます。</p>
            <p>มาโรงเรียน</p>

            <p>うちへ かえります。</p>
            <p>กลับบ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「かえります」 หมายถึงอะไร?",
        choices: [
          "ไป",
          "มา",
          "กลับ",
          "อยู่"
        ],
        answer: 2,
        explanation: "かえります = กลับ"
      }
    ]
  },

  {
    id: 130,
    title: "ไป มา กลับ กับสถานที่",
    subtitle: "へ + いきます・きます・かえります",
    sections: [
      {
        type: "concept",
        title: "รวมโครงสร้าง",
        content: `
          <p>
            ตอนนี้เราสามารถสร้างประโยคเกี่ยวกับการเคลื่อนที่
            ได้หลายแบบแล้ว
          </p>

          <div class="example-box">
            <p>สถานที่ + へ + いきます</p>
            <p>สถานที่ + へ + きます</p>
            <p>สถานที่ + へ + かえります</p>
          </div>

          <p>
            สิ่งสำคัญคือให้ดูคำกริยาว่าเป็น
            "ไป" "มา" หรือ "กลับ"
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうへ いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>ともだちが うちへ きます。</p>
            <p>เพื่อนมาที่บ้าน</p>

            <p>うちへ かえります。</p>
            <p>กลับบ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดหมายถึง \"กลับบ้าน\"?",
        choices: [
          "うちへ いきます。",
          "うちへ きます。",
          "うちへ かえります。",
          "うちを かえります。"
        ],
        answer: 2,
        explanation: "うち = บ้าน และ かえります = กลับ"
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า \"ไปโรงเรียน\" ข้อใดถูก?",
        choices: [
          "がっこうへ いきます。",
          "がっこうへ のみます。",
          "がっこうを いきます。",
          "がっこうの いきます。"
        ],
        answer: 0,
        explanation: "สถานที่ + へ + いきます ใช้บอกจุดหมายของการไป"
      }
    ]
  },

  {
    id: 131,
    title: "อยู่ที่ไหนและทำอะไร",
    subtitle: "で",
    sections: [
      {
        type: "concept",
        title: "คำช่วย で",
        content: `
          <p>
            คำช่วย <strong>で</strong> มีหลายหน้าที่
            แต่หน้าที่หนึ่งที่สำคัญสำหรับผู้เริ่มต้นคือ
            ใช้บอก <strong>สถานที่ที่เกิดกิจกรรม</strong>
          </p>

          <div class="example-box">
            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>
          </div>

          <p>
            สังเกตว่าโรงเรียนในประโยคนี้ไม่ได้เป็น
            "จุดหมายที่ไป" แต่เป็น "สถานที่ที่ทำกิจกรรม"
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำกริยาใหม่",
        items: [
          {
            jp: "べんきょうします",
            reading: "benkyou shimasu",
            thai: "เบ็งเคียว ชิมะสุ",
            meaning: "เรียน / ศึกษา"
          },
          {
            jp: "はたらきます",
            reading: "hatarakimasu",
            thai: "ฮะตะระคิมะสุ",
            meaning: "ทำงาน"
          },
          {
            jp: "あそびます",
            reading: "asobimasu",
            thai: "อะโซะบิมะสุ",
            meaning: "เล่น / เที่ยว"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>かいしゃで はたらきます。</p>
            <p>ทำงานที่บริษัท</p>

            <p>こうえんで あそびます。</p>
            <p>เล่นที่สวนสาธารณะ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำช่วย で ใน 「がっこうで べんきょうします」 บอกอะไร?",
        choices: [
          "เจ้าของ",
          "สถานที่ที่เกิดกิจกรรม",
          "จุดหมายของการเดินทาง",
          "คำถาม"
        ],
        answer: 1,
        explanation: "で ใช้บอกสถานที่ที่กิจกรรมเกิดขึ้น"
      }
    ]
  },

  {
    id: 132,
    title: "へ กับ で ต่างกันอย่างไร",
    subtitle: "สถานที่ไป vs สถานที่ทำ",
    sections: [
      {
        type: "concept",
        title: "เปรียบเทียบ",
        content: `
          <p>
            จุดที่ผู้เริ่มต้นมักสับสนคือ
            <strong>へ</strong> และ <strong>で</strong>
            ต่างก็เกี่ยวข้องกับสถานที่
          </p>

          <div class="example-box">
            <p><strong>がっこうへ いきます。</strong></p>
            <p>ไปโรงเรียน</p>

            <p><strong>がっこうで べんきょうします。</strong></p>
            <p>เรียนที่โรงเรียน</p>
          </div>

          <p>
            จำง่าย ๆ ว่า
          </p>

          <div class="example-box">
            <p>へ → กำลังมุ่งหน้าไปที่ไหน</p>
            <p>で → กำลังทำอะไรที่ไหน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดใช้คำช่วยได้ถูกต้อง?",
        choices: [
          "がっこうへ べんきょうします。",
          "がっこうで べんきょうします。",
          "がっこうを べんきょうします。",
          "がっこうの べんきょうします。"
        ],
        answer: 1,
        explanation: "การเรียนเป็นกิจกรรมที่เกิดขึ้นที่โรงเรียน จึงใช้ で"
      },
      {
        type: "practice",
        question: "ประโยคใดหมายถึง \"ไปสวนสาธารณะ\"?",
        choices: [
          "こうえんで いきます。",
          "こうえんへ いきます。",
          "こうえんを いきます。",
          "こうえんの いきます。"
        ],
        answer: 1,
        explanation: "こうえんへ いきます = ไปสวนสาธารณะ"
      },
      {
        type: "tip",
        title: "ทริกจำ",
        content: `
          <div class="example-box">
            <p>รถกำลังเคลื่อนที่ → へ</p>
            <p>เราอยู่ในสถานที่แล้วทำกิจกรรม → で</p>
          </div>
        `
      }
    ]
  },

  {
    id: 133,
    title: "ทำอะไรที่โรงเรียน",
    subtitle: "がっこうで",
    sections: [
      {
        type: "vocab",
        title: "กิจกรรมในโรงเรียน",
        items: [
          {
            jp: "べんきょうします",
            reading: "benkyou shimasu",
            thai: "เบ็งเคียว ชิมะสุ",
            meaning: "เรียน / ศึกษา"
          },
          {
            jp: "よみます",
            reading: "yomimasu",
            thai: "โยะมิมะสุ",
            meaning: "อ่าน"
          },
          {
            jp: "かきます",
            reading: "kakimasu",
            thai: "คะคิมะสุ",
            meaning: "เขียน"
          },
          {
            jp: "ききます",
            reading: "kikimasu",
            thai: "คิคิมะสุ",
            meaning: "ฟัง / ถาม"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างประโยค",
        content: `
          <div class="example-box">
            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>がっこうで ほんを よみます。</p>
            <p>อ่านหนังสือที่โรงเรียน</p>

            <p>がっこうで てがみを かきます。</p>
            <p>เขียนจดหมายที่โรงเรียน</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "มีทั้งสถานที่และกรรมได้",
        content: `
          <p>
            ในประโยคหนึ่งสามารถมีทั้ง
            <strong>สถานที่ + で</strong>
            และ <strong>สิ่งที่ทำ + を</strong>
            ได้พร้อมกัน
          </p>

          <div class="example-box">
            <p>がっこう<strong>で</strong> ほん<strong>を</strong> よみます。</p>
            <p>อ่านหนังสือที่โรงเรียน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำช่วย: 「がっこう ___ ほんを よみます。」",
        choices: [
          "へ",
          "で",
          "の",
          "も"
        ],
        answer: 1,
        explanation: "โรงเรียนเป็นสถานที่ที่เกิดกิจกรรมการอ่าน จึงใช้ で"
      }
    ]
  },

  {
    id: 134,
    title: "วันหนึ่งของฉัน",
    subtitle: "กิจวัตรประจำวัน",
    sections: [
      {
        type: "concept",
        title: "นำสิ่งที่เรียนมารวมกัน",
        content: `
          <p>
            ตอนนี้เราสามารถนำคำช่วยหลายตัว
            และคำกริยาที่เรียนมา สร้างประโยคเกี่ยวกับกิจวัตรได้
          </p>

          <div class="example-box">
            <p>がっこうへ いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>うちへ かえります。</p>
            <p>กลับบ้าน</p>

            <p>うちで ほんを よみます。</p>
            <p>อ่านหนังสือที่บ้าน</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์กิจวัตร",
        items: [
          {
            jp: "おきます",
            reading: "okimasu",
            thai: "โอะคิมะสุ",
            meaning: "ตื่น"
          },
          {
            jp: "ねます",
            reading: "nemasu",
            thai: "เนะมะสุ",
            meaning: "นอน"
          },
          {
            jp: "やすみます",
            reading: "yasumimasu",
            thai: "ยะสุมิมะสุ",
            meaning: "พัก / หยุด"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>あさ、 おきます。</p>
            <p>ตอนเช้า ตื่น</p>

            <p>がっこうへ いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>うちへ かえります。</p>
            <p>กลับบ้าน</p>

            <p>よる、 ねます。</p>
            <p>ตอนกลางคืน นอน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า \"นอน\" ใช้คำใด?",
        choices: [
          "おきます",
          "ねます",
          "いきます",
          "きます"
        ],
        answer: 1,
        explanation: "ねます = นอน"
      }
    ]
  },

  {
    id: 135,
    title: "ทบทวนสถานที่และคำช่วย",
    subtitle: "へ・で・と・を",
    sections: [
      {
        type: "concept",
        title: "4 คำช่วยที่เริ่มใช้บ่อย",
        content: `
          <div class="example-box">
            <p><strong>へ</strong> → ทิศทาง / จุดหมาย</p>
            <p><strong>で</strong> → สถานที่ที่ทำกิจกรรม</p>
            <p><strong>と</strong> → กับ / ร่วมกับ</p>
            <p><strong>を</strong> → กรรมของคำกริยา</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ประโยคที่รวมหลายคำช่วย",
        content: `
          <div class="example-box">
            <p>ともだちと がっこうへ いきます。</p>
            <p>ไปโรงเรียนกับเพื่อน</p>

            <p>がっこうで ほんを よみます。</p>
            <p>อ่านหนังสือที่โรงเรียน</p>

            <p>かぞくと こうえんへ いきます。</p>
            <p>ไปสวนสาธารณะกับครอบครัว</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ともだちと がっこうへ いきます」 คำว่า と ทำหน้าที่อะไร?",
        choices: [
          "บอกกรรม",
          "บอกจุดหมาย",
          "บอกคนที่ไปด้วย",
          "ทำให้เป็นคำถาม"
        ],
        answer: 2,
        explanation: "と ใช้บอกผู้ที่ร่วมเดินทางหรือร่วมกิจกรรม"
      },
      {
        type: "practice",
        question: "「ほんを よみます」 ตัว を บอกอะไร?",
        choices: [
          "สถานที่",
          "กรรมของคำกริยา",
          "จุดหมาย",
          "เจ้าของ"
        ],
        answer: 1,
        explanation: "ほん เป็นสิ่งที่ถูกอ่าน จึงตามด้วย を"
      },
      {
        type: "check",
        title: "จำให้แม่น",
        items: [
          "へ = ไปยัง / มุ่งหน้าไป",
          "で = ทำกิจกรรมที่",
          "と = กับ",
          "を = กรรม",
          "いきます = ไป",
          "きます = มา",
          "かえります = กลับ"
        ]
      }
    ]
  },

  {
    id: 136,
    title: "เวลาในภาษาญี่ปุ่น",
    subtitle: "いま なんじですか",
    sections: [
      {
        type: "concept",
        title: "ถามเวลา",
        content: `
          <p>
            ถ้าต้องการถามว่า "ตอนนี้กี่โมง"
            ใช้ประโยค
          </p>

          <div class="example-box">
            <p><strong>いま なんじですか。</strong></p>
            <p>ตอนนี้กี่โมง?</p>
          </div>

          <p>
            คำว่า <strong>いま</strong> = ตอนนี้
            และ <strong>なんじ</strong> = กี่โมง
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "いま",
            reading: "ima",
            thai: "อิมะ",
            meaning: "ตอนนี้"
          },
          {
            jp: "なんじ",
            reading: "nanji",
            thai: "นันจิ",
            meaning: "กี่โมง"
          },
          {
            jp: "じ",
            reading: "ji",
            thai: "จิ",
            meaning: "โมง / ชั่วโมง (ในการบอกเวลา)"
          },
          {
            jp: "はん",
            reading: "han",
            thai: "ฮัง",
            meaning: "ครึ่ง"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>いま いちじです。</p>
            <p>ตอนนี้ 1 โมง</p>

            <p>いま さんじです。</p>
            <p>ตอนนี้ 3 โมง</p>

            <p>いま ごじはんです。</p>
            <p>ตอนนี้ 5 โมงครึ่ง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いま なんじですか」 หมายถึงอะไร?",
        choices: [
          "ตอนนี้อยู่ที่ไหน",
          "ตอนนี้กี่โมง",
          "ตอนนี้ใครอยู่",
          "ตอนนี้ทำอะไร"
        ],
        answer: 1,
        explanation: "いま = ตอนนี้ และ なんじ = กี่โมง"
      }
    ]
  },

  {
    id: 137,
    title: "ชั่วโมง 1–12",
    subtitle: "いちじ〜じゅうにじ",
    sections: [
      {
        type: "concept",
        title: "ตัวเลข + じ",
        content: `
          <p>
            การบอกชั่วโมงโดยพื้นฐานคือ
            <strong>ตัวเลข + じ</strong>
          </p>

          <div class="example-box">
            <p>いちじ = 1 โมง</p>
            <p>にじ = 2 โมง</p>
            <p>さんじ = 3 โมง</p>
            <p>よじ = 4 โมง</p>
            <p>ごじ = 5 โมง</p>
            <p>ろくじ = 6 โมง</p>
          </div>

          <p>
            มีบางตัวที่เสียงเปลี่ยนจากที่เราเคยเรียน
            ดังนั้นควรจำเป็นคำ ๆ ไป
          </p>
        `
      },
      {
        type: "vocab",
        title: "เวลาที่ควรจำ",
        items: [
          {
            jp: "いちじ",
            reading: "ichiji",
            thai: "อิจิจิ",
            meaning: "1 โมง"
          },
          {
            jp: "にじ",
            reading: "niji",
            thai: "นิจิ",
            meaning: "2 โมง"
          },
          {
            jp: "さんじ",
            reading: "sanji",
            thai: "ซันจิ",
            meaning: "3 โมง"
          },
          {
            jp: "よじ",
            reading: "yoji",
            thai: "โยะจิ",
            meaning: "4 โมง"
          },
          {
            jp: "ごじ",
            reading: "goji",
            thai: "โกะจิ",
            meaning: "5 โมง"
          },
          {
            jp: "ろくじ",
            reading: "rokuji",
            thai: "โระคุจิ",
            meaning: "6 โมง"
          }
        ]
      },
      {
        type: "example",
        title: "7–12",
        content: `
          <div class="example-box">
            <p>しちじ = 7 โมง</p>
            <p>はちじ = 8 โมง</p>
            <p>くじ = 9 โมง</p>
            <p>じゅうじ = 10 โมง</p>
            <p>じゅういちじ = 11 โมง</p>
            <p>じゅうにじ = 12 โมง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "4 โมง ภาษาญี่ปุ่นคือข้อใด?",
        choices: [
          "よじ",
          "しじ",
          "よんじ",
          "よじい"
        ],
        answer: 0,
        explanation: "4 โมง = よじ"
      }
    ]
  },

  {
    id: 138,
    title: "นาทีและครึ่งชั่วโมง",
    subtitle: "ふん・ぷん・はん",
    sections: [
      {
        type: "concept",
        title: "บอกนาที",
        content: `
          <p>
            นอกจากชั่วโมงแล้ว เราสามารถบอกนาทีได้ด้วย
            <strong>ふん / ぷん</strong>
          </p>

          <p>
            เสียงของคำลงท้ายอาจเปลี่ยนตามตัวเลข
            จึงควรจำตัวอย่างที่พบบ่อยไปทีละชุด
          </p>

          <div class="example-box">
            <p>ごふん = 5 นาที</p>
            <p>じゅっぷん = 10 นาที</p>
            <p>じゅうごふん = 15 นาที</p>
            <p>にじゅっぷん = 20 นาที</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "ครึ่งชั่วโมง",
        content: `
          <p>
            คำว่า <strong>はん</strong> หมายถึงครึ่ง
          </p>

          <div class="example-box">
            <p>さんじはん</p>
            <p>3 โมงครึ่ง</p>

            <p>ろくじはん</p>
            <p>6 โมงครึ่ง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「はん」 ในการบอกเวลาหมายถึงอะไร?",
        choices: [
          "หนึ่งชั่วโมง",
          "ครึ่ง",
          "สิบห้านาที",
          "ตอนเช้า"
        ],
        answer: 1,
        explanation: "はん = ครึ่ง เช่น さんじはん = 3 โมงครึ่ง"
      }
    ]
  },

  {
    id: 139,
    title: "ทำอะไรตอนกี่โมง",
    subtitle: "เวลา + に",
    sections: [
      {
        type: "concept",
        title: "คำช่วย に กับเวลา",
        content: `
          <p>
            เมื่อต้องการบอกว่าเราทำกิจกรรม
            <strong>เวลาไหน</strong>
            สามารถใช้ <strong>に</strong> หลังเวลา
          </p>

          <div class="example-box">
            <p>ろくじに おきます。</p>
            <p>ตื่นตอน 6 โมง</p>
          </div>

          <p>
            โครงสร้างพื้นฐานคือ
          </p>

          <div class="example-box">
            <p><strong>เวลา + に + คำกริยา</strong></p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>しちじに がっこうへ いきます。</p>
            <p>ไปโรงเรียนตอน 7 โมง</p>

            <p>ごじに うちへ かえります。</p>
            <p>กลับบ้านตอน 5 โมง</p>

            <p>じゅうじに ねます。</p>
            <p>นอนตอน 4? </p>
          </div>
        `
      },
      {
        type: "note",
        title: "แก้ความเข้าใจจากตัวอย่าง",
        content: `
          <p>
            ในตัวอย่างด้านบน ประโยค
            <strong>じゅうじに ねます。</strong>
            หมายถึง <strong>นอนตอน 4? </strong> ไม่ถูกต้อง
            เพราะ じゅうじ คือ 10 โมง
          </p>

          <div class="example-box">
            <p><strong>じゅうじに ねます。</strong></p>
            <p>นอนตอน 10 โมง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำช่วย: 「ろくじ ___ おきます。」",
        choices: [
          "を",
          "へ",
          "に",
          "の"
        ],
        answer: 2,
        explanation: "เวลา + に ใช้บอกเวลาที่เกิดกิจกรรม"
      }
    ]
  },

  {
    id: 140,
    title: "กิจวัตรพร้อมเวลา",
    subtitle: "เวลา + กิจกรรม",
    sections: [
      {
        type: "concept",
        title: "รวมทุกอย่างเข้าด้วยกัน",
        content: `
          <p>
            เราสามารถนำเวลา สถานที่ และคำกริยามารวมในประโยคเดียวได้
          </p>

          <div class="example-box">
            <p>しちじに がっこうへ いきます。</p>
            <p>ไปโรงเรียนตอน 7 โมง</p>

            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>ごじに うちへ かえります。</p>
            <p>กลับบ้านตอน 5 โมง</p>
          </div>
        `
      },
      {
        type: "example",
        title: "กิจวัตรหนึ่งวัน",
        content: `
          <div class="example-box">
            <p>ろくじに おきます。</p>
            <p>ตื่น 6 โมง</p>

            <p>しちじに あさごはんを たべます。</p>
            <p>กินอาหารเช้า 7 โมง</p>

            <p>はちじに がっこうへ いきます。</p>
            <p>ไปโรงเรียน 8 โมง</p>

            <p>ごじに うちへ かえります。</p>
            <p>กลับบ้าน 5 โมง</p>

            <p>じゅうじに ねます。</p>
            <p>นอน 4? </p>
          </div>
        `
      },
      {
        type: "note",
        title: "ตรวจประโยค",
        content: `
          <p>
            ประโยคสุดท้ายที่ถูกต้องคือ
          </p>

          <div class="example-box">
            <p><strong>じゅうじに ねます。</strong></p>
            <p>นอน 10 โมง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「しちじに あさごはんを たべます」 หมายถึงอะไร?",
        choices: [
          "กินอาหารเช้าตอน 7 โมง",
          "ไปโรงเรียนตอน 7 โมง",
          "นอนตอน 7 โมง",
          "ดื่มน้ำตอน 7 โมง"
        ],
        answer: 0,
        explanation: "しちじ = 7 โมง, に = เวลา, あさごはんを たべます = กินอาหารเช้า"
      }
    ]
  },

  {
    id: 141,
    title: "ปฏิเสธคำกริยา",
    subtitle: "ません",
    sections: [
      {
        type: "concept",
        title: "ます → ません",
        content: `
          <p>
            เราเคยใช้คำกริยารูป <strong>ます</strong>
            เพื่อบอกว่าทำบางอย่าง
          </p>

          <p>
            ถ้าต้องการบอกว่า "ไม่ทำ"
            ในรูปสุภาพพื้นฐาน ให้เปลี่ยน
            <strong>ます → ません</strong>
          </p>

          <div class="example-box">
            <p>たべます → たべません</p>
            <p>กิน → ไม่กิน</p>

            <p>のみます → のみません</p>
            <p>ดื่ม → ไม่ดื่ม</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ごはんを たべません。</p>
            <p>ไม่กินข้าว</p>

            <p>みずを のみません。</p>
            <p>ไม่ดื่มน้ำ</p>

            <p>テレビを みません。</p>
            <p>ไม่ดูโทรทัศน์</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「のみます」 เปลี่ยนเป็นรูปปฏิเสธอย่างไร?",
        choices: [
          "のみです",
          "のみじゃありません",
          "のみません",
          "のみか"
        ],
        answer: 2,
        explanation: "คำกริยารูป ます เปลี่ยนเป็น ません เพื่อสร้างรูปปฏิเสธแบบสุภาพ"
      },
      {
        type: "tip",
        title: "จำเป็นคู่",
        content: `
          <div class="example-box">
            <p>たべます = กิน</p>
            <p>たべません = ไม่กิน</p>

            <p>みます = ดู</p>
            <p>みません = ไม่ดู</p>
          </div>
        `
      }
    ]
  },

  {
    id: 142,
    title: "ถามว่าทำหรือไม่ทำ",
    subtitle: "ますか・ませんか",
    sections: [
      {
        type: "concept",
        title: "คำถามเกี่ยวกับการกระทำ",
        content: `
          <p>
            เราสามารถเติม <strong>か</strong> หลังคำกริยารูป ます
            เพื่อถามว่า "ทำไหม?"
          </p>

          <div class="example-box">
            <p>たべますか。</p>
            <p>กินไหม?</p>

            <p>のみますか。</p>
            <p>ดื่มไหม?</p>

            <p>いきますか。</p>
            <p>ไปไหม?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> あさごはんを たべますか。</p>
            <p>กินอาหารเช้าไหม?</p>

            <p><strong>B:</strong> はい、たべます。</p>
            <p>ใช่ กิน</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> コーヒーを のみますか。</p>
            <p>ดื่มกาแฟไหม?</p>

            <p><strong>B:</strong> いいえ、のみません。</p>
            <p>ไม่ ไม่ดื่ม</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いきますか」 หมายถึงอะไร?",
        choices: [
          "ไป",
          "ไม่ไป",
          "ไปไหม?",
          "ไปที่ไหน?"
        ],
        answer: 2,
        explanation: "いきます = ไป และเติม か เพื่อสร้างคำถาม"
      }
    ]
  },

  {
    id: 143,
    title: "ชอบและไม่ชอบ",
    subtitle: "すきです・きらいです",
    sections: [
      {
        type: "concept",
        title: "พูดถึงสิ่งที่ชอบ",
        content: `
          <p>
            ภาษาญี่ปุ่นใช้คำว่า <strong>すきです</strong>
            เพื่อบอกว่า "ชอบ"
          </p>

          <div class="example-box">
            <p>おんがくが すきです。</p>
            <p>ชอบดนตรี</p>
          </div>

          <p>
            สังเกตว่าในรูปแบบพื้นฐานนี้
            สิ่งที่เราชอบมักตามด้วยคำช่วย <strong>が</strong>
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "すきです",
            reading: "suki desu",
            thai: "สุกิ เดะสุ",
            meaning: "ชอบ"
          },
          {
            jp: "きらいです",
            reading: "kirai desu",
            thai: "คิไร เดะสุ",
            meaning: "ไม่ชอบ"
          },
          {
            jp: "おんがく",
            reading: "ongaku",
            thai: "องกะคุ",
            meaning: "ดนตรี"
          },
          {
            jp: "スポーツ",
            reading: "supootsu",
            thai: "สุโปตสึ",
            meaning: "กีฬา"
          },
          {
            jp: "えいが",
            reading: "eiga",
            thai: "เอกะ",
            meaning: "ภาพยนตร์"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>おんがくが すきです。</p>
            <p>ชอบดนตรี</p>

            <p>えいがが すきです。</p>
            <p>ชอบภาพยนตร์</p>

            <p>スポーツが きらいです。</p>
            <p>ไม่ชอบกีฬา</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดหมายถึง \"ชอบดนตรี\"?",
        choices: [
          "おんがくを すきです。",
          "おんがくが すきです。",
          "おんがくは たべます。",
          "おんがくへ いきます。"
        ],
        answer: 1,
        explanation: "รูปพื้นฐานของ すきです ใช้ が กับสิ่งที่ชอบ"
      }
    ]
  },

  {
    id: 144,
    title: "ถามว่าชอบอะไร",
    subtitle: "なにが すきですか",
    sections: [
      {
        type: "concept",
        title: "ถามสิ่งที่ชอบ",
        content: `
          <p>
            ถ้าต้องการถามว่า "ชอบอะไร?"
            ใช้ประโยค
          </p>

          <div class="example-box">
            <p><strong>なにが すきですか。</strong></p>
            <p>ชอบอะไร?</p>
          </div>

          <p>
            <strong>なに</strong> = อะไร
            และ <strong>すきですか</strong> = ชอบไหม / ชอบหรือ?
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างบทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> なにが すきですか。</p>
            <p>ชอบอะไร?</p>

            <p><strong>B:</strong> おんがくが すきです。</p>
            <p>ชอบดนตรี</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> えいがが すきですか。</p>
            <p>ชอบภาพยนตร์ไหม?</p>

            <p><strong>B:</strong> はい、すきです。</p>
            <p>ใช่ ชอบ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「なにが すきですか」 หมายถึงอะไร?",
        choices: [
          "ไปที่ไหน",
          "ชอบอะไร",
          "ชื่ออะไร",
          "อายุเท่าไร"
        ],
        answer: 1,
        explanation: "なに = อะไร และ すきですか = ชอบไหม/ชอบอะไร"
      },
      {
        type: "tip",
        title: "ลองตอบเอง",
        content: `
          <p>
            ลองตอบคำถามนี้ด้วยสิ่งที่ตัวเองชอบ
          </p>

          <div class="example-box">
            <p>なにが すきですか。</p>
            <p>→ ○○が すきです。</p>
          </div>
        `
      }
    ]
  },

  {
    id: 145,
    title: "ทบทวนคำกริยาและความชอบ",
    subtitle: "ます・ません・すきです",
    sections: [
      {
        type: "concept",
        title: "สิ่งที่เรียนมาถึงตอนนี้",
        content: `
          <p>
            ตอนนี้เราสามารถพูดเกี่ยวกับ
            การกระทำ การปฏิเสธ และสิ่งที่ชอบได้แล้ว
          </p>

          <div class="example-box">
            <p>たべます → กิน</p>
            <p>たべません → ไม่กิน</p>
            <p>たべますか → กินไหม?</p>
            <p>すきです → ชอบ</p>
            <p>きらいです → ไม่ชอบ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนารวม",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> なにが すきですか。</p>
            <p>ชอบอะไร?</p>

            <p><strong>B:</strong> おんがくが すきです。</p>
            <p>ชอบดนตรี</p>

            <p><strong>A:</strong> おんがくを ききますか。</p>
            <p>ฟังดนตรีไหม?</p>

            <p><strong>B:</strong> はい、ききます。</p>
            <p>ใช่ ฟัง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า \"ฉันไม่ฟังเพลง\" ข้อใดถูก?",
        choices: [
          "おんがくが ききません。",
          "おんがくを ききません。",
          "おんがくへ ききません。",
          "おんがくの ききません。"
        ],
        answer: 1,
        explanation: "おんがく เป็นกรรมของ ききます จึงใช้ を และรูปปฏิเสธคือ ききません"
      },
      {
        type: "practice",
        question: "ข้อใดเป็นคำถามว่า \"ชอบอะไร?\"",
        choices: [
          "なにを すきですか。",
          "なにが すきですか。",
          "なにへ すきですか。",
          "なにの すきですか。"
        ],
        answer: 1,
        explanation: "รูปพื้นฐานคือ なにが すきですか"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ます = รูปบอกเล่าของคำกริยาแบบสุภาพ",
          "ません = รูปปฏิเสธของคำกริยาแบบสุภาพ",
          "ますか = คำถามเกี่ยวกับการกระทำ",
          "すきです = ชอบ",
          "きらいです = ไม่ชอบ",
          "なにが すきですか = ชอบอะไร"
        ]
      },
      {
        type: "tip",
        title: "ภารกิจท้ายช่วง",
        content: `
          <p>
            ลองพูดเกี่ยวกับตัวเอง 3 อย่าง:
          </p>

          <div class="example-box">
            <p>1. สิ่งที่ชอบ</p>
            <p>2. สิ่งที่ทำเป็นประจำ</p>
            <p>3. สิ่งที่ไม่ทำ</p>
          </div>

          <p>
            พยายามใช้รูป <strong>です / ます / ません</strong>
            ให้ได้อย่างน้อยอย่างละหนึ่งประโยค
          </p>
        `
      }
    ]
  }
);

// END OF LESSON 145
// LESSON 146 CONTINUES NEXT

  lessons.push(
  {
    id: 146,
    title: "คำคุณศัพท์คืออะไร",
    subtitle: "おおきい・ちいさい",
    sections: [
      {
        type: "concept",
        title: "เริ่มรู้จักคำคุณศัพท์",
        content: `
          <p>
            คำคุณศัพท์ใช้บอกลักษณะของคน สิ่งของ หรือสถานที่
            เช่น ใหญ่ เล็ก ใหม่ เก่า สวย อร่อย และสนุก
          </p>

          <p>
            ในภาษาญี่ปุ่น คำคุณศัพท์พื้นฐานมีหลายชนิด
            แต่ในช่วงแรกเราจะเริ่มจากคำที่ลงท้ายด้วย
            <strong>い</strong> หรือที่เรียกว่า
            <strong>い-adjective</strong>
          </p>

          <div class="example-box">
            <p>おおきい = ใหญ่</p>
            <p>ちいさい = เล็ก</p>
            <p>あたらしい = ใหม่</p>
            <p>ふるい = เก่า</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์ชุดแรก",
        items: [
          {
            jp: "おおきい",
            reading: "ookii",
            thai: "โอกี",
            meaning: "ใหญ่"
          },
          {
            jp: "ちいさい",
            reading: "chiisai",
            thai: "จี้ไซ",
            meaning: "เล็ก"
          },
          {
            jp: "あたらしい",
            reading: "atarashii",
            thai: "อะตะระชี่",
            meaning: "ใหม่"
          },
          {
            jp: "ふるい",
            reading: "furui",
            thai: "ฟุรุอิ",
            meaning: "เก่า"
          }
        ]
      },
      {
        type: "example",
        title: "ใช้บรรยายสิ่งของ",
        content: `
          <div class="example-box">
            <p>おおきい ほん</p>
            <p>หนังสือเล่มใหญ่</p>

            <p>ちいさい かばん</p>
            <p>กระเป๋าใบเล็ก</p>

            <p>あたらしい くるま</p>
            <p>รถใหม่</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「おおきい」 หมายถึงอะไร?",
        choices: [
          "เล็ก",
          "ใหญ่",
          "ใหม่",
          "เก่า"
        ],
        answer: 1,
        explanation: "おおきい = ใหญ่"
      }
    ]
  },

  {
    id: 147,
    title: "คำคุณศัพท์ขยายคำนาม",
    subtitle: "おおきい ほん",
    sections: [
      {
        type: "concept",
        title: "วางคำคุณศัพท์หน้าคำนาม",
        content: `
          <p>
            ในภาษาญี่ปุ่น ถ้าต้องการบอกว่า
            "คำนามมีลักษณะอย่างไร"
            ให้วางคำคุณศัพท์ไว้ <strong>หน้าคำนาม</strong>
          </p>

          <div class="example-box">
            <p>おおきい + ほん</p>
            <p>→ おおきい ほん</p>
            <p>หนังสือเล่มใหญ่</p>
          </div>

          <p>
            โครงสร้างคือ
          </p>

          <div class="example-box">
            <p><strong>คำคุณศัพท์ + คำนาม</strong></p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ちいさい ねこ</p>
            <p>แมวตัวเล็ก</p>

            <p>あたらしい ほん</p>
            <p>หนังสือใหม่</p>

            <p>ふるい くるま</p>
            <p>รถเก่า</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำนามเพิ่มเติม",
        items: [
          {
            jp: "ねこ",
            reading: "neko",
            thai: "เนะโกะ",
            meaning: "แมว"
          },
          {
            jp: "くるま",
            reading: "kuruma",
            thai: "คุรุมะ",
            meaning: "รถ"
          },
          {
            jp: "かばん",
            reading: "kaban",
            thai: "คะบัง",
            meaning: "กระเป๋า"
          },
          {
            jp: "いえ",
            reading: "ie",
            thai: "อิเอะ",
            meaning: "บ้าน"
          }
        ]
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"หนังสือใหม่\"?",
        choices: [
          "ほん あたらしい",
          "あたらしい ほん",
          "ほんの あたらしい",
          "ほんを あたらしい"
        ],
        answer: 1,
        explanation: "คำคุณศัพท์วางไว้หน้าคำนาม → あたらしい ほん"
      }
    ]
  },

  {
    id: 148,
    title: "บอกว่าสิ่งนั้นเป็นอย่างไร",
    subtitle: "ほんは おもしろいです",
    sections: [
      {
        type: "concept",
        title: "คำคุณศัพท์ + です",
        content: `
          <p>
            เราสามารถใช้คำคุณศัพท์เป็นส่วนบอกข้อมูลของประโยคได้
          </p>

          <div class="example-box">
            <p>この ほんは おもしろいです。</p>
            <p>หนังสือเล่มนี้น่าสนใจ</p>
          </div>

          <p>
            รูปแบบพื้นฐานคือ
          </p>

          <div class="example-box">
            <p><strong>คำนาม は คำคุณศัพท์です。</strong></p>
          </div>

          <p>
            สำหรับคำคุณศัพท์ประเภท い
            ตัว <strong>い</strong> ยังคงอยู่ก่อน です
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำคุณศัพท์ใหม่",
        items: [
          {
            jp: "おもしろい",
            reading: "omoshiroi",
            thai: "โอะโมะชิโระอิ",
            meaning: "น่าสนใจ / สนุก"
          },
          {
            jp: "おいしい",
            reading: "oishii",
            thai: "โอะอิชี่",
            meaning: "อร่อย"
          },
          {
            jp: "たのしい",
            reading: "tanoshii",
            thai: "ทะโนะชี่",
            meaning: "สนุก"
          },
          {
            jp: "むずかしい",
            reading: "muzukashii",
            thai: "มุซุคะชี่",
            meaning: "ยาก"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>この えいがは おもしろいです。</p>
            <p>ภาพยนตร์เรื่องนี้น่าสนใจ</p>

            <p>この りんごは おいしいです。</p>
            <p>แอปเปิลนี้อร่อย</p>

            <p>にほんごは むずかしいです。</p>
            <p>ภาษาญี่ปุ่นยาก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำ: 「この ほんは おもしろい ___。」",
        choices: [
          "ます",
          "です",
          "ますか",
          "ません"
        ],
        answer: 1,
        explanation: "คำคุณศัพท์สามารถตามด้วย です ในประโยคสุภาพ"
      }
    ]
  },

  {
    id: 149,
    title: "คำคุณศัพท์บอกความรู้สึก",
    subtitle: "たのしい・かなしい",
    sections: [
      {
        type: "vocab",
        title: "คำคุณศัพท์เกี่ยวกับความรู้สึก",
        items: [
          {
            jp: "たのしい",
            reading: "tanoshii",
            thai: "ทะโนะชี่",
            meaning: "สนุก"
          },
          {
            jp: "かなしい",
            reading: "kanashii",
            thai: "คะนะชี่",
            meaning: "เศร้า"
          },
          {
            jp: "うれしい",
            reading: "ureshii",
            thai: "อุเระชี่",
            meaning: "ดีใจ"
          },
          {
            jp: "さびしい",
            reading: "sabishii",
            thai: "ซะบิชี่",
            meaning: "เหงา"
          }
        ]
      },
      {
        type: "concept",
        title: "ใช้บอกความรู้สึก",
        content: `
          <div class="example-box">
            <p>たのしいです。</p>
            <p>สนุก</p>

            <p>かなしいです。</p>
            <p>เศร้า</p>

            <p>うれしいです。</p>
            <p>ดีใจ</p>

            <p>さびしいです。</p>
            <p>เหงา</p>
          </div>

          <p>
            ถ้าต้องการระบุหัวข้อ สามารถใช้ は ได้
          </p>

          <div class="example-box">
            <p>きょうは たのしいです。</p>
            <p>วันนี้สนุก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「うれしいです」 หมายถึงอะไร?",
        choices: [
          "เศร้า",
          "เหงา",
          "ดีใจ",
          "ยาก"
        ],
        answer: 2,
        explanation: "うれしい = ดีใจ"
      },
      {
        type: "practice",
        question: "「さびしい」 หมายถึงอะไร?",
        choices: [
          "สนุก",
          "เหงา",
          "อร่อย",
          "ใหม่"
        ],
        answer: 1,
        explanation: "さびしい = เหงา"
      }
    ]
  },

  {
    id: 150,
    title: "ทบทวนคำคุณศัพท์",
    subtitle: "い-adjective",
    sections: [
      {
        type: "concept",
        title: "คำที่ต้องจำ",
        content: `
          <div class="example-box">
            <p>おおきい = ใหญ่</p>
            <p>ちいさい = เล็ก</p>
            <p>あたらしい = ใหม่</p>
            <p>ふるい = เก่า</p>
            <p>おいしい = อร่อย</p>
            <p>おもしろい = น่าสนใจ</p>
            <p>たのしい = สนุก</p>
            <p>むずかしい = ยาก</p>
          </div>
        `
      },
      {
        type: "example",
        title: "สองวิธีใช้",
        content: `
          <div class="example-box">
            <p><strong>あたらしい ほん</strong></p>
            <p>หนังสือใหม่</p>

            <p><strong>ほんは あたらしいです。</strong></p>
            <p>หนังสือใหม่</p>
          </div>

          <p>
            แบบแรกใช้คำคุณศัพท์ขยายคำนามโดยตรง
            ส่วนแบบที่สองใช้คำคุณศัพท์เป็นข้อมูลของประโยค
          </p>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"แอปเปิลอร่อย\"?",
        choices: [
          "りんごは おいしいです。",
          "りんごを おいしいです。",
          "おいしいは りんごです。",
          "りんごの おいしいです。"
        ],
        answer: 0,
        explanation: "คำนามเป็นหัวข้อด้วย は แล้วตามด้วยคำคุณศัพท์ + です"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "い-adjective หลายคำลงท้ายด้วย い",
          "คำคุณศัพท์สามารถวางหน้าคำนามได้",
          "คำคุณศัพท์สามารถใช้กับ です ได้",
          "おおきい = ใหญ่",
          "ちいさい = เล็ก",
          "おいしい = อร่อย",
          "たのしい = สนุก"
        ]
      }
    ]
  },

  {
    id: 151,
    title: "ปฏิเสธคำคุณศัพท์",
    subtitle: "おいしくないです",
    sections: [
      {
        type: "concept",
        title: "จาก い → くない",
        content: `
          <p>
            ถ้าต้องการบอกว่า
            "ไม่..." สำหรับคำคุณศัพท์ประเภท い
            จะมีการเปลี่ยนรูปท้ายคำ
          </p>

          <div class="example-box">
            <p>おいしい → おいしくないです</p>
            <p>อร่อย → ไม่อร่อย</p>

            <p>おもしろい → おもしろくないです</p>
            <p>น่าสนใจ → ไม่น่าสนใจ</p>
          </div>

          <p>
            วิธีจำเบื้องต้นคือ
            ตัด <strong>い</strong> ท้ายคำออก แล้วเติม
            <strong>くないです</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>この りんごは おいしくないです。</p>
            <p>แอปเปิลนี้ไม่อร่อย</p>

            <p>この えいがは おもしろくないです。</p>
            <p>ภาพยนตร์เรื่องนี้ไม่น่าสนใจ</p>

            <p>にほんごは むずかしくないです。</p>
            <p>ภาษาญี่ปุ่นไม่ยาก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "รูปปฏิเสธของ おいしい คืออะไร?",
        choices: [
          "おいしくないです",
          "おいしいじゃありません",
          "おいしません",
          "おいくないです"
        ],
        answer: 0,
        explanation: "おいしい → おいしくないです"
      },
      {
        type: "tip",
        title: "จำเป็นคู่",
        content: `
          <div class="example-box">
            <p>おいしいです = อร่อย</p>
            <p>おいしくないです = ไม่อร่อย</p>
          </div>
        `
      }
    ]
  },

  {
    id: 152,
    title: "คำคุณศัพท์อดีต",
    subtitle: "おいしかったです",
    sections: [
      {
        type: "concept",
        title: "พูดว่าเคยเป็นอย่างไร",
        content: `
          <p>
            ถ้าอยากพูดถึงสิ่งที่เกิดขึ้นในอดีต
            เช่น "อร่อย" ในความหมายว่า
            "ตอนนั้นอร่อย"
            คำคุณศัพท์ い สามารถเปลี่ยนเป็นรูปอดีตได้
          </p>

          <div class="example-box">
            <p>おいしいです</p>
            <p>อร่อย</p>

            <p>おいしかったです</p>
            <p>อร่อย (ในอดีต / ตอนนั้น)</p>
          </div>

          <p>
            สำหรับระดับนี้ให้จำการเปลี่ยน
            <strong>い → かった</strong>
            เป็นหลักก่อน
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>きのうは たのしかったです。</p>
            <p>เมื่อวานสนุก</p>

            <p>りょうりは おいしかったです。</p>
            <p>อาหารอร่อย</p>

            <p>えいがは おもしろかったです。</p>
            <p>ภาพยนตร์สนุก/น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「たのしい」 รูปอดีตคืออะไร?",
        choices: [
          "たのしくないです",
          "たのしかったです",
          "たのしです",
          "たのしません"
        ],
        answer: 1,
        explanation: "たのしい → たのしかったです"
      }
    ]
  },

  {
    id: 153,
    title: "ปฏิเสธอดีตของคำคุณศัพท์",
    subtitle: "おいしくなかったです",
    sections: [
      {
        type: "concept",
        title: "ไม่...ในอดีต",
        content: `
          <p>
            ถ้าต้องการพูดว่า
            "ไม่...ในอดีต"
            จะใช้รูป <strong>くなかったです</strong>
          </p>

          <div class="example-box">
            <p>おいしい</p>
            <p>อร่อย</p>

            <p>おいしくないです</p>
            <p>ไม่อร่อย</p>

            <p>おいしくなかったです</p>
            <p>ไม่อร่อยในตอนนั้น / ไม่อร่อยในอดีต</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตารางจำ",
        content: `
          <div class="example-box">
            <p>たのしいです → สนุก</p>
            <p>たのしくないです → ไม่สนุก</p>
            <p>たのしかったです → สนุกในอดีต</p>
            <p>たのしくなかったです → ไม่สนุกในอดีต</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「おもしろくなかったです」 หมายถึงอะไร?",
        choices: [
          "น่าสนใจ",
          "ไม่น่าสนใจในอดีต",
          "กำลังน่าสนใจ",
          "จะน่าสนใจ"
        ],
        answer: 1,
        explanation: "おもしろい → おもしろくなかったです = ไม่น่าสนใจในอดีต"
      },
      {
        type: "tip",
        title: "ไม่ต้องรีบท่องทั้งหมด",
        content: `
          <p>
            รูปคำคุณศัพท์มีหลายรูปแบบ
            ให้จำเป็นชุดและสังเกตส่วนท้ายของคำ
            จะช่วยให้เข้าใจการผันในบทต่อ ๆ ไป
          </p>
        `
      }
    ]
  },

  {
    id: 154,
    title: "คำคุณศัพท์ な",
    subtitle: "しずか・きれい",
    sections: [
      {
        type: "concept",
        title: "อีกกลุ่มหนึ่ง",
        content: `
          <p>
            นอกจาก い-adjective แล้ว
            ภาษาญี่ปุ่นยังมีคำคุณศัพท์อีกกลุ่มหนึ่ง
            ที่มักเรียกว่า <strong>な-adjective</strong>
          </p>

          <p>
            ตัวอย่างเช่น
            <strong>しずか</strong> = เงียบสงบ
            และ <strong>きれい</strong> = สวย / สะอาด
          </p>

          <p>
            เมื่อวางหน้าคำนาม จะใช้
            <strong>な</strong> เชื่อมกับคำนาม
          </p>

          <div class="example-box">
            <p>しずかな まち</p>
            <p>เมืองที่เงียบสงบ</p>

            <p>きれいな へや</p>
            <p>ห้องที่สวย / สะอาด</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "しずか",
            reading: "shizuka",
            thai: "ชิซุกะ",
            meaning: "เงียบสงบ"
          },
          {
            jp: "きれい",
            reading: "kirei",
            thai: "คิเร",
            meaning: "สวย / สะอาด"
          },
          {
            jp: "げんき",
            reading: "genki",
            thai: "เก็นกิ",
            meaning: "แข็งแรง / สบายดี / ร่าเริง"
          },
          {
            jp: "ゆうめい",
            reading: "yuumei",
            thai: "ยูเม",
            meaning: "มีชื่อเสียง"
          }
        ]
      },
      {
        type: "practice",
        question: "ถ้าจะพูดว่า \"เมืองที่เงียบสงบ\" ควรใช้ข้อใด?",
        choices: [
          "しずか まち",
          "しずかな まち",
          "しずかい まち",
          "しずかの まち"
        ],
        answer: 1,
        explanation: "な-adjective ใช้ な เมื่อนำไปขยายคำนาม"
      }
    ]
  },

  {
    id: 155,
    title: "な-adjective กับ です",
    subtitle: "しずかです",
    sections: [
      {
        type: "concept",
        title: "ไม่ต้องใส่ な หน้า です",
        content: `
          <p>
            จุดที่ต้องระวังคือ
            ถ้า な-adjective อยู่หน้าคำนาม
            เราใช้ <strong>な</strong>
          </p>

          <div class="example-box">
            <p>しずかな まち</p>
            <p>เมืองที่เงียบสงบ</p>
          </div>

          <p>
            แต่ถ้าใช้เป็นส่วนบอกข้อมูลของประโยค
            ก่อน です ไม่ต้องใส่ な
          </p>

          <div class="example-box">
            <p>まちは しずかです。</p>
            <p>เมืองเงียบสงบ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "เปรียบเทียบ",
        content: `
          <div class="example-box">
            <p>しずかな まち</p>
            <p>เมืองที่เงียบสงบ</p>

            <p>まちは しずかです。</p>
            <p>เมืองเงียบสงบ</p>

            <p>きれいな へや</p>
            <p>ห้องที่สวย/สะอาด</p>

            <p>へやは きれいです。</p>
            <p>ห้องสวย/สะอาด</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดถูกต้อง?",
        choices: [
          "まちは しずかなです。",
          "まちは しずかです。",
          "まちは しずかいです。",
          "まちは しずかのです。"
        ],
        answer: 1,
        explanation: "เมื่อ な-adjective อยู่หน้าประโยค + です ไม่ต้องใส่ な"
      }
    ]
  },

  {
    id: 156,
    title: "ปฏิเสธ な-adjective",
    subtitle: "しずかじゃありません",
    sections: [
      {
        type: "concept",
        title: "รูปปฏิเสธ",
        content: `
          <p>
            な-adjective ใช้รูปปฏิเสธแบบเดียวกับคำนาม
            โดยใช้ <strong>じゃありません</strong>
          </p>

          <div class="example-box">
            <p>しずかです。</p>
            <p>เงียบสงบ</p>

            <p>しずかじゃありません。</p>
            <p>ไม่เงียบสงบ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>この まちは しずかじゃありません。</p>
            <p>เมืองนี้ไม่เงียบสงบ</p>

            <p>へやは きれいじゃありません。</p>
            <p>ห้องไม่สะอาด</p>

            <p>この ばしょは ゆうめいじゃありません。</p>
            <p>สถานที่นี้ไม่ได้มีชื่อเสียง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "รูปปฏิเสธของ 「しずかです」 คือข้อใด?",
        choices: [
          "しずかくないです",
          "しずかじゃありません",
          "しずかません",
          "しずかではないですか"
        ],
        answer: 1,
        explanation: "な-adjective ใช้ じゃありません เป็นรูปปฏิเสธพื้นฐาน"
      }
    ]
  },

  {
    id: 157,
    title: "เปรียบเทียบ い กับ な",
    subtitle: "い-adjective vs な-adjective",
    sections: [
      {
        type: "concept",
        title: "ดูจากวิธีใช้",
        content: `
          <p>
            สองกลุ่มนี้ทำหน้าที่คล้ายกัน คือใช้บอกลักษณะ
            แต่เวลาวางหน้าคำนามมีรูปต่างกัน
          </p>

          <div class="example-box">
            <p><strong>い-adjective</strong></p>
            <p>おおきい いえ</p>
            <p>บ้านหลังใหญ่</p>

            <p><strong>な-adjective</strong></p>
            <p>しずかな いえ</p>
            <p>บ้านที่เงียบสงบ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "เมื่ออยู่หน้าประโยค",
        content: `
          <div class="example-box">
            <p>いえは おおきいです。</p>
            <p>บ้านใหญ่</p>

            <p>いえは しずかです。</p>
            <p>บ้านเงียบสงบ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำใดต้องใช้ な เมื่อนำไปขยายคำนาม?",
        choices: [
          "おおきい",
          "あたらしい",
          "しずか",
          "おいしい"
        ],
        answer: 2,
        explanation: "しずか เป็น な-adjective → しずかな まち"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "おおきい = ใหญ่",
          "おいしい = อร่อย",
          "しずか = เงียบสงบ",
          "きれい = สวย / สะอาด",
          "い-adjective ใช้หน้าคำนามได้โดยตรง",
          "な-adjective ใช้ な เมื่อนำไปขยายคำนาม"
        ]
      }
    ]
  },

  {
    id: 158,
    title: "สิ่งของมีหรือไม่มี",
    subtitle: "あります・ありません",
    sections: [
      {
        type: "concept",
        title: "あります",
        content: `
          <p>
            คำว่า <strong>あります</strong>
            ใช้บอกว่ามีหรือมีอยู่ สำหรับสิ่งของ
            และสิ่งที่ไม่มีชีวิตในรูปแบบพื้นฐาน
          </p>

          <div class="example-box">
            <p>ほんが あります。</p>
            <p>มีหนังสือ</p>
          </div>

          <p>
            ถ้าจะบอกว่าไม่มี สามารถใช้
            <strong>ありません</strong>
          </p>

          <div class="example-box">
            <p>ほんが ありません。</p>
            <p>ไม่มีหนังสือ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์สิ่งของ",
        items: [
          {
            jp: "ほん",
            reading: "hon",
            thai: "ฮน",
            meaning: "หนังสือ"
          },
          {
            jp: "つくえ",
            reading: "tsukue",
            thai: "สึคุเอะ",
            meaning: "โต๊ะ"
          },
          {
            jp: "いす",
            reading: "isu",
            thai: "อิสุ",
            meaning: "เก้าอี้"
          },
          {
            jp: "かさ",
            reading: "kasa",
            thai: "คะสะ",
            meaning: "ร่ม"
          }
        ]
      },
      {
        type: "practice",
        question: "「ほんが あります」 หมายถึงอะไร?",
        choices: [
          "อ่านหนังสือ",
          "มีหนังสือ",
          "หนังสือใหม่",
          "ไม่มีหนังสือ"
        ],
        answer: 1,
        explanation: "あります ใช้บอกว่ามี/มีอยู่สำหรับสิ่งของ"
      }
    ]
  },

  {
    id: 159,
    title: "คนและสัตว์มีหรืออยู่",
    subtitle: "います",
    sections: [
      {
        type: "concept",
        title: "います",
        content: `
          <p>
            ถ้าพูดถึงคนหรือสัตว์ที่มีอยู่หรืออยู่ที่ใดที่หนึ่ง
            ใช้ <strong>います</strong>
          </p>

          <div class="example-box">
            <p>ねこが います。</p>
            <p>มีแมว / แมวอยู่</p>

            <p>ともだちが います。</p>
            <p>มีเพื่อน / เพื่อนอยู่</p>
          </div>

          <p>
            จึงควรแยกคู่คำนี้ไว้
          </p>

          <div class="example-box">
            <p>あります → สิ่งของ / สิ่งไม่มีชีวิต</p>
            <p>います → คน / สัตว์</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ねこが います。</p>
            <p>มีแมว</p>

            <p>いぬが います。</p>
            <p>มีสุนัข</p>

            <p>せんせいが います。</p>
            <p>มีครู / ครูอยู่</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าพูดถึง \"แมวอยู่\" ควรใช้คำใด?",
        choices: [
          "あります",
          "います",
          "いきます",
          "きます"
        ],
        answer: 1,
        explanation: "แมวเป็นสัตว์ จึงใช้ います"
      },
      {
        type: "tip",
        title: "จำคู่ให้แม่น",
        content: `
          <div class="example-box">
            <p>ほんが あります。</p>
            <p>มีหนังสือ</p>

            <p>ねこが います。</p>
            <p>มีแมว</p>
          </div>
        `
      }
    ]
  },

  {
    id: 160,
    title: "อะไรอยู่ที่ไหน",
    subtitle: "～は ～に あります",
    sections: [
      {
        type: "concept",
        title: "บอกตำแหน่งสิ่งของ",
        content: `
          <p>
            เมื่ออยากบอกว่าสิ่งของอยู่ที่ไหน
            เราสามารถใช้โครงสร้าง
          </p>

          <div class="example-box">
            <p><strong>สิ่งของ は สถานที่ に あります。</strong></p>
          </div>

          <div class="example-box">
            <p>ほんは つくえの うえに あります。</p>
            <p>หนังสืออยู่บนโต๊ะ</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำบอกตำแหน่ง",
        items: [
          {
            jp: "うえ",
            reading: "ue",
            thai: "อุเอะ",
            meaning: "ด้านบน"
          },
          {
            jp: "した",
            reading: "shita",
            thai: "ชิตะ",
            meaning: "ด้านล่าง"
          },
          {
            jp: "なか",
            reading: "naka",
            thai: "นะคะ",
            meaning: "ข้างใน"
          },
          {
            jp: "そと",
            reading: "soto",
            thai: "โซะโตะ",
            meaning: "ข้างนอก"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ほんは つくえの うえに あります。</p>
            <p>หนังสืออยู่บนโต๊ะ</p>

            <p>かばんは いすの したに あります。</p>
            <p>กระเป๋าอยู่ใต้เก้าอี้</p>

            <p>かさは かばんの なかに あります。</p>
            <p>ร่มอยู่ในกระเป๋า</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「うえ」 หมายถึงอะไร?",
        choices: [
          "ด้านบน",
          "ด้านล่าง",
          "ข้างใน",
          "ข้างนอก"
        ],
        answer: 0,
        explanation: "うえ = ด้านบน"
      }
    ]
  },

  {
    id: 161,
    title: "ตำแหน่งกับ の",
    subtitle: "つくえの うえ",
    sections: [
      {
        type: "concept",
        title: "คำนาม + の + ตำแหน่ง",
        content: `
          <p>
            คำช่วย <strong>の</strong> ที่เราเรียนมาก่อน
            สามารถใช้เชื่อมสิ่งของกับตำแหน่งได้ด้วย
          </p>

          <div class="example-box">
            <p>つくえの うえ</p>
            <p>ด้านบนของโต๊ะ / บนโต๊ะ</p>

            <p>いすの した</p>
            <p>ด้านล่างของเก้าอี้ / ใต้เก้าอี้</p>
          </div>
        `
      },
      {
        type: "example",
        title: "รวมกับ あります",
        content: `
          <div class="example-box">
            <p>ほんは つくえの うえに あります。</p>
            <p>หนังสืออยู่บนโต๊ะ</p>

            <p>かばんは いすの したに あります。</p>
            <p>กระเป๋าอยู่ใต้เก้าอี้</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「つくえの うえ」 หมายถึงอะไร?",
        choices: [
          "ใต้โต๊ะ",
          "บนโต๊ะ",
          "ในโต๊ะ",
          "ข้างโต๊ะ"
        ],
        answer: 1,
        explanation: "つくえ = โต๊ะ, の = เชื่อมความสัมพันธ์, うえ = ด้านบน"
      },
      {
        type: "tip",
        title: "จำเป็นชั้น ๆ",
        content: `
          <div class="example-box">
            <p>つくえ</p>
            <p>↓</p>
            <p>つくえの うえ</p>
            <p>↓</p>
            <p>つくえの うえに あります</p>
          </div>
        `
      }
    ]
  },

  {
    id: 162,
    title: "ซ้าย ขวา หน้า หลัง",
    subtitle: "みぎ・ひだり・まえ・うしろ",
    sections: [
      {
        type: "vocab",
        title: "ตำแหน่งพื้นฐาน",
        items: [
          {
            jp: "みぎ",
            reading: "migi",
            thai: "มิงิ",
            meaning: "ขวา"
          },
          {
            jp: "ひだり",
            reading: "hidari",
            thai: "ฮิดะริ",
            meaning: "ซ้าย"
          },
          {
            jp: "まえ",
            reading: "mae",
            thai: "มะเอะ",
            meaning: "ด้านหน้า"
          },
          {
            jp: "うしろ",
            reading: "ushiro",
            thai: "อุชิโระ",
            meaning: "ด้านหลัง"
          },
          {
            jp: "となり",
            reading: "tonari",
            thai: "โทะนะริ",
            meaning: "ข้าง ๆ / ถัดไป"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>つくえの みぎ</p>
            <p>ด้านขวาของโต๊ะ</p>

            <p>いすの ひだり</p>
            <p>ด้านซ้ายของเก้าอี้</p>

            <p>がっこうの まえ</p>
            <p>หน้าโรงเรียน</p>

            <p>いえの うしろ</p>
            <p>หลังบ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ひだり」 หมายถึงอะไร?",
        choices: [
          "ขวา",
          "ซ้าย",
          "หน้า",
          "หลัง"
        ],
        answer: 1,
        explanation: "ひだり = ซ้าย"
      },
      {
        type: "practice",
        question: "「うしろ」 หมายถึงอะไร?",
        choices: [
          "ด้านหน้า",
          "ด้านหลัง",
          "ด้านบน",
          "ด้านล่าง"
        ],
        answer: 1,
        explanation: "うしろ = ด้านหลัง"
      }
    ]
  },

  {
    id: 163,
    title: "คนอยู่ที่ไหน",
    subtitle: "～は ～に います",
    sections: [
      {
        type: "concept",
        title: "ใช้ います กับคน",
        content: `
          <p>
            เมื่อเรารู้ว่าคนหรือสัตว์อยู่ที่ไหน
            สามารถใช้โครงสร้างเดียวกับ あります
            แต่เปลี่ยนเป็น <strong>います</strong>
          </p>

          <div class="example-box">
            <p><strong>คน は สถานที่ に います。</strong></p>
          </div>

          <div class="example-box">
            <p>せんせいは がっこうに います。</p>
            <p>ครูอยู่ที่โรงเรียน</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ともだちは うちに います。</p>
            <p>เพื่อนอยู่ที่บ้าน</p>

            <p>ねこは へやに います。</p>
            <p>แมวอยู่ในห้อง</p>

            <p>せんせいは きょうしつに います。</p>
            <p>ครูอยู่ในห้องเรียน</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "สถานที่เพิ่มเติม",
        items: [
          {
            jp: "へや",
            reading: "heya",
            thai: "เฮยะ",
            meaning: "ห้อง"
          },
          {
            jp: "きょうしつ",
            reading: "kyoushitsu",
            thai: "เคียวชิสึ",
            meaning: "ห้องเรียน"
          }
        ]
      },
      {
        type: "practice",
        question: "ถ้าพูดว่า \"ครูอยู่ที่โรงเรียน\" ควรใช้ข้อใด?",
        choices: [
          "せんせいは がっこうに あります。",
          "せんせいは がっこうに います。",
          "せんせいを がっこうに います。",
          "せんせいは がっこうへ あります。"
        ],
        answer: 1,
        explanation: "คนใช้ います และสถานที่ที่อยู่ใช้ に"
      }
    ]
  },

  {
    id: 164,
    title: "ถามว่าสิ่งของอยู่ที่ไหน",
    subtitle: "どこに ありますか",
    sections: [
      {
        type: "concept",
        title: "ถามตำแหน่ง",
        content: `
          <p>
            ถ้าต้องการถามว่าสิ่งของอยู่ที่ไหน
            สามารถใช้
          </p>

          <div class="example-box">
            <p><strong>どこに ありますか。</strong></p>
            <p>อยู่ที่ไหน?</p>
          </div>

          <p>
            ถ้าเป็นคนหรือสัตว์ สามารถใช้
            <strong>どこに いますか</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> ほんは どこに ありますか。</p>
            <p>หนังสืออยู่ที่ไหน?</p>

            <p><strong>B:</strong> つくえの うえに あります。</p>
            <p>อยู่บนโต๊ะ</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> せんせいは どこに いますか。</p>
            <p>ครูอยู่ที่ไหน?</p>

            <p><strong>B:</strong> きょうしつに います。</p>
            <p>อยู่ในห้องเรียน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「どこ」 หมายถึงอะไร?",
        choices: [
          "ใคร",
          "อะไร",
          "ที่ไหน",
          "เมื่อไร"
        ],
        answer: 2,
        explanation: "どこ = ที่ไหน"
      }
    ]
  },

  {
    id: 165,
    title: "ทบทวนตำแหน่งและการมีอยู่",
    subtitle: "あります・います",
    sections: [
      {
        type: "concept",
        title: "สรุปบท",
        content: `
          <div class="example-box">
            <p><strong>あります</strong></p>
            <p>ใช้กับสิ่งของ / สิ่งไม่มีชีวิต</p>

            <p><strong>います</strong></p>
            <p>ใช้กับคน / สัตว์</p>

            <p><strong>に</strong></p>
            <p>ใช้บอกตำแหน่งที่มีหรืออยู่</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ประโยคสำคัญ",
        content: `
          <div class="example-box">
            <p>ほんが あります。</p>
            <p>มีหนังสือ</p>

            <p>ねこが います。</p>
            <p>มีแมว</p>

            <p>ほんは つくえの うえに あります。</p>
            <p>หนังสืออยู่บนโต๊ะ</p>

            <p>ねこは へやに います。</p>
            <p>แมวอยู่ในห้อง</p>

            <p>ほんは どこに ありますか。</p>
            <p>หนังสืออยู่ที่ไหน?</p>

            <p>せんせいは どこに いますか。</p>
            <p>ครูอยู่ที่ไหน?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดถูกต้องสำหรับ \"มีหนังสือ\"?",
        choices: [
          "ほんが います。",
          "ほんが あります。",
          "ほんを います。",
          "ほんへ あります。"
        ],
        answer: 1,
        explanation: "หนังสือเป็นสิ่งของ จึงใช้ あります"
      },
      {
        type: "practice",
        question: "ข้อใดถูกต้องสำหรับ \"มีแมว\"?",
        choices: [
          "ねこが あります。",
          "ねこを あります。",
          "ねこが います。",
          "ねこへ います。"
        ],
        answer: 2,
        explanation: "แมวเป็นสัตว์ จึงใช้ います"
      },
      {
        type: "practice",
        question: "「ほんは どこに ありますか」 หมายถึงอะไร?",
        choices: [
          "หนังสือคืออะไร?",
          "หนังสือของใคร?",
          "หนังสืออยู่ที่ไหน?",
          "หนังสือใหม่ไหม?"
        ],
        answer: 2,
        explanation: "どこ = ที่ไหน และ あります = มี/อยู่ สำหรับสิ่งของ"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "あります = มี/อยู่ สำหรับสิ่งของ",
          "います = มี/อยู่ สำหรับคนและสัตว์",
          "どこ = ที่ไหน",
          "うえ = บน",
          "した = ล่าง",
          "まえ = หน้า",
          "うしろ = หลัง",
          "みぎ = ขวา",
          "ひだり = ซ้าย",
          "に ใช้บอกตำแหน่งที่มีหรืออยู่"
        ]
      },
      {
        type: "tip",
        title: "ภารกิจท้ายช่วง",
        content: `
          <p>
            ลองมองสิ่งของรอบตัวแล้วแต่งประโยคเอง
            อย่างน้อย 3 ประโยค โดยใช้
            <strong>あります</strong> หรือ
            <strong>います</strong>
          </p>

          <div class="example-box">
            <p>ตัวอย่าง:</p>
            <p>ほんは つくえの うえに あります。</p>
            <p>หนังสืออยู่บนโต๊ะ</p>
          </div>
        `
      }
    ]
  }
);

// END OF LESSON 165
// LESSON 166 CONTINUES NEXT

  lessons.push(
  {
    id: 166,
    title: "คำกริยาคืออะไร",
    subtitle: "たべます・のみます",
    sections: [
      {
        type: "concept",
        title: "เริ่มรู้จักคำกริยา",
        content: `
          <p>
            คำกริยาใช้บอกการกระทำ เช่น กิน ดื่ม ดู อ่าน เขียน ไป มา
          </p>

          <p>
            ในบทนี้เราจะเริ่มจากรูปสุภาพที่ลงท้ายด้วย
            <strong>ます</strong>
            ซึ่งเป็นรูปที่ใช้บ่อยมากในบทสนทนาระดับเริ่มต้น
          </p>

          <div class="example-box">
            <p>たべます = กิน</p>
            <p>のみます = ดื่ม</p>
            <p>みます = ดู</p>
            <p>よみます = อ่าน</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำกริยาชุดแรก",
        items: [
          {
            jp: "たべます",
            reading: "tabemasu",
            thai: "ทะเบะมะสุ",
            meaning: "กิน"
          },
          {
            jp: "のみます",
            reading: "nomimasu",
            thai: "โนะมิมะสุ",
            meaning: "ดื่ม"
          },
          {
            jp: "みます",
            reading: "mimasu",
            thai: "มิมะสุ",
            meaning: "ดู"
          },
          {
            jp: "よみます",
            reading: "yomimasu",
            thai: "โยะมิมะสุ",
            meaning: "อ่าน"
          },
          {
            jp: "かきます",
            reading: "kakimasu",
            thai: "คะคิมะสุ",
            meaning: "เขียน"
          }
        ]
      },
      {
        type: "practice",
        question: "「たべます」 หมายถึงอะไร?",
        choices: [
          "ดื่ม",
          "กิน",
          "อ่าน",
          "เขียน"
        ],
        answer: 1,
        explanation: "たべます = กิน"
      }
    ]
  },

  {
    id: 167,
    title: "กรรมของกริยา",
    subtitle: "を",
    sections: [
      {
        type: "concept",
        title: "คำช่วย を",
        content: `
          <p>
            เมื่อพูดถึงสิ่งที่เราทำต่อสิ่งใดสิ่งหนึ่ง
            มักใช้คำช่วย <strong>を</strong>
            เชื่อมระหว่างสิ่งของกับคำกริยา
          </p>

          <div class="example-box">
            <p>パンを たべます。</p>
            <p>กินขนมปัง</p>

            <p>みずを のみます。</p>
            <p>ดื่มน้ำ</p>
          </div>

          <p>
            จำโครงสร้างพื้นฐาน:
          </p>

          <div class="example-box">
            <p><strong>สิ่งที่ทำ + を + คำกริยา</strong></p>
          </div>

          <p>
            ในการพูดจริง <strong>を</strong> ในฐานะคำช่วย
            ออกเสียงใกล้เคียงกับ "โอะ" หรือเสียง o
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "パン",
            reading: "pan",
            thai: "ปัง",
            meaning: "ขนมปัง"
          },
          {
            jp: "みず",
            reading: "mizu",
            thai: "มิซุ",
            meaning: "น้ำ"
          },
          {
            jp: "ごはん",
            reading: "gohan",
            thai: "โกะฮัง",
            meaning: "ข้าว / อาหาร"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างประโยค",
        content: `
          <div class="example-box">
            <p>ごはんを たべます。</p>
            <p>กินข้าว</p>

            <p>みずを のみます。</p>
            <p>ดื่มน้ำ</p>

            <p>ほんを よみます。</p>
            <p>อ่านหนังสือ</p>

            <p>てがみを かきます。</p>
            <p>เขียนจดหมาย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำ: 「みず ___ のみます。」",
        choices: [
          "は",
          "が",
          "を",
          "に"
        ],
        answer: 2,
        explanation: "สิ่งที่ดื่มเป็นกรรมของกริยา จึงใช้ を"
      }
    ]
  },

  {
    id: 168,
    title: "ดู ฟัง อ่าน เขียน",
    subtitle: "みます・ききます・よみます・かきます",
    sections: [
      {
        type: "vocab",
        title: "คำกริยาที่ใช้บ่อย",
        items: [
          {
            jp: "みます",
            reading: "mimasu",
            thai: "มิมะสุ",
            meaning: "ดู"
          },
          {
            jp: "ききます",
            reading: "kikimasu",
            thai: "คิคิมะสุ",
            meaning: "ฟัง / ถาม"
          },
          {
            jp: "よみます",
            reading: "yomimasu",
            thai: "โยะมิมะสุ",
            meaning: "อ่าน"
          },
          {
            jp: "かきます",
            reading: "kakimasu",
            thai: "คะคิมะสุ",
            meaning: "เขียน"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>テレビを みます。</p>
            <p>ดูโทรทัศน์</p>

            <p>おんがくを ききます。</p>
            <p>ฟังเพลง</p>

            <p>ほんを よみます。</p>
            <p>อ่านหนังสือ</p>

            <p>てがみを かきます。</p>
            <p>เขียนจดหมาย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「おんがくを ききます」 หมายถึงอะไร?",
        choices: [
          "ดูเพลง",
          "ฟังเพลง",
          "อ่านเพลง",
          "เขียนเพลง"
        ],
        answer: 1,
        explanation: "おんがく = เพลง/ดนตรี และ ききます = ฟัง"
      },
      {
        type: "practice",
        question: "「ほんを よみます」 หมายถึงอะไร?",
        choices: [
          "เขียนหนังสือ",
          "ฟังหนังสือ",
          "อ่านหนังสือ",
          "ซื้อหนังสือ"
        ],
        answer: 2,
        explanation: "よみます = อ่าน"
      }
    ]
  },

  {
    id: 169,
    title: "ถามว่าทำอะไร",
    subtitle: "なにを しますか",
    sections: [
      {
        type: "concept",
        title: "なに = อะไร",
        content: `
          <p>
            คำว่า <strong>なに</strong> หมายถึง "อะไร"
            เมื่อนำมาใช้กับ を และคำกริยา
            สามารถถามว่า "ทำอะไร" หรือ
            "ทำอะไรกับสิ่งนั้น" ได้
          </p>

          <div class="example-box">
            <p>なにを たべますか。</p>
            <p>กินอะไร?</p>

            <p>なにを のみますか。</p>
            <p>ดื่มอะไร?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> なにを たべますか。</p>
            <p>กินอะไร?</p>

            <p><strong>B:</strong> パンを たべます。</p>
            <p>กินขนมปัง</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> なにを のみますか。</p>
            <p>ดื่มอะไร?</p>

            <p><strong>B:</strong> みずを のみます。</p>
            <p>ดื่มน้ำ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「なに」 หมายถึงอะไร?",
        choices: [
          "ใคร",
          "ที่ไหน",
          "อะไร",
          "เมื่อไร"
        ],
        answer: 2,
        explanation: "なに = อะไร"
      }
    ]
  },

  {
    id: 170,
    title: "รูปปฏิเสธของคำกริยา",
    subtitle: "たべません",
    sections: [
      {
        type: "concept",
        title: "ます → ません",
        content: `
          <p>
            คำกริยารูปสุภาพที่ลงท้ายด้วย
            <strong>ます</strong>
            สามารถเปลี่ยนเป็นรูปปฏิเสธโดยใช้
            <strong>ません</strong>
          </p>

          <div class="example-box">
            <p>たべます = กิน</p>
            <p>たべません = ไม่กิน</p>

            <p>のみます = ดื่ม</p>
            <p>のみません = ไม่ดื่ม</p>

            <p>みます = ดู</p>
            <p>みません = ไม่ดู</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>パンを たべません。</p>
            <p>ไม่กินขนมปัง</p>

            <p>コーヒーを のみません。</p>
            <p>ไม่ดื่มกาแฟ</p>

            <p>テレビを みません。</p>
            <p>ไม่ดูโทรทัศน์</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「よみます」 รูปปฏิเสธคืออะไร?",
        choices: [
          "よみないです",
          "よみません",
          "よみでした",
          "よみじゃありません"
        ],
        answer: 1,
        explanation: "ในรูปสุภาพปัจจุบัน/อนาคต ます → ません"
      }
    ]
  },

  {
    id: 171,
    title: "ถามว่าใช่ไหม",
    subtitle: "ますか・ませんか",
    sections: [
      {
        type: "concept",
        title: "คำถามด้วย か",
        content: `
          <p>
            ถ้านำ <strong>か</strong> ไปต่อท้ายประโยค
            จะเปลี่ยนประโยคให้เป็นคำถาม
          </p>

          <div class="example-box">
            <p>たべます。</p>
            <p>กิน</p>

            <p>たべますか。</p>
            <p>กินไหม?</p>
          </div>

          <p>
            ส่วน <strong>ませんか</strong>
            สามารถใช้ชวนหรือเสนออย่างสุภาพได้
          </p>

          <div class="example-box">
            <p>いっしょに たべませんか。</p>
            <p>มากินด้วยกันไหม?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> みずを のみますか。</p>
            <p>ดื่มน้ำไหม?</p>

            <p><strong>B:</strong> はい、のみます。</p>
            <p>ใช่ ดื่ม</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> いっしょに べんきょうしませんか。</p>
            <p>มาเรียนด้วยกันไหม?</p>

            <p><strong>B:</strong> はい。</p>
            <p>ได้</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「たべますか」 มีความหมายใกล้เคียงข้อใด?",
        choices: [
          "กินไหม?",
          "ไม่กิน",
          "กินแล้ว",
          "กำลังกิน"
        ],
        answer: 0,
        explanation: "เติม か ท้ายประโยคเพื่อทำเป็นคำถาม"
      }
    ]
  },

  {
    id: 172,
    title: "คำกริยารูปอดีต",
    subtitle: "たべました",
    sections: [
      {
        type: "concept",
        title: "ます → ました",
        content: `
          <p>
            ถ้าต้องการบอกว่าการกระทำเกิดขึ้นแล้ว
            ในรูปสุภาพให้เปลี่ยน
            <strong>ます → ました</strong>
          </p>

          <div class="example-box">
            <p>たべます = กิน</p>
            <p>たべました = กินแล้ว</p>

            <p>のみます = ดื่ม</p>
            <p>のみました = ดื่มแล้ว</p>

            <p>みます = ดู</p>
            <p>みました = ดูแล้ว</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ごはんを たべました。</p>
            <p>กินข้าวแล้ว</p>

            <p>みずを のみました。</p>
            <p>ดื่มน้ำแล้ว</p>

            <p>えいがを みました。</p>
            <p>ดูภาพยนตร์แล้ว</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「たべました」 หมายถึงอะไร?",
        choices: [
          "จะกิน",
          "ไม่กิน",
          "กินแล้ว",
          "กินไหม"
        ],
        answer: 2,
        explanation: "ました เป็นรูปอดีตสุภาพของ ます"
      }
    ]
  },

  {
    id: 173,
    title: "ปฏิเสธอดีตของคำกริยา",
    subtitle: "たべませんでした",
    sections: [
      {
        type: "concept",
        title: "ไม่ได้ทำ",
        content: `
          <p>
            ถ้าต้องการบอกว่า "ไม่ได้ทำ"
            ในอดีต ใช้
            <strong>ませんでした</strong>
          </p>

          <div class="example-box">
            <p>たべます → たべません</p>
            <p>กิน → ไม่กิน</p>

            <p>たべました → たべませんでした</p>
            <p>กินแล้ว → ไม่ได้กิน</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>あさごはんを たべませんでした。</p>
            <p>ไม่ได้กินอาหารเช้า</p>

            <p>テレビを みませんでした。</p>
            <p>ไม่ได้ดูโทรทัศน์</p>

            <p>ほんを よみませんでした。</p>
            <p>ไม่ได้อ่านหนังสือ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「のみませんでした」 หมายถึงอะไร?",
        choices: [
          "ดื่ม",
          "ไม่ดื่ม",
          "ดื่มแล้ว",
          "ไม่ได้ดื่ม"
        ],
        answer: 3,
        explanation: "ませんでした = ไม่ได้ทำในอดีต"
      }
    ]
  },

  {
    id: 174,
    title: "สี่รูปของคำกริยา",
    subtitle: "ます・ません・ました・ませんでした",
    sections: [
      {
        type: "concept",
        title: "ตารางจำ",
        content: `
          <div class="example-box">
            <p><strong>たべます</strong> = กิน</p>
            <p><strong>たべません</strong> = ไม่กิน</p>
            <p><strong>たべました</strong> = กินแล้ว</p>
            <p><strong>たべませんでした</strong> = ไม่ได้กิน</p>
          </div>

          <p>
            ทั้งสี่รูปนี้เป็นพื้นฐานสำคัญมาก
            เพราะสามารถนำไปใช้กับคำกริยาหลายคำ
          </p>
        `
      },
      {
        type: "example",
        title: "ลองเปลี่ยนกับคำอื่น",
        content: `
          <div class="example-box">
            <p>のみます → のみません → のみました → のみませんでした</p>
            <p>ดื่ม → ไม่ดื่ม → ดื่มแล้ว → ไม่ได้ดื่ม</p>

            <p>みます → みません → みました → みませんでした</p>
            <p>ดู → ไม่ดู → ดูแล้ว → ไม่ได้ดู</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"ไม่ได้อ่าน\"?",
        choices: [
          "よみます",
          "よみません",
          "よみました",
          "よみませんでした"
        ],
        answer: 3,
        explanation: "よみませんでした = ไม่ได้อ่าน"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "ます = รูปสุภาพพื้นฐาน",
          "ません = ปฏิเสธ",
          "ました = อดีต",
          "ませんでした = ปฏิเสธอดีต",
          "か = ทำให้ประโยคเป็นคำถาม"
        ]
      }
    ]
  },

  {
    id: 175,
    title: "ไป มา กลับ",
    subtitle: "いきます・きます・かえります",
    sections: [
      {
        type: "vocab",
        title: "คำกริยาการเดินทาง",
        items: [
          {
            jp: "いきます",
            reading: "ikimasu",
            thai: "อิคิมะสุ",
            meaning: "ไป"
          },
          {
            jp: "きます",
            reading: "kimasu",
            thai: "คิมะสุ",
            meaning: "มา"
          },
          {
            jp: "かえります",
            reading: "kaerimasu",
            thai: "คะเอะริมะสุ",
            meaning: "กลับ"
          }
        ]
      },
      {
        type: "concept",
        title: "ความแตกต่าง",
        content: `
          <div class="example-box">
            <p>いきます = ไปจากจุดอ้างอิงไปยังที่อื่น</p>
            <p>きます = มาเข้าหาจุดอ้างอิง</p>
            <p>かえります = กลับไปยังสถานที่ที่ถือว่าเป็นจุดหมาย/บ้าน</p>
          </div>

          <p>
            ตอนแรกอาจสับสนระหว่าง いきます กับ きます
            ให้คิดจากมุมมองของผู้พูดเป็นหลัก
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうに いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>せんせいが きます。</p>
            <p>ครูมา</p>

            <p>うちに かえります。</p>
            <p>กลับบ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いきます」 หมายถึงอะไร?",
        choices: [
          "มา",
          "ไป",
          "กลับ",
          "อยู่"
        ],
        answer: 1,
        explanation: "いきます = ไป"
      }
    ]
  },

  {
    id: 176,
    title: "ไปที่ไหน",
    subtitle: "～に いきます",
    sections: [
      {
        type: "concept",
        title: "คำช่วย に กับจุดหมาย",
        content: `
          <p>
            เมื่อบอกจุดหมายของการไป
            สามารถใช้ <strong>に</strong>
          </p>

          <div class="example-box">
            <p>がっこうに いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>にほんに いきます。</p>
            <p>ไปญี่ปุ่น</p>
          </div>

          <p>
            ในบริบทการเดินทาง
            <strong>へ</strong> ก็สามารถใช้กับจุดหมายได้เช่นกัน
            และในบทสนทนาระดับเริ่มต้นทั้งสองรูปพบได้บ่อย
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうに いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>スーパーに いきます。</p>
            <p>ไปซูเปอร์มาร์เก็ต</p>

            <p>うちに かえります。</p>
            <p>กลับบ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำ: 「がっこう ___ いきます。」",
        choices: [
          "を",
          "が",
          "に",
          "の"
        ],
        answer: 2,
        explanation: "に ใช้บอกจุดหมายของการไป"
      }
    ]
  },

  {
    id: 177,
    title: "ถามว่าไปที่ไหน",
    subtitle: "どこに いきますか",
    sections: [
      {
        type: "concept",
        title: "ถามจุดหมาย",
        content: `
          <p>
            ใช้ <strong>どこ</strong> = ที่ไหน
            ร่วมกับ <strong>に</strong> และ いきます
            เพื่อถามว่าไปที่ไหน
          </p>

          <div class="example-box">
            <p>どこに いきますか。</p>
            <p>ไปที่ไหน?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> どこに いきますか。</p>
            <p>ไปที่ไหน?</p>

            <p><strong>B:</strong> がっこうに いきます。</p>
            <p>ไปโรงเรียน</p>
          </div>

          <div class="dialogue-box">
            <p><strong>A:</strong> どこに かえりますか。</p>
            <p>กลับที่ไหน?</p>

            <p><strong>B:</strong> うちに かえります。</p>
            <p>กลับบ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「どこに いきますか」 หมายถึงอะไร?",
        choices: [
          "ใครไป?",
          "ไปที่ไหน?",
          "ไปเมื่อไร?",
          "ไปกับใคร?"
        ],
        answer: 1,
        explanation: "どこ = ที่ไหน และ に + いきます = ไปยัง..."
      }
    ]
  },

  {
    id: 178,
    title: "การเดินทางด้วยอะไร",
    subtitle: "で",
    sections: [
      {
        type: "concept",
        title: "คำช่วย で",
        content: `
          <p>
            คำช่วย <strong>で</strong>
            สามารถใช้บอกวิธีการหรือพาหนะที่ใช้ในการเดินทาง
          </p>

          <div class="example-box">
            <p>でんしゃで いきます。</p>
            <p>ไปโดยรถไฟ</p>

            <p>バスで いきます。</p>
            <p>ไปโดยรถบัส</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "พาหนะ",
        items: [
          {
            jp: "でんしゃ",
            reading: "densha",
            thai: "เด็นฉะ",
            meaning: "รถไฟ"
          },
          {
            jp: "バス",
            reading: "basu",
            thai: "บะสุ",
            meaning: "รถบัส"
          },
          {
            jp: "じてんしゃ",
            reading: "jitensha",
            thai: "จิเท็นฉะ",
            meaning: "จักรยาน"
          },
          {
            jp: "くるま",
            reading: "kuruma",
            thai: "คุรุมะ",
            meaning: "รถยนต์"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>でんしゃで がっこうに いきます。</p>
            <p>ไปโรงเรียนโดยรถไฟ</p>

            <p>バスで うちに かえります。</p>
            <p>กลับบ้านโดยรถบัส</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ในประโยค 「バスで いきます」 คำว่า で ทำหน้าที่อะไร?",
        choices: [
          "บอกจุดหมาย",
          "บอกผู้กระทำ",
          "บอกพาหนะ/วิธีการ",
          "บอกเวลา"
        ],
        answer: 2,
        explanation: "で ใช้บอกพาหนะหรือวิธีการเดินทางในประโยคนี้"
      }
    ]
  },

  {
    id: 179,
    title: "ไปกับใคร",
    subtitle: "ともだちと いきます",
    sections: [
      {
        type: "concept",
        title: "คำช่วย と",
        content: `
          <p>
            คำช่วย <strong>と</strong>
            ใช้บอกว่าทำสิ่งใดร่วมกับใคร
          </p>

          <div class="example-box">
            <p>ともだちと いきます。</p>
            <p>ไปกับเพื่อน</p>
          </div>

          <p>
            จำง่าย ๆ ว่า
            <strong>A と B</strong>
            ในรูปแบบนี้สามารถสื่อความหมายว่า
            "A กับ B"
          </p>
        `
      },
      {
        type: "vocab",
        title: "คนที่ใช้ในประโยค",
        items: [
          {
            jp: "ともだち",
            reading: "tomodachi",
            thai: "โทะโมะดะจิ",
            meaning: "เพื่อน"
          },
          {
            jp: "かぞく",
            reading: "kazoku",
            thai: "คะโซะคุ",
            meaning: "ครอบครัว"
          },
          {
            jp: "せんせい",
            reading: "sensei",
            thai: "เซ็นเซ",
            meaning: "ครู"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ともだちと がっこうに いきます。</p>
            <p>ไปโรงเรียนกับเพื่อน</p>

            <p>かぞくと りょこうします。</p>
            <p>ท่องเที่ยวกับครอบครัว</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ともだちと いきます」 หมายถึงอะไร?",
        choices: [
          "ไปหาเพื่อน",
          "ไปกับเพื่อน",
          "ไปที่บ้านเพื่อน",
          "เพื่อนไป"
        ],
        answer: 1,
        explanation: "と ในที่นี้ใช้บอกผู้ที่ไปด้วยกัน"
      }
    ]
  },

  {
    id: 180,
    title: "ทบทวนการเดินทาง",
    subtitle: "に・で・と",
    sections: [
      {
        type: "concept",
        title: "สามคำช่วยที่เจอบ่อย",
        content: `
          <div class="example-box">
            <p><strong>に</strong> → จุดหมาย</p>
            <p>がっこうに いきます。</p>

            <p><strong>で</strong> → พาหนะ / วิธีการ</p>
            <p>でんしゃで いきます。</p>

            <p><strong>と</strong> → ไปกับใคร</p>
            <p>ともだちと いきます。</p>
          </div>
        `
      },
      {
        type: "example",
        title: "รวมทุกอย่าง",
        content: `
          <div class="example-box">
            <p>ともだちと でんしゃで がっこうに いきます。</p>
            <p>ไปโรงเรียนกับเพื่อนโดยรถไฟ</p>
          </div>

          <p>
            ประโยคนี้ยาวขึ้น แต่ถ้าแยกทีละส่วนจะเข้าใจง่าย:
          </p>

          <div class="example-box">
            <p>ともだちと = กับเพื่อน</p>
            <p>でんしゃで = โดยรถไฟ</p>
            <p>がっこうに = ไปโรงเรียน</p>
            <p>いきます = ไป</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำช่วยใดใช้บอกพาหนะ?",
        choices: [
          "に",
          "で",
          "と",
          "を"
        ],
        answer: 1,
        explanation: "で ใช้บอกพาหนะหรือวิธีการเดินทาง"
      },
      {
        type: "practice",
        question: "คำช่วยใดใช้บอกว่าไปกับใคร?",
        choices: [
          "は",
          "が",
          "と",
          "の"
        ],
        answer: 2,
        explanation: "と ใช้บอกผู้ที่ทำสิ่งนั้นร่วมกัน"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "いきます = ไป",
          "きます = มา",
          "かえります = กลับ",
          "に ใช้บอกจุดหมาย",
          "で ใช้บอกพาหนะหรือวิธีการ",
          "と ใช้บอกผู้ที่ไปด้วย"
        ]
      }
    ]
  },

  {
    id: 181,
    title: "เวลาในภาษาญี่ปุ่น",
    subtitle: "いま なんじですか",
    sections: [
      {
        type: "concept",
        title: "ถามเวลา",
        content: `
          <p>
            คำว่า <strong>いま</strong> หมายถึง "ตอนนี้"
          </p>

          <p>
            ถ้าต้องการถามว่า "ตอนนี้กี่โมง"
            ใช้ประโยค
          </p>

          <div class="example-box">
            <p><strong>いま なんじですか。</strong></p>
            <p>ตอนนี้กี่โมง?</p>
          </div>

          <p>
            なんじ = กี่โมง
          </p>
        `
      },
      {
        type: "vocab",
        title: "ตัวเลขสำหรับบอกเวลา",
        items: [
          {
            jp: "いちじ",
            reading: "ichiji",
            thai: "อิจิจิ",
            meaning: "1 นาฬิกา"
          },
          {
            jp: "にじ",
            reading: "niji",
            thai: "นิจิ",
            meaning: "2 นาฬิกา"
          },
          {
            jp: "さんじ",
            reading: "sanji",
            thai: "ซันจิ",
            meaning: "3 นาฬิกา"
          },
          {
            jp: "よじ",
            reading: "yoji",
            thai: "โยจิ",
            meaning: "4 นาฬิกา"
          },
          {
            jp: "ごじ",
            reading: "goji",
            thai: "โกจิ",
            meaning: "5 นาฬิกา"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>いま さんじです。</p>
            <p>ตอนนี้ 3 โมง</p>

            <p>いま ごじです。</p>
            <p>ตอนนี้ 5 โมง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「なんじ」 หมายถึงอะไร?",
        choices: [
          "กี่คน",
          "กี่โมง",
          "ที่ไหน",
          "วันอะไร"
        ],
        answer: 1,
        explanation: "なんじ = กี่โมง"
      }
    ]
  },

  {
    id: 182,
    title: "ชั่วโมงและนาที",
    subtitle: "～じ・～ふん",
    sections: [
      {
        type: "concept",
        title: "บอกชั่วโมง",
        content: `
          <p>
            คำว่า <strong>じ</strong> ใช้ต่อท้ายตัวเลขเพื่อบอกชั่วโมง
          </p>

          <div class="example-box">
            <p>いちじ = 1 โมง</p>
            <p>にじ = 2 โมง</p>
            <p>さんじ = 3 โมง</p>
            <p>よじ = 4 โมง</p>
            <p>ごじ = 5 โมง</p>
            <p>ろくじ = 6 โมง</p>
          </div>

          <p>
            ส่วนนาทีใช้หน่วย <strong>ふん / ぷん</strong>
            ซึ่งเสียงอาจเปลี่ยนตามตัวเลข
          </p>
        `
      },
      {
        type: "vocab",
        title: "นาทีที่พบบ่อย",
        items: [
          {
            jp: "いっぷん",
            reading: "ippun",
            thai: "อิปปุน",
            meaning: "1 นาที"
          },
          {
            jp: "ごふん",
            reading: "gofun",
            thai: "โกะฟุน",
            meaning: "5 นาที"
          },
          {
            jp: "じゅっぷん",
            reading: "juppun",
            thai: "จุปปุน",
            meaning: "10 นาที"
          },
          {
            jp: "じゅうごふん",
            reading: "juugofun",
            thai: "จูโกะฟุน",
            meaning: "15 นาที"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>さんじ ごふん</p>
            <p>3 นาฬิกา 5 นาที</p>

            <p>ごじ じゅっぷん</p>
            <p>5 นาฬิกา 10 นาที</p>
          </div>
        `
      },
      {
        type: "tip",
        title: "ค่อย ๆ จำ",
        content: `
          <p>
            การอ่านนาทีมีการเปลี่ยนเสียงหลายจุด
            ไม่จำเป็นต้องจำทั้งหมดในครั้งเดียว
            ให้เริ่มจากชั่วโมงก่อน แล้วค่อยเพิ่มนาทีทีละชุด
          </p>
        `
      }
    ]
  },

  {
    id: 183,
    title: "ช่วงเช้าและช่วงเย็น",
    subtitle: "ごぜん・ごご",
    sections: [
      {
        type: "vocab",
        title: "ช่วงเวลา",
        items: [
          {
            jp: "ごぜん",
            reading: "gozen",
            thai: "โกะเซ็น",
            meaning: "ก่อนเที่ยง / AM"
          },
          {
            jp: "ごご",
            reading: "gogo",
            thai: "โกะโกะ",
            meaning: "หลังเที่ยง / PM"
          },
          {
            jp: "あさ",
            reading: "asa",
            thai: "อะสะ",
            meaning: "ตอนเช้า"
          },
          {
            jp: "ひる",
            reading: "hiru",
            thai: "ฮิรุ",
            meaning: "ตอนกลางวัน"
          },
          {
            jp: "よる",
            reading: "yoru",
            thai: "โยะรุ",
            meaning: "ตอนกลางคืน"
          }
        ]
      },
      {
        type: "concept",
        title: "วาง ごぜん / ごご ไว้หน้าเวลา",
        content: `
          <div class="example-box">
            <p>ごぜん くじ</p>
            <p>9 โมงเช้า</p>

            <p>ごご さんじ</p>
            <p>3 โมงเย็น</p>
          </div>

          <p>
            จึงสามารถระบุช่วงเวลาได้ชัดเจนว่าเป็น AM หรือ PM
          </p>
        `
      },
      {
        type: "example",
        title: "ประโยค",
        content: `
          <div class="example-box">
            <p>ごぜん しちじに おきます。</p>
            <p>ตื่น 7 โมงเช้า</p>

            <p>ごご じゅうじに ねます。</p>
            <p>นอน 4 ทุ่ม</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ごご」 หมายถึงอะไร?",
        choices: [
          "ก่อนเที่ยง",
          "หลังเที่ยง",
          "ตอนเช้า",
          "ตอนกลางคืนเท่านั้น"
        ],
        answer: 1,
        explanation: "ごご = หลังเที่ยง หรือ PM"
      }
    ]
  },

  {
    id: 184,
    title: "ทำอะไรตอนกี่โมง",
    subtitle: "～じに",
    sections: [
      {
        type: "concept",
        title: "คำช่วย に กับเวลา",
        content: `
          <p>
            เมื่อระบุเวลาที่แน่นอนว่าการกระทำเกิดขึ้นเมื่อไร
            สามารถใช้ <strong>に</strong> หลังเวลา
          </p>

          <div class="example-box">
            <p>しちじに おきます。</p>
            <p>ตื่นตอน 7 โมง</p>

            <p>じゅうじに ねます。</p>
            <p>นอนตอน 4 ทุ่ม</p>
          </div>
        `
      },
      {
        type: "example",
        title: "กิจวัตรประจำวัน",
        content: `
          <div class="example-box">
            <p>ろくじに おきます。</p>
            <p>ตื่น 6 โมง</p>

            <p>しちじに あさごはんを たべます。</p>
            <p>กินอาหารเช้า 7 โมง</p>

            <p>はちじに がっこうに いきます。</p>
            <p>ไปโรงเรียน 8 โมง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "เติมคำ: 「ろくじ ___ おきます。」",
        choices: [
          "を",
          "に",
          "で",
          "と"
        ],
        answer: 1,
        explanation: "に ใช้หลังเวลาที่ระบุชัดเจนเพื่อบอกเวลาของการกระทำ"
      }
    ]
  },

  {
    id: 185,
    title: "กิจวัตรประจำวัน",
    subtitle: "まいにち なにを しますか",
    sections: [
      {
        type: "concept",
        title: "เล่าเรื่องหนึ่งวันของตัวเอง",
        content: `
          <p>
            ตอนนี้เราสามารถนำคำกริยา เวลา และสถานที่
            มารวมกันเป็นเรื่องราวสั้น ๆ ได้แล้ว
          </p>

          <div class="example-box">
            <p>ろくじに おきます。</p>
            <p>ตื่น 6 โมง</p>

            <p>しちじに あさごはんを たべます。</p>
            <p>กินอาหารเช้า 7 โมง</p>

            <p>はちじに がっこうに いきます。</p>
            <p>ไปโรงเรียน 8 โมง</p>

            <p>ごご ごじに うちに かえります。</p>
            <p>กลับบ้าน 5 โมงเย็น</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "กิจวัตรเพิ่มเติม",
        items: [
          {
            jp: "おきます",
            reading: "okimasu",
            thai: "โอะคิมะสุ",
            meaning: "ตื่น"
          },
          {
            jp: "ねます",
            reading: "nemasu",
            thai: "เนะมะสุ",
            meaning: "นอน"
          },
          {
            jp: "べんきょうします",
            reading: "benkyou shimasu",
            thai: "เบ็นเคียว ชิมะสุ",
            meaning: "เรียน / เรียนหนังสือ"
          },
          {
            jp: "はたらきます",
            reading: "hatarakimasu",
            thai: "ฮะตะระคิมะสุ",
            meaning: "ทำงาน"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างยาวขึ้น",
        content: `
          <div class="dialogue-box">
            <p>わたしは まいにち ろくじに おきます。</p>
            <p>ฉันตื่น 6 โมงทุกวัน</p>

            <p>あさごはんを たべます。</p>
            <p>กินอาหารเช้า</p>

            <p>はちじに がっこうに いきます。</p>
            <p>ไปโรงเรียน 8 โมง</p>

            <p>ごご ごじに うちに かえります。</p>
            <p>กลับบ้าน 5 โมงเย็น</p>

            <p>よる じゅうじに ねます。</p>
            <p>นอน 4 ทุ่ม</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「おきます」 หมายถึงอะไร?",
        choices: [
          "นอน",
          "ตื่น",
          "กลับ",
          "เรียน"
        ],
        answer: 1,
        explanation: "おきます = ตื่น"
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"นอนตอน 4 ทุ่ม\"?",
        choices: [
          "じゅうじに おきます。",
          "じゅうじに ねます。",
          "じゅうじを ねます。",
          "じゅうじで ねます。"
        ],
        answer: 1,
        explanation: "じゅうじに = ตอน 10 โมง และ ねます = นอน"
      },
      {
        type: "tip",
        title: "ภารกิจฝึกพูด",
        content: `
          <p>
            ลองเล่ากิจวัตรของตัวเองเป็นภาษาญี่ปุ่นอย่างน้อย 3 ประโยค
          </p>

          <div class="example-box">
            <p>ろくじに おきます。</p>
            <p>あさごはんを たべます。</p>
            <p>がっこうに いきます。</p>
          </div>

          <p>
            ยังไม่ต้องแต่งให้ซับซ้อน
            ขอแค่ให้เริ่มคิดเป็นประโยคภาษาญี่ปุ่นทีละส่วน
          </p>
        `
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "なに = อะไร",
          "を ใช้บอกกรรมของกริยา",
          "ます = รูปสุภาพพื้นฐาน",
          "ません = ปฏิเสธ",
          "ました = อดีต",
          "ませんでした = ปฏิเสธอดีต",
          "いきます = ไป",
          "きます = มา",
          "かえります = กลับ",
          "に ใช้บอกจุดหมายและเวลาในบางโครงสร้าง",
          "で ใช้บอกพาหนะหรือวิธีการ",
          "と ใช้บอกผู้ที่ทำสิ่งนั้นร่วมกัน",
          "おきます = ตื่น",
          "ねます = นอน"
        ]
      }
    ]
  }
);

// END OF LESSON 185
// LESSON 186 CONTINUES NEXT

  lessons.push(
  {
    id: 186,
    title: "วันในหนึ่งสัปดาห์",
    subtitle: "げつようび・かようび・すいようび",
    sections: [
      {
        type: "concept",
        title: "ชื่อวันทั้ง 7 วัน",
        content: `
          <p>
            ภาษาญี่ปุ่นมีชื่อวัน 7 วัน โดยลงท้ายด้วย
            <strong>ようび</strong> ซึ่งหมายถึง "วัน"
          </p>

          <div class="example-box">
            <p>げつようび = วันจันทร์</p>
            <p>かようび = วันอังคาร</p>
            <p>すいようび = วันพุธ</p>
            <p>もくようび = วันพฤหัสบดี</p>
            <p>きんようび = วันศุกร์</p>
            <p>どようび = วันเสาร์</p>
            <p>にちようび = วันอาทิตย์</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "วันทั้ง 7",
        items: [
          {
            jp: "げつようび",
            reading: "getsuyoubi",
            thai: "เก็ตสึโยบิ",
            meaning: "วันจันทร์"
          },
          {
            jp: "かようび",
            reading: "kayoubi",
            thai: "คะโยบิ",
            meaning: "วันอังคาร"
          },
          {
            jp: "すいようび",
            reading: "suiyoubi",
            thai: "ซุยโยบิ",
            meaning: "วันพุธ"
          },
          {
            jp: "もくようび",
            reading: "mokuyoubi",
            thai: "โมะคุโยบิ",
            meaning: "วันพฤหัสบดี"
          },
          {
            jp: "きんようび",
            reading: "kinyoubi",
            thai: "คินโยบิ",
            meaning: "วันศุกร์"
          },
          {
            jp: "どようび",
            reading: "doyoubi",
            thai: "โดะโยบิ",
            meaning: "วันเสาร์"
          },
          {
            jp: "にちようび",
            reading: "nichiyoubi",
            thai: "นิจิโยบิ",
            meaning: "วันอาทิตย์"
          }
        ]
      },
      {
        type: "practice",
        question: "「すいようび」 คือวันอะไร?",
        choices: [
          "วันจันทร์",
          "วันอังคาร",
          "วันพุธ",
          "วันพฤหัสบดี"
        ],
        answer: 2,
        explanation: "すいようび = วันพุธ"
      }
    ]
  },

  {
    id: 187,
    title: "วันนี้ วันพรุ่งนี้ เมื่อวาน",
    subtitle: "きょう・あした・きのう",
    sections: [
      {
        type: "vocab",
        title: "คำบอกวันที่สัมพันธ์กับวันนี้",
        items: [
          {
            jp: "きょう",
            reading: "kyou",
            thai: "เคียว",
            meaning: "วันนี้"
          },
          {
            jp: "あした",
            reading: "ashita",
            thai: "อะชิตะ",
            meaning: "พรุ่งนี้"
          },
          {
            jp: "きのう",
            reading: "kinou",
            thai: "คิโน",
            meaning: "เมื่อวาน"
          },
          {
            jp: "あさって",
            reading: "asatte",
            thai: "อะซัตเตะ",
            meaning: "มะรืนนี้"
          },
          {
            jp: "おととい",
            reading: "ototoi",
            thai: "โอะโตะโตอิ",
            meaning: "เมื่อวานซืน"
          }
        ]
      },
      {
        type: "example",
        title: "ใช้กับกิจวัตร",
        content: `
          <div class="example-box">
            <p>きょう がっこうに いきます。</p>
            <p>วันนี้ไปโรงเรียน</p>

            <p>あした べんきょうします。</p>
            <p>พรุ่งนี้เรียน</p>

            <p>きのう テレビを みました。</p>
            <p>เมื่อวานดูโทรทัศน์</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「きのう」 หมายถึงอะไร?",
        choices: [
          "วันนี้",
          "พรุ่งนี้",
          "เมื่อวาน",
          "มะรืนนี้"
        ],
        answer: 2,
        explanation: "きのう = เมื่อวาน"
      }
    ]
  },

  {
    id: 188,
    title: "สัปดาห์นี้ สัปดาห์หน้า สัปดาห์ที่แล้ว",
    subtitle: "こんしゅう・らいしゅう・せんしゅう",
    sections: [
      {
        type: "vocab",
        title: "คำศัพท์เกี่ยวกับสัปดาห์",
        items: [
          {
            jp: "こんしゅう",
            reading: "konshuu",
            thai: "คงชู",
            meaning: "สัปดาห์นี้"
          },
          {
            jp: "らいしゅう",
            reading: "raishuu",
            thai: "ไรชู",
            meaning: "สัปดาห์หน้า"
          },
          {
            jp: "せんしゅう",
            reading: "senshuu",
            thai: "เซ็นชู",
            meaning: "สัปดาห์ที่แล้ว"
          },
          {
            jp: "まいしゅう",
            reading: "maishuu",
            thai: "ไมชู",
            meaning: "ทุกสัปดาห์"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>こんしゅう がっこうに いきます。</p>
            <p>สัปดาห์นี้ไปโรงเรียน</p>

            <p>らいしゅう しけんが あります。</p>
            <p>สัปดาห์หน้ามีสอบ</p>

            <p>せんしゅう えいがを みました。</p>
            <p>สัปดาห์ที่แล้วดูหนัง</p>

            <p>まいしゅう にほんごを べんきょうします。</p>
            <p>เรียนภาษาญี่ปุ่นทุกสัปดาห์</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「らいしゅう」 หมายถึงอะไร?",
        choices: [
          "สัปดาห์นี้",
          "สัปดาห์หน้า",
          "สัปดาห์ที่แล้ว",
          "ทุกสัปดาห์"
        ],
        answer: 1,
        explanation: "らいしゅう = สัปดาห์หน้า"
      }
    ]
  },

  {
    id: 189,
    title: "เดือนทั้ง 12 เดือน",
    subtitle: "～がつ",
    sections: [
      {
        type: "concept",
        title: "ชื่อเดือน",
        content: `
          <p>
            เดือนในภาษาญี่ปุ่นส่วนใหญ่ใช้ตัวเลข + がつ
          </p>

          <div class="example-box">
            <p>いちがつ = มกราคม</p>
            <p>にがつ = กุมภาพันธ์</p>
            <p>さんがつ = มีนาคม</p>
            <p>しがつ = เมษายน</p>
            <p>ごがつ = พฤษภาคม</p>
            <p>ろくがつ = มิถุนายน</p>
            <p>しちがつ = กรกฎาคม</p>
            <p>はちがつ = สิงหาคม</p>
            <p>くがつ = กันยายน</p>
            <p>じゅうがつ = ตุลาคม</p>
            <p>じゅういちがつ = พฤศจิกายน</p>
            <p>じゅうにがつ = ธันวาคม</p>
          </div>
        `
      },
      {
        type: "tip",
        title: "จุดที่ต้องระวัง",
        content: `
          <p>
            เดือน 4 อ่านว่า <strong>しがつ</strong>
            เดือน 7 อ่านว่า <strong>しちがつ</strong>
            และเดือน 9 อ่านว่า <strong>くがつ</strong>
          </p>
        `
      },
      {
        type: "practice",
        question: "「はちがつ」 คือเดือนไหน?",
        choices: [
          "มิถุนายน",
          "กรกฎาคม",
          "สิงหาคม",
          "กันยายน"
        ],
        answer: 2,
        explanation: "はちがつ = สิงหาคม"
      }
    ]
  },

  {
    id: 190,
    title: "วันที่ในภาษาญี่ปุ่น",
    subtitle: "なんにちですか",
    sections: [
      {
        type: "concept",
        title: "ถามว่าวันที่เท่าไร",
        content: `
          <p>
            คำว่า <strong>なんにち</strong>
            ใช้ถามว่า "วันที่เท่าไร"
          </p>

          <div class="example-box">
            <p>きょうは なんにちですか。</p>
            <p>วันนี้วันที่เท่าไร?</p>
          </div>

          <p>
            วันที่หลายวันอ่านตามรูปแบบตัวเลข + にち
            แต่บางวันที่มีรูปอ่านพิเศษ จึงควรจำเป็นชุด
          </p>
        `
      },
      {
        type: "vocab",
        title: "วันที่ที่ควรจำก่อน",
        items: [
          {
            jp: "ついたち",
            reading: "tsuitachi",
            thai: "สึอิตะจิ",
            meaning: "วันที่ 1"
          },
          {
            jp: "ふつか",
            reading: "futsuka",
            thai: "ฟุตสึคะ",
            meaning: "วันที่ 2"
          },
          {
            jp: "みっか",
            reading: "mikka",
            thai: "มิกกะ",
            meaning: "วันที่ 3"
          },
          {
            jp: "よっか",
            reading: "yokka",
            thai: "ยกกะ",
            meaning: "วันที่ 4"
          },
          {
            jp: "いつか",
            reading: "itsuka",
            thai: "อิตสึคะ",
            meaning: "วันที่ 5"
          }
        ]
      },
      {
        type: "practice",
        question: "「ふつか」 คือวันที่เท่าไร?",
        choices: [
          "วันที่ 1",
          "วันที่ 2",
          "วันที่ 3",
          "วันที่ 4"
        ],
        answer: 1,
        explanation: "ふつか = วันที่ 2"
      }
    ]
  },

  {
    id: 191,
    title: "วันที่ 6–10",
    subtitle: "むいか・なのか・ようか・ここのか・とおか",
    sections: [
      {
        type: "vocab",
        title: "วันที่ที่มีรูปพิเศษ",
        items: [
          {
            jp: "むいか",
            reading: "muika",
            thai: "มุอิกะ",
            meaning: "วันที่ 6"
          },
          {
            jp: "なのか",
            reading: "nanoka",
            thai: "นะโนะกะ",
            meaning: "วันที่ 7"
          },
          {
            jp: "ようか",
            reading: "youka",
            thai: "โยกะ",
            meaning: "วันที่ 8"
          },
          {
            jp: "ここのか",
            reading: "kokonoka",
            thai: "โคะโคะโนะกะ",
            meaning: "วันที่ 9"
          },
          {
            jp: "とおか",
            reading: "tooka",
            thai: "โทโอกะ",
            meaning: "วันที่ 10"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>きょうは むいかです。</p>
            <p>วันนี้วันที่ 6</p>

            <p>たんじょうびは とおかです。</p>
            <p>วันเกิดคือวันที่ 10</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ようか」 คือวันที่เท่าไร?",
        choices: [
          "วันที่ 6",
          "วันที่ 7",
          "วันที่ 8",
          "วันที่ 9"
        ],
        answer: 2,
        explanation: "ようか = วันที่ 8"
      }
    ]
  },

  {
    id: 192,
    title: "คำบอกความถี่",
    subtitle: "まいにち・よく・ときどき",
    sections: [
      {
        type: "vocab",
        title: "ความถี่",
        items: [
          {
            jp: "まいにち",
            reading: "mainichi",
            thai: "ไมไดจิ",
            meaning: "ทุกวัน"
          },
          {
            jp: "よく",
            reading: "yoku",
            thai: "โยะคุ",
            meaning: "บ่อย"
          },
          {
            jp: "ときどき",
            reading: "tokidoki",
            thai: "โทะคิโดะคิ",
            meaning: "บางครั้ง"
          },
          {
            jp: "あまり",
            reading: "amari",
            thai: "อะมะริ",
            meaning: "ไม่ค่อย"
          },
          {
            jp: "ぜんぜん",
            reading: "zenzen",
            thai: "เซ็นเซ็น",
            meaning: "ไม่เลย"
          }
        ]
      },
      {
        type: "concept",
        title: "คำบอกความถี่กับประโยค",
        content: `
          <p>
            คำเหล่านี้มักวางไว้ก่อนคำกริยา
          </p>

          <div class="example-box">
            <p>まいにち べんきょうします。</p>
            <p>เรียนทุกวัน</p>

            <p>よく ほんを よみます。</p>
            <p>อ่านหนังสือบ่อย</p>

            <p>ときどき えいがを みます。</p>
            <p>ดูหนังบางครั้ง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「まいにち」 หมายถึงอะไร?",
        choices: [
          "ทุกวัน",
          "ทุกสัปดาห์",
          "บางครั้ง",
          "ไม่ค่อย"
        ],
        answer: 0,
        explanation: "まいにち = ทุกวัน"
      }
    ]
  },

  {
    id: 193,
    title: "ไม่ค่อยและไม่เลย",
    subtitle: "あまり・ぜんぜん",
    sections: [
      {
        type: "concept",
        title: "ใช้กับประโยคปฏิเสธ",
        content: `
          <p>
            <strong>あまり</strong> = ไม่ค่อย
            และ <strong>ぜんぜん</strong> = ไม่เลย
            โดยทั่วไปใช้ร่วมกับรูปปฏิเสธ
          </p>

          <div class="example-box">
            <p>あまり テレビを みません。</p>
            <p>ไม่ค่อยดูโทรทัศน์</p>

            <p>ぜんぜん コーヒーを のみません。</p>
            <p>ไม่ดื่มกาแฟเลย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดแปลว่า \"ไม่ค่อยอ่านหนังสือ\"?",
        choices: [
          "よく ほんを よみます。",
          "あまり ほんを よみません。",
          "まいにち ほんを よみます。",
          "ほんを よみました。"
        ],
        answer: 1,
        explanation: "あまり + รูปปฏิเสธ = ไม่ค่อย..."
      },
      {
        type: "practice",
        question: "「ぜんぜん」 มีความหมายใกล้เคียงข้อใด?",
        choices: [
          "บ่อยมาก",
          "ทุกวัน",
          "ไม่เลย",
          "บางครั้ง"
        ],
        answer: 2,
        explanation: "ぜんぜん ใช้เน้นการปฏิเสธ เช่น ไม่...เลย"
      }
    ]
  },

  {
    id: 194,
    title: "ชอบและไม่ชอบ",
    subtitle: "すきです・きらいです",
    sections: [
      {
        type: "concept",
        title: "คำว่า すき",
        content: `
          <p>
            <strong>すきです</strong> ใช้บอกว่า "ชอบ"
            และ <strong>きらいです</strong> ใช้บอกว่า "ไม่ชอบ"
          </p>

          <div class="example-box">
            <p>ねこが すきです。</p>
            <p>ชอบแมว</p>

            <p>さかなが きらいです。</p>
            <p>ไม่ชอบปลา</p>
          </div>

          <p>
            โครงสร้างพื้นฐานที่ควรจำคือ
            <strong>สิ่งที่ชอบ + が + すきです</strong>
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "すき",
            reading: "suki",
            thai: "สุกิ",
            meaning: "ชอบ"
          },
          {
            jp: "きらい",
            reading: "kirai",
            thai: "คิไร",
            meaning: "ไม่ชอบ"
          },
          {
            jp: "ねこ",
            reading: "neko",
            thai: "เนะโกะ",
            meaning: "แมว"
          },
          {
            jp: "いぬ",
            reading: "inu",
            thai: "อินุ",
            meaning: "สุนัข"
          },
          {
            jp: "おんがく",
            reading: "ongaku",
            thai: "องกะคุ",
            meaning: "เพลง / ดนตรี"
          }
        ]
      },
      {
        type: "practice",
        question: "「おんがくが すきです」 หมายถึงอะไร?",
        choices: [
          "ไม่ชอบเพลง",
          "ฟังเพลง",
          "ชอบเพลง",
          "เขียนเพลง"
        ],
        answer: 2,
        explanation: "すきです = ชอบ"
      }
    ]
  },

  {
    id: 195,
    title: "ชอบมาก ชอบนิดหน่อย",
    subtitle: "だいすき・すこし",
    sections: [
      {
        type: "vocab",
        title: "ระดับความชอบ",
        items: [
          {
            jp: "だいすき",
            reading: "daisuki",
            thai: "ไดสุกิ",
            meaning: "ชอบมาก"
          },
          {
            jp: "すき",
            reading: "suki",
            thai: "สุกิ",
            meaning: "ชอบ"
          },
          {
            jp: "すこし すき",
            reading: "sukoshi suki",
            thai: "สุโคชิ สุกิ",
            meaning: "ชอบนิดหน่อย"
          },
          {
            jp: "あまり すきじゃありません",
            reading: "amari suki ja arimasen",
            thai: "อะมะริ สุกิ จา อะริมะเซ็น",
            meaning: "ไม่ค่อยชอบ"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>ねこが だいすきです。</p>
            <p>ชอบแมวมาก</p>

            <p>スポーツが すきです。</p>
            <p>ชอบกีฬา</p>

            <p>さかなは あまり すきじゃありません。</p>
            <p>ไม่ค่อยชอบปลา</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「だいすき」 หมายถึงอะไร?",
        choices: [
          "ไม่ชอบ",
          "ชอบนิดหน่อย",
          "ชอบมาก",
          "ไม่รู้จัก"
        ],
        answer: 2,
        explanation: "だいすき = ชอบมาก"
      }
    ]
  },

  {
    id: 196,
    title: "สิ่งที่ชอบทำ",
    subtitle: "～が すきです",
    sections: [
      {
        type: "concept",
        title: "พูดถึงกิจกรรมที่ชอบ",
        content: `
          <p>
            สามารถใช้คำกริยาในรูปคำนามบางรูปแบบ
            หรือใช้ชื่อกิจกรรมเพื่อพูดถึงสิ่งที่ชอบ
          </p>

          <div class="example-box">
            <p>スポーツが すきです。</p>
            <p>ชอบกีฬา</p>

            <p>おんがくが すきです。</p>
            <p>ชอบดนตรี</p>

            <p>えいがが すきです。</p>
            <p>ชอบภาพยนตร์</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "กิจกรรม",
        items: [
          {
            jp: "スポーツ",
            reading: "supootsu",
            thai: "สุโปสึ",
            meaning: "กีฬา"
          },
          {
            jp: "えいが",
            reading: "eiga",
            thai: "เอกะ",
            meaning: "ภาพยนตร์"
          },
          {
            jp: "おんがく",
            reading: "ongaku",
            thai: "องกะคุ",
            meaning: "ดนตรี"
          },
          {
            jp: "りょこう",
            reading: "ryokou",
            thai: "เรียวโค",
            meaning: "การท่องเที่ยว"
          }
        ]
      },
      {
        type: "practice",
        question: "ข้อใดแปลว่า \"ฉันชอบภาพยนตร์\"?",
        choices: [
          "えいがを みます。",
          "えいがが すきです。",
          "えいがに いきます。",
          "えいがを かきます。"
        ],
        answer: 1,
        explanation: "えいがが すきです = ชอบภาพยนตร์"
      }
    ]
  },

  {
    id: 197,
    title: "เก่งและไม่เก่ง",
    subtitle: "じょうず・へた",
    sections: [
      {
        type: "concept",
        title: "บอกความสามารถ",
        content: `
          <p>
            <strong>じょうず</strong> ใช้บอกว่าเก่งหรือทำได้ดี
            ส่วน <strong>へた</strong> ใช้บอกว่าทำได้ไม่เก่ง
          </p>

          <div class="example-box">
            <p>えいごが じょうずです。</p>
            <p>เก่งภาษาอังกฤษ</p>

            <p>スポーツが へたです。</p>
            <p>ไม่เก่งกีฬา</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          {
            jp: "じょうず",
            reading: "jouzu",
            thai: "โจซุ",
            meaning: "เก่ง / ทำได้ดี"
          },
          {
            jp: "へた",
            reading: "heta",
            thai: "เฮะตะ",
            meaning: "ไม่เก่ง"
          },
          {
            jp: "えいご",
            reading: "eigo",
            thai: "เอโกะ",
            meaning: "ภาษาอังกฤษ"
          },
          {
            jp: "にほんご",
            reading: "nihongo",
            thai: "นิฮงโกะ",
            meaning: "ภาษาญี่ปุ่น"
          }
        ]
      },
      {
        type: "practice",
        question: "「じょうず」 หมายถึงอะไร?",
        choices: [
          "เก่ง / ทำได้ดี",
          "ไม่ชอบ",
          "ยาก",
          "เร็ว"
        ],
        answer: 0,
        explanation: "じょうず = เก่งหรือทำได้ดี"
      }
    ]
  },

  {
    id: 198,
    title: "คำคุณศัพท์บอกความรู้สึก",
    subtitle: "たのしい・おもしろい・むずかしい",
    sections: [
      {
        type: "vocab",
        title: "ความรู้สึกและลักษณะ",
        items: [
          {
            jp: "たのしい",
            reading: "tanoshii",
            thai: "ทะโนะชิ",
            meaning: "สนุก"
          },
          {
            jp: "おもしろい",
            reading: "omoshiroi",
            thai: "โอะโมะชิโระอิ",
            meaning: "น่าสนใจ / สนุก"
          },
          {
            jp: "むずかしい",
            reading: "muzukashii",
            thai: "มุซุคะชิ",
            meaning: "ยาก"
          },
          {
            jp: "やさしい",
            reading: "yasashii",
            thai: "ยะซะชิ",
            meaning: "ง่าย / ใจดี"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>にほんごは たのしいです。</p>
            <p>ภาษาญี่ปุ่นสนุก</p>

            <p>この ほんは おもしろいです。</p>
            <p>หนังสือเล่มนี้น่าสนใจ</p>

            <p>にほんごは むずかしいです。</p>
            <p>ภาษาญี่ปุ่นยาก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「むずかしい」 หมายถึงอะไร?",
        choices: [
          "ง่าย",
          "ยาก",
          "สนุก",
          "สวย"
        ],
        answer: 1,
        explanation: "むずかしい = ยาก"
      }
    ]
  },

  {
    id: 199,
    title: "การบอกว่าเป็นอย่างไร",
    subtitle: "～は ～です",
    sections: [
      {
        type: "concept",
        title: "โครงสร้างพื้นฐาน",
        content: `
          <p>
            โครงสร้าง <strong>A は B です</strong>
            ใช้บอกข้อมูลเกี่ยวกับ A ว่าเป็น B
          </p>

          <div class="example-box">
            <p>これは ほんです。</p>
            <p>นี่คือหนังสือ</p>

            <p>にほんごは おもしろいです。</p>
            <p>ภาษาญี่ปุ่นน่าสนใจ</p>

            <p>この まちは しずかです。</p>
            <p>เมืองนี้เงียบสงบ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「にほんごは おもしろいです」 หมายถึงอะไร?",
        choices: [
          "ฉันอ่านภาษาญี่ปุ่น",
          "ภาษาญี่ปุ่นน่าสนใจ",
          "ภาษาญี่ปุ่นยาก",
          "ฉันไม่ชอบภาษาญี่ปุ่น"
        ],
        answer: 1,
        explanation: "おもしろい = น่าสนใจ"
      }
    ]
  },

  {
    id: 200,
    title: "ทบทวนความชอบและคำคุณศัพท์",
    subtitle: "すき・じょうず・たのしい",
    sections: [
      {
        type: "concept",
        title: "แยกให้ออกว่าแต่ละคำทำหน้าที่อะไร",
        content: `
          <div class="example-box">
            <p><strong>すきです</strong> = ชอบ</p>
            <p><strong>きらいです</strong> = ไม่ชอบ</p>
            <p><strong>じょうずです</strong> = เก่ง</p>
            <p><strong>へたです</strong> = ไม่เก่ง</p>
            <p><strong>たのしいです</strong> = สนุก</p>
            <p><strong>おもしろいです</strong> = น่าสนใจ</p>
            <p><strong>むずかしいです</strong> = ยาก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"ฉันชอบภาษาญี่ปุ่น\"?",
        choices: [
          "にほんごが すきです。",
          "にほんごが へたです。",
          "にほんごは きらいです。",
          "にほんごを いきます。"
        ],
        answer: 0,
        explanation: "にほんごが すきです = ชอบภาษาญี่ปุ่น"
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"ภาษาญี่ปุ่นยาก\"?",
        choices: [
          "にほんごは たのしいです。",
          "にほんごは むずかしいです。",
          "にほんごが すきです。",
          "にほんごを よみます。"
        ],
        answer: 1,
        explanation: "むずかしい = ยาก"
      },
      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "すきです = ชอบ",
          "きらいです = ไม่ชอบ",
          "じょうずです = เก่ง",
          "へたです = ไม่เก่ง",
          "たのしいです = สนุก",
          "おもしろいです = น่าสนใจ",
          "むずかしいです = ยาก"
        ]
      }
    ]
  },

  {
    id: 201,
    title: "เพราะว่า...",
    subtitle: "から",
    sections: [
      {
        type: "concept",
        title: "คำช่วย から",
        content: `
          <p>
            <strong>から</strong> ใช้เชื่อมเหตุผล
            มีความหมายประมาณว่า "เพราะว่า..." หรือ "เพราะ..."
          </p>

          <div class="example-box">
            <p>にほんごが すきです。おもしろいからです。</p>
            <p>ชอบภาษาญี่ปุ่น เพราะว่าน่าสนใจ</p>
          </div>

          <p>
            ในระดับเริ่มต้นให้จำหน้าที่หลักก่อนว่า
            <strong>から = เพราะว่า</strong>
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>がっこうに いきます。べんきょうしますから。</p>
            <p>ไปโรงเรียน เพราะจะเรียนหนังสือ</p>

            <p>コーヒーを のみません。にがいからです。</p>
            <p>ไม่ดื่มกาแฟ เพราะมันขม</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「から」 ในบทนี้ใช้เพื่ออะไร?",
        choices: [
          "บอกสถานที่",
          "บอกเวลา",
          "บอกเหตุผล",
          "บอกจำนวน"
        ],
        answer: 2,
        explanation: "から ใช้เชื่อมเหตุผล"
      }
    ]
  },

  {
    id: 202,
    title: "และ...",
    subtitle: "そして・それから",
    sections: [
      {
        type: "concept",
        title: "เชื่อมเหตุการณ์",
        content: `
          <p>
            <strong>そして</strong> และ <strong>それから</strong>
            ใช้เชื่อมข้อความหรือเหตุการณ์ให้ต่อเนื่องกัน
          </p>

          <div class="example-box">
            <p>あさごはんを たべます。そして、がっこうに いきます。</p>
            <p>กินอาหารเช้า แล้วก็ไปโรงเรียน</p>

            <p>べんきょうします。それから、ねます。</p>
            <p>เรียน แล้วจากนั้นก็นอน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำใดใช้เชื่อมเหตุการณ์ว่า \"แล้วก็...\"?",
        choices: [
          "どこ",
          "そして",
          "だれ",
          "なに"
        ],
        answer: 1,
        explanation: "そして ใช้เชื่อมข้อความหรือเหตุการณ์"
      }
    ]
  },

  {
    id: 203,
    title: "แต่...",
    subtitle: "でも",
    sections: [
      {
        type: "concept",
        title: "คำว่า でも",
        content: `
          <p>
            <strong>でも</strong> ใช้เมื่อเราต้องการเชื่อมข้อความ
            ที่มีความหมายขัดแย้งหรือแตกต่างกัน
          </p>

          <div class="example-box">
            <p>にほんごは むずかしいです。でも、おもしろいです。</p>
            <p>ภาษาญี่ปุ่นยาก แต่ก็น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ลองสังเกตความหมาย",
        content: `
          <div class="example-box">
            <p>この ほんは むずかしいです。</p>
            <p>หนังสือเล่มนี้ยาก</p>

            <p>でも、おもしろいです。</p>
            <p>แต่ก็น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「でも」 มีความหมายใกล้เคียงข้อใด?",
        choices: [
          "เพราะว่า",
          "แล้วก็",
          "แต่",
          "ที่ไหน"
        ],
        answer: 2,
        explanation: "でも = แต่ / อย่างไรก็ตาม"
      }
    ]
  },

  {
    id: 204,
    title: "เพราะอะไร",
    subtitle: "どうして",
    sections: [
      {
        type: "concept",
        title: "ถามเหตุผล",
        content: `
          <p>
            <strong>どうして</strong> ใช้ถามว่า
            "ทำไม?"
          </p>

          <div class="example-box">
            <p>どうして にほんごを べんきょうしますか。</p>
            <p>ทำไมถึงเรียนภาษาญี่ปุ่น?</p>
          </div>

          <p>
            คำตอบสามารถใช้ <strong>から</strong>
            เพื่อบอกเหตุผลได้
          </p>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> どうして にほんごを べんきょうしますか。</p>
            <p>ทำไมถึงเรียนภาษาญี่ปุ่น?</p>

            <p><strong>B:</strong> にほんごが すきですから。</p>
            <p>เพราะชอบภาษาญี่ปุ่น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「どうして」 หมายถึงอะไร?",
        choices: [
          "อะไร",
          "ใคร",
          "ทำไม",
          "ที่ไหน"
        ],
        answer: 2,
        explanation: "どうして = ทำไม"
      }
    ]
  },

  {
    id: 205,
    title: "ใครทำอะไรที่ไหน",
    subtitle: "ประโยคคำถามรวม",
    sections: [
      {
        type: "concept",
        title: "รวมคำถามที่เรียนมา",
        content: `
          <div class="example-box">
            <p>だれ = ใคร</p>
            <p>なに = อะไร</p>
            <p>どこ = ที่ไหน</p>
            <p>いつ = เมื่อไร</p>
            <p>どうして = ทำไม</p>
          </div>

          <p>
            เมื่อจำคำถามพื้นฐานเหล่านี้ได้
            เราจะเริ่มถามและตอบบทสนทนาง่าย ๆ ได้มากขึ้น
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>だれと がっこうに いきますか。</p>
            <p>ไปโรงเรียนกับใคร?</p>

            <p>なにを たべますか。</p>
            <p>กินอะไร?</p>

            <p>どこに いきますか。</p>
            <p>ไปที่ไหน?</p>

            <p>いつ べんきょうしますか。</p>
            <p>เรียนเมื่อไร?</p>

            <p>どうして べんきょうしますか。</p>
            <p>ทำไมถึงเรียน?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการถามว่า \"ไปกับใคร?\" ควรใช้คำใด?",
        choices: [
          "なに",
          "だれ",
          "どこ",
          "いつ"
        ],
        answer: 1,
        explanation: "だれ = ใคร"
      }
    ]
  },

  {
    id: 206,
    title: "ทำอะไรกับอะไร",
    subtitle: "を + คำกริยา",
    sections: [
      {
        type: "concept",
        title: "สร้างประโยคจากคำศัพท์",
        content: `
          <p>
            เมื่อเรารู้คำศัพท์มากขึ้น
            สามารถสร้างประโยคโดยเลือก
            "สิ่งที่ทำ" + を + "การกระทำ"
          </p>

          <div class="example-box">
            <p>ほんを よみます。</p>
            <p>อ่านหนังสือ</p>

            <p>おんがくを ききます。</p>
            <p>ฟังเพลง</p>

            <p>えいがを みます。</p>
            <p>ดูหนัง</p>

            <p>てがみを かきます。</p>
            <p>เขียนจดหมาย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดถูกต้อง?",
        choices: [
          "ほんが よみます。",
          "ほんを よみます。",
          "ほんに よみます。",
          "ほんで よみます。"
        ],
        answer: 1,
        explanation: "สิ่งที่อ่านเป็นกรรม จึงใช้ を"
      }
    ]
  },

  {
    id: 207,
    title: "สถานที่ที่ทำกิจกรรม",
    subtitle: "で + สถานที่",
    sections: [
      {
        type: "concept",
        title: "で บอกสถานที่ที่เกิดการกระทำ",
        content: `
          <p>
            นอกจากใช้กับพาหนะแล้ว
            <strong>で</strong> ยังใช้บอกสถานที่ที่เราทำกิจกรรม
          </p>

          <div class="example-box">
            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>うちで テレビを みます。</p>
            <p>ดูโทรทัศน์ที่บ้าน</p>
          </div>
        `
      },
      {
        type: "example",
        title: "เทียบ に กับ で",
        content: `
          <div class="example-box">
            <p>がっこうに いきます。</p>
            <p>ไปโรงเรียน</p>

            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>
          </div>

          <p>
            <strong>に</strong> ในประโยคแรกบอกจุดหมาย
            ส่วน <strong>で</strong> ในประโยคที่สองบอกสถานที่ที่เกิดกิจกรรม
          </p>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"เรียนที่โรงเรียน\"?",
        choices: [
          "がっこうに べんきょうします。",
          "がっこうで べんきょうします。",
          "がっこうを べんきょうします。",
          "がっこうと べんきょうします。"
        ],
        answer: 1,
        explanation: "สถานที่ที่เกิดการกระทำใช้ で"
      }
    ]
  },

  {
    id: 208,
    title: "จาก...ถึง...",
    subtitle: "から・まで",
    sections: [
      {
        type: "concept",
        title: "ขอบเขตเวลาและสถานที่",
        content: `
          <p>
            <strong>から</strong> = จาก / ตั้งแต่
            และ <strong>まで</strong> = ถึง / จนถึง
          </p>

          <div class="example-box">
            <p>くじから ごじまで べんきょうします。</p>
            <p>เรียนตั้งแต่ 9 โมงถึง 5 โมง</p>
          </div>

          <p>
            ทั้งสองคำสามารถใช้บอกช่วงเวลา
            หรือขอบเขตจากจุดหนึ่งไปยังอีกจุดหนึ่งได้
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>げつようびから きんようびまで がっこうに いきます。</p>
            <p>ไปโรงเรียนตั้งแต่วันจันทร์ถึงวันศุกร์</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「から」 ใน 「くじから ごじまで」 หมายถึงอะไร?",
        choices: [
          "ถึง",
          "จาก / ตั้งแต่",
          "กับ",
          "ที่"
        ],
        answer: 1,
        explanation: "から = จาก / ตั้งแต่"
      }
    ]
  },

  {
    id: 209,
    title: "ตารางกิจวัตร",
    subtitle: "まいにちの スケジュール",
    sections: [
      {
        type: "example",
        title: "ตัวอย่างตารางหนึ่งวัน",
        content: `
          <div class="example-box">
            <p>ろくじに おきます。</p>
            <p>ตื่น 6 โมง</p>

            <p>しちじに あさごはんを たべます。</p>
            <p>กินอาหารเช้า 7 โมง</p>

            <p>はちじに がっこうに いきます。</p>
            <p>ไปโรงเรียน 8 โมง</p>

            <p>ごご しちじに うちに かえります。</p>
            <p>กลับบ้าน 1 ทุ่ม</p>

            <p>じゅうじに ねます。</p>
            <p>นอน 4 ทุ่ม</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "วิธีอ่านประโยคยาว",
        content: `
          <p>
            ไม่จำเป็นต้องแปลทุกคำพร้อมกัน
            ให้แบ่งประโยคเป็นกลุ่ม
          </p>

          <div class="example-box">
            <p>しちじに / あさごはんを / たべます</p>
            <p>ตอน 7 โมง / อาหารเช้า / กิน</p>
          </div>

          <p>
            เมื่อแยกแบบนี้ ประโยคยาวจะอ่านง่ายขึ้นมาก
          </p>
        `
      },
      {
        type: "practice",
        question: "「じゅうじに ねます」 หมายถึงอะไร?",
        choices: [
          "ตื่น 10 โมง",
          "นอน 10 โมง",
          "ไป 10 โมง",
          "กิน 10 โมง"
        ],
        answer: 1,
        explanation: "じゅうじに = ตอน 10 โมง และ ねます = นอน"
      }
    ]
  },

  {
    id: 210,
    title: "เล่าเรื่องหนึ่งวัน",
    subtitle: "วันของฉัน",
    sections: [
      {
        type: "concept",
        title: "ลองต่อประโยคให้เป็นเรื่อง",
        content: `
          <p>
            ตอนนี้เราสามารถนำเวลา สถานที่
            คำกริยา และคำบอกความถี่มารวมกันได้
          </p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่างเรื่องสั้น",
        content: `
          <div class="dialogue-box">
            <p>わたしは まいにち ろくじに おきます。</p>
            <p>ฉันตื่น 6 โมงทุกวัน</p>

            <p>あさごはんを たべます。</p>
            <p>กินอาหารเช้า</p>

            <p>はちじに がっこうに いきます。</p>
            <p>ไปโรงเรียน 8 โมง</p>

            <p>がっこうで べんきょうします。</p>
            <p>เรียนที่โรงเรียน</p>

            <p>ごご ごじに うちに かえります。</p>
            <p>กลับบ้าน 5 โมงเย็น</p>

            <p>よる ほんを よみます。</p>
            <p>ตอนกลางคืนอ่านหนังสือ</p>

            <p>じゅうじに ねます。</p>
            <p>นอน 4 ทุ่ม</p>
          </div>
        `
      },
      {
        type: "tip",
        title: "ภารกิจ",
        content: `
          <p>
            ลองเปลี่ยนเวลา สถานที่ และกิจกรรม
            ให้กลายเป็นตารางชีวิตของตัวเอง
          </p>
        `
      }
    ]
  },

  {
    id: 211,
    title: "คำถามเกี่ยวกับกิจวัตร",
    subtitle: "いつ・どこで・なにを",
    sections: [
      {
        type: "example",
        title: "ถามเกี่ยวกับกิจวัตร",
        content: `
          <div class="example-box">
            <p>いつ おきますか。</p>
            <p>ตื่นเมื่อไร?</p>

            <p>どこで べんきょうしますか。</p>
            <p>เรียนที่ไหน?</p>

            <p>なにを たべますか。</p>
            <p>กินอะไร?</p>

            <p>だれと がっこうに いきますか。</p>
            <p>ไปโรงเรียนกับใคร?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการถามว่า \"เรียนที่ไหน?\" ควรพูดอย่างไร?",
        choices: [
          "どこで べんきょうしますか。",
          "なにで べんきょうしますか。",
          "だれで べんきょうしますか。",
          "いつを べんきょうしますか。"
        ],
        answer: 0,
        explanation: "どこ = ที่ไหน และ で = สถานที่ที่เกิดกิจกรรม"
      },
      {
        type: "practice",
        question: "ถ้าต้องการถามว่า \"ตื่นเมื่อไร?\" ควรใช้คำใด?",
        choices: [
          "だれ",
          "どこ",
          "いつ",
          "なに"
        ],
        answer: 2,
        explanation: "いつ = เมื่อไร"
      }
    ]
  },

  {
    id: 212,
    title: "ชวนกันทำอะไร",
    subtitle: "いっしょに ～ませんか",
    sections: [
      {
        type: "concept",
        title: "ชวนอย่างสุภาพ",
        content: `
          <p>
            โครงสร้าง
            <strong>いっしょに ～ませんか</strong>
            ใช้ชวนอีกคนว่า "ทำ...ด้วยกันไหม?"
          </p>

          <div class="example-box">
            <p>いっしょに べんきょうしませんか。</p>
            <p>มาเรียนด้วยกันไหม?</p>

            <p>いっしょに えいがを みませんか。</p>
            <p>ไปดูหนังด้วยกันไหม?</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตอบรับ",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> いっしょに えいがを みませんか。</p>
            <p>ดูหนังด้วยกันไหม?</p>

            <p><strong>B:</strong> はい、みましょう。</p>
            <p>ได้ มาดูกัน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いっしょに」 หมายถึงอะไร?",
        choices: [
          "คนเดียว",
          "ด้วยกัน",
          "เมื่อวาน",
          "ที่ไหน"
        ],
        answer: 1,
        explanation: "いっしょに = ด้วยกัน"
      }
    ]
  },

  {
    id: 213,
    title: "ชวนแล้วตอบรับ",
    subtitle: "～ましょう",
    sections: [
      {
        type: "concept",
        title: "รูปชวน ～ましょう",
        content: `
          <p>
            <strong>～ましょう</strong>
            ใช้เสนอหรือชวนทำบางอย่างร่วมกัน
          </p>

          <div class="example-box">
            <p>たべましょう。</p>
            <p>มากินกันเถอะ</p>

            <p>いきましょう。</p>
            <p>ไปกันเถอะ</p>

            <p>べんきょうしましょう。</p>
            <p>มาเรียนกันเถอะ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "การเปลี่ยนรูป",
        content: `
          <div class="example-box">
            <p>いきます → いきましょう</p>
            <p>たべます → たべましょう</p>
            <p>のみます → のみましょう</p>
            <p>みます → みましょう</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いきましょう」 หมายถึงอะไร?",
        choices: [
          "ไปแล้ว",
          "ไม่ไป",
          "ไปกันเถอะ",
          "ไปไหม?"
        ],
        answer: 2,
        explanation: "ます → ましょう ใช้เสนอหรือชวนทำร่วมกัน"
      }
    ]
  },

  {
    id: 214,
    title: "ไปซื้อของ",
    subtitle: "かいもの",
    sections: [
      {
        type: "vocab",
        title: "คำศัพท์การซื้อของ",
        items: [
          {
            jp: "かいます",
            reading: "kaimasu",
            thai: "ไคมะสุ",
            meaning: "ซื้อ"
          },
          {
            jp: "みせ",
            reading: "mise",
            thai: "มิเสะ",
            meaning: "ร้านค้า"
          },
          {
            jp: "コンビニ",
            reading: "konbini",
            thai: "คงบินิ",
            meaning: "ร้านสะดวกซื้อ"
          },
          {
            jp: "スーパー",
            reading: "suupaa",
            thai: "ซูปา",
            meaning: "ซูเปอร์มาร์เก็ต"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>スーパーに いきます。</p>
            <p>ไปซูเปอร์มาร์เก็ต</p>

            <p>パンを かいます。</p>
            <p>ซื้อขนมปัง</p>

            <p>みずを かいます。</p>
            <p>ซื้อน้ำ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「かいます」 หมายถึงอะไร?",
        choices: [
          "ขาย",
          "ซื้อ",
          "ไป",
          "เปิด"
        ],
        answer: 1,
        explanation: "かいます = ซื้อ"
      }
    ]
  },

  {
    id: 215,
    title: "ซื้ออะไร",
    subtitle: "なにを かいますか",
    sections: [
      {
        type: "concept",
        title: "ถามสิ่งที่ซื้อ",
        content: `
          <p>
            ใช้ <strong>なにを かいますか</strong>
            เพื่อถามว่า "ซื้ออะไร?"
          </p>

          <div class="example-box">
            <p>なにを かいますか。</p>
            <p>ซื้ออะไร?</p>

            <p>パンを かいます。</p>
            <p>ซื้อขนมปัง</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> なにを かいますか。</p>
            <p>ซื้ออะไร?</p>

            <p><strong>B:</strong> りんごを かいます。</p>
            <p>ซื้อแอปเปิล</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง \"ซื้ออะไร?\"",
        choices: [
          "なにを かいますか。",
          "どこを かいますか。",
          "だれを かいますか。",
          "いつを かいますか。"
        ],
        answer: 0,
        explanation: "なに = อะไร และ を + かいます = ซื้อ..."
      }
    ]
  },

  {
    id: 216,
    title: "ราคาเท่าไร",
    subtitle: "いくらですか",
    sections: [
      {
        type: "concept",
        title: "ถามราคา",
        content: `
          <p>
            <strong>いくら</strong> หมายถึง "เท่าไร"
            และใช้ถามราคาได้
          </p>

          <div class="example-box">
            <p>これは いくらですか。</p>
            <p>อันนี้ราคาเท่าไร?</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "เงินเยน",
        items: [
          {
            jp: "えん",
            reading: "en",
            thai: "เอ็น",
            meaning: "เยน"
          },
          {
            jp: "ひゃくえん",
            reading: "hyaku en",
            thai: "เฮียะคุเอ็น",
            meaning: "100 เยน"
          },
          {
            jp: "せんえん",
            reading: "sen en",
            thai: "เซ็นเอ็น",
            meaning: "1,000 เยน"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>これは せんえんです。</p>
            <p>อันนี้ราคา 1,000 เยน</p>

            <p>それは いくらですか。</p>
            <p>อันนั้นราคาเท่าไร?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いくらですか」 ใช้ถามอะไร?",
        choices: [
          "ชื่อ",
          "อายุ",
          "ราคา",
          "สถานที่"
        ],
        answer: 2,
        explanation: "いくらですか = ราคาเท่าไร?"
      }
    ]
  },

  {
    id: 217,
    title: "เอาอันนี้",
    subtitle: "これを ください",
    sections: [
      {
        type: "concept",
        title: "ขอสิ่งของ",
        content: `
          <p>
            <strong>ください</strong>
            ใช้เมื่อต้องการขอสิ่งของอย่างสุภาพ
          </p>

          <div class="example-box">
            <p>これを ください。</p>
            <p>ขออันนี้ค่ะ/ครับ</p>

            <p>みずを ください。</p>
            <p>ขอน้ำหน่อย</p>
          </div>
        `
      },
      {
        type: "example",
        title: "สถานการณ์ในร้าน",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> これは いくらですか。</p>
            <p>อันนี้ราคาเท่าไร?</p>

            <p><strong>B:</strong> ごひゃくえんです。</p>
            <p>500 เยน</p>

            <p><strong>A:</strong> これを ください。</p>
            <p>ขออันนี้ค่ะ/ครับ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「これを ください」 หมายถึงอะไร?",
        choices: [
          "อันนี้คืออะไร?",
          "อันนี้อยู่ที่ไหน?",
          "ขออันนี้",
          "อันนี้แพงไหม?"
        ],
        answer: 2,
        explanation: "これ = อันนี้ และ ください = ขอ..."
      }
    ]
  },

  {
    id: 218,
    title: "ไปเที่ยว",
    subtitle: "りょこうします",
    sections: [
      {
        type: "vocab",
        title: "คำศัพท์การเดินทางและท่องเที่ยว",
        items: [
          {
            jp: "りょこうします",
            reading: "ryokou shimasu",
            thai: "เรียวโค ชิมะสุ",
            meaning: "ท่องเที่ยว"
          },
          {
            jp: "ホテル",
            reading: "hoteru",
            thai: "โฮะเทะรุ",
            meaning: "โรงแรม"
          },
          {
            jp: "くうこう",
            reading: "kuukou",
            thai: "คูโค",
            meaning: "สนามบิน"
          },
          {
            jp: "えき",
            reading: "eki",
            thai: "เอกิ",
            meaning: "สถานี"
          }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>にほんに りょこうします。</p>
            <p>ไปเที่ยวญี่ปุ่น</p>

            <p>ホテルに いきます。</p>
            <p>ไปโรงแรม</p>

            <p>えきに いきます。</p>
            <p>ไปสถานี</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「りょこうします」 หมายถึงอะไร?",
        choices: [
          "ทำงาน",
          "ท่องเที่ยว",
          "เรียน",
          "ซื้อ"
        ],
        answer: 1,
        explanation: "りょこうします = ท่องเที่ยว"
      }
    ]
  },

  {
    id: 219,
    title: "อยากทำอะไร",
    subtitle: "～たいです",
    sections: [
      {
        type: "concept",
        title: "เริ่มพูดถึงความต้องการ",
        content: `
          <p>
            รูป <strong>～たいです</strong>
            ใช้พูดว่า "อยาก..."
            โดยนำไปต่อกับก้านของคำกริยา
          </p>

          <div class="example-box">
            <p>たべたいです。</p>
            <p>อยากกิน</p>

            <p>のみたいです。</p>
            <p>อยากดื่ม</p>

            <p>いきたいです。</p>
            <p>อยากไป</p>

            <p>みたいです。</p>
            <p>อยากดู</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p>にほんに いきたいです。</p>
            <p>อยากไปญี่ปุ่น</p>

            <p>すしを たべたいです。</p>
            <p>อยากกินซูชิ</p>

            <p>えいがを みたいです。</p>
            <p>อยากดูหนัง</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「いきたいです」 หมายถึงอะไร?",
        choices: [
          "ไปแล้ว",
          "ไม่ไป",
          "อยากไป",
          "ไปไหม?"
        ],
        answer: 2,
        explanation: "～たいです = อยากทำ..."
      }
    ]
  },

  {
    id: 220,
    title: "อยากทำอะไรกับใคร",
    subtitle: "だれと ～たいですか",
    sections: [
      {
        type: "concept",
        title: "ถามความต้องการ",
        content: `
          <p>
            เราสามารถนำโครงสร้างที่เรียนมารวมกัน
            เพื่อถามว่าอยากทำอะไร กับใคร หรือที่ไหน
          </p>

          <div class="example-box">
            <p>なにを たべたいですか。</p>
            <p>อยากกินอะไร?</p>

            <p>どこに いきたいですか。</p>
            <p>อยากไปที่ไหน?</p>

            <p>だれと いきたいですか。</p>
            <p>อยากไปกับใคร?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「どこに いきたいですか」 หมายถึงอะไร?",
        choices: [
          "ไปที่ไหนมาแล้ว?",
          "อยากไปที่ไหน?",
          "ไปที่ไหนทุกวัน?",
          "ไม่ไปที่ไหน?"
        ],
        answer: 1,
        explanation: "どこ = ที่ไหน และ いきたいです = อยากไป"
      }
    ]
  },

  {
    id: 221,
    title: "บอกว่าทำได้",
    subtitle: "できます",
    sections: [
      {
        type: "concept",
        title: "できます",
        content: `
          <p>
            <strong>できます</strong>
            ใช้บอกว่า "สามารถทำได้" หรือ "ทำได้"
          </p>

          <div class="example-box">
            <p>にほんごが できます。</p>
            <p>สามารถใช้ภาษาญี่ปุ่นได้</p>

            <p>えいごが できます。</p>
            <p>สามารถใช้ภาษาอังกฤษได้</p>
          </div>

          <p>
            ในระดับเริ่มต้นสามารถจำเป็นคำศัพท์ก่อน
            แล้วค่อยเรียนโครงสร้างความสามารถแบบละเอียดภายหลัง
          </p>
        `
      },
      {
        type: "vocab",
        title: "คำที่ใช้ร่วมกัน",
        items: [
          {
            jp: "できます",
            reading: "dekimasu",
            thai: "เดะคิมะสุ",
            meaning: "สามารถทำได้"
          },
          {
            jp: "にほんご",
            reading: "nihongo",
            thai: "นิฮงโกะ",
            meaning: "ภาษาญี่ปุ่น"
          },
          {
            jp: "えいご",
            reading: "eigo",
            thai: "เอโกะ",
            meaning: "ภาษาอังกฤษ"
          }
        ]
      },
      {
        type: "practice",
        question: "「できます」 หมายถึงอะไร?",
        choices: [
          "ต้องทำ",
          "สามารถทำได้",
          "ไม่ทำ",
          "อยากทำ"
        ],
        answer: 1,
        explanation: "できます = สามารถทำได้"
      }
    ]
  },

  {
    id: 222,
    title: "เคยและประสบการณ์",
    subtitle: "～たことがあります",
    sections: [
      {
        type: "concept",
        title: "พูดถึงประสบการณ์",
        content: `
          <p>
            โครงสร้าง <strong>～たことがあります</strong>
            ใช้พูดว่า "เคย..."
          </p>

          <div class="example-box">
            <p>にほんに いったことがあります。</p>
            <p>เคยไปญี่ปุ่น</p>

            <p>すしを たべたことがあります。</p>
            <p>เคยกินซูชิ</p>
          </div>

          <p>
            โครงสร้างนี้จะใช้รูปอดีตของคำกริยา
            ก่อนตามด้วย ことがあります
          </p>
        `
      },
      {
        type: "tip",
        title: "ยังไม่ต้องท่องการเปลี่ยนรูปทั้งหมด",
        content: `
          <p>
            บทนี้ให้จำความหมายของรูปแบบก่อน
            ส่วนการผันคำกริยาเป็นรูป た
            จะเรียนอย่างเป็นระบบในบทไวยากรณ์ต่อไป
          </p>
        `
      },
      {
        type: "practice",
        question: "「～たことがあります」 ใช้พูดถึงอะไร?",
        choices: [
          "สิ่งที่กำลังทำ",
          "สิ่งที่อยากทำ",
          "ประสบการณ์ที่เคยทำ",
          "สิ่งที่ต้องทำ"
        ],
        answer: 2,
        explanation: "ใช้พูดถึงประสบการณ์ว่าเคยทำ..."
      }
    ]
  },

  {
    id: 223,
    title: "ประโยคสุภาพในชีวิตประจำวัน",
    subtitle: "お願いします・ありがとうございます",
    sections: [
      {
        type: "vocab",
        title: "วลีสำคัญ",
        items: [
          {
            jp: "ありがとうございます",
            reading: "arigatou gozaimasu",
            thai: "อะริกะโต โกะไซมะสุ",
            meaning: "ขอบคุณครับ/ค่ะ"
          },
          {
            jp: "すみません",
            reading: "sumimasen",
            thai: "สุมิมะเซ็น",
            meaning: "ขอโทษ / ขออนุญาต / ขอบคุณสำหรับความช่วยเหลือ"
          },
          {
            jp: "おねがいします",
            reading: "onegaishimasu",
            thai: "โอะเนะไงชิมะสุ",
            meaning: "ขอความกรุณา / รบกวนด้วย"
          },
          {
            jp: "どういたしまして",
            reading: "douitashimashite",
            thai: "โดอิตะชิมะชิเตะ",
            meaning: "ไม่เป็นไร / ด้วยความยินดี"
          }
        ]
      },
      {
        type: "example",
        title: "บทสนทนาสั้น",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> これを おねがいします。</p>
            <p>รบกวนขออันนี้ค่ะ/ครับ</p>

            <p><strong>B:</strong> はい。</p>
            <p>ได้</p>

            <p><strong>A:</strong> ありがとうございます。</p>
            <p>ขอบคุณค่ะ/ครับ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "「ありがとうございます」 หมายถึงอะไร?",
        choices: [
          "ขอโทษ",
          "ขอบคุณ",
          "ลาก่อน",
          "ไม่เป็นไร"
        ],
        answer: 1,
        explanation: "ありがとうございます = ขอบคุณอย่างสุภาพ"
      }
    ]
  },

  {
    id: 224,
    title: "บทสนทนาภาษาญี่ปุ่นพื้นฐาน",
    subtitle: "รวมสิ่งที่เรียนมา",
    sections: [
      {
        type: "example",
        title: "สถานการณ์ที่ 1 — เจอกันตอนเช้า",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> おはようございます。</p>
            <p>สวัสดีตอนเช้า</p>

            <p><strong>B:</strong> おはようございます。</p>
            <p>สวัสดีตอนเช้า</p>

            <p><strong>A:</strong> きょう がっこうに いきますか。</p>
            <p>วันนี้ไปโรงเรียนไหม?</p>

            <p><strong>B:</strong> はい、いきます。</p>
            <p>ใช่ ไป</p>
          </div>
        `
      },
      {
        type: "example",
        title: "สถานการณ์ที่ 2 — ถามความชอบ",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> にほんごが すきですか。</p>
            <p>ชอบภาษาญี่ปุ่นไหม?</p>

            <p><strong>B:</strong> はい、すきです。</p>
            <p>ใช่ ชอบ</p>

            <p><strong>A:</strong> どうしてですか。</p>
            <p>ทำไม?</p>

            <p><strong>B:</strong> おもしろいですから。</p>
            <p>เพราะว่าน่าสนใจ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "สถานการณ์ที่ 3 — ชวนกัน",
        content: `
          <div class="dialogue-box">
            <p><strong>A:</strong> いっしょに えいがを みませんか。</p>
            <p>ดูหนังด้วยกันไหม?</p>

            <p><strong>B:</strong> はい、みましょう。</p>
            <p>ได้ มาดูกัน</p>
          </div>
        `
      }
    ]
  },

  {
    id: 225,
    title: "ทบทวนไวยากรณ์พื้นฐาน",
    subtitle: "บทที่ 1–224",
    sections: [
      {
        type: "concept",
        title: "คำช่วยที่ต้องรู้",
        content: `
          <div class="example-box">
            <p><strong>は</strong> = หัวข้อของประโยค</p>
            <p><strong>が</strong> = ประธาน / สิ่งที่เน้นในบางโครงสร้าง</p>
            <p><strong>を</strong> = กรรมของกริยา</p>
            <p><strong>に</strong> = จุดหมาย / เวลา / ตำแหน่งตามโครงสร้าง</p>
            <p><strong>で</strong> = สถานที่ทำกิจกรรม / พาหนะ / วิธีการ</p>
            <p><strong>と</strong> = กับ / และ</p>
            <p><strong>の</strong> = ของ / การขยายคำนาม</p>
            <p><strong>も</strong> = ก็...ด้วย / เช่นกัน</p>
            <p><strong>へ</strong> = ไปทาง / ไปยัง</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "รูปคำกริยาที่เรียน",
        content: `
          <div class="example-box">
            <p>たべます = กิน</p>
            <p>たべません = ไม่กิน</p>
            <p>たべました = กินแล้ว</p>
            <p>たべませんでした = ไม่ได้กิน</p>
            <p>たべましょう = มากินกันเถอะ</p>
            <p>たべたいです = อยากกิน</p>
          </div>
        `
      },
      {
        type: "concept",
        title: "คำถามพื้นฐาน",
        content: `
          <div class="example-box">
            <p>なに = อะไร</p>
            <p>だれ = ใคร</p>
            <p>どこ = ที่ไหน</p>
            <p>いつ = เมื่อไร</p>
            <p>どうして = ทำไม</p>
            <p>いくら = เท่าไร / ราคาเท่าไร</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยค 「ともだちと でんしゃで がっこうに いきます」 คำช่วย と หมายถึงอะไร?",
        choices: [
          "ไปที่โรงเรียน",
          "โดยรถไฟ",
          "กับเพื่อน",
          "หนังสือ"
        ],
        answer: 2,
        explanation: "ともだちと = กับเพื่อน"
      },
      {
        type: "practice",
        question: "ประโยค 「がっこうで べんきょうします」 คำช่วย で หมายถึงอะไร?",
        choices: [
          "ไปโรงเรียน",
          "เรียนที่โรงเรียน",
          "กับโรงเรียน",
          "ของโรงเรียน"
        ],
        answer: 1,
        explanation: "で ใช้บอกสถานที่ที่เกิดกิจกรรม"
      },
      {
        type: "practice",
        question: "「にほんに いきたいです」 หมายถึงอะไร?",
        choices: [
          "เคยไปญี่ปุ่น",
          "ไม่ไปญี่ปุ่น",
          "อยากไปญี่ปุ่น",
          "ไปญี่ปุ่นแล้ว"
        ],
        answer: 2,
        explanation: "いきたいです = อยากไป"
      }
    ]
  },

  {
    id: 226,
    title: "ภารกิจจบหลักสูตรพื้นฐาน",
    subtitle: "あなたは もう にほんごで はなせます",
    sections: [
      {
        type: "concept",
        title: "ยินดีด้วย!",
        content: `
          <p>
            มาถึงบทที่ 226 แล้ว
            ตอนนี้เราไม่ได้แค่จำตัวอักษรญี่ปุ่นแล้ว
            แต่สามารถประกอบประโยคพื้นฐานได้จริง
          </p>

          <div class="example-box">
            <p>
              อ่านฮิรางานะและคาตาคานะพื้นฐานได้
            </p>
            <p>
              แนะนำตัวเองได้
            </p>
            <p>
              บอกเวลาและกิจวัตรได้
            </p>
            <p>
              บอกสถานที่และการเดินทางได้
            </p>
            <p>
              ถามว่าใคร อะไร ที่ไหน เมื่อไร และทำไมได้
            </p>
            <p>
              บอกความชอบและความรู้สึกได้
            </p>
            <p>
              ซื้อของและถามราคาได้
            </p>
            <p>
              ชวนคนอื่นทำกิจกรรมได้
            </p>
            <p>
              พูดถึงสิ่งที่อยากทำได้
            </p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทพูดส่งท้าย",
        content: `
          <div class="dialogue-box">
            <p>はじめまして。</p>
            <p>ยินดีที่ได้รู้จัก</p>

            <p>わたしは ○○です。</p>
            <p>ฉันชื่อ ○○</p>

            <p>タイじんです。</p>
            <p>เป็นคนไทย</p>

            <p>にほんごが すきです。</p>
            <p>ชอบภาษาญี่ปุ่น</p>

            <p>まいにち にほんごを べんきょうします。</p>
            <p>เรียนภาษาญี่ปุ่นทุกวัน</p>

            <p>にほんに いきたいです。</p>
            <p>อยากไปญี่ปุ่น</p>

            <p>よろしく おねがいします。</p>
            <p>ฝากเนื้อฝากตัวด้วย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการบอกว่า \"ฉันเรียนภาษาญี่ปุ่นทุกวัน\" ข้อใดถูกต้อง?",
        choices: [
          "まいにち にほんごを べんきょうします。",
          "まいにち にほんごが いきます。",
          "まいにち にほんごに たべます。",
          "まいにち にほんごで ねます。"
        ],
        answer: 0,
        explanation: "まいにち = ทุกวัน, にほんごを = ภาษาญี่ปุ่นเป็นกรรม, べんきょうします = เรียน"
      },
      {
        type: "practice",
        question: "「にほんに いきたいです」 มีความหมายว่าอะไร?",
        choices: [
          "ฉันอยู่ญี่ปุ่น",
          "ฉันเคยไปญี่ปุ่น",
          "ฉันอยากไปญี่ปุ่น",
          "ฉันไม่ชอบญี่ปุ่น"
        ],
        answer: 2,
        explanation: "にほんに = ไปญี่ปุ่น และ いきたいです = อยากไป"
      },
      {
        type: "check",
        title: "เช็กตัวเองก่อนเข้าสู่ระดับต่อไป",
        items: [
          "อ่านฮิรางานะพื้นฐานได้",
          "รู้เสียงขุ่นและเสียงผสม",
          "เข้าใจ っ และจังหวะการอ่าน",
          "รู้คำช่วย は・が・を・に・で・と・の・も・へ",
          "สร้างประโยค です ได้",
          "ใช้ あります และ います ได้",
          "ใช้คำกริยารูป ます ได้",
          "ใช้ ません ได้",
          "ใช้ ました ได้",
          "ใช้ ませんでした ได้",
          "บอกเวลาและวันได้",
          "บอกกิจวัตรประจำวันได้",
          "ถาม なに・だれ・どこ・いつ・どうして ได้",
          "บอกความชอบด้วย すきです ได้",
          "ถามราคาและซื้อของแบบง่าย ๆ ได้",
          "ชวนด้วย ～ませんか และ ～ましょう ได้",
          "บอกความต้องการด้วย ～たいです ได้"
        ]
      },
      {
        type: "tip",
        title: "次のステップ — ระดับต่อไป",
        content: `
          <p>
            หลังจากพื้นฐานนี้ สามารถต่อยอดไปยัง
            <strong>การผันคำกริยาแบบละเอียด</strong>,
            <strong>รูป て</strong>,
            <strong>คำคุณศัพท์ที่ซับซ้อนขึ้น</strong>,
            <strong>การเปรียบเทียบ</strong>,
            <strong>การให้และรับ</strong>,
            <strong>การบอกความสามารถ</strong>,
            <strong>รูปอดีตและประสบการณ์</strong>
            และบทสนทนาในสถานการณ์จริงได้
          </p>

          <div class="example-box">
            <p><strong>ここまで よく がんばりました。</strong></p>
            <p>พยายามมาได้ดีมากจนถึงตรงนี้</p>

            <p><strong>これからも にほんごを べんきょうしましょう。</strong></p>
            <p>จากนี้ไปมาเรียนภาษาญี่ปุ่นต่อกันเถอะ</p>
          </div>
        `
      }
    ]
  }
);

// END OF LESSON 226
// END OF BEGINNER COURSE

  // ======================================================
// INTERMEDIATE COURSE
// LESSON 227–235
// ======================================================

lessons.push(
  {
    id: 227,
    title: "เริ่มต้นระดับ Intermediate",
    subtitle: "ก้าวจากประโยคพื้นฐานสู่ประโยคที่ยาวขึ้น",
    sections: [
      {
        type: "concept",
        title: "เข้าสู่ระดับ Intermediate",
        content: `
          <p>
            เก่งมากที่มาถึงตรงนี้!
            ใน Beginner Course เราเรียนพื้นฐานสำคัญของภาษาญี่ปุ่น
            ตั้งแต่ฮิรางานะ คาตาคานะ คำศัพท์
            คำช่วย และรูปประโยคพื้นฐานกันมาแล้ว
          </p>

          <p>
            ตั้งแต่บทนี้เป็นต้นไป
            เราจะเริ่มนำความรู้เหล่านั้นมาประกอบกัน
            เพื่อสร้างประโยคที่เป็นธรรมชาติมากขึ้น
          </p>

          <div class="example-box">
            <p><strong>Beginner</strong></p>
            <p>わたしは がくせいです。</p>
            <p>ฉันเป็นนักเรียน</p>

            <p><strong>Intermediate</strong></p>
            <p>わたしは まいにち がっこうで にほんごを べんきょうしています。</p>
            <p>ฉันกำลังเรียนภาษาญี่ปุ่นที่โรงเรียนทุกวัน</p>
          </div>
        `
      },

      {
        type: "note",
        title: "ประโยคยาวไม่ได้แปลว่ายากเสมอไป",
        content: `
          <p>
            เวลาเจอประโยคยาว ๆ อย่าเพิ่งพยายามแปลทีเดียวทั้งประโยค
            ให้แบ่งออกเป็นส่วนเล็ก ๆ ก่อน
          </p>

          <div class="example-box">
            <p>わたしは</p>
            <p>→ ฉัน</p>

            <p>まいにち</p>
            <p>→ ทุกวัน</p>

            <p>がっこうで</p>
            <p>→ ที่โรงเรียน</p>

            <p>にほんごを</p>
            <p>→ ภาษาญี่ปุ่น</p>

            <p>べんきょうしています。</p>
            <p>→ กำลังเรียนอยู่</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "เมื่อเจอประโยคภาษาญี่ปุ่นที่ยาวขึ้น ควรทำอย่างไร?",
        choices: [
          "แปลทุกคำพร้อมกันทันที",
          "แบ่งประโยคออกเป็นส่วน ๆ",
          "อ่านเฉพาะคำสุดท้าย",
          "ข้ามคำช่วยทั้งหมด"
        ],
        answer: 1,
        explanation: "การแบ่งประโยคออกเป็นส่วน ๆ ช่วยให้เข้าใจหน้าที่ของแต่ละคำและคำช่วยได้ง่ายขึ้น"
      }
    ]
  },

  {
    id: 228,
    title: "รู้จักรูป て",
    subtitle: "て-form",
    sections: [
      {
        type: "concept",
        title: "รูป て คืออะไร?",
        content: `
          <p>
            รูป <strong>て</strong> เป็นรูปหนึ่งของคำกริยา
            ที่สำคัญมากในภาษาญี่ปุ่น
          </p>

          <p>
            เราสามารถนำรูป て ไปต่อกับรูปประโยคอื่น ๆ
            เพื่อสร้างความหมายใหม่ได้อีกมากมาย
          </p>

          <div class="example-box">
            <p>たべます → たべて</p>
            <p>กิน → รูป て</p>

            <p>みます → みて</p>
            <p>ดู → รูป て</p>

            <p>します → して</p>
            <p>ทำ → รูป て</p>
          </div>
        `
      },

      {
        type: "tip",
        title: "ยังไม่ต้องจำกฎทั้งหมด",
        content: `
          <p>
            รูป て มีวิธีเปลี่ยนคำกริยาหลายแบบ
            ดังนั้นเราจะค่อย ๆ เรียนทีละกลุ่ม
          </p>

          <p>
            ตอนนี้จำแนวคิดหลักก่อนว่า
            <strong>て-form เป็นรูปกริยาที่ใช้เชื่อมกับรูปประโยคอื่น</strong>
          </p>
        `
      },

      {
        type: "vocab",
        items: [
          {
            jp: "たべて",
            reading: "tabete",
            thai: "ทะเบะเตะ",
            meaning: "กิน (รูป て)"
          },
          {
            jp: "みて",
            reading: "mite",
            thai: "มิเตะ",
            meaning: "ดู (รูป て)"
          },
          {
            jp: "して",
            reading: "shite",
            thai: "ชิเตะ",
            meaning: "ทำ (รูป て)"
          },
          {
            jp: "きいて",
            reading: "kiite",
            thai: "คีอิเตะ",
            meaning: "ฟัง / ถาม (รูป て)"
          }
        ]
      }
    ]
  },

  {
    id: 229,
    title: "กำลังทำอะไรอยู่",
    subtitle: "～ています",
    sections: [
      {
        type: "concept",
        title: "～ています",
        content: `
          <p>
            รูป <strong>～ています</strong>
            ใช้บอกว่ากำลังทำบางสิ่งอยู่
          </p>

          <div class="example-box">
            <p>たべています。</p>
            <p>กำลังกินอยู่</p>

            <p>みています。</p>
            <p>กำลังดูอยู่</p>

            <p>べんきょうしています。</p>
            <p>กำลังเรียนอยู่</p>
          </div>
        `
      },

      {
        type: "example",
        title: "สร้างประโยค",
        content: `
          <div class="example-box">
            <p>たべて + います</p>
            <p>→ たべています</p>

            <p>みて + います</p>
            <p>→ みています</p>

            <p>べんきょうして + います</p>
            <p>→ べんきょうしています</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「テレビを みています」 หมายถึงอะไร?",
        choices: [
          "ดูโทรทัศน์เมื่อวาน",
          "จะดูโทรทัศน์",
          "กำลังดูโทรทัศน์",
          "ไม่ดูโทรทัศน์"
        ],
        answer: 2,
        explanation: "～ています ใช้บอกการกระทำที่กำลังดำเนินอยู่"
      }
    ]
  },

  {
    id: 230,
    title: "กำลังทำอะไร?",
    subtitle: "なにを していますか",
    sections: [
      {
        type: "concept",
        title: "ถามว่ากำลังทำอะไร",
        content: `
          <p>
            ถ้าต้องการถามว่า
            <strong>“กำลังทำอะไรอยู่?”</strong>
            สามารถพูดว่า
          </p>

          <div class="example-box">
            <p><strong>なにを していますか。</strong></p>
            <p>กำลังทำอะไรอยู่?</p>
          </div>
        `
      },

      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="example-box">
            <p>A: なにを していますか。</p>
            <p>กำลังทำอะไรอยู่?</p>

            <p>B: ほんを よんでいます。</p>
            <p>กำลังอ่านหนังสืออยู่</p>

            <hr>

            <p>A: なにを していますか。</p>
            <p>กำลังทำอะไรอยู่?</p>

            <p>B: ごはんを たべています。</p>
            <p>กำลังกินข้าวอยู่</p>
          </div>
        `
      },

      {
        type: "vocab",
        items: [
          {
            jp: "よんでいます",
            reading: "yonde imasu",
            thai: "ยงเดะ อิมัส",
            meaning: "กำลังอ่าน"
          },
          {
            jp: "たべています",
            reading: "tabete imasu",
            thai: "ทะเบะเตะ อิมัส",
            meaning: "กำลังกิน"
          },
          {
            jp: "のんでいます",
            reading: "nonde imasu",
            thai: "นงเดะ อิมัส",
            meaning: "กำลังดื่ม"
          },
          {
            jp: "はなしています",
            reading: "hanashite imasu",
            thai: "ฮานาชิเตะ อิมัส",
            meaning: "กำลังพูด"
          }
        ]
      },

      {
        type: "practice",
        question: "「なにを していますか」 แปลว่าอะไร?",
        choices: [
          "ไปที่ไหน?",
          "กำลังทำอะไรอยู่?",
          "กินอะไร?",
          "ใครกำลังมา?"
        ],
        answer: 1,
        explanation: "なに = อะไร และ ～ていますか = กำลัง...อยู่หรือ?"
      }
    ]
  },

  {
    id: 231,
    title: "ทำกิจกรรมที่ไหน",
    subtitle: "สถานที่ + で + ～ています",
    sections: [
      {
        type: "concept",
        title: "ใช้ で กับสถานที่",
        content: `
          <p>
            เราสามารถบอกได้ว่า
            <strong>กำลังทำกิจกรรมอะไรที่ไหน</strong>
            โดยใช้ で บอกสถานที่ที่เกิดกิจกรรม
          </p>

          <div class="example-box">
            <p>がっこうで べんきょうしています。</p>
            <p>กำลังเรียนอยู่ที่โรงเรียน</p>

            <p>うちで テレビを みています。</p>
            <p>กำลังดูโทรทัศน์อยู่ที่บ้าน</p>

            <p>こうえんで あそんでいます。</p>
            <p>กำลังเล่นอยู่ที่สวนสาธารณะ</p>
          </div>
        `
      },

      {
        type: "example",
        title: "โครงสร้าง",
        content: `
          <div class="example-box">
            <p><strong>สถานที่ + で + การกระทำ</strong></p>

            <p>がっこうで</p>
            <p>→ ที่โรงเรียน</p>

            <p>べんきょうしています</p>
            <p>→ กำลังเรียนอยู่</p>

            <p>รวมกัน:</p>
            <p>がっこうで べんきょうしています。</p>
          </div>
        `
      }
    ]
  },

  {
    id: 232,
    title: "ทำกับใคร",
    subtitle: "と + ～ています",
    sections: [
      {
        type: "concept",
        title: "と ใช้บอกผู้ร่วมกิจกรรม",
        content: `
          <p>
            นอกจาก と จะใช้ในความหมายว่า “และ”
            แล้ว ยังสามารถใช้บอกว่า
            <strong>ทำบางอย่างร่วมกับใคร</strong>
            ได้ด้วย
          </p>

          <div class="example-box">
            <p>ともだちと はなします。</p>
            <p>คุยกับเพื่อน</p>

            <p>ともだちと あそびます。</p>
            <p>เล่นกับเพื่อน</p>

            <p>ともだちと ごはんを たべています。</p>
            <p>กำลังกินข้าวกับเพื่อน</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「ともだちと あそびます」 หมายถึงอะไร?",
        choices: [
          "เล่นกับเพื่อน",
          "เล่นที่โรงเรียน",
          "เล่นของเพื่อน",
          "เล่นคนเดียว"
        ],
        answer: 0,
        explanation: "と สามารถใช้บอกคนที่ร่วมทำกิจกรรมด้วยได้"
      }
    ]
  },

  {
    id: 233,
    title: "ชอบทำอะไร",
    subtitle: "～のが すきです",
    sections: [
      {
        type: "concept",
        title: "ชอบทำกิจกรรม",
        content: `
          <p>
            ถ้าต้องการพูดว่า
            <strong>“ชอบทำ...”</strong>
            สามารถใช้
            <strong>～のが すきです</strong>
          </p>

          <div class="example-box">
            <p>ほんを よむのが すきです。</p>
            <p>ชอบอ่านหนังสือ</p>

            <p>おんがくを きくのが すきです。</p>
            <p>ชอบฟังเพลง</p>

            <p>えいがを みるのが すきです。</p>
            <p>ชอบดูหนัง</p>
          </div>
        `
      },

      {
        type: "note",
        title: "の ในรูปประโยคนี้",
        content: `
          <p>
            の ช่วยเปลี่ยนการกระทำให้กลายเป็น
            สิ่งที่เราสามารถพูดว่า “ชอบ” ได้
          </p>

          <div class="example-box">
            <p>よむ</p>
            <p>→ อ่าน</p>

            <p>よむの</p>
            <p>→ การอ่าน</p>

            <p>よむのが すきです</p>
            <p>→ ชอบอ่าน</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「おんがくを きくのが すきです」 หมายถึงอะไร?",
        choices: [
          "ไม่ชอบฟังเพลง",
          "ชอบฟังเพลง",
          "กำลังฟังเพลง",
          "จะซื้อเพลง"
        ],
        answer: 1,
        explanation: "きくのが すきです = ชอบการฟัง / ชอบฟัง"
      }
    ]
  },

  {
    id: 234,
    title: "ไม่ชอบทำอะไร",
    subtitle: "～のが すきじゃありません",
    sections: [
      {
        type: "concept",
        title: "บอกสิ่งที่ไม่ชอบ",
        content: `
          <p>
            ถ้า <strong>すきです</strong> คือ “ชอบ”
            เราสามารถใช้
            <strong>すきじゃありません</strong>
            เพื่อบอกว่า “ไม่ชอบ”
          </p>

          <div class="example-box">
            <p>そうじを するのが すきじゃありません。</p>
            <p>ไม่ชอบทำความสะอาด</p>

            <p>はしるのが すきじゃありません。</p>
            <p>ไม่ชอบวิ่ง</p>

            <p>あさ はやく おきるのが すきじゃありません。</p>
            <p>ไม่ชอบตื่นเช้า</p>
          </div>
        `
      },

      {
        type: "example",
        title: "เทียบให้เห็นชัด",
        content: `
          <div class="example-box">
            <p>ほんを よむのが すきです。</p>
            <p>ชอบอ่านหนังสือ</p>

            <p>ほんを よむのが すきじゃありません。</p>
            <p>ไม่ชอบอ่านหนังสือ</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า “ไม่ชอบดูหนัง” ข้อใดถูกต้อง?",
        choices: [
          "えいがを みるのが すきです。",
          "えいがを みるのが すきじゃありません。",
          "えいがを みています。",
          "えいがを みました。"
        ],
        answer: 1,
        explanation: "すきじゃありません ใช้บอกว่าไม่ชอบ"
      }
    ]
  },

  {
    id: 235,
    title: "ทบทวนบทที่ 227–234",
    subtitle: "～ています และ ～のがすきです",
    sections: [
      {
        type: "concept",
        title: "สองรูปที่ต้องแยกให้ออก",
        content: `
          <div class="example-box">
            <p><strong>～ています</strong></p>
            <p>กำลังทำ...</p>

            <p>ほんを よんでいます。</p>
            <p>กำลังอ่านหนังสือ</p>

            <hr>

            <p><strong>～のが すきです</strong></p>
            <p>ชอบทำ...</p>

            <p>ほんを よむのが すきです。</p>
            <p>ชอบอ่านหนังสือ</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「ほんを よんでいます」 หมายถึงอะไร?",
        choices: [
          "ชอบอ่านหนังสือ",
          "กำลังอ่านหนังสือ",
          "อ่านหนังสือเมื่อวาน",
          "ไม่อ่านหนังสือ"
        ],
        answer: 1,
        explanation: "よんでいます เป็นรูป ～ています จึงหมายถึงกำลังอ่านอยู่"
      },

      {
        type: "practice",
        question: "「ほんを よむのが すきです」 หมายถึงอะไร?",
        choices: [
          "กำลังอ่านหนังสือ",
          "ไม่ชอบอ่านหนังสือ",
          "ชอบอ่านหนังสือ",
          "จะอ่านหนังสือ"
        ],
        answer: 2,
        explanation: "よむのが すきです = ชอบอ่านหนังสือ"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "～ています = กำลังทำ...",
          "なにを していますか = กำลังทำอะไรอยู่?",
          "สถานที่ทำกิจกรรมใช้ で",
          "と สามารถใช้บอกผู้ที่ทำกิจกรรมร่วมกัน",
          "～のが すきです = ชอบทำ...",
          "～のが すきじゃありません = ไม่ชอบทำ..."
        ]
      },

      {
        type: "tip",
        title: "ภารกิจท้ายบท",
        content: `
          <p>
            ลองแต่งประโยคของตัวเอง 3 ประโยค
            โดยใช้สิ่งที่เรียนมา
          </p>

          <div class="example-box">
            <p>1. บอกว่าตอนนี้กำลังทำอะไร</p>
            <p>2. บอกว่าชอบทำอะไร</p>
            <p>3. บอกว่าไม่ชอบทำอะไร</p>
          </div>
        `
      }
    ]
  }
);

// END OF LESSON 235
// LESSON 236 CONTINUES NEXT

  // ======================================================
// INTERMEDIATE COURSE
// LESSON 236–245
// ======================================================

lessons.push(
  {
    id: 236,
    title: "รูป て ของคำกริยากลุ่ม 1",
    subtitle: "う・つ・る → って",
    sections: [
      {
        type: "concept",
        title: "กฎแรกของรูป て",
        content: `
          <p>
            คำกริยากลุ่ม 1 บางคำที่ลงท้ายด้วย
            <strong>う・つ・る</strong>
            เมื่อเปลี่ยนเป็นรูป て
            จะเปลี่ยนเป็น <strong>って</strong>
          </p>

          <div class="example-box">
            <p>かいます → かって</p>
            <p>ซื้อ → รูป て = ซื้อแล้วนำไปเชื่อมต่อ</p>

            <p>まちます → まって</p>
            <p>รอ → รูป て</p>

            <p>とります → とって</p>
            <p>หยิบ / ถ่าย → รูป て</p>
          </div>
        `
      },

      {
        type: "note",
        title: "จำเป็นกลุ่ม",
        content: `
          <div class="example-box">
            <p><strong>う → って</strong></p>
            <p>かう → かって</p>

            <p><strong>つ → って</strong></p>
            <p>まつ → まって</p>

            <p><strong>る → って</strong></p>
            <p>とる → とって</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「まちます」 เปลี่ยนเป็นรูป て ได้อย่างไร?",
        choices: [
          "まいて",
          "まって",
          "まんで",
          "まして"
        ],
        answer: 1,
        explanation: "まつ ลงท้ายด้วย つ จึงเปลี่ยนเป็น まって"
      }
    ]
  },

  {
    id: 237,
    title: "รูป て ของคำกริยากลุ่ม 1",
    subtitle: "ぬ・ぶ・む → んで",
    sections: [
      {
        type: "concept",
        title: "กลุ่ม んで",
        content: `
          <p>
            คำกริยากลุ่ม 1 ที่ลงท้ายด้วย
            <strong>ぬ・ぶ・む</strong>
            จะเปลี่ยนเป็น <strong>んで</strong>
          </p>

          <div class="example-box">
            <p>しぬ → しんで</p>
            <p>ตาย → รูป て</p>

            <p>あそぶ → あそんで</p>
            <p>เล่น → รูป て</p>

            <p>よむ → よんで</p>
            <p>อ่าน → รูป て</p>

            <p>のむ → のんで</p>
            <p>ดื่ม → รูป て</p>
          </div>
        `
      },

      {
        type: "tip",
        title: "จำเป็นชุดเดียว",
        content: `
          <p>
            เห็น <strong>ぬ・ぶ・む</strong>
            ให้คิดถึงเสียง <strong>んで</strong> ทันที
          </p>

          <div class="example-box">
            <p>ぬ → んで</p>
            <p>ぶ → んで</p>
            <p>む → んで</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「よみます」 เปลี่ยนเป็นรูป て อย่างไร?",
        choices: [
          "よって",
          "よいて",
          "よんで",
          "よして"
        ],
        answer: 2,
        explanation: "よむ ลงท้ายด้วย む จึงเปลี่ยนเป็น よんで"
      }
    ]
  },

  {
    id: 238,
    title: "รูป て ของคำกริยากลุ่ม 1",
    subtitle: "く・ぐ → いて・いで",
    sections: [
      {
        type: "concept",
        title: "กลุ่ม いて / いで",
        content: `
          <p>
            คำกริยาที่ลงท้ายด้วย
            <strong>く</strong>
            โดยทั่วไปเปลี่ยนเป็น <strong>いて</strong>
          </p>

          <p>
            ส่วนคำที่ลงท้ายด้วย
            <strong>ぐ</strong>
            เปลี่ยนเป็น <strong>いで</strong>
          </p>

          <div class="example-box">
            <p>かく → かいて</p>
            <p>เขียน → รูป て</p>

            <p>きく → きいて</p>
            <p>ฟัง / ถาม → รูป て</p>

            <p>およぐ → およいで</p>
            <p>ว่ายน้ำ → รูป て</p>
          </div>
        `
      },

      {
        type: "note",
        title: "ข้อควรจำ",
        content: `
          <p>
            มีคำหนึ่งที่ควรจำเป็นพิเศษ
          </p>

          <div class="example-box">
            <p>いく → いって</p>
            <p>ไป → รูป て</p>
          </div>

          <p>
            คำว่า <strong>いく</strong>
            เป็นข้อยกเว้น ไม่เปลี่ยนเป็น いいて
          </p>
        `
      },

      {
        type: "practice",
        question: "「かきます」 เปลี่ยนเป็นรูป て อย่างไร?",
        choices: [
          "かって",
          "かいて",
          "かんで",
          "かして"
        ],
        answer: 1,
        explanation: "かく ลงท้ายด้วย く จึงเปลี่ยนเป็น かいて"
      }
    ]
  },

  {
    id: 239,
    title: "รูป て ของคำกริยากลุ่ม 1",
    subtitle: "す → して",
    sections: [
      {
        type: "concept",
        title: "คำกริยาที่ลงท้ายด้วย す",
        content: `
          <p>
            คำกริยากลุ่ม 1 ที่ลงท้ายด้วย
            <strong>す</strong>
            จะเปลี่ยนเป็น <strong>して</strong>
          </p>

          <div class="example-box">
            <p>はなす → はなして</p>
            <p>พูด → รูป て</p>

            <p>けす → けして</p>
            <p>ลบ / ปิด → รูป て</p>

            <p>だす → だして</p>
            <p>เอาออก / ส่งออก → รูป て</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「はなします」 เปลี่ยนเป็นรูป て อย่างไร?",
        choices: [
          "はなんで",
          "はなって",
          "はなして",
          "はないて"
        ],
        answer: 2,
        explanation: "はなす ลงท้ายด้วย す จึงเปลี่ยนเป็น はなして"
      },

      {
        type: "check",
        title: "สรุปกฎกลุ่ม 1",
        items: [
          "う・つ・る → って",
          "ぬ・ぶ・む → んで",
          "く → いて",
          "ぐ → いで",
          "す → して",
          "いく → いって เป็นข้อยกเว้น"
        ]
      }
    ]
  },

  {
    id: 240,
    title: "รูป て ของคำกริยากลุ่ม 2",
    subtitle: "ตัด る แล้วเติม て",
    sections: [
      {
        type: "concept",
        title: "กลุ่ม 2 ง่ายกว่าที่คิด",
        content: `
          <p>
            คำกริยากลุ่ม 2 จำนวนมากที่อยู่ในรูป ます
            สามารถดูส่วนก่อน ます แล้วเติม てได้
          </p>

          <div class="example-box">
            <p>たべます → たべて</p>
            <p>กิน → รูป て</p>

            <p>みます → みて</p>
            <p>ดู → รูป て</p>

            <p>おきます → おきて</p>
            <p>ตื่น → รูป て</p>

            <p>ねます → ねて</p>
            <p>นอน → รูป て</p>
          </div>
        `
      },

      {
        type: "note",
        title: "สังเกตง่าย ๆ",
        content: `
          <p>
            ในบทนี้ให้จำตัวอย่างหลัก ๆ ก่อน
            เพราะคำกริยาที่หน้าตาคล้ายกันบางคำ
            อาจอยู่คนละกลุ่มได้
          </p>

          <div class="example-box">
            <p>たべます → たべて</p>
            <p>みます → みて</p>
            <p>ねます → ねて</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「たべます」 เป็นรูป て ข้อใด?",
        choices: [
          "たべって",
          "たべんで",
          "たべて",
          "たべいて"
        ],
        answer: 2,
        explanation: "たべます → たべて"
      }
    ]
  },

  {
    id: 241,
    title: "รูป て ของคำกริยาพิเศษ",
    subtitle: "します・きます",
    sections: [
      {
        type: "concept",
        title: "คำกริยาที่ต้องจำ",
        content: `
          <p>
            คำกริยาบางคำไม่ได้เปลี่ยนตามกฎกลุ่ม 1
            หรือกลุ่ม 2 แบบทั่วไป
          </p>

          <div class="example-box">
            <p>します → して</p>
            <p>ทำ → รูป て</p>

            <p>きます → きて</p>
            <p>มา → รูป て</p>
          </div>
        `
      },

      {
        type: "example",
        title: "นำไปใช้",
        content: `
          <div class="example-box">
            <p>べんきょうします</p>
            <p>→ べんきょうして</p>

            <p>そうじします</p>
            <p>→ そうじして</p>

            <p>きます</p>
            <p>→ きて</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「します」 เปลี่ยนเป็นรูป て อย่างไร?",
        choices: [
          "しって",
          "しんで",
          "して",
          "しいて"
        ],
        answer: 2,
        explanation: "します → して เป็นรูปที่ต้องจำ"
      }
    ]
  },

  {
    id: 242,
    title: "ขอร้องอย่างสุภาพ",
    subtitle: "～てください",
    sections: [
      {
        type: "concept",
        title: "～てください",
        content: `
          <p>
            เมื่อเราเติม <strong>ください</strong>
            หลังรูป て
            จะใช้สำหรับการขอร้องอย่างสุภาพ
            มีความหมายประมาณว่า
            <strong>“กรุณา...”</strong> หรือ
            <strong>“ช่วย...ให้หน่อย”</strong>
          </p>

          <div class="example-box">
            <p>みてください。</p>
            <p>กรุณาดู / ช่วยดูให้หน่อย</p>

            <p>きいてください。</p>
            <p>กรุณาฟัง / ช่วยฟังหน่อย</p>

            <p>まってください。</p>
            <p>กรุณารอ / รอหน่อย</p>

            <p>よんでください。</p>
            <p>กรุณาอ่าน / ช่วยอ่านหน่อย</p>
          </div>
        `
      },

      {
        type: "example",
        title: "ในสถานการณ์จริง",
        content: `
          <div class="example-box">
            <p>ちょっと まってください。</p>
            <p>กรุณารอสักครู่</p>

            <p>ここを みてください。</p>
            <p>กรุณาดูตรงนี้</p>

            <p>もういちど いってください。</p>
            <p>กรุณาพูดอีกครั้ง</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「まってください」 หมายถึงอะไร?",
        choices: [
          "กำลังรอ",
          "กรุณารอ",
          "รอเมื่อวาน",
          "ไม่ต้องรอ"
        ],
        answer: 1,
        explanation: "รูป て + ください ใช้ขอร้องอย่างสุภาพ"
      }
    ]
  },

  {
    id: 243,
    title: "ห้ามทำ",
    subtitle: "～てはいけません",
    sections: [
      {
        type: "concept",
        title: "～てはいけません",
        content: `
          <p>
            รูป <strong>～てはいけません</strong>
            ใช้บอกว่า
            <strong>“ห้าม...”</strong>
            หรือ
            <strong>“ไม่อนุญาตให้...”</strong>
          </p>

          <div class="example-box">
            <p>ここで たばこを すってはいけません。</p>
            <p>ห้ามสูบบุหรี่ที่นี่</p>

            <p>ここに はいってはいけません。</p>
            <p>ห้ามเข้าไปที่นี่</p>

            <p>しゃしんを とってはいけません。</p>
            <p>ห้ามถ่ายรูป</p>
          </div>
        `
      },

      {
        type: "note",
        title: "โครงสร้าง",
        content: `
          <div class="example-box">
            <p><strong>กริยารูป て + は + いけません</strong></p>

            <p>はいって</p>
            <p>→ เข้า</p>

            <p>はいってはいけません。</p>
            <p>→ ห้ามเข้า</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「ここに はいってはいけません」 หมายถึงอะไร?",
        choices: [
          "กรุณาเข้าที่นี่",
          "กำลังเข้าที่นี่",
          "ห้ามเข้าที่นี่",
          "จะเข้าที่นี่"
        ],
        answer: 2,
        explanation: "～てはいけません ใช้บอกข้อห้าม"
      }
    ]
  },

  {
    id: 244,
    title: "ไม่เป็นไร / ได้ไหม?",
    subtitle: "～てもいいです",
    sections: [
      {
        type: "concept",
        title: "ขออนุญาต",
        content: `
          <p>
            ถ้า <strong>～てはいけません</strong>
            หมายถึง “ห้าม...”
          </p>

          <p>
            <strong>～てもいいです</strong>
            ใช้ถามหรือบอกว่า
            <strong>“ทำ...ได้ไหม / ทำ...ได้”</strong>
          </p>

          <div class="example-box">
            <p>ここに すわっても いいですか。</p>
            <p>นั่งตรงนี้ได้ไหม?</p>

            <p>はい、いいです。</p>
            <p>ได้</p>

            <p>しゃしんを とっても いいですか。</p>
            <p>ถ่ายรูปได้ไหม?</p>
          </div>
        `
      },

      {
        type: "example",
        title: "ตอบรับและปฏิเสธ",
        content: `
          <div class="example-box">
            <p><strong>ถาม</strong></p>
            <p>ここに すわっても いいですか。</p>
            <p>นั่งตรงนี้ได้ไหม?</p>

            <p><strong>ตอบรับ</strong></p>
            <p>はい、いいです。</p>
            <p>ได้</p>

            <p><strong>ตอบปฏิเสธ</strong></p>
            <p>すみません、ちょっと...</p>
            <p>ขอโทษนะ แต่คงไม่ได้...</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「しゃしんを とっても いいですか」 หมายถึงอะไร?",
        choices: [
          "ห้ามถ่ายรูป",
          "กำลังถ่ายรูป",
          "ถ่ายรูปได้ไหม?",
          "ถ่ายรูปไม่ได้"
        ],
        answer: 2,
        explanation: "～てもいいですか ใช้ถามขออนุญาต"
      }
    ]
  },

  {
    id: 245,
    title: "ทบทวนรูป て",
    subtitle: "て・ています・てください・てもいい",
    sections: [
      {
        type: "concept",
        title: "รูป て ทำอะไรได้บ้าง?",
        content: `
          <p>
            ตอนนี้เราเริ่มเห็นแล้วว่า
            รูป て ไม่ได้มีความหมายเดียว
            แต่สามารถนำไปสร้างรูปประโยคต่าง ๆ ได้
          </p>

          <div class="example-box">
            <p><strong>～ています</strong></p>
            <p>กำลังทำ...</p>

            <p>べんきょうしています。</p>
            <p>กำลังเรียนอยู่</p>

            <hr>

            <p><strong>～てください</strong></p>
            <p>กรุณา...</p>

            <p>みてください。</p>
            <p>กรุณาดู</p>

            <hr>

            <p><strong>～てもいいですか</strong></p>
            <p>...ได้ไหม?</p>

            <p>はいっても いいですか。</p>
            <p>เข้าได้ไหม?</p>

            <hr>

            <p><strong>～てはいけません</strong></p>
            <p>ห้าม...</p>

            <p>はいってはいけません。</p>
            <p>ห้ามเข้า</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「ここで しゃしんを とっても いいですか」 เป็นการใช้รูป て แบบใด?",
        choices: [
          "กำลังทำ",
          "ขอร้อง",
          "ขออนุญาต",
          "ห้ามทำ"
        ],
        answer: 2,
        explanation: "～てもいいですか ใช้สำหรับถามว่า “...ได้ไหม?”"
      },

      {
        type: "practice",
        question: "「ここで たべてはいけません」 หมายถึงอะไร?",
        choices: [
          "กินที่นี่ได้ไหม?",
          "กรุณากินที่นี่",
          "กำลังกินที่นี่",
          "ห้ามกินที่นี่"
        ],
        answer: 3,
        explanation: "～てはいけません หมายถึงห้ามทำ"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "う・つ・る → って",
          "ぬ・ぶ・む → んで",
          "く → いて",
          "ぐ → いで",
          "す → して",
          "いく → いって",
          "กลุ่ม 2 เช่น たべる → たべて",
          "します → して",
          "きます → きて",
          "～てください = กรุณา...",
          "～ています = กำลัง...",
          "～てもいいですか = ...ได้ไหม?",
          "～てはいけません = ห้าม..."
        ]
      },

      {
        type: "tip",
        title: "ภารกิจท้ายช่วง",
        content: `
          <p>
            ลองแต่งประโยคเองโดยใช้รูป て
            อย่างน้อย 4 ประโยค
          </p>

          <div class="example-box">
            <p>1. ประโยค ～ています</p>
            <p>2. ประโยค ～てください</p>
            <p>3. ประโยค ～てもいいですか</p>
            <p>4. ประโยค ～てはいけません</p>
          </div>
        `
      }
    ]
  }
);

// END OF LESSON 245
// LESSON 246 CONTINUES NEXT

  // ======================================================
// INTERMEDIATE COURSE
// LESSON 246–255
// ======================================================

lessons.push(
  {
    id: 246,
    title: "รูป ない คืออะไร?",
    subtitle: "รูปปฏิเสธของคำกริยา",
    sections: [
      {
        type: "concept",
        title: "รู้จักรูป ない",
        content: `
          <p>
            รูป <strong>ない</strong> เป็นรูปปฏิเสธของคำกริยา
            ใช้เพื่อบอกว่า “ไม่ทำ...” หรือ “ไม่ได้ทำ...”
          </p>

          <div class="example-box">
            <p>たべる → たべない</p>
            <p>กิน → ไม่กิน</p>

            <p>のむ → のまない</p>
            <p>ดื่ม → ไม่ดื่ม</p>

            <p>いく → いかない</p>
            <p>ไป → ไม่ไป</p>
          </div>
        `
      },

      {
        type: "note",
        title: "ต่างจาก ～ません อย่างไร?",
        content: `
          <p>
            ก่อนหน้านี้เราเรียนรูปสุภาพ
            <strong>～ません</strong>
            มาแล้ว
          </p>

          <div class="example-box">
            <p>たべません</p>
            <p>ไม่กิน — รูปสุภาพ</p>

            <p>たべない</p>
            <p>ไม่กิน — รูปธรรมดา</p>
          </div>

          <p>
            ความหมายหลักใกล้กัน
            แต่รูป ない เป็นรูปธรรมดาที่เราจะนำไปใช้
            สร้างไวยากรณ์อื่น ๆ ต่อไป
          </p>
        `
      },

      {
        type: "practice",
        question: "「たべない」 หมายถึงอะไร?",
        choices: [
          "กิน",
          "กำลังกิน",
          "ไม่กิน",
          "กินแล้ว"
        ],
        answer: 2,
        explanation: "たべない เป็นรูปปฏิเสธธรรมดาของ たべる"
      }
    ]
  },

  {
    id: 247,
    title: "การเปลี่ยนคำกริยาเป็นรูป ない",
    subtitle: "กฎของคำกริยากลุ่ม 1",
    sections: [
      {
        type: "concept",
        title: "กลุ่ม 1",
        content: `
          <p>
            สำหรับคำกริยากลุ่ม 1
            ให้เปลี่ยนเสียงท้ายจากแถว う
            ไปเป็นแถว あ แล้วเติม ない
          </p>

          <div class="example-box">
            <p>かく → かかない</p>
            <p>เขียน → ไม่เขียน</p>

            <p>のむ → のまない</p>
            <p>ดื่ม → ไม่ดื่ม</p>

            <p>はなす → はなさない</p>
            <p>พูด → ไม่พูด</p>

            <p>まつ → またない</p>
            <p>รอ → ไม่รอ</p>
          </div>
        `
      },

      {
        type: "note",
        title: "จำหลักง่าย ๆ",
        content: `
          <div class="example-box">
            <p>う → わない</p>
            <p>く → かない</p>
            <p>ぐ → がない</p>
            <p>す → さない</p>
            <p>つ → たない</p>
            <p>ぬ → なない</p>
            <p>ぶ → ばない</p>
            <p>む → まない</p>
            <p>る → らない</p>
          </div>

          <p>
            จุดสำคัญคือคำที่ลงท้ายด้วย
            <strong>う</strong>
            จะเปลี่ยนเป็น
            <strong>わない</strong>
            ไม่ใช่ あない
          </p>
        `
      },

      {
        type: "practice",
        question: "「よむ」 เปลี่ยนเป็นรูป ない อย่างไร?",
        choices: [
          "よらない",
          "よまない",
          "よばない",
          "よさない"
        ],
        answer: 1,
        explanation: "よむ → よまない"
      }
    ]
  },

  {
    id: 248,
    title: "รูป ない ของกลุ่ม 2",
    subtitle: "る → ない",
    sections: [
      {
        type: "concept",
        title: "กลุ่ม 2",
        content: `
          <p>
            คำกริยากลุ่ม 2 ที่ลงท้ายด้วย る
            สามารถตัด る แล้วเติม
            <strong>ない</strong>
          </p>

          <div class="example-box">
            <p>たべる → たべない</p>
            <p>กิน → ไม่กิน</p>

            <p>みる → みない</p>
            <p>ดู → ไม่ดู</p>

            <p>おきる → おきない</p>
            <p>ตื่น → ไม่ตื่น</p>

            <p>ねる → ねない</p>
            <p>นอน → ไม่นอน</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「みる」 เปลี่ยนเป็นรูป ない อย่างไร?",
        choices: [
          "みらない",
          "みまない",
          "みない",
          "みらないで"
        ],
        answer: 2,
        explanation: "みる → みない"
      },

      {
        type: "tip",
        title: "ระวังคำกริยาที่หน้าตาคล้ายกัน",
        content: `
          <p>
            คำกริยาที่ลงท้ายด้วย る ไม่ได้เป็นกลุ่ม 2 ทุกคำ
            ดังนั้นเมื่อเรียนคำใหม่
            ควรจำกลุ่มของคำนั้นไปพร้อมกับคำศัพท์
          </p>
        `
      }
    ]
  },

  {
    id: 249,
    title: "คำกริยาพิเศษในรูป ない",
    subtitle: "する・くる",
    sections: [
      {
        type: "concept",
        title: "คำที่ต้องจำ",
        content: `
          <p>
            คำกริยาพิเศษมีการเปลี่ยนรูปที่ต้องจำ
          </p>

          <div class="example-box">
            <p>する → しない</p>
            <p>ทำ → ไม่ทำ</p>

            <p>くる → こない</p>
            <p>มา → ไม่มา</p>
          </div>
        `
      },

      {
        type: "example",
        title: "คำที่มี する",
        content: `
          <div class="example-box">
            <p>べんきょうする</p>
            <p>→ べんきょうしない</p>
            <p>ไม่เรียน</p>

            <p>そうじする</p>
            <p>→ そうじしない</p>
            <p>ไม่ทำความสะอาด</p>

            <p>りょうりする</p>
            <p>→ りょうりしない</p>
            <p>ไม่ทำอาหาร</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「くる」 เปลี่ยนเป็นรูป ない อย่างไร?",
        choices: [
          "くない",
          "きない",
          "こない",
          "くらない"
        ],
        answer: 2,
        explanation: "くる → こない"
      }
    ]
  },

  {
    id: 250,
    title: "ทบทวนรูป ない",
    subtitle: "รูปปฏิเสธธรรมดา",
    sections: [
      {
        type: "concept",
        title: "สรุปทั้งหมด",
        content: `
          <div class="example-box">
            <p><strong>กลุ่ม 1</strong></p>
            <p>よむ → よまない</p>
            <p>かく → かかない</p>
            <p>はなす → はなさない</p>

            <hr>

            <p><strong>กลุ่ม 2</strong></p>
            <p>たべる → たべない</p>
            <p>みる → みない</p>

            <hr>

            <p><strong>พิเศษ</strong></p>
            <p>する → しない</p>
            <p>くる → こない</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "ข้อใดคือรูป ない ของ 「かく」?",
        choices: [
          "かいて",
          "かかない",
          "かきない",
          "かった"
        ],
        answer: 1,
        explanation: "かく → かかない"
      },

      {
        type: "practice",
        question: "ข้อใดคือรูป ない ของ 「たべる」?",
        choices: [
          "たべない",
          "たべらない",
          "たばない",
          "たべません"
        ],
        answer: 0,
        explanation: "たべる → たべない"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "รูป ない เป็นรูปปฏิเสธธรรมดา",
          "กลุ่ม 1 เปลี่ยนเสียงท้ายไปแถว あ แล้วเติม ない",
          "う → わない",
          "กลุ่ม 2 ตัด る แล้วเติม ない",
          "する → しない",
          "くる → こない"
        ]
      }
    ]
  },

  {
    id: 251,
    title: "อย่าทำ...",
    subtitle: "～ないでください",
    sections: [
      {
        type: "concept",
        title: "～ないでください",
        content: `
          <p>
            เราเคยเรียน
            <strong>～てください</strong>
            สำหรับการขอร้องว่า “กรุณาทำ...”
          </p>

          <p>
            ถ้าต้องการพูดว่า
            <strong>“กรุณาอย่าทำ...”</strong>
            ใช้
            <strong>～ないでください</strong>
          </p>

          <div class="example-box">
            <p>ここで たべないでください。</p>
            <p>กรุณาอย่ากินที่นี่</p>

            <p>はいらないでください。</p>
            <p>กรุณาอย่าเข้า</p>

            <p>わすれないでください。</p>
            <p>กรุณาอย่าลืม</p>
          </div>
        `
      },

      {
        type: "example",
        title: "เปรียบเทียบ",
        content: `
          <div class="example-box">
            <p>みてください。</p>
            <p>กรุณาดู</p>

            <p>みないでください。</p>
            <p>กรุณาอย่าดู</p>

            <hr>

            <p>はいってください。</p>
            <p>กรุณาเข้า</p>

            <p>はいらないでください。</p>
            <p>กรุณาอย่าเข้า</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「わすれないでください」 หมายถึงอะไร?",
        choices: [
          "กรุณาจำ",
          "กรุณาอย่าลืม",
          "กำลังลืม",
          "ลืมแล้ว"
        ],
        answer: 1,
        explanation: "รูป ないでください ใช้ขอร้องไม่ให้ทำสิ่งนั้น"
      }
    ]
  },

  {
    id: 252,
    title: "ต้องทำ...",
    subtitle: "～なければなりません",
    sections: [
      {
        type: "concept",
        title: "ความหมายของ ～なければなりません",
        content: `
          <p>
            รูป
            <strong>～なければなりません</strong>
            ใช้บอกว่า
            <strong>“ต้อง...”</strong>
            หรือ
            <strong>“จำเป็นต้อง...”</strong>
          </p>

          <div class="example-box">
            <p>べんきょうしなければなりません。</p>
            <p>ต้องเรียน</p>

            <p>いかなければなりません。</p>
            <p>ต้องไป</p>

            <p>しゅくだいを しなければなりません。</p>
            <p>ต้องทำการบ้าน</p>
          </div>
        `
      },

      {
        type: "note",
        title: "โครงสร้าง",
        content: `
          <p>
            รูปนี้สร้างจากรูปปฏิเสธ ない
            แล้วเปลี่ยนส่วนท้ายเป็น
            <strong>なければなりません</strong>
          </p>

          <div class="example-box">
            <p>いかない</p>
            <p>→ いかなければなりません</p>
            <p>ต้องไป</p>

            <p>たべない</p>
            <p>→ たべなければなりません</p>
            <p>ต้องกิน</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「べんきょうしなければなりません」 หมายถึงอะไร?",
        choices: [
          "ไม่ต้องเรียน",
          "กำลังเรียน",
          "ต้องเรียน",
          "ห้ามเรียน"
        ],
        answer: 2,
        explanation: "～なければなりません ใช้บอกสิ่งที่ต้องทำ"
      }
    ]
  },

  {
    id: 253,
    title: "ไม่ต้องทำก็ได้",
    subtitle: "～なくてもいいです",
    sections: [
      {
        type: "concept",
        title: "～なくてもいいです",
        content: `
          <p>
            รูป
            <strong>～なくてもいいです</strong>
            ใช้บอกว่า
            <strong>“ไม่ต้อง...ก็ได้”</strong>
            หรือ
            <strong>“ไม่ทำก็ได้”</strong>
          </p>

          <div class="example-box">
            <p>いかなくても いいです。</p>
            <p>ไม่ไปก็ได้</p>

            <p>たべなくても いいです。</p>
            <p>ไม่กินก็ได้</p>

            <p>しゅくだいを しなくても いいです。</p>
            <p>ไม่ทำการบ้านก็ได้</p>
          </div>
        `
      },

      {
        type: "example",
        title: "เทียบกับ ～なければなりません",
        content: `
          <div class="example-box">
            <p><strong>しなければなりません。</strong></p>
            <p>ต้องทำ</p>

            <p><strong>しなくても いいです。</strong></p>
            <p>ไม่ทำก็ได้</p>

            <hr>

            <p><strong>いかなければなりません。</strong></p>
            <p>ต้องไป</p>

            <p><strong>いかなくても いいです。</strong></p>
            <p>ไม่ไปก็ได้</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "「しなくても いいです」 หมายถึงอะไร?",
        choices: [
          "ต้องทำ",
          "ห้ามทำ",
          "กำลังทำ",
          "ไม่ทำก็ได้"
        ],
        answer: 3,
        explanation: "～なくてもいいです หมายถึงไม่จำเป็นต้องทำ"
      }
    ]
  },

  {
    id: 254,
    title: "ต้องทำไหม?",
    subtitle: "การถามเรื่องความจำเป็น",
    sections: [
      {
        type: "concept",
        title: "ถามว่าจำเป็นหรือไม่",
        content: `
          <p>
            เมื่อเจอรูป
            <strong>～なければなりません</strong>
            เราสามารถนำไปใช้ถามเกี่ยวกับกฎ
            หน้าที่ หรือสิ่งที่จำเป็นต้องทำได้
          </p>

          <div class="example-box">
            <p>あした がっこうへ いかなければなりませんか。</p>
            <p>พรุ่งนี้ต้องไปโรงเรียนไหม?</p>

            <p>はい、いかなければなりません。</p>
            <p>ใช่ ต้องไป</p>

            <p>いいえ、いかなくても いいです。</p>
            <p>ไม่ ไม่ไปก็ได้</p>
          </div>
        `
      },

      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="example-box">
            <p>A: しゅくだいを しなければなりませんか。</p>
            <p>ต้องทำการบ้านไหม?</p>

            <p>B: はい、しなければなりません。</p>
            <p>ใช่ ต้องทำ</p>

            <hr>

            <p>A: きょう がっこうへ いかなければなりませんか。</p>
            <p>วันนี้ต้องไปโรงเรียนไหม?</p>

            <p>B: いいえ、いかなくても いいです。</p>
            <p>ไม่ ไม่ไปก็ได้</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "ถ้าจะตอบว่า “ไม่ต้องไปก็ได้” ควรตอบอย่างไร?",
        choices: [
          "いかなければなりません。",
          "いってください。",
          "いかなくても いいです。",
          "いってはいけません。"
        ],
        answer: 2,
        explanation: "いかなくてもいいです = ไม่ไปก็ได้"
      }
    ]
  },

  {
    id: 255,
    title: "ทบทวนรูปปฏิเสธและความจำเป็น",
    subtitle: "ない・ないで・なければ・なくても",
    sections: [
      {
        type: "concept",
        title: "4 รูปสำคัญ",
        content: `
          <div class="example-box">
            <p><strong>～ない</strong></p>
            <p>ไม่...</p>
            <p>たべない。</p>

            <hr>

            <p><strong>～ないでください</strong></p>
            <p>กรุณาอย่า...</p>
            <p>たべないでください。</p>

            <hr>

            <p><strong>～なければなりません</strong></p>
            <p>ต้อง...</p>
            <p>たべなければなりません。</p>

            <hr>

            <p><strong>～なくてもいいです</strong></p>
            <p>ไม่...ก็ได้</p>
            <p>たべなくても いいです。</p>
          </div>
        `
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “กรุณาอย่ากิน”?",
        choices: [
          "たべてください。",
          "たべないでください。",
          "たべなければなりません。",
          "たべなくても いいです。"
        ],
        answer: 1,
        explanation: "～ないでください = กรุณาอย่าทำ..."
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “ต้องเรียน”?",
        choices: [
          "べんきょうしなくても いいです。",
          "べんきょうしないでください。",
          "べんきょうしなければなりません。",
          "べんきょうしています。"
        ],
        answer: 2,
        explanation: "～なければなりません = ต้อง / จำเป็นต้อง"
      },

      {
        type: "practice",
        question: "ข้อใดหมายถึง “ไม่ทำก็ได้”?",
        choices: [
          "しなければなりません。",
          "しなくても いいです。",
          "しないでください。",
          "しています。"
        ],
        answer: 1,
        explanation: "～なくてもいいです = ไม่ทำก็ได้"
      },

      {
        type: "check",
        title: "เช็กความเข้าใจ",
        items: [
          "～ない = ไม่...",
          "～ないでください = กรุณาอย่าทำ...",
          "～なければなりません = ต้องทำ...",
          "～なくてもいいです = ไม่ทำก็ได้",
          "する → しない",
          "くる → こない",
          "いく → いかない",
          "たべる → たべない"
        ]
      },

      {
        type: "tip",
        title: "ภารกิจท้ายช่วง",
        content: `
          <p>
            ลองแต่งประโยค 4 แบบจากกริยาเดียวกัน
            เช่น たべる
          </p>

          <div class="example-box">
            <p>たべない。</p>
            <p>ไม่กิน</p>

            <p>たべないでください。</p>
            <p>กรุณาอย่ากิน</p>

            <p>たべなければなりません。</p>
            <p>ต้องกิน</p>

            <p>たべなくても いいです。</p>
            <p>ไม่กินก็ได้</p>
          </div>
        `
      }
    ]
  }
);

// END OF LESSON 255
// LESSON 256 CONTINUES NEXT
lessons.push(
  // =========================================================
  // LESSON 256
  // =========================================================
  {
    id: 256,
    title: "ทำโดยไม่... — ～ないで",
    sections: [
      {
        type: "concept",
        title: "～ないで คืออะไร?",
        content: `
          <p><strong>～ないで</strong> ใช้บอกว่า “โดยไม่ทำ...” หรือ “อย่าทำ...” ขึ้นอยู่กับบริบท</p>
          <p>วันนี้เราจะเน้นความหมาย <strong>“ทำสิ่งหนึ่งโดยไม่ทำอีกสิ่งหนึ่ง”</strong></p>
          <div class="formula-box">
            <p>รูป ない → ตัด い → เติม で</p>
            <p><strong>たべない → たべないで</strong></p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "ตัวอย่างคำกริยา",
        items: [
          { jp: "たべないで", reading: "たべないで", thai: "ทาเบะไนเดะ", meaning: "โดยไม่กิน" },
          { jp: "のみないで", reading: "のみないで", thai: "โนะมิไนเดะ", meaning: "โดยไม่ดื่ม" },
          { jp: "みないで", reading: "みないで", thai: "มินัยเดะ", meaning: "โดยไม่ดู" },
          { jp: "いわないで", reading: "いわないで", thai: "อิวะไนเดะ", meaning: "โดยไม่พูด" }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างประโยค",
        content: `
          <div class="example-box">
            <p><strong>あさごはんを たべないで、がっこうへ いきました。</strong></p>
            <p>ฉันไปโรงเรียนโดยไม่ได้กินอาหารเช้า</p>
            <hr>
            <p><strong>テレビを みないで、べんきょうしました。</strong></p>
            <p>ฉันอ่านหนังสือโดยไม่ดูทีวี</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง “ไปโดยไม่ดื่มน้ำ”?",
        choices: [
          "みずを のんで、いきます。",
          "みずを のまないで、いきます。",
          "みずを のみました。",
          "みずを のまなくてもいいです。"
        ],
        answer: 1,
        explanation: "のまない → のまないで = โดยไม่ดื่ม"
      }
    ]
  },

  // =========================================================
  // LESSON 257
  // =========================================================
  {
    id: 257,
    title: "ต้องทำ — ～ないといけません / ～ないと",
    sections: [
      {
        type: "concept",
        title: "รูป ～ないといけません",
        content: `
          <p><strong>～ないといけません</strong> หมายถึง “ต้อง...”</p>
          <p>เป็นอีกวิธีหนึ่งในการพูดเรื่องความจำเป็น</p>
          <div class="formula-box">
            <p><strong>รูป ない + といけません</strong></p>
            <p>べんきょうしない → べんきょうしないといけません</p>
          </div>
        `
      },
      {
        type: "note",
        title: "แล้ว ～ないと ล่ะ?",
        content: `
          <p>ในการพูดคุยทั่วไป คนญี่ปุ่นอาจย่อเป็น <strong>～ないと</strong></p>
          <p>เช่น</p>
          <p><strong>べんきょうしないと。</strong></p>
          <p>ประมาณว่า “ต้องอ่านหนังสือแล้วล่ะ”</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>しゅくだいを しないといけません。</strong></p>
            <p>ต้องทำการบ้าน</p>
            <hr>
            <p><strong>あした はやく おきないと。</strong></p>
            <p>พรุ่งนี้ต้องตื่นเช้าแล้วล่ะ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“ต้องไปโรงเรียน” ข้อใดถูกต้อง?",
        choices: [
          "がっこうへ いかないといけません。",
          "がっこうへ いってはいけません。",
          "がっこうへ いかなくてもいいです。",
          "がっこうへ いかないでください。"
        ],
        answer: 0,
        explanation: "いかない + といけません = ต้องไป"
      }
    ]
  },

  // =========================================================
  // LESSON 258
  // =========================================================
  {
    id: 258,
    title: "รูป なくて — ไม่...และ / เพราะไม่...",
    sections: [
      {
        type: "concept",
        title: "รูป なくて",
        content: `
          <p>รูป <strong>なくて</strong> เกิดจากรูป ない โดยเปลี่ยน <strong>ない → なくて</strong></p>
          <p>สามารถใช้เชื่อมความหมายว่า “ไม่...และ...” หรือในบางประโยคใช้บอกเหตุผลว่า “เพราะไม่...”</p>
          <div class="formula-box">
            <p>たべない → たべなくて</p>
            <p>いかない → いかなくて</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>おかねが なくて、こまりました。</strong></p>
            <p>ไม่มีเงิน เลยลำบาก/เดือดร้อน</p>
            <hr>
            <p><strong>じかんが なくて、できませんでした。</strong></p>
            <p>เพราะไม่มีเวลา จึงทำไม่ได้</p>
          </div>
        `
      },
      {
        type: "note",
        title: "จำรูปให้แม่น",
        content: `
          <p><strong>ない → なくて</strong></p>
          <p>ไม่ต้องเปลี่ยนทั้งคำ แค่เปลี่ยนส่วนท้าย</p>
        `
      },
      {
        type: "practice",
        question: "ข้อใดเป็นรูป なくて ของ ない?",
        choices: ["ないて", "なくて", "なって", "なかて"],
        answer: 1,
        explanation: "ない เปลี่ยนเป็น なくて"
      }
    ]
  },

  // =========================================================
  // LESSON 259
  // =========================================================
  {
    id: 259,
    title: "ไม่ควรทำ... — ～ないほうがいいです",
    sections: [
      {
        type: "concept",
        title: "การให้คำแนะนำแบบไม่ควร",
        content: `
          <p><strong>～ないほうがいいです</strong> ใช้แนะนำว่า “ไม่ควร...” หรือ “น่าจะไม่...ดีกว่า”</p>
          <div class="formula-box">
            <p><strong>รูป ない + ほうがいいです</strong></p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "ตัวอย่าง",
        items: [
          { jp: "たべないほうがいいです", reading: "たべないほうがいいです", thai: "ทะเบะไน โฮวกะ อี้เดสึ", meaning: "ไม่ควรกิน" },
          { jp: "いかないほうがいいです", reading: "いかないほうがいいです", thai: "อิคะไน โฮวกะ อี้เดสึ", meaning: "ไม่ควรไป" },
          { jp: "おそくまで おきないほうがいいです", reading: "おそくまで おきないほうがいいです", thai: "โอะโซะคุมาเดะ โอะคิไน โฮวกะ อี้เดสึ", meaning: "ไม่ควรตื่น/นอนดึกจนเกินไป" }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างประโยค",
        content: `
          <div class="example-box">
            <p><strong>そんなに たべないほうが いいです。</strong></p>
            <p>ไม่ควรกินเยอะขนาดนั้น</p>
            <hr>
            <p><strong>あぶないですから、そこへ いかないほうが いいです。</strong></p>
            <p>เพราะอันตราย ไม่ไปที่นั่นน่าจะดีกว่า</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "～ないほうがいいです มีความหมายใกล้เคียงข้อใด?",
        choices: ["ควรทำ", "อยากทำ", "ไม่ควรทำ", "ทำได้"],
        answer: 2,
        explanation: "ใช้เพื่อแนะนำว่าไม่ควรทำ"
      }
    ]
  },

  // =========================================================
  // LESSON 260
  // =========================================================
  {
    id: 260,
    title: "ทบทวน ない-form แบบเต็ม",
    sections: [
      {
        type: "check",
        title: "4 รูปสำคัญ",
        items: [
          "～ないでください = กรุณาอย่า...",
          "～なければなりません = ต้อง...",
          "～なくてもいいです = ไม่ต้อง...ก็ได้",
          "～ないほうがいいです = ไม่ควร..."
        ]
      },
      {
        type: "example",
        title: "ลองเปรียบเทียบ",
        content: `
          <div class="example-box">
            <p><strong>ここで たべないでください。</strong></p>
            <p>กรุณาอย่ากินที่นี่</p>
            <hr>
            <p><strong>くすりを のまなければなりません。</strong></p>
            <p>ต้องกินยา</p>
            <hr>
            <p><strong>あしたは こなくてもいいです。</strong></p>
            <p>พรุ่งนี้ไม่มาก็ได้</p>
            <hr>
            <p><strong>そんなに おそくまで おきないほうがいいです。</strong></p>
            <p>ไม่ควรตื่น/นอนดึกขนาดนั้น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“พรุ่งนี้ไม่ต้องมา” ข้อใดถูกต้อง?",
        choices: [
          "あした こなければなりません。",
          "あした こないでください。",
          "あした こなくてもいいです。",
          "あした こないほうがいいです。"
        ],
        answer: 2,
        explanation: "なくてもいい = ไม่ต้อง...ก็ได้"
      }
    ]
  },

  // =========================================================
  // LESSON 261
  // =========================================================
  {
    id: 261,
    title: "เปรียบเทียบด้วย より",
    sections: [
      {
        type: "concept",
        title: "より = กว่า",
        content: `
          <p><strong>より</strong> ใช้เป็นจุดอ้างอิงในการเปรียบเทียบ</p>
          <div class="formula-box">
            <p>A は B より ...</p>
            <p>“A ... กว่า B”</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>ねこは いぬより ちいさいです。</strong></p>
            <p>แมวตัวเล็กกว่าสุนัข</p>
            <hr>
            <p><strong>でんしゃは バスより はやいです。</strong></p>
            <p>รถไฟเร็วกว่ารถบัส</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "A は B より おおきいです หมายถึงอะไร?",
        choices: [
          "A เล็กกว่า B",
          "A ใหญ่กว่า B",
          "A เท่ากับ B",
          "B ใหญ่กว่า A แน่นอน"
        ],
        answer: 1,
        explanation: "より ทำให้ B เป็นสิ่งที่นำมาเปรียบเทียบกับ A"
      }
    ]
  },

  // =========================================================
  // LESSON 262
  // =========================================================
  {
    id: 262,
    title: "Bのほうが — B มากกว่า",
    sections: [
      {
        type: "concept",
        title: "รูป Aより Bのほうが",
        content: `
          <p>รูปนี้ใช้เน้นว่า <strong>B มีคุณสมบัติมากกว่า A</strong></p>
          <div class="formula-box">
            <p><strong>Aより Bのほうが + คำคุณศัพท์</strong></p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>いぬより ねこのほうが すきです。</strong></p>
            <p>ฉันชอบแมวมากกว่าสุนัข</p>
            <hr>
            <p><strong>バスより でんしゃのほうが はやいです。</strong></p>
            <p>รถไฟเร็วกว่ารถบัส</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“ฉันชอบชาเขียวมากกว่ากาแฟ” ข้อใดเหมาะที่สุด?",
        choices: [
          "コーヒーより おちゃのほうが すきです。",
          "おちゃより コーヒーのほうが すきです。",
          "コーヒーと おちゃが すきです。",
          "おちゃを すきません。"
        ],
        answer: 0,
        explanation: "กาแฟเป็นสิ่งที่เอามาเปรียบเทียบ จึงใช้ コーヒーより"
      }
    ]
  },

  // =========================================================
  // LESSON 263
  // =========================================================
  {
    id: 263,
    title: "ถามว่าอันไหนมากกว่า — どちらが",
    sections: [
      {
        type: "concept",
        title: "どちらが ใช้ถามอะไร?",
        content: `
          <p><strong>どちらが</strong> ใช้ถามว่า “อันไหน...” เมื่อมีตัวเลือกสองอย่าง</p>
          <div class="formula-box">
            <p>AとBと どちらが ... ですか。</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>いぬと ねこと どちらが すきですか。</strong></p>
            <p>ชอบสุนัขหรือแมวมากกว่ากัน?</p>
            <hr>
            <p><strong>ねこのほうが すきです。</strong></p>
            <p>ชอบแมวมากกว่า</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "どちらが ใช้เมื่อมีตัวเลือกกี่อย่างเป็นหลัก?",
        choices: ["หนึ่ง", "สอง", "ห้าขึ้นไปเท่านั้น", "ไม่มีตัวเลือก"],
        answer: 1,
        explanation: "どちら ใช้ถามเลือกระหว่างสองสิ่ง"
      }
    ]
  },

  // =========================================================
  // LESSON 264
  // =========================================================
  {
    id: 264,
    title: "ดีที่สุดในกลุ่ม — いちばん",
    sections: [
      {
        type: "concept",
        title: "いちばん = ที่สุด",
        content: `
          <p><strong>いちばん</strong> ใช้บอกสิ่งที่อยู่ในระดับสูงสุดเมื่อเปรียบเทียบหลายสิ่ง</p>
          <div class="formula-box">
            <p>กลุ่ม + のなかで + Aが いちばん ...</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>スポーツの なかで サッカーが いちばん すきです。</strong></p>
            <p>ในบรรดากีฬาทั้งหมด ฉันชอบฟุตบอลที่สุด</p>
            <hr>
            <p><strong>この くだものの なかで りんごが いちばん おいしいです。</strong></p>
            <p>ในบรรดาผลไม้เหล่านี้ แอปเปิลอร่อยที่สุด</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "いちばん ในประโยคเปรียบเทียบหมายถึงอะไร?",
        choices: ["น้อยที่สุด", "ประมาณ", "ที่สุด", "เหมือนกัน"],
        answer: 2,
        explanation: "いちばん ใช้แสดงระดับสูงสุด"
      }
    ]
  },

  // =========================================================
  // LESSON 265
  // =========================================================
  {
    id: 265,
    title: "ทบทวนการเปรียบเทียบ",
    sections: [
      {
        type: "check",
        title: "โครงสร้างสำคัญ",
        items: [
          "A は B より ... = A ... กว่า B",
          "Aより Bのほうが ... = B ... กว่า A",
          "AとBと どちらが ... = A กับ B อันไหน...",
          "～のなかで Aが いちばん ... = A ... ที่สุดในกลุ่ม"
        ]
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="example-box">
            <p><strong>A：いぬと ねこと どちらが すきですか。</strong></p>
            <p>ชอบสุนัขหรือแมวมากกว่ากัน?</p>
            <p><strong>B：ねこのほうが すきです。</strong></p>
            <p>ชอบแมวมากกว่า</p>
            <p><strong>A：どうぶつの なかで ねこが いちばん すきですか。</strong></p>
            <p>ในบรรดาสัตว์ทั้งหมด ชอบแมวที่สุดไหม?</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า “A ใหญ่กว่า B” ควรใช้โครงสร้างใด?",
        choices: [
          "A は B より おおきいです。",
          "A は B いちばん おおきいです。",
          "A は B なくてもいいです。",
          "A は B てください。"
        ],
        answer: 0,
        explanation: "より ใช้สร้างการเปรียบเทียบ"
      }
    ]
  },

  // =========================================================
  // LESSON 266
  // =========================================================
  {
    id: 266,
    title: "เคยทำ... — ～たことがあります",
    sections: [
      {
        type: "concept",
        title: "ประสบการณ์ในอดีต",
        content: `
          <p><strong>～たことがあります</strong> ใช้พูดว่า “เคย...”</p>
          <p>ต้องใช้ <strong>รูป た</strong> ของคำกริยา</p>
          <div class="formula-box">
            <p><strong>คำกริยารูป た + ことがあります</strong></p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>にほんへ いったことが あります。</strong></p>
            <p>เคยไปญี่ปุ่น</p>
            <hr>
            <p><strong>すしを たべたことが あります。</strong></p>
            <p>เคยกินซูชิ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“เคยดูหนังญี่ปุ่น” ควรใช้รูปใด?",
        choices: [
          "にほんの えいがを みたことが あります。",
          "にほんの えいがを みないことが あります。",
          "にほんの えいがを みてください。",
          "にほんの えいがを みなくてもいいです。"
        ],
        answer: 0,
        explanation: "みる → みた + ことがあります"
      }
    ]
  },

  // =========================================================
  // LESSON 267
  // =========================================================
  {
    id: 267,
    title: "ไม่เคยทำ... — ～たことがありません",
    sections: [
      {
        type: "concept",
        title: "บอกประสบการณ์ที่ไม่เคยมี",
        content: `
          <p><strong>～たことがありません</strong> หมายถึง “ไม่เคย...”</p>
          <div class="formula-box">
            <p>รูป た + ことが ありません</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>ひこうきに のったことが ありません。</strong></p>
            <p>ไม่เคยขึ้นเครื่องบิน</p>
            <hr>
            <p><strong>にほんへ いったことが ありません。</strong></p>
            <p>ไม่เคยไปญี่ปุ่น</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง “ไม่เคยกินนัตโตะ”?",
        choices: [
          "なっとうを たべたことが あります。",
          "なっとうを たべたことが ありません。",
          "なっとうを たべないでください。",
          "なっとうを たべなくてもいいです。"
        ],
        answer: 1,
        explanation: "たことがありません = ไม่เคย"
      }
    ]
  },

  // =========================================================
  // LESSON 268
  // =========================================================
  {
    id: 268,
    title: "ก่อนและหลัง — ～たあとで",
    sections: [
      {
        type: "concept",
        title: "～たあとで",
        content: `
          <p><strong>～たあとで</strong> หมายถึง “หลังจากที่...”</p>
          <div class="formula-box">
            <p>รูป た + あとで + เหตุการณ์ถัดไป</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>ごはんを たべたあとで、べんきょうします。</strong></p>
            <p>หลังจากกินข้าวแล้ว จะอ่านหนังสือ</p>
            <hr>
            <p><strong>シャワーを あびたあとで、ねます。</strong></p>
            <p>หลังจากอาบน้ำแล้วจะนอน</p>
          </div>
        `
      },
      {
        type: "note",
        title: "จำง่าย ๆ",
        content: `
          <p><strong>たあとで = หลังจากทำแล้ว...</strong></p>
          <p>สิ่งที่อยู่หน้า あとで ต้องเกิดก่อนสิ่งที่อยู่หลัง あとで</p>
        `
      },
      {
        type: "practice",
        question: "ごはんを たべたあとで、べんきょうします。 ทำอะไรก่อน?",
        choices: ["อ่านหนังสือ", "กินข้าว", "นอน", "อาบน้ำ"],
        answer: 1,
        explanation: "กินข้าวอยู่ก่อน あとで จึงเกิดก่อน"
      }
    ]
  },

  // =========================================================
  // LESSON 269
  // =========================================================
  {
    id: 269,
    title: "ก่อนที่จะ... — ～まえに",
    sections: [
      {
        type: "concept",
        title: "～まえに",
        content: `
          <p><strong>まえに</strong> หมายถึง “ก่อน...”</p>
          <p>เมื่อใช้กับคำกริยา จะใช้ <strong>รูปพจนานุกรม</strong></p>
          <div class="formula-box">
            <p>V รูปพจนานุกรม + まえに</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>ねるまえに、はを みがきます。</strong></p>
            <p>ก่อนนอนจะแปรงฟัน</p>
            <hr>
            <p><strong>がっこうへ いくまえに、あさごはんを たべます。</strong></p>
            <p>ก่อนจะไปโรงเรียน กินอาหารเช้า</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดใช้ まえに ได้ถูกต้อง?",
        choices: [
          "ねたまえに",
          "ねるまえに",
          "ねないまえに",
          "ねってまえに"
        ],
        answer: 1,
        explanation: "ก่อนทำกริยา ใช้รูปพจนานุกรม: ねるまえに"
      }
    ]
  },

  // =========================================================
  // LESSON 270
  // =========================================================
  {
    id: 270,
    title: "ทบทวนประสบการณ์และลำดับเวลา",
    sections: [
      {
        type: "check",
        title: "จำ 3 รูปนี้",
        items: [
          "～たことがあります = เคย...",
          "～たことがありません = ไม่เคย...",
          "～たあとで = หลังจาก...",
          "～まえに = ก่อน..."
        ]
      },
      {
        type: "example",
        title: "ประโยคยาวขึ้น",
        content: `
          <div class="example-box">
            <p><strong>にほんへ いくまえに、にほんごを べんきょうしました。</strong></p>
            <p>ก่อนจะไปญี่ปุ่น ฉันเรียนภาษาญี่ปุ่น</p>
            <hr>
            <p><strong>にほんへ いったあとで、すしを たべました。</strong></p>
            <p>หลังจากไปญี่ปุ่นแล้ว ฉันกินซูชิ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“ฉันเคยไปญี่ปุ่น” ข้อใดถูกต้อง?",
        choices: [
          "にほんへ いったことが あります。",
          "にほんへ いくまえに あります。",
          "にほんへ いかないで あります。",
          "にほんへ いってください。"
        ],
        answer: 0,
        explanation: "ประสบการณ์ใช้รูป た + ことがあります"
      }
    ]
  },

  // =========================================================
  // LESSON 271
  // =========================================================
  {
    id: 271,
    title: "ตั้งใจว่าจะ... — ～つもりです",
    sections: [
      {
        type: "concept",
        title: "～つもりです",
        content: `
          <p><strong>～つもりです</strong> ใช้พูดถึงความตั้งใจหรือสิ่งที่ตั้งใจว่าจะทำ</p>
          <div class="formula-box">
            <p>รูปพจนานุกรม + つもりです</p>
            <p>รูป ない + つもりです = ตั้งใจว่าจะไม่...</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>らいねん にほんへ いくつもりです。</strong></p>
            <p>ตั้งใจว่าจะไปญี่ปุ่นปีหน้า</p>
            <hr>
            <p><strong>きょうは テレビを みないつもりです。</strong></p>
            <p>วันนี้ตั้งใจว่าจะไม่ดูทีวี</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "รูปใดหมายถึง “ตั้งใจว่าจะเรียน”?",
        choices: [
          "べんきょうしたつもりです。",
          "べんきょうするつもりです。",
          "べんきょうしないつもりです。",
          "べんきょうしてはいけません。"
        ],
        answer: 1,
        explanation: "รูปพจนานุกรม + つもりです"
      }
    ]
  },

  // =========================================================
  // LESSON 272
  // =========================================================
  {
    id: 272,
    title: "มีแผนว่าจะ... — ～よていです",
    sections: [
      {
        type: "concept",
        title: "～予定です",
        content: `
          <p><strong>よてい</strong> หมายถึง “กำหนดการ / แผนที่วางไว้”</p>
          <p><strong>～よていです</strong> จึงใช้พูดถึงสิ่งที่มีแผนหรือกำหนดไว้</p>
          <div class="formula-box">
            <p>รูปพจนานุกรม + よていです</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำสำคัญ",
        items: [
          { jp: "よてい", reading: "よてい", thai: "โยะเท", meaning: "กำหนดการ / แผน" },
          { jp: "らいしゅう", reading: "らいしゅう", thai: "ไรชู", meaning: "สัปดาห์หน้า" },
          { jp: "らいげつ", reading: "らいげつ", thai: "ไรเง็ตสึ", meaning: "เดือนหน้า" },
          { jp: "らいねん", reading: "らいねん", thai: "ไรเน็น", meaning: "ปีหน้า" }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>らいしゅう りょこうする よていです。</strong></p>
            <p>มีแผนว่าจะเดินทางสัปดาห์หน้า</p>
            <hr>
            <p><strong>あした テストが ある よていです。</strong></p>
            <p>มีกำหนดว่าจะมีการสอบพรุ่งนี้</p>
          </div>
        `
      }
    ]
  },

  // =========================================================
  // LESSON 273
  // =========================================================
  {
    id: 273,
    title: "อยากทำ... — ～たいです",
    sections: [
      {
        type: "concept",
        title: "รูป ～たい",
        content: `
          <p><strong>～たいです</strong> ใช้บอกความต้องการของผู้พูดว่า “อยาก...”</p>
          <p>นำรูป ます ของคำกริยามาตัด <strong>ます</strong> แล้วเติม <strong>たいです</strong></p>
          <div class="formula-box">
            <p>たべます → たべたいです</p>
            <p>いきます → いきたいです</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>にほんへ いきたいです。</strong></p>
            <p>อยากไปญี่ปุ่น</p>
            <hr>
            <p><strong>すしを たべたいです。</strong></p>
            <p>อยากกินซูชิ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "いきます → ～たい รูปใดถูกต้อง?",
        choices: ["いきたいです", "いきますたいです", "いったいです", "いかたいです"],
        answer: 0,
        explanation: "いきます ตัด ます แล้วเติม たいです"
      }
    ]
  },

  // =========================================================
  // LESSON 274
  // =========================================================
  {
    id: 274,
    title: "อยากได้... — ～ほしいです",
    sections: [
      {
        type: "concept",
        title: "～ほしいです",
        content: `
          <p><strong>ほしいです</strong> ใช้บอกว่า “อยากได้...” เมื่อสิ่งที่ต้องการเป็น <strong>คำนาม/สิ่งของ</strong></p>
          <div class="formula-box">
            <p>คำนาม + が + ほしいです</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "ตัวอย่างคำศัพท์",
        items: [
          { jp: "ほん", reading: "ほん", thai: "ฮง", meaning: "หนังสือ" },
          { jp: "くるま", reading: "くるま", thai: "คุรุมะ", meaning: "รถยนต์" },
          { jp: "じかん", reading: "じかん", thai: "จิคัง", meaning: "เวลา" },
          { jp: "ともだち", reading: "ともだち", thai: "โทะโมะดะจิ", meaning: "เพื่อน" }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>あたらしい ほんが ほしいです。</strong></p>
            <p>อยากได้หนังสือใหม่</p>
            <hr>
            <p><strong>じかんが ほしいです。</strong></p>
            <p>อยากมีเวลา</p>
          </div>
        `
      },
      {
        type: "note",
        title: "たい กับ ほしい ต่างกัน",
        content: `
          <p><strong>～たい</strong> = อยากทำกริยา</p>
          <p><strong>～ほしい</strong> = อยากได้สิ่งของ/สิ่งหนึ่ง</p>
        `
      }
    ]
  },

  // =========================================================
  // LESSON 275
  // =========================================================
  {
    id: 275,
    title: "ทบทวนความต้องการและแผน",
    sections: [
      {
        type: "check",
        title: "3 รูปที่ต้องแยกให้ออก",
        items: [
          "～つもりです = ตั้งใจว่าจะ...",
          "～よていです = มีแผน/กำหนดว่าจะ...",
          "～たいです = อยากทำ...",
          "～ほしいです = อยากได้..."
        ]
      },
      {
        type: "example",
        title: "ลองรวมเป็นเรื่องเดียว",
        content: `
          <div class="example-box">
            <p><strong>らいねん にほんへ いくつもりです。</strong></p>
            <p>ตั้งใจว่าจะไปญี่ปุ่นปีหน้า</p>
            <p><strong>そして、すしを たべたいです。</strong></p>
            <p>และอยากกินซูชิ</p>
            <p><strong>あたらしい カメラも ほしいです。</strong></p>
            <p>และก็อยากได้กล้องใหม่ด้วย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“อยากซื้อหนังสือ” ควรใช้รูปใด?",
        choices: [
          "ほんを かうつもりです。",
          "ほんを かいたいです。",
          "ほんが ほしいです。",
          "ほんを かうほしいです。"
        ],
        answer: 1,
        explanation: "ซื้อเป็นกริยา จึงใช้ かいたいです"
      }
    ]
  },

  // =========================================================
  // LESSON 276
  // =========================================================
  {
    id: 276,
    title: "สามารถทำได้ — ～ことができます",
    sections: [
      {
        type: "concept",
        title: "～ことができます",
        content: `
          <p><strong>～ことができます</strong> หมายถึง “สามารถ...” หรือ “ทำ...ได้”</p>
          <p>ใช้คำกริยาในรูปพจนานุกรม + ことができます</p>
          <div class="formula-box">
            <p>V รูปพจนานุกรม + ことができます</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>にほんごを はなすことが できます。</strong></p>
            <p>สามารถพูดภาษาญี่ปุ่นได้</p>
            <hr>
            <p><strong>およぐことが できます。</strong></p>
            <p>สามารถว่ายน้ำได้</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดหมายถึง “สามารถอ่านภาษาญี่ปุ่นได้”?",
        choices: [
          "にほんごを よむことが できます。",
          "にほんごを よんだことが あります。",
          "にほんごを よみたいです。",
          "にほんごを よまないでください。"
        ],
        answer: 0,
        explanation: "よむ + ことができます = สามารถอ่านได้"
      }
    ]
  },

  // =========================================================
  // LESSON 277
  // =========================================================
  {
    id: 277,
    title: "รูปพจนานุกรม — รูปพื้นฐานของคำกริยา",
    sections: [
      {
        type: "concept",
        title: "Dictionary Form",
        content: `
          <p><strong>รูปพจนานุกรม</strong> คือรูปพื้นฐานของคำกริยาที่มักเห็นในพจนานุกรม</p>
          <p>ตัวอย่างเช่น</p>
          <div class="formula-box">
            <p>たべます → たべる</p>
            <p>のみます → のむ</p>
            <p>いきます → いく</p>
            <p>します → する</p>
          </div>
        `
      },
      {
        type: "check",
        title: "ทำไมต้องรู้รูปนี้?",
        items: [
          "ใช้กับ ～ことができます",
          "ใช้กับ ～つもりです",
          "ใช้กับ ～まえに",
          "ใช้สร้างประโยคแบบภาษาพูดและรูปธรรมดา"
        ]
      },
      {
        type: "practice",
        question: "たべます มีรูปพจนานุกรมว่าอะไร?",
        choices: ["たべて", "たべた", "たべる", "たべない"],
        answer: 2,
        explanation: "たべる คือรูปพจนานุกรม"
      }
    ]
  },

  // =========================================================
  // LESSON 278
  // =========================================================
  {
    id: 278,
    title: "ความสามารถแบบกริยารูป Potential",
    sections: [
      {
        type: "concept",
        title: "อีกวิธีหนึ่งในการพูดว่า “ทำได้”",
        content: `
          <p>ภาษาญี่ปุ่นมีการเปลี่ยนคำกริยาเป็น <strong>Potential Form</strong> เพื่อสื่อว่า “สามารถทำได้”</p>
          <p>ในบทนี้เริ่มทำความรู้จักก่อน โดยยังไม่ต้องจำทุกคำทันที</p>
          <div class="formula-box">
            <p>たべる → たべられる = สามารถกินได้</p>
            <p>みる → みられる = สามารถดูได้</p>
          </div>
        `
      },
      {
        type: "note",
        title: "อย่าเพิ่งสับสน",
        content: `
          <p>～ことができます และ Potential Form ต่างก็พูดเรื่อง “สามารถทำได้”</p>
          <p>ตอนนี้ให้ใช้ ～ことができます ให้คล่องก่อน แล้วค่อยจำรูปกริยาแบบ Potential</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>にほんごを よむことが できます。</strong></p>
            <p>สามารถอ่านภาษาญี่ปุ่นได้</p>
            <hr>
            <p><strong>にほんごが よめます。</strong></p>
            <p>สามารถอ่านภาษาญี่ปุ่นได้</p>
          </div>
        `
      }
    ]
  },

  // =========================================================
  // LESSON 279
  // =========================================================
  {
    id: 279,
    title: "ถามความสามารถ — ～ことができますか",
    sections: [
      {
        type: "concept",
        title: "ถามว่า “สามารถ...ได้ไหม?”",
        content: `
          <p>เติม <strong>か</strong> ท้ายประโยคเพื่อถามความสามารถ</p>
          <div class="formula-box">
            <p>V รูปพจนานุกรม + ことができますか。</p>
          </div>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="example-box">
            <p><strong>A：にほんごを はなすことが できますか。</strong></p>
            <p>คุณสามารถพูดภาษาญี่ปุ่นได้ไหม?</p>
            <p><strong>B：はい、できます。</strong></p>
            <p>ได้ครับ/ค่ะ</p>
            <hr>
            <p><strong>A：ピアノを ひくことが できますか。</strong></p>
            <p>คุณสามารถเล่นเปียโนได้ไหม?</p>
            <p><strong>B：いいえ、できません。</strong></p>
            <p>ไม่ ไม่สามารถทำได้</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“คุณสามารถว่ายน้ำได้ไหม?”",
        choices: [
          "およぐことが できますか。",
          "およいだことが ありますか。",
          "およぎたいですか。",
          "およがないでください。"
        ],
        answer: 0,
        explanation: "ถามความสามารถใช้ V辞書形 + ことができますか"
      }
    ]
  },

  // =========================================================
  // LESSON 280
  // =========================================================
  {
    id: 280,
    title: "ทบทวนความสามารถ",
    sections: [
      {
        type: "check",
        title: "สิ่งที่เรียนมา",
        items: [
          "V รูปพจนานุกรม + ことができます = สามารถทำได้",
          "～ことができますか = สามารถทำได้ไหม?",
          "Potential Form ก็ใช้สื่อความสามารถได้",
          "รูปพจนานุกรมสำคัญมากในระดับ Intermediate"
        ]
      },
      {
        type: "practice",
        question: "“ฉันสามารถทำอาหารได้” ข้อใดถูกต้อง?",
        choices: [
          "りょうりを することが できます。",
          "りょうりを したことが あります。",
          "りょうりを したいです。",
          "りょうりを しないでください。"
        ],
        answer: 0,
        explanation: "する + ことができます = สามารถทำได้"
      },
      {
        type: "example",
        title: "ประโยคจริง",
        content: `
          <div class="example-box">
            <p><strong>わたしは りょうりを することが できます。</strong></p>
            <p>ฉันสามารถทำอาหารได้</p>
            <p><strong>でも、ケーキを つくることが できません。</strong></p>
            <p>แต่ฉันทำเค้กไม่ได้</p>
          </div>
        `
      }
    ]
  },

  // =========================================================
  // LESSON 281
  // =========================================================
  {
    id: 281,
    title: "คำนามที่มีคำขยาย — 昨日買った本",
    sections: [
      {
        type: "concept",
        title: "ขยายคำนามด้วยประโยค",
        content: `
          <p>ภาษาญี่ปุ่นสามารถเอาประโยคมาไว้ <strong>หน้าคำนาม</strong> เพื่อบอกว่าคำนามนั้นคืออะไร</p>
          <div class="formula-box">
            <p><strong>ประโยค + คำนาม</strong></p>
            <p>きのう かった + ほん</p>
            <p>= หนังสือที่ซื้อเมื่อวาน</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>きのう かった ほん</strong></p>
            <p>หนังสือที่ซื้อเมื่อวาน</p>
            <hr>
            <p><strong>ともだちが くれた プレゼント</strong></p>
            <p>ของขวัญที่เพื่อนให้</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“หนังสือที่ซื้อเมื่อวาน” คือข้อใด?",
        choices: [
          "ほん きのう かった",
          "きのう かった ほん",
          "きのう ほん かった",
          "かった きのう ほん"
        ],
        answer: 1,
        explanation: "ประโยคที่ขยายคำนามจะอยู่หน้าคำนาม"
      }
    ]
  },

  // =========================================================
  // LESSON 282
  // =========================================================
  {
    id: 282,
    title: "อาหารที่ทำในญี่ปุ่น",
    sections: [
      {
        type: "concept",
        title: "ประโยคขยายคำนามกับสถานที่",
        content: `
          <p>เราสามารถใช้ประโยคที่มีสถานที่ + で มาขยายคำนามได้</p>
          <div class="formula-box">
            <p>にほんで つくった りょうり</p>
            <p>= อาหารที่ทำในญี่ปุ่น</p>
          </div>
        `
      },
      {
        type: "vocab",
        title: "คำศัพท์",
        items: [
          { jp: "りょうり", reading: "りょうり", thai: "เรียวริ", meaning: "อาหาร / การทำอาหาร" },
          { jp: "つくる", reading: "つくる", thai: "สึคุรุ", meaning: "ทำ / สร้าง" },
          { jp: "しゃしん", reading: "しゃしん", thai: "ชะชิง", meaning: "รูปถ่าย" },
          { jp: "とる", reading: "とる", thai: "โทะรุ", meaning: "ถ่าย" }
        ]
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>にほんで つくった りょうりを たべました。</strong></p>
            <p>ฉันกินอาหารที่ทำในญี่ปุ่น</p>
            <hr>
            <p><strong>きょう とった しゃしんです。</strong></p>
            <p>นี่คือรูปที่ถ่ายวันนี้</p>
          </div>
        `
      }
    ]
  },

  // =========================================================
  // LESSON 283
  // =========================================================
  {
    id: 283,
    title: "ฉันชอบเพลงที่... — 私が好きな音楽",
    sections: [
      {
        type: "concept",
        title: "ประโยคขยายคำนามไม่จำเป็นต้องเป็นกริยา",
        content: `
          <p>คำคุณศัพท์และประโยคที่มีคำว่า <strong>好き</strong> ก็สามารถใช้ขยายคำนามได้</p>
          <div class="formula-box">
            <p><strong>わたしが すきな おんがく</strong></p>
            <p>= เพลงที่ฉันชอบ</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>わたしが すきな おんがくです。</strong></p>
            <p>เป็นเพลงที่ฉันชอบ</p>
            <hr>
            <p><strong>きれいな まち</strong></p>
            <p>เมืองที่สวย</p>
            <hr>
            <p><strong>おもしろい ほん</strong></p>
            <p>หนังสือที่น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“เพลงที่ฉันชอบ” ข้อใดถูกต้อง?",
        choices: [
          "わたしが すきな おんがく",
          "おんがくが わたし すき",
          "わたし おんがくが すきな",
          "すき わたしが おんがく"
        ],
        answer: 0,
        explanation: "ประโยคที่ขยาย おんがく อยู่ด้านหน้า"
      }
    ]
  },

  // =========================================================
  // LESSON 284
  // =========================================================
  {
    id: 284,
    title: "อ่านประโยคขยายคำนามให้ถูก",
    sections: [
      {
        type: "concept",
        title: "วิธีอ่าน",
        content: `
          <p>เวลาเจอประโยคยาว อย่าเพิ่งแปลจากซ้ายไปขวาแบบภาษาไทย</p>
          <p>ให้มองหา <strong>คำนามหลัก</strong> ก่อน แล้วดูว่าคำหรือประโยคด้านหน้ากำลังขยายคำนามนั้น</p>
        `
      },
      {
        type: "example",
        title: "ลองแยกประโยค",
        content: `
          <div class="example-box">
            <p><strong>きのう えきで かった ほん</strong></p>
            <p>คำนามหลัก = ほん (หนังสือ)</p>
            <p>きのう = เมื่อวาน</p>
            <p>えきで = ที่สถานี</p>
            <p>かった = ซื้อแล้ว</p>
            <p>รวม = หนังสือที่ซื้อที่สถานีเมื่อวาน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ใน きのう かった ほん คำนามหลักคืออะไร?",
        choices: ["きのう", "かった", "ほん", "ไม่มี"],
        answer: 2,
        explanation: "ほん อยู่ท้ายสุดและเป็นสิ่งที่ถูกขยาย"
      }
    ]
  },

  // =========================================================
  // LESSON 285
  // =========================================================
  {
    id: 285,
    title: "ทบทวนประโยคขยายคำนาม",
    sections: [
      {
        type: "check",
        title: "กฎสำคัญ",
        items: [
          "ประโยคที่ขยายคำนามวางไว้หน้าคำนาม",
          "ไม่ต้องใส่คำว่า “ที่/ซึ่ง” แบบภาษาไทย",
          "กริยารูปธรรมดาสามารถอยู่หน้าคำนาม",
          "คำคุณศัพท์สามารถอยู่หน้าคำนามได้"
        ]
      },
      {
        type: "example",
        title: "ตัวอย่างหลายแบบ",
        content: `
          <div class="example-box">
            <p><strong>きのう みた えいが</strong> = หนังที่ดูเมื่อวาน</p>
            <p><strong>ともだちが つくった ケーキ</strong> = เค้กที่เพื่อนทำ</p>
            <p><strong>わたしが すきな うた</strong> = เพลงที่ฉันชอบ</p>
            <p><strong>おもしろい ほん</strong> = หนังสือที่น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“หนังที่ฉันดูเมื่อวาน”",
        choices: [
          "きのう わたし みた えいが",
          "わたしが きのう みた えいが",
          "えいが わたしが きのう みた",
          "みた えいが わたし きのう"
        ],
        answer: 1,
        explanation: "わたしが きのう みた เป็นส่วนขยายของ えいが"
      }
    ]
  },

  // =========================================================
  // LESSON 286
  // =========================================================
  {
    id: 286,
    title: "เพราะว่า... — ～から",
    sections: [
      {
        type: "concept",
        title: "から ใช้บอกเหตุผล",
        content: `
          <p><strong>から</strong> ใช้เชื่อมเหตุผลกับผลลัพธ์</p>
          <div class="formula-box">
            <p>เหตุผล + から、ผลลัพธ์</p>
            <p>= เพราะว่า... จึง...</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>あめですから、でかけません。</strong></p>
            <p>เพราะฝนตก จึงไม่ออกไปข้างนอก</p>
            <hr>
            <p><strong>いそがしいですから、いきません。</strong></p>
            <p>เพราะยุ่ง จึงไม่ไป</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ส่วนไหนเป็น “เหตุผล” ใน あめですから、でかけません?",
        choices: ["あめです", "から", "でかけません", "ไม่มี"],
        answer: 0,
        explanation: "あめです = ฝนตก เป็นเหตุผล และ から เชื่อมไปยังผลลัพธ์"
      }
    ]
  },

  // =========================================================
  // LESSON 287
  // =========================================================
  {
    id: 287,
    title: "ถามว่า “ทำไม?” — どうして",
    sections: [
      {
        type: "concept",
        title: "どうして",
        content: `
          <p><strong>どうして</strong> แปลว่า “ทำไม?”</p>
          <p>มักใช้คู่กับคำตอบที่ลงท้ายด้วย <strong>から</strong></p>
        `
      },
      {
        type: "example",
        title: "บทสนทนา",
        content: `
          <div class="example-box">
            <p><strong>A：どうして がっこうへ いきませんか。</strong></p>
            <p>ทำไมไม่ไปโรงเรียน?</p>
            <p><strong>B：びょうきですから。</strong></p>
            <p>เพราะไม่สบาย</p>
            <hr>
            <p><strong>A：どうして べんきょうしますか。</strong></p>
            <p>ทำไมถึงเรียน?</p>
            <p><strong>B：テストが ありますから。</strong></p>
            <p>เพราะมีสอบ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำใดแปลว่า “ทำไม?”",
        choices: ["どうして", "どこ", "だれ", "いつ"],
        answer: 0,
        explanation: "どうして = ทำไม"
      }
    ]
  },

  // =========================================================
  // LESSON 288
  // =========================================================
  {
    id: 288,
    title: "～ので — เพราะว่า...แบบนุ่มนวล",
    sections: [
      {
        type: "concept",
        title: "ので คืออะไร?",
        content: `
          <p><strong>ので</strong> ใช้บอกเหตุผลเช่นเดียวกับ から แต่โดยทั่วไปให้ความรู้สึกนุ่มนวลและอธิบายเหตุผลอย่างเป็นกลางมากขึ้น</p>
          <div class="formula-box">
            <p>เหตุผล + ので、ผลลัพธ์</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>あめなので、でかけません。</strong></p>
            <p>เนื่องจากฝนตก จึงไม่ออกไปข้างนอก</p>
            <hr>
            <p><strong>じかんが ないので、いそぎます。</strong></p>
            <p>เนื่องจากไม่มีเวลา จึงรีบ</p>
          </div>
        `
      },
      {
        type: "note",
        title: "ความแตกต่างเบื้องต้น",
        content: `
          <p><strong>から</strong> = เหตุผลตรง ๆ และใช้บ่อยในบทสนทนา</p>
          <p><strong>ので</strong> = ให้ความรู้สึกนุ่มนวล/เป็นกลางกว่า</p>
          <p>ตอนนี้ยังไม่ต้องกังวลเรื่องความต่างระดับสูงมาก แค่รู้ว่าทั้งคู่ใช้บอกเหตุผลได้</p>
        `
      }
    ]
  },

  // =========================================================
  // LESSON 289
  // =========================================================
  {
    id: 289,
    title: "から หรือ ので?",
    sections: [
      {
        type: "concept",
        title: "เลือกใช้ให้เหมาะ",
        content: `
          <p>ทั้ง <strong>から</strong> และ <strong>ので</strong> สามารถแปลว่า “เพราะว่า” ได้</p>
          <p>ในการพูดทั่วไป から เป็นรูปที่ผู้เรียนเจอบ่อยและใช้ง่าย</p>
        `
      },
      {
        type: "example",
        title: "เปรียบเทียบ",
        content: `
          <div class="example-box">
            <p><strong>つかれたから、ねます。</strong></p>
            <p>เพราะเหนื่อย จึงนอน</p>
            <hr>
            <p><strong>つかれたので、ねます。</strong></p>
            <p>เนื่องจากเหนื่อย จึงนอน</p>
            <p>ความหมายหลักใกล้เคียงกัน แต่โทนของ ので จะนุ่มนวลกว่า</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำใดสามารถใช้บอกเหตุผลได้?",
        choices: ["から", "ので", "ทั้งสองข้อ", "ไม่มีข้อใด"],
        answer: 2,
        explanation: "ทั้ง から และ ので ใช้เชื่อมเหตุผลได้"
      }
    ]
  },

  // =========================================================
  // LESSON 290
  // =========================================================
  {
    id: 290,
    title: "ทบทวนการบอกเหตุผล",
    sections: [
      {
        type: "check",
        title: "จำให้ได้",
        items: [
          "どうして = ทำไม",
          "～から = เพราะว่า...",
          "～ので = เนื่องจาก / เพราะว่า...",
          "มักวางเหตุผลไว้ก่อนผลลัพธ์"
        ]
      },
      {
        type: "example",
        title: "บทสนทนาสั้น",
        content: `
          <div class="example-box">
            <p><strong>A：どうして きょう いきませんか。</strong></p>
            <p>ทำไมวันนี้ไม่ไป?</p>
            <p><strong>B：あめですから。</strong></p>
            <p>เพราะฝนตก</p>
            <hr>
            <p><strong>A：じゃあ、あしたは？</strong></p>
            <p>งั้นพรุ่งนี้ล่ะ?</p>
            <p><strong>B：あしたは だいじょうぶです。</strong></p>
            <p>พรุ่งนี้ได้/ไม่มีปัญหา</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ประโยคใดถาม “ทำไม?”",
        choices: [
          "どうして いきますか。",
          "どこへ いきますか。",
          "いつ いきますか。",
          "だれと いきますか。"
        ],
        answer: 0,
        explanation: "どうして = ทำไม"
      }
    ]
  },

  // =========================================================
  // LESSON 291
  // =========================================================
  {
    id: 291,
    title: "และแล้วก็... — そして",
    sections: [
      {
        type: "concept",
        title: "そして",
        content: `
          <p><strong>そして</strong> ใช้เชื่อมเหตุการณ์หรือข้อมูลที่ต่อเนื่องกัน</p>
          <p>แปลได้ประมาณว่า “และ”, “แล้วก็”, “จากนั้น” ตามบริบท</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>あさごはんを たべました。そして、がっこうへ いきました。</strong></p>
            <p>กินอาหารเช้า แล้วก็ไปโรงเรียน</p>
            <hr>
            <p><strong>この ほんは おもしろいです。そして、やすいです。</strong></p>
            <p>หนังสือเล่มนี้น่าสนใจ และราคาถูก</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "そして มีหน้าที่หลักอะไร?",
        choices: ["ถามเวลา", "เชื่อมข้อมูล/เหตุการณ์", "ปฏิเสธ", "บอกสถานที่"],
        answer: 1,
        explanation: "そして ใช้เชื่อมข้อมูลหรือเหตุการณ์ที่ต่อเนื่องกัน"
      }
    ]
  },

  // =========================================================
  // LESSON 292
  // =========================================================
  {
    id: 292,
    title: "แต่... — でも",
    sections: [
      {
        type: "concept",
        title: "でも",
        content: `
          <p><strong>でも</strong> ใช้แสดงความขัดแย้งกับข้อความก่อนหน้า</p>
          <p>แปลว่า “แต่”, “แต่ว่า”, “อย่างไรก็ตาม”</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>この ほんは おもしろいです。でも、むずかしいです。</strong></p>
            <p>หนังสือเล่มนี้น่าสนใจ แต่ยาก</p>
            <hr>
            <p><strong>にほんごは むずかしいです。でも、おもしろいです。</strong></p>
            <p>ภาษาญี่ปุ่นยาก แต่ก็น่าสนใจ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าต้องการพูดว่า “แต่” ในภาษาญี่ปุ่นแบบพื้นฐาน ใช้คำใด?",
        choices: ["そして", "でも", "だから", "それから"],
        answer: 1,
        explanation: "でも = แต่"
      }
    ]
  },

  // =========================================================
  // LESSON 293
  // =========================================================
  {
    id: 293,
    title: "หลังจากนั้น — それから",
    sections: [
      {
        type: "concept",
        title: "それから",
        content: `
          <p><strong>それから</strong> ใช้พูดว่า “หลังจากนั้น”, “แล้วก็” เพื่อเรียงลำดับเหตุการณ์</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>あさごはんを たべました。それから、がっこうへ いきました。</strong></p>
            <p>กินอาหารเช้าแล้ว หลังจากนั้นก็ไปโรงเรียน</p>
            <hr>
            <p><strong>えきへ いきました。それから、でんしゃに のりました。</strong></p>
            <p>ไปสถานี แล้วหลังจากนั้นก็ขึ้นรถไฟ</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "คำใดเหมาะกับการเรียงเหตุการณ์ว่า “หลังจากนั้น”?",
        choices: ["でも", "それから", "どうして", "より"],
        answer: 1,
        explanation: "それから ใช้เชื่อมเหตุการณ์ตามลำดับ"
      }
    ]
  },

  // =========================================================
  // LESSON 294
  // =========================================================
  {
    id: 294,
    title: "ดังนั้น / เพราะฉะนั้น — だから",
    sections: [
      {
        type: "concept",
        title: "だから",
        content: `
          <p><strong>だから</strong> ใช้แสดงผลลัพธ์หรือข้อสรุปจากสิ่งที่พูดก่อนหน้า</p>
          <p>แปลว่า “ดังนั้น”, “เพราะฉะนั้น”</p>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>あした テストが あります。だから、べんきょうします。</strong></p>
            <p>พรุ่งนี้มีสอบ ดังนั้นจึงอ่านหนังสือ</p>
            <hr>
            <p><strong>きょうは やすみです。だから、うちに います。</strong></p>
            <p>วันนี้เป็นวันหยุด ดังนั้นจึงอยู่บ้าน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "だから มีความหมายใกล้เคียงข้อใด?",
        choices: ["แต่", "ดังนั้น", "หลังจากนั้น", "ทำไม"],
        answer: 1,
        explanation: "だから = ดังนั้น / เพราะฉะนั้น"
      }
    ]
  },

  // =========================================================
  // LESSON 295
  // =========================================================
  {
    id: 295,
    title: "けど — แต่ / แต่ว่า",
    sections: [
      {
        type: "concept",
        title: "けど",
        content: `
          <p><strong>けど</strong> ใช้เชื่อมข้อความที่มีความขัดแย้ง คล้าย でも แต่มีรูปแบบการใช้ต่างกัน</p>
          <p>มักอยู่กลางประโยค</p>
          <div class="formula-box">
            <p>ประโยค A + けど、ประโยค B</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>この ほんは おもしろいけど、ちょっと むずかしいです。</strong></p>
            <p>หนังสือเล่มนี้น่าสนใจ แต่ค่อนข้างยาก</p>
            <hr>
            <p><strong>いきたいけど、じかんが ありません。</strong></p>
            <p>อยากไป แต่ไม่มีเวลา</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ข้อใดใช้ けど ได้ถูกต้อง?",
        choices: [
          "いきたいけど、じかんが ありません。",
          "けど いきたい ありません。",
          "いきたい けどです。",
          "いきます けどです。"
        ],
        answer: 0,
        explanation: "けど สามารถวางหลังประโยคแรกเพื่อเชื่อมกับข้อความที่ขัดแย้ง"
      }
    ]
  },

  // =========================================================
  // LESSON 296
  // =========================================================
  {
    id: 296,
    title: "ให้คนอื่น — あげます",
    sections: [
      {
        type: "concept",
        title: "あげます",
        content: `
          <p><strong>あげます</strong> ใช้เมื่อผู้พูดหรือฝ่ายของผู้พูด “ให้” สิ่งหนึ่งแก่คนอื่น</p>
          <div class="formula-box">
            <p>ผู้ให้ は ผู้รับ に สิ่งของ を あげます</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>わたしは ともだちに プレゼントを あげました。</strong></p>
            <p>ฉันให้ของขวัญแก่เพื่อน</p>
            <hr>
            <p><strong>ははに はなを あげました。</strong></p>
            <p>ฉันให้ดอกไม้แก่แม่</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าฉันให้หนังสือแก่เพื่อน ข้อใดถูกต้อง?",
        choices: [
          "ともだちは わたしに ほんを あげました。",
          "わたしは ともだちに ほんを あげました。",
          "わたしは ともだちに ほんを もらいました。",
          "ともだちは わたしに ほんを くれました。"
        ],
        answer: 1,
        explanation: "ผู้ให้คือ わたし จึงใช้ わたしは ... あげました"
      }
    ]
  },

  // =========================================================
  // LESSON 297
  // =========================================================
  {
    id: 297,
    title: "ได้รับจากคนอื่น — もらいます",
    sections: [
      {
        type: "concept",
        title: "もらいます",
        content: `
          <p><strong>もらいます</strong> ใช้เมื่อผู้พูดเป็นฝ่าย “ได้รับ” สิ่งของจากคนอื่น</p>
          <div class="formula-box">
            <p>ผู้รับ は ผู้ให้ に/から สิ่งของ を もらいます</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>わたしは ともだちに プレゼントを もらいました。</strong></p>
            <p>ฉันได้รับของขวัญจากเพื่อน</p>
            <hr>
            <p><strong>せんせいから ほんを もらいました。</strong></p>
            <p>ฉันได้รับหนังสือจากครู</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "ถ้าฉันได้รับของขวัญจากเพื่อน ควรใช้คำใด?",
        choices: ["あげました", "もらいました", "いきました", "しました"],
        answer: 1,
        explanation: "もらいます ใช้เมื่อผู้พูดได้รับ"
      }
    ]
  },

  // =========================================================
  // LESSON 298
  // =========================================================
  {
    id: 298,
    title: "มีคนให้ฉัน — くれます",
    sections: [
      {
        type: "concept",
        title: "くれます",
        content: `
          <p><strong>くれます</strong> ใช้เมื่อ “คนอื่นให้สิ่งของแก่ฉัน/คนในฝ่ายของฉัน”</p>
          <div class="formula-box">
            <p>คนอื่น は わたしに สิ่งของ を くれます</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>ともだちが わたしに プレゼントを くれました。</strong></p>
            <p>เพื่อนให้ของขวัญแก่ฉัน</p>
            <hr>
            <p><strong>ははが わたしに おかねを くれました。</strong></p>
            <p>แม่ให้เงินแก่ฉัน</p>
          </div>
        `
      },
      {
        type: "note",
        title: "จำความต่าง",
        content: `
          <p><strong>あげる</strong> = ฉัน/ฝ่ายฉัน → คนอื่น</p>
          <p><strong>もらう</strong> = ฉันได้รับ ← คนอื่น</p>
          <p><strong>くれる</strong> = คนอื่น → ฉัน/ฝ่ายฉัน</p>
        `
      },
      {
        type: "practice",
        question: "“เพื่อนให้ปากกาฉัน” ควรใช้คำใด?",
        choices: ["あげました", "もらいました", "くれました", "しました"],
        answer: 2,
        explanation: "เพื่อนเป็นผู้ให้ และฉันเป็นผู้รับ จึงใช้ くれました"
      }
    ]
  },

  // =========================================================
  // LESSON 299
  // =========================================================
  {
    id: 299,
    title: "ทำให้คนอื่น / ให้คนอื่นทำ — ～てあげます・～てもらいます・～てくれます",
    sections: [
      {
        type: "concept",
        title: "การให้และรับการกระทำ",
        content: `
          <p>นอกจากสิ่งของแล้ว ภาษาญี่ปุ่นสามารถใช้รูป て เพื่อพูดว่า “ทำบางอย่างให้ใคร” หรือ “ได้รับการช่วยให้ทำบางอย่าง”</p>
          <div class="formula-box">
            <p><strong>～てあげます</strong> = ทำ...ให้คนอื่น</p>
            <p><strong>～てもらいます</strong> = ให้คนอื่นทำ...ให้ / ได้รับการช่วย</p>
            <p><strong>～てくれます</strong> = คนอื่นทำ...ให้ฉัน/ฝ่ายฉัน</p>
          </div>
        `
      },
      {
        type: "example",
        title: "ตัวอย่าง",
        content: `
          <div class="example-box">
            <p><strong>ともだちを てつだって あげました。</strong></p>
            <p>ฉันช่วยเพื่อน</p>
            <hr>
            <p><strong>ともだちに てつだって もらいました。</strong></p>
            <p>ฉันได้รับความช่วยเหลือจากเพื่อน</p>
            <hr>
            <p><strong>ともだちが てつだって くれました。</strong></p>
            <p>เพื่อนช่วยฉัน</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "“เพื่อนช่วยฉัน” แบบเน้นว่าการกระทำนั้นมาจากเพื่อน ใช้อะไร?",
        choices: ["てあげました", "てもらいました", "てくれました", "てください"],
        answer: 2,
        explanation: "คนอื่นทำบางอย่างให้ฉัน = ～てくれました"
      }
    ]
  },

  // =========================================================
  // LESSON 300
  // =========================================================
  {
    id: 300,
    title: "ทบทวนใหญ่ — Intermediate 227–300",
    sections: [
      {
        type: "concept",
        title: "ยินดีด้วย! มาถึง Lesson 300 แล้ว",
        content: `
          <p>ตอนนี้เราเริ่มออกจากระดับประโยคพื้นฐาน และสามารถสร้างประโยคที่มีโครงสร้างซับซ้อนขึ้นได้แล้ว</p>
          <p>สิ่งสำคัญไม่ใช่การจำทุกอย่างในครั้งเดียว แต่คือการเห็นโครงสร้างแล้วรู้ว่าแต่ละส่วนทำหน้าที่อะไร</p>
        `
      },
      {
        type: "check",
        title: "Grammar ที่เรียนในช่วง 227–300",
        items: [
          "รูป て และการใช้ ～ています",
          "～てください / ～てもいいです / ～てはいけません",
          "รูป ない และ ～ないでください",
          "～なければなりません / ～なくてもいいです",
          "～ないほうがいいです",
          "การเปรียบเทียบ より / ほうが / いちばん",
          "～たことがあります / ありません",
          "～たあとで / ～まえに",
          "～つもりです / ～よていです",
          "～たいです / ～ほしいです",
          "～ことができます",
          "ประโยคขยายคำนาม",
          "～から / ～ので / どうして",
          "そして / でも / それから / だから / けど",
          "あげます / もらいます / くれます",
          "～てあげます / ～てもらいます / ～てくれます"
        ]
      },
      {
        type: "example",
        title: "บทอ่านสั้น — ลองอ่านด้วยตัวเอง",
        content: `
          <div class="example-box">
            <p><strong>わたしは らいねん にほんへ いくつもりです。</strong></p>
            <p>ฉันตั้งใจว่าจะไปญี่ปุ่นปีหน้า</p>

            <p><strong>にほんへ いくまえに、にほんごを もっと べんきょうしたいです。</strong></p>
            <p>ก่อนจะไปญี่ปุ่น ฉันอยากเรียนภาษาญี่ปุ่นให้มากกว่านี้</p>

            <p><strong>にほんへ いったことが ありませんから、たのしみです。</strong></p>
            <p>เพราะยังไม่เคยไปญี่ปุ่น จึงตั้งตารอ</p>

            <p><strong>そして、にほんで たべたことが ない りょうりを たべたいです。</strong></p>
            <p>และอยากกินอาหารที่ไม่เคยกินในญี่ปุ่น</p>

            <p><strong>ともだちも いっしょに いく よていです。</strong></p>
            <p>มีแผนว่าจะไปกับเพื่อนด้วย</p>
          </div>
        `
      },
      {
        type: "practice",
        question: "จากบทอ่าน ผู้พูด “เคยไปญี่ปุ่นแล้ว” หรือยัง?",
        choices: [
          "เคยไปแล้ว",
          "ยังไม่เคยไป",
          "ไปอยู่ตอนนี้",
          "ไม่สามารถรู้ได้"
        ],
        answer: 1,
        explanation: "にほんへ いったことが ありません = ไม่เคยไปญี่ปุ่น"
      },
      {
        type: "practice",
        question: "ประโยค にほんへ いくまえに หมายถึงอะไร?",
        choices: [
          "หลังจากไปญี่ปุ่น",
          "ระหว่างอยู่ญี่ปุ่น",
          "ก่อนจะไปญี่ปุ่น",
          "ไม่ไปญี่ปุ่น"
        ],
        answer: 2,
        explanation: "รูปพจนานุกรม + まえに = ก่อนที่จะ..."
      },
      {
        type: "practice",
        question: "ถ้าจะพูดว่า “ฉันสามารถพูดภาษาญี่ปุ่นได้” โครงสร้างใดถูก?",
        choices: [
          "にほんごを はなすことが できます。",
          "にほんごを はなしたことが あります。",
          "にほんごを はなしたいです。",
          "にほんごを はなさないでください。"
        ],
        answer: 0,
        explanation: "รูปพจนานุกรม + ことができます = สามารถทำได้"
      },
      {
        type: "practice",
        question: "“เพื่อนให้ของขวัญแก่ฉัน” ควรใช้คำใด?",
        choices: ["あげます", "もらいます", "くれます", "あります"],
        answer: 2,
        explanation: "คนอื่นให้แก่ฉัน = くれます"
      },
      {
        type: "example",
        title: "Checkpoint 300",
        content: `
          <div class="example-box">
            <p><strong>ここまで 本当に よく がんばりました。</strong></p>
            <p>มาถึงตรงนี้ได้เก่งมากจริง ๆ</p>

            <p>จากช่วงแรกที่เราเริ่มเรียนฮิรางานะ จนตอนนี้สามารถอ่านประโยคที่มีหลายโครงสร้างได้แล้ว ถือว่าเดินมาไกลมาก</p>

            <p><strong>これからも すこしずつ にほんごを べんきょうしましょう。</strong></p>
            <p>จากนี้ก็ค่อย ๆ เรียนภาษาญี่ปุ่นต่อไปด้วยกันนะ</p>

            <p><strong>にほんごが もっと わかるように なりましょう。</strong></p>
            <p>มาพยายามให้เข้าใจภาษาญี่ปุ่นได้มากขึ้นกันเถอะ</p>
          </div>
        `
      }
    ]
  }
];
