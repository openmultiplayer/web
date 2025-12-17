---
title: NPC_IsInfiniteAmmoEnabled
sidebar_label: NPC_IsInfiniteAmmoEnabled
description: Checks if infinite ammo is enabled for an NPC.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if infinite ammo is enabled for an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if infinite ammo is enabled, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:infiniteAmmo = NPC_IsInfiniteAmmoEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d infinite ammo enabled: %s", npcid, infiniteAmmo ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Infinite ammo prevents the NPC from running out of ammunition
- The ammo count may still display as decreasing but weapon functionality remains
- Can be toggled with NPC_EnableInfiniteAmmo

## Related Functions

- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): Enable/disable infinite ammo
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
