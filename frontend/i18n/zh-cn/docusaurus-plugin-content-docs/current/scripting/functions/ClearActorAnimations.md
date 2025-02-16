---
title: ClearActorAnimations
sidebar_label: ClearActorAnimations
description: Clear any animations applied to an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Clear any animations applied to an actor.

| Name    | Description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| actorid | The ID of the actor (returned by [CreateActor](CreateActor)) to clear the animations for. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, false, false, false, false, 0); // Pay anim
    return 1;
}

// Somewhere else
ClearActorAnimations(gMyActor);
```

## Related Functions

- [ApplyActorAnimation](ApplyActorAnimation): Apply an animation to an actor.
