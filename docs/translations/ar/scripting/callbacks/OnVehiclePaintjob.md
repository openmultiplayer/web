---
title: OnVehiclePaintjob
description: يتم إستدعاء هذا الكالباك عند تغيير طلاء السيارة في مرآب التعديل
tags: ["vehicle"]
---

<div dir="rtl" style={{ textAlign: "right" }}>
    
## الوصف

 يتم إستدعاء هذا الكالباك عند تغيير طلاء السيارة في مرآب التعديل



| Name          | Description                                                  |
| ---------     | ------------------------------------------------------------ |
| playerid      | إيدي اللاعب الذي غيّر طلاء السيارة                            |
| vehicleid     | إيدي السيارة التي تم تغيير طلائها                           |
| paintjobid    | اللون الذي تم تغيير اللون الأساسي للمركبة إليه             |

## Returns

يتم إستدعائه أولا في ال(الغيم مود¹) إذا يرجع 0 و يقوم أيضا بتعطيل بقية الفيلترسكريبتات من رأيته

¹ غيم مود = gamemode
## أمثلة

</div>

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## Notes

:::tip

هذا الكالب باك لا يتم إستدعائه من قبل (ChangeVehiclePaintjob).
يجب عليك إستعمال OnVehicleChangePaintJob من vSync لمعرفة إن قام اللاعب بدفع ثمن تغيير الطلاء

:::

:::warning

الأخطاء المعروفة : معاينة أحد المكونات في مرآب التعديل قد يستدعي هذا الكال باك

:::

## الاستدعاءات او كالباكات ذات الصلة

قد تكون الاستدعاءات التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [OnVehicleRespray](OnVehicleRespray): هذا الكالباك يتم إستدعائه عندما يتم تغيير طلاء السيارة
- [OnVehicleMod](OnVehicleMod): هذا الكالباك يتم إستدعائه عندما يتم تغيير مكونات السيارة

## وظائف ذات صلة

قد تكون الوظائف التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [ChangeVehicleColor](../functions/ChangeVehicleColor): يغير لون السيارة
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): يغير ستيكرات السيارة

</div>
