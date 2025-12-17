---
title: NPC_IsStreamedIn
sidebar_label: NPC_IsStreamedIn
description: Checks if an NPC is streamed in for a specific player.
tags: ["npc", "streaming"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Checks if an NPC is streamed in for a specific player.

| Name     | Description                   |
| -------- | ----------------------------- |
| npcid    | The ID of the NPC             |
| playerid | The ID of the player to check |

## Returns

Returns `true` if the NPC is streamed in for the player, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkstreamedin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isStreamedIn = NPC_IsStreamedIn(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is streamed in for you: %s", npcid, isStreamedIn ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- NPCs are only streamed in when within the player's streaming distance
- Streaming depends on distance and interior/virtual world matching

## Related Functions

- [NPC_IsAnyStreamedIn](NPC_IsAnyStreamedIn): Check if any player can see NPC
- [NPC_SetPos](NPC_SetPos): Set NPC position

## Related Callbacks

_No specific callbacks are triggered by this function._
