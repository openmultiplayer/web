---
title: GetObjectMaterialText
sidebar_label: GetObjectMaterialText
description: Get the material text data from an index of the object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the material text data from an index of the object.

| Name                                      | Description                                                             |
|-------------------------------------------|-------------------------------------------------------------------------|
| objectid                                  | The ID of the object.                                                   |
| materialIndex                             | The material index on the object. (0 to 15)                             |
| text[]                                    | An array into which to store the text, passed by reference.             |
| textSize                                  | The size of the text.                                                   |
| &OBJECT_MATERIAL_SIZE:materialSize        | A variable in which to store the materialSize, passed by reference.     |
| fontFace[]                                | An array into which to store the fontFace, passed by reference.         |
| fontFaceSize                              | The size of the fontFace.                                               |
| &fontSize                                 | A variable in which to store the fontSize, passed by reference.         |
| &bool:bold                                | A boolean variable in which to store the bold, passed by reference.     |
| &fontColour                               | A variable in which to store the fontColour, passed by reference.       |
| &backgroundColour                         | A variable in which to store the backgroundColour, passed by reference. |
| &OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | A variable in which to store the textAlignment, passed by reference.    |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist or an invalid material index is specified.

## Examples

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new 
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetObjectMaterialText(objectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
// text = "OPEN.MP"
// materialSize = OBJECT_MATERIAL_SIZE_256x128
// fontFace = "Arial"
// fontSize = 38
// bold = true
// fontColour = 0xFF0000FF
// backgroundColour = 0x00000000
// textAlignment = OBJECT_MATERIAL_TEXT_ALIGN_LEFT
```

## Related Functions

- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): Checks if a slot of object material is used.
- [GetObjectMaterial](GetObjectMaterial): Get the material data from an index of the object.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): Get the material text data from an index of the player-object.
