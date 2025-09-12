---
title: GetPlayerZAim
sidebar_label: GetPlayerZAim
description: Z Aim بازیکن رو دریافت می‌کنه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

Z Aim بازیکن رو دریافت می‌کنه. (مربوط به دوربین و نشانه‌گیری)

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

Z Aim بازیکن رو به صورت مقدار float برمی‌گردونه.

## مثال‌ها

```c
new Float:zAim = GetPlayerZAim(playerid);

SendClientMessage(playerid, -1, "Z Aim = %f", zAim);
```

## توابع مرتبط

- [GetPlayerCameraPos](GetPlayerCameraPos): دریافت موقعیت دوربین بازیکن.