---
title: OnPlayerGiveDamage
description: This callback is called when a player gives damage to another player.
tags: ["player"]
---

## Description

This callback is called when a player gives damage to another player.

| Name            | Description                                                |
|-----------------|------------------------------------------------------------|
| playerid        | The ID of the player that gave damage.                     |
| damagedid       | The ID of the player that received damage.                 |
| Float:amount    | The amount of health/armour damagedid has lost (combined). |
| WEAPON:weaponid | The reason that caused the damage.                         |
| bodypart        | The [body part](../resources/bodyparts) that was hit.      |

## Returns

1 - Callback will not be called in other filterscripts.

0 - Allows this callback to be called in other filterscripts.

It is always called first in filterscripts so returning 1 there blocks other filterscripts from seeing it.

## Examples

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

- Keep in mind this function can be inaccurate in some cases.
- If you want to prevent certain players from damaging eachother, use [SetPlayerTeam](../functions/SetPlayerTeam).
- The weaponid will return 37 (flame thrower) from any fire sources (e.g. molotov, 18)
- The weaponid will return 51 from any weapon that creates an explosion (e.g. RPG, grenade)
- **playerid** is the only one who can call the callback.
- The amount is always the maximum damage the weaponid can do, even when the health left is less than that maximum damage. So when a player has 100.0 health and gets shot with a Desert Eagle which has a damage value of 46.2, it takes 3 shots to kill that player. All 3 shots will show an amount of 46.2, even though when the last shot hits, the player only has 7.6 health left.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerTakeDamage](OnPlayerTakeDamage): This callback is called when a player takes damage. 
- [OnPlayerWeaponShot](OnPlayerWeaponShot): This callback is called when a player fires a weapon. 

## Related Resources

- [Body Parts](../resources/bodyparts)
