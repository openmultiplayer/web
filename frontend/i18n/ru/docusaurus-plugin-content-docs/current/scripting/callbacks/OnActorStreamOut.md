---
title: OnActorStreamOut
description: Этот коллбэк вызывается, когда актёр пропадает из зоны стрима клиента.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Описание

Этот коллбэк вызывается, когда актёр пропадает из зоны стрима клиента.

| Аргумент    | Описание                                          |
| ----------- | ------------------------------------------------- |
| actorid     | ID актёра, который пропал из зоны стрима клиента. |
| forplayerid | Клиент, в из зоны стрима которого пропал актёр.   |

## Результат

Данный коллбэк всегда вызывается в filterscript'ах первее.

## Пример

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Актёр %d пропал из вашей зоны стрима.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Примечания

<TipNPCCallbacks />

## Функции
