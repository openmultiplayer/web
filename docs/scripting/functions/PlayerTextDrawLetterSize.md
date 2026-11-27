---
title: "PlayerTextDrawLetterSize | open.mp"
description: "Sets the width and height of the letters in a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize
language: en
---

# PlayerTextDrawLetterSize

## Description

Sets the width and height of the letters in a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the letter size of |
| PlayerText:textid | The ID of the player-textdraw to change the letter size of |
| Float:width | Width of a char. |
| Float:height | Height of a char. |

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
    return 1;
}
```

## Notes

tip

-   When using this function purely for the benefit of affecting the textdraw box, multiply 'Y' by 0.135 to convert to TextDrawTextSize-like measurements
-   Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x is 0.5 then y should be 2).

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawGetLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawGetLetterSize): Gets the width and height of the letters.
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
