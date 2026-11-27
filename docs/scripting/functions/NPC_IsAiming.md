---
title: "NPC_IsAiming | open.mp"
description: "Checks if an NPC is currently aiming."
canonical: https://open.mp/docs/scripting/functions/NPC_IsAiming
language: en
---

# NPC\_IsAiming

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently aiming.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is aiming, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isAiming = NPC_IsAiming(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming: %s", npcid, isAiming ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns true when the NPC is actively aiming at a target
-   Use this to check if an NPC is in combat mode
-   Aiming can be started with NPC\_AimAt or NPC\_AimAtPlayer
-   NPCs continue aiming until stopped with NPC\_StopAim

## Related Functions

-   [NPC\_AimAt](https://open.mp/docs/scripting/functions/NPC_AimAt): Make NPC aim at position
-   [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer): Make NPC aim at player
-   [NPC\_StopAim](https://open.mp/docs/scripting/functions/NPC_StopAim): Stop NPC from aiming
-   [NPC\_IsAimingAtPlayer](https://open.mp/docs/scripting/functions/NPC_IsAimingAtPlayer): Check if aiming at specific player

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
