---
title: NPC_EnableInfiniteAmmo
sidebar_label: NPC_EnableInfiniteAmmo
description: Enables or disables infinite ammo for an NPC.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Enables or disables infinite ammo for an NPC.

| Name   | Description                                        |
| ------ | -------------------------------------------------- |
| npcid  | The ID of the NPC                                  |
| enable | `true` to enable infinite ammo, `false` to disable |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/toggleinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new bool:infinite = NPC_IsInfiniteAmmoEnabled(npcid);
        NPC_EnableInfiniteAmmo(npcid, !infinite);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d infinite ammo: %s", npcid, !infinite ? "Enabled" : "Disabled");

        return 1;
    }
    return 0;
}
```

## Notes

- When enabled, the NPC will never run out of ammunition
- This affects all weapons the NPC uses
- The ammo count display may still decrease but weapon functionality remains

## Related Functions

- [NPC_IsInfiniteAmmoEnabled](NPC_IsInfiniteAmmoEnabled): Check if infinite ammo is enabled
- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
