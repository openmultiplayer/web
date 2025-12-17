---
title: NPC_SetRot
sidebar_label: NPC_SetRot
description: Sets an NPC's rotation on all axes.
tags: ["npc", "rotation", "angle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's rotation on all three axes (X, Y, Z).

| Name    | Description                 |
| ------- | --------------------------- |
| npcid   | The ID of the NPC.          |
| Float:x | X-axis rotation in degrees. |
| Float:y | Y-axis rotation in degrees. |
| Float:z | Z-axis rotation in degrees. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setrandomrot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x = float(random(360));
        new Float:y = float(random(360));
        new Float:z = float(random(360));

        NPC_SetRot(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d rotation randomized", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- Rotation values are in degrees (0-360).
- Z-axis rotation affects facing direction (same as [NPC_SetFacingAngle](NPC_SetFacingAngle)).
- X and Y rotations can create tilted or upside-down NPCs.
- Use [NPC_GetRot](NPC_GetRot) to retrieve current rotation values.

:::

## Related Functions

- [NPC_GetRot](NPC_GetRot): Get NPC rotation.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set facing angle only.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get facing angle.
- [NPC_SetPos](NPC_SetPos): Set NPC position.
