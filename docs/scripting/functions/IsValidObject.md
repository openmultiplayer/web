---
id: IsValidObject
title: IsValidObject
description: Checks if an object with the ID provided exists.
tags: []
---

<TagLinks />

## Description

Checks if an object with the ID provided exists.


| Name | Description |
|------|-------------|
|objectid | The ID of the object to check the existence of.|


## Returns

 1: The object exists.

 0: The object does not exist.


## Examples


```c
if(IsValidObject(objectid)) DestroyObject(objectid);
```


## Notes

:::warning

This is to check if an object exists, not if a model is valid.

:::


## Related Functions


-  CreateObject: Create an object.
-  DestroyObject: Destroy an object.
-  MoveObject: Move an object.
-  StopObject: Stop an object from moving.
-  SetObjectPos: Set the position of an object.
-  SetObjectRot: Set the rotation of an object.
-  GetObjectPos: Locate an object.
-  GetObjectRot: Check the rotation of an object.
-  AttachObjectToPlayer: Attach an object to a player.
-  CreatePlayerObject: Create an object for only one player.
-  DestroyPlayerObject: Destroy a player object.
-  IsValidPlayerObject: Checks if a certain player object is vaild.
-  MovePlayerObject: Move a player object.
-  StopPlayerObject: Stop a player object from moving.
-  SetPlayerObjectPos: Set the position of a player object.
-  SetPlayerObjectRot: Set the rotation of a player object.
-  GetPlayerObjectPos: Locate a player object.
-  GetPlayerObjectRot: Check the rotation of a player object.
-  AttachPlayerObjectToPlayer: Attach a player object to a player.