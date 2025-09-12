---
title: DestroyActor
sidebar_label: DestroyActor
description: بازیگری که با CreateActor ایجاد شده را نابود می‌کند.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

بازیگری که با CreateActor ایجاد شده را نابود می‌کند.

| نام    | توضیحات                                                   |
| ------- | --------------------------------------------------------- |
| actorid | شناسه بازیگر برای نابودی. توسط CreateActor برگردانده شده. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیگر با شناسه مشخص شده وجود ندارد.

## مثال‌ها

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## توابع مرتبط

- [CreateActor](CreateActor): ایجاد بازیگر (NPC ایستا).