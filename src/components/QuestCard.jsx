import "../styles/quest-card.css";

function QuestCard({quest}) {
    const { quest_now, xp } = quest;
    return (
        <section className="quest-card">
            <h2>📜 Heutige Quest</h2>

            <p>{quest_now}</p>

            <p>XP: {xp}</p>

            <button>Quest erledigt</button>
        </section>
    );
}

export default QuestCard;