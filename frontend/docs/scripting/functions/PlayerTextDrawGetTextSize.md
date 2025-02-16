---
title: PlayerTextDrawGetTextSize
sidebar_label: PlayerTextDrawGetTextSize
description: Gets the X axis and Y axis of the player-textdraw text size.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the X axis and Y axis of the player-textdraw text size.

| Name          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| playerid      | The ID of the player.                                             |
| Text:textid   | The ID of the textdraw to get text size of.                       |
| &Float:width  | A float variable into which to store width, passed by reference.  |
| &Float:height | A float variable into which to store height, passed by reference. |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new Float:width, Float:height;
    PlayerTextDrawGetTextSize(playerid, welcomeText[playerid], width, height);
    // width = 2.0
    // height = 3.6
    return 1;
}
```

## Related Functions

- [PlayerTextDrawCreate](PlayerTextDrawCreate): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawColor](PlayerTextDrawColor): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Checks if a player-textdraw is shown for the player.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Checks if a player-textdraw is valid.
