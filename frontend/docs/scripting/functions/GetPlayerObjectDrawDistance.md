---
title: GetPlayerObjectDrawDistance
sidebar_label: GetPlayerObjectDrawDistance
description: Get the draw distance of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the draw distance of a player-object.

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| playerid | The ID of the player                                    |
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

- [GetObjectDrawDistance](GetObjectDrawDistance): Get the draw distance of an object.
