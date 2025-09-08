---
title: NPC_GetWeaponClipSize
sidebar_label: NPC_GetWeaponClipSize
description: Gets the clip size setting for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the clip size setting for an NPC's weapon.

| Name      | Description              |
| --------- | ------------------------ |
| npcid     | The ID of the NPC        |
| weaponid  | The weapon ID to check   |

## Returns

Returns the weapon's clip size, or -1 on error.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetWeaponClipSize(npcid, WEAPON_AK47, 50); // Extended clip
    
    new clipSize = NPC_GetWeaponClipSize(npcid, WEAPON_AK47);
    printf("NPC %d AK47 clip size: %d", npcid, clipSize);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkclip", true))
    {
        new clipSize = NPC_GetWeaponClipSize(0, WEAPON_AK47);
        if (clipSize != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 AK47 clip: %d ammo", clipSize);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the current custom clip size setting
- Different weapons have different default clip sizes
- Custom clip sizes can be larger than normal for extended magazines

## Related Functions

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): Set weapon clip size
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC's current ammo

## Related Callbacks

- [OnNPCWeaponStateChange](OnNPCWeaponStateChange): Called when weapon state changes