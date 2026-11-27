---
title: "GetPlayerZAim | open.mp"
description: "Gets a player's Z Aim."
canonical: https://open.mp/docs/scripting/functions/GetPlayerZAim
language: en
---

# GetPlayerZAim

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets a player's Z Aim. (related to the camera and aiming)

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Returns

Returns the player's Z Aim as a float value.

## Examples

```c
new Float:zAim = GetPlayerZAim(playerid);

SendClientMessage(playerid, -1, "Z Aim = %f", zAim);
```

## Related Functions

-   [GetPlayerCameraPos](https://open.mp/docs/scripting/functions/GetPlayerCameraPos): Get the position of the player's camera.
