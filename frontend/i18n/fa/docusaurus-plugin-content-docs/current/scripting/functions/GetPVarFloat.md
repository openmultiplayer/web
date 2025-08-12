---
title: GetPVarFloat
sidebar_label: GetPVarFloat
description: یه متغیر بازیکن رو به صورت float دریافت می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

یه متغیر بازیکن رو به صورت float دریافت می‌کنه.

| نام         | توضیحات                                                 |
| ------------ | ----------------------------------------------------------- |
| playerid     | ID بازیکنی که می‌خوای متغیرش رو دریافت کنی. |
| const pvar[] | اسم متغیر بازیکن.                            |

## مقادیر برگشتی

مقدار float از متغیر بازیکن مشخص شده

## مثال‌ها

```c
LoadPlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;

    x = GetPVarFloat(playerid, "Xpos");
    y = GetPVarFloat(playerid, "Ypos");
    z = GetPVarFloat(playerid, "Zpos");

    SetPlayerPos(playerid, x, y, z);
    return 1;
}
```

## نکات

:::tip

متغیرها تا بعد از فراخوانی [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) ریست نمی‌شن، پس تو OnPlayerDisconnect هنوز قابل دسترسین.

:::

## توابع مرتبط

- [SetPVarInt](SetPVarInt): تنظیم یه integer برای متغیر بازیکن.
- [GetPVarInt](GetPVarInt): دریافت integer قبلاً تنظیم شده از متغیر بازیکن.
- [SetPVarString](SetPVarString): تنظیم یه string برای متغیر بازیکن.
- [GetPVarString](GetPVarString): دریافت string قبلاً تنظیم شده از متغیر بازیکن.
- [SetPVarFloat](SetPVarFloat): تنظیم یه float برای متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یه متغیر بازیکن.