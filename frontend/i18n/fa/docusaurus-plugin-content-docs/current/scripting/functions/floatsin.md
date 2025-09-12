---
title: floatsin
sidebar_label: floatsin
description: sine یک زاویه داده شده رو دریافت کنه.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

sine یک زاویه داده شده رو دریافت میکنه. زاویه ورودی میتونه بر حسب radian، درجه یا grade باشه.

| نام           | توضیحات                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Float:value    | زاویه‌ای که sine اش رو میخوایم.                                                               |
| anglemode:mode | [angle mode](../resources/anglemodes) که استفاده میشه، بسته به مقدار وارد شده. (پیش‌فرض: radian) |

## برگشتی

sine مقدار وارد شده.

## مثال‌ها

```c
GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)
{
    if (GetPlayerPos(playerid, x, y, z)) // این تابع 0 برمیگردونه اگر بازیکن متصل نباشه
    {
        new Float:z_angle;
        GetPlayerFacingAngle(playerid, z_angle);

        x += distance * floatsin(-z_angle, degrees); // زاویه‌ها در GTA پادساعتگردن، پس باید زاویه رو برعکس کنیم
        y += distance * floatcos(-z_angle, degrees);

        return 1; // در صورت موفقیت 1 برمیگردونه، مختصات واقعی با reference برمیگردن
    }
    return 0; // اگر بازیکن متصل نباشه 0 برمیگردونه
}
```

## نکات

:::warning

GTA/SA-MP از درجه برای زاویه‌ها در اکثر شرایط استفاده میکنن، مثلاً [GetPlayerFacingAngle](GetPlayerFacingAngle). بنابراین، احتمالاً میخوای از حالت زاویه 'degrees' استفاده کنی، نه radian. همچنین دقت کن که زاویه‌ها در GTA پادساعتگردن؛ 270° شرق و 90° غرب. جنوب هنوز 180° و شمال هنوز 0°/360°.

:::

## توابع مرتبط

- [floattan](floattan): گرفتن tangent از یک زاویه خاص.
- [floatcos](floatcos): گرفتن cosine از یک زاویه خاص.

## منابع مرتبط

- [Angle Modes](../resources/anglemodes): ثابت‌های SI برای اندازه‌گیری زاویه‌ها.