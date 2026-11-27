---
title: "NPC_SetFacingAngle | open.mp"
description: "Sets an NPC's facing angle."
canonical: https://open.mp/docs/scripting/functions/NPC_SetFacingAngle
language: en
---

# NPC\_SetFacingAngle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets an NPC's facing angle.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
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

note

-   Angle is measured in degrees (0-360).
-   Instantly rotates NPC without animation.

tip

Use [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle) to get current facing angle.

## Related Functions

-   [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle): Get NPC's facing angle.
-   [NPC\_SetRot](https://open.mp/docs/scripting/functions/NPC_SetRot): Set NPC rotation (X, Y, Z).
-   [NPC\_GetRot](https://open.mp/docs/scripting/functions/NPC_GetRot): Get NPC rotation.
-   [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos): Set NPC position.
