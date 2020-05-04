---
id: DestroyPlayerObject
title: DestroyPlayerObject
description: Destroy a player-object created using CreatePlayerObject.
tags: ["player"]
---

<TagLinks />

## Description

Destroy a player-object created using CreatePlayerObject.

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to destroy.                    |
| objectid | The ID of the player-object to destroy. Returned by CreatePlayerObject. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## Related Functions

- CreatePlayerObject: Create an object for only one player.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
- AttachPlayerObjectToPlayer: Attach a player object to a player.
- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- SetObjectRot: Set the rotation of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- AttachObjectToPlayer: Attach an object to a player.
