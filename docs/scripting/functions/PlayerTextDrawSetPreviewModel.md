---
title: PlayerTextDrawSetPreviewModel
description: Sets a player textdraw 3D preview sprite of a specified model ID.
tags: ["player", "textdraw", "playertextdraw"]
---

## Description

Sets a player textdraw 3D preview sprite of a specified model ID.

| Name              | Description                                       |
| ----------------- | ------------------------------------------------- |
| playerid          | The PlayerTextDraw player ID.                     |
| PlayerText:textid | The textdraw id that will display the 3D preview. |
| model             | The GTA SA or SA:MP model ID to display.          |

## Returns

**true** - The function was executed successfully. If an invalid model is passed 'success' is reported, but the model will appear as a yellow/black question mark.

**false** - The function failed to execute. Player and/or textdraw do not exist.

## Examples

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);
    
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // Show an Infernus (model 411)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 0); // Display model 0 (CJ Skin)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 18646); // Display model 18646 (police light object)

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## Notes

:::warning

The textdraw MUST use the font type `TEXT_DRAW_FONT_MODEL_PREVIEW` in order for this function to have effect.

:::

## Related Functions

- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): Gets the preview model of a 3D preview player-textdraw.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.

## Related Callbacks

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
