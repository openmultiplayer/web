---
title: IsValidPlayerObject
description: Checks if the given object ID is valid for the given player.
tags: ["player", "object", "playerobject"]
---

## Description

Checks if the given object ID is valid for the given player.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player whose player-object to validate. |
| objectid | The ID of the object to validate.                     |

## Returns

**true** if the object exists, **false** if not.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
	// Check if an object is valid (exists) before we delete it
	if (IsValidPlayerObject(playerid, gPlayerObject[playerid]))
	{
		DestroyPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
