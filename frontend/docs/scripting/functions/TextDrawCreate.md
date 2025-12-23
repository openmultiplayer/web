---
title: TextDrawCreate
sidebar_label: TextDrawCreate
description: Creates a textdraw.
tags: ["textdraw"]
---

## Description

Creates a textdraw. Textdraws are, as the name implies, text (mainly - there can be boxes, sprites and model previews (skins/vehicles/weapons/objects too) that is drawn on a player's screens. See this page for extensive information about textdraws.

| Name             | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Float:x          | The X (left/right) coordinate to create the textdraw at. |
| Float:y          | The Y (up/down) coordinate to create the textdraw at.    |
| const format[]   | The text that will appear in the textdraw.               |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.               |

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

:::tip

- The `x, y` coordinate is the top left coordinate for the text draw area based on a 640x480 "canvas" (irrespective of screen resolution).
- If you plan on using [TextDrawAlignment](TextDrawAlignment) with alignment 3 (`TEXT_DRAW_ALIGN_RIGHT`), the `x, y` coordinate is the top right coordinate for the text draw.
- This function merely CREATES the textdraw, you must use [TextDrawShowForPlayer](TextDrawShowForPlayer) or [TextDrawShowForAll](TextDrawShowForAll) to show it.
- It is recommended to use WHOLE numbers instead of decimal positions when creating textdraws to ensure resolution friendly design.

:::

:::warning

Keyboard key mapping codes (such as `~k~~VEHICLE_ENTER_EXIT~`) don't work beyond 255th character.

:::

## Related Functions

- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): Checks if a textdraw is shown for the player.
- [IsValidTextDraw](IsValidTextDraw): Checks if a textdraw is valid.
- [TextDrawGetAlignment](TextDrawGetAlignment): Gets the text alignment of a textdraw.
- [TextDrawGetBackgroundColour](TextDrawGetBackgroundColour): Gets the background colour of a textdraw.
- [TextDrawGetBoxColour](TextDrawGetBoxColour): Gets the box colour of a textdraw.
- [TextDrawGetColour](TextDrawGetColour): Gets the text colour of a textdraw.
- [TextDrawGetFont](TextDrawGetFont): Gets the text font of a textdraw.
- [TextDrawGetLetterSize](TextDrawGetLetterSize): Gets the width and height of the letters.
- [TextDrawGetOutline](TextDrawGetOutline): Gets the thickness of a textdraw's text's outline.
- [TextDrawGetPos](TextDrawGetPos): Gets the position of a textdraw.
- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): Gets the preview model of a 3D preview textdraw.
- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): Gets the rotation and zoom of a 3D model preview textdraw.
- [TextDrawGetPreviewVehCol](TextDrawGetPreviewVehCol): Gets the preview vehicle colors of a 3D preview textdraw.
- [TextDrawGetPreviewVehicleColours](TextDrawGetPreviewVehicleColours): Gets the preview vehicle colours of a 3D preview textdraw.
- [TextDrawGetShadow](TextDrawGetShadow): Gets the size of a textdraw's text's shadow.
- [TextDrawGetString](TextDrawGetString): Gets the text of a textdraw.
- [TextDrawGetTextSize](TextDrawGetTextSize): Gets the X axis and Y axis of the textdraw.
- [TextDrawIsBox](TextDrawIsBox): Checks if a textdraw is box.
- [TextDrawIsProportional](TextDrawIsProportional): Checks if a textdraw is proportional.
- [TextDrawIsSelectable](TextDrawIsSelectable): Checks if a textdraw is selectable.
- [TextDrawSetPos](TextDrawSetPos): Sets the position of a textdraw.
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): Changes the text on a textdraw for a specific player.

## Related Resources

- [TextDraw Sprites](../resources/textdrawsprites)
