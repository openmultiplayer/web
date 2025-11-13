---
title: NPC_GetFacingAngle
sidebar_label: NPC_GetFacingAngle
description: Gets the facing angle of an NPC.
tags: ["npc", "angle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the facing angle of an NPC.

| Name         | Description                                              |
| ------------ | -------------------------------------------------------- |
| npcid        | The ID of the NPC.                                       |
| &Float:angle | Variable to store the facing angle, passed by reference. |

## Returns

Returns `true` if the facing angle was retrieved successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfacingangle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:angle;
        NPC_GetFacingAngle(npcid, angle);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d facing angle: %.2f", npcid, angle);
        return 1;
    }

    return 0;
}
```

## Notes

:::warning

- The angle is passed by reference and will be modified.
- Angles are in degrees (0.0 to 360.0).
- Angles are counter-clockwise in GTA:SA; 90 degrees would be East in the real world, but in GTA:SA 90 degrees is in fact West. North and South are still 0/360 and 180. To convert GTA:SA angles to real-world compass angles, simply do 360 - angle.

:::

## Related Functions

- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set NPC facing angle.
- [NPC_GetRot](NPC_GetRot): Get full 3D rotation.
- [NPC_SetRot](NPC_SetRot): Set full 3D rotation.
- [NPC_GetPos](NPC_GetPos): Get NPC position.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
