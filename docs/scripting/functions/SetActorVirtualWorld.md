---
title: "SetActorVirtualWorld | open.mp"
description: "Set the virtual world of an actor."
canonical: https://open.mp/docs/scripting/functions/SetActorVirtualWorld
language: en
---

# SetActorVirtualWorld

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Set the virtual world of an actor. Only players in the same world will see the actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor (returned by [CreateActor](https://open.mp/docs/scripting/functions/CreateActor)) to set the virtual world of. |
| virtualWorld | The virtual world to put the actor ID. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    // Create the actor
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // Set their virtual world
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```

## Related Functions

-   [GetActorVirtualWorld](https://open.mp/docs/scripting/functions/GetActorVirtualWorld): Get the virtual world of an actor.
-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
