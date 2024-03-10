---
title: GetPlayerCameraZoom
description: Retrieves the game camera zoom level for a given player.
tags: ["player", "camera"]
---

## Description

Retrieves the game camera zoom level for a given player.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
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

:::tip

This retrieves the zoom level of the GAME Camera (including Sniper scope), not the camera WEAPON.

:::

## Related Functions

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): Get the aspect ratio of a player's camera.
- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
