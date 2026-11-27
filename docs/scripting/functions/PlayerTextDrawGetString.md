---
title: "PlayerTextDrawGetString | open.mp"
description: "Gets the text of a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawGetString
language: en
---

# PlayerTextDrawGetString

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the text of a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText:textid | The ID of the player-textdraw to get the text of. |
| string\[\] | An array into which to store the text, passed by reference. |
| stringSize = sizeof (string) | The size of the string. |

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

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawSetString](https://open.mp/docs/scripting/functions/PlayerTextDrawSetString): Change the text of a player-textdraw.
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
-   [PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow): Show a player-textdraw.
-   [PlayerTextDrawHide](https://open.mp/docs/scripting/functions/PlayerTextDrawHide): Hide a player-textdraw.
-   [IsPlayerTextDrawVisible](https://open.mp/docs/scripting/functions/IsPlayerTextDrawVisible): Checks if a player-textdraw is shown for the player.
-   [IsValidPlayerTextDraw](https://open.mp/docs/scripting/functions/IsValidPlayerTextDraw): Checks if a player-textdraw is valid.
-   [TextDrawGetString](https://open.mp/docs/scripting/functions/TextDrawGetString): Gets the text of a textdraw.
