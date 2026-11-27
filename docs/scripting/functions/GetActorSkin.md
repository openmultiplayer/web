---
title: "GetActorSkin | open.mp"
description: "Get the skin of the actor."
canonical: https://open.mp/docs/scripting/functions/GetActorSkin
language: en
---

# GetActorSkin

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the skin of the actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to get. |

## Return Values

Returns the actor's current skin.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);

    new actorSkinID = GetActorSkin(gMyActor);
    // The value of `actorSkinID` is now 179
    return 1;
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [SetActorSkin](https://open.mp/docs/scripting/functions/SetActorSkin): Set the skin of the actor.
