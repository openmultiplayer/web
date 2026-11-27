---
title: "NPC_GetSpecialAction | open.mp"
description: "Gets the current special action of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetSpecialAction
language: en
---

# NPC\_GetSpecialAction

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the current special action of an NPC.

| Name | Description |
| --- | --- |
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

-   Returns the current special action constant
-   Use this to check what action the NPC is currently performing

## Related Functions

-   [NPC\_SetSpecialAction](https://open.mp/docs/scripting/functions/NPC_SetSpecialAction): Set NPC special action
-   [NPC\_ClearAnimations](https://open.mp/docs/scripting/functions/NPC_ClearAnimations): Clear all animations
-   [NPC\_ApplyAnimation](https://open.mp/docs/scripting/functions/NPC_ApplyAnimation): Apply animation to NPC

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns
