---
title: NPC_SetAmmo
sidebar_label: NPC_SetAmmo
description: Sets the ammunition count for an NPC's current weapon.
tags: ["npc", "weapon", "ammo", "ammunition"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the ammunition count for an NPC's current weapon.

| Name  | Description                          |
| ----- | ------------------------------------ |
| npcid | The ID of the NPC                    |
| ammo  | The amount of ammunition to set      |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, 31); // M4
    
    // Set M4 ammo to 200 rounds
    NPC_SetAmmo(npcid, 200);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/giveammo", true))
    {
        new npcid = NPC_Create("Gunner");
        NPC_Spawn(npcid);
        NPC_SetWeapon(npcid, 24);
        
        // Give Desert Eagle 50 rounds
        NPC_SetAmmo(npcid, 50);
        
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC armed with ammo");
        return 1;
    }
    return 0;
}
```

## Notes

- Setting ammo to 0 makes the weapon unusable
- Different weapons have different maximum ammo capacities
- This sets total ammunition, not just the current clip
- Use with `NPC_SetAmmoInClip` for precise control

## Related Functions

- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set ammunition in current clip
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammunition in current clip
- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): Enable infinite ammunition