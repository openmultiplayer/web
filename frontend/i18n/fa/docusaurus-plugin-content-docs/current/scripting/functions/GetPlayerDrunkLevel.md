---
title: GetPlayerDrunkLevel
sidebar_label: GetPlayerDrunkLevel
description: بررسی سطح مستی بازیکن.
tags: ["player"]
---

## توضیحات

بررسی سطح مستی بازیکن. اگر سطح کمتر از 2000 باشد، بازیکن هوشیار است. سطح مستی بازیکن به آرامی و خودکار کاهش می‌یابد (26 سطح در ثانیه) اما همیشه در نهایت به 2000 می‌رسد. سطوح مستی بالاتر روی دوربین بازیکن و رانندگی ماشین تأثیر می‌گذارند. سطح مستی زمانی افزایش می‌یابد که بازیکن از بطری بنوشد (می‌توانید از SetPlayerSpecialAction برای دادن بطری استفاده کنید).

| نام     | توضیحات                                            |
| -------- | ------------------------------------------------------ |
| playerid | بازیکنی که می‌خواهید سطح مستی‌اش را بررسی کنید. |

## مقادیر برگشتی

عددی که نشان‌دهنده سطح مستی بازیکن است.

## مثال‌ها

```c
public OnPlayerStateChange(playerid, oldstate, newstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Don't drink and drive!");
        RemovePlayerFromVehicle(playerid);
    }
}
```

## توابع مرتبط

- [SetPlayerDrunkLevel](SetPlayerDrunkLevel): تنظیم سطح مستی بازیکن.