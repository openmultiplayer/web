---
title: floattan
sidebar_label: floattan
description: tangent یک زاویه داده شده رو دریافت کنه.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

tangent یک زاویه داده شده رو دریافت میکنه. زاویه ورودی میتونه بر حسب radian، درجه یا grade باشه.

| نام        | توضیحات                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Float:value | زاویه‌ای که tangent اش رو میخوایم.                                                            |
| anglemode   | [angle mode](../resources/anglemodes) که استفاده میشه، بسته به مقدار وارد شده. (پیش‌فرض: radian) |

## برگشتی

tangent مقدار وارد شده.

## مثال‌ها

```c
public OnGameModeInit()
{
    printf("The tangent from 30° is %.0f", floattan(30.0, degrees));
    // خروجی: 1
    return 1;
}
```

## نکات

:::warning

GTA/SA-MP از درجه برای زاویه‌ها در اکثر شرایط استفاده میکنن، مثلاً [GetPlayerFacingAngle](GetPlayerFacingAngle). بنابراین، احتمالاً میخوای از حالت زاویه 'degrees' استفاده کنی، نه radian. همچنین دقت کن که زاویه‌ها در GTA پادساعتگردن؛ 270° شرق و 90° غرب. جنوب هنوز 180° و شمال هنوز 0°/360°.

:::

## توابع مرتبط

- [floatsin](floatsin): گرفتن sine از یک زاویه خاص.
- [floatcos](floatcos): گرفتن cosine از یک زاویه خاص.

## منابع مرتبط

- [Angle Modes](../resources/anglemodes): ثابت‌های SI برای اندازه‌گیری زاویه‌ها.