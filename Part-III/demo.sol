// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Owner {
    string public candidateName;

    constructor () {
        candidateName = "Unknown";
    }

    function setCandidate (string memory _name) public {
        candidateName = _name;
    }
}
