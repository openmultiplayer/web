---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: يستدعي الخادم هذه الدالة عندما تصبح مركبة ضمن نطاق العرض لدى لاعب.
tags: ["vehicle"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما تدخل مركبة نطاق العرض لدى لاعب ويحمّلها برنامج اللعبة لديه.

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة التي دخلت نطاق العرض. |
| forplayerid | معرّف اللاعب الذي ظهرت لديه المركبة. |

## ترتيب الاستدعاء {#returns}

يُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

<NoteNPCCallbacks />

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleStreamOut](OnVehicleStreamOut): عند خروج مركبة من نطاق العرض لدى لاعب.
- [OnPlayerStreamIn](OnPlayerStreamIn): عند دخول لاعب نطاق العرض لدى لاعب آخر.
- [OnPlayerStreamOut](OnPlayerStreamOut): عند خروج لاعب من نطاق العرض لدى لاعب آخر.
