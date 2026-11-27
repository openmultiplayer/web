---
title: "GetPlayerCameraUpVector | open.mp"
description: "This function returns the vector, that points to the upside of the camera's view, or, in other words, to the middle top of your screen."
canonical: https://open.mp/docs/scripting/functions/GetPlayerCameraUpVector
language: en
---

# GetPlayerCameraUpVector

## Description

This function returns the vector, that points to the upside of the camera's view, or, in other words, to the middle top of your screen.

| Name | Description |
| --- | --- |
| playerid | The ID of the player you want to obtain the camera upvector of |
| Float:x | A float to store the X coordinate, passed by reference. |
| Float:y | A float to store the Y coordinate, passed by reference. |
| Float:z | A float to store the Z coordinate, passed by reference. |

## Returns

The position is stored in the specified variables.

## Notes

warning

This function was removed in SA-MP version 0.3b

## Related Functions

-   [GetPlayerCameraPos](https://open.mp/docs/scripting/functions/GetPlayerCameraPos): Find out where the player's camera is.
-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector
