---
title: NPC_GetVirtualWorld
sidebar_label: NPC_GetVirtualWorld
description: Gets the virtual world an NPC is in.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the virtual world an NPC is in.

| Name  | Description        |
| ----- | ------------------ |
| npcid | The ID of the NPC. |

## Returns

Returns the virtual world ID, or 0 on error.

## Examples

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("WorldBot");
    NPC_Spawn(npcid);
    
    NPC_SetVirtualWorld(npcid, 5); // Set to virtual world 5
    
    new const vw = NPC_GetVirtualWorld(npcid);
    printf("NPC %d is in virtual world %d", npcid, vw);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkworld", true))
    {
        new const vw = NPC_GetVirtualWorld(0);
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0 is in virtual world %d", vw);
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

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns.
