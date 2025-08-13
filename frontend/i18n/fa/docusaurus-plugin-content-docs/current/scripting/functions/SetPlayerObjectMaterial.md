---
title: SetPlayerObjectMaterial
sidebar_label: SetPlayerObjectMaterial
description: texture یک player-object رو با texture از مدل دیگه‌ای توی بازی جایگزین می‌کنه.
tags: ["player", "object", "playerobject"]
---

## توضیحات

texture یک player-object رو با texture از مدل دیگه‌ای توی بازی جایگزین می‌کنه.

| نام                    | توضیحات                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid               | آیدی پلیری که object بهش مربوطه                                                                                                                 |
| objectid               | آیدی object ای که قراره texture اش جایگزین بشه                                                                                                  |
| materialIndex          | اندکس material روی object که قراره تغییر کنه (0 تا 15)                                                                                           |
| modelid                | آیدی مدلی که texture جایگزین روش قرار داره. از 0 برای alpha استفاده کن. از -1 برای تغییر رنگ material بدون تغییر texture موجود استفاده کن |
| const textureLibrary[] | اسم فایل txd که شامل texture جایگزین هست (از "none" استفاده کن اگه نیاز نیست)                                                                |
| const textureName[]    | اسم texture ای که قراره به عنوان جایگزین استفاده بشه (از "none" استفاده کن اگه نیاز نیست)                                                     |
| materialColour         | رنگ object که قراره تنظیم بشه، به عنوان عدد صحیح یا hex با فرمت ARGB. استفاده از 0 رنگ material موجود رو نگه می‌داره                        |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/objmat", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreatePlayerObject(playerid, 19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetPlayerObjectMaterial(playerid, myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // Texture e player-object ro ba texture e model 19341 jaygozin mikone
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

Vertex lightning مربوط به object ناپدید می‌شه اگه رنگ material تغییر کنه.

:::

:::warning

حتماً باید از فرمت رنگ ARGB استفاده کنی، نه RGBA مثل چیزی که توی پیام‌های client استفاده می‌شه.

:::

## توابع مرتبط

- [SetObjectMaterial](SetObjectMaterial): texture یک object رو با texture از مدل دیگه‌ای توی بازی جایگزین می‌کنه.

## ویرایش کننده‌های پیشرفته نقشه

- [Texture Studio](https://github.com/Pottus/Texture-Studio) by Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) by Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) by RedFusion