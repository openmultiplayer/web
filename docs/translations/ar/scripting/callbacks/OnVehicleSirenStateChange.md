---
title: OnVehicleSirenStateChange
description: يتم إستدعاء هذا الكال باك عند تفعيل صفارة الإنذار للسيارة
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

<div dir="rtl" style={{ textAlign: "right" }}>

## Description

يتم إستدعاء هذا الكال باك عند تفعيل صفارة الإنذار للسيارة

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| playerid  | إيدي اللاعب الذي فعّل صفارة الإنذار (السائق)              |
| vehicleid |إيدي السيارة التي تم تفعيل صفارة الإنذار فيها            |
| newstate  |  1 تم إطفاء الصفارة 0 | إذا تم تشغيل الصفارة           |

## Returns

1 - سيمنع ال(الغيم مود¹) من تلقي هذا الكالباك

0 - يشير إلى أنه سيتم تمرير هذا الكال باك إلى ال(الغيم مود¹) القادم


¹الغيم مود = gamemode

يتم إستدعائه أولا في الفيلترسكريبتات

## أمثلة
</div>
```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);
    }
    return 1;
}
```
<div dir="rtl" style={{ textAlign: "right" }}>
    
## Notes

:::tip

يتم إستدعاء هذا الكالباك فقط عندما يتم تشغيل او إطفاء صفارة الإنظار

:::

## وظائف ذات صلة

قد تكون الوظائف التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): التحقق إذ كانت صفارة الإنذار الخاصة بالسيارة مشغلة أو لا

</div>
