---
title: "NPC_SetAngleToPlayer | open.mp"
description: "Rotates an NPC to face a specific player."
canonical: https://open.mp/docs/scripting/functions/NPC_SetAngleToPlayer
language: en
---

# NPC\_SetAngleToPlayer

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Rotates an NPC to face a specific player by using the player's current position.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
| playerid | The ID of the player that the NPC should face. |

## Returns

Returns `true` if the NPC was rotated successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lookatme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (!IsPlayerConnected(playerid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid player.");

        NPC_SetAngleToPlayer(npcid, playerid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now facing you.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   This function performs a single rotation; call it again to keep the NPC facing a moving player.
-   The player must be connected, otherwise the NPC will not rotate.
-   Internally uses [NPC\_SetAngleToPos](https://open.mp/docs/scripting/functions/NPC_SetAngleToPos) with the player's current position.

## Related Functions

-   [NPC\_SetAngleToPos](https://open.mp/docs/scripting/functions/NPC_SetAngleToPos): Face a specific position.
-   [NPC\_SetFacingAngle](https://open.mp/docs/scripting/functions/NPC_SetFacingAngle): Set a numeric angle.
-   [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle): Get the NPC's facing angle.
-   [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer): Move the NPC toward a player.
