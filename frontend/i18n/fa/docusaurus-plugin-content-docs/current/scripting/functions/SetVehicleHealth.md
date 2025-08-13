---
title: SetVehicleHealth
sidebar_label: SetVehicleHealth
description: تنظیم سلامت یک وسیله نقلیه.
tags: ["vehicle"]
---

## توضیحات

تنظیم سلامت یک وسیله نقلیه. هنگامی که سلامت وسیله نقلیه کاهش می‌یابد، موتور دود تولید می‌کند، و در نهایت هنگامی که به کمتر از ۲۵۰ (۲۵٪) کاهش می‌یابد آتش می‌گیرد.

| نام          | توضیحات                                        |
| ------------ | ---------------------------------------------- |
| vehicleid    | شناسه وسیله نقلیه‌ای که قرار است سلامت آن تنظیم شود. |
| Float:health | سلامت، به صورت مقدار float.                     |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا شکست خورد. این به معنای آن است که وسیله نقلیه وجود ندارد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/fixengine", cmdtext, true) == 0)
    {
        new
            vehicleid = GetPlayerVehicleID(playerid);

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, -1, "موتور وسیله نقلیه به طور کامل تعمیر شد.");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

سلامت کامل وسیله نقلیه ۱۰۰۰ است. مقادیر بالاتر امکان‌پذیر است. برای اطلاعات بیشتر در مورد مقادیر سلامت، [این](../resources/vehiclehealth) صفحه را ببینید.

:::

## توابع مرتبط

- [GetVehicleHealth](GetVehicleHealth): بررسی سلامت یک وسیله نقلیه.
- [RepairVehicle](RepairVehicle): تعمیر کامل یک وسیله نقلیه.
- [SetPlayerHealth](SetPlayerHealth): تنظیم سلامت یک بازیکن.

## کال‌بک‌های مرتبط

- [OnVehicleDeath](../callbacks/OnVehicleDeath): هنگام نابود شدن وسیله نقلیه فراخوانی می‌شود.

## منابع مرتبط

- [مقادیر سلامت وسیله نقلیه](../resources/vehiclehealth)