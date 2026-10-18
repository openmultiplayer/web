---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: يستدعي الخادم هذه الدالة عند خروج شخصية actor من نطاق العرض لدى لاعب.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما تخرج شخصية من نوع actor من نطاق العرض لدى لاعب ويتوقف برنامج اللعبة لديه عن عرضها.

| الاسم | الوصف |
| --- | --- |
| actorid | معرّف الشخصية التي خرجت من نطاق العرض. |
| forplayerid | معرّف اللاعب الذي لم تعد الشخصية معروضة لديه. |

## ترتيب الاستدعاء {#returns}

تُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

<NoteNPCCallbacks />

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnActorStreamIn](OnActorStreamIn): عند دخول شخصية actor نطاق العرض لدى لاعب.
- [OnPlayerStreamOut](OnPlayerStreamOut): عند خروج لاعب من نطاق العرض لدى لاعب آخر.
