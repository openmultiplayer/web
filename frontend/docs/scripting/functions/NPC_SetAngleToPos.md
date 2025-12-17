---
title: NPC_SetAngleToPos
sidebar_label: NPC_SetAngleToPos
description: Rotates an NPC so it faces a specific world position.
tags: ["npc", "angle", "position"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Rotates an NPC so it faces a specific world position.

| Name   | Description |
| ------ | ----------- |
| npcid  | The ID of the NPC. |
| Float:x | X coordinate of the target position. |
| Float:y | Y coordinate of the target position. |
| Float:z | Z coordinate of the target position. |

## Returns

Returns `true` if the NPC was rotated successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lookatpos", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_SetAngleToPos(npcid, x + 3.0, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d now faces %.2f, %.2f, %.2f", npcid, x + 3.0, y, z);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- Only the horizontal plane (X/Y) is considered when calculating the facing angle.
- The NPC will not move; it only rotates to face the position.

:::

## Related Functions

- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set an exact angle value.
- [NPC_SetAngleToPlayer](NPC_SetAngleToPlayer): Face a player automatically.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get the NPC's current facing.
- [NPC_Move](NPC_Move): Move the NPC toward a position.
