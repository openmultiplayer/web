---
title: floatcos
sidebar_label: floatcos
description: گرفتن کسینوس از زاویه داده شده.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

گرفتن کسینوس از زاویه داده شده. زاویه ورودی میتونه بر حسب رادیان، درجه یا گراد باشه.

| نام            | توضیحات                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------- |
| Float:value    | زاویه ای که ازش کسینوس میگیریم.                                                                |
| anglemode:mode | [حالت زاویه](../resources/anglemodes) که استفاده میشه، بستگی به مقدار وارد شده داره. (پیش‌فرض: radian) |

## برگشتی

کسینوس مقدار وارد شده.

## مثال‌ها

```c
public OnGameModeInit()
{
    printf("The cosine from 90° is %.0f", floatcos(90.0, degrees));
    // خروجی: 0
    return 1;
}
```

## نکات

:::warning

GTA/SA-MP از درجه برای زاویه در بیشتر شرایط استفاده میکنه، مثلاً [GetPlayerFacingAngle](GetPlayerFacingAngle). بنابراین احتمالاً میخوای از حالت زاویه 'degrees' استفاده کنی، نه radian. همچنین توجه کن که زاویه‌ها در GTA پادساعتگردن؛ 270° شرقه و 90° غرب. جنوب هنوز 180° و شمال هنوز 0°/360°.

:::

## توابع مرتبط

- [floatsin](floatsin): گرفتن سینوس از زاویه مشخص.
- [floattan](floattan): گرفتن تانژانت از زاویه مشخص.

## منابع مرتبط

- [Angle Modes](../resources/anglemodes): ثابت‌های واحد SI برای اندازه‌گیری زاویه‌ها.