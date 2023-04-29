const { ethers } = require("hardhat");
const waffle = require("@nomiclabs/hardhat-waffle");
const {Contract, ContractFactory, utils, BigNumber} = require('ethers')
const WETH9 = require('../WETH9.json')
const bn = require('bignumber.js')

deployUniswapV3Factory()

async function deployUniswapV3Factory() {
  const [owner, signer2] = await ethers.getSigners();
  const provider = waffle.provider;
  
  console.log(owner.address)
  
  // Weth = new ContractFactory(!!!!,!!!!,owner)
  // weth = await Weth.deploy();
  // console.log('weth', weth.address)
  
  Factory = new ContractFactory(artifacts.UniswapV3Factory.abi,artifacts.UniswapV3Factory.bytecode,owner)
  factory = await Factory.deploy();
  console.log('Factory', factory.address)
  
}

const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  SwapRouter: require("@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json"),
  NFTDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json"),
  NonfungibleTokenPositionDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
  WETH9,
};

// const UniswapV3Pool = require("!!!!!")
