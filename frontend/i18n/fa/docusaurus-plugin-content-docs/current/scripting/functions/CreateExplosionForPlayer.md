---
title: CreateExplosionForPlayer
sidebar_label: CreateExplosionForPlayer
description: ایجاد انفجار که فقط برای یک بازیکن قابل مشاهده است.
tags: ["player"]
---

## توضیحات

ایجاد انفجار که فقط برای یک بازیکن قابل مشاهده است. این می‌تواند برای جدا کردن انفجارها از سایر بازیکنان یا برای نمایش آنها فقط در جهان‌های مجازی مشخص استفاده شود.

| نام          | توضیحات                                                       |
| ------------ | ------------------------------------------------------------ |
| playerid     | شناسه بازیکن برای ایجاد انفجار.                        |
| Float:x      | مختصات X انفجار.                                             |
| Float:y      | مختصات Y انفجار.                                             |
| Float:z      | مختصات Z انفجار.                                             |
| type         | [نوع](../resources/explosionlist) انفجار.                     |
| Float:radius | شعاع انفجار.                                                 |

## مقادیر بازگشتی

این تابع همیشه **true** برمی‌گرداند، حتی اگر تابع با شکست مواجه شود (بازیکن وجود ندارد، شعاع نامعتبر یا نوع انفجار نامعتبر).

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/burnme", true) == 0)
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        CreateExplosionForPlayer(playerid, x, y, z, 1, 10.0);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

محدودیتی برای تعداد انفجارهایی که یک بازیکن می‌تواند همزمان ببیند وجود دارد. این تقریباً 10 انفجار است.

:::

## توابع مرتبط

- [CreateExplosion](CreateExplosion): ایجاد انفجار که برای تمام بازیکنان قابل مشاهده است.

## همچنین ببینید

- [انواع انفجار](../resources/explosionlist): فهرستی از تمام انواع انفجار.
