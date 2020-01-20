---
title: IsValidPlayerObject
description: Checks if the given object ID is valid for the given player.
tags: ['player']
---

# IsValidPlayerObject

<TagLinks />

## Description

Checks if the given object ID is valid for the given player.


| Name | Description |
|------|-------------|
|playerid | The ID of the player whose player-object to validate.|
|objectid | The ID of the object to validate.|


## Returns

1 if the object exists, 0 if not.


## Examples


```c
// Check if an object is valid (exists) before we delete it
if(IsValidPlayerObject(playerid, objectid)) DestroyPlayerObject(playerid, objectid);
```


## Related Functions


-  CreatePlayerObject: Create an object for only one player.
-  DestroyPlayerObject: Destroy a player object.
-  MovePlayerObject: Move a player object.
-  StopPlayerObject: Stop a player object from moving.
-  SetPlayerObjectPos: Set the position of a player object.
-  SetPlayerObjectRot: Set the rotation of a player object.
-  GetPlayerObjectPos: Locate a player object.
-  GetPlayerObjectRot: Check the rotation of a player object.
-  AttachPlayerObjectToPlayer: Attach a player object to a player.
-  CreateObject: Create an object.
-  DestroyObject: Destroy an object.
-  IsValidObject: Checks if a certain object is vaild.
-  MoveObject: Move an object.
-  StopObject: Stop an object from moving.
-  SetObjectPos: Set the position of an object.
-  SetObjectRot: Set the rotation of an object.
-  GetObjectPos: Locate an object.
-  GetObjectRot: Check the rotation of an object.
-  AttachObjectToPlayer: Attach an object to a player.