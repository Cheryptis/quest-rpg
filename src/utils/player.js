export function getLevelInfo(totalXp) {
    let xpNeeded = 100;
    let level = 1;
    let currentXp = totalXp;
    while (currentXp >= xpNeeded) {
      currentXp -= xpNeeded;
      level += 1
      xpNeeded = xpNeeded + (10 * level)
    }
    return {
      level: level,
      currentXp: currentXp,
      xpNeeded: xpNeeded
    }
};

export function getTotalXp(attributes) {
    return Object.values(attributes).reduce((total,value) => total + value.xp, 0)
};