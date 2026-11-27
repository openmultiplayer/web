---
title: "NPC_IsReloading | open.mp"
description: "Checks if an NPC is currently reloading their weapon."
canonical: https://open.mp/docs/scripting/functions/NPC_IsReloading
language: en
---

# NPC\_IsReloading

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently reloading their weapon.

| Name | Description |
| --- | --- |
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

-   Returns true only during the actual reload animation
-   Reloading is automatic when ammo in clip runs out
-   Use NPC\_EnableReloading to control reload behavior

## Related Functions

-   [NPC\_EnableReloading](https://open.mp/docs/scripting/functions/NPC_EnableReloading): Enable/disable reloading
-   [NPC\_GetAmmoInClip](https://open.mp/docs/scripting/functions/NPC_GetAmmoInClip): Get ammo in clip
-   [NPC\_GetWeaponReloadTime](https://open.mp/docs/scripting/functions/NPC_GetWeaponReloadTime): Get reload time

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC shoots
