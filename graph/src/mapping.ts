/* eslint-disable node/no-missing-import */
import { Bytes } from "@graphprotocol/graph-ts";
import {
  GameEnded,
  GameStarted,
  PlayerJoined,
} from "../generated/LotteryHash/LotteryHash";
import { Game } from "../generated/schema";

export function handleGameStarted(event: GameStarted): void {
  let entity = Game.load(event.params.gameId.toString());
  if (!entity) {
    entity = new Game(event.params.gameId.toString());
    entity.players = [];
  }

  entity.entryFee = event.params.entryFee;
  entity.maxPlayers = event.params.maxPlayers;
  entity.save();
}

export function handlePlayerJoined(event: PlayerJoined): void {
  const entity = Game.load(event.params.gameId.toString());
  if (!entity) return;

  const currentPlayers: Bytes[] = entity.players;
  currentPlayers.push(event.params.player);
  entity.players = currentPlayers;
  entity.save();
}

export function handleGameEnded(event: GameEnded): void {
  const entity = Game.load(event.params.gameId.toString());
  if (!entity) return;

  entity.winner = event.params.winner;
  entity.requestId = event.params.requestId;
  entity.save();
}
