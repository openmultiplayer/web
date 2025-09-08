---
title: NPC_GetRot
sidebar_label: NPC_GetRot
description: Gets the rotation of an NPC.
tags: ["npc", "rotation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the rotation of an NPC in 3D space.

| Name  | Description                                |
| ----- | ------------------------------------------ |
| npcid | The ID of the NPC                         |
| &x    | Variable to store the X rotation (pitch)  |
| &y    | Variable to store the Y rotation (yaw)    |
| &z    | Variable to store the Z rotation (roll)   |

## Returns

Returns `true` if the rotation was retrieved successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RotationBot");
    NPC_Spawn(npcid);
    
    NPC_SetRot(npcid, 15.0, 90.0, 0.0);
    
    new Float:rx, Float:ry, Float:rz;
    NPC_GetRot(npcid, rx, ry, rz);
    printf("NPC %d rotation: %.2f, %.2f, %.2f", npcid, rx, ry, rz);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcrot", true))
    {
        new Float:rx, Float:ry, Float:rz;
        NPC_GetRot(0, rx, ry, rz);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 rotation: %.1f, %.1f, %.1f", rx, ry, rz);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    
    if (!strcmp(cmdtext, "/copynpcrot", true))
    {
        new Float:rx, Float:ry, Float:rz;
        NPC_GetRot(0, rx, ry, rz);
        
        // Copy NPC 0 rotation to player
        SetPlayerFacingAngle(playerid, ry);
        
        new msg[64];
        format(msg, sizeof(msg), "Copied NPC 0 rotation: %.1f degrees", ry);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}

forward AlignNPCsToFaceEachOther(npc1, npc2);
public AlignNPCsToFaceEachOther(npc1, npc2)
{
    new Float:x1, Float:y1, Float:z1;
    new Float:x2, Float:y2, Float:z2;
    
    NPC_GetPos(npc1, x1, y1, z1);
    NPC_GetPos(npc2, x2, y2, z2);
    
    // Calculate angle for npc1 to face npc2
    new Float:angle = atan2(y2 - y1, x2 - x1) - 90.0;
    NPC_SetFacingAngle(npc1, angle);
    
    // Calculate angle for npc2 to face npc1
    angle = atan2(y1 - y2, x1 - x2) - 90.0;
    NPC_SetFacingAngle(npc2, angle);
}
```

## Notes

- All rotation parameters are passed by reference and will be modified
- Rotation values are in degrees
- X = pitch (up/down), Y = yaw (left/right), Z = roll (banking)
- For simple facing direction, use `NPC_GetFacingAngle` instead

## Related Functions

- [NPC_SetRot](NPC_SetRot): Set NPC rotation
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get facing angle only
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set facing angle only
- [NPC_GetPos](NPC_GetPos): Get NPC position

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
