---
title: NPC_GetRot
sidebar_label: NPC_GetRot
description: Gets the rotation of an NPC.
tags: ["npc", "rotation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the rotation of an NPC in 3D space.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| npcid    | The ID of the NPC.                                             |
| &Float:x | Variable to store the X rotation (pitch), passed by reference. |
| &Float:y | Variable to store the Y rotation (yaw), passed by reference.   |
| &Float:z | Variable to store the Z rotation (roll), passed by reference.  |

## Returns

Returns `true` if the rotation was retrieved successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("RotationBot");
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

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0 rotation: %.1f, %.1f, %.1f", rx, ry, rz);
        return 1;
    }

    if (!strcmp(cmdtext, "/copynpcrot", true))
    {
        new Float:rx, Float:ry, Float:rz;
        NPC_GetRot(0, rx, ry, rz);

        // Copy NPC 0 rotation to player
        SetPlayerFacingAngle(playerid, rz);

        SendClientMessage(playerid, 0x00FF00FF, "Copied NPC 0 rotation: %.1f degrees", rz);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- All rotation parameters are passed by reference and will be modified.
- Rotation values are in degrees.
- X = pitch (up/down), Y = yaw (left/right), Z = roll (banking).
- For simple facing direction, use [NPC_GetFacingAngle](NPC_GetFacingAngle) instead.

:::

## Related Functions

- [NPC_SetRot](NPC_SetRot): Set NPC rotation.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get facing angle only.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set facing angle only.
- [NPC_GetPos](NPC_GetPos): Get NPC position.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
