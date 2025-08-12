---
title: GetPVarString
sidebar_label: GetPVarString
description: یه متغیر بازیکن رو به صورت string دریافت می‌کنه.
tags: ["player variable", "pvar"]
---

## توضیحات

یه متغیر بازیکن رو به صورت string دریافت می‌کنه.

| نام                  | توضیحات                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| playerid              | ID بازیکنی که می‌خوای متغیرش رو دریافت کنی.                      |
| const pvar[]          | اسم متغیر بازیکن که توسط [SetPVarString](SetPVarString) تنظیم شده. |
| output[]              | آرایه‌ای برای ذخیره مقدار string که به صورت reference پاس داده می‌شه.   |
| len = sizeof (output) | حداکثر طول string برگردونده شده.                              |

## مقادیر برگشتی

طول string.

## مثال‌ها

```c
public OnPlayerConnect(playerid,reason)
{
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    SetPVarString(playerid, "PlayerName", playerName);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new playerName[MAX_PLAYER_NAME];
    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));

    printf("%s died.", playerName);
}
```

## نکات

:::tip

اگه طول string صفر باشه (مقدار تنظیم نشده)، متن `output` آپدیت یا تنظیم نمی‌شه و با داده‌های قدیمی باقی می‌مونه، که اگه این رفتار مطلوب نیست، باید متغیر رو صاف کنی اگه [GetPVarString](GetPVarString) صفر برگردونه.

:::

## توابع مرتبط

- [SetPVarString](SetPVarString): تنظیم یه string برای متغیر بازیکن.
- [SetPVarInt](SetPVarInt): تنظیم یه integer برای متغیر بازیکن.
- [GetPVarInt](GetPVarInt): دریافت integer قبلاً تنظیم شده از متغیر بازیکن.
- [SetPVarFloat](SetPVarFloat): تنظیم یه float برای متغیر بازیکن.
- [GetPVarFloat](GetPVarFloat): دریافت float قبلاً تنظیم شده از متغیر بازیکن.
- [DeletePVar](DeletePVar): حذف یه متغیر بازیکن.