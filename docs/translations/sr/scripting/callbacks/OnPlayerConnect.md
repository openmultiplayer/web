---
title: OnPlayerConnect
description: Ова функција се позива када се играч повезује на сервер.
tags: ["player"]
---

## Опис

Ова функција се позива када се играч повезује на сервер.

| Име      | Опис                                    |
| -------- | --------------------------------------- |
| playerid | ID играча који се конектовао на сервер. |

## Враћа

**0** - Спречиће друге филтерскрипте да приме овај позив.

**1** - Означава да ће овај позив бити прослеђен следећем филтерскрипту.

Увек се прво позива у филтерскриптима.

## Пример

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s has joined the server. Welcome!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerDisconnect](OnPlayerDisconnect): Ова функција се позива када играч напусти сервер.
- [OnIncomingConnection](OnIncomingConnection): Ова функција се позива када играч покушава да се повезе на сервер.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Ова функција се позива када играч заврши преузимање прилагођених модела.
