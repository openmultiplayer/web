---
title: IsValidObject
description: Checks if an object with the ID provided exists.
tags: []
---

## คำอธิบาย

Checks if an object with the ID provided exists.

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| objectid | The ID of the object to check the existence of. |

## ส่งคืน

1: The object exists.

0: The object does not exist.

## ตัวอย่าง

```c
if (IsValidObject(objectid))
{
	DestroyObject(objectid);
}
```

## บันทึก

:::warning

This is to check if an object exists, not if a model is valid.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
- [CreatePlayerObject](../../scripting/functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
