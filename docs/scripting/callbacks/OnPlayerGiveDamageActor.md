---
title: OnPlayerGiveDamageActor
description: This callback is called when a player gives damage to an actor.
tags: ["player", "actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

This callback is called when a player gives damage to an actor.

| Name            | Description                                           |
|-----------------|-------------------------------------------------------|
| playerid        | The ID of the player that gave damage.                |
| damaged_actorid | The ID of the actor that received damage.             |
| Float:amount    | The amount of health/armour damaged_actorid has lost. |
| WEAPON:weaponid | The reason that caused the damage.                    |
| bodypart        | The [body part](../resources/bodyparts) that was hit  |

## Returns

1 - Callback will not be called in other filterscripts.

0 - Allows this callback to be called in other filterscripts.

It is always called first in filterscripts so returning 1 there blocks other filterscripts from processing it.

## Examples

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128];
    new attackerName[MAX_PLAYER_NAME];
    new weaponName[24];

    GetPlayerName(playerid, attackerName, sizeof (attackerName));
    GetWeaponName(weaponid, weaponName, sizeof (weaponName));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attackerName, amount, damaged_actorid, weaponName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnActorStreamOut](OnActorStreamOut): This callback is called when an actor is streamed out by a player's client.
- [OnActorStreamIn](OnActorStreamOut): This callback is called when an actor is streamed in by a player's client.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [CreateActor](../functions/CreateActor): Create an actor (static NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Set actor invulnerable.
- [SetActorHealth](../functions/SetActorHealth): Set the health of an actor.
- [GetActorHealth](../functions/GetActorHealth): Gets the health of an actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Check if actor is invulnerable.
- [IsValidActor](../functions/IsValidActor): Check if actor id is valid.

## Related Resources

- [Body Parts](../resources/bodyparts)
