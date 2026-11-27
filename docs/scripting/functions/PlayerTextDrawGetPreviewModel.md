---
title: "PlayerTextDrawGetPreviewModel | open.mp"
description: "Gets the preview model of a 3D preview player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewModel
language: en
---

# PlayerTextDrawGetPreviewModel

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the preview model of a 3D preview player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText:textid | The ID of the player-textdraw to get the preview model of. |

## Returns

Returns the 3D player-textdraw preview model.

## Examples

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);
    PlayerTextDrawShow(playerid, gTextDraw[playerid]);

    new previewModel = PlayerTextDrawGetPreviewModel(playerid, gTextDraw[playerid]);
    // previewModel = 411
    return 1;
}
```

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawSetPreviewModel](https://open.mp/docs/scripting/functions/PlayerTextDrawSetPreviewModel): Sets a player textdraw 3D preview sprite of a specified model ID.
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
-   [IsPlayerTextDrawVisible](https://open.mp/docs/scripting/functions/IsPlayerTextDrawVisible): Checks if a player-textdraw is shown for the player.
-   [IsValidPlayerTextDraw](https://open.mp/docs/scripting/functions/IsValidPlayerTextDraw): Checks if a player-textdraw is valid.
