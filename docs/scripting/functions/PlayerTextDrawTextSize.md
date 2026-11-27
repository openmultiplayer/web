---
title: "PlayerTextDrawTextSize | open.mp"
description: "Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable)."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize
language: en
---

# PlayerTextDrawTextSize

## Description

Change the size of a player-textdraw (box if [PlayerTextDrawUseBox](https://open.mp/docs/scripting/functions/PlayerTextDrawUseBox) is enabled and/or clickable area for use with [PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable)).

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the size of |
| PlayerText:textid | The ID of the player-textdraw to set the size of. |
| Float:width | The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate. |
| Float:height | The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate. |

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

note

-   The x and y have different meanings with different [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment) values:
    -   1 (left): they are the right-most corner of the box, absolute coordinates.
    -   2 (center): they need to inverted (switch the two) and the x value is the overall width of the box.
    -   3 (right): the x and y are the coordinates of the left-most corner of the box
-   Using [font type](https://open.mp/docs/scripting/functions/PlayerTextDrawFont) 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets).
-   The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate).
-   This function defines the clickable area for use with [PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable), whether a box is shown or not.

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawGetTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawGetTextSize): Gets the X axis and Y axis of the player-textdraw text size.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
-   [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
-   [PlayerTextDrawFont](https://open.mp/docs/scripting/functions/PlayerTextDrawFont): Set the font of a player-textdraw.
-   [PlayerTextDrawLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
-   [PlayerTextDrawSetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
-   [PlayerTextDrawSetShadow](https://open.mp/docs/scripting/functions/PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
-   [PlayerTextDrawSetProportional](https://open.mp/docs/scripting/functions/PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
-   [PlayerTextDrawUseBox](https://open.mp/docs/scripting/functions/PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
-   [PlayerTextDrawSetString](https://open.mp/docs/scripting/functions/PlayerTextDrawSetString): Set the text of a player-textdraw.
-   [PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow): Show a player-textdraw.
-   [PlayerTextDrawHide](https://open.mp/docs/scripting/functions/PlayerTextDrawHide): Hide a player-textdraw.
