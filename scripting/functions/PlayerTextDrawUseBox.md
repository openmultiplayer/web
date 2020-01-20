---
title: PlayerTextDrawUseBox
description: Toggle the box on a player-textdraw.
tags: ['player', 'textdraw', 'playertextdraw']
---

# PlayerTextDrawUseBox

<TagLinks />

::: warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Toggle the box on a player-textdraw.


| Name | Description |
|------|-------------|
|playerid | The ID of the player whose textdraw to toggle the box of|
|text | The ID of the player-textdraw to toggle the box of|
|use | 1 to use a box or 0 to not use a box|


## Returns

This function does not return any specific values.


## Examples


```c
new PlayerText:MyTD[MAX_PLAYERS];
 
public OnPlayerConnect(playerid)
{
    MyTD[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Example text!~N~_");
    PlayerTextDrawUseBox(playerid, MyTD[playerid], 1);
    PlayerTextDrawBoxColor(playerid, MyTD[playerid], 0x00000066); // Set the box color to a semi-transparent black
    return 1;
}
```


## Related Functions


-  CreatePlayerTextDraw: Create a player-textdraw.
-  PlayerTextDrawDestroy: Destroy a player-textdraw.
-  PlayerTextDrawColor: Set the color of the text in a player-textdraw.
-  PlayerTextDrawBoxColor: Set the color of a player-textdraw's box.
-  PlayerTextDrawBackgroundColor: Set the background color of a player-textdraw.
-  PlayerTextDrawAlignment: Set the alignment of a player-textdraw.
-  PlayerTextDrawFont: Set the font of a player-textdraw.
-  PlayerTextDrawLetterSize: Set the letter size of the text in a player-textdraw.
-  PlayerTextDrawTextSize: Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-  PlayerTextDrawSetOutline: Toggle the outline on a player-textdraw.
-  PlayerTextDrawSetShadow: Set the shadow on a player-textdraw.
-  PlayerTextDrawSetProportional: Scale the text spacing in a player-textdraw to a proportional ratio.
-  PlayerTextDrawSetString: Set the text of a player-textdraw.
-  PlayerTextDrawShow: Show a player-textdraw.
-  PlayerTextDrawHide: Hide a player-textdraw.