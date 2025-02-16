---
title: SetActorFacingAngle
sidebar_label: SetActorFacingAngle
description: Set the facing angle of an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Set the facing angle of an actor.

| Name        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| actorid     | The ID of the actor to set the facing angle of. Returned by CreateActor. |
| Float:angle | The facing angle to set for the actor.                                   |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

## Examples

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(38, 0.0, 0.0, 3.0, 90.0);
    return 1;
}

// Somewhere else
SetActorFacingAngle(MyActor, 180.0);
```

## Notes

:::tip

When creating an actor with [CreateActor](CreateActor), you specify it's facing angle. You do not need to use this function unless you want to change its facing angle later.

:::

:::warning

Players will see actor's facing angle changed only when it is restreamed to them.

:::

## Related Functions

- [GetActorFacingAngle](GetActorFacingAngle): Get the facing angle of an actor.
- [SetActorPos](SetActorPos): Set the position of an actor.
