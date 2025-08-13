---
title: SetTeamCount
sidebar_label: SetTeamCount
description: این تابع برای تغییر تعداد تیم‌های استفاده شده در gamemode استفاده می‌شه.
tags: []
---

## توضیحات

این تابع برای تغییر تعداد تیم‌های استفاده شده در gamemode استفاده می‌شه. راه واضحی برای استفاده نداره، ولی می‌تونه برای نشان دادن تعداد تیم‌های استفاده شده کمک کنه تا پردازش داخلی بهتر (و مؤثرتر) انجام بشه. این تابع فقط باید در callback OnGameModeInit استفاده بشه. مهم: می‌تونی 2 میلیارد رو اینجا پاس بدی اگه دوست داری، این تابع اصلاً تأثیری نداره.

| نام   | توضیحات                         |
| ----- | ----------------------------------- |
| count | تعداد تیم‌هایی که gamemode می‌شناسه. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit( )
{
    // ma 18 team dar in Team-Deathmatch mode estefade mikonim, define konid;
    SetTeamCount(18);
    return 1;
}
```

## توابع مرتبط

- [GetPlayerTeam](GetPlayerTeam): بررسی می‌کنه که پلیر در کدوم تیم هست.
- [SetPlayerTeam](SetPlayerTeam): تیم یه پلیر رو تنظیم می‌کنه.