---
title: NPC_SetSkin
sidebar_label: NPC_SetSkin
description: Sets an NPC's skin model.
tags: ["npc", "skin", "model"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's skin model to change their appearance.

| Name  | Description              |
| ----- | ------------------------ |
| npcid | The ID of the NPC        |
| model | The skin model ID to set |

## Returns

Returns `true` if the skin was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setskin ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new skinid = strval(cmdtext[9]);
        if (skinid < 0 || skinid > 311)
            return SendClientMessage(playerid, 0xFF0000FF, "Skin ID must be between 0 and 311.");

        NPC_SetSkin(npcid, skinid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d skin set to %d", npcid, skinid);

        return 1;
    }
    return 0;
}
```

## Notes

- Invalid skin IDs may cause visual glitches

## Related Functions

- [NPC_GetSkin](NPC_GetSkin): Get NPC's current skin
- [NPC_Spawn](NPC_Spawn): Spawn NPC with default skin
- [NPC_Create](NPC_Create): Create NPC

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
