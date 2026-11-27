---
title: "SetObjectMaterialText | open.mp"
description: "Replace the texture of an object with text."
canonical: https://open.mp/docs/scripting/functions/SetObjectMaterialText
language: en
---

# SetObjectMaterialText

## Description

Replace the texture of an object with text.

| Name | Description |
| --- | --- |
| objectid | The ID of the object to replace the texture of with text. |
| const text\[\] | The text to show on the object. (MAX 2048 characters) |
| materialIndex | The object's material index to replace with text (default: 0) (0 to 15). |
| OBJECT\_MATERIAL\_SIZE:materialsize | The [size](https://open.mp/docs/scripting/resources/materialtextsizes) of the material (default: 256x128). |
| const fontFace\[\] | The font to use (default: Arial). |
| fontSize | The size of the text (default: 24) (MAX 255). |
| bool:bold | Bold text. Set to true for bold, false for not (default: true). |
| fontColour | The color of the text, in ARGB format (default: White). |
| backgroundColour | The background color, in ARGB format (default: None (transparent)). |
| OBJECT\_MATERIAL\_TEXT\_ALIGN:textAlignment | The [alignment](https://open.mp/docs/scripting/resources/materialtextalignment) of the text (default: left). |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); //create the object
        SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, false, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENT);
        // write "SA-MP 0.3.DL" on the object, with orange font color and black background
        return 1;
    }
    return 0;
}
```

## Notes

tip

[Color embedding](https://open.mp/docs/scripting/resources/colorslist#color-embedding) can be used for multiple colors in the text.

warning

-   You MUST use **ARGB** color format, not RGBA like used in client messages etc.
-   Text does not update after 16 calls against the same object.

## Related Functions

-   [SetPlayerObjectMaterialText](https://open.mp/docs/scripting/functions/SetPlayerObjectMaterialText): Replace the texture of a player object with text.
-   [SetObjectMaterial](https://open.mp/docs/scripting/functions/SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.

## Advanced Map Editors

-   [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
-   [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion
-   [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus

## Related Resources

-   [Material Text Sizes](https://open.mp/docs/scripting/resources/materialtextsizes)
-   [Material Text Alignments](https://open.mp/docs/scripting/resources/materialtextalignment)
