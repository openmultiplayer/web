---
title: NPC_AimAt
sidebar_label: NPC_AimAt
description: Makes an NPC aim at a specific position.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC aim at specified coordinates.

| Name                | Description                                   |
| ------------------- | --------------------------------------------- |
| npcid               | The ID of the NPC                             |
| Float:pointX        | The X coordinate to aim at                    |
| Float:pointY        | The Y coordinate to aim at                    |
| Float:pointZ        | The Z coordinate to aim at                    |
| bool:shoot          | Whether to shoot while aiming                 |
| shootDelay          | Delay between shots in milliseconds           |
| bool:updateAngle    | Whether to update the NPC's facing angle      |
| Float:offsetFromX   | The X offset from the NPC's shooting position |
| Float:offsetFromY   | The Y offset from the NPC's shooting position |
| Float:offsetFromZ   | The Z offset from the NPC's shooting position |
| checkInBetweenFlags | Entity check flags for collision detection    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/aim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_AimAt(npcid, x, y, z, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now aiming at your position.", npcid);
        return 1;
    }

    if (!strcmp(cmdtext, "/aimfire", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_AimAt(npcid, x, y, z, true, 800, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now firing at your position.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC will continuously aim at the specified position until `NPC_StopAim` is called
- If `shoot` is `true`, the NPC will fire at the target position with the specified delay
- The `updateAngle` parameter controls whether the NPC turns to face the target
- Offset parameters adjust the shooting origin point relative to the NPC's position

## Related Functions

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at a player
- [NPC_StopAim](NPC_StopAim): Stop NPC from aiming
- [NPC_IsAiming](NPC_IsAiming): Check if NPC is currently aiming
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
