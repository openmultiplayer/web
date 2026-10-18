---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: يستدعي الخادم هذه الدالة عند دخول لاعب نطاق العرض لدى لاعب آخر.
tags: ["player"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما يصبح لاعب ضمن نطاق العرض لدى لاعب آخر ويحمّله برنامج اللعبة لديه.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي دخل نطاق العرض. |
| forplayerid | معرّف اللاعب الذي ظهر لديه اللاعب الآخر. |

## ترتيب الاستدعاء {#returns}

تُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

<NoteNPCCallbacks />

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnPlayerStreamOut](OnPlayerStreamOut): عند خروج لاعب من نطاق العرض لدى لاعب آخر.
- [OnActorStreamIn](OnActorStreamIn): عند دخول شخصية actor نطاق العرض لدى لاعب.
- [OnVehicleStreamIn](OnVehicleStreamIn): عند دخول مركبة نطاق العرض لدى لاعب.
