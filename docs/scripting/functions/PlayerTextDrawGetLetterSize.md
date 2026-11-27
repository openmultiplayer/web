---
title: "PlayerTextDrawGetLetterSize | open.mp"
description: "Gets the width and height of the letters."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawGetLetterSize
language: en
---

# PlayerTextDrawGetLetterSize

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the width and height of the letters.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText:textid | The ID of the player-textdraw to get letter size of. |
| &Float:width | A float variable into which to store width, passed by reference. |
| &Float:height | A float variable into which to store height, passed by reference. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawLetterSize(playerid, welcomeText[playerid], 3.2, 5.1);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new Float:width, Float:height;
    PlayerTextDrawGetLetterSize(playerid, welcomeText[playerid], width, height);
    // width = 3.2
    // height = 5.1
    return 1;
}
```

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
-   [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
-   [PlayerTextDrawFont](https://open.mp/docs/scripting/functions/PlayerTextDrawFont): Set the font of a player-textdraw.
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
