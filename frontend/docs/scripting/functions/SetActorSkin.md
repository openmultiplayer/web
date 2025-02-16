---
title: SetActorSkin
sidebar_label: SetActorSkin
description: Set the skin of the actor.
tags: ["actor"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Set the skin of the actor.

| Name    | Description                     |
|---------|---------------------------------|
| actorid | The ID of the actor to set.     |
| skin    | The ID of the skin to give them |

## Returns

**true** - Success.

**false** - Failure (i.e. Actor is not created/valid).

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    SetActorSkin(gMyActor, 270); // Change actor skin from 179 to 270
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
- [GetActorSkin](GetActorSkin): Get the skin of the actor.
