---
title: NPC_SetWeaponAccuracy
sidebar_label: NPC_SetWeaponAccuracy
description: Sets the accuracy of a specific weapon for an NPC.
tags: ["npc", "weapon", "accuracy"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the accuracy of a specific weapon for an NPC.

| Name     | Description                           |
| -------- | ------------------------------------- |
| npcid    | The ID of the NPC                     |
| weaponid | The weapon ID to set accuracy for     |
| accuracy | The accuracy value (0.0 to 1.0)      |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, 34);
    
    // Set sniper rifle accuracy to 95%
    NPC_SetWeaponAccuracy(npcid, 34, 0.95);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setaccuracy", true))
    {
        new npcid = NPC_Create("Marksman");
        NPC_Spawn(npcid);
        NPC_SetWeapon(npcid, 24);
        
        // Set Desert Eagle accuracy to 80%
        NPC_SetWeaponAccuracy(npcid, 24, 0.8);
        
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC weapon accuracy set");
        return 1;
    }
    return 0;
}
```

## Notes

- Accuracy value ranges from 0.0 (never hits) to 1.0 (always hits)
- Default accuracy varies by weapon type
- Higher accuracy makes NPCs more dangerous in combat
- Accuracy affects bullet spread and hit probability

## Related Functions

- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Get weapon accuracy
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_Shoot](NPC_Shoot): Make NPC shoot