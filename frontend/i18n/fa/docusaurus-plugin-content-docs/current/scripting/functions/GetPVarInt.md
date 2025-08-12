---
title: GetPVarInt
sidebar_label: GetPVarInt
description: مقدار یه متغیر بازیکن integer رو دریافت می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

مقدار یه متغیر بازیکن integer رو دریافت می‌کنه.

| نام         | توضیحات                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| playerid     | ID بازیکنی که می‌خوای متغیرش رو دریافت کنی.                                             |
| const pvar[] | اسم متغیر بازیکن (case-insensitive).<br />تو [SetPVarInt](SetPVarInt) تعیین می‌شه. |

## مقادیر برگشتی

مقدار integer متغیر بازیکن مشخص شده.

هنوز 0 برمی‌گردونه اگه متغیر تنظیم نشده باشه، یا بازیکن وجود نداشته باشه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPVarInt(playerid, "Level", 20);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    printf("Level: %d", GetPVarInt(playerid, "Level")); // get the saved value ('Level')
    // will print 'Level: 20'
    return 1;
}
```

## نکات

:::tip

متغیرها تا بعد از فراخوانی [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) ریست نمی‌شن، پس تو OnPlayerDisconnect هنوز قابل دسترسین.

:::

## توابع مرتبط

- [SetPVarInt](SetPVarInt): تنظیم یه integer برای متغیر بازیکن.
- [SetPVarString](SetPVarString): تنظیم یه string برای متغیر بازیکن.
- [GetPVarString](GetPVarString): دریافت string قبلاً تنظیم شده از متغیر بازیکن.
- [SetPVarFloat](SetPVarFloat): تنظیم یه float برای متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): دریافت float قبلاً تنظیم شده از متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یه متغیر بازیکن.