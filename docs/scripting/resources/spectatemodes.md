---
title: "Spectate Modes | open.mp"
description: "Spectate Modes used by PlayerSpectatePlayer and PlayerSpectateVehicle functions."
canonical: https://open.mp/docs/scripting/resources/spectatemodes
language: en
---

# Spectate Modes

info

Spectate Modes used by [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer) and [PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle) functions.

| Type | Effect |
| --- | --- |
| SPECTATE\_MODE\_NORMAL | Normal spectate mode (third person point of view). Camera can not be changed |
| SPECTATE\_MODE\_FIXED | Use [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos) after this to position the player's camera, and it will track the player/vehicle set with [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer)/[PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle) |
| SPECTATE\_MODE\_SIDE | The camera will be attached to the side of the player/vehicle (like when you're in first-person camera on a bike and you do a wheelie) |
