---
title: NPC_EnableReloading
sidebar_label: NPC_EnableReloading
description: Enables or disables automatic reloading for an NPC.
tags: ["npc", "weapon", "reload"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Enables or disables automatic reloading for an NPC.

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| npcid  | The ID of the NPC                              |
| enable | `true` to enable reloading, `false` to disable |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglereload", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You have no NPC.");

        new bool:reload = NPC_IsReloadEnabled(npcid);
        NPC_EnableReloading(npcid, !reload);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d reloading: %s", npcid, !reload ? "Enabled" : "Disabled");
        
        return 1;
    }
    return 0;
}
```

## Notes

- When enabled, the NPC will automatically reload when its clip is empty
- When disabled, the NPC will not reload and will eventually run out of ammo in clip
- The reload time can be customized with `NPC_SetWeaponReloadTime`

## Related Functions

- [NPC_IsReloadEnabled](NPC_IsReloadEnabled): Check if reloading is enabled
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is currently reloading
- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Set weapon reload time
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get weapon reload time

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when NPC weapon state changes
