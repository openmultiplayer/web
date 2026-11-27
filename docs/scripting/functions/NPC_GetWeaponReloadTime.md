---
title: "NPC_GetWeaponReloadTime | open.mp"
description: "Gets the reload time of an NPC's weapon."
canonical: https://open.mp/docs/scripting/functions/NPC_GetWeaponReloadTime
language: en
---

# NPC\_GetWeaponReloadTime

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the reload time of an NPC's weapon.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| weaponid | The weapon ID to get reload time for |

## Returns

Returns the reload time in milliseconds for the specified weapon.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponreloadtime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new reloadtime = NPC_GetWeaponReloadTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon reload time: %d ms", npcid, reloadtime);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns the current custom reload time setting
-   Use NPC\_GetWeaponActualReloadTime to get the default game reload time
-   Reload time affects how long the NPC takes to reload the weapon

## Related Functions

-   [NPC\_SetWeaponReloadTime](https://open.mp/docs/scripting/functions/NPC_SetWeaponReloadTime): Set reload time
-   [NPC\_GetWeaponActualReloadTime](https://open.mp/docs/scripting/functions/NPC_GetWeaponActualReloadTime): Get default reload time
-   [NPC\_IsReloading](https://open.mp/docs/scripting/functions/NPC_IsReloading): Check if NPC is reloading
-   [NPC\_EnableReloading](https://open.mp/docs/scripting/functions/NPC_EnableReloading): Enable/disable reloading

## Related Callbacks

-   [OnNPCWeaponStateChange](https://open.mp/docs/scripting/callbacks/OnNPCWeaponStateChange): Called when weapon state changes
