---
title: NPC_GetCustomSkin
sidebar_label: NPC_GetCustomSkin
description: Gets the custom skin ID of an NPC.
tags: ["npc", "skin", "model"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the custom skin ID of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the custom skin ID of the NPC, or -1 if the NPC has no custom skin or is invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkcustomskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new customskinid = NPC_GetCustomSkin(npcid);

        if (customskinid == -1)
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d has no custom skin set", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d custom skin: %d", npcid, customskinid);
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- Returns -1 if the NPC has no custom skin set or if the NPC is invalid.
- Custom skins differ from regular skins in that they typically refer to custom models added to the game.
- Use [NPC_GetSkin](NPC_GetSkin) to get the regular skin/model ID.

:::

## Related Functions

- [NPC_SetSkin](NPC_SetSkin): Set NPC skin/model.
- [NPC_GetSkin](NPC_GetSkin): Get NPC's current skin/model ID.
- [NPC_IsValid](NPC_IsValid): Check if NPC is valid.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
