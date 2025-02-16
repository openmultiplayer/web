---
title: TextDrawSetPreviewModel
sidebar_label: TextDrawSetPreviewModel
description: Set the model for a textdraw model preview.
tags: ["textdraw"]
---

## Description

Set the model for a textdraw model preview.

| Name        | Description                                       |
| ----------- | ------------------------------------------------- |
| Text:textid | The textdraw id that will display the 3D preview. |
| model       | The GTA SA or SA:MP model ID to display.          |

## Returns

This function does not return any specific values.

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

    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)
    // TextDrawSetPreviewModel(gMyTextdraw, 1); // Display model 1 (CJ Skin)
    // TextDrawSetPreviewModel(gMyTextdraw, 18646); // Display model 18646 (Police light object)

    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## Notes

:::tip

Use [TextDrawBackgroundColor](TextDrawBackgroundColor) to set the background color behind the model.

:::

:::warning

The textdraw MUST use the font type `TEXT_DRAW_FONT_MODEL_PREVIEW` in order for this function to have effect.

:::

## Related Functions

- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): Gets the preview model of a 3D preview textdraw.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Set rotation of a 3D textdraw preview.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D textdraw preview.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Set model ID of a 3D player textdraw preview.

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
