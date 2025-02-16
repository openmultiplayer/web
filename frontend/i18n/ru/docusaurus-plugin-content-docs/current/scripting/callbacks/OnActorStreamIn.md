---
title: OnActorStreamIn
description: Этот коллбэк вызывается, когда актёр попадает в зону стрима клиента.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Описание

Этот коллбэк вызывается, когда актёр попадает в зону стрима клиента.

| Аргумент        | Описание                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | ID актёра, который попал в зону стрима клиента. |
| forplayerid | Клиент, в чью зону стрима попал актёр.              |

## Результат

Данный коллбэк всегда вызывается в filterscript'ах первее.

## Пример

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Актёр %d попал в вашу зону стрима.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Примечания

<TipNPCCallbacks />

## Функции
