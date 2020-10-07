---
id: GetPlayerPing
title: GetPlayerPing
description: Get the ping of a player.
tags: ["player"]
---

## คำอธิบาย

Get the ping of a player. The ping measures the amount of time it takes for the server to 'ping' the client and for the client to send the message back.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player to get the ping of. |

## ส่งคืน

The current ping of the player (expressed in milliseconds).

## ตัวอย่าง

```c
public pingchecktimer(playerid)
{
    // Kick players with a high ping
    if(GetPlayerPing(playerid) > 1000) Kick(playerid);
    return 1;
}
```

## บันทึก

:::warning

Player's ping may be 65535 for a while after a player connects

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerIp: Get a player's IP.
- GetPlayerName: Get a player's name.
- GetPlayerVersion: Get a player's client-version.
