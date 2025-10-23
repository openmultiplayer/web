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
public OnGameModeInit()
{
    new npcid = NPC_Create("ActionBot");
    NPC_Spawn(npcid);

    NPC_SetSpecialAction(npcid, SPECIAL_ACTION_DUCK);

    new action = NPC_GetSpecialAction(npcid);
    printf("NPC %d special action: %d", npcid, action);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaction", true))
    {
        new action = NPC_GetSpecialAction(0);

        new actionName[32];
        switch(action)
        {
            case SPECIAL_ACTION_NONE: actionName = "None";
            case SPECIAL_ACTION_DUCK: actionName = "Ducking";
            case SPECIAL_ACTION_USEJETPACK: actionName = "Jetpack";
            case SPECIAL_ACTION_SIT_DOWN: actionName = "Sitting";
            default: actionName = "Unknown";
        }

        new msg[64];
        format(msg, sizeof(msg), "NPC 0 action: %s", actionName);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the current special action constant
- Use this to check what action the NPC is currently performing
- Actions include ducking, sitting, using jetpack, etc.

## Related Functions

- [NPC_SetSpecialAction](NPC_SetSpecialAction): Set NPC special action
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation to NPC

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
