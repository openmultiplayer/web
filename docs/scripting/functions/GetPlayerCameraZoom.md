---
title: "GetPlayerCameraZoom | open.mp"
description: "Retrieves the game camera zoom level for a given player."
canonical: https://open.mp/docs/scripting/functions/GetPlayerCameraZoom
language: en
---

# GetPlayerCameraZoom

## Description

Retrieves the game camera zoom level for a given player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the camera zoom level of. |

## Returns

The player's camera zoom level (camera, sniper etc.), a float.

## Examples

```c
new string[128];
format(string, sizeof(string), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, string);
```

## Notes

note

This retrieves the zoom level of the GAME Camera (including Sniper scope), not the camera WEAPON.

## Related Functions

-   [GetPlayerCameraAspectRatio](https://open.mp/docs/scripting/functions/GetPlayerCameraAspectRatio): Get the aspect ratio of a player's camera.
-   [GetPlayerCameraPos](https://open.mp/docs/scripting/functions/GetPlayerCameraPos): Find out where the player's camera is.
-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector
