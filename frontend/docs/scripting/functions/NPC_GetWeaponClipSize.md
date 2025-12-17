---
title: NPC_GetWeaponClipSize
sidebar_label: NPC_GetWeaponClipSize
description: Gets the clip size setting for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the clip size setting for an NPC's weapon.

| Name     | Description            |
| -------- | ---------------------- |
| npcid    | The ID of the NPC      |
| weaponid | The weapon ID to check |

## Returns

Returns the weapon's clip size, or -1 on error.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponclipsize", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new clipsize = NPC_GetWeaponClipSize(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon clip size: %d", npcid, clipsize);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the current custom clip size setting
- Different weapons have different default clip sizes

## Related Functions

- [NPC_SetWeaponClipSize](NPC_SetWeaponClipSize): Set weapon clip size
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC's current ammo

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes
