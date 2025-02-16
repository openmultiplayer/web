---
title: HasObjectCameraCollision
sidebar_label: HasObjectCameraCollision
description: Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if an object has camera collision enabled. ([SetObjectNoCameraCollision](SetObjectNoCameraCollision))

| Name     | Description                    |
|----------|--------------------------------|
| objectid | The ID of the object to check. |

## Returns

`true` - Object camera collision is enable.

`false` - Object camera collision is disable.

## Examples

```c
if (HasObjectCameraCollision(objectid))
{
    printf("Object %d camera collision: enable", objectid);
}
else
{
    printf("Object %d camera collision: disable", objectid);
}
```

## Related Functions

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Disable collisions between players' cameras and the specified object.
- [HasPlayerObjectCameraCollision](HasPlayerObjectCameraCollision): Checks if a player-object has camera collision enabled.
