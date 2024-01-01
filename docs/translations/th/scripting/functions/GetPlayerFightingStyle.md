---
title: GetPlayerFightingStyle
description: Get the fighting style the player currently using.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Get the fighting style the player currently using.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the fighting style of. |

## ส่งคืน

The ID of the fighting style of the player.

## ตัวอย่าง

```c
if (GetPlayerFightingStyle(playerid) == FIGHT_STYLE_NORMAL)
{
    SendClientMessage(playerid,0xFFFFFFAA,"You are using normal fighting style!");
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerFightingStyle](SetPlayerFightingStyle): Set a player's fighting style.
