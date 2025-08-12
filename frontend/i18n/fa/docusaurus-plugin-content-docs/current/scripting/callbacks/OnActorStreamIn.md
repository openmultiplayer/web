---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: این callback زمانی فراخوانی می‌شود که یک actor توسط کلاینت بازیکن stream می‌شود.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## توضیحات

این callback زمانی فراخوانی می‌شود که یک actor توسط کلاینت بازیکن stream می‌شود.

| نام         | توضیحات                                                        |
| ----------- | -------------------------------------------------------------- |
| actorid     | آیدی actor که برای بازیکن stream شده است.                    |
| forplayerid | آیدی بازیکنی که actor را stream کرده است.                    |

## مقادیر بازگشتی

همیشه ابتدا در filterscriptها فراخوانی می‌شود.

## مثال‌ها

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکات

<TipNPCCallbacks />

## Callbackهای مرتبط

callbackهای زیر ممکن است مفید باشند، چرا که به یک یا شکل دیگری با این callback مرتبط هستند.

- [OnActorStreamOut](OnActorStreamOut): این callback زمانی فراخوانی می‌شود که یک actor توسط کلاینت بازیکن stream out می‌شود.