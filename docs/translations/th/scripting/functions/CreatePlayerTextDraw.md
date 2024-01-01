---
title: CreatePlayerTextDraw
description: Creates a textdraw for a single player.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

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

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
