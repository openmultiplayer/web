---
title: "NPC_SetWeaponState | open.mp"
description: "Sets the weapon state of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_SetWeaponState
language: en
---

# NPC\_SetWeaponState

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the weapon state of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| weaponState | The weapon state to set |

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

-   Weapon state controls the current action of the NPC's weapon
-   Use [NPC\_GetWeaponState](https://open.mp/docs/scripting/functions/NPC_GetWeaponState) to retrieve the current state
-   Changing weapon state affects NPC shooting behavior

## Related Functions

-   [NPC\_GetWeaponState](https://open.mp/docs/scripting/functions/NPC_GetWeaponState): Get NPC weapon state
-   [NPC\_SetWeapon](https://open.mp/docs/scripting/functions/NPC_SetWeapon): Set NPC weapon
-   [NPC\_GetWeapon](https://open.mp/docs/scripting/functions/NPC_GetWeapon): Get NPC weapon
-   [NPC\_IsReloading](https://open.mp/docs/scripting/functions/NPC_IsReloading): Check if NPC is reloading

## Related Resources

-   [Weapon States](https://open.mp/docs/scripting/resources/weaponstates)

## Related Callbacks

-   [OnNPCWeaponStateChange](https://open.mp/docs/scripting/callbacks/OnNPCWeaponStateChange): Called when NPC weapon state changes
-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
