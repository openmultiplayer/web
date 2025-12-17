---
title: NPC_SetFacingAngle
sidebar_label: NPC_SetFacingAngle
description: Sets an NPC's facing angle.
tags: ["npc", "angle", "rotation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets an NPC's facing angle.

| Name        | Description                          |
| ----------- | ------------------------------------ |
| npcid       | The ID of the NPC.                   |
| Float:angle | The facing angle in degrees (0-360). |

## Returns

Returns `true` if the facing angle was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setfacingangle ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:angle = floatstr(cmdtext[16]);
        if (angle < 0.0 || angle > 360.0)
            return SendClientMessage(playerid, 0xFF0000FF, "Angle must be between 0.0 and 360.0.");

        NPC_SetFacingAngle(npcid, angle);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d facing angle set to %.1f", npcid, angle);

        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- Angle is measured in degrees (0-360).
- Use [NPC_GetFacingAngle](NPC_GetFacingAngle) to get current facing angle.
- Instantly rotates NPC without animation.

:::

## Related Functions

- [NPC_GetFacingAngle](NPC_GetFacingAngle): Get NPC's facing angle.
- [NPC_SetRot](NPC_SetRot): Set NPC rotation (X, Y, Z).
- [NPC_GetRot](NPC_GetRot): Get NPC rotation.
- [NPC_SetPos](NPC_SetPos): Set NPC position.
