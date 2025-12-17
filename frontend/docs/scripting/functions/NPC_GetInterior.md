---
title: NPC_GetInterior
sidebar_label: NPC_GetInterior
description: Gets the interior ID of an NPC.
tags: ["npc", "interior"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the interior ID of an NPC.

| Name  | Description       |
| ----- | ----------------- |
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

- Interior 0 is the main world (outside)

## Related Functions

- [NPC_SetInterior](NPC_SetInterior): Set NPC interior
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Get NPC virtual world
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world
- [NPC_GetPos](NPC_GetPos): Get NPC position

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
