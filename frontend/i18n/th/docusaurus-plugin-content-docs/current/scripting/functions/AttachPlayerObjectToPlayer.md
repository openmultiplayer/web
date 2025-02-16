---
title: AttachPlayerObjectToPlayer
sidebar_label: AttachPlayerObjectToPlayer
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

- [CreatePlayerObject](../../scripting/functions/CreateObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MoveObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopObject.md): Stop a player object from moving.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [SetPlayerAttachedObject](../../scripting/functions/SetPlayerAttachedObject.md): Attach an object to a player
- [RemovePlayerAttachedObject](../../scripting/functions/RemovePlayerAttachedObject.md): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](../../scripting/functions/IsPlayerAttachedObjectSlotUsed.md): Check whether an object is attached to a player in a specified index
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move a object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
