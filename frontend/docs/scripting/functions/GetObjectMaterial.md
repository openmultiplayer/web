---
title: GetObjectMaterial
sidebar_label: GetObjectMaterial
description: Get the material data from an index of the object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the material data from an index of the object.

| Name               | Description                                                           |
|--------------------|-----------------------------------------------------------------------|
| objectid           | The ID of the object.                                                 |
| materialIndex      | The material index on the object. (0 to 15)                           |
| &modelid           | A variable in which to store the model ID, passed by reference.       |
| textureLibrary[]   | An array into which to store the textureLibrary, passed by reference. |
| textureLibrarySize | The size of the textureLibrary.                                       |
| textureName[]      | An array into which to store the textureName, passed by reference.    |
| textureNameSize    | The size of the textureName.                                          |
| &materialColour    | A variable in which to store the materialColour, passed by reference. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist or an invalid material index is specified.

## Examples

```c
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new 
    modelid,
    textureLibrary[16],
    textureName[16],
    materialColour;

GetObjectMaterial(objectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);
// modelid = 19341
// textureLibrary = "egg_texts"
// textureName = "easter_egg01"
// materialColour = 0xFFFFFFFF
```

## Related Functions

- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): Checks if a slot of object material is used.
- [GetObjectMaterialText](GetObjectMaterialText): Get the material text data from an index of the object.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): Get the material data from an index of the player-object.
