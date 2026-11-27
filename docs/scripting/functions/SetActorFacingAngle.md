---
title: "SetActorFacingAngle | open.mp"
description: "Set the facing angle of an actor."
canonical: https://open.mp/docs/scripting/functions/SetActorFacingAngle
language: en
---

# SetActorFacingAngle

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Set the facing angle of an actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to set the facing angle of. Returned by [CreateActor](https://open.mp/docs/scripting/functions/CreateActor). |
| Float:angle | The facing angle to set for the actor. |

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

note

When creating an actor with [CreateActor](https://open.mp/docs/scripting/functions/CreateActor), you specify it's facing angle. You do not need to use this function unless you want to change its facing angle later.

warning

Players will see actor's facing angle changed only when it is restreamed to them.

## Related Functions

-   [GetActorFacingAngle](https://open.mp/docs/scripting/functions/GetActorFacingAngle): Get the facing angle of an actor.
-   [SetActorPos](https://open.mp/docs/scripting/functions/SetActorPos): Set the position of an actor.
