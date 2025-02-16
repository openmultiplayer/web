---
title: PlayerTextDrawSetShadow
description: Adds a shadow to the bottom-right side of the text in a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Adds a shadow to the bottom-right side of the text in a player-textdraw. The shadow font matches the text font.

| Name     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the shadow size of. |
| text     | The ID of the player-textdraw to change the shadow of                 |
| size     | The size of the shadow. 0 will hide the shadow.                       |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player-textdraw doesn't exist.

## ตัวอย่าง

```c
new Text:MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0, "Example Text");
PlayerTextDrawSetShadow(playerid, MyTextDraw, 1);
```

## บันทึก

:::tip

The shadow can be cut by the box area if the size is set too big for the area.

:::

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
- PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawSetString: Set the text of a player-textdraw.
- PlayerTextDrawShow: Show a player-textdraw.
- PlayerTextDrawHide: Hide a player-textdraw.
