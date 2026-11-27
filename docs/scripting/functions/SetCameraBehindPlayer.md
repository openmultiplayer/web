---
title: "SetCameraBehindPlayer | open.mp"
description: "Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos."
canonical: https://open.mp/docs/scripting/functions/SetCameraBehindPlayer
language: en
---

# SetCameraBehindPlayer

## Description

Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos.

| Name | Description |
| --- | --- |
| playerid | The player you want to restore the camera for. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
SetCameraBehindPlayer(playerid);
```

## Related Functions

-   [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos): Set a player's camera position.
-   [SetPlayerCameraLookAt](https://open.mp/docs/scripting/functions/SetPlayerCameraLookAt): Set where a player's camera should face.
