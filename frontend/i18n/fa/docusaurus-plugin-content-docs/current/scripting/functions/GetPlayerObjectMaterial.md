---
title: GetPlayerObjectMaterial
sidebar_label: GetPlayerObjectMaterial
description: دریافت داده‌های متریال از یک index از player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت داده‌های متریال از یک index از player-object.

| نام               | توضیحات                                                           |
|--------------------|-----------------------------------------------------------------------|
| playerid           | ID بازیکن.                                                 |
| objectid           | ID player-object.                                          |
| materialIndex      | index متریال در object. (0 تا 15)                           |
| &modelid           | متغیری برای ذخیره ID مدل، به صورت reference پاس داده می‌شود.       |
| textureLibrary[]   | آرایه‌ای برای ذخیره textureLibrary، به صورت reference پاس داده می‌شود. |
| textureLibrarySize | اندازه textureLibrary.                                       |
| textureName[]      | آرایه‌ای برای ذخیره textureName، به صورت reference پاس داده می‌شود.    |
| textureNameSize    | اندازه textureName.                                          |
| &materialColour    | متغیری برای ذخیره materialColour، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود ندارد یا index متریال نامعتبر است.

## مثال‌ها

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

## توابع مرتبط

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): جایگزینی texture یک player-object با texture از مدل دیگری در بازی.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): جایگزینی texture یک player object با متن.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): بررسی اینکه آیا slot متریال player-object استفاده شده است.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): دریافت داده‌های متن متریال از index یک player-object.
- [GetObjectMaterial](GetObjectMaterial): دریافت داده‌های متریال از index یک object.