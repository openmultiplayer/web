---
title: GameTextForPlayer
sidebar_label: GameTextForPlayer
description: متن بازی (متن روی صفحه) رو برای مدت زمان مشخصی برای یک بازیکن نشون می‌ده.
tags: ["player", "gametext"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

متن بازی (متن روی صفحه) رو برای مدت زمان مشخصی برای یک بازیکن نشون می‌ده.

| اسم             | توضیح                                                       |
|------------------|-------------------------------------------------------------------|
| playerid         | شناسه بازیکنی که متن براش نمایش داده میشه.                    |
| const format[]   | متنی که باید نمایش داده بشه.                                         |
| time             | مدت زمان نمایش متن به میلی‌ثانیه.             |
| style            | [استایل](../resources/gametextstyles) متنی که نمایش داده میشه. |
| OPEN_MP_TAGS:... | تعداد نامحدودی از آرگومان‌ها با هر تگی.                        |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد. حتی وقتی style یا time اشتباه باشه هم موفقیت گزارش میشه. البته هیچ اتفاقی نمی‌افته (متن نمایش داده نمیشه). ممکنه باعث کرش بازی هم بشه.

**false** - تابع اجرا نشد. یعنی یا رشته null هست یا بازیکن متصل نیست.

## مثال‌ها

</div>

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GameTextForPlayer(playerid, "Wasted", 5000, 2);

    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));

        GameTextForPlayer(killerid, "~w~You killed ~r~%s", 3000, 3, name);
    }
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

توجه کن که بازیکنا ممکنه کرش کنن اگه از تعداد فرد علامت تیلد (~) توی متن بازی استفاده کنی. استفاده از کدهای رنگ (مثل ~r~) بعد از کاراکتر 255ام ممکنه کلاینت رو کرش کنه.

همچنین، فاصله خالی در انتهای رشته ممکنه باعث شکست بشه. مثلاً: `"Headshot "` باعث شکست میشه. به جاشون باید `"Headshot"` یا `"Headshot_"` استفاده کنی.

:::

## تابع‌های مرتبط

- [HideGameTextForPlayer](HideGameTextForPlayer): متوقف کردن نمایش یک استایل gametext برای بازیکن.
- [GameTextForAll](GameTextForAll): نمایش gametext برای همه بازیکنا.
- [HideGameTextForAll](HideGameTextForAll): متوقف کردن نمایش یک استایل gametext برای همه بازیکنا.
- [GetGameText](GetGameText): گرفتن همه اطلاعات در مورد استایل game text داده شده.
- [HasGameText](HasGameText): آیا بازیکن در حال حاضر متنی در استایل gametext داده شده داره؟
- [TextDrawShowForAll](TextDrawShowForAll): نمایش textdraw برای همه بازیکنا.

## منابع مرتبط

- [GameText Styles](../resources/gametextstyles)

</div>