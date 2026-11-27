---
title: "SetPlayerShopName | open.mp"
description: "Loads or unloads an interior script for a player (for example the ammunation menu)."
canonical: https://open.mp/docs/scripting/functions/SetPlayerShopName
language: en
---

# SetPlayerShopName

## Description

Loads or unloads an interior script for a player (for example the ammunation menu).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to load the interior script for. |
| const shopname\[\] | The [shop script](https://open.mp/docs/scripting/resources/shopnames) to load. Leave blank ("") to unload scripts. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/enter", cmdtext))
    {
        SetPlayerInterior(playerid, 5);
        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);
        SetPlayerShopName(playerid, "FDPIZA");
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Pizza Stack!");
        return 1;
    }
    return 0;
}
```

## Notes

note

This function does not support casino scripts.

## Related Functions

-   [DisableInteriorEnterExits](https://open.mp/docs/scripting/functions/DisableInteriorEnterExits): Disable the yellow door markers.
-   [SetPlayerInterior](https://open.mp/docs/scripting/functions/SetPlayerInterior): Set a player's interior.

## Related Resources

-   [Shop Names](https://open.mp/docs/scripting/resources/shopnames)
