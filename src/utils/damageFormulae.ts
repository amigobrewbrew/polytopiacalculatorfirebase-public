export const calculateAttackForce = (
    attack: number,
    health: number,
    maxHealth: number
): number => {
    console.log(attack + "*" + health + "/" + maxHealth);
    return attack * (health / maxHealth);
};

export const calculateDefenceForce = (
    defense: number,
    health: number,
    maxHealth: number,
    defenseBonus: number
): number => {
    console.log(defense + "*" + health + "/" + maxHealth + "*" + defenseBonus);
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
    console.log(attackRatio + "*" + attack + "*" + "4.5");
    return Math.round(attackRatio * attack * 4.5);
};

export const calculateAttackSplash = (
    attackForce: number,
    totalDamage: number,
    attack: number
): number => {
    return calculateAttackResult(attackForce, totalDamage, attack) / 2;
};

export const calculateDefenseResult = (
    defenseForce: number,
    totalDamage: number,
    defense: number
): number => {
    const defenseRatio = defenseForce / totalDamage;
    return Math.round(defenseRatio * defense * 4.5);
};
