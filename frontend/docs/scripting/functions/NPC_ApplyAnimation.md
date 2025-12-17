---
title: NPC_ApplyAnimation
sidebar_label: NPC_ApplyAnimation
description: Applies a specific animation to an NPC.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Applies a specific animation to an NPC using animation library and name.

| Name       | Description                                |
| ---------- | ------------------------------------------ |
| npcid      | The ID of the NPC                          |
| animlib[]  | The animation library name                 |
| animname[] | The animation name within the library      |
| delta      | The speed of the animation (typically 4.1) |
| loop       | Whether the animation should loop          |
| lockX      | Lock movement on the X axis                |
| lockY      | Lock movement on the Y axis                |
| freeze     | Freeze the NPC at the end of animation     |
| time       | Time in milliseconds to play the animation |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/applydance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been applied animation.", npcid);
        
        return 1;
    }
    return 0;
}
```

## Notes

- Use `time` parameter to set animation duration
- Lock parameters prevent movement on specific axes during animation
- Use `NPC_ClearAnimations` to stop all animations
- Delta typically ranges from 1.0 to 10.0 (4.1 is standard)

## Related Functions

- [NPC_SetAnimation](NPC_SetAnimation): Set animation by ID
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset animation state
- [NPC_GetAnimation](NPC_GetAnimation): Get current animation data

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
