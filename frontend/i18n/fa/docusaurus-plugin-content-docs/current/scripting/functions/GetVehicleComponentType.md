---
title: GetVehicleComponentType
sidebar_label: GetVehicleComponentType
description: مشخص کردن نوع یه کامپوننت با ID خاص.
tags: ["vehicle"]
---

## توضیحات

مشخص کردن نوع یه کامپوننت با ID خاص.

| نام      | توضیحات                |
| --------- | -------------------------- |
| component | ID کامپوننتی که می‌خوای چک کنی. |

## مقادیر برگشتی

ID slot کامپوننت مشخص شده یا **-1** اگه کامپوننت نامعتبر باشه.

## مثال‌ها

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new
        CARMODTYPE:componentType = GetVehicleComponentType(componentid);

    if (componentType != CARMODTYPE_NONE)
    {
        new
            string[64];

        format(string, sizeof(string), "You have modified your vehicle on slot %i", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "The component is invalid.");
    }
    return 1;
}
```

## توابع مرتبط

- [AddVehicleComponent](AddVehicleComponent): اضافه کردن کامپوننت به وسیله نقلیه.
- [RemoveVehicleComponent](RemoveVehicleComponent): حذف کامپوننت از وسیله نقلیه.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): بررسی اینکه وسیله نقلیه چه کامپوننت‌هایی داره.

## Callback های مرتبط

- [OnVehicleMod](../callbacks/OnVehicleMod): وقتی یه وسیله نقلیه مود می‌شه فراخوانی می‌شه.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): وقتی یه وسیله نقلیه وارد یا خارج mod shop می‌شه فراخوانی می‌شه.