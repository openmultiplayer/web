---
title: SetObjectMaterialText
description: Replace the texture of an object with text.
tags: ["object"]
---

## Description

Replace the texture of an object with text.

| Name                                     | Description                                                                                   |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| objectid                                 | The ID of the object to replace the texture of with text.                                     |
| const text[]                             | The text to show on the object. (MAX 2048 characters)                                         |
| materialIndex                            | The object's material index to replace with text.                                             |
| OBJECT_MATERIAL_SIZE:materialsize        | The [size](/docs/scripting/resources/materialtextsizes) of the material.                      |
| const fontFace[]                         | The font to use.                                                                              |
| fontSize                                 | The size of the text (MAX 255).                                                               |
| bool:bold                                | Bold text. Set to true for bold, false for not.                                               |
| fontColour                               | The color of the text, in ARGB format.                                                        |
| backgroundColour                         | The background color, in ARGB format.                                                         |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | The [alignment](/docs/scripting/resources/materialtextalignment) of the text (default: left). |
| OPEN_MP_TAGS:...                         | Indefinite number of arguments of any tag.                                                    |

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
        SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, false, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
        // write "SA-MP 0.3.DL" on the object, with orange font color and black background
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Color embedding can be used for multiple colors in the text.

:::

:::warning

You MUST use ARGB color format, not RGBA like used in client messages etc.
Text does not update after 16 calls against the same object.
:::

## Related Functions

- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Replace the texture of a player object with text.
- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.

## Advanaced Map Editors

- [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion
- [SetObjectMaterialText Editor](https://sampforum.blast.hk/showthread.php?tid=614667) by RIDE2DAY

## Related Resources

- [Material Text Sizes](../resources/materialtextsizes)
- [Material Text Alignments](../resources/materialtextalignment)
