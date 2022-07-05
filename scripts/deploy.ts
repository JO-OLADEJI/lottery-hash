import hre, { ethers } from "hardhat";
import { BigNumber } from "ethers";

const delayBy = async (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const main = async () => {
  const lotteryHashFactory = await ethers.getContractFactory("LotteryHash");

  /* these constants are gotten from https://docs.chain.link/docs/vrf-contracts/v1/
   * the ones highlighted below are for the MUMBAI testnet
   */
  const VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
  const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
  const PREMIUM: BigNumber = ethers.utils.parseEther("0.0001");
  const VRF_KEY_HASH =
    "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
  const LotteryHash = await lotteryHashFactory.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    PREMIUM,
    VRF_KEY_HASH
  );
  await LotteryHash.deployed();
  console.log(`LotteryHash Contract Address: ${LotteryHash.address}`);

  const delayTime = 60;
  console.log(
    `Wating for ${delayTime} secons for PolygonScan to index LotteryHash bytecode :)`
  );
  await delayBy(delayTime);

  hre.run("verify:verify", {
    address: LotteryHash.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, PREMIUM, VRF_KEY_HASH],
  });
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
