---
title: NPC_GetPos
sidebar_label: NPC_GetPos
description: Gets the position of an NPC.
tags: ["npc", "position"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the position of an NPC.

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| npcid    | The ID of the NPC.                                       |
| &Float:x | Variable to store the X coordinate, passed by reference. |
| &Float:y | Variable to store the Y coordinate, passed by reference. |
| &Float:z | Variable to store the Z coordinate, passed by reference. |

## Returns

Returns `true` if the position was retrieved successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpos", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d position: %.2f, %.2f, %.2f", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- All coordinate parameters are passed by reference and will be modified.

:::

## Related Functions

- [NPC_SetPos](NPC_SetPos): Set NPC position.
- [NPC_GetRot](NPC_GetRot): Get NPC rotation.
- [NPC_SetRot](NPC_SetRot): Set NPC rotation.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get facing angle.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement.
