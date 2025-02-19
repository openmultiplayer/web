---
title: GetPlayerObjectAttachedOffset
sidebar_label: GetPlayerObjectAttachedOffset
description: Get the attachment offset and rotation of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the attachment offset and rotation of a player-object.

| Name             | Description                                                                       |
|------------------|-----------------------------------------------------------------------------------|
| playerid         | The ID of the player.                                                             |
| objectid         | The ID of the player-object to get the offset and rotation of.                    |
| &Float:offsetX   | A float variable in which to store the offsetX coordinate, passed by reference.   |
| &Float:offsetY   | A float variable in which to store the offsetY coordinate, passed by reference.   |
| &Float:offsetZ   | A float variable in which to store the offsetZ coordinate, passed by reference.   |
| &Float:rotationX | A float variable in which to store the rotationX coordinate, passed by reference. |
| &Float:rotationY | A float variable in which to store the rotationY coordinate, passed by reference. |
| &Float:rotationZ | A float variable in which to store the rotationZ coordinate, passed by reference. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new 
    Float:offsetX,
    Float:offsetY,
    Float:offsetZ,
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetPlayerObjectAttachedOffset(playerid, playerobjectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```

## Related Functions

- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): Get the attachment data of a player-object.
- [GetObjectAttachedOffset](GetObjectAttachedOffset): Get the attachment offset and rotation of an object.
