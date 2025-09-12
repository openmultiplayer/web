---
title: GetGravity
sidebar_label: GetGravity
description: گرویتی فعلی سرور رو برمیگردونه.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

گرویتی فعلی سرور رو برمیگردونه.

## مثال‌ها

</div>

**سرور SA-MP:**

```c
#include <a_samp>

#if !defined GetGravity
    native Float:GetGravity();
#endif

public OnGameModeInit()
{
    printf("Current gravity: %f", GetGravity());
    return 1;
}
```

**سرور open.mp:**

```c
#include <open.mp>

public OnGameModeInit()
{
    printf("Current gravity: %f", GetGravity());
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

تو سرور SA-MP این تابع پیش‌فرض تعریف نشده. برای استفاده باید 'native Float:GetGravity();' رو بعد از include کردن a_samp.inc اضافه کنی.

:::

## تابع‌های مرتبط

- [SetGravity](SetGravity): گرویتی سرور رو تنظیم می‌کنه.
- [GetPlayerGravity](GetPlayerGravity): گرویتی یک بازیکن رو برمیگردونه.

</div>