---
title: "PlayerTextDrawDestroy | open.mp"
description: "Destroy a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy
language: en
---

# PlayerTextDrawDestroy

## Description

Destroy a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player who's player-textdraw to destroy. |
| PlayerText:textid | The ID of the textdraw to destroy. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    PlayerTextDrawDestroy(playerid, pTextdraw[playerid]);
    return 1;
}
```

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
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
