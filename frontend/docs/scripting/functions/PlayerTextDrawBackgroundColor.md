---
title: PlayerTextDrawBackgroundColor
sidebar_label: PlayerTextDrawBackgroundColor
description: Adjust the background color of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Description

Adjust the background color of a player-textdraw.

| Name              | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| playerid          | The ID of the player whose player-textdraw to set the background color of |
| PlayerText:textid | The ID of the player-textdraw to set the background color of              |
| backgroundColour  | The color that the textdraw should be set to.                             |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw[playerid], 0xFFFFFFFF); // Set the background colour of gMyTextdraw to white
    return 1;
}
```

## Notes

:::tip

- If [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline) is used with size > 0, the outline colour will match the colour used in PlayerTextDrawBackgroundColour.
- Changing the value of colour seems to alter the colour used in PlayerTextDrawColour.

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
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
