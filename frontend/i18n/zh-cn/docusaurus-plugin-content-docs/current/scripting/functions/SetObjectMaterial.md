---
title: SetObjectMaterial
sidebar_label: SetObjectMaterial
description: Replace the texture of an object with the texture from another model in the game.
tags: ["object"]
---

## Description

Replace the texture of an object with the texture from another model in the game.

| Name                   | Description                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid               | The ID of the object to change the texture of                                                                                               |
| materialIndex          | The material index on the object to change (0 to 15)                                                                                        |
| modelid                | The modelid on which the replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the texture. |
| const textureLibrary[] | The name of the txd file which contains the replacement texture (use "none" if not required)                                                |
| const textureName[]    | The name of the texture to use as the replacement (use "none" if not required)                                                              |
| materialColour         | The object color to set, as an integer or hex in ARGB color format. Using 0 keeps the existing material color.                              |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/mycommand", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreateObject(19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetObjectMaterial(myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // Replaces the texture of our object with the texture of object 19341
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Vertex lighting of the object will disappear if material color is changed.

:::

:::warning

You MUST use ARGB color format, not RGBA like used in client messages etc.

:::

## Related Functions

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Replace the texture of a player object with the texture from another model in the game.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.

## Advanaced Map Editors

- [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion
