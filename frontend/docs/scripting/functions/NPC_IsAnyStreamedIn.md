---
title: NPC_IsAnyStreamedIn
sidebar_label: NPC_IsAnyStreamedIn
description: Checks if an NPC is streamed in for any player.
tags: ["npc", "streaming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is streamed in for any player on the server.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is streamed in for at least one player, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkanystreamedin", true))
    {
        new bool:anyStreamed = NPC_IsAnyStreamedIn(playerid);

        SendClientMessage(playerid, 0x00FF00FF, "Any NPCs streamed in for you: %s", anyStreamed ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- An NPC is streamed in when it's within a player's streaming range

## Related Functions

- [NPC_IsStreamedIn](NPC_IsStreamedIn): Check if streamed in for specific player
- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world
- [NPC_SetInterior](NPC_SetInterior): Set NPC interior

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
