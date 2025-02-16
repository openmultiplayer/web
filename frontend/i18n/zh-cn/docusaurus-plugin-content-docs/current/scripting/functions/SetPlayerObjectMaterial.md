---
title: SetPlayerObjectMaterial
description: Replace the texture of a player-object with the texture from another model in the game.
tags: ["player", "object", "playerobject"]
---

## Description

Replace the texture of a player-object with the texture from another model in the game.

| Name                   | Description                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid               | The ID of the player the object is associated to.                                                                                                |
| objectid               | The ID of the object to replace the texture of                                                                                                   |
| materialIndex          | The material index on the object to change (0 to 15)                                                                                             |
| modelid                | The modelid on which replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the existing texture. |
| const textureLibrary[] | The name of the txd file which contains the replacement texture (use "none" if not required)                                                     |
| const textureName[]    | The name of the texture to use as the replacement (use "none" if not required)                                                                   |
| materialColour         | The object color to set, as an integer or hex in ARGB format. Using 0 keeps the existing material color.                                         |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/objmat", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreatePlayerObject(playerid, 19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetPlayerObjectMaterial(playerid, myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // Replaces the texture of our player-object with the texture of model 19341
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Vertex lightning of the object will disappear if material color is changed.

:::

:::warning

You MUST use ARGB color format, not RGBA like used in client messages etc.

:::

## Related Functions

- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.

## Advanaced Map Editors

- [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion
