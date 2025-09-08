---
title: NPC_GetWeaponAccuracy
sidebar_label: NPC_GetWeaponAccuracy
description: Gets the accuracy setting for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the accuracy setting for an NPC's weapon.

| Name      | Description              |
| --------- | ------------------------ |
| npcid     | The ID of the NPC        |
| weaponid  | The weapon ID to check   |

## Returns

Returns the accuracy value (0.0 to 1.0), or -1.0 on error.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    
    NPC_SetWeapon(npcid, WEAPON_SNIPER);
    NPC_SetWeaponAccuracy(npcid, WEAPON_SNIPER, 0.95);
    
    new Float:accuracy = NPC_GetWeaponAccuracy(npcid, WEAPON_SNIPER);
    printf("NPC %d sniper accuracy: %.2f", npcid, accuracy);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaccuracy", true))
    {
        new Float:accuracy = NPC_GetWeaponAccuracy(0, WEAPON_SNIPER);
        if (accuracy >= 0.0)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 sniper accuracy: %.2f", accuracy);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to get accuracy");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Accuracy is a value between 0.0 (0% accurate) and 1.0 (100% accurate)
- Returns -1.0 if the NPC ID is invalid or weapon doesn't exist
- Default accuracy varies by weapon type

## Related Functions

- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

- [OnNPCShoot](OnNPCShoot): Called when NPC shoots
- [OnNPCWeaponStateChange](OnNPCWeaponStateChange): Called when weapon state changes