---
title: PlayerTextDrawGetPreviewRot
description: Gets the rotation and zoom of a 3D model preview player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the rotation and zoom of a 3D model preview player-textdraw.

| Name        | Description |
| ----------- | ------------------------------------------------------------------ |
| playerid | The ID of the player. |
| PlayerText:textid | The ID of the player-textdraw to get rotation and zoom of. |
| &Float:rotationX | A float variable into which to store rotationX coordinate, passed by reference. |
| &Float:rotationY | A float variable into which to store rotationY coordinate, passed by reference. |
| &Float:rotationZ | A float variable into which to store rotationZ coordinate, passed by reference. |
| &Float:zoom | A float variable into which to store zoom value, passed by reference. |

## Examples

```c
new PlayerText: gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    PlayerTextDrawGetPreviewRot(playerid, gMyTextdraw[playerid], rotationX, rotationY, rotationZ, zoom);
    // The `rotationX, rotationY, rotationZ, zoom` will be '-10.0, 0.0, -20.0, 1.0'
    return 1;
}
```

## Related Functions

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Set the 3D preview model of a player textdraw.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D player textdraw preview.

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
