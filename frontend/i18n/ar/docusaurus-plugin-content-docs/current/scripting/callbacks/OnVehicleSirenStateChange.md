---
title: OnVehicleSirenStateChange
sidebar_label: OnVehicleSirenStateChange
description: يستدعي الخادم هذه الدالة عند تشغيل صفّارة إنذار المركبة أو إيقافها.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## الوصف {#description}

يستدعي الخادم هذه الدالة عند تشغيل صفّارة إنذار المركبة أو إيقافها.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي شغّل الصفّارة أو أوقفها، وهو السائق. |
| vehicleid | معرّف المركبة التي تغيّرت حالة صفّارتها. |
| newstate | القيمة `0` إذا أُوقفت الصفّارة، و`1` إذا شُغّلت. |

## القيم المعادة وترتيب الاستدعاء {#returns}

- `1`: تمنع وصول هذا الاستدعاء إلى سكربت نمط اللعب (gamemode).
- `0`: تسمح بتمرير هذا الاستدعاء إلى سكربت نمط اللعب.

يُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

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

## ملاحظات {#notes}

:::note

تُستدعى الدالة فقط عند تشغيل الصفّارة أو إيقافها، ولا تُستدعى عند استخدام الصفّارة البديلة بالاستمرار في الضغط على زر البوق.

:::

## دوال ذات صلة {#related-functions}

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): التحقق مما إذا كانت صفّارة المركبة تعمل.
