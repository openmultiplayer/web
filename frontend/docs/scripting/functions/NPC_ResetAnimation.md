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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetanim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_ResetAnimation(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d animation has been reset.", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

- Stops all current animations and returns NPC to idle state
- Equivalent to calling NPC_ClearAnimations

## Related Functions

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation to NPC
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_SetAnimation](NPC_SetAnimation): Set specific animation
- [NPC_GetAnimation](NPC_GetAnimation): Get current animation

## Related Callbacks

_No specific callbacks are triggered by this function._
