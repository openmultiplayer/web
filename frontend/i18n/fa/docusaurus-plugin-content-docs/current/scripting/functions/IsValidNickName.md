---
title: IsValidNickName
sidebar_label: IsValidNickName
description: چک می‌کنه که آیا یه nick name معتبره یا نه.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه nick name معتبره یا نه.

| نام          | توضیحات                                                  |
| ------------ | -------------------------------------------------------- |
| const name[] | nick name که باید چک بشه.                               |

## مقادیر برگشتی

true برمی‌گردونه اگه nick name معتبر باشه، وگرنه false.

## مثال‌ها

```c
if (IsValidNickName("Barnaby_Keene"))
{
    // Do something
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "Your nick name is not valid.");
}
```

## نکات

:::tip

به طور پیش‌فرض کاراکترهای معتبر در nick name اینان: (0-9, a-z, A-Z, [], (), \$ @ . \_ و = فقط).

:::

## توابع مرتبط

- [AllowNickNameCharacter](AllowNickNameCharacter): اجازه دادن به یه کاراکتر که در nick name استفاده بشه.
- [SetPlayerName](SetPlayerName): تنظیم نام یه بازیکن.
- [GetPlayerName](GetPlayerName): دریافت نام یه بازیکن.