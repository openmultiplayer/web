---
title: GetObjectMaterial
sidebar_label: GetObjectMaterial  
description: دریافت داده‌های متریال از یک شاخص از آبجکت.
tags: ["object"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت داده‌های متریال از یک شاخص از آبجکت.

| نام               | توضیحات                                                               |
|-------------------|----------------------------------------------------------------------|
| objectid          | شناسه آبجکت.                                                          |
| materialIndex     | شاخص متریال روی آبجکت. (0 تا 15)                                        |
| &modelid          | متغیری برای ذخیره شناسه مدل، به صورت مرجع ارسال می‌شود.                    |
| textureLibrary[]  | آرایه‌ای برای ذخیره textureLibrary، به صورت مرجع ارسال می‌شود.           |
| textureLibrarySize| اندازه textureLibrary.                                               |
| textureName[]     | آرایه‌ای برای ذخیره textureName، به صورت مرجع ارسال می‌شود.              |
| textureNameSize   | اندازه textureName.                                                  |
| &materialColour   | متغیری برای ذخیره materialColour، به صورت مرجع ارسال می‌شود.            |

## مقادیر بازگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. آبجکت مشخص شده وجود ندارد یا شاخص متریال نامعتبر است.

## مثال‌ها

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

## توابع مرتبط

- [SetObjectMaterial](SetObjectMaterial): جایگزینی بافت آبجکت با بافت مدل دیگری از بازی.
- [SetObjectMaterialText](SetObjectMaterialText): جایگزینی بافت آبجکت با متن.
- [IsObjectMaterialSlotUsed](IsObjectMaterialSlotUsed): بررسی اینکه آیا اسلات متریال آبجکت استفاده شده است یا خیر.
- [GetObjectMaterialText](GetObjectMaterialText): دریافت داده‌های متن متریال از یک شاخص از آبجکت.
- [GetPlayerObjectMaterial](GetPlayerObjectMaterial): دریافت داده‌های متریال از یک شاخص از player-object.

</div>