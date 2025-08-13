---
title: TogglePlayerSpectating
sidebar_label: TogglePlayerSpectating
description: فعال/غیرفعال کن که آیا یک بازیکن در حالت spectator هست یا نه.
tags: ["player"]
---

## توضیحات

فعال/غیرفعال می‌کنه که آیا یک بازیکن در حالت spectator هست یا نه. وقتی توی حالت spectator باشه، بازیکن می‌تونه بازیکنا و وسایل نقلیه دیگه رو spectate (تماشا) کنه. بعد از استفاده از این تابع، باید از [PlayerSpectatePlayer](PlayerSpectatePlayer) یا [PlayerSpectateVehicle](PlayerSpectateVehicle) استفاده کنی.

## پارامترها

| نام         | توضیحات                                       |
| ----------- | ------------------------------------------------- |
| playerid    | ID بازیکنی که باید spectate کنه.          |
| bool:toggle | **true** برای فعال کردن spectating و **false** برای غیرفعال کردن. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. بازیکن وجود نداره.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, true);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## نکات

:::tip

وقتی حالت spectator غیرفعال میشه، OnPlayerSpawn به طور خودکار فراخوانی میشه، اگه می‌خوای بازیکن رو به حالت قبل از spectating برگردونی، باید این کار رو توی OnPlayerSpawn انجام بدی. همچنین توجه کن که بازیکن می‌تونه قبل از اینکه F4 رو توی spectate بزنه به class selection هم بره، همچنین بازیکن می‌تونه توی حالت spectate هم به خاطر باگ‌های مختلف بمیره.

:::

:::tip

وقتی بازیکن توی حالت spectate هست، HUD ش مخفی میشه، که این کار برای تنظیم دوربین بازیکن بدون HUD مفیده. همچنین، اشیاء نزدیک دوربین بازیکن stream میشن، که این کار برای interpolating دوربین‌ها مفیده.

:::

:::warning

اگه بازیکن قبل از تنظیم وضعیت spectate به false لود نشده باشه، اتصال ممکنه به طور غیرمنتظره بسته بشه.

:::

## توابع مرتبط

- [PlayerSpectatePlayer](PlayerSpectatePlayer): یک بازیکن رو spectate کن.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): یک وسیله نقلیه رو spectate کن.
