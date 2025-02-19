---
title: GetActorPos
sidebar_label: GetActorPos
description: Get the position of an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the position of an actor.

| Name     | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| actorid  | The ID of the actor to get the position of. Returned by CreateActor.                    |
| &Float:x | A float variable, passed by reference, in which to store the X coordinate of the actor. |
| &Float:y | A float variable, passed by reference, in which to store the Y coordinate of the actor. |
| &Float:z | A float variable, passed by reference, in which to store the Z coordinate of the actor. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The actor specified does not exist.

The actor's position is stored in the specified variables.

## Examples

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

## Related Functions

- [SetActorPos](SetActorPos): Set the position of an actor.
