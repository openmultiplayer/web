---
title: RemoveServerRule
sidebar_label: RemoveServerRule
description: قانون سرور رو حذف می‌کنه.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

قانون سرور رو حذف می‌کنه.

| نام               | توضیحات                                                 |
| ----------------- | ----------------------------------------------------------- |
| const rule[]      | نام قانون سرور برای حذف.                             |

## مقدار برگشتی

اگر تابع با موفقیت اجرا بشه true برمی‌گردونه، وگرنه false.

## مثال‌ها

```c
RemoveServerRule("rule");
```

## توابع مرتبط

- [AddServerRule](AddServerRule): اضافه کردن قانون سرور.
- [IsValidServerRule](IsValidServerRule): بررسی معتبر بودن قانون سرور داده شده.