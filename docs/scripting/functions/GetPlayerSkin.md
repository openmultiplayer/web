---
title: "GetPlayerSkin | open.mp"
description: "Returns the class of the players skin."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSkin
language: en
---

# GetPlayerSkin

## Description

Returns the class of the players skin

| Name | Description |
| --- | --- |
| playerid | The player you want to get the skin from |

## Returns

The [skin id](https://open.mp/docs/scripting/resources/skins). **0** if invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myskin", true))
    {
        new string[32];
        new playerSkin = GetPlayerSkin(playerid);

        format(string, sizeof(string), "Your skin id: %d", playerSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   Returns the new skin after [SetSpawnInfo](https://open.mp/docs/scripting/functions/SetSpawnInfo) is called but before the player actually respawns to get the new skin.
-   Returns the old skin if the player was spawned through [SpawnPlayer](https://open.mp/docs/scripting/functions/SpawnPlayer) function.

## Related Functions

-   [SetPlayerSkin](https://open.mp/docs/scripting/functions/SetPlayerSkin): Set a player's skin.

## Related Resources

-   [Skin IDs](https://open.mp/docs/scripting/resources/skins)
