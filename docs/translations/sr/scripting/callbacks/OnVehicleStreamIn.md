---
title: OnVehicleStreamIn
description: Позван када се возило појави у играчевом клијенту.
tags: ["vehicle"]
---

:::warning

Ова функција је додата у SA-MP 0.3a верзији и неће радити у нижим верзијама.

:::

## Дескрипција

Позван када се возило појави у играчевом клијенту.

| Име         | Дескрипција                                      |
| ----------- | ------------------------------------------------ |
| vehicleid   | ID возила које се појавило у играчевом клијенту. |
| forplayerid | ID играча у чијем се клијенту појавило возило.  |

## Return

Увек је позван прво у филтерскриптама.

## Примери

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Сада можете да видите возило %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

:::tip

Овај колбек позваће и NPC.

:::

## Сличне Функције
