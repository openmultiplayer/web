---
title: "SetPlayerHealth | open.mp"
description: "Set the health of a player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerHealth
language: en
---

# SetPlayerHealth

## Description

Set the health of a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the health of. |
| Float:health | The value to set the player's health to. Max health that can be displayed in the HUD is 100, though higher values are valid. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        // Sets the players health to full
        SetPlayerHealth(playerid, 100.0);
        return 1;
    }
    if (!strcmp("/kill", cmdtext, true))
    {
        // Kills the players
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   If a player's health is set to 0.0 or a minus value, they will die instantly.
-   If a player's health is below 10.0 or above 98303.0, their health bar will flash.

warning

Health is obtained rounded to integers: set 50.15, but get 50.0

## Related Functions

-   [GetPlayerHealth](https://open.mp/docs/scripting/functions/GetPlayerHealth): Find out how much health a player has.
-   [GetPlayerArmour](https://open.mp/docs/scripting/functions/GetPlayerArmour): Find out how much armour a player has.
-   [SetPlayerArmour](https://open.mp/docs/scripting/functions/SetPlayerArmour): Set the armour of a player.
