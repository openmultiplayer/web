---
title: UnBlockIpAddress
sidebar_label: UnBlockIpAddress
description: یک IP address که قبلاً با BlockIpAddress مسدود شده بود رو آزاد کن.
tags: ["administration", "ip address"]
---

## توضیحات

یک IP address که قبلاً با [BlockIpAddress](BlockIpAddress) مسدود شده بود رو آزاد می‌کنه.

| نام               | توضیحات                |
| ----------------- | -------------------------- |
| const ipAddress[] | IP address ای که می‌خوای آزاد کنی. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1");
    return 1;
}
```

## توابع مرتبط

- [BlockIpAddress](BlockIpAddress): یک IP address رو برای مدت زمان مشخصی از اتصال به سرور مسدود کن.
- [IsBanned](IsBanned): چک می‌کنه که آیا IP address داده شده ban هست یا نه.

## Callback های مرتبط

- [OnIncomingConnection](../callbacks/OnIncomingConnection): وقتی بازیکن سعی می‌کنه به سرور وصل بشه فراخوانی میشه.
