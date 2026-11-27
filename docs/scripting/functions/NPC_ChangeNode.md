---
title: "NPC_ChangeNode | open.mp"
description: "Changes the node an NPC is currently playing."
canonical: https://open.mp/docs/scripting/functions/NPC_ChangeNode
language: en
---

# NPC\_ChangeNode

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Changes the node an NPC is currently playing to a different node.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| nodeid | The ID of the new node to change to |
| linkid | The link ID to use for the transition |

## Returns

Returns the new point ID in the node.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcchangenode ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new idx = 15;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcchangenode [nodeid] [linkid]");

        new linkid = strval(cmdtext[idx]);

        NPC_ChangeNode(npcid, nodeid, linkid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d changed to node %d via link %d", npcid, nodeid, linkid);
        return 1;
    }
    return 0;
}
```

## Notes

-   The NPC must be currently playing a node before changing
-   The target node must be opened with `NPC_OpenNode` first
-   Link ID determines the transition path between nodes
-   Use this for creating complex navigation patterns

## Related Functions

-   [NPC\_PlayNode](https://open.mp/docs/scripting/functions/NPC_PlayNode): Start playing a node
-   [NPC\_StopPlayingNode](https://open.mp/docs/scripting/functions/NPC_StopPlayingNode): Stop playing current node
-   [NPC\_OpenNode](https://open.mp/docs/scripting/functions/NPC_OpenNode): Open a node for use
-   [NPC\_IsPlayingNode](https://open.mp/docs/scripting/functions/NPC_IsPlayingNode): Check if NPC is playing a node

## Related Callbacks

-   [OnNPCChangeNode](https://open.mp/docs/scripting/callbacks/OnNPCChangeNode): Called when NPC changes nodes
-   [OnNPCFinishNode](https://open.mp/docs/scripting/callbacks/OnNPCFinishNode): Called when NPC finishes a node
