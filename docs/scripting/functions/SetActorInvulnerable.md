---
title: "SetActorInvulnerable | open.mp"
description: "Toggle an actor's invulnerability."
canonical: https://open.mp/docs/scripting/functions/SetActorInvulnerable
language: en
---

# SetActorInvulnerable

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Toggle an actor's invulnerability.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to set invulnerability. |
| bool:invulnerable | 'false' to make them vulnerable, 'true' to make them invulnerable. |

## Returns

**true** - Success

**false** - Failure (i.e. Actor is not created).

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    SetActorInvulnerable(gMyActor, true);
    return 1;
}
```

## Notes

warning

-   Once set invulnerable, the actor does not call [OnPlayerGiveDamageActor](https://open.mp/docs/scripting/callbacks/OnPlayerGiveDamageActor).
-   Players will have actor's invulnerability state changed only when it is restreamed to them.

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
-   [IsActorInvulnerable](https://open.mp/docs/scripting/functions/IsActorInvulnerable): Check if an actor is invulnerable.
-   [SetActorHealth](https://open.mp/docs/scripting/functions/SetActorHealth): Set the health of an actor.
