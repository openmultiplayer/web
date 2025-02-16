---
title: GetActorSkin
description: Get the skin of the actor.
tags: ["actor"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the skin of the actor.

| Name    | Description                 |
|---------|-----------------------------|
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

- [CreateActor](CreateActor): Create an actor (static NPC).
- [SetActorSkin](SetActorSkin): Set the skin of the actor.
