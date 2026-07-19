import "../styles/player-card.css";

const attributeDesign = {
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



function PlayerCard({player, getLevelInfo}) {
    const { level, xp, xpNeeded, streak, attributes } = player;
    return (
        <section className="player-card">
            <h2>Level {level}</h2>

            <p>XP: {xp} / {xpNeeded}</p>

            <p>🔥 Streak: {streak}</p>
            
            { 
                Object.entries(attributes).map(([attribute, attributeData]) => {
                    const attributeInfo = getLevelInfo(attributeData.xp);
                    return (
                      <p key={attribute}>
                        {attributeDesign[attribute].icon} {attributeDesign[attribute].name}: Level {attributeInfo.level} ({attributeInfo.currentXp}/{attributeInfo.xpNeeded} XP)
                      </p>
                    );
                })
            }
        </section>
    );
}

export default PlayerCard;