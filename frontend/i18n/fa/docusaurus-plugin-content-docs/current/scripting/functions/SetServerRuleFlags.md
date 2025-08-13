---
title: SetServerRuleFlags
sidebar_label: SetServerRuleFlags
description: flag های یک server rule رو تنظیم می‌کنه.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

flag های یک server rule رو تنظیم می‌کنه.

## پارامترها

| نام                       | توضیحات             |
|---------------------------|---------------------|
| const rule[]              | نام server rule.    |
| E_SERVER_RULE_FLAGS:flags | flag هایی که باید تنظیم بشن. |

## مقدار برگشتی

اگر تابع با موفقیت اجرا بشه **true** برمی‌گردونه، در غیر این صورت **false**.

## مثال‌ها

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);
    return 1;
}
```

## توابع مرتبط

- [AddServerRule](AddServerRule): اضافه کردن یک server rule.
- [RemoveServerRule](RemoveServerRule): حذف server rule.
- [IsValidServerRule](IsValidServerRule): بررسی اینکه آیا server rule داده شده معتبر هست یا نه.
- [GetServerRuleFlags](GetServerRuleFlags): گرفتن flag های یک server rule.