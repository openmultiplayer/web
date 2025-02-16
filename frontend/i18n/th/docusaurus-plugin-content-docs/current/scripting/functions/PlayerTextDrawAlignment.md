---
title: PlayerTextDrawAlignment
description: Set the text alignment of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Set the text alignment of a player-textdraw.

| Name      | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| playerid  | The ID of the player whose player-textdraw to set the alignment of. |
| Text:text | The ID of the player-textdraw to set the alignment of.              |
| alignment | 1-left 2-centered 3-right                                           |

## ส่งคืน

Note

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize.

## ตัวอย่าง

```c
new PlayerText:MyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    MyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, MyTextdraw[playerid], 2); // Align the textdraw in the center
    return 1;
}
```

## บันทึก

:::tip

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerTextDraw: Create a player-textdraw.
- PlayerTextDrawDestroy: Destroy a player-textdraw.
- PlayerTextDrawColor: Set the color of the text in a player-textdraw.
- PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
- PlayerTextDrawBackgroundColor: Set the background color of a player-textdraw.
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
