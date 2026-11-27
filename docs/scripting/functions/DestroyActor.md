---
title: "DestroyActor | open.mp"
description: "Destroy an actor which was created with CreateActor."
canonical: https://open.mp/docs/scripting/functions/DestroyActor
language: en
---

# DestroyActor

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Destroy an actor which was created with [CreateActor](https://open.mp/docs/scripting/functions/CreateActor).

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to destroy. Returned by [CreateActor](https://open.mp/docs/scripting/functions/CreateActor). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The actor with the ID specified does not exist.

## Examples

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## Related Functions

-   [CreateActor](https://open.mp/docs/scripting/functions/CreateActor): Create an actor (static NPC).
