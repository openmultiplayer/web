---
title: NPC_SetWeaponReloadTime
sidebar_label: NPC_SetWeaponReloadTime
description: Sets the reload time for an NPC's weapon.
tags: ["npc", "weapon", "reload", "time"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the reload time for a specific weapon of an NPC.

| Name     | Description                          |
| -------- | ------------------------------------ |
| npcid    | The ID of the NPC                    |
| weaponid | The weapon ID to set reload time for |
| time     | The reload time in milliseconds      |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponreloadtime ", true, 21))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = strval(cmdtext[21]);

        NPC_SetWeaponReloadTime(npcid, WEAPON:weapon, reloadtime);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d reload time set to %d ms", npcid, weapon, reloadtime);
        return 1;
    }
    return 0;
}
```

## Notes

- Reload time is measured in milliseconds
- Use NPC_GetWeaponReloadTime to check current reload time

## Related Functions

- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get reload time
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): Get actual reload time
- [NPC_IsReloading](NPC_IsReloading): Check if reloading
- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable reloading

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
