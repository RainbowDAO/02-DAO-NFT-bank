
## 1. Project name

DAO NFT Bank System

## 2. Elevator pitch

DAO NFT Bank System can deposit ERC20 tokens into banks for lock-up, and can obtain NFT rewards with ERC721 attributes. In this way, the circulation of ERC20 tokens can be controlled and the currency price can be increased.

## 3. Team Name

RainbowCity Foundation

## 4. Submission links

Submission address directory:
http://www.rainbowdao.io/project

Project demo website:
https://daonftbank.rainbowdao.io/

GitHub repository:
https://github.com/RainbowDAO/02-DAO-NFT-bank

Solidity-Version-contract (GitHub):
https://github.com/RainbowDAO/02-DAO-NFT-bank/tree/main/Solidity-contract

Frontend code (GitHub):
https://github.com/RainbowDAO/02-DAO-NFT-bank/tree/main/Front-end

Picture (GitHub):
https://github.com/RainbowDAO/02-DAO-NFT-bank/tree/main/PIC

## 5. Recorded video demo

https://youtu.be/bNNwdelrjx8

## 6. Testnet Deployment Information

#### 1.BNB Test

Network Name: BNB Test Network
RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/

Contract deployment address

ERC20FACTORY :
0xb60AB0c2BE9f4Afb895DF1d3E59F1755B37e2F04

RBBANKORCHESTRATOR :
0x02Eb73C3B1F1F40c268BDf8E1091E8F003c91d71

LOANMARKETORCHESTRATOR :
0x035f017f53d03F6a1208074821e2efaB1500E136

RBTDEPOSITORCHESTRATOR :
0x775b2ebf696D08ae43D3b49897b05353D499081A

TOKENEXCHANGEMARKETORCHESTRATOR :
0xF3f73182F79f72103da2B583cFE01fCC43af728f

RBTDEPOSIT721 :
0xC88678320737dBdFEe7Cf90e20040D41b9F3baD1

#### 2.Rinkeby Test

Network Name: Rinkeby Test Network
RPC URL: https://rinkeby.infura.io/v3/

Contract deployment address

ERC20FACTORY :
0xa62ae03841367FeB86b35EF1b432ac8D30DF4CF9

RBBANKORCHESTRATOR :
0x6918e0a22A49725E2f8a837897964d477d6f3f74

LOANMARKETORCHESTRATOR :
0x43590456bd89D0E4E47adC14FF8007B44EB6128B

RBTDEPOSITORCHESTRATOR :
0xb59Ab779655E80ED12e1c7B518018CeF0C7560D7

TOKENEXCHANGEMARKETORCHESTRATOR :
0xDa9FAa85952327004b0762Aa69505A5b2eE0f9e4

RBTDEPOSIT721 :
0x6C7Cc7973cf1A3D609aae6F98C6083bB0BBA3f88

Frontend docs:
https://github.com/RainbowDAO/02-DAO-NFT-bank/blob/main/Front-end/README.md

Contract  docs:
https://github.com/RainbowDAO/02-DAO-NFT-bank/blob/main/Solidity-contract/README.md

## 7.Project social media:

RainbowDAO website: http://www.rainbowdao.io

RainbowCity website: https://www.rainbowcity.io

Twitter:    https://twitter.com/RainbowDAOio

Discord:    https://discord.gg/vbnvFEeYRr

Telegram: https://t.me/RainbowDAO

Medium:   https://medium.com/rainbowcity

Github:    https://github.com/RainbowDAO

Email: Rainbowcitydao@gmail.com

#  Project Story

## 1. Inspiration

In all types of DAO organizations, the hedging management of governance Token is a vitally important job. How to guide the community members to hedge Tokens is a critical module in terms of the liquidity of the governance Token management. As many governance Tokens lack a hedging system, when the flow of Token becomes greater and greater, the actual value of Token will continue to decrease to lead to the final failure of the whole project. With this inspiration and to tackle the problem, we designed and developed a DAO NFT Bank System that can guide the community members to hedge Tokens. This is the first application scenario of the system.

DAO NFT Bank System has another application scenario that enables hedging when a new project initializes and the initial coins are distributed to all VC and seed users. In this way, we cam make it happen that the respective ERC20 Tokens can be deposited into our NFT Bank system with a relative hedging date and an NFT certificate. These NFT certificates are considered the initial investing proof. This can completely solve the pivotal hedging issue the initial investors have, which is also the second important application scenario of this Bank system.

## 2. What it does

DAO NFT Bank System is one of the DAO infrastructure products developed by the RainbowCity Foundation, providing the governance Token hedging banks and NFT motivation system for all of the DAO organizations. This system is designed to lock position of governance Token. NFTs can be rewarded based on the position locking timing and amount. Simply it means that one can deposit ERC20 governance tokens into the hedging bank to get the NFT certificate in the form of ERC721, which is categorized into financial NFT. The rewarded NFT certificates are the equivalent of ERC20 Token deposit receipts. In the future, the NFT deposit receipt holders can withdraw the relative ERC20 governance Tokens by the time of validity.

Meanwhile, in order to guarantee the liquidity of the deposited ERC20 governance Tokens, we developed an NFT mortgage and loan market and an NFT transfer market for NFT deposit receipts. The NFT mortgage and loan market can get loans from the market by pledging the NFT deposit receipts. The NFT certificates can be cashed in the NFT transfer market by transferring the ownership.

## 3. How we built it

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/Logic-diagram.png)

⑴  Create an ERC Token using the ERC20 factory and set basic information such as Token name, circulation, logo, decimals etc.

⑵  Create a DAO NFT bank with bank's name, mortgaged governance Token address, time set-up of the mortgage and NFT's title.

⑶   NFT badge contains information as follows: NFT serial No., NFT initial creator, NFT current holder, NFT lock-position time, NFT whole governance badge name, NFT whole governance badge quantity, lock-position end time, lock-position remaining days, withdrawal button.

⑷   Pledge governance Tokens and create an NFT badge: choose deposit amount, choose deposit duration, complete NFT badge.

⑸  To get the liquidity during the mortgage period, we can pledge the NFT badges in the mortgage and loan market to get borrow certain amount of money.

⑹   Loaning orders contain information as follows: loan Token, loan amount, loan period, loan start time, estimated payment date, remaining days, loan rates, loan actual interests and payback.

⑺   To get the liquidity during mortgage, one can sell their NFT badges in the transfer market.

⑻   The transfer market orders contain information as below: order serial No., NFT serial No., NFT initial creator, NFT current holder, NFT set time, NFT expiry date, unlock remaining time, NFT transfer price, whole Token amount and transfer fees.

⑼   Anyone can buy the available NFTs through the transfer market and gain tokens included in this NFT. As soon as the hedging date expires, one can get withdraw the token from the bank with the NFT lock-position badge.


#  Project UI


## 1-Create-NFT-Bank


![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/1-NFT-Bank/1-Create-NFT-Bank.png)

## 2-Create-NFT-Bank

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/1-NFT-Bank/2-Create-NFT-Bank.png)

## 3-NFT-Bank-Home

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/1-NFT-Bank/3-NFT-Bank-Home.png)


## 4-NFT-Bank-Stake
![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/1-NFT-Bank/4-NFT-Bank-Stake.png)

## 5-My-Loan-Information

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/2-Mortgage-Loan-Market/1-My-Loan-Information.png)

## 6-My-Loan-Information-Order

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/2-Mortgage-Loan-Market/2-My-Loan-Information-Order.png)

## 7-My-Loan-Information-Order

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/2-Mortgage-Loan-Market/3-My-Loan-Information-Order.png)

## 8-Already-Lent-Out

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/2-Mortgage-Loan-Market/4-Already-Lent-Out.png)

## 9-Borrowing-Market

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/2-Mortgage-Loan-Market/5-Borrowing-Market.png)

## 10-Token-Assignment-Market-Buy

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/3-Token-Assignment-Market/1-Token-Assignment-Market-Buy.png)

## 11-Token-Assignment-Market-Buy

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/3-Token-Assignment-Market/2-Token-Assignment-Market-Buy.png)

## 12-Token-Assignment-Market-Sell

![image](https://raw.githubusercontent.com/RainbowDAO/02-DAO-NFT-bank/main/PIC/3-Token-Assignment-Market/3-Token-Assignment-Market-Sell.png)
