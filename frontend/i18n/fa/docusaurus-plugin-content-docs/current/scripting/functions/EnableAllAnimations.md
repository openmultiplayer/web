---
title: EnableAllAnimations
sidebar_label: EnableAllAnimations
description: اجازه استفاده از انیمیشن‌های گم‌شده از برخی نسخه‌ها را می‌دهد.
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اجازه استفاده از انیمیشن‌های گم‌شده از برخی نسخه‌ها را می‌دهد.

| نام        | توضیحات                                                            |
| ----------- | ------------------------------------------------------------------ |
| bool:enable | 'true' برای فعال کردن انیمیشن‌های گم‌شده یا 'false' برای غیرفعالشان. |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    EnableAllAnimations(true);
    return 1;
}
```

## نکات

:::tip

همچنین می‌توانید انیمیشن‌های گم‌شده را از فایل [config.json](../../server/config.json) فعال یا غیرفعال کنید.

```json
"use_all_animations": false,
```

:::

## توابع مرتبط

- [AreAllAnimationsEnabled](AreAllAnimationsEnabled): آیا انیمیشن‌های گم‌شده از برخی نسخه‌ها فعال هستند؟
- [ApplyAnimation](ApplyAnimation): اعمال انیمیشن روی بازیکن.
- [ClearAnimations](ClearAnimations): پاک کردن انیمیشن‌هایی که بازیکن در حال اجرای آن‌هاست.

## منابع مرتبط

- [Animations](../resources/animations)