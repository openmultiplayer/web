---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: يستدعي الخادم هذه الدالة عند معاينة تصميم طلاء مركبة داخل ورشة تعديل.
tags: ["vehicle"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما يعاين لاعب تصميم طلاء (paintjob) لمركبته داخل ورشة تعديل. انتبه: المعاينة هي التي تستدعي الدالة، وليس شراء التصميم.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي غيّر تصميم طلاء مركبته. |
| vehicleid | معرّف المركبة التي تغيّر تصميم طلائها. |
| paintjobid | معرّف [تصميم الطلاء](../resources/paintjobs) الجديد. |

## القيم المعادة وترتيب الاستدعاء {#returns}

تُستدعى أولًا في سكربت نمط اللعب (gamemode). إذا أعادت `0` هناك، فلن تتلقاها السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## ملاحظات {#notes}

:::note

استدعاء `ChangeVehiclePaintjob` لا يؤدي إلى استدعاء هذه الدالة. لمعرفة وقت شراء اللاعب تصميم الطلاء، يمكنك استخدام `OnVehicleChangePaintjob` من مكتبة vSync.

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleRespray](OnVehicleRespray): عند إعادة طلاء المركبة.
- [OnVehicleMod](OnVehicleMod): عند تعديل المركبة.

## دوال ذات صلة {#related-functions}

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): تغيير تصميم طلاء المركبة.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): تعيين لون المركبة.
