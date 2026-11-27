---
title: "CreatePlayerTextDraw | open.mp"
description: "Creates a textdraw for a single player."
canonical: https://open.mp/docs/scripting/functions/CreatePlayerTextDraw
language: en
---

# CreatePlayerTextDraw

## Description

Creates a textdraw for a single player. This can be used as a way around the [global text-draw](https://open.mp/docs/scripting/functions/TextDrawCreate) limit.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to create the textdraw for |
| Float:x | X-Coordinate |
| Float:y | Y-Coordinate |
| const format\[\] | The text in the textdraw. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

The ID of the created textdraw

## Examples

```c
// This variable is used to store the id of the textdraw
// so that we can use it throught the script
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");

    // Now show it
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## Notes

note

-   The `x, y` coordinate is the top left coordinate for the text draw area based on a 640x480 "canvas" (irrespective of screen resolution). If you plan on using [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment) with alignment 3 (`TEXT_DRAW_ALIGN_RIGHT`), the `x, y` coordinate is the top right coordinate for the text draw.
-   This function merely CREATES the textdraw, you must use [PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow) to show it to a player.
-   Player-textdraws are automatically destroyed when a player disconnects.

tip

It is recommended to use WHOLE numbers instead of decimal positions when creating player textdraws to ensure resolution friendly design.

warning

Keyboard key mapping codes (such as `~k~~VEHICLE_ENTER_EXIT~`) Doesn't work beyond 255th character.

## Related Functions

-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
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
-   [PlayerTextDrawBackgroundColour](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColour): Adjust the background colour of a player-textdraw.
-   [PlayerTextDrawBoxColour](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColour): Sets the colour of a textdraw's box (PlayerTextDrawUseBox ).
-   [PlayerTextDrawColour](https://open.mp/docs/scripting/functions/PlayerTextDrawColour): Sets the text colour of a player-textdraw.
-   [PlayerTextDrawGetAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawGetAlignment): Gets the text alignment of a player-textdraw.
-   [PlayerTextDrawGetBackgroundColour](https://open.mp/docs/scripting/functions/PlayerTextDrawGetBackgroundColour): Gets the background colour of a player-textdraw.
-   [PlayerTextDrawGetBoxColour](https://open.mp/docs/scripting/functions/PlayerTextDrawGetBoxColour): Gets the box colour of a player-textdraw.
-   [PlayerTextDrawGetColour](https://open.mp/docs/scripting/functions/PlayerTextDrawGetColour): Gets the text colour of a player-textdraw.
-   [PlayerTextDrawGetFont](https://open.mp/docs/scripting/functions/PlayerTextDrawGetFont): Gets the text font of a player-textdraw.
-   [PlayerTextDrawGetLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawGetLetterSize): Gets the width and height of the letters.
-   [PlayerTextDrawGetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawGetOutline): Get the outline size on a player-textdraw.
-   [PlayerTextDrawGetPos](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPos): Gets the position of a player-textdraw.
-   [PlayerTextDrawGetPreviewModel](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewModel): Gets the preview model of a 3D preview player-textdraw.
-   [PlayerTextDrawGetPreviewRot](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewRot): Gets the rotation and zoom of a 3D model preview player-textdraw.
-   [PlayerTextDrawGetPreviewVehicleColours](https://open.mp/docs/scripting/functions/PlayerTextDrawGetPreviewVehicleColours): Gets the preview vehicle colors of a 3D preview player-textdraw.
-   [PlayerTextDrawGetShadow](https://open.mp/docs/scripting/functions/PlayerTextDrawGetShadow): Get the shadow size on a player-textdraw.
-   [PlayerTextDrawGetString](https://open.mp/docs/scripting/functions/PlayerTextDrawGetString): Gets the text of a player-textdraw.
-   [PlayerTextDrawGetTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawGetTextSize): Gets the X axis and Y axis of the player-textdraw text size.
-   [PlayerTextDrawIsBox](https://open.mp/docs/scripting/functions/PlayerTextDrawIsBox): Checks if a player-textdraw is box.
-   [PlayerTextDrawIsProportional](https://open.mp/docs/scripting/functions/PlayerTextDrawIsProportional): Checks if a player-textdraw is proportional.
-   [PlayerTextDrawIsSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawIsSelectable): Checks if a player-textdraw is selectable.
-   [PlayerTextDrawSetPos](https://open.mp/docs/scripting/functions/PlayerTextDrawSetPos): Sets the position of a player-textdraw.
-   [PlayerTextDrawSetPreviewVehicleColours](https://open.mp/docs/scripting/functions/PlayerTextDrawSetPreviewVehicleColours): Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).

## Related Resources

-   [TextDraw Sprites](https://open.mp/docs/scripting/resources/textdrawsprites)
