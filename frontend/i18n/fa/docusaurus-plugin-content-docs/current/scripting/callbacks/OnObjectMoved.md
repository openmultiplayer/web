---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: این کالبک پس از حرکت یک شی با MoveObject فراخوانده می‌شود (زمانی که حرکت متوقف می‌شود).
tags: ["object"]
---

## توضیحات

این کالبک پس از حرکت یک شی با MoveObject فراخوانده می‌شود (زمانی که حرکت متوقف می‌شود).

| نام | توضیحات |
| -------- | ----------------------------------- |
| objectid | شناسه شی که حرکت کرده است |

## مقادیر برگشتی

این همیشه ابتدا در فیلتر اسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnObjectMoved(objectid)
{
    printf("Object %d finished moving.", objectid);
    return 1;
}
```

## نکته‌ها

:::tip

[SetObjectPos](../functions/SetObjectPos) هنگام استفاده در این کالبک کار نمی‌کند. برای رفع این مشکل، شی را دوباره ایجاد کنید.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerObjectMoved](OnPlayerObjectMoved): این کالبک زمانی فراخوانده می‌شود که یک شی-بازیکن حرکت خود را متوقف کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [MoveObject](../functions/MoveObject): حرکت دادن یک شی.
- [MovePlayerObject](../functions/MovePlayerObject): حرکت دادن یک شی بازیکن.
- [IsObjectMoving](../functions/IsObjectMoving): بررسی حرکت شی.
- [StopObject](../functions/StopObject): متوقف کردن حرکت شی.