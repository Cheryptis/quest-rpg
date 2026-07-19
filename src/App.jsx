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

  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [attributes, setAttributes] = useState({
      fitness: {
        xp: 0,
        priority: 3,
      },
      social: {
        xp: 0,
        priority: 2,
      },
      knowledge: {
        xp: 0,
        priority: 1,
      }})

  function getRewardXp(attributeRewards) {
    return Object.values(attributeRewards).reduce((total, value) => total + value, 0)
  };

  function completeQuest(reward) {
    console.log("Reward:", reward);
      setCurrentQuestIndex(currentQuestIndex => (currentQuestIndex + 1) % quests.length);
      setAttributes(currentAttributes => {
        console.log("Vorher:", attributes);
        const newAttributes = { ...attributes };
        Object.entries(reward).forEach(([attribute, attributeReward]) => {
          newAttributes[attribute] = {
            ...newAttributes[attribute],
            xp: newAttributes[attribute].xp + attributeReward
          };
        });
        console.log("Nachher:", newAttributes);
        return newAttributes;
      });
    };

  function getTotalXp(attributes) {
    return Object.values(attributes).reduce((total,value) => total + value.xp, 0)
  };

  function getLevelInfo(totalXp) {
    let xpNeeded = 100;
    let level = 1;
    let currentXp = totalXp;
    while (currentXp >= xpNeeded) {
      currentXp -= xpNeeded;
      level += 1
      xpNeeded = xpNeeded + (10 * level)
    }
    return {
      level: level,
      currentXp: currentXp,
      xpNeeded: xpNeeded
    }
  };

  const totalXp = getTotalXp(attributes);
  const levelInfo = getLevelInfo(totalXp);
  const player = {
    level: levelInfo.level,
    xp: levelInfo.currentXp,
    xpNeeded: levelInfo.xpNeeded,
    streak: 0,
    attributes: attributes
  };

  return (
    <div className="app">
      <Header />
      <PlayerCard 
        player={player}
        getLevelInfo={getLevelInfo}/>
      <QuestCard
        quest={quests[currentQuestIndex]}
        completeQuest={completeQuest}
        getRewardXp={getRewardXp}
      />
    </div>
  );
}

export default App;