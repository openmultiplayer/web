---
title: NPC_ChangeNode
sidebar_label: NPC_ChangeNode
description: Changes the node an NPC is currently playing.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Changes the node an NPC is currently playing to a different node.

| Name   | Description                           |
| ------ | ------------------------------------- |
| npcid  | The ID of the NPC                     |
| nodeid | The ID of the new node to change to   |
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

- The NPC must be currently playing a node before changing
- The target node must be opened with `NPC_OpenNode` first
- Link ID determines the transition path between nodes
- Use this for creating complex navigation patterns

## Related Functions

- [NPC_PlayNode](NPC_PlayNode): Start playing a node
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing current node
- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if NPC is playing a node

## Related Callbacks

- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): Called when NPC changes nodes
- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
