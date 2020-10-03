---
id: SetActorPos
title: SetActorPos
description: Set the position of an actor.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Set the position of an actor.

| Name    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| actorid | The ID of the actor to set the position of. Returned by CreateActor. |
| X       | The X coordinate to position the actor at.                           |
| Y       | The Y coordinate to position the actor at.                           |
| Z       | The Z coordinate to position the actor at.                           |

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
SetActorPos(MyActor, 1.0, 2.0, 3.0);
```

## Notes

:::tip

When creating an actor with CreateActor, you specify it's position. You do not need to use this function unless you want to change its position later.

:::

## Related Functions

- [GetActorPos](GetActorPos.md): Get the position of an actor.
- [CreateActor](CreateActor.md): Create an actor (static NPC).
