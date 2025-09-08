---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: This callback is called when an NPC spawns.
tags: ["npc"]
---

## Description

This callback is called when an NPC spawns.

| Name  | Description                    |
| ----- | ------------------------------ |
| npcid | The ID of the NPC that spawned |

## Examples

```c
public OnNPCSpawn(npcid)
{
    printf("NPC %d spawned", npcid);
    
    // Set initial properties
    NPC_SetHealth(npcid, 100.0);
    NPC_SetArmour(npcid, 0.0);
    NPC_SetWeapon(npcid, WEAPON_COLT45);
    
    return true;
}
```

## Notes

- This callback is called when `NPC_Spawn` is successfully executed
- The NPC becomes visible and interactive in the game world
- You can set initial NPC properties and behaviors in this callback
- The NPC's stats are automatically set to default values (100 health, 0 armor, fists weapon)

## Related Functions

- [NPC_Spawn](NPC_Spawn): Spawn an NPC in the game world
- [NPC_Respawn](NPC_Respawn): Respawn a dead NPC
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

- [OnNPCCreate](OnNPCCreate): Called when an NPC is created
- [OnNPCRespawn](OnNPCRespawn): Called when an NPC respawns
- [OnNPCDeath](OnNPCDeath): Called when an NPC dies
- [OnPlayerSpawn](OnPlayerSpawn): Called when a player spawns
