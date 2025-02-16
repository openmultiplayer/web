---
title: PlayerTextDrawTextSize
sidebar_label: PlayerTextDrawTextSize
description: Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).

| Name     | Description                                                                            |
| -------- | -------------------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the size of                          |
| text     | The ID of the player-textdraw to set the size of.                                      |
| Float:x  | The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate. |
| Float:y  | The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate.    |

## ส่งคืน

The x and y have different meanings with different PlayerTextDrawAlignment values: 1 (left): they are the right-most corner of the box, absolute coordinates. 2 (center): they need to inverted (switch the two) and the x value is the overall width of the box. 3 (right): the x and y are the coordinates of the left-most corner of the box

1 (left): they are the right-most corner of the box, absolute coordinates.

2 (center): they need to inverted (switch the two) and the x value is the overall width of the box.

3 (right): the x and y are the coordinates of the left-most corner of the box

Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets).

The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate).

This function defines the clickable area for use with PlayerTextDrawSetSelectable, whether a box is shown or not.

## ตัวอย่าง

```c
MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0, "Example TextDraw");
PlayerTextDrawTextSize(playerid, MyTextDraw, 2.0, 3.6);
```

## บันทึก

:::tip

The x and y have different meanings with different PlayerTextDrawAlignment values: 1 (left): they are the right-most corner of the box, absolute coordinates. 2 (center): they need to inverted (switch the two) and the x value is the overall width of the box. 3 (right): the x and y are the coordinates of the left-most corner of the box

Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets). The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate). This function defines the clickable area for use with PlayerTextDrawSetSelectable, whether a box is shown or not.

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
- PlayerTextDrawSetOutline: Toggle the outline on a player-textdraw.
- PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
- PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawSetString: Set the text of a player-textdraw.
- PlayerTextDrawShow: Show a player-textdraw.
- PlayerTextDrawHide: Hide a player-textdraw.
