---
title: GetServerRuleFlags
sidebar_label: GetServerRuleFlags
description: flag های یه server rule رو دریافت می‌کنه.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

flag های یه server rule رو دریافت می‌کنه.

## مقادیر برگشتی

flag های server rule رو برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);

    new E_SERVER_RULE_FLAGS:flags = GetServerRuleFlags("discord");
    printf("Flags: %d", _:flags); // Flags: 1
    return 1;
}
```

## توابع مرتبط

- [AddServerRule](AddServerRule): اضافه کردن یه server rule.
- [RemoveServerRule](RemoveServerRule): حذف server rule.
- [IsValidServerRule](IsValidServerRule): بررسی اعتبار server rule داده شده.
- [SetServerRuleFlags](SetServerRuleFlags): تنظیم flag های یه server rule.