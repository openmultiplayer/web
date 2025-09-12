---
title: UsePlayerPedAnims
sidebar_label: UsePlayerPedAnims
description: از انیمیشن راه رفتن استاندارد بازیکن (انیمیشن اسکین CJ) به جای انیمیشن‌های سفارشی برای هر اسکین استفاده کن (مثل اسکیت کردن برای اسکین‌های اسکیتر).
tags: ["player"]
---

## توضیحات

از انیمیشن راه رفتن استاندارد بازیکن (انیمیشن اسکین CJ) به جای انیمیشن‌های سفارشی برای هر اسکین استفاده می‌کنه (مثل اسکیت کردن برای اسکین‌های اسکیتر).

## مثال‌ها

```c
public OnGameModeInit()
{
    UsePlayerPedAnims();
    return 1;
}
```

## نکات

:::tip

فقط وقتی کار می‌کنه که زیر [OnGameModeInit](../callbacks/OnGameModeInit) قرار بگیره.

استفاده نکردن از این تابع باعث میشه که اسلحه‌های دو دستی (نه دوتایی - یک اسلحه که با دو دست نگه داشته میشه) فقط با یک دست نگه داشته بشن.

:::

:::tip

می‌تونی انیمیشن راه رفتن استاندارد بازیکن رو از طریق [config.json](../../server/config.json) هم فعال کنی

```json
"use_player_ped_anims": true,
```

:::

## توابع مرتبط

- [ApplyAnimation](ApplyAnimation): یک انیمیشن روی بازیکن اعمال کن.
- [ClearAnimations](ClearAnimations): هر انیمیشنی که بازیکن داره انجام میده رو پاک کن.
