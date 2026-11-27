---
title: "TextDrawGetPreviewModel | open.mp"
description: "Gets the preview model of a 3D preview textdraw."
canonical: https://open.mp/docs/scripting/functions/TextDrawGetPreviewModel
language: en
---

# TextDrawGetPreviewModel

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the preview model of a 3D preview textdraw.

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to get the preview model of. |

## Returns

Returns the 3D textdraw preview model.

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

    new previewModel = TextDrawGetPreviewModel(gMyTextdraw);
    // previewModel = 411
    return 1;
}
```

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawSetPreviewModel](https://open.mp/docs/scripting/functions/TextDrawSetPreviewModel): Set the model for a textdraw model preview.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.
-   [TextDrawLetterSize](https://open.mp/docs/scripting/functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
-   [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize): Set the size of a textdraw box.
-   [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline): Choose whether the text has an outline.
-   [TextDrawSetProportional](https://open.mp/docs/scripting/functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
-   [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
-   [TextDrawSetString](https://open.mp/docs/scripting/functions/TextDrawSetString): Set the text in an existing textdraw.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
