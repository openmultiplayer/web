---
title: NPC_GetFacingAngle
sidebar_label: NPC_GetFacingAngle
description: Gets the facing angle of an NPC.
tags: ["npc", "angle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the facing angle of an NPC.

| Name    | Description                               |
| ------- | ----------------------------------------- |
| npcid   | The ID of the NPC                        |
| &angle  | Variable to store the facing angle       |

## Returns

Returns `true` if the facing angle was retrieved successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Bot");
    NPC_Spawn(npcid);
    
    NPC_SetFacingAngle(npcid, 90.0);
    
    new Float:angle;
    NPC_GetFacingAngle(npcid, angle);
    printf("NPC %d is facing angle %.2f", npcid, angle); // Output: 90.00
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/getangle", true))
    {
        new Float:angle;
        NPC_GetFacingAngle(0, angle);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 angle: %.2f degrees", angle);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- The angle is passed by reference and will be modified
- Angles are in degrees (0.0 to 360.0)
- 0.0 = North, 90.0 = East, 180.0 = South, 270.0 = West
- This gets the 2D facing angle, not the full 3D rotation

## Related Functions

- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set NPC facing angle
- [NPC_GetRot](NPC_GetRot): Get full 3D rotation
- [NPC_SetRot](NPC_SetRot): Set full 3D rotation
- [NPC_GetPos](NPC_GetPos): Get NPC position

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
