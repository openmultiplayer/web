---
title: GetActorVirtualWorld
description: Get the virtual world of an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the virtual world of an actor.

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| actorid | The ID of the actor to get the virtual world of. |

## Returns

The virtual world of the actor. By default this is 0.

Also returns 0 if actor specified does not exist.

## Examples

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    SetActorVirtualWorld(MyActor, 20);
    return 1;
}

// Somewhere else
if (GetActorVirtualWorld(MyActor) == 20)
{
    // Do something
}
```

## Related Functions

- [SetActorVirtualWorld](SetActorVirtualWorld): Set the virtual world of an actor.
