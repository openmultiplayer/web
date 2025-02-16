---
title: PlayerTextDrawColor
sidebar_label: PlayerTextDrawColor
description: Sets the text color of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Sets the text color of a player-textdraw

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| playerid | The ID of the player who's textdraw to set the color of |
| text     | The TextDraw to change.                                 |
| color    | The color in hexadecimal format.                        |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");
    PlayerTextDrawColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Red text
    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```

## บันทึก

:::tip

You can also use Gametext colors in textdraws. The textdraw must be re-shown to the player in order to update the color.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerTextDraw: Create a player-textdraw.
- PlayerTextDrawDestroy: Destroy a player-textdraw.
- PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
- PlayerTextDrawBackgroundColor: Set the background color of a player-textdraw.
- PlayerTextDrawAlignment: Set the alignment of a player-textdraw.
- PlayerTextDrawFont: Set the font of a player-textdraw.
- PlayerTextDrawLetterSize: Set the letter size of the text in a player-textdraw.
- PlayerTextDrawTextSize: Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- PlayerTextDrawSetOutline: Toggle the outline on a player-textdraw.
- PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
- PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawSetString: Set the text of a player-textdraw.
- PlayerTextDrawShow: Show a player-textdraw.
- PlayerTextDrawHide: Hide a player-textdraw.
