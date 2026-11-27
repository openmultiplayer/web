---
title: "NPC_SetVirtualWorld | open.mp"
description: "Sets an NPC's virtual world."
canonical: https://open.mp/docs/scripting/functions/NPC_SetVirtualWorld
language: en
---

# NPC\_SetVirtualWorld

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets an NPC's virtual world, controlling which players can see and interact with them.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
| vw | The virtual world ID to set. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvirtualworld ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vw = strval(cmdtext[16]);
        if (vw < 0)
            return SendClientMessage(playerid, 0xFF0000FF, "Virtual world must be positive.");

        NPC_SetVirtualWorld(npcid, vw);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d virtual world set to %d", npcid, vw);

        return 1;
    }
    return 0;
}
```

## Notes

note

-   Virtual world 0 is the default world where all players start.
-   NPCs in different virtual worlds cannot see or interact with each other.
-   Players must be in the same virtual world to see NPCs.

tip

Use [NPC\_GetVirtualWorld](https://open.mp/docs/scripting/functions/NPC_GetVirtualWorld) to check current virtual world.

## Related Functions

-   [NPC\_GetVirtualWorld](https://open.mp/docs/scripting/functions/NPC_GetVirtualWorld): Get NPC's virtual world.
-   [SetPlayerVirtualWorld](https://open.mp/docs/scripting/functions/SetPlayerVirtualWorld): Set player's virtual world.
-   [GetPlayerVirtualWorld](https://open.mp/docs/scripting/functions/GetPlayerVirtualWorld): Get player's virtual world.
-   [NPC\_SetInterior](https://open.mp/docs/scripting/functions/NPC_SetInterior): Set NPC's interior.
