---
title: IsPlayerObjectMoving
description: Checks if the given player objectid is moving.
tags: ['player']
---

# IsPlayerObjectMoving

<TagLinks />

::: warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## Description

Checks if the given player objectid is moving.


| Name | Description |
|------|-------------|
|playerid | The ID of the player whose player-object is checked.|
|objectid | The player objectid you want to check if is moving.|


## Returns

1 if the player object is moving, 0 if not.


## Examples


```c
if(IsPlayerObjectMoving(playerid, objectid)) StopPlayerObject(playerid, objectid);
```


## Related Functions


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
-  CreateObject: Create an object.
-  DestroyObject: Destroy an object.
-  IsValidObject: Checks if a certain object is vaild.
-  MoveObject: Move an object.
-  IsObjectMoving: Check if the object is moving.
-  StopObject: Stop an object from moving.
-  SetObjectPos: Set the position of an object.
-  SetObjectRot: Set the rotation of an object.
-  GetObjectPos: Locate an object.
-  GetObjectRot: Check the rotation of an object.
-  AttachObjectToPlayer: Attach an object to a player.
-  OnPlayerObjectMoved: Called when a player-object stops moving.