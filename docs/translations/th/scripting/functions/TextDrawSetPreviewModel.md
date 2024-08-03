---
title: TextDrawSetPreviewModel
description: Set the model for a textdraw model preview.
tags: ["textdraw"]
---

## คำอธิบาย

Set the model for a textdraw model preview. Click here to see this function's effect.

| Name       | Description                                       |
| ---------- | ------------------------------------------------- |
| text       | The textdraw id that will display the 3D preview. |
| modelindex | The GTA SA or SA:MP model ID to display.          |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:textdraw;

public OnGameModeInit()
{
    textdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(textdraw, true);
    TextDrawBoxColor(textdraw, 0x000000FF);
    TextDrawTextSize(textdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(textdraw, 411); //Display model 411 (Infernus)
        //TextDrawSetPreviewModel(textdraw, 1); //Display model 1 (CJ Skin)
        //TextDrawSetPreviewModel(textdraw, 18646); //Display model 18646 (Police light object)

    //You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## บันทึก

:::tip

Use [TextDrawBackgroundColor](TextDrawBackgroundColor) to set the background color behind the model.

:::

:::warning

The textdraw MUST use the font type `TEXT_DRAW_FONT_MODEL_PREVIEW` in order for this function to have effect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawSetPreviewRot](../functions/TextDrawSetPreviewRot.md): Set rotation of a 3D textdraw preview.
- [TextDrawSetPreviewVehCol](../functions/TextDrawSetPreviewVehCol.md): Set the colours of a vehicle in a 3D textdraw preview.
- [TextDrawFont](../functions/TextDrawFont.md): Set the font of a textdraw.
- [PlayerTextDrawSetPreviewModel](../functions/PlayerTextDrawSetPreviewModel.md): Set model ID of a 3D player textdraw preview.

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw.md): Called when a player clicks on a textdraw.
