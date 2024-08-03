---
title: SetPlayerObjectMaterialText
description: Replace the texture of a player object with text.
tags: ["player", "object", "playerobject"]
---

## Description

Replace the texture of a player object with text.

| Name                                     | Description                                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| playerid                                 | The ID of the player whose player object to set the text of.                   |
| objectid                                 | The ID of the object on which to place the text.                               |
| text[]                                   | The text to set.                                                               |
| materialIndex                            | The material index to replace with text (DEFAULT: 0).                          |
| OBJECT_MATERIAL_SIZE:materialSize        | The [size](../resources/materialtextsizes) of the material (DEFAULT: 256x128). |
| const fontFace[]                         | The font to use (DEFAULT: Arial).                                              |
| fontSize                                 | The size of the text (DEFAULT: 24) (MAX 255).                                  |
| bool:bold                                | Bold text. Set to 1 for bold, 0 for not (DEFAULT: 1).                          |
| fontColour                               | The color of the text (DEFAULT: White).                                        |
| backgroundColour                         | The background color (DEFAULT: None (transparent)).                            |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | The [alignment](../resources/materialtextsizes) of the text (DEFAULT: Left).   |
| OPEN_MP_TAGS:...                         | Indefinite number of arguments of any tag.                                     |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new myObject = CreatePlayerObject(playerid, 19353, 0.0, 0.0, 10.0, 0.0, 0.0, 90.0); //create the object
        SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
        // write "SA-MP 0.3.DL" on the object, with orange font color and black background
        return 1;
    }
    return 1;
}
```

## Notes

:::tip

Color embedding can be used for multiple colors in the text.

:::

## Related Functions

- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Replace the texture of a player object with the texture from another model in the game.

## Advanaced Map Editors

- [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion
