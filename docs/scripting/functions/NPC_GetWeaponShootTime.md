---
title: "NPC_GetWeaponShootTime | open.mp"
description: "Gets the shoot time of an NPC's weapon."
canonical: https://open.mp/docs/scripting/functions/NPC_GetWeaponShootTime
language: en
---

# NPC\_GetWeaponShootTime

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the shoot time of an NPC's weapon.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| weaponid | The weapon ID to get shoot time for |

## Returns

Returns the shoot time in milliseconds for the specified weapon.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweaponshoottime", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);
        new shoottime = NPC_GetWeaponShootTime(npcid, WEAPON:weapon);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon %d shoot time: %d ms", npcid, weapon, shoottime);
        return 1;
    }
    return 0;
}
```

## Notes

-   Shoot time affects the delay between shots
-   Lower values mean faster firing rate
-   Different weapons have different default shoot times

## Related Functions

-   [NPC\_SetWeaponShootTime](https://open.mp/docs/scripting/functions/NPC_SetWeaponShootTime): Set shoot time
-   [NPC\_GetWeapon](https://open.mp/docs/scripting/functions/NPC_GetWeapon): Get NPC's current weapon
-   [NPC\_Shoot](https://open.mp/docs/scripting/functions/NPC_Shoot): Make NPC shoot
-   [NPC\_IsShooting](https://open.mp/docs/scripting/functions/NPC_IsShooting): Check if NPC is shooting

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
