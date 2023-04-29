const { ethers } = require("hardhat");
const waffle = require("@nomiclabs/hardhat-waffle");
const {Contract, ContractFactory, utils, BigNumber} = require('ethers')
const WETH9 = require('../WETH9.json')
const bn = require('bignumber.js')

deploySepoliaUniswapV3()

async function deploySepoliaUniswapV3() {
  
  const [owner, signer2] = await ethers.getSigners();
  console.log(owner.address)
  const provider = waffle.provider;
  
  // Factory = new ContractFactory(artifacts.UniswapV3Factory.abi,artifacts.UniswapV3Factory.bytecode,owner)
  // factory = await Factory.deploy();
  // console.log('Factory', factory.address)
  
  let factoryAddress = "0x4e172dbef259c46de56ef953f29215640a664b31"
  let wethAddress = "0xc1202e7d42655F23097476f6D48006fE56d38d4f"
  
  // SwapRouter = new ContractFactory(artifacts.SwapRouter.abi,artifacts.SwapRouter.bytecode,owner)
  // swapRouter = await SwapRouter.deploy(factoryAddress,wethAddress);
  // console.log('SwapRouter', swapRouter.address)
  
  let swapRouterAddress = "0xEEf4f98dD12FcC6193cCCE792F3983803D0b56eD" 
  
  // NFTDescriptor = new ContractFactory(artifacts.NFTDescriptor.abi,artifacts.NFTDescriptor.bytecode,owner)
  // nftDescriptor = await NFTDescriptor.deploy();
  // console.log('NFTDescriptor', nftDescriptor.address)

  let nftDescriptorAddress = "0xc26ea02fb53594952b64559278bD0622555584e4"
  
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
