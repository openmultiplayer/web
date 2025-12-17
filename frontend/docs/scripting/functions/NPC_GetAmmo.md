---
title: NPC_GetAmmo
sidebar_label: NPC_GetAmmo
description: Gets the ammunition amount for an NPC's current weapon.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the ammunition amount for an NPC's current weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the amount of ammunition the NPC has for its current weapon.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = NPC_GetAmmo(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %d bullets remaining on total ammo", npcid, ammo);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the total ammunition count
- If the NPC has no weapon, this returns 0
- Infinite ammo NPCs still show the original ammo count

## Related Functions

- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammunition in current clip
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set ammunition in clip
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
