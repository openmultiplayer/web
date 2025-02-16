---
title: LimitPlayerMarkerRadius
description: Set the player marker radius.
tags: ["player"]
---

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

- [ShowPlayerMarkers](../functions/ShowPlayerMarkers.md): Decide if the server should show markers on the radar.
- [SetPlayerMarkerForPlayer](../functions/SetPlayerMarkerForPlayer.md): Set a player's marker.
- [LimitGlobalChatRadius](../functions/LimitGlobalChatRadius.md): Limit the distance between players needed to see their chat.
