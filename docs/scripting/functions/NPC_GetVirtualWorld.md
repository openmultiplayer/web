---
title: "NPC_GetVirtualWorld | open.mp"
description: "Gets the virtual world an NPC is in."
canonical: https://open.mp/docs/scripting/functions/NPC_GetVirtualWorld
language: en
---

# NPC\_GetVirtualWorld

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the virtual world an NPC is in.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |

## Returns

Returns the virtual world ID, or 0 on error.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvirtualworld", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vw = NPC_GetVirtualWorld(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d virtual world: %d", npcid, vw);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   Virtual worlds allow separation of NPCs and players.
-   NPCs in different virtual worlds cannot see each other.
-   Virtual world 0 is the default world.

## Related Functions

-   [NPC\_SetVirtualWorld](https://open.mp/docs/scripting/functions/NPC_SetVirtualWorld): Set NPC virtual world.
-   [NPC\_GetInterior](https://open.mp/docs/scripting/functions/NPC_GetInterior): Get NPC interior.
-   [NPC\_SetInterior](https://open.mp/docs/scripting/functions/NPC_SetInterior): Set NPC interior.

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns.
