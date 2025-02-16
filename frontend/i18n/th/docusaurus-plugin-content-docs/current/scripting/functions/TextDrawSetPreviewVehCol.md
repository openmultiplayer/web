---
title: TextDrawSetPreviewVehCol
sidebar_label: TextDrawSetPreviewVehCol
description: If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.
tags: ["textdraw"]
---

## คำอธิบาย

If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.

| Name   | Description                                                        |
| ------ | ------------------------------------------------------------------ |
| text   | The textdraw id that is set to display a 3D vehicle model preview. |
| color1 | The primary Color ID to set the vehicle to.                        |
| color2 | The secondary Color ID to set the vehicle to.                      |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:textdraw;

public OnGameModeInit()
{
    textdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(textdraw, 1);
    TextDrawBoxColor(textdraw, 0x000000FF);
    TextDrawTextSize(textdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(textdraw, 411); // Display model 411 (Infernus)
        TextDrawSetPreviewVehCol(textdraw, 6, 6); // Set the Infernus to have colour 6 (Yellow)

    //You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## บันทึก

:::warning

The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW in order for this function to have effect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawSetPreviewModel](../functions/TextDrawSetPreviewModel.md): Set the 3D preview model of a textdraw.
- [TextDrawSetPreviewRot](../functions/TextDrawSetPreviewRot.md): Set rotation of a 3D textdraw preview.
- [TextDrawFont](../functions/TextDrawFont.md): Set the font of a textdraw.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw.md): Called when a player clicks on a textdraw.
