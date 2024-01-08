// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lockv2 {
    struct Deposit {
        uint256 amount;
        uint256 releaseTime;
    }

    mapping(address => Deposit) public deposits;

    event Deposited(address indexed user, uint256 amount, uint256 releaseTime);
    event Withdrawn(address indexed user, uint256 amount);

    function deposit(uint256 _lockDuration) external payable {
        require(_lockDuration > 0, "Lock duration must be greater than 0");
        uint256 releaseTime = block.timestamp + _lockDuration;
        deposits[msg.sender] = Deposit(msg.value, releaseTime);
        emit Deposited(msg.sender, msg.value, releaseTime);
    }

    function withdraw() external {
        Deposit storage userDeposit = deposits[msg.sender];
        require(userDeposit.amount > 0, "No deposit found");
        require(block.timestamp >= userDeposit.releaseTime, "Funds are locked");

        uint256 amountToWithdraw = userDeposit.amount;
        delete deposits[msg.sender];
        payable(msg.sender).transfer(amountToWithdraw);
        emit Withdrawn(msg.sender, amountToWithdraw);
    }
}

