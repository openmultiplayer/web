---
title: "AttachObjectToObject | open.mp"
description: "You can use this function to attach objects to other objects."
canonical: https://open.mp/docs/scripting/functions/AttachObjectToObject
language: en
---

# AttachObjectToObject

## Description

You can use this function to attach objects to other objects. The objects will follow the main object.

| Name | Description |
| --- | --- |
| objectid | The object to attach to another object. |
| parentid | The object to attach the object to. |
| Float:offsetX | The distance between the main object and the object in the X direction. |
| Float:offsetY | The distance between the main object and the object in the Y direction. |
| Float:offsetZ | The distance between the main object and the object in the Z direction. |
| Float:rotationX | The X rotation between the object and the main object. |
| Float:rotationY | The Y rotation between the object and the main object. |
| Float:rotationZ | The Z rotation between the object and the main object. |
| bool:syncRotation | If set to `false`, objectid's rotation will not change with attachtoid's. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists.

## Examples

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## Notes

note

-   Both objects need to be [created](https://open.mp/docs/scripting/functions/CreateObject) before attempting to attach them.
-   There is no player-object version of this function in SA-MP. But there is [AttachPlayerObjectToObject](https://open.mp/docs/scripting/functions/AttachPlayerObjectToObject) in open.mp

## Related Functions

-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
-   [AttachObjectToVehicle](https://open.mp/docs/scripting/functions/AttachObjectToVehicle): Attach an object to a vehicle.
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
