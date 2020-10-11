---
id: PlayerTextDrawFont
title: PlayerTextDrawFont
description: Change the font of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='feature (player-textdraws)' version='SA-MP 0.3e' />

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
new PlayerText:gWelcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // First, create the textdraw
    gWelcomeText[playerid] = CreatePlayerTextDraw(playerid, 240.0, 580.0, "Welcome to my SA-MP server");
    // Set the font of player-textdraw 'gWelcomeText' to 2.
    PlayerTextDrawFont(playerid, gWelcomeText[playerid], 2);
}

public OnPlayerDisconnect(playerid)
{
    PlayerTextDrawHide(playerid, gWelcomeText[playerid]);
}
```

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide.md): Hide a player-textdraw.
