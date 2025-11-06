---
title: NPC_SetVirtualWorld
sidebar_label: NPC_SetVirtualWorld
description: Sets an NPC's virtual world.
tags: ["npc", "virtual world", "dimension"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's virtual world, controlling which players can see and interact with them.

| Name  | Description                  |
| ----- | ---------------------------- |
| npcid | The ID of the NPC.           |
| vw    | The virtual world ID to set. |

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

:::warning

- Virtual world 0 is the default world where all players start.
- NPCs in different virtual worlds cannot see or interact with each other.
- Players must be in the same virtual world to see NPCs.
- Use [NPC_GetVirtualWorld](NPC_GetVirtualWorld) to check current virtual world.

:::

## Related Functions

- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Get NPC's virtual world.
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Set player's virtual world.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Get player's virtual world.
- [NPC_SetInterior](NPC_SetInterior): Set NPC's interior.
