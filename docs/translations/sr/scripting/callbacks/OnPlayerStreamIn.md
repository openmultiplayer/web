---
title: OnPlayerStreamIn
description: Ова повратна функција се позива када се играч стримује од стране клијента неког другог играча.
tags: ["player"]
---

## Опис

Ова повратна функција се позива када се играч стримује од стране клијента неког другог играча.

| Име         | Опис                                                    |
| ----------- | ------------------------------------------------------- |
| playerid    | ID играча који је стримован.                            |
| forplayerid | ID играча који је стримовао другог играча.              |

## Враћа

Увек се позива прва у филтер скрипти.

## Пример

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnPlayerStreamOut](OnPlayerStreamOut): Ова повратна функција се позива када играч буде уклоњен из стримовања за другог играча.
- [OnActorStreamIn](OnPlayerStreamOut): Ова повратна функција се позива када играч стримује актора.
- [OnVehicleStreamIn](OnVehicleStreamIn): Ова повратна функција се позива када возило стримује за играча.
