---
title: TextDrawGetPreviewVehicleColours
description: Gets the preview vehicle colours of a 3D preview textdraw.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the preview vehicle colours of a 3D preview textdraw.

| Name        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| Text:textid | The ID of the textdraw to get the vehicle colours of.            |
| &colour1    | A variable into which to store the colour1, passed by reference. |
| &colour2    | A variable into which to store the colour2, passed by reference. |

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColour(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 8);

    new colour1, colour2;
    TextDrawGetPreviewVehicleColours(gMyTextdraw, colour1, colour2);
    // colour1 = 6
    // colour2 = 8
    return 1;
}
```

## Related Functions

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Set the 3D preview model of a textdraw.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Set rotation of a 3D textdraw preview.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
