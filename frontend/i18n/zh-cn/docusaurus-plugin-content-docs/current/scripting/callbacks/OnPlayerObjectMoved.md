---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
tags: ["player", "object", "playerobject"]
---

## Description

This callback is called when a player object is moved after [MovePlayerObject](../functions/MovePlayerObject) (when it stops moving).

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The playerid the object is assigned to     |
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

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnObjectMoved](OnObjectMoved): This callback is called when an object stops moving.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Check if the player object is moving.
- [StopPlayerObject](../functions/StopPlayerObject): Stop a player object from moving.
- [CreatePlayerObject](../functions/CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destroy a player object.
