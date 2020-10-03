---
id: SetActorVirtualWorld
title: SetActorVirtualWorld
description: Set the virtual world of an actor.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Set the virtual world of an actor. Only players in the same world will see the actor.

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | The ID of the actor (returned by CreateActor) to set the virtual world of. |
| vworld  | The virtual world to put the actor ID.                                     |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The actor specified does not exist.

## Examples

```c
new MyActor;

public OnGameModeInit()
{
    // Create the actor
    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // Set their virtual world
    SetActorVirtualWorld(MyActor, 69);
    return 1;
}
```

## Related Functions

- GetActorVirtualWorld: Get the virtual world of an actor.
- CreateActor: Create an actor (static NPC).
