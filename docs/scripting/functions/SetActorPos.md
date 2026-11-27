---
title: "SetActorPos | open.mp"
description: "Set the position of an actor."
canonical: https://open.mp/docs/scripting/functions/SetActorPos
language: en
---

# SetActorPos

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Set the position of an actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to set the position of. Returned by [CreateActor](https://open.mp/docs/scripting/functions/CreateActor). |
| Float:x | The X coordinate to position the actor at. |
| Float:y | The Y coordinate to position the actor at. |
| Float:z | The Z coordinate to position the actor at. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(24, 2050.7544, -1920.0621, 13.5485, -180.0);
    return 1;
}

// Somewhere else
SetActorPos(gMyActor, 2062.2332, -1908.1423, 13.5485);
```

## Notes

note

When creating an actor with [CreateActor](https://open.mp/docs/scripting/functions/CreateActor), you specify it's position. You do not need to use this function unless you want to change its position later.

## Related Functions

-   [GetActorPos](https://open.mp/docs/scripting/functions/GetActorPos): Get the position of an actor.
-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
