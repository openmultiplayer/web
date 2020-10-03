---
id: OnObjectMoved
title: OnObjectMoved
description: This callback is called when an object is moved after MoveObject (when it stops moving).
tags: []
---

## Description

This callback is called when an object is moved after MoveObject (when it stops moving).

| Name     | Description                         |
| -------- | ----------------------------------- |
| objectid | The ID of the object that was moved |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnObjectMoved(objectid)
{
    printf("Object %d finished moving.",objectid);
    return 1;
}
```

## Notes

:::tip

SetObjectPos does not work when used in this callback. To fix it, recreate the object.

:::

## Related Functions

- [MoveObject](../functions/MoveObject.md): Move an object.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [IsObjectMoving](../functions/IsObjectMoving.md): Check if the object is moving.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved.md): Called when a player-object stops moving.
