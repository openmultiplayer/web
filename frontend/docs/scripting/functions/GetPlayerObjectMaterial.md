---
title: GetPlayerObjectMaterial
sidebar_label: GetPlayerObjectMaterial
description: Get the material data from an index of the player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the material data from an index of the player-object.

| Name               | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| playerid           | The ID of the player.                                                 |
| objectid           | The ID of the player-object.                                          |
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
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new
    modelid,
    textureLibrary[16],
    textureName[16],
    materialColour;

GetPlayerObjectMaterial(playerid, playerobjectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);
// modelid = 19341
// textureLibrary = "egg_texts"
// textureName = "easter_egg01"
// materialColour = 0xFFFFFFFF
```

## Related Functions

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Replace the texture of a player-object with the texture from another model in the game.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Replace the texture of a player object with text.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): Checks if a slot of player-object material is used.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): Get the material text data from an index of the player-object.
- [GetObjectMaterial](GetObjectMaterial): Get the material data from an index of the object.
