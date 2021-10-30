const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  
  const gameContract = await gameContractFactory.deploy(
    ["Itachi", "Luffy", "Aang"], // Names
    ["https://i.imgur.com/3WR5LP1.jpeg", // Images
    "https://i.imgur.com/vIdMPiU.jpeg", 
    "https://i.imgur.com/VVq6KcT.png"],
    [200, 300, 100], // HP values
    [300, 200, 150], // Attack damage values
    [150, 150, 150], // Defence
    [100, 120, 90], // Crit Chance     
    "Uchiha Madara", // Boss name
    "https://i.imgur.com/gmnxMxT.jpeg", // Boss image
    20000, // Boss hp
    60, // Boss attack damage  
    // 100, // Defence
    // 100 // Crit Chance         
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

// 0x05AF6CDA03162B6Ded7a39AaF0D04bA53C22e70D