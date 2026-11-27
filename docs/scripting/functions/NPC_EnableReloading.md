---
title: "NPC_EnableReloading | open.mp"
description: "Enables or disables automatic reloading for an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_EnableReloading
language: en
---

# NPC\_EnableReloading

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Enables or disables automatic reloading for an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
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
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new bool:reload = NPC_IsReloadEnabled(npcid);
        NPC_EnableReloading(npcid, !reload);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d reloading: %s", npcid, !reload ? "Enabled" : "Disabled");

        return 1;
    }
    return 0;
}
```

## Notes

-   When enabled, the NPC will automatically reload when its clip is empty
-   When disabled, the NPC will not reload and will eventually run out of ammo in clip
-   The reload time can be customized with `NPC_SetWeaponReloadTime`

## Related Functions

-   [NPC\_IsReloadEnabled](https://open.mp/docs/scripting/functions/NPC_IsReloadEnabled): Check if reloading is enabled
-   [NPC\_IsReloading](https://open.mp/docs/scripting/functions/NPC_IsReloading): Check if NPC is currently reloading
-   [NPC\_SetWeaponReloadTime](https://open.mp/docs/scripting/functions/NPC_SetWeaponReloadTime): Set weapon reload time
-   [NPC\_GetWeaponReloadTime](https://open.mp/docs/scripting/functions/NPC_GetWeaponReloadTime): Get weapon reload time

## Related Callbacks

-   [OnNPCWeaponStateChange](https://open.mp/docs/scripting/callbacks/OnNPCWeaponStateChange): Called when NPC weapon state changes
