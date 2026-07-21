export function getRewardXp(attributeRewards) {
    return Object.values(attributeRewards).reduce((total, value) => total + value, 0)
};