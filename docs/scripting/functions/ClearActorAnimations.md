---
title: "ClearActorAnimations | open.mp"
description: "Clear any animations applied to an actor."
canonical: https://open.mp/docs/scripting/functions/ClearActorAnimations
language: en
---

# ClearActorAnimations

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Clear any animations applied to an actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor (returned by [CreateActor](https://open.mp/docs/scripting/functions/CreateActor)) to clear the animations for. |

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

-   [ApplyActorAnimation](https://open.mp/docs/scripting/functions/ApplyActorAnimation): Apply an animation to an actor.
