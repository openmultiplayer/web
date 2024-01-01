---
title: LimitPlayerMarkerRadius
description: Set the player marker radius.
tags: ["player"]
---

:::warning

This Function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Set the player marker radius.

| Name                | Description                          |
| ------------------- | ------------------------------------ |
| Float:marker_radius | The radius that markers will show at |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ShowPlayerMarkers](ShowPlayerMarkers): Decide if the server should show markers on the radar.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Set a player's marker.
- [LimitGlobalChatRadius](LimitGlobalChatRadius): Limit the distance between players needed to see their chat.
