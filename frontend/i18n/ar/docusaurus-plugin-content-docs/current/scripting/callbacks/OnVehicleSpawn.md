---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: يستدعي الخادم هذه الدالة عند إعادة ظهور مركبة.
tags: ["vehicle"]
---

:::warning

تُستدعى هذه الدالة عند **إعادة** ظهور المركبة فقط. إنشاء مركبة باستخدام `CreateVehicle` أو `AddStaticVehicle` أو `AddStaticVehicleEx` لا يستدعيها.

:::

## الوصف {#description}

يستدعي الخادم هذه الدالة عند إعادة ظهور مركبة.

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة التي أُعيد إظهارها. |

## القيم المعادة وترتيب الاستدعاء {#returns}

- `0`: تمنع السكربتات الجانبية الأخرى من تلقي هذا الاستدعاء.
- `1`: تسمح بتمريره إلى السكربت الجانبي التالي.

يُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleDeath](OnVehicleDeath): عند تدمير مركبة.
- [OnPlayerSpawn](OnPlayerSpawn): عند ظهور لاعب في عالم اللعبة.

## دوال ذات صلة {#related-functions}

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): إعادة إظهار مركبة.
- [CreateVehicle](../functions/CreateVehicle): إنشاء مركبة.
