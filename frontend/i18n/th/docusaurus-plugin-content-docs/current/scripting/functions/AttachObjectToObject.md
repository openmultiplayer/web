---
title: AttachObjectToObject
sidebar_label: AttachObjectToObject
description: You can use this function to attach objects to other objects.
tags: []
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## คำอธิบาย

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

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists.

## ตัวอย่าง

```c
new objectid = CreateObject(...);
new attachtoid = CreateObject(...);

AttachObjectToObject(objectid, attachtoid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## บันทึก

:::tip

Both objects need to be created before attempting to attach them. There is no player-object version of this function (AttachPlayerObjectToObject), meaning it will not be supported by streamers.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
- [AttachObjectToVehicle](../../scripting/functions/AttachObjectToVehicle.md): Attach an object to a vehicle.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [CreatePlayerObject](../../scripting/functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
