export const calculateAttackForce = (
    attack: number,
    health: number,
    maxHealth: number
): number => {
    return attack * (health / maxHealth);
};

export const calculateDefenceForce = (
    defense: number,
    health: number,
    maxHealth: number,
    defenseBonus: number
): number => {
    return defense * (health / maxHealth) * defenseBonus;
};

export const calculateTotalDamage = (
    attackForce: number,
    defenseForce: number
): number => {
    return attackForce + defenseForce;
};

export const calculateAttackResult = (
    attackForce: number,
    totalDamage: number,
    attack: number
): number => {
    const attackRatio = attackForce / totalDamage;
    return Math.round(attackRatio * attack * 4.5);
};

export const calculateAttackSplash = (
    attackForce: number,
    totalDamage: number,
    attack: number
): number => {
    return Math.round(calculateAttackResult(attackForce, totalDamage, attack) / 2);
};

export const calculateDefenseResult = (
    defenseForce: number,
    totalDamage: number,
    defense: number
): number => {
    const defenseRatio = Math.round(defenseForce / totalDamage);
    return defenseRatio * defense * 4.5;
};
