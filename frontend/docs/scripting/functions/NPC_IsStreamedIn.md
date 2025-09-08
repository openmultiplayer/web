---
title: NPC_IsStreamedIn
sidebar_label: NPC_IsStreamedIn
description: Checks if an NPC is streamed in for a specific player.
tags: ["npc", "streaming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is streamed in for a specific player.

| Name        | Description                    |
| ----------- | ------------------------------ |
| npcid       | The ID of the NPC             |
| forplayerid | The ID of the player to check |

## Returns

Returns `true` if the NPC is streamed in for the player, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpc", true))
    {
        if (NPC_IsStreamedIn(0, playerid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is visible to you");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is not visible");
        }
        return 1;
    }
    return 0;
}

public OnPlayerConnect(playerid)
{
    // Check if NPC 0 is visible to the connecting player
    if (NPC_IsStreamedIn(0, playerid))
    {
        SendClientMessage(playerid, 0x00FFFFFF, "You can see NPC 0");
    }
    
    return 1;
}
```

## Notes

- NPCs are only streamed in when within the player's streaming distance
- Use this to check visibility before showing NPC-related information
- Streaming depends on distance and interior/virtual world matching

## Related Functions

- [NPC_IsAnyStreamedIn](NPC_IsAnyStreamedIn): Check if any player can see NPC
- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_GetStreamDistance](NPC_GetStreamDistance): Get streaming distance
- [NPC_SetStreamDistance](NPC_SetStreamDistance): Set streaming distance

## Related Callbacks

*No specific callbacks are triggered by this function.*
