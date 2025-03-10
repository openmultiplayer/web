---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: Ова повратна функција се позива када играч промени класу на избору класе (и када се избор класе први пут појави).
tags: ["player", "class"]
---

## Опис

Ова повратна функција се позива када играч промени класу на избору класе (и када се избор класе први пут појави).

| Name     | Description                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| playerid | ID играча који је променио класу.                                                                     |
| classid  | ID тренутне класе која се приказује (коју враћа [AddPlayerClass](../functions/AddPlayerClass)).       |

## Враћа

Увек се позива прва у филтер скрипти.

## Примери

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## Белешке

:::tip

Ова повратна функција се такође позива када играч притисне F4.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnPlayerRequestSpawn](OnPlayerRequestSpawn): Ова повратна функција се позива када играч покуша да се појави путем избора класе.

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [AddPlayerClass](../functions/AddPlayerClass): Додајте класу играча.
