---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: يستدعي الخادم هذه الدالة عند إضافة قطعة تعديل إلى مركبة.
tags: ["vehicle"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عند إضافة قطعة تعديل إلى مركبة.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف سائق المركبة. |
| vehicleid | معرّف المركبة التي عُدّلت. |
| componentid | [معرّف قطعة التعديل](../resources/carcomponentid) التي أُضيفت إلى المركبة. |

## القيم المعادة وترتيب الاستدعاء {#returns}

إعادة `0` تمنع مزامنة التعديل مع بقية اللاعبين.

تُستدعى أولًا في سكربت نمط اللعب (gamemode). إذا أعادت `0` هناك، فلن تتلقاها السكربتات الجانبية (filterscripts) أيضًا.

## مثال {#examples}

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d", vehicleid, playerid, componentid);

    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script
        return 0; // Prevents the bad modification from being synced to other players
        // Tested and it works even on servers wich allow you to mod your vehicle using commands, menus, dialogs, etc..
    }
    return 1;
}
```

## ملاحظات {#notes}

:::note

استدعاء `AddVehicleComponent` لا يؤدي إلى استدعاء هذه الدالة.

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnEnterExitModShop](OnEnterExitModShop): عند دخول ورشة تعديل أو الخروج منها.
- [OnVehiclePaintjob](OnVehiclePaintjob): عند تغيير تصميم طلاء المركبة.
- [OnVehicleRespray](OnVehicleRespray): عند إعادة طلاء المركبة.

## دوال ذات صلة {#related-functions}

- [AddVehicleComponent](../functions/AddVehicleComponent): إضافة قطعة تعديل إلى مركبة.
