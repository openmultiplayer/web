---
title: NPC_GetWeapon
sidebar_label: NPC_GetWeapon
description: Gets the current weapon an NPC is holding.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the current weapon an NPC is holding.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the weapon ID that the NPC is currently holding.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweapon", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon: %d", npcid, weapon);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns 0 if the NPC has no weapon (fists)
- Weapon IDs are the same as player weapon IDs

## Related Functions

- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_RemoveWeapon](NPC_RemoveWeapon): Remove NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
