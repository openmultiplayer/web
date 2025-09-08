---
title: NPC_SetFacingAngle
sidebar_label: NPC_SetFacingAngle
description: Sets an NPC's facing angle.
tags: ["npc", "angle", "rotation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's facing angle.

| Name  | Description                          |
| ----- | ------------------------------------ |
| npcid | The ID of the NPC                   |
| angle | The facing angle in degrees (0-360) |

## Returns

Returns `true` if the facing angle was set successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Guard");
    NPC_Spawn(npcid);
    
    // Face north
    NPC_SetFacingAngle(npcid, 0.0);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/turneast", true))
    {
        // Make NPC face east (90 degrees)
        NPC_SetFacingAngle(0, 90.0);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC now facing east");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/faceme", true))
    {
        new Float:px, Float:py, Float:pz;
        GetPlayerPos(playerid, px, py, pz);
        
        new Float:nx, Float:ny, Float:nz;
        NPC_GetPos(0, nx, ny, nz);
        
        // Calculate angle to face player
        new Float:angle = atan2(py - ny, px - nx) - 90.0;
        NPC_SetFacingAngle(0, angle);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC now facing you");
        return 1;
    }
    return 0;
}
```

## Notes

- Angle is measured in degrees (0-360)
- 0.0 = North, 90.0 = East, 180.0 = South, 270.0 = West
- Use NPC_GetFacingAngle to get current facing angle
- Instantly rotates NPC without animation

## Related Functions

- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get NPC's facing angle
- [NPC_SetRot](NPC_SetRot): Set NPC rotation (X, Y, Z)
- [NPC_GetRot](NPC_GetRot): Get NPC rotation
- [NPC_SetPos](NPC_SetPos): Set NPC position

## Related Callbacks

- [OnNPCMove](OnNPCMove): Called when NPC moves
