---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: يستدعي الخادم هذه الدالة عند دخول لاعب ورشة تعديل أو خروجه منها.
tags: ["player"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما يدخل لاعب ورشة تعديل أو يخرج منها.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي دخل الورشة أو خرج منها. |
| enterexit | القيمة `1` عند الدخول، و`0` عند الخروج. |
| interiorid | معرّف المنطقة الداخلية للورشة عند الدخول، أو `0` عند الخروج. |

## ترتيب الاستدعاء {#returns}

تُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // If enterexit is 0, this means they are exiting
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## ملاحظات {#notes}

:::warning

من المشكلات المعروفة أن اللاعبين قد يصطدمون ببعضهم عند دخول الورشة نفسها.

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleMod](OnVehicleMod): عند تعديل مركبة.
- [OnVehicleRespray](OnVehicleRespray): عند خروج لاعب من ورشة تعديل، حتى إن لم يغيّر الألوان.
- [OnVehiclePaintjob](OnVehiclePaintjob): عند معاينة تصميم طلاء داخل ورشة تعديل.

## دوال ذات صلة {#related-functions}

- [IsPlayerInModShop](../functions/IsPlayerInModShop): التحقق مما إذا كان اللاعب داخل ورشة تعديل.
- [AddVehicleComponent](../functions/AddVehicleComponent): إضافة قطعة تعديل إلى مركبة.
