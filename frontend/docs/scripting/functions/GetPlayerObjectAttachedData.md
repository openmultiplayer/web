---
title: GetPlayerObjectAttachedData
sidebar_label: GetPlayerObjectAttachedData
description: Get the attachment data of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the attachment data of a player-object.

| Name           | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| playerid       | The ID of the player                                                    |
| objectid       | The ID of the player-object to get the attachment data of               |
| &parentVehicle | A variable in which to store the parentVehicle ID, passed by reference. |
| &parentObject  | A variable in which to store the parentObject ID, passed by reference.  |
| &parentPlayer  | A variable in which to store the parentPlayer ID, passed by reference.  |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new 
    parentVehicle,
    parentObject,
    parentPlayer;

GetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);
```

## Related Functions

- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): Get the attachment offset and rotation of a player-object.
- [GetObjectAttachedData](GetObjectAttachedData): Get the attachment data of a player-object.
