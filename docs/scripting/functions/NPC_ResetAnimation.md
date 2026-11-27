---
title: "NPC_ResetAnimation | open.mp"
description: "Resets an NPC's current animation to default."
canonical: https://open.mp/docs/scripting/functions/NPC_ResetAnimation
language: en
---

# NPC\_ResetAnimation

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Resets an NPC's current animation to the default state.

| Name | Description |
| --- | --- |
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

-   Stops all current animations and returns NPC to idle state
-   Equivalent to calling NPC\_ClearAnimations

## Related Functions

-   [NPC\_ApplyAnimation](https://open.mp/docs/scripting/functions/NPC_ApplyAnimation): Apply animation to NPC
-   [NPC\_ClearAnimations](https://open.mp/docs/scripting/functions/NPC_ClearAnimations): Clear all animations
-   [NPC\_SetAnimation](https://open.mp/docs/scripting/functions/NPC_SetAnimation): Set specific animation
-   [NPC\_GetAnimation](https://open.mp/docs/scripting/functions/NPC_GetAnimation): Get current animation

## Related Callbacks

_No specific callbacks are triggered by this function._
