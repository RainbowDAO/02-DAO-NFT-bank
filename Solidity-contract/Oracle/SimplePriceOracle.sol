pragma solidity ^0.5.16;


contract SimplePriceOracle {
    mapping(address => uint) prices;
    event PricePosted(address asset, uint previousPriceMantissa, uint requestedPriceMantissa, uint newPriceMantissa);

    function getUnderlyingPrice(address cToken) public view returns (uint) {
        return prices[cToken];
    }

    function setUnderlyingPrice(address cToken, uint price) public {
        prices[cToken] = price;
    }
}
