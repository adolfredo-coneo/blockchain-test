// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

/** 
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() {
        manager = msg.sender;
    }
   
    
}
