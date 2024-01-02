---
title: PlayerTextDrawBackgroundColour
description: Adjust the background colour of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn name='feature (player-textdraws)' version='omp v1.1.0.2612' />

## Description

Adjust the background colour of a player-textdraw.

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to set the background colour of |
| PlayerText:textid     | The ID of the player-textdraw to set the background colour of              |
| colour    | The colour that the textdraw should be set to.                             |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:gMyTextdraw;

public OnPlayerConnect(playerid)
{
    gMyTextdraw = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawUseBox(playerid, gMyTextdraw, 1);
    PlayerTextDrawBackgroundColour(playerid, gMyTextdraw, 0xFFFFFFFF); // Set the background colour of gMyTextdraw to white
    return 1;
}
```

## Notes

:::tip

If PlayerTextDrawSetOutline is used with size > 0, the outline colour will match the colour used in PlayerTextDrawBackgroundColour. Changing the value of colour seems to alter the colour used in PlayerTextDrawColour

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColour](PlayerTextDrawColour): Set the colour of the text in a player-textdraw.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): Set the colour of a player-textdraw's box.
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
