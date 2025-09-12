---
title: SetPlayerObjectMaterialText
sidebar_label: SetPlayerObjectMaterialText
description: texture یک player object رو با متن جایگزین می‌کنه.
tags: ["player", "object", "playerobject"]
---

## توضیحات

texture یک player object رو با متن جایگزین می‌کنه.

| نام                                      | توضیحات                                                                        |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| playerid                                 | آیدی پلیری که قراره متن player object اش تنظیم بشه                              |
| objectid                                 | آیدی object ای که قراره متن روش قرار بگیره                                      |
| text[]                                   | متنی که قراره تنظیم بشه                                                         |
| materialIndex                            | اندکس material که قراره با متن جایگزین بشه (پیش‌فرض: 0)                        |
| OBJECT_MATERIAL_SIZE:materialSize        | [اندازه](../resources/materialtextsizes) material (پیش‌فرض: 256x128)          |
| const fontFace[]                         | فونتی که قراره استفاده بشه (پیش‌فرض: Arial)                                    |
| fontSize                                 | اندازه متن (پیش‌فرض: 24) (حداکثر 255)                                          |
| bool:bold                                | متن پررنگ. برای پررنگ 1، برای نرمال 0 (پیش‌فرض: 1)                            |
| fontColour                               | رنگ متن (پیش‌فرض: سفید)                                                        |
| backgroundColour                         | رنگ پس‌زمینه (پیش‌فرض: هیچ (شفاف))                                             |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | [تراز](../resources/materialtextsizes) متن (پیش‌فرض: چپ)                       |
| OPEN_MP_TAGS:...                         | تعداد نامشخصی از آرگومان‌ها با هر نوع تگی                                       |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new myObject = CreatePlayerObject(playerid, 19353, 0.0, 0.0, 10.0, 0.0, 0.0, 90.0); //object ro besaz
        SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
        // "SA-MP 0.3.DL" ro ru object benvis, ba range font narenji va background siah
        return 1;
    }
    return 1;
}
```

## نکات

:::tip

Color embedding می‌تونه برای چندین رنگ توی متن استفاده بشه.

:::

## توابع مرتبط

- [SetObjectMaterialText](SetObjectMaterialText): texture یک object رو با متن جایگزین می‌کنه.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): texture یک player object رو با texture از مدل دیگه‌ای توی بازی جایگزین می‌کنه.

## ویرایش کننده‌های پیشرفته نقشه

- [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion