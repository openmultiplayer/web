---
title: NPC_SetAmmo
sidebar_label: NPC_SetAmmo
description: Sets the ammunition count for an NPC's current weapon.
tags: ["npc", "weapon", "ammo", "ammunition"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the ammunition count for an NPC's current weapon.

| Name  | Description                     |
| ----- | ------------------------------- |
| npcid | The ID of the NPC               |
| ammo  | The amount of ammunition to set |

## Returns

Returns `true` if the ammo was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setammo ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new ammo = strval(cmdtext[9]);
        if (ammo < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "Ammo must be positive.");

        NPC_SetAmmo(npcid, ammo);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d ammo set to %d", npcid, ammo);

        return 1;
    }
    return 0;
}
```

## Notes

- Setting ammo to 0 makes the weapon unusable
- Different weapons have different maximum ammo capacities
- This sets total ammunition, not just the current clip

## Related Functions

- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set ammunition in current clip
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammunition in current clip
- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): Enable infinite ammunition

## Related Callbacks

_No specific callbacks are triggered by this function._
