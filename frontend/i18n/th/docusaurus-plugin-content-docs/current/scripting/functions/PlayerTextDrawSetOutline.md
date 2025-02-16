---
title: PlayerTextDrawSetOutline
description: Set the outline of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Set the outline of a player-textdraw. The outline colour cannot be changed unless PlayerTextDrawBackgroundColor is used.

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the outline of |
| text     | The ID of the player-textdraw to set the outline of              |
| size     | The thickness of the outline.                                    |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0,"Example TextDraw");
PlayerTextDrawSetOutline(playerid, MyTextDraw, 1);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerTextDraw: Create a player-textdraw.
- PlayerTextDrawDestroy: Destroy a player-textdraw.
- PlayerTextDrawColor: Set the color of the text in a player-textdraw.
- PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
- PlayerTextDrawBackgroundColor: Set the background color of a player-textdraw.
- PlayerTextDrawAlignment: Set the alignment of a player-textdraw.
- PlayerTextDrawFont: Set the font of a player-textdraw.
- PlayerTextDrawLetterSize: Set the letter size of the text in a player-textdraw.
- PlayerTextDrawTextSize: Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
- PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawSetString: Set the text of a player-textdraw.
- PlayerTextDrawShow: Show a player-textdraw.
- PlayerTextDrawHide: Hide a player-textdraw.
