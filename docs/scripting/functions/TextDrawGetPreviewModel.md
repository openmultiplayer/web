---
title: TextDrawGetPreviewModel
description: Gets the preview model of a 3D preview textdraw.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the preview model of a 3D preview textdraw.

| Name        | Description                                         |
|-------------|-----------------------------------------------------|
| Text:textid | The ID of the textdraw to get the preview model of. |

## Returns

Returns the 3D textdraw preview model.

## Examples

```c
new Text:textdraw;

public OnGameModeInit()
{
    textdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(textdraw, true);
    TextDrawBoxColor(textdraw, 0x000000FF);
    TextDrawTextSize(textdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(textdraw, 411);

    new previewModel = TextDrawGetPreviewModel(textdraw);
    // The `previewModel` will be '411'
    return 1;
}
```

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Set the model for a textdraw model preview.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
