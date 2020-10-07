---
id: TextDrawCreate
title: TextDrawCreate
description: Creates a textdraw.
tags: ["textdraw"]
---

## Description

Creates a textdraw. Textdraws are, as the name implies, text (mainly - there can be boxes, sprites and model previews (skins/vehicles/weapons/objects too) that is drawn on a player's screens. See this page for extensive information about textdraws.

| Name    | Description                                              |
| ------- | -------------------------------------------------------- |
| Float:x | The X (left/right) coordinate to create the textdraw at. |
| Float:y | The Y (up/down) coordinate to create the textdraw at.    |
| text[]  | The text that will appear in the textdraw.               |

## Returns

The ID of the created textdraw. Textdraw IDs start at 0.

## Examples

```c
// This variable is used to store the id of the textdraw
// so that we can use it throught the script
new Text:gMyTextdraw;

public OnGameModeInit()
{
    // This line is used to create the textdraw.
    // Note: This creates a textdraw without any formatting.
    gMyTextdraw = TextDrawCreate(240.0,580.0,"Welcome to my SA-MP server");
    return 1;
}

public OnPlayerConnect(playerid)
{
    //This is used to show the player the textdraw when they connect.
    TextDrawShowForPlayer(playerid, gMyTextdraw);
}
```

## Notes

:::tip

The x,y coordinate is the top left coordinate for the text draw area based on a 640x448 "canvas" (irrespective of screen resolution). If you plan on using TextDrawAlignment with alignment 3 (right), the x,y coordinate is the top right coordinate for the text draw. This function merely CREATES the textdraw, you must use TextDrawShowForPlayer or TextDrawShowForAll to show it. It is recommended to use WHOLE numbers instead of decimal positions when creating textdraws to ensure resolution friendly design.

:::

:::warning

Keyboard key mapping codes (such as ~k~~VEHICLE_ENTER_EXIT~ don't work beyond 255th character.

:::

## Related Functions

- [TextDrawDestroy](TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor.md): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment.md): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont.md): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize.md): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize.md): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline.md): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow.md): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional.md): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox.md): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString.md): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll.md): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll.md): Hide a textdraw for all players.
