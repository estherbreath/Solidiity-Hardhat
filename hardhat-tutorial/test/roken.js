const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("Token", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer the correct amount to the second account", async function() {
    const [owner, acc1, acc2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const token = await Token.deploy();

    await token.transfer(acc1.address, 105);
    expect(await token.balanceOf(acc1.address)).to.equal(105);

    //Transfer
    await token.connect(acc1).transfer(acc2.address, 50);
    expect(await token.balanceOf(acc2.address)).to.equal(50)
  });

  it("Should set the correct owner", async function () {
    const [deployer] = await ethers.getSigners()

    const Token= await ethers.getContractFactory("Token");

    const tokenContract = await Token.deploy();

    expect(await tokenContract.owner()).to.be.equal(deployer.address)
  })
});