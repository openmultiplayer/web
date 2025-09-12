---
title: GetVehicleHealth
sidebar_label: GetVehicleHealth
description: سلامت یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

سلامت یه وسیله نقلیه رو دریافت می‌کنه.

| نام          | توضیحات                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| vehicleid     | ID وسیله نقلیه‌ای که می‌خوای سلامت‌ش رو دریافت کنی.                                  |
| &Float:health | متغیر float برای ذخیره سلامت وسیله نقلیه که به صورت reference پاس داده می‌شه |

## مقادیر برگشتی

**true** - موفق

**false** - ناموفق (ID وسیله نقلیه نامعتبر).

سلامت وسیله نقلیه در متغیر reference شده ذخیره می‌شه، نه در مقدار برگشتی.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/repair", true) == 0)
    {
        new
            Float:vehicleHealth,
            vehicleid = GetPlayerVehicleID(playerid);

        GetVehicleHealth(vehicleid, vehicleHealth);

        if (vehicleHealth > 500.0)
        {
            return SendClientMessage(playerid, COLOR_RED, "Vehicle doesn't need repairing!");
        }

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, COLOR_GREEN, "Vehicle repaired!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

سلامت کامل وسیله نقلیه 1000 هست، اما مقادیر بالاتر هم ممکنه و سلامت وسیله نقلیه رو افزایش می‌ده. برای اطلاعات بیشتر در مورد مقادیر سلامت، [اینجا](../resources/vehiclehealth) رو ببین.

:::

:::tip

وسیله نقلیه وقتی سلامت‌ش زیر 250 باشه آتیش می‌گیره. چند ثانیه بعد منفجر می‌شه.

:::

## توابع مرتبط

- [SetVehicleHealth](SetVehicleHealth): تنظیم سلامت یه وسیله نقلیه.
- [GetPlayerHealth](GetPlayerHealth): مشخص کردن اینکه یه بازیکن چقدر سلامت داره.
- [GetPlayerArmour](GetPlayerArmour): مشخص کردن اینکه یه بازیکن چقدر زره داره.

## منابع مرتبط

- [Vehicle Health Values](../resources/vehiclehealth)