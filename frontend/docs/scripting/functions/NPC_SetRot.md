---
title: NPC_SetRot
sidebar_label: NPC_SetRot
description: Sets an NPC's rotation on all axes.
tags: ["npc", "rotation", "angle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's rotation on all three axes (X, Y, Z).

| Name  | Description                    |
| ----- | ------------------------------ |
| npcid | The ID of the NPC             |
| x    | X-axis rotation in degrees     |
| y    | Y-axis rotation in degrees     |
| z    | Z-axis rotation in degrees     |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Rotator");
    NPC_Spawn(npcid);
    
    // Set specific rotation
    NPC_SetRot(npcid, 0.0, 0.0, 45.0); // 45 degrees Z rotation
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/randomrot", true))
    {
        // Set random rotation for NPC 0
        new Float:x = float(random(360));
        new Float:y = float(random(360)); 
        new Float:z = float(random(360));
        
        NPC_SetRot(0, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 rotation randomized");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/uprightspecs", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        for (new i = 0; i < count; i++)
        {
            NPC_SetRot(npcs[i], 0.0, 0.0, 0.0); // Reset to upright
        }
        
        SendClientMessage(playerid, 0x00FF00FF, "Reset all NPC rotations");
        return 1;
    }
    return 0;
}
```

## Notes

- Rotation values are in degrees (0-360)
- Z-axis rotation affects facing direction (same as SetFacingAngle)
- X and Y rotations can create tilted or upside-down NPCs
- Use NPC_GetRot to retrieve current rotation values

## Related Functions

- [NPC_GetRot](NPC_GetRot): Get NPC rotation
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set facing angle only
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get facing angle
- [NPC_SetPos](NPC_SetPos): Set NPC position

## Related Callbacks

*No specific callbacks are triggered by this function.*

