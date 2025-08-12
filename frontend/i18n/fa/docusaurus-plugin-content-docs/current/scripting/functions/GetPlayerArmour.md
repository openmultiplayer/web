---
title: GetPlayerArmour
sidebar_label: GetPlayerArmour
description: این تابع armor بازیکن رو توی یک متغیر ذخیره می‌کنه.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این تابع armor بازیکن رو توی یک متغیر ذخیره می‌کنه.

| اسم          | توضیح                                               |
| ------------- | --------------------------------------------------------- |
| playerid      | شناسه بازیکنی که می‌خوای armorش رو بگیری.  |
| &Float:armour | متغیر float که armor توش ذخیره میشه، با reference پاس داده میشه. |

## مقادیر برگشتی

**1** - موفقیت

**0** - عدم موفقیت (مثل بازیکن متصل نبودن).

armor بازیکن در متغیر مشخص شده ذخیره میشه.

## مثال‌ها

</div>

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myarmour", true))
    {
		new string[40];

		new Float:armour;
		GetPlayerArmour(playerid, armour);

		format(string, sizeof(string), "SERVER: Your armour is %.2f percent", armour);
		SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

اگرچه armor می‌تونه در سمت سرور به مقادیر تقریباً بی‌نهایت تنظیم بشه، کلاینت‌های منفرد فقط مقادیر تا 255 رو گزارش می‌دن. هر چیزی بالاتر wrap around می‌شه؛ 256 به 0، 257 به 1 و غیره تبدیل میشه. Armor به صورت گرد شده اعداد صحیح بدست می‌آد: 50.15 رو ست کنید ولی 50.0 بگیرید

:::

## تابع‌های مرتبط

- [SetPlayerArmour](SetPlayerArmour): تنظیم armor بازیکن.
- [GetPlayerHealth](GetPlayerHealth): گرفتن سلامتی بازیکن.
- [GetVehicleHealth](GetVehicleHealth): بررسی سلامتی وسیله نقلیه.

</div>