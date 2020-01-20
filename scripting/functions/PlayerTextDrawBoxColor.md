---
title: PlayerTextDrawBoxColor
description: Sets the color of a textdraw's box (PlayerTextDrawUseBox ).
tags: ['player', 'textdraw', 'playertextdraw']
---

# PlayerTextDrawBoxColor

<TagLinks />

::: warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Sets the color of a textdraw's box (PlayerTextDrawUseBox ).


| Name | Description |
|------|-------------|
|playerid | The ID of the player whose textdraw to set the box color of.|
|text | The ID of the player textdraw to set the box color of.|
|color | The color to set. Alpha (transparency) is supported.|


## Returns

This function does not return any specific values.


## Examples


```c
new PlayerText:pTextdraw[MAX_PLAYERS];
 
public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Red box with no transparency
    return 1;
}
```


## Related Functions


-  CreatePlayerTextDraw: Create a player-textdraw.
-  PlayerTextDrawDestroy: Destroy a player-textdraw.
-  PlayerTextDrawColor: Set the color of the text in a player-textdraw.
-  PlayerTextDrawBackgroundColor: Set the background color of a player-textdraw.
-  PlayerTextDrawAlignment: Set the alignment of a player-textdraw.
-  PlayerTextDrawFont: Set the font of a player-textdraw.
-  PlayerTextDrawLetterSize: Set the letter size of the text in a player-textdraw.
-  PlayerTextDrawTextSize: Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-  PlayerTextDrawSetOutline: Toggle the outline on a player-textdraw.
-  PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
-  PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
-  PlayerTextDrawUseBox: Toggle the box on a player-textdraw.
-  PlayerTextDrawSetString: Set the text of a player-textdraw.
-  PlayerTextDrawShow: Show a player-textdraw.
-  PlayerTextDrawHide: Hide a player-textdraw.