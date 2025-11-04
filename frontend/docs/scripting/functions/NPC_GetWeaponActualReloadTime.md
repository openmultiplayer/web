---
title: NPC_GetWeaponActualReloadTime
sidebar_label: NPC_GetWeaponActualReloadTime
description: Gets the actual (default) reload time for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the actual (default) reload time for an NPC's weapon from the game data.

| Name     | Description            |
| -------- | ---------------------- |
| npcid    | The ID of the NPC      |
| weaponid | The weapon ID to check |

## Returns

Returns the default reload time in milliseconds, or -1 on error.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponactualreloadtime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = NPC_GetWeaponActualReloadTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon actual reload time: %d ms", npcid, reloadtime);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the original game reload time for the weapon
- This is different from custom reload times set with `NPC_SetWeaponReloadTime`

## Related Functions

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Set custom reload time
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get current reload time
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes
