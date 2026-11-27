---
title: "NPC_IsAnyStreamedIn | open.mp"
description: "Checks if an NPC is streamed in for any player."
canonical: https://open.mp/docs/scripting/functions/NPC_IsAnyStreamedIn
language: en
---

# NPC\_IsAnyStreamedIn

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is streamed in for any player on the server.

| Name | Description |
| --- | --- |
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

-   An NPC is streamed in when it's within a player's streaming range

## Related Functions

-   [NPC\_IsStreamedIn](https://open.mp/docs/scripting/functions/NPC_IsStreamedIn): Check if streamed in for specific player
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC position
-   [NPC\_SetVirtualWorld](https://open.mp/docs/scripting/functions/NPC_SetVirtualWorld): Set NPC virtual world
-   [NPC\_SetInterior](https://open.mp/docs/scripting/functions/NPC_SetInterior): Set NPC interior

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns
