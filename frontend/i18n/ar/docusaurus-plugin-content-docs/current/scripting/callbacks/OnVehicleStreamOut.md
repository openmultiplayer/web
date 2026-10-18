---
title: OnVehicleStreamOut
sidebar_label: OnVehicleStreamOut
description: يستدعي الخادم هذه الدالة عندما تخرج مركبة من نطاق العرض لدى لاعب.
tags: ["vehicle"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما تخرج مركبة من نطاق العرض لدى لاعب، مثلما يحدث عندما تبتعد عنه إلى حدّ لا يعود بإمكانه رؤيتها.

| الاسم | الوصف |
| --- | --- |
| vehicleid | معرّف المركبة التي خرجت من نطاق العرض. |
| forplayerid | معرّف اللاعب الذي لم تعد المركبة معروضة لديه. |

## ترتيب الاستدعاء {#returns}

يُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

<NoteNPCCallbacks />

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnVehicleStreamIn](OnVehicleStreamIn): عند دخول مركبة نطاق العرض لدى لاعب.
- [OnPlayerStreamIn](OnPlayerStreamIn): عند دخول لاعب نطاق العرض لدى لاعب آخر.
- [OnPlayerStreamOut](OnPlayerStreamOut): عند خروج لاعب من نطاق العرض لدى لاعب آخر.
