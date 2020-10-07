---
id: GetActorPoolSize
title: GetActorPoolSize
description: Gets the highest actorid created on the server.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Gets the highest actorid created on the server.

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
