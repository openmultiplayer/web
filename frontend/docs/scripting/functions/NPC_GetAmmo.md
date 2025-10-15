---
title: NPC_GetAmmo
sidebar_label: NPC_GetAmmo
description: Gets the ammunition amount for an NPC's current weapon.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the ammunition amount for an NPC's current weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the amount of ammunition the NPC has for its current weapon.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 150); // Give 150 ammo
    
    new ammo = NPC_GetAmmo(npcid);
    printf("NPC %d has %d ammo", npcid, ammo); // Output: 150
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkammo", true))
    {
        new ammo = NPC_GetAmmo(0);
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 ammo: %d", ammo);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the total ammunition count, not just the clip
- If the NPC has no weapon, this may return 0
- Infinite ammo NPCs may still show the original ammo count
- This includes ammunition in reserve, not just in the current clip

## Related Functions

- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammunition in current clip
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set ammunition in clip
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
