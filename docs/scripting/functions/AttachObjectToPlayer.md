---
title: "AttachObjectToPlayer | open.mp"
description: "Attach an object to a player."
canonical: https://open.mp/docs/scripting/functions/AttachObjectToPlayer
language: en
---

# AttachObjectToPlayer

## Description

Attach an object to a player.

| Name | Description |
| --- | --- |
| objectid | The ID of the object to attach to the player. |
| parentid | The ID of the player to attach the object to. |
| Float:offsetX | The distance between the player and the object in the X direction. |
| Float:offsetY | The distance between the player and the object in the Y direction. |
| Float:offsetZ | The distance between the player and the object in the Z direction. |
| Float:rotationX | The X rotation between the object and the player. |
| Float:rotationY | The Y rotation between the object and the player. |
| Float:rotationZ | The Z rotation between the object and the player. |

## Returns

This function always returns **false**.

## Examples

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## Related Functions

-   [AttachObjectToVehicle](https://open.mp/docs/scripting/functions/AttachObjectToVehicle): Attach an object to a vehicle.
-   [AttachObjectToObject](https://open.mp/docs/scripting/functions/AttachObjectToObject): Attach an object to an object.
-   [AttachPlayerObjectToPlayer](https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
