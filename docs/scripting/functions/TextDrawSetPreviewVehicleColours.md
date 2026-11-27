---
title: "TextDrawSetPreviewVehicleColours | open.mp"
description: "If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle."
canonical: https://open.mp/docs/scripting/functions/TextDrawSetPreviewVehicleColours
language: en
---

# TextDrawSetPreviewVehicleColours

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.

| Name | Description |
| --- | --- |
| Text:textid | The textdraw id that is set to display a 3D vehicle model preview. |
| colour1 | The primary color ID to set the vehicle to. |
| colour2 | The secondary color ID to set the vehicle to. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)
    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 6); // Set the Infernus to have colour 6 (Yellow)

    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## Notes

warning

The textdraw MUST use the font type `TEXT_DRAW_FONT_MODEL_PREVIEW` in order for this function to have effect.

## Related Functions

-   [TextDrawSetPreviewModel](https://open.mp/docs/scripting/functions/TextDrawSetPreviewModel): Set the 3D preview model of a textdraw.
-   [TextDrawSetPreviewRot](https://open.mp/docs/scripting/functions/TextDrawSetPreviewRot): Set rotation of a 3D textdraw preview.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.

## Related Callbacks

-   [OnPlayerClickTextDraw](https://open.mp/docs/scripting/callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
