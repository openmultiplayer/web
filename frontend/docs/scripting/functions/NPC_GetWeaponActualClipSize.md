---
title: NPC_GetWeaponActualClipSize
sidebar_label: NPC_GetWeaponActualClipSize
description: Gets the actual (default) clip size for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the actual (default) clip size for an NPC's weapon from the game data.

| Name     | Description            |
| -------- | ---------------------- |
| npcid    | The ID of the NPC      |
| weaponid | The weapon ID to check |

## Returns

Returns the default clip size, or -1 on error.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponactualclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponActualClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon actual clip size: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the original game clip size for the weapon
- This is different from custom clip sizes set with `NPC_SetWeaponClipSize`

## Related Functions

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): Set custom clip size
- [NPC_GetWeaponClipSize](NPC_GetWeaponClipSize): Get current clip size
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC's current ammo

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes
