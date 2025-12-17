---
title: NPC_SetInterior
sidebar_label: NPC_SetInterior
description: Sets the interior of an NPC.
tags: ["npc", "interior"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the interior of an NPC.

| Name       | Description            |
| ---------- | ---------------------- |
| npcid      | The ID of the NPC      |
| interiorid | The interior ID to set |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setinterior ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new interiorid = strval(cmdtext[13]);
        if (interiorid < 0 || interiorid > 255)
            return SendClientMessage(playerid, 0xFF0000FF, "Interior ID must be between 0 and 255.");

        NPC_SetInterior(npcid, interiorid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d interior set to %d", npcid, interiorid);

        return 1;
    }
    return 0;
}
```

## Notes

- Interior 0 is the main world (outside)
- Make sure to set appropriate coordinates for each interior

## Related Functions

- [NPC_GetInterior](NPC_GetInterior): Get NPC interior
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Get NPC virtual world
- [NPC_SetPos](NPC_SetPos): Set NPC position

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
