import "./styles/app.css";
import { useState } from "react";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";



const quests = [
  {
    quest_now: "Gehe 20 Minuten spazieren",
    attributeRewards: {
      fitness: 20
    }
  },
  {
    quest_now: "Mache 10 Liegestütze",
    attributeRewards: {
      fitness: 15
    }
  },
  {
    quest_now: "Rufe einen Freund an",
    attributeRewards: {
      social: 25
    }
  },
];




function App() {

  const [xp, setXp] = useState(0);
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [skills, setSkillXp] = useState(0)

  function getQuestXp(attributeRewards) {
    return Object.values(attributeRewards).reduce((total, value) => total + value, 0)
  };

  function completeQuest(reward) {
      setXp(currentXp => currentXp + getQuestXp(reward));
      setCurrentQuestIndex(currentQuestIndex => (currentQuestIndex + 1) % quests.length);
    };

  const player = {
    level: 1,
    xp: xp,
    streak: 0,
    attributes: {
      fitness: {
        xp: 0,
      },
      social: {
        xp: 0,
      },
      knowledge: {
        xp: 0,
      }
    }
  };

  return (
    <div className="app">
      <Header />
      <PlayerCard player={player}/>
      <QuestCard
        quest={quests[currentQuestIndex]}
        completeQuest={completeQuest}
        getQuestXp={getQuestXp}
      />
    </div>
  );
}

export default App;