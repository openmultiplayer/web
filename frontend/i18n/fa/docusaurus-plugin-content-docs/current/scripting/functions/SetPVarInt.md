---
title: SetPVarInt
sidebar_label: SetPVarInt
description: یک متغیر integer بازیکن تنظیم می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

یک متغیر integer بازیکن تنظیم می‌کنه.

| نام          | توضیحات                               |
| ------------ | ------------------------------------- |
| playerid     | ID بازیکنی که متغیرش باید تنظیم بشه. |
| const pvar[] | نام متغیر بازیکن.                     |
| value        | integer که باید تنظیم بشه.            |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. یا بازیکن مشخص شده متصل نیست، یا نام متغیر null هست یا بیشتر از 40 کاراکتر داره.

## مثال‌ها

```c
// set GetPlayerMoney the value of player variable named "Money"
SetPVarInt(playerid, "Money", GetPlayerMoney(playerid));

// will print money that player has
printf("money: %d", GetPVarInt(playerid, "Money"));
```

## نکات

:::tip

متغیرها تا بعد از فراخوانی [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) ریست نمی‌شن، پس مقادیر هنوز در OnPlayerDisconnect قابل دسترسی هستن.

:::

## توابع مرتبط

- [GetPVarInt](GetPVarInt): گرفتن integer تنظیم شده قبلی از یک متغیر بازیکن.
- [SetPVarString](SetPVarString): تنظیم یک string برای متغیر بازیکن.
- [GetPVarString](GetPVarString): گرفتن string تنظیم شده قبلی از یک متغیر بازیکن.
- [SetPVarFloat](SetPVarFloat): تنظیم یک float برای متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): گرفتن float تنظیم شده قبلی از یک متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یک متغیر بازیکن.