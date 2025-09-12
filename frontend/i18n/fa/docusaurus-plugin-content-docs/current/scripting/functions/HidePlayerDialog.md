---
title: HidePlayerDialog
sidebar_label: HidePlayerDialog
description: هر دیالوگی که بازیکن ممکنه در حال حاضر ببینه رو مخفی می‌کنه.
tags: ["player", "dialog"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

هر دیالوگی که بازیکن ممکنه در حال حاضر ببینه رو مخفی می‌کنه.

| نام      | توضیحات                                                      |
| -------- | ------------------------------------------------------------ |
| playerid | ID بازیکنی که می‌خوای دیالوگ فعلیش رو مخفی کنی.              |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن متصل نیست یا داره به دیالوگی نگاه نمی‌کنه.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    if (IsAccountRegistered(playerid)) // Imaginary function to check if the player name is registered
    {
        ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Insert Your Password", "Login", ""); // shows login dialog to player
        
        new ipAddress[16];
        GetPlayerIp(playerid, ipAddress, sizeof(ipAddress)); // get player's ip address
        
        if (IsBanned(ipAddress)) // check if the player ip is banned
        {
            SendClientMessage(playerid, 0xFF0000FF, "You are banned from this server!"); 
            HidePlayerDialog(playerid); // Hides login dialog
        }
    }
}
```

## توابع مرتبط

- [ShowPlayerDialog](ShowPlayerDialog): یه دیالوگ باکس همزمان (فقط یکی در هر زمان) به بازیکن نمایش می‌ده.
- [GetPlayerDialogData](GetPlayerDialogData): داده‌های دیالوگی که در حال حاضر به بازیکن نمایش داده شده رو دریافت می‌کنه.
- [GetPlayerDialogID](GetPlayerDialogID): ID دیالوگی که در حال حاضر به بازیکن نمایش داده شده رو دریافت می‌کنه.