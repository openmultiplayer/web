---
title: NPC_SetWeaponState
sidebar_label: NPC_SetWeaponState
description: Sets the weapon state of an NPC.
tags: ["npc", "weapon", "state"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the weapon state of an NPC.

| Name        | Description               |
| ----------- | ------------------------- |
| npcid       | The ID of the NPC         |
| weaponState | The weapon state to set   |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setweaponstate ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weaponstate = strval(cmdtext[16]);

        static weaponStates[5][64] =
        {
            "Unknown",
            "No ammo remaining",
            "Single bullet left",
            "More than one bullet left",
            "Reloading"
        };

        NPC_SetWeaponState(npcid, WEAPONSTATE:weaponstate);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon state set to: %s (%d)", npcid, weaponStates[weaponstate], weaponstate);
        return 1;
    }
    return 0;
}
```

## Notes

- Weapon state controls the current action of the NPC's weapon
- Use [NPC_GetWeaponState](NPC_GetWeaponState) to retrieve the current state
- Changing weapon state affects NPC shooting behavior

## Related Functions

- [NPC_GetWeaponState](NPC_GetWeaponState): Get NPC weapon state
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC weapon
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading

## Related Resources

- [Weapon States](../resources/weaponstates)

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when NPC weapon state changes
- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
