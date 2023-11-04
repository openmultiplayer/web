---
title: OnObjectMoved
description: This callback is called when an object is moved after MoveObject (when it stops moving).
tags: []
---

## Description

This callback is called when an object is moved after [MoveObject](../functions/MoveObject) (when it stops moving).

| Name     | Description                         |
| -------- | ----------------------------------- |
| objectid | The ID of the object that was moved |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnObjectMoved(objectid)
{
    printf("Object %d finished moving.", objectid);
    return 1;
}
```

## Notes

:::tip

[SetObjectPos](../functions/SetObjectPos) does not work when used in this callback. To fix it, recreate the object.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerObjectMoved](OnPlayerObjectMoved): This callback is called when a player-object stops moving.

## Related Functions

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [MoveObject](../functions/MoveObject): Move an object.
- [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
- [IsObjectMoving](../functions/IsObjectMoving): Check if the object is moving.
- [StopObject](../functions/StopObject): Stop an object from moving.
