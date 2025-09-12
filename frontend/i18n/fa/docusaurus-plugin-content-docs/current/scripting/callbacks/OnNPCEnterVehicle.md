---
title: OnNPCEnterVehicle
sidebar_label: OnNPCEnterVehicle
description: این کالبک زمانی فراخوانده می‌شود که NPC وارد وسیله نقلیه شود.
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فراخوانده می‌شود که NPC وارد وسیله نقلیه شود.

| نام       | توضیحات                           |
| --------- | -------------------------------- |
| vehicleid | شناسه وسیله نقلیه که NPC وارد آن می‌شود |
| seatid    | شناسه صندلی که NPC استفاده می‌کند    |

## مثال‌ها

</div>

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

</div>

- [OnNPCExitVehicle](OnNPCExitVehicle): این کالبک زمانی فراخوانده می‌شود که NPC از وسیله نقلیه خارج شود.