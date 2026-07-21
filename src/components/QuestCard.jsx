import "../styles/quest-card.css";
import { getRewardXp } from "../utils/quest"

function QuestCard({quest, completeQuest}) {
    const { title, attributeRewards } = quest;
    return (
        <section className="quest-card">
            <h2>📜 Heutige Quest</h2>

            <p>{title}</p>

            <p>XP: {getRewardXp(attributeRewards)}</p>

            <button onClick={() => completeQuest(attributeRewards)}>Quest erledigt</button>
        </section>
    );
}

export default QuestCard;