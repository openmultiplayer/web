---
title: NPC_SetSpecialAction
sidebar_label: NPC_SetSpecialAction
description: Sets an NPC's special action state.
tags: ["npc", "action", "special"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's special action state, such as sitting, smoking, drinking, etc.

| Name     | Description                    |
| -------- | ------------------------------ |
| npcid    | The ID of the NPC             |
| actionid | The special action ID to set   |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Smoker");
    NPC_Spawn(npcid);
    
    // Make NPC smoke cigarette
    NPC_SetSpecialAction(npcid, SPECIAL_ACTION_SMOKE_CIGGY);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sitnpc", true))
    {
        // Make NPC 0 sit down
        NPC_SetSpecialAction(0, SPECIAL_ACTION_SIT_DOWN);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is now sitting");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/clearaction", true))
    {
        // Clear special action for NPC 0
        NPC_SetSpecialAction(0, SPECIAL_ACTION_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "Cleared NPC 0 special action");
        return 1;
    }
    return 0;
}
```

## Notes

- Common actions: NONE, SIT_DOWN, SMOKE_CIGGY, DRINK_BEER, HANDSUP
- Use SPECIAL_ACTION_NONE to clear the current action
- Some actions may conflict with movement or other activities
- Use NPC_GetSpecialAction to check current action

## Related Functions

- [NPC_GetSpecialAction](NPC_GetSpecialAction): Get current special action
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply custom animations
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset to default

## Related Callbacks

- [OnNPCSpecialActionChange](OnNPCSpecialActionChange): Called when action changes
- [OnNPCUpdate](OnNPCUpdate): Called when NPC updates
