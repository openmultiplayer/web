---
title: ShowNameTags
sidebar_label: ShowNameTags
description: Toggle the drawing of nametags, health bars and armor bars above players.
tags: []
---

## คำอธิบาย

Toggle the drawing of nametags, health bars and armor bars above players.

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| enabled | 0 to disable, 1 to enable (enabled by default). |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // This will fully disable all player nametags
    // (including health and armour bars)
    ShowNameTags(0);
}
```

## บันทึก

:::warning

This function can only be used in OnGameModeInit. For other times, see ShowPlayerNameTagForPlayer.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- DisableNameTagLOS: Disable nametag Line-Of-Sight checking.
- ShowPlayerNameTagForPlayer: Show or hide a nametag for a certain player.
- ShowPlayerMarkers: Decide if the server should show markers on the radar.
