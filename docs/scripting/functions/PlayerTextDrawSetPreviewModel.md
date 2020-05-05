---
id: PlayerTextDrawSetPreviewModel
title: PlayerTextDrawSetPreviewModel
description: Sets a player textdraw 2D preview sprite of a specified model ID.
tags: ['player', 'textdraw', 'playertextdraw']
---

:::warning

This function was added in SA-MP 0.3x and will not work in earlier versions!

:::

## Description

Sets a player textdraw 2D preview sprite of a specified model ID.


| Name | Description |
|------|-------------|
|playerid | The PlayerTextDraw player ID.|
|text | The textdraw id that will display the 3D preview.|
|modelindex | The GTA SA or SA:MP model ID to display.|


## Returns

 1: The function was executed successfully. If an invalid model is passed 'success' is reported, but the model will appear as a yellow/black question mark.

 0: The function failed to execute. Player and/or textdraw do not exist.


## Examples


```c
new PlayerText:textdraw;

public OnPlayerConnect(playerid)
{
    textdraw = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, textdraw, 1);
    PlayerTextDrawBoxColor(playerid, textdraw, 0x000000FF);
    PlayerTextDrawTextSize(playerid, textdraw, 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, textdraw, 411); // Show an Infernus (model 411)
    //PlayerTextDrawSetPreviewModel(playerid, textdraw, 0); //Display model 0 (CJ Skin)
    //PlayerTextDrawSetPreviewModel(playerid, textdraw, 18646); //Display model 18646 (police light object)
    PlayerTextDrawShow(playerid, textdraw);
    return 1;
}
```


## Notes

:::warning

The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW in order for this function to have effect.

:::


## Related Functions


-  PlayerTextDrawSetPreviewRot: Set rotation of a 3D player textdraw preview.
-  PlayerTextDrawSetPreviewVehCol: Set the colours of a vehicle in a 3D player textdraw preview.
-  PlayerTextDrawFont: Set the font of a player-textdraw.
-  OnPlayerClickPlayerTextDraw: Called when a player clicks on a player-textdraw.