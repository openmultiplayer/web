---
title: GetPlayerZAim
sidebar_label: GetPlayerZAim
description: Gets a player's Z Aim.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets a player's Z Aim. (related to the camera and aiming)

| Name     | Description           |
| -------- | --------------------- |
| playerid | The ID of the player. |

## Returns

Returns the player's Z Aim as a float value.

## Examples

```c
new Float:zAim = GetPlayerZAim(playerid);

SendClientMessage(playerid, -1, "Z Aim = %f", zAim);
```

## Related Functions

- [GetPlayerCameraPos](GetPlayerCameraPos): Get the position of the player's camera.
