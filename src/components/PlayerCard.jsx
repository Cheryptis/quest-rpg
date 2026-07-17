import "../styles/player-card.css";

const attributeInfo = {
  fitness: {
    name: "Fitness",
    icon: "💪"
  },
  social: {
    name: "Social",
    icon: "🤝"
  },
  knowledge: {
    name:"Knowledge",
    icon: "🧠"
  },
};

function PlayerCard({player}) {
    const { level, xp, xpNeeded, streak, attributes } = player;
    return (
        <section className="player-card">
            <h2>Level {level}</h2>

            <p>XP: {xp} / {xpNeeded}</p>

            <p>🔥 Streak: {streak}</p>
            
            {
                Object.entries(attributes).map(([attribute, attributeData]) => (
                    <p key={attribute}>
                            {attributeInfo[attribute].icon} {attributeInfo[attribute].name}: {attributeData.xp} XP
                    </p>
                ))
            }
        </section>
    );
}

export default PlayerCard;