---
title: PlayerTextDrawGetString
sidebar_label: PlayerTextDrawGetString
description: Gets the text of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the text of a player-textdraw.

| Name                         | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| playerid                     | The ID of the player.                                       |
| PlayerText:textid            | The ID of the player-textdraw to get the text of.           |
| string[]                     | An array into which to store the text, passed by reference. |
| stringSize = sizeof (string) | The size of the string.                                     |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
	welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Hello World!");
	PlayerTextDrawShow(playerid, welcomeText[playerid]);
	
	new string[16];
	PlayerTextDrawGetString(playerid, welcomeText[playerid], string, sizeof(string));
	// string = "Hello World!"
	return 1;
}
```

## Related Functions

- [PlayerTextDrawCreate](PlayerTextDrawCreate): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destroy a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Change the text of a player-textdraw.
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
- [PlayerTextDrawShow](PlayerTextDrawShow): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Hide a player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Checks if a player-textdraw is shown for the player.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Checks if a player-textdraw is valid.
- [TextDrawGetString](TextDrawGetString): Gets the text of a textdraw.
