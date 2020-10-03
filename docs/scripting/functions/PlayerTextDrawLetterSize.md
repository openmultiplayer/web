---
id: PlayerTextDrawLetterSize
title: PlayerTextDrawLetterSize
description: Sets the width and height of the letters in a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Sets the width and height of the letters in a player-textdraw.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the letter size of |
| text     | The ID of the player-textdraw to change the letter size of           |
| Float:x  | Width of a char.                                                     |
| Float:y  | Height of a char.                                                    |

## Returns

This function does not return any specific values.

## Examples

```c
MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0,"Example TextDraw");
PlayerTextDrawLetterSize(playerid, MyTextDraw, 3.2 ,5.1);
```

## Notes

:::tip

When using this function purely for the benefit of affecting the textdraw box, multiply 'Y' by 0.135 to convert to TextDrawTextSize-like measurements

:::

:::tip

Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x is 0.5 then y should be 2).

:::

## Related Functions

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.
