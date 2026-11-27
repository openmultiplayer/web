---
title: "GetPlayerVirtualWorld | open.mp"
description: "Retrieves the current virtual world the player is in."
canonical: https://open.mp/docs/scripting/functions/GetPlayerVirtualWorld
language: en
---

# GetPlayerVirtualWorld

## Description

Retrieves the current virtual world the player is in.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the virtual world of. |

## Returns

The ID of the virtual world the player is currently in.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new string[32];
        format(string, sizeof(string), "Your virtual world: %i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## Notes

note

Virtual worlds are not the same as [interiors](https://open.mp/docs/scripting/functions/GetPlayerInterior).

## Related Functions

-   [SetPlayerVirtualWorld](https://open.mp/docs/scripting/functions/SetPlayerVirtualWorld): Set the virtual world of a player.
-   [GetVehicleVirtualWorld](https://open.mp/docs/scripting/functions/GetVehicleVirtualWorld): Check what virtual world a vehicle is in.
-   [GetPlayerInterior](https://open.mp/docs/scripting/functions/GetPlayerInterior): Get the current interior of a player.
