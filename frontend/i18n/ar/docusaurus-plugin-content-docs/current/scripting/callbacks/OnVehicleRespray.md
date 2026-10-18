---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: يستدعي الخادم هذه الدالة عند خروج لاعب من ورشة تعديل، حتى إن لم يغيّر ألوان المركبة.
tags: ["vehicle"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عند خروج لاعب من ورشة تعديل، حتى إن لم يغيّر ألوان المركبة. قد يوحي اسم الدالة بأنها تشمل ورش Pay 'n' Spray، لكن تلك الورش لا تستدعيها.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي يقود المركبة. |
| vehicleid | معرّف المركبة التي أُعيد طلاؤها. |
| color1 | اللون الأساسي الجديد للمركبة. |
| color2 | اللون الثانوي الجديد للمركبة. |

## القيم المعادة وترتيب الاستدعاء {#returns}

إعادة `0` تمنع تغيير اللون، وإعادة `1` تسمح به.

تُستدعى الدالة أولًا في سكربت نمط اللعب (gamemode). إذا أعادت `0` هناك، فلن تتلقاها السكربتات الجانبية (filterscripts) أيضًا.

## مثال {#examples}

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## ملاحظات {#notes}

:::note

استدعاء `ChangeVehicleColor` لا يؤدي إلى استدعاء هذه الدالة. كذلك لا تستدعيها ورش Pay 'n' Spray؛ فهي تخص ورش التعديل فقط.

يتوفر حل بديل هنا: https://pastebin.com/G81da7N1

:::

:::warning

من المشكلات المعروفة أن معاينة قطعة تعديل داخل الورشة قد تستدعي هذه الدالة.

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehiclePaintjob](OnVehiclePaintjob): عند تغيير تصميم طلاء المركبة.
- [OnVehicleMod](OnVehicleMod): عند تعديل المركبة.
- [OnEnterExitModShop](OnEnterExitModShop): عند دخول مركبة ورشة تعديل أو خروجها منها.

## دوال ذات صلة {#related-functions}

- [ChangeVehicleColor](../functions/ChangeVehicleColor): تعيين لون المركبة.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): تغيير تصميم طلاء المركبة.
