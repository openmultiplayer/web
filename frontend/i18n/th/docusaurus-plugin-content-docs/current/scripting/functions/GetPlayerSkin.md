---
title: GetPlayerSkin
sidebar_label: GetPlayerSkin
description: Returns the class of the players skin.
tags: ["player"]
---

## คำอธิบาย

Returns the class of the players skin

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The player you want to get the skin from |

## ส่งคืน

The skin id (0 if invalid)

## ตัวอย่าง

```c
playerskin = GetPlayerSkin(playerid);
```

## บันทึก

:::tip

Returns the new skin after SetSpawnInfo is called but before the player actually respawns to get the new skin. Returns the old skin if the player was spawned through SpawnPlayer function.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerSkin: Set a player's skin.
