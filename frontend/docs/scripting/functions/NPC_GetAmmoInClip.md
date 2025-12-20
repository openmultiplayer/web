---
title: NPC_GetAmmoInClip
sidebar_label: NPC_GetAmmoInClip
description: Gets the ammunition in the current clip of an NPC's weapon.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the ammunition in the current clip of an NPC's weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the amount of ammunition in the NPC's current weapon clip.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkclip", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new clip = NPC_GetAmmoInClip(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %d bullets remaining on the clip", npcid, clip);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the amount of ammunition currently loaded in the weapon's magazine (clip), unlike [NPC_GetAmmo](NPC_GetAmmo), which returns the total ammo the NPC holds.
- Clip size varies depending on the weapon type.

## Related Functions

- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set ammunition in clip
- [NPC_GetAmmo](NPC_GetAmmo): Get total ammunition
- [NPC_SetAmmo](NPC_SetAmmo): Set total ammunition
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
