---
title: SetObjectsDefaultCameraCol
sidebar_label: SetObjectsDefaultCameraCol
description: اجازه می‌ده که برخورد دوربین با object‌های تازه ساخته شده به طور پیش‌فرض غیرفعال بشه.
tags: ["object", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

اجازه می‌ده که برخورد دوربین با object‌های تازه ساخته شده به طور پیش‌فرض غیرفعال بشه.

| نام     | توضیحات                                                                                           |
| ------- | ------------------------------------------------------------------------------------------------- |
| disable | 1 برای غیرفعال کردن برخورد دوربین برای object‌های تازه ساخته شده و 0 برای فعال کردنشون (به طور پیش‌فرض فعاله). |

## مقدار برگشتی

توجه

این تابع فقط روی برخورد دوربین object‌هایی که بعد از استفاده‌ازش ساخته می‌شن تأثیر می‌ذاره - برخورد دوربین object‌های موجود رو فعال/غیرفعال نمی‌کنه.

## مثال‌ها

```c
public OnGameModeInit()
{
    // Disable camera collision
    SetObjectsDefaultCameraCol(1);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects will NOT have camera collisions

    // Re-enable camera collisions
    SetObjectsDefaultCameraCol(0);

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

- [SetObjectNoCameraCol](SetObjectNoCameraCol): غیرفعال کردن برخورد بین دوربین و object.
- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol): غیرفعال کردن برخورد بین دوربین و player object.