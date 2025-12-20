---
title: NPC_SetWeapon
sidebar_label: NPC_SetWeapon
description: Sets an NPC's current weapon.
tags: ["npc", "weapon", "combat"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets an NPC's current weapon to a specific weapon ID.

| Name   | Description          |
| ------ | -------------------- |
| npcid  | The ID of the NPC    |
| weapon | The weapon ID to set |

## Returns

Returns `true` if the weapon was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweapon ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weaponid = strval(cmdtext[11]);
        if (weaponid < 0 || weaponid > 46)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid weapon ID. Must be between 0 and 46.");

        NPC_SetWeapon(npcid, WEAPON:weaponid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon set to %d", npcid, weaponid);

        return 1;
    }
    return 0;
}
```

## Notes

- Setting a weapon will equip the NPC with that weapon
- Use NPC_SetAmmo to provide ammunition for the weapon
- Use NPC_GetWeapon to check current weapon

## Related Functions

- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_SetAmmo](NPC_SetAmmo): Set ammunition for NPC's weapon
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC's current ammo count

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
