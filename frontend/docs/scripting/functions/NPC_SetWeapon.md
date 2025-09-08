---
title: NPC_SetWeapon
sidebar_label: NPC_SetWeapon
description: Sets an NPC's current weapon.
tags: ["npc", "weapon", "combat"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's current weapon to a specific weapon ID.

| Name     | Description                    |
| -------- | ------------------------------ |
| npcid    | The ID of the NPC             |
| weaponid | The weapon ID to set           |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    
    // Set M4 as current weapon and give ammo
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 200);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/givegun", true))
    {
        // Give NPC a Desert Eagle
        NPC_SetWeapon(0, WEAPON_DEAGLE);
        NPC_SetAmmo(0, 50);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC equipped with Desert Eagle");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/disarm", true))
    {
        // Set NPC to fists
        NPC_SetWeapon(0, WEAPON_FIST);
        
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC disarmed");
        return 1;
    }
    return 0;
}
```

## Notes

- Setting a weapon will equip the NPC with that weapon
- Use NPC_SetAmmo to provide ammunition for the weapon
- Weapon ID 0 represents fists (unarmed)
- Use NPC_GetWeapon to check current weapon

## Related Functions

- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_SetAmmo](NPC_SetAmmo): Set ammunition for NPC's weapon
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC's current ammo count

## Related Callbacks

- [OnNPCWeaponChange](OnNPCWeaponChange): Called when weapon changes
- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC shoots
