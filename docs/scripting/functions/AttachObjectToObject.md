---
id: AttachObjectToObject
title: AttachObjectToObject
description: You can use this function to attach objects to other objects.
tags: []
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## Description

You can use this function to attach objects to other objects. The objects will folow the main object.

| Name          | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| objectid      | The object to attach to another object.                                 |
| attachtoid    | The object to attach the object to.                                     |
| Float:OffsetX | The distance between the main object and the object in the X direction. |
| Float:OffsetY | The distance between the main object and the object in the Y direction. |
| Float:OffsetZ | The distance between the main object and the object in the Z direction. |
| Float:RotX    | The X rotation between the object and the main object.                  |
| Float:RotY    | The Y rotation between the object and the main object.                  |
| Float:RotZ    | The Z rotation between the object and the main object.                  |
| SyncRotation  | If set to 0, objectid's rotation will not change with attachtoid's.     |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists.

## Examples

```c
new objectid = CreateObject(...);
new attachtoid = CreateObject(...);

AttachObjectToObject(objectid, attachtoid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Notes

:::tip

Both objects need to be created before attempting to attach them.
There is no player-object version of this function (AttachPlayerObjectToObject), meaning it will not be supported by streamers.

:::

## Related Functions

- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
- [AttachObjectToVehicle](../functions/AttachObjectToVehicle.md): Attach an object to a vehicle.
- [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../functions/CreateObject.md): Create an object.
- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject.md): Move an object.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
