---
id: SetPlayerObjectPos
title: SetPlayerObjectPos
description: Sets the position of a player-object to the specified coordinates.
tags: ["player"]
---

## Description

Sets the position of a player-object to the specified coordinates.

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to set the position of.                    |
| objectid | The ID of the player-object to set the position of. Returned by CreatePlayerObject. |
| Float:X  | The X coordinate to put the object at.                                              |
| Float:Y  | The Y coordinate to put the object at.                                              |
| Float:Z  | The Z coordinate to put the object at.                                              |

## Returns

1: The function executed successfully.

0: The function failed to execute. Player and/or object do not exist.

## Examples

```c
new obj = CreatePlayerObject(...);

// Later on

SetPlayerObjectPos(playerid, obj, 2001.195679, 1547.113892, 14.283400);
```

## Related Functions

- [CreatePlayerObject](../../scripting/functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
