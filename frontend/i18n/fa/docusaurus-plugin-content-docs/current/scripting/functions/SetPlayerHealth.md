---
title: SetPlayerHealth
sidebar_label: SetPlayerHealth
description: سلامتی (جون) یک بازیکن رو تنظیم می‌کنه.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

سلامتی (جون) یک بازیکن رو تنظیم می‌کنه.

| اسم         | توضیح                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| playerid     | شناسه بازیکنی که می‌خوای سلامتیش رو تنظیم کنی.                                                                                   |
| Float:health | مقداری که می‌خوای سلامتی بازیکن روش تنظیم کنی. حداکثر سلامتی که توی HUD نمایش داده میشه 100 هست، اما مقادیر بیشتر هم معتبره. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن مشخص شده وجود نداره.

## مثال‌ها

</div>

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        // سلامتی بازیکن رو کامل می‌کنه
        SetPlayerHealth(playerid, 100.0);
        return 1;
    }
    if (!strcmp("/kill", cmdtext, true))
    {
        // بازیکن رو می‌کشه
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

- اگه سلامتی بازیکن رو به 0.0 یا مقدار منفی تنظیم کنی، بلافاصله می‌میره.
- اگه سلامتی بازیکن کمتر از 10.0 یا بیشتر از 98303.0 باشه، نوار سلامتیش چشمک میزنه.

:::

:::warning

سلامتی به شکل عدد صحیح گرد شده دریافت میشه: 50.15 تنظیم کنی، اما 50.0 می‌گیری

:::

## تابع‌های مرتبط

- [GetPlayerHealth](GetPlayerHealth): فهمیدن اینکه بازیکن چقدر سلامتی داره.
- [GetPlayerArmour](GetPlayerArmour): فهمیدن اینکه بازیکن چقدر زره داره.
- [SetPlayerArmour](SetPlayerArmour): تنظیم زره بازیکن.

</div>