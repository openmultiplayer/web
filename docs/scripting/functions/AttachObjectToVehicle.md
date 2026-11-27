---
title: "AttachObjectToVehicle | open.mp"
description: "Attach an object to a vehicle."
canonical: https://open.mp/docs/scripting/functions/AttachObjectToVehicle
language: en
---

# AttachObjectToVehicle

## Description

Attach an [object](https://open.mp/docs/scripting/functions/CreateObject) to a [vehicle](https://open.mp/docs/scripting/functions/CreateVehicle).

| Name | Description |
| --- | --- |
| objectid | The ID of the object to attach to the vehicle. Note that this is an object ID, not a model ID. The object must be [CreateObject](https://open.mp/docs/scripting/functions/CreateObject) created first. |
| parentid | The ID of the vehicle to attach the object to. |
| Float:offsetX | The X axis offset from the vehicle to attach the object to. |
| Float:offsetY | The Y axis offset from the vehicle to attach the object to. |
| Float:offsetZ | The Z axis offset from the vehicle to attach the object to. |
| Float:rotationX | The X rotation offset for the object. |
| Float:rotationY | The Y rotation offset for the object. |
| Float:rotationZ | The Z rotation offset for the object. |

## Returns

This function does not return any specific values.

## Examples

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## Notes

note

The object must be [created](https://open.mp/docs/scripting/functions/CreateObject) first.

warning

When the vehicle is [destroyed](https://open.mp/docs/scripting/functions/DestroyVehicle) or respawned, the attached objects won't be destroyed with it; they will remain stationary at the position the vehicle disappeared and be reattached to the next vehicle to claim the vehicle ID that the objects were attached to.

## Related Functions

-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
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
