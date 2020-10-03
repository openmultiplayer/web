---
id: IsObjectMoving
title: IsObjectMoving
description: Checks if the given objectid is moving.
tags: []
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## Description

Checks if the given objectid is moving.

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| objectid | The objectid you want to check if is moving. |

## Returns

1 if the object is moving, 0 if not.

## Examples

```c
if(IsObjectMoving(objectid)) StopObject(objectid);
```

## Related Functions

- [MoveObject](../functions/MoveObject.md): Move an object.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [OnObjectMoved](../callbacks/OnObjectMoved.md): Called when an object stops moving.
