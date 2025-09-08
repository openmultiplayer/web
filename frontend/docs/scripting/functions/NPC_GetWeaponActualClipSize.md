---
title: NPC_GetWeaponActualClipSize
sidebar_label: NPC_GetWeaponActualClipSize
description: Gets the actual (default) clip size for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the actual (default) clip size for an NPC's weapon from the game data.

| Name      | Description              |
| --------- | ------------------------ |
| npcid     | The ID of the NPC        |
| weaponid  | The weapon ID to check   |

## Returns

Returns the default clip size, or -1 on error.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    
    NPC_SetWeapon(npcid, WEAPON_AK47);
    
    new actualClipSize = NPC_GetWeaponActualClipSize(npcid, WEAPON_AK47);
    new customClipSize = NPC_GetWeaponClipSize(npcid, WEAPON_AK47);
    
    printf("NPC %d AK47 - Actual: %d, Custom: %d", npcid, actualClipSize, customClipSize);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/defaultclip", true))
    {
        new actualClip = NPC_GetWeaponActualClipSize(0, WEAPON_AK47);
        if (actualClip != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "AK47 default clip: %d ammo", actualClip);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the original game clip size for the weapon
- This is different from custom clip sizes set with `NPC_SetWeaponClipSize`
- Use this to compare against custom settings or reset to defaults

## Related Functions

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): Set custom clip size
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Get current clip size
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC's current ammo

## Related Callbacks

- [OnNPCWeaponStateChange](OnNPCWeaponStateChange): Called when weapon state changes