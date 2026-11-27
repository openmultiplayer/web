---
title: "Textdraws | open.mp"
description: "As the name implies, a textdraw is text that is drawn on a player's screen."
canonical: https://open.mp/docs/scripting/resources/textdraws
language: en
---

# Textdraws

## What is a Textdraw?

As the name implies, a textdraw is text that is drawn on a player's screen. Unlike [client messages](https://open.mp/docs/scripting/functions/SendClientMessage) or [gametext](https://open.mp/docs/scripting/functions/GameTextForPlayer) however, textdraws can be shown on a player's screen for an indefinite period of time. Textdraws can be simple text on the screen such as a website address, or complex scripted dynamic textdraws such as progress bars.

This 'textdraw editor' tool can make designing textdraws much easier:

-   [Nickk's TextDraw Editor](https://github.com/Nickk888SAMP/TextDraw-Editor)
-   [Nexor's Textdraw Editor](https://github.com/nexquery/samp-textdraw-editor)

* * *

## Global Textdraws

Global textdraws can be created, then shown to all players. There is a [limit](https://open.mp/docs/scripting/resources/limits) as to how many can be created, though. This means if you have a server with 500 players, creating more than 4 textdraws per-player is not possible. That's where **player**\-textdraws come in. See further down. Here is a list of all the functions related to **global** textdraws:

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
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

* * *

## Player-textdraws

Player-textdraws are only created for one specific player. Up to 256 textdraws can be created PER-PLAYER. That's 128,000 on a server with 500 players. A little more than 2048. Player-textdraws should be used for things that are not 'static'. Do not use them to display a website address for example, but for a vehicle health indicator.

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
-   [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
-   [PlayerTextDrawFont](https://open.mp/docs/scripting/functions/PlayerTextDrawFont): Set the font of a player-textdraw.
-   [PlayerTextDrawLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
-   [PlayerTextDrawTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for [PlayerTextDrawSetSelectable](https://open.mp/docs/scripting/functions/PlayerTextDrawSetSelectable)).
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
-   [PlayerTextDrawBoxColour](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColour): Sets the colour of a textdraw's box (PlayerTextDrawUseBox).
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

* * *

## Variable Declaration

When creating a textdraw, you should always decide if the textdraw you're going to create has to be global (eg. your website address, global annoucement) or if it's going to differ per player (eg. kills, deaths, score).

### Global Textdraw

A global textdraw is the easiest to create and requires only one variable. This variable is needed to modify the textdraw and to show it to the players later on. The declaration for such a textdraw needs to be a global variable in most cases. The textdraw variable also needs to be prefixed with the _Text:_ tag and should be initialized with the value _Text:INVALID\_TEXT\_DRAW_. If you omit the initialization, the textdraw may conflict with others as you add more textdraws.

```c
new Text:gMyText = Text:INVALID_TEXT_DRAW;
```

### Per-Player Textdraw

A per-player textdraw is exactly the same as a regular 'global' textdraw, but only creates the textdraw for a single player.

This is useful for textdraws that are unique to each player, such as a 'stats' bar showing their kills or score.

This can be used to avoid going over the global-textdraw limit, as you can create 256 textdraws per player.

They are also easier to manage, as they automatically destroy themselves when the player disconnects.

```c
new PlayerText:gMyPlayerText = PlayerText:INVALID_TEXT_DRAW;
```

info

IMPORTANT NOTE: An array is still needed for the variable, as the ID of the textdraws may differ from player to player, as other players may have more or less textdraws created than the other.

The function names only differ slightly, with 'TextDraw' becoming 'PlayerTextDraw', with one exception: [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw) ('TextDrawSetString' becomes 'PlayerTextDrawSetString').

* * *

## Creating the Textdraw

![Image:320px-Textdraw\_map.png](https://assets.open.mp/assets/images/textdraws/320px-Textdraw_map.png)

Once you've declared a variable/array to store the ID of your textdraw(s) in, you can proceed to create the textdraw itself. For global textdraws that are always created, the code should be placed under [OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit). To create the textdraw, the function [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate) must be used.

Note that this function merely creates the textdraw, other functions are used to modify it and to show it to the player(s).

**Parameters:**

`TextDrawCreate(Float:x, Float:y, text[])`

| Name | Description |
| --- | --- |
| x | X coordinate at which to create the textdraw |
| y | Y coordinate at which to create the textdraw |
| text\[\] | The text in the textdraw. |

**Return Values:**

The ID of the created textdraw

Let's proceed to create the textdraw:

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 240.0, "Hello World!");
    return 1;
}
```

We have created a textdraw in the center of the screen that says "Hello World!".

* * *

## Setting the font

There are 4 fonts available for textdraw text:

![Image.png](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

| ID | Info | Tips |
| --- | --- | --- |
| 0 | The _San Andreas_ Font. | Use for header or titles, not a whole page. |
| 1 | Clear font that includes both upper and lower case characters. | Can be used for a lot of text. |
| 2 | Clear font, but includes only capital letters. | Can be used in various instances. |
| 3 | _GTA font_ | Retains quality when enlarged. Useful for large texts. |

As of SA-MP 0.3d, a new font (id 4) can be set. This is used in combination with the [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate) and [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize) functions to show a texture 'sprite' on the player's screen. We'll cover this later.

* * *

## Showing the textdraw

For this example, the textdraw has been created globally under OnGameModeInit and will be shown to player when they join the server.

To show a textdraw for a single player, the function [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer) is used.

**Parameters:**

`TextDrawShowForPlayer(playerid, Text:text)`

| Name | Description |
| --- | --- |
| playerid | The ID of the player to show the textdraw for |
| text | The ID of the textdraw to show |

**Return Values:**

This function does not return any specific values.

The playerid is passed through OnPlayerConnect, and the text-draw ID is stored in the 'gMyText' variable.

```c
public OnGameModeInit()
{
    gMyText = TextDrawCreate(320.0, 320.0, "Hello World!");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyText);
    return 1;
}
```

* * *

## Assorted Tips

-   Try to use whole number when specifying positions, this ensures the best compatibility on different resolutions.
-   Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x = 0.5 then y should be 2).
