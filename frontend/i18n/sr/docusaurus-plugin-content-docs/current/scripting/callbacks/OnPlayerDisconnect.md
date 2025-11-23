---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: Ова функција се позива када се играч искључи са сервера.
tags: ["player"]
---

## Опис

Ова функција се позива када се играч искључи са сервера.

| Име      | Опис                                               |
| -------- | -------------------------------------------------- |
| playerid | ID играча који се искључио.                        |
| reason   | Разлог искључења. Погледајте табелу испод.         |

## Враћа

**0** - Спречиће друге филтерскрипте да приме овај позив.

**1** - Означава да ће овај позив бити прослеђен следећем филтерскрипту.

Увек се прво позива у филтерскриптима.

## Разлог

| ID | Разлог        | Детаљи                                                                                         |
| -- | ------------- | ---------------------------------------------------------------------------------------------- |
| 0  | Timeout/Crash | Играч је изгубио везу. Или им је игра пала или је њихова мрежа имала проблем.                  |
| 1  | Quit          | Играч је намерно напустио игру, било коришћењем команде /quit (/q) или преко менија за паузу.  |
| 2  | Kick/Ban      | Играч је избачен или забрањен од стране сервера.                                               |

## Примери

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s left the server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Белешке

:::tip

Неке функције можда неће радити исправно када се користе у овој функцији јер је играч већ искључен када се функција позива. То значи да не можете добити недвосмислене информације из функција као што су [GetPlayerIp](GetPlayerIp) и [GetPlayerPos](GetPlayerPos).

Овај проблем је решен на open.mp серверу.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerConnect](OnPlayerConnect): Ова функција се позива када се играч повезује на сервер.
- [OnIncomingConnection](OnIncomingConnection): Ова функција се позива када играч покушава да се повезе на сервер.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Ова функција се позива када играч заврши преузимање прилагођених модела.
