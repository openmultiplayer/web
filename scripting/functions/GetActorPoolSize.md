---
title: GetActorPoolSize
description: Gets the highest actorid created on the server.
tags: []
---

# GetActorPoolSize

::: warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Gets the highest actorid created on the server.

| Name | Description |
| ---- | ----------- |


## Examples

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if(IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```

## Related Functions

- CreateActor: Create an actor (static NPC).
- IsValidActor: Check if actor id is valid.
- SetActorHealth: Set the health of an actor.
