---
title: "GetActorPoolSize | open.mp"
description: "Gets the highest actorid created on the server."
canonical: https://open.mp/docs/scripting/functions/GetActorPoolSize
language: en
---

# GetActorPoolSize

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Gets the highest actorid created on the server. Note that in SA:MP this function is broken and will return `0` even when there are no actors. open.mp correct this to return `-1`, but also deprecate the function in favour of `MAX_ACTORS` or `foreach`.

## Examples

```c
SetAllActorsHealth(Float:health)
{
    for (new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [IsValidActor](https://open.mp/docs/scripting/functions/IsValidActor): Check if actor id is valid.
-   [SetActorHealth](https://open.mp/docs/scripting/functions/SetActorHealth): Set the health of an actor.
