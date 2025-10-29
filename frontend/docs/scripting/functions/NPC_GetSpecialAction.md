---
title: NPC_GetSpecialAction
sidebar_label: NPC_GetSpecialAction
description: Gets the current special action of an NPC.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the current special action of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the special action ID, or `SPECIAL_ACTION_NONE` if no special action is active.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkspecialaction", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new action = NPC_GetSpecialAction(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d special action: %d", npcid, action);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the current special action constant
- Use this to check what action the NPC is currently performing

## Related Functions

- [NPC_SetSpecialAction](NPC_SetSpecialAction): Set NPC special action
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation to NPC

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
