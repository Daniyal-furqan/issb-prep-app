export const issbData = {
    "app_title": "ISSB Practice App",
    "language_style": {
        "english_level": "Grade 7",
        "voice": "Active",
        "tone": "Natural, calm, practical"
    },
    "segments": [
        {
            "segment_id": "screening",
            "title": "Screening Practice",
            "purpose": "Practice early screening tests",
            "modules": [
                {
                    "module_id": "iq_test_1",
                    "module_title": "IQ Practice Set",
                    "instructions_for_user": [
                        "Read the question carefully.",
                        "Choose the best answer.",
                        "Move to the next question quickly."
                    ],
                    "time_rules": {
                        "recommended_seconds": 60,
                        "notes": "Work fast and stay focused."
                    },
                    "content": {
                        "sets": [
                            {
                                "type": "iq",
                                "questions": [
                                    {
                                        "q": "What comes next in the series: 2, 4, 6, 8, ...",
                                        "options": [
                                            "9",
                                            "10",
                                            "11",
                                            "12"
                                        ],
                                        "answer": "B",
                                        "explain": "The series adds 2 each time."
                                    },
                                    {
                                        "q": "Which shape does not belong in the group?",
                                        "options": ["Circle", "Square", "Triangle", "Cube"],
                                        "answer": "D",
                                        "explain": "Cube is 3D, others are 2D."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "segment_id": "psychological",
            "title": "Psychological Practice",
            "purpose": "Practice written psychological tests",
            "modules": [
                {
                    "module_id": "wat_1",
                    "module_title": "Word Association Test",
                    "instructions_for_user": [
                        "Look at the word.",
                        "Write the first thought that comes to mind in a short sentence.",
                        "Write a complete sentence."
                    ],
                    "time_rules": {
                        "recommended_seconds": 8,
                        "notes": "Write quickly."
                    },
                    "content": {
                        "wat_bank_size": 2,
                        "mode": "practice_30_sentences",
                        "timed_runner": {
                            "total_words": 100,
                            "seconds_per_word": 8,
                            "shuffle": true,
                            "repeat_in_session": false
                        },
                        "sentences_by_word": [
                            {
                                "word": "book",
                                "sentences": [
                                    "I read interesting books every single day.",
                                    "Good books provide me with new ideas.",
                                    "She enjoys reading history books on weekends.",
                                    "He buys new books from the shop.",
                                    "They share their school books with friends.",
                                    "Reading good books improves the human mind.",
                                    "I organize my story books neatly today.",
                                    "A book teaches me many useful things.",
                                    "We discuss different books in our class.",
                                    "He brings his large book outside everyday.",
                                    "She reads thick books in the morning.",
                                    "I learn new things from science books.",
                                    "They write interesting books about wild animals.",
                                    "Story books open exciting new imaginary worlds.",
                                    "He finds amazing books in the library.",
                                    "I study thoroughly from my math book.",
                                    "We collect many old classic story books.",
                                    "She gifts a beautiful book to me.",
                                    "They keep heavy books on the shelf.",
                                    "I carry a colorful book in my bag.",
                                    "He finishes the story book very quickly.",
                                    "Humor books entertain us almost all day.",
                                    "She reads a few books before sleep.",
                                    "I choose interesting new books to read.",
                                    "We buy new books online very easily.",
                                    "They pack heavy books in wooden boxes.",
                                    "He reads many books to the children.",
                                    "I borrow new books from the library.",
                                    "She returns the heavy book very gently.",
                                    "Science books provide us with helpful information."
                                ]
                            },
                            {
                                "word": "run",
                                "sentences": [
                                    "I run in the park every morning.",
                                    "He confidently runs to catch the bus.",
                                    "They run a highly successful local business.",
                                    "She runs every morning before going out.",
                                    "We run together daily for our health.",
                                    "The professional athletes run very fast today.",
                                    "I run daily to build my stamina.",
                                    "Small children run happily around the playground.",
                                    "He quickly runs errands for his father.",
                                    "They always run home quickly after school.",
                                    "She frequently runs a very long distance.",
                                    "We run together in the open field.",
                                    "I quietly run to clear my head.",
                                    "He runs a new program successfully today.",
                                    "The dogs run happily in the yard.",
                                    "She runs the committee meeting very smoothly.",
                                    "The students run the track race together.",
                                    "I enthusiastically run toward the finish line.",
                                    "We proudly run for local charity events.",
                                    "He confidently runs a small local shop.",
                                    "She clearly runs much faster than before.",
                                    "I run up the tall stairs quickly.",
                                    "The boys run safely on the beach.",
                                    "They run the heavy machine very carefully.",
                                    "We actively run tests on the system.",
                                    "He gracefully runs along the long river.",
                                    "She runs the discussion group extremely well.",
                                    "I always run to stay physically fit.",
                                    "They reliably run miles every single day.",
                                    "We actively run the school project together."
                                ]
                            }
                        ]
                    }
                },
                {
                    "module_id": "sct_1",
                    "module_title": "Sentence Completion Test",
                    "instructions_for_user": [
                        "Read the starter.",
                        "Complete the sentence."
                    ],
                    "time_rules": {
                        "recommended_seconds": 10,
                        "notes": "Write quickly."
                    },
                    "content": {
                        "items": [
                            {
                                "starter": "He always",
                                "completions": [
                                    "He always finishes his daily work early.",
                                    "He always assists his younger brother gladly.",
                                    "He always speaks the absolute clear truth.",
                                    "He always plans his working day ahead.",
                                    "He always exercises quietly in the morning."
                                ]
                            },
                            {
                                "starter": "When alone,",
                                "completions": [
                                    "When alone, he reads interesting science books.",
                                    "When alone, she softly practices her guitar.",
                                    "When alone, I quietly organize my room.",
                                    "When alone, he plans his entire week.",
                                    "When alone, they focus on their studies."
                                ]
                            }
                        ]
                    }
                },
                {
                    "module_id": "tat_1",
                    "module_title": "Picture Story Test",
                    "instructions_for_user": [
                        "Look at the picture.",
                        "Write a story about it."
                    ],
                    "time_rules": {
                        "recommended_seconds": 240,
                        "notes": "Write a complete story."
                    },
                    "content": {
                        "stories": [
                            {
                                "prompt": "A boy reading a book",
                                "versions": [
                                    {
                                        "style": "calm",
                                        "story": "Ali sits in his room with an interesting new book. He bought the book yesterday from the local store. He focuses on the pages and reads every chapter carefully. The book explains exactly how to build small wooden toys from simple materials. Ali takes detailed notes on a clean piece of paper. He walks to the garage and gathers his old tools and small wood pieces. He brings everything back to his room. He starts building the toy bird following the clear instructions. He cuts the wood and sands the rough edges. He glues the wooden pieces together. He works slowly and smoothly. After two full hours, he completely finishes the beautiful toy bird. He smiles happily and places the new toy on his study table. He plans to make a larger toy car next weekend using these methods. He greatly enjoys learning new practical skills from different books. He shows the final toy to his family."
                                    },
                                    {
                                        "style": "practical",
                                        "story": "Ali sits quietly at his wooden desk reading a thick mathematics book. His final school exams exactly approach next week. He confidently decides to study three complete chapters today morning. He carefully reads the detailed explanations and starts solving the various practice questions on his notebook. He quickly checks his final answers at the back of the book. He highlights the tough questions with a purple pencil. He then politely asks his older intelligent sister for some help with the hard questions. She explains the mathematical steps clearly and simply. Ali practices all the tricky steps again until he successfully gets the right answers. He happily finishes his main study goal for the entire day. He quickly packs his heavy school bag and goes outside to the nearby park to gently play football with friends. He feels totally ready for his important math exam. He plans to vigorously study general science tomorrow morning."
                                    },
                                    {
                                        "style": "action_focused",
                                        "story": "Ali reads a thick book about home gardening. He genuinely wants to easily grow green vegetables in his large backyard. He takes quick notes on different soil types and proper watering schedules. Ali goes to the local market and buys tomato seeds and a small metal shovel. He smartly chooses a bright sunny spot in the yard. He digs the dark soil and plants the tiny seeds exactly as the book instructs. Every single morning, he waters the seeds before going to his high school. After a few short weeks, small green plants proudly appear. Ali builds a small wooden fence closely around the delicate plants to protect them from strong winds. He waters them daily using a small bucket. The healthy plants grow very tall and finally produce round red tomatoes. Ali gently picks the ripe tomatoes and gives them to his mother for family dinner. He strongly plans to plant carrots next month."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "module_id": "sdt_1",
                    "module_title": "Self Description Test",
                    "instructions_for_user": [
                        "Write what different people think of you."
                    ],
                    "time_rules": {
                        "recommended_seconds": 900,
                        "notes": "Be honest."
                    },
                    "content": {
                        "sections": {
                            "parents": [
                                "My parents think of me as an obedient son.",
                                "They appreciate my daily help in house chores.",
                                "They warmly trust me to care for my younger siblings.",
                                "They fully observe my daily focus on studies.",
                                "They positively expect me to become a useful member of society."
                            ],
                            "teachers": [
                                "My teachers continuously consider me an active student.",
                                "They happily see me participating clearly in class discussions.",
                                "They confidently give me small tasks to manage in the classroom.",
                                "They easily notice my consistent regular attendance.",
                                "They highly expect me to perform beautifully in my final exams."
                            ],
                            "friends": [
                                "My true friends readily treat me as a highly reliable partner.",
                                "We playfully play football together every single evening.",
                                "We happily share our classroom notes and study together.",
                                "They eagerly involve me in clearly planning group trips.",
                                "We truly enjoy healthy discussions on various interesting topics."
                            ],
                            "self": [
                                "I positively view myself as a highly practical person.",
                                "I closely maintain a very balanced daily routine.",
                                "I equally manage my standard studies and daily sports.",
                                "I strongly prefer to quickly complete my daily tasks on time.",
                                "I happily work on improving my personal skills constantly."
                            ],
                            "future_self": [
                                "I highly aim to join the armed forces in the future.",
                                "I deeply focus on improving my physical fitness daily.",
                                "I properly expand my general knowledge by reading more books.",
                                "I enthusiastically observe successful people to learn beautifully from them.",
                                "I fully prepare myself for a highly disciplined beautiful life."
                            ]
                        }
                    }
                }
            ]
        },
        {
            "segment_id": "gto",
            "title": "Group Testing Officer Practice",
            "purpose": "Practice group and physical tasks",
            "modules": [
                {
                    "module_id": "gto_1",
                    "module_title": "GTO Exercises",
                    "instructions_for_user": [
                        "Read the exercise.",
                        "Think about a practical solution."
                    ],
                    "time_rules": {
                        "recommended_seconds": 600,
                        "notes": "Think practically."
                    },
                    "content": {
                        "group_discussion": [
                            {
                                "topic": "Co-education is good for society",
                                "opinion_paragraph": "Co-education provides a highly realistic environment for students. Students naturally learn to communicate with everyone equally, which properly prepares them for modern professional workplaces. It successfully promotes healthy daily competition in normal academics and vigorous sports. Furthermore, it readily creates mutual deep respect among all typical students from a very early age."
                            }
                        ],
                        "planning_exercise": [
                            {
                                "scenario": "Your group is traveling in a jeep to a camping site. The jeep tire punctures on a muddy road. You have 2 hours before sunset.",
                                "constraints": [
                                    "The spare tire is missing.",
                                    "The mechanic shop is 2 kilometers back.",
                                    "Only 2 hours of sunlight remain."
                                ],
                                "resources": [
                                    "A heavy jack",
                                    "A long rope",
                                    "Two simple bicycles inside the jeep"
                                ],
                                "plan_steps": [
                                    "Two group members quietly take the simple bicycles and quickly ride to the nearby mechanic shop with the punctured heavy tire.",
                                    "The remaining happy members gracefully stay with the jeep and safely set up the heavy jack to smoothly raise the vehicle.",
                                    "The members at the green jeep rapidly gather dry wood from nearby to carefully prepare a small bright fire for clear light.",
                                    "The fast cyclists safely return with the completely repaired tire and the group actively mounts the clean tire on the jeep.",
                                    "The entire group proudly drives the safe jeep to the beautiful camping site before it gets totally dark."
                                ],
                                "time_split_minutes": {
                                    "step1": 30,
                                    "step2": 10,
                                    "step3": 20,
                                    "step4": 40
                                }
                            }
                        ],
                        "outdoor_tasks": [
                            {
                                "task_name": "Progressive Group Task",
                                "goal": "Quietly move the active group and the heavy drum from the start line to the end finish line absolutely without touching the soft ground.",
                                "role_play_lines": [
                                    "I will securely hold the wooden plank remarkably steady while you carefully cross.",
                                    "Let us quickly tie the thick rope to the main central drum first.",
                                    "I properly suggest we actively use the long wooden pole as a safe bridge.",
                                    "You gently pass the heavy drum to me from that far side.",
                                    "I firmly secure the tight knot perfectly here to beautifully stabilize the whole structure."
                                ],
                                "common_actions": [
                                    "Tying a beautifully tight thick knot.",
                                    "Lifting the heavy drum actively as a great team.",
                                    "Bridging the deep gap safely with the long plank.",
                                    "Properly supporting a fellow teammate gracefully."
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "segment_id": "deputy_president",
            "title": "Deputy President Practice",
            "purpose": "Practice essays, lecturates, and interviews",
            "modules": [
                {
                    "module_id": "dp_1",
                    "module_title": "Interviews and Speaking",
                    "instructions_for_user": [
                        "Read the topic.",
                        "Prepare your points."
                    ],
                    "time_rules": {
                        "recommended_seconds": 300,
                        "notes": "Speak clearly."
                    },
                    "content": {
                        "essay": [
                            {
                                "topic": "My Favorite Book",
                                "outline_a": [
                                    "Complete introduction to the wonderful book.",
                                    "Main interesting theme of the great story.",
                                    "Exactly why I clearly like the lead characters.",
                                    "Exactly what I actively learn from it."
                                ],
                                "outline_b": [
                                    "Complete name and talented author of the book.",
                                    "Key major exciting events in the clear plot.",
                                    "The highly practical beautiful lessons it simply provides.",
                                    "Concluding strong happy thoughts."
                                ],
                                "full_essay": "My favorite book is a biography of a famous historical leader who lived many decades ago. This interesting book presents all the events of his early life very clearly. It beautifully describes exactly how he organized his daily routine and strongly focused on his regular studies during his school years. The talented author uses simple language to carefully explain complex historical events. This makes the heavy book very easy to read and understand. I truly enjoy reading about his practical decisions during difficult times. For example, he approached major problems by properly gathering detailed information from his wise advisors first. He calmly listened to many different opinions before acting on any issue. This clearly teaches me the immense value of patience and careful observation. I keep this special book on my study desk daily. I regularly read a few pages every single night before going to sleep. It strongly encourages me to constantly set high goals and energetically work towards them very steadily. Additionally, the brilliant book highlights the importance of teamwork and discipline. The great leader always trained his close team members diligently. He provided them with proper tools and clear instructions. He led them by setting a personal example in every situation. He always arrived early for meetings. He managed his daily resources very carefully. These practical examples deeply inspire me to improve my own daily habits. I now properly organize my personal time much better than before. I also try to help my younger siblings with their evening homework regularly. I joyfully recommend this remarkable book to all my close friends because it offers highly valuable life lessons. Reading this wonderful book improves my English vocabulary significantly. It totally broadens my general knowledge of history. Furthermore, it teaches me how to effectively handle sudden challenges with a very calm mind. I strongly plan to read more insightful biographies in the near future. Biographies consistently provide extremely practical examples of dealing with normal daily situations. This specific book absolutely remains my favorite choice for its crystal clear message and highly engaging writing style."
                            }
                        ],
                        "lecturate": [
                            {
                                "topic": "Benefits of Reading",
                                "speech": "Good morning everyone. My topic for today is the benefits of reading. Reading is a highly productive daily habit that strongly helps us grow mentally. First of all, reading modern books provides us with entirely new information about the developing world. It carefully introduces us to different cultures, advanced sciences, and interesting histories. By learning these new facts regularly, we clearly improve our understanding of daily events. Secondly, reading greatly improves our own vocabulary. We steadily learn new words and discover exactly how to construct better sentences. This strongly helps us in our daily professional communication with others. We can express our ideas much more clearly and concisely during group discussions. Furthermore, reading naturally increases our mental focus and daily concentration. In today's incredibly fast world, safely sitting quietly with a physical book trains our busy mind to firmly stay on one single task for longer periods. This specific practice highly increases our overall productivity in school or at our daily work. Lastly, reading gives us extremely practical solutions to regular daily issues. We patiently learn from the valuable experiences and historical lessons of others. We can easily apply these clear lessons to our own daily challenges. This clearly makes us wiser over time. I personally read interesting books for perfectly thirty minutes every single day before sleeping. This excellent habit always keeps my young mind extremely fresh and highly active. It prepares me beautifully for the very next day. In conclusion, I strongly encourage everyone to definitely start reading any good book today. Thank you very much for listening.",
                                "quick_lines": [
                                    "Active reading successfully gives us highly useful general knowledge.",
                                    "It steadily improves basic vocabulary very rapidly.",
                                    "We happily learn from the practical valuable experiences of others.",
                                    "Careful reading absolutely sharpens our daily mental focus.",
                                    "It beautifully broadens our complete view of the amazing world.",
                                    "We brilliantly discover fresh new exciting ideas in thick books.",
                                    "Regular reading beautifully trains the active mind to always think logically.",
                                    "It strongly helps us smoothly communicate highly effectively.",
                                    "Many incredibly successful great people eagerly read daily.",
                                    "I completely find casual reading very highly productive."
                                ]
                            }
                        ],
                        "interview": [
                            {
                                "question": "Why do you want to join?",
                                "answer": "I strongly want to happily join the armed forces because it beautifully offers a highly disciplined active lifestyle. I actively participate in early morning sports daily, and a highly structured neat routine entirely aligns with my personal positive daily habits. I enthusiastically aim to proudly serve my great country while continuously successfully improving my personal physical and sharp mental skills beautifully in the coming future."
                            }
                        ]
                    }
                }
            ]
        }
    ]
};
