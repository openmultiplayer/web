---
title: AddServerRule
sidebar_label: AddServerRule
description: قانون سرور اضافه می‌کند.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

قانون سرور اضافه می‌کند.

| نام             | توضیحات                                |
| ---------------- | ------------------------------------------ |
| const rule[]     | نام قانون سرور برای اضافه کردن.               |
| const format[]   | مقدار قانون سرور.                     |
| OPEN_MP_TAGS:... | تعداد نامحدود آرگومان از هر tag. |

## مقدار بازگشتی

true اگر تابع با موفقیت اجرا شود، در غیر این صورت false.

## مثال‌ها

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## توابع مرتبط

- [RemoveServerRule](RemoveServerRule): قانون سرور را حذف کنید.
- [IsValidServerRule](IsValidServerRule): بررسی می‌کند که آیا قانون سرور داده شده معتبر است.