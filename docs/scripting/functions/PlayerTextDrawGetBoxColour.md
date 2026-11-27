---
title: "PlayerTextDrawGetBoxColour | open.mp"
description: "Gets the box colour of a player-textdraw"
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawGetBoxColour
language: en
---

# PlayerTextDrawGetBoxColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the box colour of a player-textdraw

| Name | Description |
| --- | --- |
| playerid | The ID of the player |
| PlayerText:textid | The ID of the player textdraw to get the box colour of |

## Returns

Returns the box colour of the player-textdraw.

## Examples

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, pTextdraw[playerid], 0xFFFF80FF);
    PlayerTextDrawShow(playerid, pTextdraw[playerid]);

    new boxColour = PlayerTextDrawGetBoxColour(playerid, pTextdraw[playerid]);
    // boxColour = 0xFFFF80FF
    return 1;
}
```

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
