---
title: NPC_ApplyAnimation
sidebar_label: NPC_ApplyAnimation
description: Applies a specific animation to an NPC.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Applies a specific animation to an NPC using animation library and name.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| npcid     | The ID of the NPC                             |
| animlib[] | The animation library name                    |
| animname[]| The animation name within the library         |
| delta     | The speed of the animation (typically 4.1)   |
| loop      | Whether the animation should loop             |
| lockX     | Lock movement on the X axis                   |
| lockY     | Lock movement on the Y axis                   |
| freeze    | Freeze the NPC at the end of animation       |
| time      | Time in milliseconds to play the animation   |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("AnimationBot");
    NPC_Spawn(npcid);
    
    // Apply a dance animation
    NPC_ApplyAnimation(npcid, "DANCING", "DAN_Loop_A", 4.1, true, false, false, false, 0);
    
    // Apply a smoking animation for 5 seconds
    NPC_ApplyAnimation(npcid, "SMOKING", "M_smklean_loop", 4.1, true, false, false, false, 5000);
    
    return 1;
}
```

## Notes

- The animation library and name must exist in GTA San Andreas
- Use `time` parameter to set animation duration (0 = infinite)
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
