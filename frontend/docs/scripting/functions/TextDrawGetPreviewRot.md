---
title: TextDrawGetPreviewRot
sidebar_label: TextDrawGetPreviewRot
description: Gets the rotation and zoom of a 3D model preview textdraw.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the rotation and zoom of a 3D model preview textdraw.

| Name             | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Text:textid      | The ID of the textdraw to get rotation and zoom of.                             |
| &Float:rotationX | A float variable into which to store rotationX coordinate, passed by reference. |
| &Float:rotationY | A float variable into which to store rotationY coordinate, passed by reference. |
| &Float:rotationZ | A float variable into which to store rotationZ coordinate, passed by reference. |
| &Float:zoom      | A float variable into which to store zoom value, passed by reference.           |

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    TextDrawGetPreviewRot(gMyTextdraw, rotationX, rotationY, rotationZ, zoom);
    // rotationX = -10.0
    // rotationY = 0.0
    // rotationZ = -20.0
    // zoom = 1.0
    return 1;
}
```

## Related Functions

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Sets the rotation and zoom of a 3D model preview textdraw.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Set the 3D preview model of a textdraw.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D textdraw preview.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
