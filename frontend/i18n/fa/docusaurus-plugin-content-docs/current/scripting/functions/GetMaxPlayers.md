---
title: GetMaxPlayers
sidebar_label: GetMaxPlayers
description: حداکثر تعداد بازیکنانی که می‌تونن به سرور بپیوندن رو برمی‌گردونه، که توسط متغیر سرور 'maxplayers' تنظیم شده.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

حداکثر تعداد بازیکنانی که می‌تونن به سرور بپیوندن رو برمی‌گردونه، که توسط متغیر سرور 'max_players' در config.json تنظیم شده.

## مثال‌ها

</div>

```c
new string[128];
format(string, sizeof(string), "There are %i slots on this server!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

- این تابع نمی‌تونه به جای MAX_PLAYERS استفاده بشه.
- نمی‌تونه در زمان compile استفاده بشه (مثل برای اندازه آرایه‌ها).
- `MAX_PLAYERS` همیشه باید دوباره تعریف بشه روی همون مقداری که 'max_players' میشه، یا بالاتر.

:::

## تابع‌های مرتبط

- [GetPlayerPoolSize](GetPlayerPoolSize): بالاترین شناسه بازیکن متصل به سرور رو می‌گیره.
- [IsPlayerConnected](IsPlayerConnected): چک کردن متصل بودن بازیکن به سرور.

</div>