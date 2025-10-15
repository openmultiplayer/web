---
title: NPC_GetAnimation
sidebar_label: NPC_GetAnimation
description: Gets the current animation data of an NPC.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

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
    if (!strcmp(cmdtext, "/npcaniminfo", true))
    {
        new npcid = 0; // First NPC
        if (NPC_IsValid(npcid))
        {
            new animId, Float:delta, bool:loop, bool:lockX, bool:lockY, bool:freeze, time;
            NPC_GetAnimation(npcid, animId, delta, loop, lockX, lockY, freeze, time);

            new msg[256];
            format(msg, sizeof(msg),
                "NPC %d Animation - ID: %d, Delta: %.2f, Loop: %d, LockX: %d, LockY: %d, Freeze: %d, Time: %d",
                npcid, animId, delta, loop, lockX, lockY, freeze, time);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}

forward CheckNPCAnimations();
public CheckNPCAnimations()
{
    new animId, Float:delta, bool:loop, bool:lockX, bool:lockY, bool:freeze, time;
    NPC_GetAnimation(0, animId, delta, loop, lockX, lockY, freeze, time);

    if (animId != 0)
    {
        printf("NPC 0 is playing animation %d", animId);
    }
}
```

## Notes

- All parameters except npcid are passed by reference and will be modified
- If the NPC has no active animation, animationId will be 0
- Delta represents the animation speed multiplier
- Lock parameters indicate movement restrictions during animation
- Time indicates duration (0 = infinite)

## Related Functions

- [NPC_SetAnimation](NPC_SetAnimation): Set animation by ID
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation by name
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset animation state

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
