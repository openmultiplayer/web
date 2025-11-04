---
title: NPC_GetWeaponShootTime
sidebar_label: NPC_GetWeaponShootTime
description: Gets the shoot time of an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the shoot time of an NPC's weapon.

| Name     | Description                         |
| -------- | ----------------------------------- |
| npcid    | The ID of the NPC                   |
| weaponid | The weapon ID to get shoot time for |

## Returns

Returns the shoot time in milliseconds for the specified weapon.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponshoottime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = NPC_GetWeaponShootTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d shoot time: %d ms", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```

## Notes

- Shoot time affects the delay between shots
- Lower values mean faster firing rate
- Different weapons have different default shoot times

## Related Functions

- [NPC_SetWeaponShootTime](NPC_SetWeaponShootTime): Set shoot time
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_IsShooting](NPC_IsShooting): Check if NPC is shooting

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
