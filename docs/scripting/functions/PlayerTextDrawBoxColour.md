---
title: PlayerTextDrawBoxColour
description: Sets the colour of a textdraw's box (PlayerTextDrawUseBox ).
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the colour of a textdraw's box (PlayerTextDrawUseBox).

| Name              | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| playerid          | The ID of the player whose textdraw to set the box colour of. |
| PlayerText:textid | The ID of the player textdraw to set the box colour of.       |
| boxColour         | The colour to set. Alpha (transparency) is supported.         |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, pTextdraw[playerid], 0xFF0000FF); // Red box with no transparency
    return 1;
}
```

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColour](PlayerTextDrawColour): Set the colour of the text in a player-textdraw.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): Set the background colour of a player-textdraw.
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
