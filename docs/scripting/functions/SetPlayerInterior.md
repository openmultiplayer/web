---
title: SetPlayerInterior
description: Set a player's interior.
tags: ["player"]
---

## Description

Set a player's interior. A list of currently known interiors and their positions can be found here.

| Name       | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| playerid   | The ID of the player to set the interior of.                         |
| interiorid | The [interior ID](../resources/interiorids.md) to set the player in. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
// Set player to default interior (outside)
SetPlayerInterior(playerid, 0);
```

## Related Functions

- [GetPlayerInterior](GetPlayerInterior.md): Get the current interior of a player.
- [LinkVehicleToInterior](LinkVehicleToInterior.md): Change the interior that a vehicle is seen in.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange.md): Called when a player changes interior.
