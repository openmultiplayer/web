---
title: NPC_GetPos
sidebar_label: NPC_GetPos
description: Gets the position of an NPC.
tags: ["npc", "position"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the position of an NPC.

| Name  | Description                             |
| ----- | --------------------------------------- |
| npcid | The ID of the NPC                      |
| &x    | Variable to store the X coordinate     |
| &y    | Variable to store the Y coordinate     |
| &z    | Variable to store the Z coordinate     |

## Returns

Returns `true` if the position was retrieved successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("PositionBot");
    NPC_Spawn(npcid);
    
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    
    new Float:x, Float:y, Float:z;
    NPC_GetPos(npcid, x, y, z);
    printf("NPC %d position: %.2f, %.2f, %.2f", npcid, x, y, z);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcpos", true))
    {
        new Float:x, Float:y, Float:z;
        NPC_GetPos(0, x, y, z);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0: %.1f, %.1f, %.1f", x, y, z);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    
    if (!strcmp(cmdtext, "/gotonpc", true))
    {
        new Float:x, Float:y, Float:z;
        NPC_GetPos(0, x, y, z); // Go to NPC 0
        SetPlayerPos(playerid, x + 2.0, y, z);
        
        SendClientMessage(playerid, 0x00FF00FF, "Teleported to NPC 0");
        return 1;
    }
    return 0;
}

forward CheckNPCDistances();
public CheckNPCDistances()
{
    new Float:x, Float:y, Float:z;
    NPC_GetPos(0, x, y, z);
    printf("NPC 0 position: %.2f, %.2f, %.2f", x, y, z);
}
```

## Notes

- All coordinate parameters are passed by reference and will be modified
- Use this to track NPC movement or calculate distances
- Coordinates are in San Andreas world units
- Position updates reflect the NPC's current location

## Related Functions

- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_GetRot](NPC_GetRot): Get NPC rotation
- [NPC_SetRot](NPC_SetRot): Set NPC rotation
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get facing angle

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes movement
