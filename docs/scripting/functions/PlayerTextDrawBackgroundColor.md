---
id: PlayerTextDrawBackgroundColor
title: PlayerTextDrawBackgroundColor
description: Adjust the background color of a player-textdraw.
tags: ['player', 'textdraw', 'playertextdraw']
---

<TagLinks />

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Adjust the background color of a player-textdraw.


| Name | Description |
|------|-------------|
|playerid | The ID of the player whose player-textdraw to set the background color of|
|text | The ID of the player-textdraw to set the background color of|
|color | The color that the textdraw should be set to.|


## Returns





Note

If PlayerTextDrawSetOutline is used with size > 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor




## Examples


```c
new PlayerText:MyTextdraw;
�
public OnPlayerConnect(playerid)
{
    MyTextdraw = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawUseBox(playerid, MyTextdraw, 1);
    PlayerTextDrawBackgroundColor(playerid, MyTextdraw, 0xFFFFFFFF); // Set the background color of MyTextdraw to white
    return 1;
}
```


## Notes

:::tip

If PlayerTextDrawSetOutline is used with size > 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor

:::


## Related Functions


-  CreatePlayerTextDraw: Create a player-textdraw.
-  PlayerTextDrawDestroy: Destroy a player-textdraw.
-  PlayerTextDrawColor: Set the color of the text in a player-textdraw.
-  PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
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