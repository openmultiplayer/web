---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: This callback is called when a player is streamed out from some other player's client.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player is streamed out from some other player's client.

| Name        | Description                                     |
| ----------- | ----------------------------------------------- |
| playerid    | The player who has been destreamed.             |
| forplayerid | The player who has destreamed the other player. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
