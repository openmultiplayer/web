---
id: PlayerTextDrawShow
title: PlayerTextDrawShow
description: Show a player-textdraw to the player it was created for.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Show a player-textdraw to the player it was created for

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player to show the textdraw for |
| text     | The ID of the textdraw to show                |

## Returns

This function does not return any specific values.

## Notes

:::tip

The player-textdraw is only valid for the player it is created for. This means that you can't show a player-textdraw created for a particular player to another player.

:::

## Related Functions

- [PlayerTextDrawHide](PlayerTextDrawHide.md): Hide a player-textdraw.
- [CreatePlayerTextDraw](CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont.md): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString.md): Set the text of a player-textdraw.
