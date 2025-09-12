---
title: GetPlayerObjectMaterialText
sidebar_label: GetPlayerObjectMaterialText
description: دریافت داده‌های متن متریال از یک index از player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت داده‌های متن متریال از یک index از player-object.

| نام                                      | توضیحات                                                             |
|-------------------------------------------|-------------------------------------------------------------------------|
| playerid                                  | ID بازیکن.                                                   |
| objectid                                  | ID player-object.                                            |
| materialIndex                             | index متریال در object. (0 تا 15)                             |
| text[]                                    | آرایه‌ای برای ذخیره متن، به صورت reference پاس داده می‌شود.             |
| textSize                                  | اندازه متن.                                                   |
| &OBJECT_MATERIAL_SIZE:materialSize        | متغیری برای ذخیره materialSize، به صورت reference پاس داده می‌شود.     |
| fontFace[]                                | آرایه‌ای برای ذخیره fontFace، به صورت reference پاس داده می‌شود.         |
| fontFaceSize                              | اندازه fontFace.                                               |
| &fontSize                                 | متغیری برای ذخیره fontSize، به صورت reference پاس داده می‌شود.         |
| &bool:bold                                | متغیر boolean برای ذخیره bold، به صورت reference پاس داده می‌شود.     |
| &fontColour                               | متغیری برای ذخیره fontColour، به صورت reference پاس داده می‌شود.       |
| &backgroundColour                         | متغیری برای ذخیره backgroundColour، به صورت reference پاس داده می‌شود. |
| &OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | متغیری برای ذخیره textAlignment، به صورت reference پاس داده می‌شود.    |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود ندارد یا index متریال نامعتبر است.

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new 
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetPlayerObjectMaterialText(playerid, playerobjectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
// text = "OPEN.MP"
// materialSize = OBJECT_MATERIAL_SIZE_256x128
// fontFace = "Arial"
// fontSize = 38
// bold = true
// fontColour = 0xFF0000FF
// backgroundColour = 0x00000000
// textAlignment = OBJECT_MATERIAL_TEXT_ALIGN_LEFT
```

## توابع مرتبط

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): جایگزینی texture یک player-object با texture از مدل دیگری در بازی.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): جایگزینی texture یک player object با متن.
- [IsPlayerObjectMaterialSlotUsed](IsPlayerObjectMaterialSlotUsed): بررسی اینکه آیا slot متریال player-object استفاده شده است.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): دریافت داده‌های متریال از index یک player-object.
- [GetObjectMaterialText](GetObjectMaterialText): دریافت داده‌های متن متریال از index یک object.