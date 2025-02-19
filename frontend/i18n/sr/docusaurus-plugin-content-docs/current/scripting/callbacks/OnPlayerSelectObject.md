---
title: OnPlayerSelectObject
sidebar_label: OnPlayerSelectObject
description: Овај повратни позив се позива када играч изабере објекат након што је коришћена функција BeginObjectSelecting.
tags: ["player", "object"]
---

## Опис

Овај повратни позив се позива када играч изабере објекат након што је коришћена функција [BeginObjectSelecting](../functions/BeginObjectSelecting).

| Име                | Опис                                                    |
|--------------------|---------------------------------------------------------|
| playerid           | ID играча који је изабрао објекат.                      |
| SELECT_OBJECT:type | [Тип](../resources/selectobjecttypes) селекције.        |
| objectid           | ID изабраног објекта.                                   |
| modelid            | Модел датог објекта.                                    |
| Float:fX           | X координата објекта.                                   |
| Float:fY           | Y координата објекта.                                   |
| Float:fZ           | Z координата објекта.                                   |

## Враћа

**1** - Спречиће остале скрипте да приме овај повратни позив.

**0** - Означава да ће овај повратни позив бити прослеђен следећој скрипти.

Овај повратни позив се увек прво позива у filterscripts.

## Пример

```c
public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);

    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        BeginObjectEditing(playerid, objectid);
    }
    else
    {
        BeginPlayerObjectEditing(playerid, objectid);
    }

    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");
    return 1;
}
```

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [BeginObjectSelecting](../functions/BeginObjectSelecting): Бира објекат.

## Повезани ресурси

- [Типови одабира објеката](../resources/selectobjecttypes)
