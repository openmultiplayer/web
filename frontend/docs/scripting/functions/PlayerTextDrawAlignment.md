---
title: PlayerTextDrawAlignment
sidebar_label: PlayerTextDrawAlignment
description: Set the text alignment of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Description

Set the text alignment of a player-textdraw.

| Name                      | Description                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| playerid                  | The ID of the player whose player-textdraw to set the alignment of.         |
| PlayerText:textid         | The ID of the player-textdraw to set the alignment of.                      |
| TEXT_DRAW_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT` / `TEXT_DRAW_ALIGN_CENTER` / `TEXT_DRAW_ALIGN_RIGHT` |

## Returns

This function does not return any specific values.

## Examples

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], TEXT_DRAW_ALIGN_CENTER); // Align the textdraw in the center
    return 1;
}
```

## Notes

:::warning

For alignment 2 (TEXT_DRAW_ALIGN_CENTER) the x and y values of TextSize need to be swapped, see notes at [PlayerTextDrawTextSize](PlayerTextDrawTextSize).

:::

:::tip

If the textdraw is already shown for the player, it must be re-shown ([PlayerTextDrawShow](PlayerTextDrawShow)) to show the changes of this function.

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): Gets the text alignment of a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
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
