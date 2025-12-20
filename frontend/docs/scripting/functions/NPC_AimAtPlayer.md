---
title: NPC_AimAtPlayer
sidebar_label: NPC_AimAtPlayer
description: Makes an NPC aim at a player.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Makes an NPC aim at a player.

| Name                | Description                                   |
| ------------------- | --------------------------------------------- |
| npcid               | The ID of the NPC                             |
| playerid            | The ID of the player to aim at                |
| shoot               | Whether to shoot while aiming                 |
| shootDelay          | Delay between shots in milliseconds           |
| updateAngle         | Whether to update the NPC's facing angle      |
| offsetX             | The X offset from the target's position       |
| offsetY             | The Y offset from the target's position       |
| offsetZ             | The Z offset from the target's position       |
| offsetFromX         | The X offset from the NPC's shooting position |
| offsetFromY         | The Y offset from the NPC's shooting position |
| offsetFromZ         | The Z offset from the NPC's shooting position |
| checkInBetweenFlags | Entity check flags for collision detection    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{  
    if (!strcmp(cmdtext, "/hostile", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_AimAtPlayer(npcid, playerid, true, 800, true, 0.0, 0.0, 0.8, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0xFF0000FF, "NPC %d is now hostile towards you!", npcid);
        return 1;
    }

    if (!strcmp(cmdtext, "/guard", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_AimAtPlayer(npcid, playerid, false, 0, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now guarding you.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC will continuously track the player's movement while aiming
- If the target player disconnects or becomes invalid, the NPC will stop aiming/shooting
- Target offset parameters allow aiming at specific body parts (head, torso, etc.)
- The NPC automatically updates its aim as the player moves
- Use `NPC_IsAimingAtPlayer` to check if NPC is aiming at a specific player

## Related Functions

- [NPC_AimAt](NPC_AimAt): Make NPC aim at a position
- [NPC_StopAim](NPC_StopAim): Stop NPC from aiming
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): Check if NPC is aiming at a player
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages a player
