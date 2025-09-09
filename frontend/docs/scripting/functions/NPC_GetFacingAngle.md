---
title: NPC_GetFacingAngle
sidebar_label: NPC_GetFacingAngle
description: Gets the facing angle of an NPC.
tags: ["npc", "angle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the facing angle of an NPC.

| Name          | Description                                              |
| ------------- | -------------------------------------------------------- |
| npcid         | The ID of the NPC.                                       |
| &Float:angle  | Variable to store the facing angle, passed by reference. |

## Returns

Returns `true` if the facing angle was retrieved successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("Bot");
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
        
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0 angle: %.2f degrees", angle);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- The angle is passed by reference and will be modified.
- Angles are in degrees (0.0 to 360.0).
- Angles are reversed in GTA:SA; 90 degrees would be East in the real world, but in GTA:SA 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle.
- This gets the 2D facing angle, not the full 3D rotation.

:::

## Related Functions

- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set NPC facing angle.
- [NPC_GetRot](NPC_GetRot): Get full 3D rotation.
- [NPC_SetRot](NPC_SetRot): Set full 3D rotation.
- [NPC_GetPos](NPC_GetPos): Get NPC position.

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns.
