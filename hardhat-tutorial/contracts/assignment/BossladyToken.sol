//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract BossladyToken{
    string public name = "BossladyToken";
    string public symbol = "BLT";
    uint256 public totalSupply = 100000;
    address public owner;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // constructor(address _newOwner) {
    //     balances[msg.sender] = totalSupply;
    //     owner = _newOwner;
    // }

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
    
    function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "Not enough tokens");
    

      // Transfer the amount.
        balances[msg.sender] -= amount;
        balances[to] += amount;

        emit Transfer(msg.sender, to, amount);

    }
}