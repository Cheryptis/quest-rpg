import "../styles/quest-card.css";

function QuestCard({quest, completeQuest, getQuestXp}) {
    const { quest_now, attributeRewards } = quest;
    return (
        <section className="quest-card">
            <h2>📜 Heutige Quest</h2>

            <p>{quest_now}</p>

            <p>XP: {getQuestXp(attributeRewards)}</p>

            <button onClick={() => completeQuest(getQuestXp(attributeRewards))}>Quest erledigt</button>
        </section>
    );
}

export default QuestCard;