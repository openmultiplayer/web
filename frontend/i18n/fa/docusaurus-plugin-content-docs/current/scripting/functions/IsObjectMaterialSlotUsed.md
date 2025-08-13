---
title: IsObjectMaterialSlotUsed
sidebar_label: IsObjectMaterialSlotUsed
description: چک می‌کنه که آیا یه اسلات از material آبجکت استفاده شده یا نه.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه اسلات از material آبجکت استفاده شده یا نه.

| نام           | توضیحات                                        |
|---------------|-------------------------------------------------|
| objectid      | ID آبجکت.                                       |
| materialIndex | ایندکس material روی آبجکت. (0 تا 15)           |

## مقادیر برگشتی

این تابع نوع استفاده اسلات material رو برمی‌گردونه.

`0` - هیچی

`1` - Material

`2` - Text

## مثال‌ها

```c
new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);
SetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);

new type = IsObjectMaterialSlotUsed(objectid, 0);
// type = 1
```

مثال دیگه:

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new type = IsObjectMaterialSlotUsed(objectid, 0);
// type = 2
```

## توابع مرتبط

- [SetObjectMaterial](SetObjectMaterial): جایگزین کردن texture آبجکت با texture از مدل دیگه‌ای در بازی.
- [SetObjectMaterialText](SetObjectMaterialText): جایگزین کردن texture آبجکت با متن.
- [GetObjectMaterial](GetObjectMaterial): دریافت داده material از یه ایندکس آبجکت.
- [GetObjectMaterialText](GetObjectMaterialText): دریافت داده material text از یه ایندکس آبجکت.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): چک می‌کنه که آیا یه اسلات از player-object material استفاده شده یا نه.