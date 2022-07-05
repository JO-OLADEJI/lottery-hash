// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract LotteryHash is VRFConsumerBase, Ownable {
    // chainlink variables
    // amount of LINK to send with the request
    uint256 public fee;
    // ID of public key of which randomness is verified against
    bytes32 public keyHash;

    // players in the lottery
    address[] public players;
    // maximum numbers of players
    uint8 public maxPlayers;
    bool public gameStarted;
    // fee for joining the game
    uint256 public entryFee;
    uint256 public gameId;

    // events
    event GameStarted(uint256 gameId, uint256 entryFee, uint8 maxPlayers);
    event PlayerJoined(uint256 gameId, address player);
    event GameEnded(
        uint256 gameId,
        address winner,
        uint256 prize,
        bytes32 requestId
    );

    constructor(
        address _vrfCoordinator,
        address _linkToken,
        uint256 _vrfFee,
        bytes32 _vrfKeyHash
    ) VRFConsumerBase(_vrfCoordinator, _linkToken) {
        fee = _vrfFee;
        keyHash = _vrfKeyHash;
        gameStarted = false;
    }

    function startGame(uint256 _entryFee, uint8 _maxPlayers) public onlyOwner {
        require(!gameStarted, "GAME_CURRENTLY_RUNNING");
        delete players;
        gameStarted = true;
        entryFee = _entryFee;
        maxPlayers = _maxPlayers;
        gameId++;

        emit GameStarted(gameId, entryFee, maxPlayers);
    }

    function joinGame() public payable {
        require(gameStarted, "GAME_NOT_STARTED");
        require(msg.value >= entryFee, "NOT_ENOUGH_STAKE");
        require(players.length < maxPlayers, "MAX_PLAYERS_REACHED");

        players.push(msg.sender);
        emit PlayerJoined(gameId, msg.sender);
        if (players.length == maxPlayers) {
            getRandomWinner();
        }
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness)
        internal
        override
    {
        uint256 winnerIndex = randomness % players.length;
        address winner = players[winnerIndex];
        emit GameEnded(gameId, winner, address(this).balance, requestId);

        (bool sent, ) = winner.call{value: address(this).balance}("");
        require(sent, "FAILED_TO_SEND_REWARD");
        gameStarted = false;
    }

    function getRandomWinner() private returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "NOT_ENOUGH_LINK");
        return requestRandomness(keyHash, fee);
    }

    receive() external payable {}

    fallback() external payable {}
}
