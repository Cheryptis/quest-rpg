import quests from "../data/quests"

function idealAttributeRatio(attributes) {
    const totalPriority = Object.values(attributes).reduce((total, value) => total + value.priority, 0);
    const idealRatios = {};
    Object.entries(attributes).forEach(([attribute, attributeData]) => {
        idealRatios[attribute] = (attributeData.priority / totalPriority) * 100;
    });
    console.log(idealRatios);
    return idealRatios;
};

function actualAttributeRatio(attributes) {
    const totalXp = Object.values(attributes).reduce((total,value) => total + value.xp, 0);
    const actualRatios = {};
    if (totalXp === 0) {
        Object.entries(attributes).forEach(([attribute]) => {
            actualRatios[attribute] = 0;
        })
    } else {
        Object.entries(attributes).forEach(([attribute, attributeData]) => {
            actualRatios[attribute] = (attributeData.xp / totalXp) * 100;
        });
    }
    console.log(actualRatios);
    return actualRatios;
};


const balanceFactors = {
    0: 0.0,
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
    console.log(weights);
    };
};

function pickQuestByAttribute(quests, selectedAttribute) {

    const possibleQuests = quests.filter(quest => selectedAttribute in quest.attributeRewards);
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