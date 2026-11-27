---
title: "PlayerTextDrawBackgroundColor | open.mp"
description: "Adjust the background color of a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor
language: en
---

# PlayerTextDrawBackgroundColor

## Description

Adjust the background color of a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the background color of |
| PlayerText:textid | The ID of the player-textdraw to set the background color of |
| backgroundColour | The color that the textdraw should be set to. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw[playerid], 0xFFFFFFFF); // Set the background colour of gMyTextdraw to white
    return 1;
}
```

## Notes

note

If [PlayerTextDrawSetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawSetOutline) is used with size > 0, the outline colour will match the colour used in PlayerTextDrawBackgroundColour. Changing the value of colour seems to alter the colour used in [PlayerTextDrawColour](https://open.mp/docs/scripting/functions/PlayerTextDrawColour).

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
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
