---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: يستدعي الخادم هذه الدالة عند خروج لاعب من نطاق العرض لدى لاعب آخر.
tags: ["player"]
---

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما يخرج لاعب من نطاق العرض لدى لاعب آخر ويتوقف برنامج اللعبة لديه عن عرضه.

| الاسم | الوصف |
| --- | --- |
| playerid | معرّف اللاعب الذي خرج من نطاق العرض. |
| forplayerid | معرّف اللاعب الذي لم يعد اللاعب الآخر معروضًا لديه. |

## ترتيب الاستدعاء {#returns}

تُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## ملاحظات {#notes}

<NoteNPCCallbacks />

:::warning

عندما ينقطع اتصال لاعب، لا تُستدعى `OnPlayerStreamOut` لكلا اللاعبين.

:::

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnPlayerStreamIn](OnPlayerStreamIn): عند دخول لاعب نطاق العرض لدى لاعب آخر.
- [OnActorStreamOut](OnActorStreamOut): عند خروج شخصية actor من نطاق العرض لدى لاعب.
- [OnVehicleStreamOut](OnVehicleStreamOut): عند خروج مركبة من نطاق العرض لدى لاعب.
