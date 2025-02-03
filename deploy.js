const hre = require("hardhat");

async function main() {
    
    await hre.run("compile");
    const Geno = await hre.ethers.getContractFactory("Geno");
    const geno = await Geno.deploy();
    await geno.deployed();

    console.log(`Geno contract deployed to: ${geno.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
