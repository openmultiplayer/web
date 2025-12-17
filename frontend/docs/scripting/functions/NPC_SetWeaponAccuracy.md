---
title: NPC_SetWeaponAccuracy
sidebar_label: NPC_SetWeaponAccuracy
description: Sets the accuracy of a specific weapon for an NPC.
tags: ["npc", "weapon", "accuracy"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the accuracy of a specific weapon for an NPC.

| Name     | Description                       |
| -------- | --------------------------------- |
| npcid    | The ID of the NPC                 |
| weaponid | The weapon ID to set accuracy for |
| accuracy | The accuracy value (0.0 to 1.0)   |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponaccuracy ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new Float:accuracy = floatstr(cmdtext[19]);

        NPC_SetWeaponAccuracy(npcid, WEAPON:weapon, accuracy);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d accuracy set to %.2f", npcid, weapon, accuracy);
        return 1;
    }
    return 0;
}
```

## Notes

- Accuracy value ranges from 0.0 (never hits) to 1.0 (always hits)
- Default accuracy varies by weapon type
- Accuracy affects bullet spread and hit probability

## Related Functions

- [NPC_GetWeaponAccuracy](NPC_GetWeaponAccuracy): Get weapon accuracy
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_Shoot](NPC_Shoot): Make NPC shoot

## Related Callbacks

_No specific callbacks are triggered by this function._
