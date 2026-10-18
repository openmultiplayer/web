---
title: ChangeVehiclePaintjob
sidebar_label: ChangeVehiclePaintjob
description: تغيير تصميم طلاء المركبة.
tags: ["vehicle"]
---

## الوصف {#description}

تغيّر هذه الدالة تصميم طلاء المركبة (paintjob). لتغيير الألوان العادية، استخدم [ChangeVehicleColor](ChangeVehicleColor).

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة المطلوب تغيير تصميم طلائها. |
| paintjob | معرّف [تصميم الطلاء](../resources/paintjobs) المطلوب تطبيقه. استخدم `3` لإزالة التصميم. |

## القيم المعادة {#returns}

تعيد هذه الدالة دائمًا **true**، حتى لو كانت المركبة المحددة غير موجودة؛ لذلك لا تعتمد على القيمة المعادة للتحقق من وجود المركبة.

## مثال {#examples}

```c
new rand = random(3); // Will either be 0 1 or 2 (all valid)
new vehicleid = GetPlayerVehicleID(playerid);

ChangeVehicleColor(vehicleid, 1, 1); // making sure it is white for better result
ChangeVehiclePaintjob(vehicleid, rand); // changes the paintjob of the player's current vehicle to a random one
```

## ملاحظات {#notes}

:::warning

قد لا يظهر تصميم الطلاء إذا كان لون المركبة أسود. للحصول على نتيجة أوضح، اجعل المركبة بيضاء قبل تطبيق التصميم باستخدام:

```c
ChangeVehicleColor(vehicleid, 1, 1);
```

:::

## دوال ذات صلة {#related-functions}

- [GetVehiclePaintjob](GetVehiclePaintjob): قراءة معرّف تصميم طلاء المركبة.
- [ChangeVehicleColor](ChangeVehicleColor): تعيين ألوان المركبة.

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): عند تغيير تصميم طلاء مركبة.

## مراجع ذات صلة {#related-resources}

- [معرّفات تصاميم طلاء المركبات](../resources/paintjobs).
