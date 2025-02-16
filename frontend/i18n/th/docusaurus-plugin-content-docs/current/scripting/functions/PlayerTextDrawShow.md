---
title: PlayerTextDrawShow
sidebar_label: PlayerTextDrawShow
description: Show a player-textdraw to the player it was created for.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Show a player-textdraw to the player it was created for

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player to show the textdraw for |
| text     | The ID of the textdraw to show                |

## ส่งคืน

This function does not return any specific values.

## บันทึก

:::tip

The player-textdraw is only valid for the player it is created for. This means that you can't show a player-textdraw created for a particular player to another player.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- PlayerTextDrawHide: Hide a player-textdraw.
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
- PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
- PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
- PlayerTextDrawSetString: Set the text of a player-textdraw.
