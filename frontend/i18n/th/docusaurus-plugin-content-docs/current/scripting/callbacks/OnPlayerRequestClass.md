---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: Called when a player changes class at class selection (and when class selection first appears).
tags: ["player"]
---

## คำอธิบาย

Called when a player changes class at class selection (and when class selection first appears).

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | The ID of the player that changed class.                               |
| classid  | The ID of the current class being viewed (returned by AddPlayerClass). |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## บันทึก

:::tip

This callback is also called when a player presses F4.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddPlayerClass](../functions/AddPlayerClass): Add a class.
