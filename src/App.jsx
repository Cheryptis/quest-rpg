import "./styles/app.css";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";

const player = {
  level: 1,
  xp: 0,
  streak: 0,
};

const quest = {
  quest_now: "Gehe 20 Minuten spazieren",
  xp: 20,
}

function App() {
  return (
    <div className="app">
      <Header />
      <PlayerCard player={player}/>
      <QuestCard quest={quest}/>
    </div>
  );
}

export default App;