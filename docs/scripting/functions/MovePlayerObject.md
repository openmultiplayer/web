---
title: "MovePlayerObject | open.mp"
description: "Move a player object with a set speed."
canonical: https://open.mp/docs/scripting/functions/MovePlayerObject
language: en
---

# MovePlayerObject

## Description

Move a [player object](https://open.mp/docs/scripting/functions/CreatePlayerObject) with a set speed. Also supports rotation. Players/vehicles will surf moving objects.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-object to move. |
| objectid | The ID of the object to move. |
| Float:targetX | The X coordinate to move the object to. |
| Float:targetY | The Y coordinate to move the object to. |
| Float:targetZ | The Z coordinate to move the object to. |
| Float:speed | The speed at which to move the object. |
| Float:rotationX | The final X rotation (optional). |
| Float:rotationY | The final Y rotation (optional). |
| Float:rotationZ | The final Z rotation (optional). |

## Returns

The time it will take for the object to move in milliseconds.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}
```

## Notes

note

If using the rotation parameters, the object must be moved (X/Y/Z). The object will interpolate the rotation from when the objects starts moving and when it stops.

## Related Functions

-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [IsObjectMoving](https://open.mp/docs/scripting/functions/IsObjectMoving): Check if the object is moving.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
-   [AttachPlayerObjectToPlayer](https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [IsPlayerObjectMoving](https://open.mp/docs/scripting/functions/IsPlayerObjectMoving): Check if the player object is moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
