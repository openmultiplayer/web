---
title: GetPlayerSkillLevel
sidebar_label: GetPlayerSkillLevel
description: Get the player skill level of a certain weapon type.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the player skill level of a certain weapon type.

| Name              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| playerid          | The ID of the player.                                        |
| WEAPONSKILL:skill | The [weapon](../resources/weaponskills) to get the skill of. |

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

:::warning

The skill parameter is NOT the weapon ID, it is the skill type. Click [here](../resources/weaponskills) for a list of skill types.

:::

# Related Functions

- [SetPlayerSkillLevel](SetPlayerSkillLevel): Set the skill level of a certain weapon type for a player.

# Related Information

- [Weapon Skills](../resources/weaponskills): List of weapon skills that are used to set player's skill level.
