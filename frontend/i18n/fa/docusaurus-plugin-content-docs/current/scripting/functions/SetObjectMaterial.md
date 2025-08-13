---
title: SetObjectMaterial
sidebar_label: SetObjectMaterial
description: جایگزینی بافت یک آبجکت با بافت مدل دیگری در بازی.
tags: ["object"]
---

## توضیحات

جایگزینی بافت یک آبجکت با بافت مدل دیگری در بازی.

| نام                    | توضیحات                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| objectid               | شناسه آبجکتی که قرار است بافت آن تغییر کند                                                                                           |
| materialIndex          | شاخص متریال روی آبجکت برای تغییر (۰ تا ۱۵)                                                                                         |
| modelid                | شناسه مدلی که بافت جایگزین روی آن قرار دارد. از ۰ برای شفافیت استفاده کنید. از -۱ برای تغییر رنگ متریال بدون تغییر بافت استفاده کنید. |
| const textureLibrary[] | نام فایل txd که شامل بافت جایگزین است (در صورت عدم نیاز از "none" استفاده کنید)                                                  |
| const textureName[]    | نام بافتی که به عنوان جایگزین استفاده می‌شود (در صورت عدم نیاز از "none" استفاده کنید)                                          |
| materialColour         | رنگ آبجکت که تنظیم می‌شود، به صورت عدد صحیح یا هگزادسیمال در فرمت رنگ ARGB. استفاده از ۰ رنگ موجود متریال را حفظ می‌کند.       |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا شکست خورد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/mycommand", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreateObject(19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetObjectMaterial(myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // بافت آبجکت ما را با بافت آبجکت 19341 جایگزین می‌کند
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

نور vertex آبجکت در صورت تغییر رنگ متریال ناپدید خواهد شد.

:::

:::warning

شما باید از فرمت رنگ ARGB استفاده کنید، نه RGBA که در پیام‌های کلاینت و غیره استفاده می‌شود.

:::

## توابع مرتبط

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): جایگزینی بافت یک آبجکت بازیکن با بافت مدل دیگری در بازی.
- [SetObjectMaterialText](SetObjectMaterialText): جایگزینی بافت یک آبجکت با متن.

## ویرایشگرهای نقشه پیشرفته

- [Texture Studio](https://github.com/Pottus/Texture-Studio) توسط Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) توسط Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) توسط RedFusion