---
title: OnPlayerTakeDamage
description: This callback is called when a player takes damage.
tags: ["player"]
---

## Description

This callback is called when a player takes damage.

| Name            | Description                                                                       |
|-----------------|-----------------------------------------------------------------------------------|
| playerid        | The ID of the player that took damage.                                            |
| issuerid        | The ID of the player that caused the damage. INVALID_PLAYER_ID if self-inflicted. |
| Float:amount    | The amount of damage the player took (health and armour combined).                |
| WEAPON:weaponid | The ID of the weapon/reason for the damage.                                       |
| bodypart        | The [body part](../resources/bodyparts) that was hit.                             |

## Returns

1 - Callback will not be called in other filterscripts.

0 - Allows this callback to be called in other filterscripts.

It is always called first in filterscripts so returning 1 there blocks other filterscripts from seeing it.

## Examples

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // If not self-inflicted
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

<br />

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // One shot to the head to kill with sniper rifle
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Notes

:::tip

- The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18).
- The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
- **playerid** is the only one who can call the callback.
- The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

:::

:::warning

- [GetPlayerHealth](../functions/GetPlayerHealth) and [GetPlayerArmour](../functions/GetPlayerArmour) will return the old amounts of the player before this callback.
- Always check if issuerid is valid before using it as an array index.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerGiveDamage](OnPlayerGiveDamage): This callback is called when a player gives damage. 
- [OnPlayerWeaponShot](OnPlayerWeaponShot): This callback is called when a player fires a weapon. 

## Related Resources

- [Body Parts](../resources/bodyparts)
