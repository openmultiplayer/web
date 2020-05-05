---
id: SetActorFacingAngle
title: SetActorFacingAngle
description: Set the facing angle of an actor.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Set the facing angle of an actor.


| Name | Description |
|------|-------------|
|actorid | The ID of the actor to set the facing angle of. Returned by CreateActor.|
|ang | The facing angle to set for the actor.|


## Returns

 1: The function was executed successfully. 

 0: The function failed to execute. The actor specified does not exist.


## Examples


```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    return 1;
}

// Somewhere else
SetActorFacingAngle(MyActor, 180.0);
```


## Notes

:::tip

When creating an actor with CreateActor, you specify it's facing angle. You do not need to use this function unless you want to change its facing angle later.

:::


:::warning

Players will see actor's facing angle changed only when it is restreamed to them.

:::


## Related Functions


-  GetActorFacingAngle: Get the facing angle of an actor.
-  SetActorPos: Set the position of an actor.