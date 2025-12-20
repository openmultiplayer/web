---
title: HasPlayerObjectCameraCollision
sidebar_label: HasPlayerObjectCameraCollision
description: Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a player-object has camera collision enabled. ([SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision))

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player.          |
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

- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Disable collisions between players' cameras and the specified object.
- [HasObjectCameraCollision](HasObjectCameraCollision): Checks if an object has camera collision enabled.
