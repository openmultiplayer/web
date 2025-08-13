---
title: SetServerRule
sidebar_label: SetServerRule
description: یه قانون سرور اضافه می‌کنه.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یه قانون سرور اضافه می‌کنه.

## پارامترها

| نام               | توضیحات                                                 |
| ----------------- | ----------------------------------------------------------- |
| const rule[]      | نام قانون سروری که باید اضافه بشه.                                |
| const format[]    | مقدار قانون سرور.                                      |
| OPEN_MP_TAGS:...  | تعداد نامحدودی آرگومان از هر tag ای.                  |

## مقدار برگشتی

اگر تابع با موفقیت اجرا شد true برمی‌گردونه، در غیر این صورت false.

## مثال‌ها

```c
public OnGameModeInit()
{
    SetServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## نکات

:::tip

این تابع دقیقاً مثل [AddServerRule](AddServerRule) کار می‌کنه.

:::

## توابع مرتبط

- [RemoveServerRule](RemoveServerRule): قانون سرور رو حذف می‌کنه.
- [IsValidServerRule](IsValidServerRule): بررسی می‌کنه که آیا قانون سرور معتبر هست یا نه.