---
title: GetPlayerCustomSkin
description: Returns the class of the players custom skin downloaded from the server.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

:::

## คำอธิบาย

Returns the class of the players custom skin downloaded from the server.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The player you want to get the skin from |

## ส่งคืน

The custom skin id that was specified in AddCharModel newid

## ตัวอย่าง

```c
playerskin = GetPlayerCustomSkin(playerid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerSkin](../functions/GetPlayerSkin): Get a player's current skin.
- [SetPlayerSkin](../functions/SetPlayerSkin): Set a player's skin.
