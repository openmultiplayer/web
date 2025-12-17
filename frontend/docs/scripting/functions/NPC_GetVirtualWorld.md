---
title: NPC_GetVirtualWorld
sidebar_label: NPC_GetVirtualWorld
description: Gets the virtual world an NPC is in.
tags: ["npc"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the virtual world an NPC is in.

| Name  | Description        |
| ----- | ------------------ |
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

:::warning

- Virtual worlds allow separation of NPCs and players.
- NPCs in different virtual worlds cannot see each other.
- Virtual world 0 is the default world.

:::

## Related Functions

- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world.
- [NPC_GetInterior](NPC_GetInterior): Get NPC interior.
- [NPC_SetInterior](NPC_SetInterior): Set NPC interior.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
