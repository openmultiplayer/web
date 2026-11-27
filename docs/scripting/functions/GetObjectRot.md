---
title: "GetObjectRot | open.mp"
description: "Use this function to get the objects current rotation."
canonical: https://open.mp/docs/scripting/functions/GetObjectRot
language: en
---

# GetObjectRot

## Description

Use this function to get the objects current rotation. The rotation is saved by reference in three rotationX/rotationY/rotationZ variables.

| Name | Description |
| --- | --- |
| objectid | The objectid of the object you want to get the rotation from. |
| &Float:rotationX | The variable to store the X rotation, passed by reference. |
| &Float:rotationY | The variable to store the Y rotation, passed by reference. |
| &Float:rotationZ | The variable to store the Z rotation, passed by reference. |

## Returns

The object's rotation is stored in the referenced variables, not in the return value.

## Examples

```c
public OnGameModeInit()
{
    new objectid = CreateObject(652, 732.32690, 1940.21289, 4.27340, 357.00000, 0.00000, -76.00000);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetObjectRot(objectid, rotationX, rotationY, rotationZ);
    // rotationX = 357.00000
    // rotationY = 0.00000
    // rotationZ = -76.00000
    return 1;
}
```

## Related Functions

-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move an object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
-   [AttachPlayerObjectToPlayer](https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
