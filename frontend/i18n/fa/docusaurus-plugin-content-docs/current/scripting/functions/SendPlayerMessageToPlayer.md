---
title: SendPlayerMessageToPlayer
sidebar_label: SendPlayerMessageToPlayer
description: پیامی رو به نام یک بازیکن به بازیکن دیگه روی سرور ارسال می‌کنه.
tags: ["player"]
---

## توضیحات

پیامی رو به نام یک بازیکن به بازیکن دیگه روی سرور ارسال می‌کنه. پیام در chat box ظاهر می‌شه ولی فقط کاربری که با 'playerid' مشخص شده می‌تونه ببینه. خط با نام فرستنده به رنگش شروع می‌شه، و بعدش پیام به رنگ سفید.

| نام             | توضیحات                                                |
| ---------------- | ---------------------------------------------------------- |
| playerid         | ID بازیکن که پیام رو دریافت می‌کنه.         |
| senderid         | ID فرستنده. اگر معتبر نباشه، پیام ارسال نمی‌شه. |
| const format[]   | پیامی که ارسال می‌شه.                             |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان از هر نوع.                 |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hello", true))
    {
        SendPlayerMessageToPlayer(0, playerid, "Hello ID 0!"); // Will send a message to the user with the ID 0 in the name of the user who typed '/hello'.
        // Assuming 'playerid' is called Tenpenny, the output will be 'Tenpenny: Hello ID 0!'
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

از استفاده کردن format specifier ها در پیامت بدون فرمت کردن string که ارسال می‌شه خودداری کن. وگرنه منجر به crash می‌شه.

:::

## توابع مرتبط

- [SendPlayerMessageToAll](SendPlayerMessageToAll): مجبور کردن بازیکن که متن رو برای همه بازیکنا ارسال کنه.
- [SendClientMessage](SendClientMessage): ارسال پیام به یک بازیکن خاص.
- [SendClientMessageToAll](SendClientMessageToAll): ارسال پیام به همه بازیکنا.

## کالبک‌های مرتبط

- [OnPlayerText](../callbacks/OnPlayerText): وقتی بازیکن پیام از طریق چت ارسال می‌کنه صدا زده می‌شه.