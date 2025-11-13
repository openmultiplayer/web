---
title: GetPlayerAttachedObject
sidebar_label: GetPlayerAttachedObject
description: Gets the player attachment object data by index.
tags: ["player", "object", "attachment"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player attachment object data by index.

| Name             | Description                             |
| ---------------- | --------------------------------------- |
| playerid         | The ID of the player whose data to get. |
| index            | The index (slot) to the object (0-9).   |
| &modelid         | Attached object model.                  |
| &bone            | Attached object bone.                   |
| &Float:offsetX   | X axis offset of the object.            |
| &Float:offsetY   | Y axis offset of the object.            |
| &Float:offsetZ   | Z axis offset of the object.            |
| &Float:rotationX | X axis rotation of the object.          |
| &Float:rotationY | Y axis rotation of the object.          |
| &Float:rotationZ | Z axis rotation of the object.          |
| &Float:scaleX    | X axis scale of the object.             |
| &Float:scaleY    | Y axis scale of the object.             |
| &Float:scaleZ    | Z axis scale of the object.             |
| &materialColour1 | Material colour 1 of the object.        |
| &materialColour2 | Material colour 2 of the object.        |

## Returns

Always returns true.

## Examples

```c
new
	modelid,
	bone,
	Float:offsetX, Float:offsetY, Float:offsetZ,
	Float:rotationX, Float:rotationY, Float:rotationZ,
	Float:scaleX, Float:scaleY, Float:scaleZ,
	materialColour1, materialColour2;

// Get the attached data of index 3
GetPlayerAttachedObject(playerid, 3, modelid, bone, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, materialColour1, materialColour2);
```

## Related Functions

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Attach an object to a player
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
- [EditAttachedObject](EditAttachedObject): Edit an attached object.
