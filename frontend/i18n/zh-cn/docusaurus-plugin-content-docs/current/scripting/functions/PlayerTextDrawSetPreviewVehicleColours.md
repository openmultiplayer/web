---
title: PlayerTextDrawSetPreviewVehicleColours
sidebar_label: PlayerTextDrawSetPreviewVehicleColours
description: Set the colour of a vehicle in a player-textdraw model preview (if a vehicle is shown).
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Set the colour of a vehicle in a player-textdraw model preview (if a vehicle is shown).

| Name              | Description                                           |
| ----------------- | ----------------------------------------------------- |
| playerid          | The ID of the player whose player-textdraw to change. |
| PlayerText:textid | The ID of the player's player-textdraw to change.     |
| colour1           | The colour to set the vehicle's primary colour to.      |
| colour2           | The colour to set the vehicle's secondary colour to.    |

## Returns

This function does not return any specific values.

## Examples

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);
    
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);
    PlayerTextDrawSetPreviewVehicleColours(playerid, gTextDraw[playerid], 3, 6);

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## Notes

:::warning

The textdraw MUST use the font `TEXT_DRAW_FONT_MODEL_PREVIEW` and be showing a vehicle in order for this function to have effect.

:::

## Related Functions

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Set model ID of a 3D player textdraw preview.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): Set the font of a player-textdraw.

## Related Callbacks

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
