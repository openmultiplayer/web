---
title: "GetActorVirtualWorld | open.mp"
description: "Get the virtual world of an actor."
canonical: https://open.mp/docs/scripting/functions/GetActorVirtualWorld
language: en
---

# GetActorVirtualWorld

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Get the virtual world of an actor.

| Name | Description |
| --- | --- |
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

-   [SetActorVirtualWorld](https://open.mp/docs/scripting/functions/SetActorVirtualWorld): Set the virtual world of an actor.
