---
id: OnPlayerObjectMoved
title: OnPlayerObjectMoved
description: This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
tags: ["player"]
---

<TagLinks />

## Description

This callback is called when a player object is moved after MovePlayerObject (when it stops moving).

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The playerid the object is assigned to     |
| objectid | The ID of the player object that was moved |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerObjectMoved(playerid,objectid)
{
    printf("Player object moved: objectid: %d playerid: %d",objectid,playerid);
    return 1;
}
```

## Notes

:::tip

This callback can also be called for NPC.

:::

## Related Functions

- MovePlayerObject: Move a player object.
- IsPlayerObjectMoving: Check if the player object is moving.
- StopPlayerObject: Stop a player object from moving.
- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
