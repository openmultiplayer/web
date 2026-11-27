---
title: "GetActorFacingAngle | open.mp"
description: "Get the facing angle of an actor."
canonical: https://open.mp/docs/scripting/functions/GetActorFacingAngle
language: en
---

# GetActorFacingAngle

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Get the facing angle of an actor.

| Name | Description |
| --- | --- |
| actorid | The ID of the actor to get the facing angle of. Returned by [CreateActor](https://open.mp/docs/scripting/functions/CreateActor). |
| &Float:angle | A float variable, passed by reference, in to which the actor's facing angle will be stored. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

The actor's facing angle is stored in the specified variable.

## Examples

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```

## Related Functions

-   [SetActorFacingAngle](https://open.mp/docs/scripting/functions/SetActorFacingAngle): Set the facing angle of an actor.
-   [GetActorPos](https://open.mp/docs/scripting/functions/GetActorPos): Get the position of an actor.
