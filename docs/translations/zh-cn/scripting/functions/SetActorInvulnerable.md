---
title: SetActorInvulnerable
description: Toggle an actor's invulnerability.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Toggle an actor's invulnerability.

| Name              | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| actorid           | The ID of the actor to set invulnerability.                        |
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

:::warning

Once set invulnerable, the actor does not call [OnPlayerGiveDamageActor](OnPlayerGiveDamageActor). Players will have actor's invulnerability state changed only when it is restreamed to them.

:::

## Related Functions

- [IsActorInvulnerable](IsActorInvulnerable): Check if an actor is invulnerable.
