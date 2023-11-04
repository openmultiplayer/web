---
title: OnPlayerObjectMoved
description: This callback is called when a player object is moved after MovePlayerObject (when it stops moving).
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player object is moved after MovePlayerObject (when it stops moving).

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The playerid the object is assigned to     |
| objectid | The ID of the player object that was moved |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## บันทึก

:::tip

This callback can also be called for NPC.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Check if the player object is moving.
- [StopPlayerObject](../functions/StopPlayerObject): Stop a player object from moving.
- [CreatePlayerObject](../functions/CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destroy a player object.
