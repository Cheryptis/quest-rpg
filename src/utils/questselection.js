import quests from "../data/quests"

function idealAttributeRatio(attributes) {
    const totalPriority = Object.values(attributes).reduce((total, value) => total + value.priority, 0);
    const idealRatios = {};
    Object.entries(attributes).forEach(([attribute, attributeData]) => {
        idealRatios[attribute] = (attributeData.priority / totalPriority) * 100;
    });
    return idealRatios;
};

function actualAttributeRatio(attributes) {
    const totalXp = Object.values(attributes).reduce((total,value) => total + value.xp, 0)
    const actualRatios = {}
    Object.entries(attributes).forEach(([attribute, attributeData]) => {
        actualRatios[attribute] = (attributeData.xp / totalXp) * 100;
    });
    return actualRatios
};

const balanceFactors = {
  1: 0.8,
  2: 0.5,
  3: 0.3
};

function attributeWeight(attributes, idealRatio, actualRatio) {
    const finalWeight = {};
    Object.entries(attributes).forEach(([attribute, attributeData]) => {
        finalWeight[attribute] = idealRatio[attribute] + (balanceFactors[attributeData.priority] * (idealRatio[attribute] - actualRatio[attribute]));
    });
    return finalWeight;
};

function pickAttribute(weights) {
    const totalWeight = Object.values(weights).reduce((total, value) => total + value, 0);
    const random = Math.random() * totalWeight;
    let currentWeight = 0;
    for (const [attribute, weight] of Object.entries(weights)) {
        currentWeight +=weight;
        if (random <= currentWeight) {
            return attribute
        };
    };
};

function pickQuestByAttribute(quests, selectedAttribute) {
    const possibleQuests = quests.filter((quests) => quest.attributeRewards[selectedAttribute]);
    const randomIndex = Math.floor(Math.random() * possibleQuests.length);
    return possibleQuests[randomIndex];
};

export function pickQuest(attributes) {
    const idealRatio = idealAttributeRatio(attributes);
    const actualRatio = actualAttributeRatio(attributes);
    const weights = attributeWeight(
        attributes,
        idealRatio,
        actualRatio
    );
    const attribute = pickAttribute(weights);
    return pickQuestByAttribute(
        quests,
        attribute
    );
}