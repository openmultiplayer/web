---
title: "NPC_StopAim | open.mp"
description: "Stops an NPC from aiming."
canonical: https://open.mp/docs/scripting/functions/NPC_StopAim
language: en
---

# NPC\_StopAim

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Stops an NPC from aiming at any target.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/friendly", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_StopAim(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stopped aiming.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

-   This stops both aiming and shooting if the NPC was doing both
-   The NPC will return to its normal stance after stopping aim
-   Has no effect if the NPC is not currently aiming

## Related Functions

-   [NPC\_AimAt](https://open.mp/docs/scripting/functions/NPC_AimAt): Make NPC aim at position
-   [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer): Make NPC aim at player
-   [NPC\_IsAiming](https://open.mp/docs/scripting/functions/NPC_IsAiming): Check if NPC is aiming
-   [NPC\_Shoot](https://open.mp/docs/scripting/functions/NPC_Shoot): Make NPC shoot

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
