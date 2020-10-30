---
title: MovePlayerObject
description: Move a player object with a set speed.
tags: ["player"]
---

## คำอธิบาย

Move a player object with a set speed. Also supports rotation. Players/vehicles will surf moving objects.

| Name        | Description                                       |
| ----------- | ------------------------------------------------- |
| playerid    | The ID of the player whose player-object to move. |
| objectid    | The ID of the object to move.                     |
| Float:X     | The X coordinate to move the object to.           |
| Float:Y     | The Y coordinate to move the object to.           |
| Float:Z     | The Z coordinate to move the object to.           |
| Float:Speed | The speed at which to move the object.            |
| Float:RotX  | The final X rotation (optional).                  |
| Float:RotY  | The final Y rotation (optional).                  |
| Float:RotZ  | The final Z rotation (optional).                  |
| playerid    | The player you associated this object to.         |
| objectid    | The objectid you want to move.                    |
| Float:X     | The new X coordinate.                             |
| Float:Y     | The new Y coordinate.                             |
| Float:Z     | The new Z coordinate.                             |
| Float:Speed | The speed at which to move the object.            |

## ส่งคืน

The time it will take for the object to move in milliseconds.

## ตัวอย่าง

```c
MovePlayerObject(playerid, objectid, 2001.195679, 1547.113892, 10);
```

## บันทึก

:::tip

If using the rotation parameters, the object must be moved (X/Y/Z). The object will interpolate the rotation from when the objects starts moving and when it stops. The parameters below are for 0.3d R2 and older versions and should be ignored if you run the latest version of SA-MP.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [IsObjectMoving](../functions/IsObjectMoving.md): Check if the object is moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../functions/CreateObject.md): Create an object.
- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject.md): Move an object.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving.md): Check if the player object is moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
