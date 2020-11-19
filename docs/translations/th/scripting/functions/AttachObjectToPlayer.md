---
title: AttachObjectToPlayer
description: Attach an object to a player.
tags: ["player"]
---

## คำอธิบาย

Attach an object to a player.

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| objectid      | The ID of the object to attach to the player.                      |
| playerid      | The ID of the player to attach the object to.                      |
| Float:OffsetX | The distance between the player and the object in the X direction. |
| Float:OffsetY | The distance between the player and the object in the Y direction. |
| Float:OffsetZ | The distance between the player and the object in the Z direction. |
| Float:RotX    | The X rotation between the object and the player.                  |
| Float:RotY    | The Y rotation between the object and the player.                  |
| Float:RotZ    | The Z rotation between the object and the player.                  |

## ส่งคืน

This function always returns 0.

## ตัวอย่าง

```c
new myobject;
myobject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(myobject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AttachObjectToVehicle](../../scripting/functions/AttachObjectToVehicle.md): Attach an object to a vehicle.
- [AttachObjectToObject](../../scripting/functions/AttachObjectToObject.md): Attach an object to an object.
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
