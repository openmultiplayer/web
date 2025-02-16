---
title: IsPlayerInRangeOfPoint
sidebar_label: IsPlayerInRangeOfPoint
description: Checks if a player is in range of a point.
tags: ["player"]
---

## Description

Checks if a player is in range of a point. This native function is faster than the PAWN implementation using distance formula.

| Name        | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| playerid    | The ID of the player.                                                  |
| Float:range | The furthest distance the player can be from the point to be in range. |
| Float:x     | The X coordinate of the point to check the range to.                   |
| Float:y     | The Y coordinate of the point to check the range to.                   |
| Float:z     | The Z coordinate of the point to check the range to.                   |

## Returns

**true** - The player is in range of the point.

**false** - The player is not in range of the point.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stadium", true))
    {
        if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))
        {
            SendClientMessage(playerid, 0xFFFFFFFF, "You are near the stadium entrance!");
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Get the distance between a player and a point.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Get the distance between a vehicle and a point.
- [GetPlayerPos](GetPlayerPos): Get a player's position.
