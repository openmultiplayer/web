---
title: IsPlayerObjectMoving
sidebar_label: IsPlayerObjectMoving
description: Checks if the given player objectid is moving.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## คำอธิบาย

Checks if the given player objectid is moving.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | The ID of the player whose player-object is checked. |
| objectid | The player objectid you want to check if is moving.  |

## ส่งคืน

1 if the player object is moving, 0 if not.

## ตัวอย่าง

```c
if (IsPlayerObjectMoving(playerid, objectid))
{
	StopPlayerObject(playerid, objectid);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreatePlayerObject](../../scripting/functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../../scripting/functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../../scripting/functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../../scripting/functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../../scripting/functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../../scripting/functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../../scripting/functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../../scripting/functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../../scripting/functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [IsObjectMoving](../../scripting/functions/IsObjectMoving.md): Check if the object is moving.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../../scripting/functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../../scripting/functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../../scripting/functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../../scripting/functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../../scripting/functions/AttachObjectToPlayer.md): Attach an object to a player.
- [OnPlayerObjectMoved](../../scripting/callbacks/OnPlayerObjectMoved.md): Called when a player-object stops moving.
