---
title: "GetPlayerObjectDrawDistance | open.mp"
description: "Get the draw distance of a player-object."
canonical: https://open.mp/docs/scripting/functions/GetPlayerObjectDrawDistance
language: en
---

# GetPlayerObjectDrawDistance

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the draw distance of a player-object.

| Name | Description |
| --- | --- |
| playerid | The ID of the player |
| objectid | The ID of the player-object to get the draw distance of |

## Returns

Returns the draw distance as float.

## Examples

```c
new playerobjectid = CreatePlayerObject(playerid, 3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetPlayerObjectDrawDistance(playerid, playerobjectid);
// drawDistance = 100.0
```

## Related Functions

-   [GetObjectDrawDistance](https://open.mp/docs/scripting/functions/GetObjectDrawDistance): Get the draw distance of an object.
