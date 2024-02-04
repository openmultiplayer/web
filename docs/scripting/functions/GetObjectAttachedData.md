---
title: GetObjectAttachedData
description: Get the attachment data of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the attachment data of an object.

| Name           | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| objectid       | The ID of the object to get the attachment data of                      |
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

GetObjectAttachedData(objectid, parentVehicle, parentObject, parentPlayer);
```

## Related Functions

- [GetObjectAttachedOffset](GetObjectAttachedOffset): Get the attachment offset and rotation of an object.
- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): Get the attachment data of a player-object.
