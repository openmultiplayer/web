---
id: PlayerTextDrawColor
title: PlayerTextDrawColor
description: Sets the text color of a player-textdraw.
tags: ['player', 'textdraw', 'playertextdraw']
---

<TagLinks />

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Sets the text color of a player-textdraw


| Name | Description |
|------|-------------|
|playerid | The ID of the player who's textdraw to set the color of|
|text | The TextDraw to change.|
|color | The color in hexadecimal format.|


## Returns

This function does not return any specific values.


## Examples


```c
new PlayerText:pTextdraw[MAX_PLAYERS];
�
public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, x, y, "...");
    PlayerTextDrawColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Red text
    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```


## Notes

:::tip


 You can also use Gametext colors in textdraws.
 The textdraw must be re-shown to the player in order to update the color.



:::


## Related Functions


-  CreatePlayerTextDraw: Create a player-textdraw.
-  PlayerTextDrawDestroy: Destroy a player-textdraw.
-  PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
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