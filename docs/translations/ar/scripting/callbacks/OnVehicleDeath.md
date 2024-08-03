---
title: OnVehicleDeath
description: يتم إستدعاء هذا الكالباك عند يتم تدمير السيارة
tags: ["vehicle"]
---

<div dir="rtl" style={{ textAlign: "right" }}>
    
## الوصف

يتم إستدعاء هذا الكالباك عند يتم تدمير السيارة

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| vehicleid     | إيدي السيارة التي تم تدميرها                               |
| killerid      | إيدي اللاعب الذي دمّر السيارة                                |

## Returns

دائمًا يتم استدعاؤه أولاً في الفلترسكربتات.

## أمثلة

</div>

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## Notes

:::tip

 يتم إستدعاء هذا الكالباك أيضا عند دخول السيارة في الماء لكن السيارة يمكن إنقاذها من التدمير بالإنتقال الآني او قيادتها خارج الماء(إذا كانت مغمورة جزئيا) . هذا الكالباك لن يستدعى
 مرة ثانية و هناك إمكانية إختفاء السيارة عند نزول السائق منها

:::


## الاستدعاءات او كالباكات ذات الصلة

قد تكون الاستدعاءات التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [OnVehicleSpawn](OnVehicleSpawn): يتم إستدعاء هذا الكالباك عند رسبنت السيارة

## وظائف ذات صلة

قد تكون الوظائف التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [SetVehicleHealth](../functions/SetVehicleHealth): ضبط صحة السيارة 

</div>