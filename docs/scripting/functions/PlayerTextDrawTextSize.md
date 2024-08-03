---
title: PlayerTextDrawTextSize
description: Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).
tags: ["player", "textdraw", "playertextdraw"]
---

## Description

Change the size of a player-textdraw (box if [PlayerTextDrawUseBox](PlayerTextDrawUseBox) is enabled and/or clickable area for use with [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable)).

| Name              | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| playerid          | The ID of the player whose player-textdraw to set the size of                          |
| PlayerText:textid | The ID of the player-textdraw to set the size of.                                      |
| Float:width       | The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate. |
| Float:height      | The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate.    |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## Notes

:::tip

- The x and y have different meanings with different [PlayerTextDrawAlignment](PlayerTextDrawAlignment) values:
    - 1 (left): they are the right-most corner of the box, absolute coordinates.
    - 2 (center): they need to inverted (switch the two) and the x value is the overall width of the box.
    - 3 (right): the x and y are the coordinates of the left-most corner of the box
- Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets).
- The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate).
- This function defines the clickable area for use with [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable), whether a box is shown or not.

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): Gets the X axis and Y axis of the player-textdraw text size.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
