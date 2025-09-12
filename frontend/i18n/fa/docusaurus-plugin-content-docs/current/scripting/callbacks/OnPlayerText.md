---
title: OnPlayerText
sidebar_label: OnPlayerText
description: این کالبک زمانی فراخوانده می‌شود که بازیکن پیام چت ارسال می‌کند.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن پیامی در چت ارسال می‌کند.

| نام     | توضیحات                                      |
| -------- | ------------------------------------------------ |
| playerid | شناسه بازیکنی که پیام را ارسال کرده.       |
| text[]   | محتوای پیامی که بازیکن ارسال کرده. |

## مقادیر برگشتی

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود، بنابراین برگرداندن 0 باعث مسدود شدن پردازش آن توسط اسکریپت‌های دیگر می‌شود.

## مثال‌ها

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    // Returning 0 ignores the default message format and sends the custom one instead.
    // Returning 1 will result in the message being duplicated, as the default message will also be sent.
    return 0;
}
```

## نکته‌ها

<TipNPCCallbacks />

:::tip

به طور پیش‌فرض، این کالبک پیامی حاوی محتوای پیام، نام بازیکن و شناسه آن‌ها ارسال می‌کند. برگرداندن 0 این رفتار پیش‌فرض را نادیده می‌گیرد، همان‌طور که در مثال کد بالا نشان داده شده.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerCommandText](OnPlayerCommandText): زمانی فراخوانده می‌شود که بازیکن دستوری تایپ می‌کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): اجبار بازیکن به ارسال متن برای یک بازیکن.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): اجبار بازیکن به ارسال متن برای تمام بازیکنان.
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): تغییر وضعیت فیلتر ورودی چت.