---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: يستدعي الخادم هذه الدالة عندما تصبح شخصية actor ضمن نطاق العرض لدى لاعب.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## الوصف {#description}

يستدعي الخادم هذه الدالة عندما تصبح شخصية من نوع actor ضمن نطاق العرض لدى لاعب ويحمّلها برنامج اللعبة لديه.

| الاسم | الوصف |
| --- | --- |
| actorid | معرّف الشخصية التي دخلت نطاق العرض. |
| forplayerid | معرّف اللاعب الذي ظهرت لديه الشخصية. |

## ترتيب الاستدعاء {#returns}

يُستدعى أولًا في السكربتات الجانبية (filterscripts).

## مثال {#examples}

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## ملاحظات {#notes}

<NoteNPCCallbacks />

## دوال استدعاء ذات صلة {#related-callbacks}

- [OnActorStreamOut](OnActorStreamOut): عند خروج شخصية actor من نطاق العرض لدى لاعب.
- [OnPlayerStreamIn](OnPlayerStreamIn): عند دخول لاعب نطاق العرض لدى لاعب آخر.
