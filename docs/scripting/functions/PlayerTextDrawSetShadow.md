---
id: PlayerTextDrawSetShadow
title: PlayerTextDrawSetShadow
description: Adds a shadow to the bottom-right side of the text in a player-textdraw.
tags: ['player', 'textdraw', 'playertextdraw']
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Adds a shadow to the bottom-right side of the text in a player-textdraw. The shadow font matches the text font.


| Name | Description |
|------|-------------|
|playerid | The ID of the player whose player-textdraw to set the shadow size of.|
|text | The ID of the player-textdraw to change the shadow of|
|size | The size of the shadow. 0 will hide the shadow.|


## Returns

 1: The function was executed successfully. 

 0: The function failed to execute. This means the player-textdraw doesn't exist.


## Examples


```c
new Text:MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0, "Example Text");
PlayerTextDrawSetShadow(playerid, MyTextDraw, 1);
```


## Notes

:::tip

The shadow can be cut by the box area if the size is set too big for the area.

:::


## Related Functions


-  [CreatePlayerTextDraw](../functions/CreatePlayerTextDraw.md): Create a player-textdraw.
-  [PlayerTextDrawDestroy](../functions/PlayerTextDrawDestroy.md): Destroy a player-textdraw.
-  [PlayerTextDrawColor](../functions/PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
-  [PlayerTextDrawBoxColor](../functions/PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
-  [PlayerTextDrawBackgroundColor](../functions/PlayerTextDrawBackgroundColor.md): Set the background color of a player-textdraw.
-  [PlayerTextDrawAlignment](../functions/PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
-  [PlayerTextDrawFont](../functions/PlayerTextDrawFont.md): Set the font of a player-textdraw.
-  [PlayerTextDrawLetterSize](../functions/PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
-  [PlayerTextDrawTextSize](../functions/PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
-  [PlayerTextDrawSetOutline](../functions/PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
-  [PlayerTextDrawSetProportional](../functions/PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
-  [PlayerTextDrawUseBox](../functions/PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
-  [PlayerTextDrawSetString](../functions/PlayerTextDrawSetString.md): Set the text of a player-textdraw.
-  [PlayerTextDrawShow](../functions/PlayerTextDrawShow.md): Show a player-textdraw.
-  [PlayerTextDrawHide](../functions/PlayerTextDrawHide.md): Hide a player-textdraw.