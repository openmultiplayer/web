---
title: "GetPlayerSkillLevel | open.mp"
description: "Get the player skill level of a certain weapon type."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSkillLevel
language: en
---

# GetPlayerSkillLevel

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the player skill level of a certain weapon type.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| WEAPONSKILL:skill | The [weapon](https://open.mp/docs/scripting/resources/weaponskills) to get the skill of. |

## Returns

0 - failure (invalid weapon skill).

Otherwise, it returns the skill level of the weapon type.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/skill", true))
    {
        new string[64];

        new skill = GetPlayerSkillLevel(playerid, WEAPONSKILL_PISTOL);

        format(string, sizeof(string), "Your pistol skill level is %d", skill);
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```

## Notes

warning

The skill parameter is NOT the weapon ID, it is the skill type. Click [here](https://open.mp/docs/scripting/resources/weaponskills) for a list of skill types.

# Related Functions

-   [SetPlayerSkillLevel](https://open.mp/docs/scripting/functions/SetPlayerSkillLevel): Set the skill level of a certain weapon type for a player.

# Related Information

-   [Weapon Skills](https://open.mp/docs/scripting/resources/weaponskills): List of weapon skills that are used to set player's skill level.
