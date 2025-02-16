---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Ова повратна функција се позива када се заврши SendClientCheck захтев.
tags: []
---

## Опис

Ова повратна функција се позива када се заврши `SendClientCheck` захтев.

| Име           | Опис                              |
| ------------- | --------------------------------- |
| playerid      | ID играча који је проверен.       |
| actionid      | Тип провере која је извршена.     |
| memaddr       | Адреса која је захтевана.         |
| retndata      | Резултат провере.                 |

## Враћа

Ово се увек прво позива у филтерскрипти.

## Примери

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // или 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```

## Белешке

:::warning

**SA:MP Server**: Ова повратна функција се позива само када се налази у филтер скрипи.

**Open Multiplayer Server**: Ова повратна функција функционише нормално унутар gamemode-a / филтер скрипти.

:::

## Повезане функције

Следећа функција може бити корисна, јер је на неки начин повезана са овом повратном функцијом.

- [SendClientCheck](../functions/SendClientCheck): Изврши проверу меморије на клијенту.

## Повезани ресурси

- [opcodes](../resources/opcodes): ID-ови опкода акција и њихова сврха.
