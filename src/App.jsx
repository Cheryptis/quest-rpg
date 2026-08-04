import "./styles/app.css";

import { useState } from "react";

import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";
import SettingsScreen from "./components/SettingsScreen";

import quests from "./data/quests";
import defaultAttributes from "./data/defaultAttributes";

import { getLevelInfo } from "./utils/player";
import { getTotalXp } from "./utils/player";
import { pickQuest } from "./utils/questselection";




function App() {

  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const [attributes, setAttributes] = useState(defaultAttributes)
  const [activeQuest, setActiveQuest] = useState(() => pickQuest(attributes));
  const [currentScreen, setCurrentScreen] = useState("game");
  const [streak, setStreak] = useState(0);

  function completeQuest(reward) {
    console.log("Reward:", reward);
    setStreak(currentStreak => currentStreak + 1);
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
      console.log(newAttributes);
      setActiveQuest(activeQuest => pickQuest(newAttributes));
      console.log(activeQuest)
      return newAttributes;
    });
      
  };

  const totalXp = getTotalXp(attributes);
  const levelInfo = getLevelInfo(totalXp);
  const player = {
    level: levelInfo.level,
    xp: levelInfo.currentXp,
    xpNeeded: levelInfo.xpNeeded,
    streak: streak,
    attributes: attributes
  };
  console.log(streak)
  console.log(activeQuest)
  console.log(pickQuest(attributes));
  return (
    <div className="app">
      <Header />
      {currentScreen === "game" && (
        <>
        <button onClick={() => setCurrentScreen("settings")}>
          ⚙️ Einstellungen
        </button>
        <PlayerCard 
        player={player}
        getLevelInfo={getLevelInfo}/>
        <QuestCard
        quest={activeQuest}
        completeQuest={completeQuest}/>
        </>
      )}
      
      {currentScreen === "settings" && (
      <>
      <button onClick={() => setCurrentScreen("game")}>
          🎮 Spiel
      </button>
      <SettingsScreen></SettingsScreen>
      </>
      )}
    </div>
  );
}

export default App;