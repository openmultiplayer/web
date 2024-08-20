---
title: GetPlayerAmmo
description: Gets the amount of ammo in a player's current weapon.
tags: ["player"]
---

## Description

Gets the amount of ammo in a player's current weapon.

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player whose ammo to get. |

## Returns

The amount of ammo in the player's current weapon.

## Examples

```c
ublic OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myammo", true))
    {
        new
            ammo = GetPlayerAmmo(playerid),
            string[32];

        format(string, sizeof(string), "Your ammo: %i", ammo);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

The ammo can hold 16-bit values, therefore values over 32767 will return erroneous values.

:::

## Related Functions

- [SetPlayerAmmo](SetPlayerAmmo): Set the ammo of a specific player's weapon.
- [GetPlayerWeaponData](GetPlayerWeaponData): Find out information about weapons a player has.
