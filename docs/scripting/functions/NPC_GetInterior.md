---
title: "NPC_GetInterior | open.mp"
description: "Gets the interior ID of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetInterior
language: en
---

# NPC\_GetInterior

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the interior ID of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the interior ID the NPC is currently in.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinterior", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new interior = NPC_GetInterior(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d interior: %d", npcid, interior);
        return 1;
    }
    return 0;
}
```

## Notes

-   Interior 0 is the main world (outside)

## Related Functions

-   [NPC\_SetInterior](https://open.mp/docs/scripting/functions/NPC_SetInterior): Set NPC interior
-   [NPC\_GetVirtualWorld](https://open.mp/docs/scripting/functions/NPC_GetVirtualWorld): Get NPC virtual world
-   [NPC\_SetVirtualWorld](https://open.mp/docs/scripting/functions/NPC_SetVirtualWorld): Set NPC virtual world
-   [NPC\_GetPos](https://open.mp/docs/scripting/functions/NPC_GetPos): Get NPC position

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns
