---
title: OnVehicleStreamIn
description: Ова повратна функција се позива када се возило стримује на клијент играча.
tags: ["vehicle"]
---

## Опис

Ова повратна функција се позива када се возило стримује на клијент играча.

| Име         | Опис                                                   |
| ----------- | ------------------------------------------------------ |
| vehicleid   | ID возила које је стримовано у домет играча.           |
| forplayerid | ID играча за кога је возило стримовано.                |

## Враћа

Увек се позива први у филтер скриптама.

## Примери

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Related Callbacks
- [OnVehicleStreamOut](OnVehicleStreamOut): Ова повратна функција се позива када се возило стримује изван домета играча. 
- [OnPlayerStreamIn](OnPlayerStreamIn): Ова повратна функција се позива када се играч стримује у домет другог играча. 
- [OnPlayerStreamOut](OnPlayerStreamOut): Ова повратна функција се позива када се играч стримује изван домета другог играча. 
