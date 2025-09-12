---
title: OnScriptUnloadPlayer
sidebar_label: OnScriptUnloadPlayer
description: این کالبک برای هر بازیکن متصل زمانی فراخوانده می‌شود که اسکریپت unload شود.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.3.1.2748' />

## توضیحات

این کالبک برای هر بازیکن متصل زمانی فراخوانده می‌شود که اسکریپت unload شود.

| نام                | توضیحات                                                                        |
| ------------------ | ------------------------------------------------------------------------ |
| playerid           | شناسه بازیکنی که اسکریپت برای او unload شده است.                               |
| bool:isEntryScript | تعیین اینکه آیا یک entry script (اسکریپت اصلی) است یا یک side script.        |

## مقادیر برگشتی

این کالبک مقادیر برگشتی را پردازش نمی‌کند.

## مثال‌ها

```c
public OnScriptUnloadPlayer(playerid, bool:isEntryScript)
{
    printf("Script unloaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");
}
```

## نکته‌ها

:::tip

این کالبک زمانی فراخوانده می‌شود که در حال **unload کردن** یک side script (filterscript) در زمان اجرا هستید.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnScriptLoadPlayer](OnScriptLoadPlayer): این کالبک برای هر بازیکن متصل زمانی فراخوانده می‌شود که اسکریپت بارگذاری شود.
- [OnPlayerConnect](OnPlayerConnect): این کالبک زمانی فراخوانده می‌شود که بازیکن به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): این کالبک زمانی فراخوانده می‌شود که بازیکن از سرور خارج شود.