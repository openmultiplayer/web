---
title: SendPlayerMessageToAll
sidebar_label: SendPlayerMessageToAll
description: پیامی رو به نام یک بازیکن به تمام بازیکن‌های دیگه روی سرور ارسال می‌کنه.
tags: ["player"]
---

## توضیحات

پیامی رو به نام یک بازیکن به تمام بازیکن‌های دیگه روی سرور ارسال می‌کنه. خط با نام فرستنده به رنگش شروع می‌شه، و بعدش پیام به رنگ سفید.

| نام             | توضیحات                                                     |
| ---------------- | --------------------------------------------------------------- |
| senderid         | ID فرستنده. اگر معتبر نباشه، پیام ارسال نمی‌شه. |
| const format[]   | پیامی که ارسال می‌شه.                                  |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان از هر نوع.                      |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerText(playerid, text[])
{
    // format a message to contain the player's id in front of it
    new string[144];
    format(string, sizeof(string), "(%d): %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    return 0; // return 0 prevents the original message being sent

    // Assuming 'playerid' is 0 and the player is called Tenpenny, the output will be 'Tenpenny:(0) <message>'
}
```

## نکات

:::warning

از استفاده کردن format specifier ها در پیامت بدون فرمت کردن string که ارسال می‌شه خودداری کن. وگرنه منجر به crash می‌شه.

:::

## توابع مرتبط

- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): مجبور کردن بازیکن که متن رو برای یک بازیکن ارسال کنه.
- [SendClientMessageToAll](SendClientMessageToAll): ارسال پیام به همه بازیکنا.

## کالبک‌های مرتبط

- [OnPlayerText](../callbacks/OnPlayerText): وقتی بازیکن پیام از طریق چت ارسال می‌کنه صدا زده می‌شه.