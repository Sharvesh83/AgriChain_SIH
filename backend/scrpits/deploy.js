import { ethers } from "hardhat";

async function main() {
  const Custody = await ethers.getContractFactory("Custody");
  const custody = await Custody.deploy();
  await custody.deployed();

  console.log("Custody deployed to:", custody.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
