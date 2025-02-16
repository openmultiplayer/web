---
title: CreatePlayerTextDraw
description: Creates a textdraw for a single player.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Creates a textdraw for a single player. This can be used as a way around the global text-draw limit.

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| playerid | The ID of the player to create the textdraw for |
| Float:x  | X-Coordinate                                    |
| Float:y  | Y-Coordinate                                    |
| text[]   | The text in the textdraw.                       |

## ส่งคืน

The ID of the created textdraw

## ตัวอย่าง

```c
// This variable is used to store the id of the textdraw
// so that we can use it throught the script
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my SA-MP server");

    // Now show it
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
}
```

## บันทึก

:::tip

Player-textdraws are automatically destroyed when a player disconnects.

:::

:::warning

Keyboard key mapping codes (such as ~k~~VEHICLE_ENTER_EXIT~ Doesn't work beyond 255th character.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [PlayerTextDrawDestroy](../../scripting/functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](../../scripting/functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](../../scripting/functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](../../scripting/functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](../../scripting/functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](../../scripting/functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](../../scripting/functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](../../scripting/functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](../../scripting/functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](../../scripting/functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](../../scripting/functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](../../scripting/functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](../../scripting/functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](../../scripting/functions/PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](../../scripting/functions/PlayerTextDrawHide.md): Hide a player-textdraw.
