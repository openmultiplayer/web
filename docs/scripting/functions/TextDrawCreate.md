---
title: "TextDrawCreate | open.mp"
description: "Creates a textdraw."
canonical: https://open.mp/docs/scripting/functions/TextDrawCreate
language: en
---

# TextDrawCreate

## Description

Creates a textdraw. Textdraws are, as the name implies, text (mainly - there can be boxes, sprites and model previews (skins/vehicles/weapons/objects too) that is drawn on a player's screens. See [this page](https://open.mp/docs/scripting/resources/textdraws) for extensive information about textdraws.

| Name | Description |
| --- | --- |
| Float:x | The X (left/right) coordinate to create the textdraw at. |
| Float:y | The Y (up/down) coordinate to create the textdraw at. |
| const format\[\] | The text that will appear in the textdraw. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

The ID of the created textdraw.

Textdraw IDs start at **0**.

## Examples

```c
// This variable is used to store the id of the textdraw
// so that we can use it throught the script
new Text:gMyTextdraw;

public OnGameModeInit()
{
    // This line is used to create the textdraw.
    // Note: This creates a textdraw without any formatting.
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Welcome to my OPEN.MP server");
    return 1;
}

public OnPlayerConnect(playerid)
{
    //This is used to show the player the textdraw when they connect.
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Notes

note

-   The `x, y` coordinate is the top left coordinate for the text draw area based on a 640x480 "canvas" (irrespective of screen resolution). If you plan on using [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment) with alignment 3 (`TEXT_DRAW_ALIGN_RIGHT`), the `x, y` coordinate is the top right coordinate for the text draw.
-   This function merely CREATES the textdraw, you must use [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer) or [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll) to show it.

tip

It is recommended to use WHOLE numbers instead of decimal positions when creating textdraws to ensure resolution friendly design.

warning

Keyboard key mapping codes (such as `~k~~VEHICLE_ENTER_EXIT~`) don't work beyond 255th character.

## Related Functions

-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.
-   [TextDrawLetterSize](https://open.mp/docs/scripting/functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
-   [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize): Set the size of a textdraw box.
-   [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline): Choose whether the text has an outline.
-   [TextDrawSetShadow](https://open.mp/docs/scripting/functions/TextDrawSetShadow): Toggle shadows on a textdraw.
-   [TextDrawSetProportional](https://open.mp/docs/scripting/functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
-   [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
-   [TextDrawSetString](https://open.mp/docs/scripting/functions/TextDrawSetString): Set the text in an existing textdraw.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
-   [IsTextDrawVisibleForPlayer](https://open.mp/docs/scripting/functions/IsTextDrawVisibleForPlayer): Checks if a textdraw is shown for the player.
-   [IsValidTextDraw](https://open.mp/docs/scripting/functions/IsValidTextDraw): Checks if a textdraw is valid.
-   [TextDrawGetAlignment](https://open.mp/docs/scripting/functions/TextDrawGetAlignment): Gets the text alignment of a textdraw.
-   [TextDrawGetBackgroundColour](https://open.mp/docs/scripting/functions/TextDrawGetBackgroundColour): Gets the background colour of a textdraw.
-   [TextDrawGetBoxColour](https://open.mp/docs/scripting/functions/TextDrawGetBoxColour): Gets the box colour of a textdraw.
-   [TextDrawGetColour](https://open.mp/docs/scripting/functions/TextDrawGetColour): Gets the text colour of a textdraw.
-   [TextDrawGetFont](https://open.mp/docs/scripting/functions/TextDrawGetFont): Gets the text font of a textdraw.
-   [TextDrawGetLetterSize](https://open.mp/docs/scripting/functions/TextDrawGetLetterSize): Gets the width and height of the letters.
-   [TextDrawGetOutline](https://open.mp/docs/scripting/functions/TextDrawGetOutline): Gets the thickness of a textdraw's text's outline.
-   [TextDrawGetPos](https://open.mp/docs/scripting/functions/TextDrawGetPos): Gets the position of a textdraw.
-   [TextDrawGetPreviewModel](https://open.mp/docs/scripting/functions/TextDrawGetPreviewModel): Gets the preview model of a 3D preview textdraw.
-   [TextDrawGetPreviewRot](https://open.mp/docs/scripting/functions/TextDrawGetPreviewRot): Gets the rotation and zoom of a 3D model preview textdraw.
-   [TextDrawGetPreviewVehCol](https://open.mp/docs/scripting/functions/TextDrawGetPreviewVehCol): Gets the preview vehicle colors of a 3D preview textdraw.
-   [TextDrawGetPreviewVehicleColours](https://open.mp/docs/scripting/functions/TextDrawGetPreviewVehicleColours): Gets the preview vehicle colours of a 3D preview textdraw.
-   [TextDrawGetShadow](https://open.mp/docs/scripting/functions/TextDrawGetShadow): Gets the size of a textdraw's text's shadow.
-   [TextDrawGetString](https://open.mp/docs/scripting/functions/TextDrawGetString): Gets the text of a textdraw.
-   [TextDrawGetTextSize](https://open.mp/docs/scripting/functions/TextDrawGetTextSize): Gets the X axis and Y axis of the textdraw.
-   [TextDrawIsBox](https://open.mp/docs/scripting/functions/TextDrawIsBox): Checks if a textdraw is box.
-   [TextDrawIsProportional](https://open.mp/docs/scripting/functions/TextDrawIsProportional): Checks if a textdraw is proportional.
-   [TextDrawIsSelectable](https://open.mp/docs/scripting/functions/TextDrawIsSelectable): Checks if a textdraw is selectable.
-   [TextDrawSetPos](https://open.mp/docs/scripting/functions/TextDrawSetPos): Sets the position of a textdraw.
-   [TextDrawSetStringForPlayer](https://open.mp/docs/scripting/functions/TextDrawSetStringForPlayer): Changes the text on a textdraw for a specific player.

## Related Resources

-   [TextDraw Sprites](https://open.mp/docs/scripting/resources/textdrawsprites)
