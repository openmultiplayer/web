---
title: NPC_GetWeaponAccuracy
sidebar_label: NPC_GetWeaponAccuracy
description: Gets the accuracy setting for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the accuracy setting for an NPC's weapon.

| Name     | Description            |
| -------- | ---------------------- |
| npcid    | The ID of the NPC      |
| weaponid | The weapon ID to check |

## Returns

Returns the accuracy value (0.0 to 1.0), or -1.0 on error.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponaccuracy", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new Float:accuracy = NPC_GetWeaponAccuracy(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d accuracy: %.2f", npcid, weapon, accuracy);
        return 1;
    }
    return 0;
}
```

## Notes

- Accuracy is a value between 0.0 (0% accurate) and 1.0 (100% accurate)
- Returns -1.0 if the NPC ID is invalid or weapon doesn't exist

## Related Functions

- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Set weapon accuracy
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when an NPC shoots
- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes
