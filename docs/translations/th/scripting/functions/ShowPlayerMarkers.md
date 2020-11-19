---
title: ShowPlayerMarkers
description: Toggles player markers (blips on the radar).
tags: ["player"]
---

## คำอธิบาย

Toggles player markers (blips on the radar). Must be used when the server starts (OnGameModeInit). For other times, see SetPlayerMarkerForPlayer.

| Name | Description                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| mode | The [mode](#marker-modes) to use for markers. They can be streamed, meaning they are only visible to nearby players. See table below. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // Player markers only visible to nearby players
    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);
}
```

## Marker Modes

| ID  | MODE                         |
| --- | ---------------------------- |
| 0   | PLAYER_MARKERS_MODE_OFF      |
| 1   | PLAYER_MARKERS_MODE_GLOBAL   |
| 2   | PLAYER_MARKERS_MODE_STREAMED |

## บันทึก

:::tip

It is also possible to set a player's color to a color that has full transparency (no alpha value). This makes it possible to show markers on a per-player basis.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerMarkerForPlayer: Set a player's marker.
- LimitPlayerMarkerRadius: Limit the player marker radius.
- ShowNameTags: Set nametags on or off.
- SetPlayerColor: Set a player's color.
