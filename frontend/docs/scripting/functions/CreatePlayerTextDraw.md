---
title: CreatePlayerTextDraw
sidebar_label: CreatePlayerTextDraw
description: Creates a textdraw for a single player.
tags: ["player", "textdraw", "playertextdraw"]
---

## Description

Creates a textdraw for a single player. This can be used as a way around the global text-draw limit.

| Name             | Description                                     |
| ---------------- | ----------------------------------------------- |
| playerid         | The ID of the player to create the textdraw for |
| Float:x          | X-Coordinate                                    |
| Float:y          | Y-Coordinate                                    |
| const format[]   | The text in the textdraw.                       |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.      |

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

:::tip

Player-textdraws are automatically destroyed when a player disconnects.

:::

:::warning

Keyboard key mapping codes (such as ~k~~VEHICLE_ENTER_EXIT~) Doesn't work beyond 255th character.

:::

## Related Functions

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Checks if a player-textdraw is shown for the player.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Checks if a player-textdraw is valid.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): Adjust the background colour of a player-textdraw.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): Sets the colour of a textdraw's box (PlayerTextDrawUseBox ).
- [PlayerTextDrawColour](PlayerTextDrawColour): Sets the text colour of a player-textdraw.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): Gets the text alignment of a player-textdraw.
- [PlayerTextDrawGetBackgroundColour](PlayerTextDrawGetBackgroundColour): Gets the background colour of a player-textdraw.
- [PlayerTextDrawGetBoxColour](PlayerTextDrawGetBoxColour): Gets the box colour of a player-textdraw.
- [PlayerTextDrawGetColour](PlayerTextDrawGetColour): Gets the text colour of a player-textdraw.
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): Gets the text font of a player-textdraw.
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): Gets the width and height of the letters.
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): Get the outline size on a player-textdraw.
- [PlayerTextDrawGetPos](PlayerTextDrawGetPos): Gets the position of a player-textdraw.
- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): Gets the preview model of a 3D preview player-textdraw.
- [PlayerTextDrawGetPreviewRot](PlayerTextDrawGetPreviewRot): Gets the rotation and zoom of a 3D model preview player-textdraw.
- [PlayerTextDrawGetPreviewVehicleColours](PlayerTextDrawGetPreviewVehicleColours): Gets the preview vehicle colors of a 3D preview player-textdraw.
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): Get the shadow size on a player-textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): Gets the text of a player-textdraw.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): Gets the X axis and Y axis of the player-textdraw text size.
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): Checks if a player-textdraw is box.
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): Checks if a player-textdraw is proportional.
- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): Checks if a player-textdraw is selectable.
- [PlayerTextDrawSetPos](PlayerTextDrawSetPos): Sets the position of a player-textdraw.
- [PlayerTextDrawSetPreviewVehicleColours](PlayerTextDrawSetPreviewVehicleColours): Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown).

## Related Resources

- [TextDraw Sprites](../resources/textdrawsprites)
