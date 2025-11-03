---
title: TextDrawSetPreviewRot
sidebar_label: TextDrawSetPreviewRot
description: Sets the rotation and zoom of a 3D model preview textdraw.
tags: ["textdraw"]
---

## คำอธิบาย

Sets the rotation and zoom of a 3D model preview textdraw.

| Name        | Description                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| Float:fRotX | The X rotation value.                                                                                                    |
| Float:fRotY | The Y rotation value.                                                                                                    |
| Float:fRotZ | The Z rotation value.                                                                                                    |
| Float:fZoom | The zoom value, default value 1.0, smaller values make the camera closer and larger values make the camera further away. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:textdraw

public OnGameModeInit()
{
    textdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(textdraw, 1);
    TextDrawBoxColor(textdraw, 0x000000FF);
    TextDrawTextSize(textdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(textdraw, 411);
    TextDrawSetPreviewRot(textdraw, -10.0, 0.0, -20.0, 1.0);
    //You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## บันทึก

:::warning

The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW and already have a model set in order for this function to have effect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Set rotation of a 3D player textdraw preview.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Set the 3D preview model of a textdraw.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Set the colours of a vehicle in a 3D textdraw preview.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
