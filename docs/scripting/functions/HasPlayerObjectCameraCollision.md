---
title: "HasPlayerObjectCameraCollision | open.mp"
description: "Checks if a player-object has camera collision enabled (SetPlayerObjectNoCameraCollision)."
canonical: https://open.mp/docs/scripting/functions/HasPlayerObjectCameraCollision
language: en
---

# HasPlayerObjectCameraCollision

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a player-object has camera collision enabled. ([SetPlayerObjectNoCameraCollision](https://open.mp/docs/scripting/functions/SetPlayerObjectNoCameraCollision))

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| objectid | The ID of the object to check. |

## Returns

`true` - Player-object camera collision is enable.

`false` - Player-object camera collision is disable.

## Examples

```c
if (HasPlayerObjectCameraCollision(playerid, playerobjectid))
{
    printf("Player: %d  Object: %d  Camera collision: enable", playerid, playerobjectid);
}
else
{
    printf("Player: %d  Object: %d  Camera collision: disable", playerid, playerobjectid);
}
```

## Related Functions

-   [SetPlayerObjectNoCameraCollision](https://open.mp/docs/scripting/functions/SetPlayerObjectNoCameraCollision): Disable collisions between players' cameras and the specified object.
-   [HasObjectCameraCollision](https://open.mp/docs/scripting/functions/HasObjectCameraCollision): Checks if an object has camera collision enabled.
