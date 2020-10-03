---
id: PlayerTextDrawAlignment
title: PlayerTextDrawAlignment
description: Set the text alignment of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Set the text alignment of a player-textdraw.

| Name      | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| playerid  | The ID of the player whose player-textdraw to set the alignment of. |
| Text:text | The ID of the player-textdraw to set the alignment of.              |
| alignment | 1-left 2-centered 3-right                                           |

## Returns

Note

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize.

## Examples

```c
new PlayerText:MyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    MyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, MyTextdraw[playerid], 2); // Align the textdraw in the center
    return 1;
}
```

## Notes

:::tip

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at PlayerTextDrawTextSize.

:::

## Related Functions

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawFont](../functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.
