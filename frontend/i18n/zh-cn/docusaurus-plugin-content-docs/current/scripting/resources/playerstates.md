---
title: Player States
sidebar_label: Player States
description: A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.
tags: ["player"]
sidebar_label: Player States
---

This page compiles the list of all the player states used by [GetPlayerState](../functions/GetPlayerState) function or [OnPlayerStateChange](../callbacks/OnPlayerStateChange) callback. Both pages contain examples on how to use the values below.

From a server developer standpoint having both "player states" and "special actions" may seem confusing. The main difference between the two is that the former is used for synchronization purposes (and there are packets associated with some of them), and is used for more "generic" actions. The "special actions" don't have any packets associated with them and cover more "specific" actions, and obviously have little to do with the current state of a player.

## States

| ID  | Macro                                | Description                          |
| --- | ------------------------------------ | ------------------------------------ |
| 0   | PLAYER_STATE_NONE                    | The default player state which is used while initializing           |
| 1   | PLAYER_STATE_ONFOOT                  | The player is on foot                    |
| 2   | PLAYER_STATE_DRIVER                  | The player is driving a vehicle    |
| 3   | PLAYER_STATE_PASSENGER               | The player is in a vehicle as a passenger     |
| 4   | PLAYER_STATE_EXIT_VEHICLE            | The player is exiting a vehicle. It is primarily used internally               |
| 5   | PLAYER_STATE_ENTER_VEHICLE_DRIVER    | The player is entering a vehicle as the driver. It is primarily used internally    |
| 6   | PLAYER_STATE_ENTER_VEHICLE_PASSENGER | The player is entering a vehicle as the passenger. It is primarily used internally |
| 7   | PLAYER_STATE_WASTED                  | The player is either dead or in class selection |
| 8   | PLAYER_STATE_SPAWNED                 | The player is just spawned                    |
| 9   | PLAYER_STATE_SPECTATING              | The player is in spectator mode                 |
