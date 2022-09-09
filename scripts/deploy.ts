import hre from 'hardhat'

// Deployed on 0xd4AB7a0095042176f5377d7b83D2BaD8CAA090B6
async function main() {
  try {
    const nftContractFactory = await hre.ethers.getContractFactory('ChainBattles')
    const nftContract = await nftContractFactory.deploy()
    await nftContract.deployed()

    console.log("Contract deployed to:", nftContract.address)
    process.exit(0)
  } catch (e) {
    process.exit(1)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
