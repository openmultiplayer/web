---
title: NPC_ClearAnimations
sidebar_label: NPC_ClearAnimations
description: Clears all animations from an NPC.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Clears all animations from an NPC, returning it to its default state.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("AnimBot");
    NPC_Spawn(npcid);
    
    // Apply some animations
    NPC_ApplyAnimation(npcid, "DANCING", "DAN_Loop_A", 4.1, true, false, false, false, 0);
    
    // After 10 seconds, clear all animations
    SetTimerEx("ClearNPCAnimations", 10000, false, "i", npcid);
    
    return 1;
}

forward ClearNPCAnimations(npcid);
public ClearNPCAnimations(npcid)
{
    NPC_ClearAnimations(npcid);
}
```

## Notes

- This function stops all currently playing animations
- The NPC will return to its default idle stance
- Any looping animations will be interrupted
- This is useful for resetting NPC appearance before applying new animations

## Related Functions

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation to NPC
- [NPC_SetAnimation](NPC_SetAnimation): Set animation by ID
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset animation state
- [NPC_GetAnimation](NPC_GetAnimation): Get current animation data

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
