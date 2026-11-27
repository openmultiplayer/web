---
title: "OnPlayerGiveDamageActor | open.mp"
description: "This callback is called when a player gives damage to an actor."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerGiveDamageActor
language: en
---

# OnPlayerGiveDamageActor

warning

This callback was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

This callback is called when a player gives damage to an actor.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that gave damage. |
| damaged\_actorid | The ID of the actor that received damage. |
| Float:amount | The amount of health/armour damaged\_actorid has lost. |
| WEAPON:weaponid | The [reason](https://open.mp/docs/scripting/resources/weaponids) that caused the damage. |
| bodypart | The [body part](https://open.mp/docs/scripting/resources/bodyparts) that was hit |

## Returns

**1** - Callback will not be called in other filterscripts.

**0** - Allows this callback to be called in other filterscripts.

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

note

This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See [SetActorInvulnerable](https://open.mp/docs/scripting/functions/SetActorInvulnerable).

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnActorStreamOut](https://open.mp/docs/scripting/callbacks/OnActorStreamOut): This callback is called when an actor streams out by a player's client.
-   [OnActorStreamIn](https://open.mp/docs/scripting/callbacks/OnActorStreamIn): This callback is called when an actor streams in by a player's client.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [SetActorInvulnerable](https://open.mp/docs/scripting/functions/SetActorInvulnerable): Set actor invulnerable.
-   [SetActorHealth](https://open.mp/docs/scripting/functions/SetActorHealth): Set the health of an actor.
-   [GetActorHealth](https://open.mp/docs/scripting/functions/GetActorHealth): Gets the health of an actor.
-   [IsActorInvulnerable](https://open.mp/docs/scripting/functions/IsActorInvulnerable): Check if actor is invulnerable.
-   [IsValidActor](https://open.mp/docs/scripting/functions/IsValidActor): Check if actor id is valid.

## Related Resources

-   [Body Parts](https://open.mp/docs/scripting/resources/bodyparts)
