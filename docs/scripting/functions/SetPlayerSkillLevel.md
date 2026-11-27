---
title: "SetPlayerSkillLevel | open.mp"
description: "Set the skill level of a certain weapon type for a player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerSkillLevel
language: en
---

# SetPlayerSkillLevel

## Description

Set the skill level of a certain weapon type for a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the weapon skill of. |
| WEAPONSKILL:skill | The [weapon](https://open.mp/docs/scripting/resources/weaponskills) to set the skill of. |
| level | The [skill level](https://open.mp/docs/scripting/resources/weaponskills#skill-levels) to set for that weapon, ranging from 0 to 999. A level out of range will max it out. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Make the player use single-handed sawn-off shotguns.
    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);
    return 1;
}
```

## Notes

warning

The **skill** parameter is NOT the weapon ID, it is the skill type. Click [here](https://open.mp/docs/scripting/resources/weaponskills) for a list of skill types.

## Related Functions

-   [GetPlayerSkillLevel](https://open.mp/docs/scripting/functions/GetPlayerSkillLevel): Get the player skill level of a certain weapon type.
-   [SetPlayerArmedWeapon](https://open.mp/docs/scripting/functions/SetPlayerArmedWeapon): Set a player's armed weapon.
-   [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon): Give a player a weapon.

## Related Information

-   [Weapon Skills](https://open.mp/docs/scripting/resources/weaponskills#skill-levels): List of weapon skills that are used to set player's skill level.
