---
title: SetPlayerVirtualWorld
description: Set the virtual world of a player.
tags: ["player"]
---

## Description

Set the virtual world of a player. They can only see other players or vehicles that are in that same world.

| Name         | Description                                                |
| ------------ | ---------------------------------------------------------- |
| playerid     | The ID of the player you want to set the virtual world of. |
| virtualWorld | The virtual world ID to put the player in.                 |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/world3", true) == 0)
    {
        SetPlayerVirtualWorld(playerid, 3);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

The default virtual world is 0.

:::

## Related Functions

- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Check what virtual world a player is in.
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Set the virtual world of a vehicle.
