---
title: "IsValidActor | open.mp"
description: "Checks if an actor ID is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidActor
language: en
---

# IsValidActor

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Checks if an actor ID is valid.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to check. |

## Returns

**true** - The actor is valid.

**false** - The actor is not valid.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.

    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100.0);
    }
    return 1;
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor.
-   [GetActorPoolSize](https://open.mp/docs/scripting/functions/GetActorPoolSize): Gets the highest actorid created on the server.
-   [SetActorHealth](https://open.mp/docs/scripting/functions/SetActorHealth): Set the health of an actor.
