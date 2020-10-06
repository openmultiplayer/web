---
id: PlayerTextDrawBoxColor
title: PlayerTextDrawBoxColor
description: Sets the color of a textdraw's box (PlayerTextDrawUseBox ).
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Sets the color of a textdraw's box (PlayerTextDrawUseBox ).

| Name     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| playerid | The ID of the player whose textdraw to set the box color of. |
| text     | The ID of the player textdraw to set the box color of.       |
| color    | The color to set. Alpha (transparency) is supported.         |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Red box with no transparency
    return 1;
}
```

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
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
- [PlayerTextDrawShow](PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide.md): Hide a player-textdraw.
