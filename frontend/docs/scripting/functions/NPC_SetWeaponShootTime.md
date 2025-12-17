---
title: NPC_SetWeaponShootTime
sidebar_label: NPC_SetWeaponShootTime
description: Sets the shooting interval for an NPC's weapon.
tags: ["npc", "weapon", "shooting", "time"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the shooting interval for a specific weapon of an NPC.

| Name     | Description                           |
| -------- | ------------------------------------- |
| npcid    | The ID of the NPC                     |
| weaponid | The weapon ID to set shoot time for   |
| time     | The shooting interval in milliseconds |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponshoottime ", true, 20))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = strval(cmdtext[20]);

        NPC_SetWeaponShootTime(npcid, WEAPON:weapon, shoottime);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d shoot time set to %d ms", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```

## Notes

- Shoot time is measured in milliseconds between shots
- Use NPC_GetWeaponShootTime to check current shoot time

## Related Functions

- [NPC_GetWeaponShootTime](NPC_GetWeaponShootTime): Get shoot time
- [NPC_IsShooting](NPC_IsShooting): Check if shooting
- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_GetWeapon](NPC_GetWeapon): Get current weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages someone
