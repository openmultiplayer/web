---
title: AttachPlayerObjectToPlayer
description: The same as AttachObjectToPlayer but for objects which were created for player.
tags: ["player"]
---

## คำอธิบาย

The same as AttachObjectToPlayer but for objects which were created for player.

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| objectplayer  | The id of the player which is linked with the object.              |
| objectid      | The objectid you want to attach to the player.                     |
| attachid      | The id of the player you want to attach to the object.             |
| Float:OffsetX | The distance between the player and the object in the X direction. |
| Float:OffsetY | The distance between the player and the object in the Y direction. |
| Float:OffsetZ | The distance between the player and the object in the Z direction. |
| Float:RotX    | The X rotation.                                                    |
| Float:RotY    | The Y rotation.                                                    |
| Float:RotZ    | The Z rotation.                                                    |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, 1.5, 0.5, 0, 0, 1.5, 2 );
```

## บันทึก

:::warning

This function was removed in SA-MP 0.3.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreatePlayerObject](CreateObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyObject): Destroy a player object.
- [IsValidPlayerObject](IsValidObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MoveObject): Move a player object.
- [StopPlayerObject](StopObject): Stop a player object from moving.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [SetPlayerAttachedObject](SetPlayerAttachedObject): Attach an object to a player
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move a object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
