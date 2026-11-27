---
title: "SetActorHealth | open.mp"
description: "Set the health of an actor."
canonical: https://open.mp/docs/scripting/functions/SetActorHealth
language: en
---

# SetActorHealth

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Set the health of an actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to set the health of. |
| Float:health | The value to set the actors's health to. |

## Returns

**true** - success

**false** - failure (i.e. actor is not created).

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation

    SetActorHealth(gMyActor, 100.0);
    return 1;
}
```

## Related Functions

-   [GetActorHealth](https://open.mp/docs/scripting/functions/GetActorHealth): Get the health of an actor.
-   [SetActorInvulnerable](https://open.mp/docs/scripting/functions/SetActorInvulnerable): Set actor invulnerable.
