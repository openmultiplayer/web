---
title: "IsActorInvulnerable | open.mp"
description: "Check if an actor is invulnerable."
canonical: https://open.mp/docs/scripting/functions/IsActorInvulnerable
language: en
---

# IsActorInvulnerable

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Check if an actor is invulnerable.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to check. |

## Returns

**true** - The actor is invulnerable.

**false** - The actor is vulnerable.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.

    if (IsActorInvulnerable(gMyActor))
    {
        print("Actor is invulnerable.");
    }
    else
    {
        print("Actor is vulnerable.");
    }
    return 1;
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [SetActorInvulnerable](https://open.mp/docs/scripting/functions/SetActorInvulnerable): Set actor invulnerable.
-   [SetActorHealth](https://open.mp/docs/scripting/functions/SetActorHealth): Set the health of an actor.
