---
title: OnPlayerStreamOut
description: Ова повратна функција се позива када се играч уклони из клијента неког другог играча.
tags: ["player"]
---

## Опис

Ова повратна функција се позива када се играч уклони из клијента неког другог играча.

| Име         | Опис                                               |
| ----------- | -------------------------------------------------- |
| playerid    | Играч који је уклоњен из стримовања.               |
| forplayerid | Играч који је уклонио другог играча из стримовања. |

## Враћа

Увек се позива прва у филтер скрипти.

## Примери

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacks />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnPlayerStreamIn](OnPlayerStreamIn): Ова повратна функција се позива када се играч стримује за другог играча.
- [OnActorStreamIn](OnPlayerStreamOut): Ова повратна функција се позива када играч стримује актора. 
- [OnVehicleStreamIn](OnPlayerStreamOut): Ова повратна функција се позива када возило стримује за играча.
