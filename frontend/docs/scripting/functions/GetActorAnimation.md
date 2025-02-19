---
title: GetActorAnimation
sidebar_label: GetActorAnimation
description: Get the animation the actor is currently performing.
tags: ["actor"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the animation the actor is currently performing.

| Name               | Description                                                                |
|--------------------|----------------------------------------------------------------------------|
| actorid            | The ID of the actor to get the animation of.                               |
| animationLibrary[] | An array into which to store the animationLibrary in, passed by reference. |
| librarySize        | The size of the animationLibrary array.                                    |
| animationName[]    | An array into which to store the animationName in, passed by reference.    |
| nameSize           | The size of the animationName array.                                       |
| &Float:delta       | A float variable into which to store the delta in, passed by reference.    |
| &bool:loop         | A boolean variable into which to store the loop in, passed by reference.   |
| &bool:lockX        | A float variable into which to store the lockX in, passed by reference.    |
| &bool:lockY        | A float variable into which to store the lockY in, passed by reference.    |
| &bool:freeze       | A boolean variable into which to store the freeze in, passed by reference. |
| &time              | A variable into which to store the time in, passed by reference.           |

## Return Values

Returns **true** if the actor is valid, otherwise returns **false**.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    ApplyActorAnimation(gMyActor, "PED", "IDLE_CHAT", 4.1, true, true, true, true, 0);

    new animationLibrary[32],
        animationName[32],
        Float:delta,
        bool:loop,
        bool:lockX,
        bool:lockY,
        bool:freeze,
        time;
    
    GetActorAnimation(gMyActor, animationLibrary, sizeof animationLibrary, animationName, sizeof animationName, delta, loop, lockX, lockY, freeze, time);
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
- [ApplyActorAnimation](ApplyActorAnimation): Apply an animation to an actor.
- [ClearActorAnimations](ClearActorAnimations): Clear any animations that are applied to an actor.
