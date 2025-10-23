---
title: NPC_ResetAnimation
sidebar_label: NPC_ResetAnimation
description: Resets an NPC's current animation to default.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Resets an NPC's current animation to the default state.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Dancer");
    NPC_Spawn(npcid);

    // Apply animation
    NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.0, 1, 0, 0, 1, 0);

    // Reset after 10 seconds
    SetTimerEx("ResetAnim", 10000, false, "i", npcid);

    return 1;
}

forward ResetAnim(npcid);
public ResetAnim(npcid)
{
    NPC_ResetAnimation(npcid);
    printf("NPC %d animation reset to default", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetanim", true))
    {
        // Reset animation for NPC 0
        NPC_ResetAnimation(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 animation reset");
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Stops all current animations and returns NPC to idle state
- Use this to clear animations that are stuck or looping
- Equivalent to calling NPC_ClearAnimations
- NPC will return to normal standing/walking animations

## Related Functions

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation to NPC
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_SetAnimation](NPC_SetAnimation): Set specific animation
- [NPC_GetAnimation](NPC_GetAnimation): Get current animation

## Related Callbacks

_No specific callbacks are triggered by this function._
