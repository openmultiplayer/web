---
title: "GetPlayerInterior | open.mp"
description: "Retrieves the player's current interior."
canonical: https://open.mp/docs/scripting/functions/GetPlayerInterior
language: en
---

# GetPlayerInterior

## Description

Retrieves the player's current interior. A list of currently known interiors with their positions can be found on [this page](https://open.mp/docs/scripting/resources/interiorids).

| Name | Description |
| --- | --- |
| playerid | The player to get the interior ID of. |

## Returns

The interior ID the player is currently in.

## Examples

```c
public OnPlayerCommandText(playerid, text[])
{
    if (strcmp(cmdtext, "/int", true) == 0)
    {
        new string[64];
        format(string, sizeof(string), "You are in interior %i", GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## Notes

note

Always returns interior 0 for NPCs.

## Related Functions

-   [SetPlayerInterior](https://open.mp/docs/scripting/functions/SetPlayerInterior): Set a player's interior.
-   [GetPlayerVirtualWorld](https://open.mp/docs/scripting/functions/GetPlayerVirtualWorld): Check what virtual world a player is in.
