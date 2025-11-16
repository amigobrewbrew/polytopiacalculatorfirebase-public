export const calculateAttackForce = (
    attack: number,
    health: number,
    maxHealth: number
): number => {
    const attackForce = attack * (health / maxHealth);
    console.log(
        "attack force: " +
            attack +
            "*" +
            health +
            "/" +
            maxHealth +
            "=" +
            attackForce
    );
    return attackForce;
};

export const calculateDefenceForce = (
    defense: number,
    health: number,
    maxHealth: number,
    defenseBonus: number
): number => {
    const defenceForce = defense * (health / maxHealth) * defenseBonus;
    console.log(
        "defence force: " +
            defense +
            "*" +
            health +
            "/" +
            maxHealth +
            "*" +
            defenseBonus +
            "=" +
            defenceForce
    );
    return defenceForce;
};

export const calculateTotalDamage = (
    attackForce: number,
    defenseForce: number
): number => {
    const totalDamage = attackForce + defenseForce;
    console.log(
        "total damage: " + attackForce + "+" + defenseForce + "=" + totalDamage
    );
    return totalDamage;
};

export const calculateAttackResult = (
    attackForce: number,
    totalDamage: number,
    attack: number
): number => {
    const attackResult = Math.round((attackForce / totalDamage) * attack * 4.5);
    console.log(
        "attack result: " +
            attackForce +
            "/" +
            totalDamage +
            "*" +
            attack +
            "*" +
            "4.5=" +
            attackResult
    );
    return attackResult;
};

export const calculateAttackSplash = (
    attackForce: number,
    totalDamage: number,
    attack: number
): number => {
    const attackSplash =
        calculateAttackResult(attackForce, totalDamage, attack) / 2;
    console.log("attack splash (divide 2): " + attackSplash);
    return attackSplash;
};

export const calculateDefenseResult = (
    defenseForce: number,
    totalDamage: number,
    defense: number
): number => {
    const defenseResult = Math.round(
        (defenseForce / totalDamage) * defense * 4.5
    );
    console.log(
        "attack result: " +
            defenseForce +
            "/" +
            totalDamage +
            "*" +
            defense +
            "*" +
            "4.5=" +
            defenseResult
    );
    return defenseResult;
};
