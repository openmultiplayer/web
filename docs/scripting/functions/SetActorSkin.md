---
title: "SetActorSkin | open.mp"
description: "Set the skin of the actor."
canonical: https://open.mp/docs/scripting/functions/SetActorSkin
language: en
---

# SetActorSkin

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Set the skin of the actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to set. |
| skin | The ID of the skin to give them |

## Returns

**true** - Success.

**false** - Failure (i.e. Actor is not created/valid).

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    SetActorSkin(gMyActor, 270); // Change actor skin from 179 to 270
    return 1;
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [GetActorSkin](https://open.mp/docs/scripting/functions/GetActorSkin): Get the skin of the actor.
