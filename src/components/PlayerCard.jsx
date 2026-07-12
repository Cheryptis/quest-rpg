import "../styles/player-card.css";

function PlayerCard(props) {
    const { level, xp, streak } = props;
    return (
        <section className="player-card">
            <h2>Level {level}</h2>

            <p>XP: {xp} / 100</p>

            <p>🔥 Streak: {streak}</p>
        </section>
    );
}

export default PlayerCard;