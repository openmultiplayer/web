---
title: "NPC_GetPlayerAimingAt | open.mp"
description: "Gets the ID of the player that an NPC is currently aiming at."
canonical: https://open.mp/docs/scripting/functions/NPC_GetPlayerAimingAt
language: en
---

# NPC\_GetPlayerAimingAt

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the ID of the player that an NPC is currently aiming at.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the ID of the player being aimed at, or `INVALID_PLAYER_ID` if not aiming at anyone.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new targetid = NPC_GetPlayerAimingAt(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is not aiming at any player", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming at player %s (ID %d)", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns the player ID if the NPC is aiming using [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer)
-   Returns `INVALID_PLAYER_ID` if the NPC is not aiming at any player

## Related Functions

-   [NPC\_AimAtPlayer](https://open.mp/docs/scripting/functions/NPC_AimAtPlayer): Make NPC aim at a player
-   [NPC\_IsAimingAtPlayer](https://open.mp/docs/scripting/functions/NPC_IsAimingAtPlayer): Check if NPC is aiming at specific player
-   [NPC\_IsAiming](https://open.mp/docs/scripting/functions/NPC_IsAiming): Check if NPC is aiming
-   [NPC\_GetPlayerMovingTo](https://open.mp/docs/scripting/functions/NPC_GetPlayerMovingTo): Get player NPC is moving toward

## Related Callbacks

-   [OnNPCWeaponShot](https://open.mp/docs/scripting/callbacks/OnNPCWeaponShot): Called when NPC fires weapon
-   [OnNPCGiveDamage](https://open.mp/docs/scripting/callbacks/OnNPCGiveDamage): Called when NPC damages a player
