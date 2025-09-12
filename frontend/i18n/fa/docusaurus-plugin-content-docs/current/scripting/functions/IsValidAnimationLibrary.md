---
title: IsValidAnimationLibrary
sidebar_label: IsValidAnimationLibrary
description: چک می‌کنه که آیا animation library داده شده معتبره یا نه.
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا animation library داده شده معتبره یا نه.

| نام          | توضیحات                                                  |
| ------------ | -------------------------------------------------------- |
| const name[] | نام animation library که باید چک بشه.                   |

## مقادیر برگشتی

true برمی‌گردونه اگه animation library معتبر باشه، وگرنه false.

## مثال‌ها

```c
if (IsValidAnimationLibrary("PED"))
{
    // Animation library is valid
}
else
{
    // Animation library is not valid
}
```

## توابع مرتبط

- [ApplyAnimation](ApplyAnimation): اعمال یه animation به بازیکن.

## منابع مرتبط

- [Animations](../resources/animations)