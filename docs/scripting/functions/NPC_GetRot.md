---
title: "NPC_GetRot | open.mp"
description: "Gets the rotation of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetRot
language: en
---

# NPC\_GetRot

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the rotation of an NPC in 3D space.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
| &Float:x | Variable to store the X rotation (pitch), passed by reference. |
| &Float:y | Variable to store the Y rotation (yaw), passed by reference. |
| &Float:z | Variable to store the Z rotation (roll), passed by reference. |

## Returns

Returns `true` if the rotation was retrieved successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:rotX, Float:rotY, Float:rotZ;
        NPC_GetRot(npcid, rotX, rotY, rotZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d rotation: X=%.2f, Y=%.2f, Z=%.2f", npcid, rotX, rotY, rotZ);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   All rotation parameters are passed by reference and will be modified.
-   X = pitch (up/down), Y = yaw (left/right), Z = roll (banking).

tip

For simple facing direction, use [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle) instead.

## Related Functions

-   [NPC\_SetRot](https://open.mp/docs/scripting/functions/NPC_SetRot): Set NPC rotation.
-   [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle): Get facing angle only.
-   [NPC\_SetFacingAngle](https://open.mp/docs/scripting/functions/NPC_SetFacingAngle): Set facing angle only.
-   [NPC\_GetPos](https://open.mp/docs/scripting/functions/NPC_GetPos): Get NPC position.

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns.
