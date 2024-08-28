---
title: Ban
description: Банује играча који је тренутно на серверу.
tags: ["player", "administration"]
---

## Опис

Бануј играча који је тренутно на серверу. Неће моћи да се поново прикључи серверу.

Забрана ће бити заснована на IP адреси и биће сачувана у **bans.json** датотеци у коренској фасцикли сервера.

[BanEx](BanEx) се може користити за давање разлога за забрану.

IP забране могу се додати/уклонити коришћењем RCON команди `banip` и `unbanip` команди ([SendRconCommand](SendRconCommand)).

| Име      | Опис                         |
| -------- | ---------------------------- |
| playerid | ID играћа кога банујемо.     |

## Враћа

Ова функција не враћа никакву специфичну вредност.

## Белешке

:::warning

Свака акција одмах пре Ban(), као што је слање порука са функцијом [SendClientMessage](SendClientMessage), неће доћи до играча. Мора се поставити тајмер да би се направио временски размак бан-у.

:::

## Примери

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Банује играћа који укуца ову команду
        Ban(playerid);
        return 1;
    }
}

// Да би приказали поруку ( разлог ) играчу пре него сто га избаци са сервера
// морамо користити тајмер да би направили размак. Овај размак мора бити само пар милисекунди,
// али овај пример користи пуну секунду чисто да би били сигурни.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Банује играца који укуца команду

        // Прво пошаљемо поруку
        SendClientMessage(playerid, 0xFF0000FF, "Banovan si sa servera!");

        // Банује их секунду касније да би порука изнад била приказана
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Сличне функције

- [BanEx](BanEx): Банује играча са разлогом.
- [Kick](Kick): Избаци играча са сервера.
- [BlockIpAddress](BlockIpAddress): Блокирај IP адресу да се повезује на сервер на одређени период.
- [UnBlockIpAddress](UnBlockIpAddress): Омогући приступ IP адреси која је претходно била блокирана.
