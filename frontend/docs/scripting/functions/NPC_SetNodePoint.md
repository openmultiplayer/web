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
new g_PatrolNode = -1;

public OnGameModeInit()
{
    // Open node for patrol route
    g_PatrolNode = NPC_OpenNode(1);

    if (g_PatrolNode != -1)
    {
        // Create patrol perimeter
        CreatePatrolRoute();

        printf("Patrol route created with node %d", g_PatrolNode);
    }

    return 1;
}

CreatePatrolRoute()
{
    if (g_PatrolNode == -1) return;

    // Set patrol points around area
    NPC_SetNodePoint(g_PatrolNode, 0, 1958.33, 1343.12, 15.36);  // Start point
    NPC_SetNodePoint(g_PatrolNode, 1, 2058.33, 1343.12, 15.36);  // East
    NPC_SetNodePoint(g_PatrolNode, 2, 2058.33, 1443.12, 15.36);  // North-East
    NPC_SetNodePoint(g_PatrolNode, 3, 1958.33, 1443.12, 15.36);  // North
    NPC_SetNodePoint(g_PatrolNode, 4, 1958.33, 1343.12, 15.36);  // Back to start

    printf("Patrol route configured with 5 points");
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/addwaypoint", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        if (g_PatrolNode != -1)
        {
            new pointCount = NPC_GetNodePointCount(g_PatrolNode);

            if (NPC_SetNodePoint(g_PatrolNode, pointCount, x, y, z))
            {
                new msg[64];
                format(msg, sizeof(msg), "Added waypoint %d at your location", pointCount);
                SendClientMessage(playerid, 0x00FF00FF, msg);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Failed to add waypoint");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "No patrol node available");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/customroute", true))
    {
        // Create custom route around player
        new Float:px, Float:py, Float:pz;
        GetPlayerPos(playerid, px, py, pz);

        new customNode = NPC_OpenNode(10);
        if (customNode != -1)
        {
            // Create square route around player
            NPC_SetNodePoint(customNode, 0, px - 20.0, py - 20.0, pz);  // SW
            NPC_SetNodePoint(customNode, 1, px + 20.0, py - 20.0, pz);  // SE
            NPC_SetNodePoint(customNode, 2, px + 20.0, py + 20.0, pz);  // NE
            NPC_SetNodePoint(customNode, 3, px - 20.0, py + 20.0, pz);  // NW
            NPC_SetNodePoint(customNode, 4, px - 20.0, py - 20.0, pz);  // Back to start

            // Start NPC on custom route
            NPC_PlayNode(0, customNode, NPC_MOVE_TYPE_WALK);

            SendClientMessage(playerid, 0x00FF00FF, "Custom route created around your position");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/nodeinfo", true))
    {
        if (g_PatrolNode != -1)
        {
            new pointCount = NPC_GetNodePointCount(g_PatrolNode);
            new msg[64];
            format(msg, sizeof(msg), "Patrol node has %d points configured", pointCount);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "No patrol node available");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Node must be opened before setting points
- Point indices typically start from 0
- Use NPC_GetNodePointPosition to retrieve point coordinates
- Points define the navigation path for NPCs

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open node for editing
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Get point coordinates
- [NPC_GetNodePointCount](NPC_GetNodePointCount): Get point count
- [NPC_UpdateNodePoint](NPC_UpdateNodePoint): Update existing point

## Related Callbacks

_No specific callbacks are triggered by this function._
