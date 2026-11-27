---
title: "OnObjectMoved | open.mp"
description: "This callback is called when an object is moved after MoveObject (when it stops moving)."
canonical: https://open.mp/docs/scripting/callbacks/OnObjectMoved
language: en
---

# OnObjectMoved

## Description

This callback is called when an object is moved after [MoveObject](https://open.mp/docs/scripting/functions/MoveObject) (when it stops moving).

| Name | Description |
| --- | --- |
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

note

[SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos) does not work when used in this callback. To fix it, recreate the object.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerObjectMoved](https://open.mp/docs/scripting/callbacks/OnPlayerObjectMoved): This callback is called when a player-object stops moving.

## Related Functions

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [IsObjectMoving](https://open.mp/docs/scripting/functions/IsObjectMoving): Check if the object is moving.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
