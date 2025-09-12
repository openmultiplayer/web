---
title: CreateExplosion
sidebar_label: CreateExplosion
description: ایجاد انفجار در مختصات مشخص.
tags: []
---

## توضیحات

ایجاد انفجار در مختصات مشخص.

| نام          | توضیحات                                                       |
| ------------ | ------------------------------------------------------------ |
| Float:x      | مختصات X انفجار.                                             |
| Float:y      | مختصات Y انفجار.                                             |
| Float:z      | مختصات Z انفجار.                                             |
| type         | [نوع](../resources/explosionlist) انفجار.                     |
| Float:radius | شعاع انفجار.                                                 |

## مقادیر بازگشتی

این تابع همیشه 1 را برمی‌گرداند، حتی زمانی که نوع انفجار و/یا مقادیر شعاع نامعتبر باشند.

## مثال‌ها

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // دریافت موقعیت بازیکن
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // ایجاد انفجار در موقعیت بازیکن
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## نکات

:::tip

محدودیتی برای تعداد انفجارهایی که یک بازیکن می‌تواند همزمان ببیند وجود دارد. این تقریباً 10 انفجار است.

:::

## توابع مرتبط

- [CreateExplosionForPlayer](CreateExplosionForPlayer): ایجاد انفجار که فقط برای یک بازیکن قابل مشاهده است.

## همچنین ببینید

- [انواع انفجار](../resources/explosionlist): فهرستی از تمام انواع انفجار.
