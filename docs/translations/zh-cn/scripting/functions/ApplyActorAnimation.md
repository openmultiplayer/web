---
title: ApplyActorAnimation
description: Apply an animation to an actor.
tags: ["actor", "animation"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Apply an animation to an actor.

| Name                     | Description                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| actorid                  | The ID of the actor to apply the animation to.                                                                                                                                                         |
| const animationLibrary[] | The animation library from which to apply an animation.                                                                                                                                                |
| const animationName[]    | The name of the animation to apply, within the specified library.                                                                                                                                      |
| float:delta              | The speed to play the animation (use 4.1).                                                                                                                                                             |
| bool:loop                | If set to true, the animation will loop. If set to false, the animation will play once.                                                                                                                |
| bool:lockX               | If set to false, the actor is returned to their old X coordinate once the animation is complete (for animations that move the actor such as walking). true will not return them to their old position. |
| bool:lockY               | Same as above but for the Y axis. Should be kept the same as the previous parameter.                                                                                                                   |
| bool:freeze              | Setting this to true will freeze an actor at the end of the animation. false will not.                                                                                                                 |
| time                     | Timer in milliseconds. For a never-ending loop it should be 0.                                                                                                                                         |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0); // Pay anim
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Preload the 'DEALER' animation library for the player
    ApplyAnimation(playerid, "DEALER", "null", 4.1, false, false, false, false, 0);
    return 1;
}
```

## Notes

:::tip

You must preload the animation library for the player the actor will be applying the animation for, and not for the actor. Otherwise, the animation won't be applied to the actor until the function is executed again.

:::

## Related Functions

- [ClearActorAnimations](ClearActorAnimations): Clear any animations that are applied to an actor.
- [GetActorAnimation](GetActorAnimation): Get the animation the actor is currently performing.
