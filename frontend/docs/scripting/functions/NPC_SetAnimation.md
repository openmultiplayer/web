---
title: NPC_SetAnimation
sidebar_label: NPC_SetAnimation
description: Sets an animation for an NPC by animation ID.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an animation for an NPC using animation ID.

| Name          | Description                                          |
| ------------- | ---------------------------------------------------- |
| npcid         | The ID of the NPC                                    |
| animationid   | The animation ID to set                              |
| delta         | Animation speed (typically 4.1)                     |
| loop          | Whether the animation should loop                    |
| lockX         | Lock movement on X axis during animation             |
| lockY         | Lock movement on Y axis during animation             |
| freeze        | Freeze the NPC after animation                      |
| time          | Animation duration in milliseconds (0 = infinite)    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Dancer");
    NPC_Spawn(npcid);
    
    // Set a dance animation by ID
    NPC_SetAnimation(npcid, 1189, 4.1, true, false, false, false, 0);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/wave", true))
    {
        // Wave animation for NPC 0
        NPC_SetAnimation(0, 1003, 4.1, false, false, false, false, 3000);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is waving!");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/dance", true))
    {
        // Dance animation for NPC 0
        NPC_SetAnimation(0, 1189, 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is dancing!");
        return 1;
    }
    return 0;
}
```

## Notes

- Animation IDs correspond to GTA San Andreas animation indices
- Use `NPC_ApplyAnimation` for animations by library and name
- Delta value of 4.1 is standard for most animations
- Set time to 0 for infinite animations

## Related Functions

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation by name
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset to default stance

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns