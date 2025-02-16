---
title: OnPlayerStreamIn
description: This callback is called when a player is streamed by some other player's client.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player is streamed by some other player's client.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the player who has been streamed.             |
| forplayerid | The ID of the player that streamed the other player in. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
