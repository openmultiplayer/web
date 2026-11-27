---
title: "NPC_SetRot | open.mp"
description: "Sets an NPC's rotation on all axes."
canonical: https://open.mp/docs/scripting/functions/NPC_SetRot
language: en
---

# NPC\_SetRot

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets an NPC's rotation on all three axes (X, Y, Z).

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
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

note

-   Rotation values are in degrees (0-360).
-   Z-axis rotation affects facing direction (same as [NPC\_SetFacingAngle](https://open.mp/docs/scripting/functions/NPC_SetFacingAngle)).
-   X and Y rotations can create tilted or upside-down NPCs.

tip

Use [NPC\_GetRot](https://open.mp/docs/scripting/functions/NPC_GetRot) to retrieve current rotation values.

## Related Functions

-   [NPC\_GetRot](https://open.mp/docs/scripting/functions/NPC_GetRot): Get NPC rotation.
-   [NPC\_SetFacingAngle](https://open.mp/docs/scripting/functions/NPC_SetFacingAngle): Set facing angle only.
-   [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle): Get facing angle.
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC position.
