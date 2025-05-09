---
title: SetPlayerObjectMaterialText
sidebar_label: SetPlayerObjectMaterialText
description: Replace the texture of a player object with text.
tags: ["player"]
---

## คำอธิบาย

Replace the texture of a player object with text.

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| playerid      | The ID of the player whose player object to set the text of. |
| objectid      | The ID of the object on which to place the text.             |
| text          | The text to set.                                             |
| materialindex | The material index to replace with text (DEFAULT: 0).        |
| materialsize  | The size of the material (DEFAULT: 256x128).                 |
| fontface      | The font to use (DEFAULT: Arial).                            |
| fontsize      | The size of the text (DEFAULT: 24) (MAX 255).                |
| bold          | Bold text. Set to 1 for bold, 0 for not (DEFAULT: 1).        |
| fontcolor     | The color of the text (DEFAULT: White).                      |
| backcolor     | The background color (DEFAULT: None (transparent)).          |
| textalignment | The alignment of the text (DEFAULT: Left).                   |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
if (strcmp("/text", cmdtext, true) == 0)
{
    new myobject = CreatePlayerObject(playerid, 19353, 0, 0, 10, 0.0, 0.0, 90.0); //create the object
    SetPlayerObjectMaterialText(playerid, myobject, "SA-MP {FFFFFF}0.3{008500}e {FF8200}RC7", 0, OBJECT_MATERIAL_SIZE_256x128,\
"Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
    // write "SA-MP 0.3e RC7" on the object, with orange font color and black background
return 1;
}
```

## บันทึก

:::tip

Color embedding can be used for multiple colors in the text.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetObjectMaterialText: Replace the texture of an object with text.
- SetPlayerObjectMaterial: Replace the texture of a player object with the texture from another model in the game.
- Ultimate Creator by Nexius
- Texture Studio by [uL]Pottus
- Fusez's Map Editor by RedFusion
- Map Editor I by adri1
