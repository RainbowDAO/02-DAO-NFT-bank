import RbBankOrchestrator from "../../abis/RbBankOrchestrator.json";
import erc20Factory from "../../abis/erc20Factory.json";


import RainbowBank from "../../abis/RainbowBank.json";
import LoanMarket from "../../abis/LoanMarket";
import RBT from "../../abis/RBT.json";
import RbtDeposit721 from "../../abis/RbtDeposit721.json";
import TokenExchangeMarket from "../../abis/TokenExchangeMarket.json"
const CONTRACTS = {
    RbBankOrchestrator:{address:"0xC8C40976B19F737869Db914D9730EbfB45117A5A",abi:RbBankOrchestrator},
    erc20Factory:{address:"0x12bC5979b3FC62a37cB315df3Ac3A5cA44883276" , abi:erc20Factory},
    RbtDeposit721: {address:"0x0143971fDE2983d0a3fF1c5E4fd9e19A4841887b",abi:RbtDeposit721},
    RBT:{address:"0xE0251eAA19bE299C836A575CD7ce9E72380CaCF4",abi:RBT},
    


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