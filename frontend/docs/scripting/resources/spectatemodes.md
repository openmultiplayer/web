---
title: Spectate Modes
description: Spectate Modes used by PlayerSpectatePlayer and PlayerSpectateVehicle functions.
tags: []
sidebar_label: Spectate Modes
---

:::info

Spectate Modes used by [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer) and [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle) functions.

:::

| Type                 | Effect                                                                                                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPECTATE_MODE_NORMAL | Normal spectate mode (third person point of view). Camera can not be changed                                                                                                                                                                                              |
| SPECTATE_MODE_FIXED  | Use [SetPlayerCameraPos](../functions/SetPlayerCameraPos) after this to position the player's camera, and it will track the player/vehicle set with [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer)/[PlayerSpectateVehicle](../functions/PlayerSpectateVehicle) |
| SPECTATE_MODE_SIDE   | The camera will be attached to the side of the player/vehicle (like when you're in first-person camera on a bike and you do a wheelie)                                                                                                                                    |
