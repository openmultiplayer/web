---
title: "NPC_IsShooting | open.mp"
description: "Checks if an NPC is currently shooting."
canonical: https://open.mp/docs/scripting/functions/NPC_IsShooting
language: en
---

# NPC\_IsShooting

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently shooting their weapon.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is shooting, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshooting", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isShooting = NPC_IsShooting(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is shooting: %s", npcid, isShooting ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns true only during the actual shooting action
-   NPCs must have a weapon and ammo to shoot

## Related Functions

-   [NPC\_Shoot](https://open.mp/docs/scripting/functions/NPC_Shoot): Make NPC shoot
-   [NPC\_AimAt](https://open.mp/docs/scripting/functions/NPC_AimAt): Make NPC aim and shoot
-   [NPC\_StopAim](https://open.mp/docs/scripting/functions/NPC_StopAim): Stop NPC aiming
-   [NPC\_IsAiming](https://open.mp/docs/scripting/functions/NPC_IsAiming): Check if aiming

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC shoots
-   [OnNPCGiveDamage](https://open.mp/docs/scripting/callbacks/OnNPCGiveDamage): Called when NPC damages player
