pragma solidity >=0.7.0 <0.9.0;

contract DIOVoting {
    mapping (string => uint256) public votesReceived;

    string[] public candidateList;

    constructor (string[] memory candidateNames){
        candidateList = candidateNames;
    }

    function totalVotesFor(string memory candidate) view public returns (uint256){
        require(validCandidadte(candidate));

        return votesReceived[candidate];
    }

    function voteForCandidate (string memory candidate) public {
        require(validCandidadte(candidate));
        votesReceived[candidate] += 1;
    }

    function validCandidadte(string memory candidate) view public returns (bool){
        for(uint i = 0; i < candidateList.length; i++){
            if (keccak256(abi.encodePacked(candidateList[i])) == keccak256(abi.encodePacked(candidate))) {
                return true;
            }
        }
        return false;
    }

}