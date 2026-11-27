---
title: "HasObjectCameraCollision | open.mp"
description: "Checks if an object has camera collision enabled (SetObjectNoCameraCollision)."
canonical: https://open.mp/docs/scripting/functions/HasObjectCameraCollision
language: en
---

# HasObjectCameraCollision

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if an object has camera collision enabled. ([SetObjectNoCameraCollision](https://open.mp/docs/scripting/functions/SetObjectNoCameraCollision))

| Name | Description |
| --- | --- |
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

-   [SetObjectNoCameraCollision](https://open.mp/docs/scripting/functions/SetObjectNoCameraCollision): Disable collisions between players' cameras and the specified object.
-   [HasPlayerObjectCameraCollision](https://open.mp/docs/scripting/functions/HasPlayerObjectCameraCollision): Checks if a player-object has camera collision enabled.
