---
id: PlayerTextDrawSetOutline
title: PlayerTextDrawSetOutline
description: Set the outline of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Set the outline of a player-textdraw. The outline colour cannot be changed unless PlayerTextDrawBackgroundColor is used.

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the outline of |
| text     | The ID of the player-textdraw to set the outline of              |
| size     | The thickness of the outline.                                    |

## Returns

This function does not return any specific values.

## Examples

```c
MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0,"Example TextDraw");
PlayerTextDrawSetOutline(playerid, MyTextDraw, 1);
```

## Related Functions

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.
