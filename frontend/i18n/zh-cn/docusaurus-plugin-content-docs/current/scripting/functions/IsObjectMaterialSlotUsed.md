---
title: IsObjectMaterialSlotUsed
description: Checks if a slot of object material is used.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a slot of object material is used.

| Name          | Description                                 |
|---------------|---------------------------------------------|
| objectid      | The ID of the object.                       |
| materialIndex | The material index on the object. (0 to 15) |

## Returns

The function returns the type of material slot usage.

`0` - None

`1` - Material

`2` - Text

## Examples

```c
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsObjectMaterialSlotUsed(objectid, 0);
// type = 1
```

Another example:

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsObjectMaterialSlotUsed(objectid, 0);
// type = 2
```

## Related Functions

- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [GetObjectMaterial](GetObjectMaterial): Get the material data from an index of the object.
- [GetObjectMaterialText](GetObjectMaterialText): Get the material text data from an index of the object.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): Checks if a slot of player-object material is used.
