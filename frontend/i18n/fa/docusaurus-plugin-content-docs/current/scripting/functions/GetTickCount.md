---
title: GetTickCount
sidebar_label: GetTickCount
description: مقداری که هر میلی‌ثانیه افزایش می‌یابه رو برمی‌گردونه.
tags: ["time"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

مقداری که هر میلی‌ثانیه افزایش می‌یابه رو برمی‌گردونه. باید برای مقایسه دو نقطه زمانی استفاده بشه.

## مثال‌ها

فقط بذار بازیکن هر 10 ثانیه (10000 میلی‌ثانیه) یک بار دستور رو صدا بزنه:

</div>

```c
static gLastCommandUse[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/limited") == 0)
    {
        if (GetTickCount() - gLastCommandUse[playerid] >= 10000)
        {
            // Enough time has passed.
            SendClientMessage(playerid, COLOUR_ERROR, "Called!");
            gLastCommandUse[playerid] = GetTickCount();
        }
        else
        {
            SendClientMessage(playerid, COLOUR_ERROR, "Please wait");
        }
        return 1;
    }
    return 0;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

تفاوت مقادیری که `GetTickCount` می‌تونه handle کنه محدود به کمتر از 25 روز (2147483647 میلی‌ثانیه) هست. تا زمانی که رویدادهای مقایسه شده کمتر از این مقدار فاصله داشته باشن این تابع کاملاً کار می‌کنه با یک نکته کوچیک. به خاطر integer overflow، کد زیر ممکنه کار نکنه:

```c
new start = GetTickCount();
// Long code.
new end = GetTickCount();
if (start + 2000 > end)
{
    // The code took less than two seconds.
}
```

اگه `start` خیلی بالا باشه این کد wrap around میشه و ممکنه چک به اشتباه pass بشه. ولی حل کردنش خیلی سادهست:

```c
new start = GetTickCount();
// Long code.
new end = GetTickCount();
if (end - start < 2000)
{
    // The code took less than two seconds.
}
```

فقط با تغییر ترتیب مقایسه به طوری که `start` و `end` در یک طرف باشن، مشکل کاملاً حل میشه. اونایی که با تغییر فرمول آشنا هستن می‌دونن که این دو قطعه کد کاملاً معادل هستن، ولی دومی در محاسبات modulo صحیح‌تره.

:::

## تابع‌های مرتبط

- [tickcount](tickcount): uptime واقعی سرور رو می‌گیره.

</div>