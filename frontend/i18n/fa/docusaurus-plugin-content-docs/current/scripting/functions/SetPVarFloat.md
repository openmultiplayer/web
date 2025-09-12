---
title: SetPVarFloat
sidebar_label: SetPVarFloat
description: مقدار یک متغیر float بازیکن رو تنظیم می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

مقدار یک متغیر float بازیکن رو تنظیم می‌کنه.

| نام          | توضیحات                                         |
| ------------ | ----------------------------------------------- |
| playerid     | ID بازیکنی که متغیرش باید تنظیم بشه.           |
| const pvar[] | نام متغیر بازیکن.                               |
| Float:value  | مقدار float که می‌خوای در متغیر بازیکن ذخیره کنی. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. یا بازیکن مشخص شده متصل نیست، یا نام متغیر null هست یا بیشتر از 40 کاراکتر داره.

## مثال‌ها

```c
SavePlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z); // Get the players position

    SetPVarFloat(playerid, "Xpos", x); // Save the float into a player variable
    SetPVarFloat(playerid, "Ypos", y); // Save the float into a player variable
    SetPVarFloat(playerid, "Zpos", z); // Save the float into a player variable
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
- [SetPVarString](SetPVarString): تنظیم یک string برای متغیر بازیکن.
- [GetPVarString](GetPVarString): گرفتن string تنظیم شده قبلی از یک متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): گرفتن float تنظیم شده قبلی از یک متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یک متغیر بازیکن.