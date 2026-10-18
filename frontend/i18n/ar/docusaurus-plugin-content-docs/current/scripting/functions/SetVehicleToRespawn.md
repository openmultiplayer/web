---
title: SetVehicleToRespawn
sidebar_label: SetVehicleToRespawn
description: إعادة إظهار المركبة في الموقع الذي أُنشئت فيه.
tags: ["vehicle"]
---

## الوصف {#description}

تعيد هذه الدالة إظهار المركبة في الموقع الذي أُنشئت فيه.

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة المطلوب إعادة إظهارها. |

## القيم المعادة {#returns}

- **true**: نُفّذت الدالة بنجاح.
- **false**: تعذّر التنفيذ لأن المركبة غير موجودة.

## مثال {#examples}

```c
// Respawns the all vehicles
for (new i = 1; i < MAX_VEHICLES; i++)
{
    SetVehicleToRespawn(i);
}
```

## دوال ذات صلة {#related-functions}

- [CreateVehicle](CreateVehicle): إنشاء مركبة.
- [DestroyVehicle](DestroyVehicle): حذف مركبة.
