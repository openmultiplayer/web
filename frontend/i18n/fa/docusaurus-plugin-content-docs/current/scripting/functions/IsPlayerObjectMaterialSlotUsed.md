---
title: IsPlayerObjectMaterialSlotUsed
sidebar_label: IsPlayerObjectMaterialSlotUsed
description: چک می‌کنه که آیا یه اسلات از player-object material استفاده شده یا نه.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه اسلات از player-object material استفاده شده یا نه.

| نام           | توضیحات                                        |
|---------------|-------------------------------------------------|
| playerid      | ID بازیکن.                                      |
| objectid      | ID player-object.                               |
| materialIndex | ایندکس material روی آبجکت. (0 تا 15)           |

## مقادیر برگشتی

این تابع نوع استفاده اسلات material رو برمی‌گردونه.

`0` - هیچی

`1` - Material

`2` - Text

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// type = 1
```

مثال دیگه:

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);
// type = 2
```

## توابع مرتبط

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): جایگزین کردن texture player-object با texture از مدل دیگه‌ای در بازی.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): جایگزین کردن texture player object با متن.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): دریافت داده material از یه ایندکس player-object.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): دریافت داده material text از یه ایندکس player-object.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): چک می‌کنه که آیا یه اسلات از object material استفاده شده یا نه.