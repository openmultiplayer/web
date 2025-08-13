---
title: SetObjectsDefaultCameraCollision
sidebar_label: SetObjectsDefaultCameraCollision
description: اجازه می‌ده که برخورد دوربین با object‌های تازه ساخته شده به طور پیش‌فرض غیرفعال بشه.
tags: ["object", "camera"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اجازه می‌ده که برخورد دوربین با object‌های تازه ساخته شده به طور پیش‌فرض غیرفعال بشه.

| نام          | توضیحات                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------|
| bool:disable | `true` برای غیرفعال کردن برخورد دوربین برای object‌های تازه ساخته شده و `false` برای فعال کردنشون (به طور پیش‌فرض فعاله). |

## مقدار برگشتی

توجه

این تابع فقط روی برخورد دوربین object‌هایی که بعد از استفاده‌ازش ساخته می‌شن تأثیر می‌ذاره - برخورد دوربین object‌های موجود رو فعال/غیرفعال نمی‌کنه.

## مثال‌ها

```c
public OnGameModeInit()
{
    // Disable camera collision
    SetObjectsDefaultCameraCollision(true);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects will NOT have camera collisions

    // Re-enable camera collisions
    SetObjectsDefaultCameraCollision(false);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects WILL have camera collision

    // BUT, the first set will still NOT have camera collisions

    return 1;
}
```

## نکات

:::tip

این تابع فقط روی برخورد دوربین object‌هایی که بعد از استفاده‌ازش ساخته می‌شن تأثیر می‌ذاره - برخورد دوربین object‌های موجود رو فعال/غیرفعال نمی‌کنه.

:::

:::warning

این تابع فقط خارج از مرزهای معمولی نقشه SA کار می‌کنه (بعد از 3000 واحد).

:::

## توابع مرتبط

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): غیرفعال کردن برخورد بین دوربین و object.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): غیرفعال کردن برخورد بین دوربین و player object.