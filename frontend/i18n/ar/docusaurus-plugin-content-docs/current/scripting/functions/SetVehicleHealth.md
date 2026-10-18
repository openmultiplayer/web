---
title: SetVehicleHealth
sidebar_label: SetVehicleHealth
description: تعيين مقدار سلامة المركبة.
tags: ["vehicle"]
---

## الوصف {#description}

تعيّن هذه الدالة مقدار سلامة المركبة. كلما انخفضت القيمة، بدأ المحرك بإخراج الدخان، ثم اشتعلت فيه النار عندما تصبح أقل من `250`، أي `25%` من قيمة السلامة الكاملة.

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة المطلوب تعيين مقدار سلامتها. |
| Float:health | مقدار السلامة، بقيمة ذات فاصلة عائمة. |

## القيم المعادة {#returns}

- **true**: نُفّذت الدالة بنجاح.
- **false**: تعذّر التنفيذ لأن المركبة غير موجودة.

## مثال {#examples}

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/fixengine", cmdtext, true) == 0)
    {
        new
            vehicleid = GetPlayerVehicleID(playerid);

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, -1, "The vehicles engine has been fully repaired.");
        return 1;
    }
    return 0;
}
```

## ملاحظات {#notes}

:::note

قيمة السلامة الكاملة للمركبة هي `1000`، لكن يمكن تعيين قيم أعلى. للمزيد، راجع [قيم سلامة المركبات](../resources/vehiclehealth).

:::

## دوال ذات صلة {#related-functions}

- [GetVehicleHealth](GetVehicleHealth): قراءة مقدار سلامة المركبة.
- [RepairVehicle](RepairVehicle): إصلاح المركبة بالكامل.
- [SetPlayerHealth](SetPlayerHealth): تعيين صحة اللاعب.

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleDeath](../callbacks/OnVehicleDeath): عند تدمير مركبة.

## مراجع ذات صلة {#related-resources}

- [قيم سلامة المركبات](../resources/vehiclehealth).
