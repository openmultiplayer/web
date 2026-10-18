---
title: OnVehicleDeath
sidebar_label: OnVehicleDeath
description: يستدعي الخادم هذه الدالة عند تدمير مركبة، سواء بانفجارها أو بغمرها بالماء.
tags: ["vehicle"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عند تدمير مركبة، سواء بانفجارها أو بغمرها بالماء.

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة التي دُمّرت. |
| killerid | معرّف اللاعب الذي أبلغ برنامج اللعبة لديه الخادمَ بتدمير المركبة عبر المزامنة. الاسم قد يكون مضللًا؛ فهذا اللاعب ليس بالضرورة من دمّرها، بل يكون عادةً السائق أو أحد الركاب إن وُجدوا، أو أقرب لاعب إليها. |

## ترتيب الاستدعاء {#returns}

يُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

:::note

تُستدعى هذه الدالة أيضًا عند دخول المركبة في الماء، مع أن إنقاذها قد يظل ممكنًا بنقلها إلى مكان آخر برمجيًا، أو بقيادتها خارج الماء إن كانت مغمورة جزئيًا فقط. لن تُستدعى الدالة مرة ثانية، وقد تختفي المركبة عندما يغادرها السائق أو بعد وقت قصير.

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleSpawn](OnVehicleSpawn): عند إعادة ظهور مركبة.

## دوال ذات صلة {#related-functions}

- [SetVehicleHealth](../functions/SetVehicleHealth): تعيين مقدار سلامة المركبة.
