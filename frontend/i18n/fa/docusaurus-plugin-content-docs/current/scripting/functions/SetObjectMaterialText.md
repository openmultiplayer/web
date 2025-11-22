---
title: SetObjectMaterialText
sidebar_label: SetObjectMaterialText
description: جایگزینی بافت یک آبجکت با متن.
tags: ["object"]
---

## توضیحات

جایگزینی بافت یک آبجکت با متن.

| نام                                      | توضیحات                                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| objectid                                 | شناسه آبجکتی که قرار است بافت آن با متن جایگزین شود.                                        |
| const text[]                             | متنی که روی آبجکت نمایش داده می‌شود. (حداکثر ۲۰۴۸ کاراکتر)                                  |
| materialIndex                            | شاخص متریال آبجکت برای جایگزینی با متن.                                                      |
| OBJECT_MATERIAL_SIZE:materialsize        | [اندازه](../resources/materialtextsizes) متریال.                               |
| const fontFace[]                         | فونت مورد استفاده.                                                                           |
| fontSize                                 | اندازه متن (حداکثر ۲۵۵).                                                                      |
| bool:bold                                | متن ضخیم. برای ضخیم true، برای غیرضخیم false تنظیم کنید.                                      |
| fontColour                               | رنگ متن، در فرمت ARGB.                                                                        |
| backgroundColour                         | رنگ پس‌زمینه، در فرمت ARGB.                                                                  |
| OBJECT_MATERIAL_TEXT_ALIGN:textAlignment | [تراز](../resources/materialtextalignment) متن (پیش‌فرض: چپ‌چین).           |
| OPEN_MP_TAGS:...                         | تعداد نامحدود آرگومان از هر نوع تگ.                                                           |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا شکست خورد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/text", cmdtext, true) == 0)
    {
        new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); //ایجاد آبجکت
        SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, false, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENT);
        // نوشتن "SA-MP 0.3.DL" روی آبجکت، با رنگ فونت نارنجی و پس‌زمینه سیاه
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

تعبیه رنگ می‌تواند برای چندین رنگ در متن استفاده شود.

:::

:::warning

شما باید از فرمت رنگ ARGB استفاده کنید، نه RGBA که در پیام‌های کلاینت و غیره استفاده می‌شود.
متن پس از ۱۶ فراخوانی در مقابل همان آبجکت به‌روزرسانی نمی‌شود.
:::

## توابع مرتبط

- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): جایگزینی بافت یک آبجکت بازیکن با متن.
- [SetObjectMaterial](SetObjectMaterial): جایگزینی بافت یک آبجکت با بافت مدل دیگری در بازی.

## ویرایشگرهای نقشه پیشرفته

- [Texture Studio](https://github.com/Pottus/Texture-Studio) توسط Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) توسط Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) توسط RedFusion
- [SetObjectMaterialText Editor](https://sampforum.blast.hk/showthread.php?tid=614667) توسط RIDE2DAY

## منابع مرتبط

- [اندازه‌های متن متریال](../resources/materialtextsizes)
- [تراز متن متریال](../resources/materialtextalignment)