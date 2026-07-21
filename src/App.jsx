import "./styles/app.css";

import { useState } from "react";

import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";

import quests from "./data/quests";
import defaultAttributes from "./data/defaultAttributes"

import { getLevelInfo } from "./utils/player"
import { getTotalXp } from "./utils/player"




function App() {

  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [attributes, setAttributes] = useState(defaultAttributes)

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
      />
    </div>
  );
}

export default App;