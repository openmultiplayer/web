---
title: "OnNPCGiveDamage | open.mp"
description: "This callback is called when an NPC gives damage to a player."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCGiveDamage
language: en
---

# OnNPCGiveDamage

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC gives damage to a player.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that gave the damage |
| damagedid | The ID of the player that received the damage |
| Float:amount | The amount of damage that was given |
| WEAPON:weaponid | The weapon ID used to give the damage |
| bodypart | The [body part](https://open.mp/docs/scripting/resources/bodyparts) that was hit |

## Returns

1 - Callback will not be called in other filterscripts.

0 - Allows this callback to be called in other filterscripts.

It is always called first in filterscripts so returning 1 there blocks other filterscripts from processing it.

## Examples

```c
public OnNPCGiveDamage(npcid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    // Only notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFF8800FF, "NPC %d dealt %.1f damage to player %d (weapon: %d, bodypart: %d)",
                npcid, amount, damagedid, _:weaponid, bodypart);
        }
    }
    return 1;
}
```

## Notes

-   This callback is called before the damage is actually applied to the player
-   Returning `false` will NOT prevent the damage from being applied
-   The `bodypart` parameter uses the same values as `OnPlayerTakeDamage`

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_AimAt](https://open.mp/docs/scripting/functions/NPC_AimAt): Make NPC aim at a position
-   [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer): Make NPC aim at a player
-   [NPC\_Shoot](https://open.mp/docs/scripting/functions/NPC_Shoot): Make NPC shoot
-   [NPC\_SetWeapon](https://open.mp/docs/scripting/functions/NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when an NPC takes damage
-   [OnPlayerTakeDamage](https://open.mp/docs/scripting/callbacks/OnPlayerTakeDamage): Called when a player takes damage
-   [OnPlayerGiveDamage](https://open.mp/docs/scripting/callbacks/OnPlayerGiveDamage): Called when a player gives damage
