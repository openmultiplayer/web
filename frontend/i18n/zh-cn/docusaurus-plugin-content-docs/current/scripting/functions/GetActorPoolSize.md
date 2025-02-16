---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: Gets the highest actorid created on the server.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Gets the highest actorid created on the server.  Note that in SA:MP this function is broken and will return `0` even when there are no actors.  fixes.inc and open.mp correct this to return `-1`, but also deprecate the function in favour of `MAX_ACTORS` or `foreach`.

## Examples

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
- [IsValidActor](isValidActor): Check if actor id is valid.
- [SetActorHealth](SetActorHealth): Set the health of an actor.
