---
title: GetObjectMaterialText
sidebar_label: GetObjectMaterialText
description: دریافت داده‌های متن متریال از یک شاخص از آبجکت.
tags: ["object"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت داده‌های متن متریال از یک شاخص از آبجکت.

| نام                                      | توضیحات                                                             |
|-------------------------------------------|---------------------------------------------------------------------|
| objectid                                  | شناسه آبجکت.                                                        |
| materialIndex                             | شاخص متریال روی آبجکت. (0 تا 15)                                     |
| text[]                                    | آرایه‌ای برای ذخیره متن، به صورت مرجع ارسال می‌شود.                    |
| textSize                                  | اندازه متن.                                                         |
| &OBJECT_MATERIAL_SIZE:materialSize        | متغیری برای ذخیره materialSize، به صورت مرجع ارسال می‌شود.           |
| fontFace[]                                | آرایه‌ای برای ذخیره fontFace، به صورت مرجع ارسال می‌شود.              |
| fontFaceSize                              | اندازه fontFace.                                                   |
| &fontSize                                 | متغیری برای ذخیره fontSize، به صورت مرجع ارسال می‌شود.               |
| &bool:bold                                | متغیر بولی برای ذخیره bold، به صورت مرجع ارسال می‌شود.               |
| &fontColour                               | متغیری برای ذخیره fontColour، به صورت مرجع ارسال می‌شود.             |
| &backgroundColour                         | متغیری برای ذخیره backgroundColour، به صورت مرجع ارسال می‌شود.       |
| &OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | متغیری برای ذخیره textAlignment، به صورت مرجع ارسال می‌شود.          |

## مقادیر بازگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. آبجکت مشخص شده وجود ندارد یا شاخص متریال نامعتبر است.

## مثال‌ها

```c
new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);
SetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);

new 
    text[16],
    OBJECT_MATERIAL_SIZE:materialSize,
    fontFace[16],
    fontSize,
    bool:bold,
    fontColour,
    backgroundColour,
    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;

GetObjectMaterialText(objectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);
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

- [SetObjectMaterial](SetObjectMaterial): جایگزینی بافت آبجکت با بافت مدل دیگری از بازی.
- [SetObjectMaterialText](SetObjectMaterialText): جایگزینی بافت آبجکت با متن.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): بررسی اینکه آیا اسلات متریال آبجکت استفاده شده است یا خیر.
- [GetObjectMaterial](GetObjectMaterial): دریافت داده‌های متریال از یک شاخص از آبجکت.
- [GetPlayerObjectMaterialText](GetPlayerObjectMaterialText): دریافت داده‌های متن متریال از یک شاخص از player-object.

</div>