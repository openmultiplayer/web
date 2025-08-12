---
title: IsPlayerAdmin
sidebar_label: IsPlayerAdmin
description: چک می‌کنه که بازیکن به RCON لاگین کرده یا نه.
tags: ["player", "rcon", "administration"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

چک می‌کنه که بازیکن به RCON لاگین کرده یا نه.

| اسم     | توضیح                    |
| -------- | ------------------------------ |
| playerid | شناسه بازیکنی که می‌خوای چکش کنی. |

## مقادیر برگشتی

**true** - بازیکن ادمین RCON هست.

**false** - بازیکن ادمین RCON نیست.

## مثال‌ها

</div>

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEE20FF, "یه ادمین spawn شد.");
    }
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetPlayerAdmin](SetPlayerAdmin): بازیکن رو به عنوان ادمین RCON تنظیم می‌کنه.
- [SendRconCommand](SendRconCommand): از طریق اسکریپت دستور RCON میفرسته.

## Callback های مرتبط

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): زمانی صدا زده میشه که سعی میشه به RCON لاگین کنه.

</div>