---
title: NPC_GetWeaponState
sidebar_label: NPC_GetWeaponState
description: Gets the weapon state of an NPC.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the weapon state of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the weapon state ID.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weaponstate = NPC_GetWeaponState(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon state: %d", npcid, weaponstate);
        return 1;
    }
    return 0;
}
```

## Notes

- Weapon states include reloading, shooting, out of ammo, etc.
- Use this to check the current status of the NPC's weapon
- State values correspond to PlayerWeaponState constants

## Related Functions

- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading
- [NPC_IsShooting](NPC_IsShooting): Check if NPC is shooting
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammo in clip

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes
