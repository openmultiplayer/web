---
title: "PlayerTextDrawAlignment | open.mp"
description: "Set the text alignment of a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment
language: en
---

# PlayerTextDrawAlignment

## Description

Set the text alignment of a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the alignment of. |
| PlayerText:textid | The ID of the player-textdraw to set the alignment of. |
| TEXT\_DRAW\_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT` / `TEXT_DRAW_ALIGN_CENTER` / `TEXT_DRAW_ALIGN_RIGHT` |

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

note

-   For alignment 2 (TEXT\_DRAW\_ALIGN\_CENTER) the x and y values of TextSize need to be swapped, see notes at [PlayerTextDrawTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize).
-   If the textdraw is already shown for the player, it must be re-shown ([PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow)) to show the changes of this function.

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawGetAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawGetAlignment): Gets the text alignment of a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
-   [PlayerTextDrawFont](https://open.mp/docs/scripting/functions/PlayerTextDrawFont): Set the font of a player-textdraw.
-   [PlayerTextDrawLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
-   [PlayerTextDrawTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-   [PlayerTextDrawSetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
-   [PlayerTextDrawSetShadow](https://open.mp/docs/scripting/functions/PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
-   [PlayerTextDrawSetProportional](https://open.mp/docs/scripting/functions/PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
-   [PlayerTextDrawUseBox](https://open.mp/docs/scripting/functions/PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
-   [PlayerTextDrawSetString](https://open.mp/docs/scripting/functions/PlayerTextDrawSetString): Set the text of a player-textdraw.
-   [PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow): Show a player-textdraw.
-   [PlayerTextDrawHide](https://open.mp/docs/scripting/functions/PlayerTextDrawHide): Hide a player-textdraw.
