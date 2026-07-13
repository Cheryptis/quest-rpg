import "./styles/app.css";
import { useState } from "react";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";



const quest = {
  quest_now: "Gehe 20 Minuten spazieren",
  xp: 20,
};




function App() {

  const [xp, setXp] = useState(0);
  
  function completeQuest(reward) {
    setXp(currentXp => currentXp + reward);
  }

  const player = {
    level: 1,
    xp,
    streak: 0,
  };

  return (
    <div className="app">
      <Header />
      <PlayerCard player={player}/>
      <QuestCard
        quest={quest}
        completeQuest={completeQuest}
      />
    </div>
  );
}

export default App;