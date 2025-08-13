---
title: SendRconCommand
sidebar_label: SendRconCommand
description: یه دستور RCON (Remote Console) ارسال می‌کنه.
tags: ["administration"]
---

## توضیحات

یه دستور RCON (Remote Console) ارسال می‌کنه.

| نام             | توضیحات                                |
| ---------------- | ------------------------------------------ |
| const format[]   | دستور RCON که باید اجرا بشه.           |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان از هر نوع. |

## مقدار برگشتی

این تابع همیشه 1 برمی‌گردونه.

## مثال‌ها

```c
SendRconCommand("gmx");
// This is a scripted version of typing "/rcon gmx" in-game.
// GMX restarts the game mode.

// Example using format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);

// PRO TIP: You don't need `format` in open.mp
SendRconCommand("game.map %s", szMapName);
```

## نکات

:::warning

- از login پشتیبانی نمی‌کنه، به دلیل نبود پارامتر 'playerid'.
- 'password 0' پسورد سرور رو حذف می‌کنه اگر یکی تنظیم شده باشه.
- این تابع باعث می‌شه [OnRconCommand](../callbacks/OnRconCommand) صدا زده بشه.

:::

:::info

ببین [config.json](../../server/config.json)

:::

## توابع مرتبط

- [IsPlayerAdmin](IsPlayerAdmin): بررسی اینکه آیا بازیکن به RCON لاگین کرده یا نه.

## کالبک‌های مرتبط

- [OnRconCommand](../callbacks/OnRconCommand): وقتی دستور RCON ارسال می‌شه صدا زده می‌شه.
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): وقتی سعی می‌شه به RCON لاگین بشه صدا زده می‌شه.