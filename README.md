# uniswapV3_hardhat_deployment

Based on:
https://www.youtube.com/watch?v=SeiaiiviEhM

## Deploy Start:
```shell
npx hardhat run --network sepolia scripts/deployStart.js
```

## Deploy Pool:
```shell
npx hardhat run --network sepolia scripts/deployPool.js
```
:warning: Note: when deploying a pool with NonfungiblePositionManager.sol :warning:
```solidity
createAndInitializePoolIfNecessary(token0,token1,fee,sqrtPriceX96)
```
the transaction will keep reverting, unless you switch the address input order to meet this condition
```solidity
require(token0 < token1)
``` 
https://etherscan.io/address/0xc36442b4a4522e871399cd717abdd847ab11fe88#code#F15#L19

## Add Liquidity To A Pool:
```shell
npx hardhat run --network sepolia scripts/poolAddLiquidity.js
```
