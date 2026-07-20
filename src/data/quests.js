
const quests = [
  {
    id: "call_friend",
    title: "Rufe einen Freund an",
    attributeRewards: { social: 25 },
    difficulty: 1,
    maxTime: 10,
    tags: ["phone"]
  },
  {
    id: "chores_laundry",
    title: "Wasche deine Wäsche",
    attributeRewards: { practical: 20 },
    difficulty: 2,
    maxTime: 5,
    tags: ["passive"]
  },
  {
    id: "clean_desk",
    title: "Räume deinen Schreibtisch auf",
    attributeRewards: { practical: 20 },
    difficulty: 1,
    maxTime: 15,
    tags: ["home"]
  },
  {
    id: "coldApproach_blank",
    title: "Sprich eine fremde Person an",
    attributeRewards: { comfortZone: 30 },
    difficulty: 3,
    maxTime: 10,
    tags: ["outdoor"]
  },
  {
    id: "cook_new",
    title: "Koche ein neues Rezept",
    attributeRewards: {
        practical: 15,
        creativity: 10,
        lifestyle: 10
    },
    difficulty: 2,
    maxTime: 75,
    tags: ["money"]
  },
  {
    id: "draw_short",
    title: "Zeichne 10 Minuten",
    attributeRewards: { creativity: 20 },
    difficulty: 1,
    maxTime: 15,
    tags: ["home"]
  },
  {
    id: "exchange_topic",
    title: "Erkläre jemandem ein Thema, das du gelernt hast",
    attributeRewards: {
        knowledge: 15,
        social: 10
    },
    difficulty: 2,
    maxTime: 20,
    tags: ["friend"]
  },
  {
    id: "gratitude_journal",
    title: "Schreibe drei Dinge auf, für die du dankbar bist",
    attributeRewards: { mental: 15 },
    difficulty: 1,
    maxTime: 10,
    tags: []
  },
  {
    id: "gratitude_person",
    title: "Bedanke dich bewusst bei jemandem",
    attributeRewards: { social: 10 },
    difficulty: 1,
    maxTime: 2,
    tags: []
  },
  {
    id: "language_easy",
    title: "Lerne 10 neue Vokabeln",
    attributeRewards: { knowledge: 15 },
    difficulty: 2,
    maxTime: 15,
    tags: []
  },
  {
    id: "meditate_short",
    title: "Meditiere 10 Minuten",
    attributeRewards: { mental: 20 },
    difficulty: 1,
    maxTime: 12,
    tags: []
  },
  {
    id: "new_thing",
    title: "Probiere etwas völlig Neues",
    attributeRewards: { comfortZone: 25 },
    difficulty: 2,
    maxTime: 30,
    tags: []
  },
  {
    id: "pushup_medium",
    title: "Mache 10 Liegestütze",
    attributeRewards: { fitness: 15 },
    difficulty: 2,
    maxTime: 10,
    tags: ["home"]
  },
  {
    id: "random_music",
    title: "Höre einen Song, den du noch nie gehört hast",
    attributeRewards: { random: 10 },
    difficulty: 1,
    estimatedTime: 5,
    tags: []
  },
  {
    id: "random_teeth",
    title: "Putze heute mit deiner schwachen Hand Zähne",
    attributeRewards: { random: 20 },
    difficulty: 1,
    maxTime: 5,
    tags: []
  },
  {
    id: "read_short",
    title: "Lies 15 Minuten",
    attributeRewards: { knowledge: 20 },
    difficulty: 1,
    maxTime: 20,
    tags: []
  },
  {
    id: "sleep_early",
    title: "Gehe heute 30 Minuten früher schlafen",
    attributeRewards: { lifestyle: 20 },
    difficulty: 2,
    maxTime: 0,
    tags: []
  },
  {
    id: "walk_friend",
    title: "Gehe mit einem Freund spazieren",
    attributeRewards: {
        fitness: 15,
        social: 15
    },
    difficulty: 2,
    maxTime: 45,
    tags: ["outdoor", "friend"]
  },
  {
    id: "walk_short",
    title: "Gehe 20 Minuten spazieren",
    attributeRewards: { fitness: 20 },
    difficulty: 1,
    maxTime: 30,
    tags: ["outdoor"]
  },
  {
    id: "water_day",
    title: "Trinke 2 Liter Wasser",
    attributeRewards: { lifestyle: 15 },
    difficulty: 1,
    maxTime: 0,
    tags: ["daily"]
  },
  {
    id: "write_short",
    title: "Schreibe eine kleine Geschichte",
    attributeRewards: { creativity: 25 },
    difficulty: 2,
    maxTime: 30,
    tags: []
  },
];

export default quests