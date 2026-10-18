---
title: GetVehicleParamsSirenState
sidebar_label: GetVehicleParamsSirenState
description: قراءة حالة صفّارة إنذار المركبة لمعرفة ما إذا كانت تعمل.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## الوصف {#description}

تعيد هذه الدالة حالة صفّارة إنذار المركبة: هل تعمل أم لا؟

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة المطلوب معرفة حالة صفّارتها. |

## القيم المعادة {#returns}

- **-1**: لم تُعيّن حالة الصفّارة بعد، وهي متوقفة.
- **0**: الصفّارة متوقفة.
- **1**: الصفّارة تعمل.

## مثال {#examples}

```c
new
    siren = GetVehicleParamsSirenState(vehicleid);

if (siren == 1)
{
    // Siren is on, do something
}
else if (siren == 0)
{
    // Siren is off, do something
}
else
{
    // Vehicle does not have a siren
}
```

## ملاحظات {#notes}

:::warning

القيمتان `-1` و`0` تعنيان أن الصفّارة متوقفة، لكن الشرط `if (sirenstate)` يعامل أي قيمة غير الصفر على أنها صحيحة، بما فيها `-1`. لذلك تحقّق صراحةً من أن الحالة تساوي `1` لمعرفة ما إذا كانت الصفّارة تعمل.

:::

## دوال ذات صلة {#related-functions}

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): تشغيل صفّارة المركبة أو إيقافها.

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): عند تشغيل الصفّارة أو إيقافها.
