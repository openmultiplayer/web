---
title: "PlayerTextDrawColour | open.mp"
description: "Sets the text colour of a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawColour
language: en
---

# PlayerTextDrawColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Sets the text colour of a player-textdraw

| Name | Description |
| --- | --- |
| playerid | The ID of the player who's textdraw to set the colour of |
| PlayerText:textid | The TextDraw to change. |
| textColour | The colour in hexadecimal format. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawColour(playerid, pTextdraw[playerid], 0xFF0000FF); // Red text

    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```

## Notes

tip

You can also use [Gametext colours](https://open.mp/docs/scripting/resources/gametextstyles) in textdraws.

note

The textdraw must be [re-shown](https://open.mp/docs/scripting/functions/PlayerTextDrawShow) to the player in order to update the colour.

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawBoxColour](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColour): Set the colour of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColour](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColour): Set the background colour of a player-textdraw.
-   [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
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
