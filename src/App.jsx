import "./styles/app.css";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import QuestCard from "./components/QuestCard";

function App() {
  return (
    <div className="app">
      <Header />
      <PlayerCard level={1} xp={0} streak={0}/>
      <QuestCard />
    </div>
  );
}

export default App;