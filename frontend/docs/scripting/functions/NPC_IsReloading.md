---
title: NPC_IsReloading
sidebar_label: NPC_IsReloading
description: Checks if an NPC is currently reloading their weapon.
tags: ["npc", "weapon", "reloading"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently reloading their weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is reloading, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloading", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isReloading = NPC_IsReloading(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is reloading: %s", npcid, isReloading ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true only during the actual reload animation
- Reloading is automatic when ammo in clip runs out
- Use NPC_EnableReloading to control reload behavior

## Related Functions

- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable reloading
- [NPC_Reload](NPC_Reload): Force NPC to reload
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammo in clip
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get reload time

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
