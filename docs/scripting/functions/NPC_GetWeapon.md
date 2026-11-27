---
title: "NPC_GetWeapon | open.mp"
description: "Gets the current weapon an NPC is holding."
canonical: https://open.mp/docs/scripting/functions/NPC_GetWeapon
language: en
---

# NPC\_GetWeapon

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the current weapon an NPC is holding.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the weapon ID that the NPC is currently holding.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkweapon", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new weapon = NPC_GetWeapon(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d weapon: %d", npcid, weapon);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns 0 if the NPC has no weapon (fists)
-   Weapon IDs are the same as player weapon IDs

## Related Functions

-   [NPC\_SetWeapon](https://open.mp/docs/scripting/functions/NPC_SetWeapon): Set NPC weapon
-   [NPC\_GetAmmo](https://open.mp/docs/scripting/functions/NPC_GetAmmo): Get NPC ammunition
-   [NPC\_SetAmmo](https://open.mp/docs/scripting/functions/NPC_SetAmmo): Set NPC ammunition

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
