---
title: GetMaxPlayers
sidebar_label: GetMaxPlayers
description: Returns the maximum number of players that can join the server, as set by the server variable 'maxplayers' in server.
tags: ["player"]
---

## คำอธิบาย

Returns the maximum number of players that can join the server, as set by the server variable 'maxplayers' in server.cfg.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
new str[128];
format(str, sizeof(str), "There are %i slots on this server!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, s);
```

## บันทึก

:::warning

This function can not be used in place of MAX_PLAYERS. It can not be used at compile time (e.g. for array sizes). MAX_PLAYERS should always be re-defined to what the 'maxplayers' var will be, or higher. See MAX_PLAYERS for more info.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerPoolSize](../functions/GetPlayerPoolSize): Gets the highest playerid connected to the server.
- [IsPlayerConnected](../functions/IsPlayerConnected): Check if a player is connected to the server.
