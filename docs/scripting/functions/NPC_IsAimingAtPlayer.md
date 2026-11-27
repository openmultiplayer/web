---
title: "NPC_IsAimingAtPlayer | open.mp"
description: "Checks if an NPC is aiming at a specific player."
canonical: https://open.mp/docs/scripting/functions/NPC_IsAimingAtPlayer
language: en
---

# NPC\_IsAimingAtPlayer

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is aiming at a specific player.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| playerid | The ID of the player to check |

## Returns

Returns `true` if the NPC is aiming at the specified player, `false` otherwise.

## Examples

```c

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaimingat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isAimingAtPlayer = NPC_IsAimingAtPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming at you: %s", npcid, isAimingAtPlayer ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns true only when the NPC is specifically targeting the given player
-   Use this to check if a player is being targeted by an NPC
-   The NPC must be using NPC\_AimAtPlayer for this to return true

## Related Functions

-   [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer): Make NPC aim at player
-   [NPC\_IsAiming](https://open.mp/docs/scripting/functions/NPC_IsAiming): Check if NPC is aiming
-   [NPC\_StopAim](https://open.mp/docs/scripting/functions/NPC_StopAim): Stop NPC from aiming
-   [NPC\_AimAt](https://open.mp/docs/scripting/functions/NPC_AimAt): Make NPC aim at position

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
