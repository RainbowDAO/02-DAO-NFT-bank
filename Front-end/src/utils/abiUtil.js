import RbBankOrchestrator from "../../abis/RbBankOrchestrator.json";
import erc20Factory from "../../abis/erc20Factory.json";


import RainbowBank from "../../abis/RainbowBank.json";
import LoanMarket from "../../abis/LoanMarket";
import RBT from "../../abis/RBT.json";
import RbtDeposit721 from "../../abis/RbtDeposit721.json";
import TokenExchangeMarket from "../../abis/TokenExchangeMarket.json"
const CONTRACTS = {
    RbBankOrchestrator:{address:"0x6918e0a22A49725E2f8a837897964d477d6f3f74",abi:RbBankOrchestrator},
    erc20Factory:{address:"0xa62ae03841367FeB86b35EF1b432ac8D30DF4CF9" , abi:erc20Factory},
    RbtDeposit721: {address:"0x6C7Cc7973cf1A3D609aae6F98C6083bB0BBA3f88",abi:RbtDeposit721},
    RBT:{address:"0x28A5d304D9b23319F8a08415f495b49012269671",abi:RBT},
    


    RainbowBank:{address:"0x40D45f3142137f008A77bcDE2EB35Dc7347aba5c",abi:RainbowBank},
    LoanMarket:{address:"0xE126dC5544BB9e0A22595d5dc62CF4F53fE09479",abi:LoanMarket},
    TokenExchangeMarket:{address:"0xbdDfAcCd7D5f902bF1520eCe29E62A8e33017FF1",abi:TokenExchangeMarket},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    console.log(CONTRACTS[name].abi, address)
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};