---
title: RepairVehicle
sidebar_label: RepairVehicle
description: وسیله نقلیه رو کاملاً تعمیر می‌کنه، شامل آسیب‌های ظاهری (ضربه‌ها، خراش‌ها، پنچری و غیره).
tags: ["vehicle"]
---

## توضیحات

وسیله نقلیه رو کاملاً تعمیر می‌کنه، شامل آسیب‌های ظاهری (ضربه‌ها، فرورفتگی‌ها، خراش‌ها، پنچری لاستیک و غیره).

| نام      | توضیحات                      |
| --------- | -------------------------------- |
| vehicleid | ID وسیله نقلیه برای تعمیر. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی وسیله نقلیه مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/repair", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "You are not in a vehicle!");
        }

        RepairVehicle(GetPlayerVehicleID(playerid));

        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been repaired!");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetVehicleHealth](SetVehicleHealth): تنظیم سلامتی وسیله نقلیه.
- [GetVehicleHealth](GetVehicleHealth): بررسی سلامتی وسیله نقلیه.