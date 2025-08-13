---
title: LimitGlobalChatRadius
sidebar_label: LimitGlobalChatRadius
description: محدودیت شعاع چت جهانی را تنظیم کن.
tags: []
---

## توضیحات

محدودیت شعاع چت را تنظیم می‌کند. فقط بازیکنانی که در فاصله مشخصی از بازیکن قرار دارند، پیام آن‌ها را در چت خواهند دید. همچنین فاصله‌ای که بازیکن می‌تواند سایر بازیکنان را روی نقشه ببیند نیز در همین فاصله تغییر می‌کند.

| نام               | توضیحات                                               |
| ----------------- | ---------------------------------------------------- |
| Float:chatRadius  | محدوده‌ای که بازیکنان قادر به دیدن چت خواهند بود. |

## مقدار بازگشتی

این تابع مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnGameModeInit()
{
    LimitGlobalChatRadius(200.0);
    return 1;
}
```

## توابع مرتبط

- [SetNameTagDrawDistance](SetNameTagDrawDistance): فاصله‌ای که مردم می‌توانند نام‌تگ سایر بازیکنان را ببینند تنظیم کن.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): مجبور کردن بازیکن برای ارسال متن به یک بازیکن.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): مجبور کردن بازیکن برای ارسال متن به همه بازیکنان.

## کالبک‌های مرتبط

- [OnPlayerText](../callbacks/OnPlayerText): وقتی بازیکن پیامی از طریق چت ارسال می‌کند فراخوانی می‌شود.