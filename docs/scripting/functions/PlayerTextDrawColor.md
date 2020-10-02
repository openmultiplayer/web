---
id: PlayerTextDrawColor
title: PlayerTextDrawColor
description: Sets the text color of a player-textdraw.
tags: ['player', 'textdraw', 'playertextdraw']
---

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


-  [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
-  [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
-  [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
-  [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
-  [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
-  [PlayerTextDrawFont](../functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
-  [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
-  [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-  [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
-  [PlayerTextDrawSetShadow](../functions/PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
-  [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
-  [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
-  [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
-  [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
-  [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.