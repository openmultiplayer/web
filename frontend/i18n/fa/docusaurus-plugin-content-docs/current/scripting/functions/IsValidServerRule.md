---
title: IsValidServerRule
sidebar_label: IsValidServerRule
description: چک می‌کنه که آیا server rule داده شده معتبره یا نه.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا server rule داده شده معتبره یا نه.

| نام          | توضیحات                                                  |
| ------------ | -------------------------------------------------------- |
| const rule[] | نام server rule که باید چک بشه.                         |

## مقادیر برگشتی

true برمی‌گردونه اگه server rule معتبر باشه، وگرنه false.

## مثال‌ها

```c
if (IsValidServerRule("version"))
{
    // Server rule is valid
}
else
{
    // Server rule is not valid
}
```

## توابع مرتبط

- [AddServerRule](AddServerRule): اضافه کردن یه server rule.
- [RemoveServerRule](RemoveServerRule): حذف server rule.