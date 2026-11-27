---
title: "PlayerTextDrawFont | open.mp"
description: "Change the font of a player-textdraw."
canonical: https://open.mp/docs/scripting/functions/PlayerTextDrawFont
language: en
---

# PlayerTextDrawFont

## Description

Change the font of a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to change the font of |
| PlayerText:textid | The ID of the player-textdraw to change the font of |
| TEXT\_DRAW\_FONT:font | There are four font styles as shown below. A font value greater than 3 does not display, and anything greater than 16 crashes the client. |

Available Styles: ![Available Styles](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

Available Fonts: ![Available Fonts](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## Returns

This function does not return any specific values.

## Examples

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");

    // Set the font of player-textdraw 'welcomeText[playerid]' to 2.
    PlayerTextDrawFont(playerid, welcomeText[playerid], TEXT_DRAW_FONT_2);

    // Show 'welcomeText[playerid]' to player
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    return 1;
}
```

## Related Functions

-   [CreatePlayerTextDraw](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw): Create a player-textdraw.
-   [PlayerTextDrawDestroy](https://open.mp/docs/scripting/functions/PlayerTextDrawDestroy): Destroy a player-textdraw.
-   [PlayerTextDrawGetFont](https://open.mp/docs/scripting/functions/PlayerTextDrawGetFont): Gets the text font of a player-textdraw.
-   [PlayerTextDrawColor](https://open.mp/docs/scripting/functions/PlayerTextDrawColor): Set the color of the text in a player-textdraw.
-   [PlayerTextDrawBoxColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBoxColor): Set the color of a player-textdraw's box.
-   [PlayerTextDrawBackgroundColor](https://open.mp/docs/scripting/functions/PlayerTextDrawBackgroundColor): Set the background color of a player-textdraw.
-   [PlayerTextDrawAlignment](https://open.mp/docs/scripting/functions/PlayerTextDrawAlignment): Set the alignment of a player-textdraw.
-   [PlayerTextDrawLetterSize](https://open.mp/docs/scripting/functions/PlayerTextDrawLetterSize): Set the letter size of the text in a player-textdraw.
-   [PlayerTextDrawTextSize](https://open.mp/docs/scripting/functions/PlayerTextDrawTextSize): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-   [PlayerTextDrawSetOutline](https://open.mp/docs/scripting/functions/PlayerTextDrawSetOutline): Toggle the outline on a player-textdraw.
-   [PlayerTextDrawSetShadow](https://open.mp/docs/scripting/functions/PlayerTextDrawSetShadow): Set the shadow on a player-textdraw.
-   [PlayerTextDrawSetProportional](https://open.mp/docs/scripting/functions/PlayerTextDrawSetProportional): Scale the text spacing in a player-textdraw to a proportional ratio.
-   [PlayerTextDrawUseBox](https://open.mp/docs/scripting/functions/PlayerTextDrawUseBox): Toggle the box on a player-textdraw.
-   [PlayerTextDrawSetString](https://open.mp/docs/scripting/functions/PlayerTextDrawSetString): Set the text of a player-textdraw.
-   [PlayerTextDrawShow](https://open.mp/docs/scripting/functions/PlayerTextDrawShow): Show a player-textdraw.
-   [PlayerTextDrawHide](https://open.mp/docs/scripting/functions/PlayerTextDrawHide): Hide a player-textdraw.
