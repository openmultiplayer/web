---
title: "OnPlayerObjectMoved | open.mp"
description: "This callback is called when a player object is moved after MovePlayerObject (when it stops moving)."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerObjectMoved
language: en
---

# OnPlayerObjectMoved

## Description

This callback is called when a player object is moved after [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject) (when it stops moving).

| Name | Description |
| --- | --- |
| playerid | The playerid the object is assigned to |
| objectid | The ID of the player object that was moved |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnObjectMoved](https://open.mp/docs/scripting/callbacks/OnObjectMoved): This callback is called when an object stops moving.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [IsPlayerObjectMoving](https://open.mp/docs/scripting/functions/IsPlayerObjectMoving): Check if the player object is moving.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
