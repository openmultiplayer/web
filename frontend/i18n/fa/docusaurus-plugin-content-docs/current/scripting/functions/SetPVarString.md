---
title: SetPVarString
sidebar_label: SetPVarString
description: یک string رو در یک متغیر بازیکن ذخیره می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

یک string رو در یک متغیر بازیکن ذخیره می‌کنه.

| نام              | توضیحات                                       |
| ---------------- | --------------------------------------------- |
| playerid         | ID بازیکنی که متغیرش باید تنظیم بشه.         |
| const pvar[]     | نام متغیر بازیکن.                             |
| const value[]    | string که می‌خوای در متغیر بازیکن ذخیره کنی. |
| OPEN_MP_TAGS:... | تعداد نامحدودی از آرگومان‌ها با هر tag.       |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    new 
        hours, 
        minutes, 
        seconds, 
        string[46];

    gettime(hours, minutes, seconds); // get the time
    format(string, sizeof(string), "Connected on %02d:%02d:%02d", hours, minutes, seconds); // create the string with the connect time
    SetPVarString(playerid, "timeconnected", string); // save the string into a player variable

    // PRO TIP: You don't need `format` in open.mp
    SetPVarString(playerid, "timeconnected", "Connected on %02d:%02d:%02d", hours, minutes, seconds);
    return 1;
}
```

## نکات

:::tip

متغیرها تا بعد از فراخوانی [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) ریست نمی‌شن، پس مقادیر هنوز در OnPlayerDisconnect قابل دسترسی هستن.

:::

## توابع مرتبط

- [SetPVarInt](SetPVarInt): تنظیم یک integer برای متغیر بازیکن.
- [GetPVarInt](GetPVarInt): گرفتن integer تنظیم شده قبلی از یک متغیر بازیکن.
- [GetPVarString](GetPVarString): گرفتن string تنظیم شده قبلی از یک متغیر بازیکن.
- [SetPVarFloat](SetPVarFloat): تنظیم یک float برای متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): گرفتن float تنظیم شده قبلی از یک متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یک متغیر بازیکن.