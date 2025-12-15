---
title: NPC_SetAngleToPlayer
sidebar_label: NPC_SetAngleToPlayer
description: Rotates an NPC to face a specific player.
tags: ["npc", "angle", "player"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Rotates an NPC to face a specific player by using the player's current position.

| Name     | Description |
| -------- | ----------- |
| npcid    | The ID of the NPC. |
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

:::warning

- This function performs a single rotation; call it again to keep the NPC facing a moving player.
- The player must be connected, otherwise the NPC will not rotate.
- Internally uses [NPC_SetAngleToPos](NPC_SetAngleToPos) with the player's current position.

:::

## Related Functions

- [NPC_SetAngleToPos](NPC_SetAngleToPos): Face a specific position.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set a numeric angle.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get the NPC's facing angle.
- [NPC_MoveToPlayer](NPC_MoveToPlayer): Move the NPC toward a player.
