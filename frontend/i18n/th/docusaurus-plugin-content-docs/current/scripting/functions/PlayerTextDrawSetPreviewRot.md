---
title: PlayerTextDrawSetPreviewRot
description: Sets the rotation and zoom of a 3D model preview player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## คำอธิบาย

Sets the rotation and zoom of a 3D model preview player-textdraw.

| Name            | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| playerid        | The ID of the player whose player-textdraw to change.                                                                    |
| PlayerText:text | The ID of the player-textdraw to change.                                                                                 |
| Float:fRotX     | The X rotation value.                                                                                                    |
| Float:fRotY     | The Y rotation value.                                                                                                    |
| Float:fRotZ     | The Z rotation value.                                                                                                    |
| Float:fZoom     | The zoom value, default value 1.0, smaller values make the camera closer and larger values make the camera further away. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new PlayerText:textdraw;

public OnPlayerConnect(playerid)
{
    textdraw = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, textdraw, 1);
    PlayerTextDrawBoxColor(playerid, textdraw, 0x000000FF);
    PlayerTextDrawTextSize(playerid, textdraw, 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, textdraw, 411);
    PlayerTextDrawSetPreviewRot(playerid, textdraw, -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, textdraw);
    return 1;
}
```

## บันทึก

:::warning

The textdraw MUST use the font type TEXT_DRAW_FONT_MODEL_PREVIEW and already have a model set in order for this function to have effect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- TextDrawSetPreviewRot: Set rotation of a 3D textdraw preview.
- PlayerTextDrawSetPreviewModel: Set model ID of a 3D player textdraw preview.
- PlayerTextDrawSetPreviewVehCol: Set the colours of a vehicle in a 3D player textdraw preview.
- PlayerTextDrawFont: Set the font of a player-textdraw.
- OnPlayerClickPlayerTextDraw: Called when a player clicks on a player-textdraw.
