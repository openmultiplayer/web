---
title: OnVehicleStreamOut
description: Ова повратна функција се позива када се возило стримује изван домета клијента играча (превише је далеко да би га видео).
tags: ["vehicle"]
---

## Опис

Ова повратна функција се позива када се возило стримује изван домета клијента играча (превише је далеко да би га видео).

| Име         | Опис                                                         |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | ID возила које је стримовано изван домета.                   |
| forplayerid | ID играча који више не стримује возило.                      |

## Враћа

Увек се позива први у филтер скриптама.

## Примери

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

- [OnVehicleStreamIn](OnVehicleStreamIn): Ова повратна функција се позива када се возило стримује у домет играча.
- [OnPlayerStreamIn](OnPlayerStreamIn): Ова повратна функција се позива када се играч стримује у домет другог играча. 
- [OnPlayerStreamOut](OnPlayerStreamOut): Ова повратна функција се позива када се играч стримује изван домета другог играча. 
