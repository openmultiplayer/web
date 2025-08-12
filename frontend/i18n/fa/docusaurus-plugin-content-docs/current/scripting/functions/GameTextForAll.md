---
title: GameTextForAll
sidebar_label: GameTextForAll
description: نمایش 'game text' (متن روی صفحه) برای یه مدت زمان مشخص برای همه بازیکن‌ها.
tags: ["gametext"]
---

## توضیحات

نمایش 'game text' (متن روی صفحه) برای یه مدت زمان مشخص برای همه بازیکن‌ها.

| نام              | توضیحات                                                          |
|------------------|-------------------------------------------------------------------|
| const format[]   | متنی که باید نمایش داده بشه.                                        |
| time             | مدت زمان نمایش متن بر حسب میلی‌ثانیه.                                |
| style            | [سبک](../resources/gametextstyles) متن برای نمایش.                  |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان با هر tag.                                    |

## برگشتی

این تابع همیشه 1 برمیگردونه.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // این مثال یه متن سفید و بزرگ نشون میده که میگه "[playerName] has
    // passed away" روی صفحه همه، بعد از اینکه یه بازیکن میره یا
    // کشته میشه. توی text-type 3، برای 5 ثانیه (5000 ms) نشون میده
    new name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));

    // فرمت کردن پیام passed-away به درستی، و نشون دادنش به همه:
    new string[64];
    format(string, sizeof(string), "~w~%s has passed away", name);
    GameTextForAll(string, 5000, 3);

    // PRO TIP: توی open.mp نیازی به `format` نیست
    GameTextForAll("~w~%s has passed away", 5000, 3, name);
    return 1;
}
```

## نکات

:::warning

توجه کن که بازیکن‌ها ممکنه کرش کنن به خاطر تعداد فرد نماد tilde (~) توی game text. استفاده از کدهای رنگ (مثل ~r~) بعد از کاراکتر 255م ممکنه کلاینت رو کرش کنه.

:::

## توابع مرتبط

- [HideGameTextForAll](HideGameTextForAll): توقف نمایش یه سبک gametext برای همه بازیکن‌ها.
- [GameTextForPlayer](GameTextForPlayer): نمایش gametext به یه بازیکن.
- [HideGameTextForPlayer](HideGameTextForPlayer): توقف نمایش یه سبک gametext به یه بازیکن.
- [TextDrawShowForAll](TextDrawShowForAll): نشون دادن یه textdraw برای همه بازیکن‌ها.

## منابع مرتبط

- [GameText Styles](../resources/gametextstyles)