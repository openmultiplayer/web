---
title: BanEx
description: Банује играча са разлогом.
tags: ["player", "administration"]
---

## Опис

Банује играча са разлогом.

| Име              | Опис                     |
| ---------------- | ------------------------ |
| playerid         | ИД играча кога банујемо. |
| const reason[]   | Разлог бана.             |

## Враћа

Ова функција не враћа никакву специфичну вредност.

## Белешке

:::warning

Свака акција одмах пре BanEx(), као што је слање порука са [SendClientMessage](SendClientMessage), неће доћи до играча. Мора се поставити
тајмер да би се направио временски размак бан-у.

:::

## Примери

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Банује играча који укуца команду и стави разлог ( "Request" )
        BanEx(playerid, "Request");
        return 1;
    }
}

// Да би приказали поруку ( разлог ) играчу пре него што га избаци са сервера
// морамо користити тајмер да би направили размак. Овај размак мора бити само пар милисекунди,
// али овај пример користи пуну секунду чисто да би били сигурни.

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    // Разлог који ће ићи у BanEx
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Банује играча који укуца ову команду
        BanExWithMessage(playerid, 0xFF0000FF, "You have been banned!", "Request");
        return 1;
    }
    return 0;
}
```

## Повезане функције

- [Ban](Ban): Банује играча који је тренутно на серверу.
- [Kick](Kick): Избаци играча са сервера.
