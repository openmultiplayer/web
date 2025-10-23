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
public OnGameModeInit()
{
    new npcid = NPC_Create("RapidFire");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 500);

    // Set rapid fire
    NPC_SetWeaponShootTime(npcid, WEAPON_M4, 100);

    // Check the shoot time
    new shootTime = NPC_GetWeaponShootTime(npcid, WEAPON_M4);
    printf("NPC %d M4 shoot time set to: %dms", npcid, shootTime);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfirerate", true))
    {
        new weapon = NPC_GetWeapon(0);
        if (weapon > 0)
        {
            new shootTime = NPC_GetWeaponShootTime(0, weapon);

            new fireRate[32];
            if (shootTime <= 100)
                fireRate = "Very Fast";
            else if (shootTime <= 500)
                fireRate = "Fast";
            else if (shootTime <= 1000)
                fireRate = "Normal";
            else
                fireRate = "Slow";

            new msg[128];
            format(msg, sizeof(msg), "NPC 0 weapon %d: %dms shoot time (%s)",
                weapon, shootTime, fireRate);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 has no weapon");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Shoot time affects the delay between shots
- Lower values mean faster firing rate
- Different weapons have different default shoot times
- Custom shoot times can create unique firing patterns

## Related Functions

- [NPC_SetWeaponShootTime](NPC_SetWeaponShootTime): Set shoot time
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_IsShooting](NPC_IsShooting): Check if NPC is shooting

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
