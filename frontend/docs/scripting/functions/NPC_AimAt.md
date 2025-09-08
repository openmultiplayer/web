---
title: NPC_AimAt
sidebar_label: NPC_AimAt
description: Makes an NPC aim at a specific position.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC aim at a specific position.

| Name                 | Description                                      |
| -------------------- | ------------------------------------------------ |
| npcid                | The ID of the NPC                               |
| Float:pointX         | The X coordinate to aim at                      |
| Float:pointY         | The Y coordinate to aim at                      |
| Float:pointZ         | The Z coordinate to aim at                      |
| bool:shoot           | Whether to shoot while aiming                   |
| shootDelay           | Delay between shots in milliseconds             |
| bool:updateAngle     | Whether to update the NPC's facing angle       |
| Float:offsetFromX    | The X offset from the NPC's shooting position  |
| Float:offsetFromY    | The Y offset from the NPC's shooting position  |
| Float:offsetFromZ    | The Z offset from the NPC's shooting position  |
| checkInBetweenFlags  | Entity check flags for collision detection     |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER); // Sniper rifle
    NPC_SetAmmo(npcid, 100); // Give 100 ammo
    
    // Make NPC aim and shoot at a building
    NPC_AimAt(npcid, 1958.33, 1343.12, 15.36, true, 500, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcaim", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Make NPC aim at player position (without shooting)
        NPC_AimAt(0, x, y, z, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC is now aiming at your position");
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

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires a weapon
