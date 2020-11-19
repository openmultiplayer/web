---
title: OnPlayerConnect
description: This callback is called when a player connects to the server.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player connects to the server.

| Name     | Description                          |
| -------- | ------------------------------------ |
| playerid | The ID of the player that connected. |

## ส่งคืน

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s has joined the server. Welcome!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
