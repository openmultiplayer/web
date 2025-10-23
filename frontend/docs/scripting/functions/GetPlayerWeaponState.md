---
title: GetPlayerWeaponState
sidebar_label: GetPlayerWeaponState
description: Check the state of a player's weapon.
tags: ["player"]
---

## Description

Check the state of a player's weapon.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | The ID of the player to obtain the weapon state of. |

## Returns

The [state of the player's weapon](../resources/weaponstates).

**0** if player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/wstate", true))
    {
        new WEAPONSTATE:state = GetPlayerWeaponState(playerid);

        static weaponStates[4][64] =
        {
            "Current weapon has no ammo remaining",
            "Current weapon has a single bullet left",
            "Current weapon has more than one bullet left",
            "Reloading current weapon"
        };

        new string[144];
        format(string, sizeof(string), "Your weapon state: %s", weaponStates[state]);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.

## Related Resources

- [Weapon States](../resources/weaponstates)
