---
title: NPC_GetAnimation
sidebar_label: NPC_GetAnimation
description: Gets the current animation data of an NPC.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the current animation data of an NPC.

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| npcid        | The ID of the NPC                         |
| &animationId | Variable to store the animation ID        |
| &delta       | Variable to store the animation speed     |
| &loop        | Variable to store whether animation loops |
| &lockX       | Variable to store X-axis lock state       |
| &lockY       | Variable to store Y-axis lock state       |
| &freeze      | Variable to store freeze state at end     |
| &time        | Variable to store animation time          |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/getanim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You have no NPC.");

        new animid, time;
        new Float:delta;
        new bool:loop, bool:lockX, bool:lockY, bool:freeze;

        if (!NPC_GetAnimation(npcid, animid, delta, loop, lockX, lockY, freeze, time))
            return SendClientMessage(playerid, 0xFF0000FF, "Failed to get animation data (maybe no active animation).");

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC %d animID: %d | delta: %.2f | loop: %d | lockX: %d | lockY: %d | freeze: %d | time: %d",
            npcid, animid, delta, _:loop, _:lockX, _:lockY, _:freeze, time);

        return 1;
    }
    return 0;
}
```

## Notes

- This won't return data if used with [NPC_SetAnimation](NPC_SetAnimation)
- All parameters except npcid are passed by reference and will be modified
- If the NPC has no active animation, animationId will be 0

## Related Functions

- [NPC_SetAnimation](NPC_SetAnimation): Set animation by ID
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation by name
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset animation state

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
