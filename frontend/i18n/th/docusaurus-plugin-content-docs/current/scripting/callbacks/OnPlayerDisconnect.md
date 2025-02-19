---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: This callback is called when a player disconnects from the server.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player disconnects from the server.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player that disconnected.            |
| reason   | The reason for the disconnection. See table below. |

## ส่งคืน

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s left the server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## บันทึก

:::tip

Some functions might not work correctly when used in this callback because the player is already disconnected when the callback is called. This means that you can't get unambiguous information from functions like GetPlayerIp and GetPlayerPos.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
