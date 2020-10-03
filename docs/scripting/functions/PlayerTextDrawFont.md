---
id: PlayerTextDrawFont
title: PlayerTextDrawFont
description: Change the font of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Change the font of a player-textdraw.

| Name     | Description                                                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-textdraw to change the font of                                                                          |
| text     | The ID of the player-textdraw to change the font of                                                                                       |
| font     | There are four font styles as shown below. A font value greater than 3 does not display, and anything greater than 16 crashes the client. |

Available Fonts:

|

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 240.0, 580.0, "Welcome to my SA-MP server");
    // Set the font of player-textdraw 'welcomeText' to 2.
    PlayerTextDrawFont(playerid, welcomeText[playerid], 2);
```

## Related Functions

- [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](../functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.
