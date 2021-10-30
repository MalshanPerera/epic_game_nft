const CONTRACT_ADDRESS = '0x8361B41a063b92237F6549ce4Ec424bE0dD4367B';

const transformCharacterData = (characterData) => {
    return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    };
};
  
export { CONTRACT_ADDRESS, transformCharacterData };