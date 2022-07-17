// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GameEnded extends ethereum.Event {
  get params(): GameEnded__Params {
    return new GameEnded__Params(this);
  }
}

export class GameEnded__Params {
  _event: GameEnded;

  constructor(event: GameEnded) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get prize(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get requestId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class GameStarted extends ethereum.Event {
  get params(): GameStarted__Params {
    return new GameStarted__Params(this);
  }
}

export class GameStarted__Params {
  _event: GameStarted;

  constructor(event: GameStarted) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get entryFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get maxPlayers(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlayerJoined extends ethereum.Event {
  get params(): PlayerJoined__Params {
    return new PlayerJoined__Params(this);
  }
}

export class PlayerJoined__Params {
  _event: PlayerJoined;

  constructor(event: PlayerJoined) {
    this._event = event;
  }

  get gameId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LotteryHash extends ethereum.SmartContract {
  static bind(address: Address): LotteryHash {
    return new LotteryHash("LotteryHash", address);
  }

  entryFee(): BigInt {
    let result = super.call("entryFee", "entryFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_entryFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("entryFee", "entryFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameId(): BigInt {
    let result = super.call("gameId", "gameId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_gameId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("gameId", "gameId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameStarted(): boolean {
    let result = super.call("gameStarted", "gameStarted():(bool)", []);

    return result[0].toBoolean();
  }

  try_gameStarted(): ethereum.CallResult<boolean> {
    let result = super.tryCall("gameStarted", "gameStarted():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  keyHash(): Bytes {
    let result = super.call("keyHash", "keyHash():(bytes32)", []);

    return result[0].toBytes();
  }

  try_keyHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("keyHash", "keyHash():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  maxPlayers(): i32 {
    let result = super.call("maxPlayers", "maxPlayers():(uint8)", []);

    return result[0].toI32();
  }

  try_maxPlayers(): ethereum.CallResult<i32> {
    let result = super.tryCall("maxPlayers", "maxPlayers():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  players(param0: BigInt): Address {
    let result = super.call("players", "players(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_players(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("players", "players(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _vrfCoordinator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _linkToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _vrfFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _vrfKeyHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class JoinGameCall extends ethereum.Call {
  get inputs(): JoinGameCall__Inputs {
    return new JoinGameCall__Inputs(this);
  }

  get outputs(): JoinGameCall__Outputs {
    return new JoinGameCall__Outputs(this);
  }
}

export class JoinGameCall__Inputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class JoinGameCall__Outputs {
  _call: JoinGameCall;

  constructor(call: JoinGameCall) {
    this._call = call;
  }
}

export class RawFulfillRandomnessCall extends ethereum.Call {
  get inputs(): RawFulfillRandomnessCall__Inputs {
    return new RawFulfillRandomnessCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomnessCall__Outputs {
    return new RawFulfillRandomnessCall__Outputs(this);
  }
}

export class RawFulfillRandomnessCall__Inputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get randomness(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RawFulfillRandomnessCall__Outputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StartGameCall extends ethereum.Call {
  get inputs(): StartGameCall__Inputs {
    return new StartGameCall__Inputs(this);
  }

  get outputs(): StartGameCall__Outputs {
    return new StartGameCall__Outputs(this);
  }
}

export class StartGameCall__Inputs {
  _call: StartGameCall;

  constructor(call: StartGameCall) {
    this._call = call;
  }

  get _entryFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _maxPlayers(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class StartGameCall__Outputs {
  _call: StartGameCall;

  constructor(call: StartGameCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
