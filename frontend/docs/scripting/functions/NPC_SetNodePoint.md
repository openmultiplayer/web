---
title: NPC_SetNodePoint
sidebar_label: NPC_SetNodePoint
description: Sets a point in an NPC node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the current point index for an NPC node.

| Name    | Description                 |
| ------- | --------------------------- |
| nodeid  | The ID of the node          |
| pointid | The point index in the node |

## Returns

Returns `true` if the point was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcsetnodepoint ", true, 17))
    {
        new nodeid = strval(cmdtext[17]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new idx = 17;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcsetnodepoint [nodeid] [pointid]");

        new pointid = strval(cmdtext[idx]);

        new bool:success = NPC_SetNodePoint(nodeid, pointid);

        SendClientMessage(playerid, 0x00FF00FF, "Set node %d to point %d: %s", nodeid, pointid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

- Node must be opened before setting points
- Point indices typically start from 0
- Use NPC_GetNodePointPosition to retrieve point coordinates

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open node for editing
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Get point coordinates
- [NPC_GetNodePointCount](NPC_GetNodePointCount): Get point count
- [NPC_UpdateNodePoint](NPC_UpdateNodePoint): Update existing point

## Related Callbacks

_No specific callbacks are triggered by this function._
