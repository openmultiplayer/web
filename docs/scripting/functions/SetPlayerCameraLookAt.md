---
title: "SetPlayerCameraLookAt | open.mp"
description: "Set the direction a player's camera looks at."
canonical: https://open.mp/docs/scripting/functions/SetPlayerCameraLookAt
language: en
---

# SetPlayerCameraLookAt

## Description

Set the direction a player's camera looks at. Generally meant to be used in combination with [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos).

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose camera to set. |
| Float:x | The X coordinate for the player's camera to look at. |
| Float:y | The Y coordinate for the player's camera to look at. |
| Float:z | The Z coordinate for the player's camera to look at. |
| CAM\_MOVE:cut | The [style](https://open.mp/docs/scripting/resources/cameracutstyles) of the change. Can be used to interpolate (change slowly) from old pos to new pos using CAMERA\_MOVE. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```

## Notes

warning

Using the camera functions directly after [enabling spectator mode](https://open.mp/docs/scripting/functions/TogglePlayerSpectating) doesn't work.

## Related Functions

-   [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos): Set a player's camera position.
-   [SetCameraBehindPlayer](https://open.mp/docs/scripting/functions/SetCameraBehindPlayer): Set a player's camera behind them.
-   [GetPlayerCameraPos](https://open.mp/docs/scripting/functions/GetPlayerCameraPos): Find out where the player's camera is.
-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector

## Related Resources

-   [Camera Cut Styles](https://open.mp/docs/scripting/resources/cameracutstyles)
