const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('Supergirls');
  const nftContract = await nftContractFactory.deploy(
      "Supergirls",
      "SUPER",
      "ipfs://QmYDbnKDpe1b71gW37HA3TvDXBqjms1kf157JPVUUopAi7/",
      "https://www.numinouspark.xyz/#notrevealed"
  );
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
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
