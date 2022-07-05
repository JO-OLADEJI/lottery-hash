import hre, { ethers } from "hardhat";
import { BigNumber } from "ethers";

const delayBy = async (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const main = async () => {
  const lotteryHashFactory = await ethers.getContractFactory("LotteryHash");

  /* these constants are gotten from https://docs.chain.link/docs/vrf-contracts/
   * the ones highlighted below are for the avalanche FUJI testnet
   */
  const VRF_COORDINATOR = "0x2eD832Ba664535e5886b75D64C46EB9a228C2610";
  const LINK_TOKEN = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";
  const PREMIUM: BigNumber = ethers.utils.parseEther("0.005");
  const VRF_KEY_HASH =
    "0x354d2f95da55398f44b7cff77da56283d9c6c829a4bdf1bbcaf2ad6a4d081f61";
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
    `Wating for ${delayTime} secons for SnowTrace to index LotteryHash bytecode :)`
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
