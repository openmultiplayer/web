---
id: ClearActorAnimations
title: ClearActorAnimations
description: Clear any animations applied to an actor.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Clear any animations applied to an actor.

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | The ID of the actor (returned by CreateActor) to clear the animations for. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

## Examples

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
}

// Somewhere else
ApplyActorAnimation(MyActor, ...);

// Somewhere else
ClearActorAnimations(MyActor);
```

## Related Functions

- [ApplyActorAnimation](../functions/ApplyActorAnimation.md): Apply an animation to an actor.
