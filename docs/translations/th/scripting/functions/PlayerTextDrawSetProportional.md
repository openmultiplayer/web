---
title: PlayerTextDrawSetProportional
description: Appears to scale text spacing to a proportional ratio.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Appears to scale text spacing to a proportional ratio. Useful when using PlayerTextDrawLetterSize to ensure the text has even character spacing.

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| playerid | The ID of the player whose player-textdraw to set the proportionality of |
| text     | The ID of the player-textdraw to set the proportionality of              |
| set      | 1 to enable proportionality, 0 to disable.                               |

## ส่งคืน

This function does not return any specific values.

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
- PlayerTextDrawSetOutline: Toggle the outline on a player-textdraw.
- PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawSetString: Set the text of a player-textdraw.
- PlayerTextDrawShow: Show a player-textdraw.
- PlayerTextDrawHide: Hide a player-textdraw.
