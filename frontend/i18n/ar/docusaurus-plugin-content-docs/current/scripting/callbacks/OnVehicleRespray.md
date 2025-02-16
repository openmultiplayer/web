---
title: OnVehicleRespray
description: يتم إستدعاء هذا الكالباك عند خروج اللاعب من  مرآب تعديل السيارات حتى إذا كان طلاء السيارة لم يتغير
tags: ["vehicle"]
---

<div dir="rtl" style={{ textAlign: "right" }}>
    
## الوصف

يتم إستدعاء هذا الكالباك عند خروج اللاعب من  مرآب تعديل السيارات حتى إذا كان طلاء السيارة لم يتغير. إحذر الإسم غامض مرائب (إدفع و رش¹) لا يفعلوا هذا الكالباك




| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| playerid  | إيدي اللاعب اللذي يقود السيارة                              |
| vehicleid | إيدي السيارة التي تم إغادة طلائها                           |
| color1    | اللون الذي تم تغيير اللون الأساسي للمركبة إليه             |
| color2    | اللون الذي تم تغيير اللون الثانوي للمركبة إليه           |

## Returns

يتم إستدعائه أولا في ال(الغيم مود²) إذا يرجع 0 و يقوم أيضا بتعطيل بقية الفيلترسكريبتات من رأيته


## أمثلة

</div>

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## Notes

:::tip

هذا الكالب باك لا يتم إستدعائه من قبل (ChangeVehicleColor) بشكل مضلل.
هذا الكالباك لا يتم إستدعائه من قبل (إدفع و رش¹)

الإصلاح هنا: http://pastebin.com/G81da7N1

:::

:::warning

الأخطاء المعروفة : معاينة أحد المكونات في مرآب التعديل قد يستدعي هذا الكال باك

:::

¹إدقع و رش = Pay 'n' Spray
²الغيم مود = gamemode

## الاستدعاءات او كالباكات ذات الصلة

قد تكون الاستدعاءات التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [OnVehiclePaintjob](OnVehiclePaintjob): هذا الكالباك يتم إستدعائه عندما يتم تغيير ستيكرات السيارة
- [OnVehicleMod](OnVehicleMod): هذا الكالباك يتم إستدعائه عندما يتم تغيير مكونات السيارة
- [OnEnterExitModShop](OnEnterExitModShop): هذا الكالباك يتم إستدعائه عند دخول أو خروج سيارة إلى مرآب التعديل

## وظائف ذات صلة

قد تكون الوظائف التالية مفيدة، حيث أنها ذات صلة بهذا الاستدعاء بطريقة أو بأخرى 

- [ChangeVehicleColor](../functions/ChangeVehicleColor): يغير لون السيارة
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): يغير ستيكرات السيارة

</div>

