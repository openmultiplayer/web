---
title: NPC_IsReloadEnabled
sidebar_label: NPC_IsReloadEnabled
description: Checks if automatic reloading is enabled for an NPC.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Checks if automatic reloading is enabled for an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if auto-reload is enabled, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloadenabled", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isReloadEnabled = NPC_IsReloadEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d reload enabled: %s", npcid, isReloadEnabled ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Auto-reload makes NPCs automatically reload when their clip is empty
- NPCs without auto-reload will stop shooting when their clip runs out
- This only affects clip ammunition, not total ammunition
- Use `NPC_EnableReloading` to change the reload setting

## Related Functions

- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable auto-reload
- [NPC_IsReloading](NPC_IsReloading): Check if currently reloading
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get clip ammunition
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set clip ammunition

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires
