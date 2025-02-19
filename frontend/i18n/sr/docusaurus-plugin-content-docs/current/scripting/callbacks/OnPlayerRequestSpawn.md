---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: Овај повратни позив се позива када играч покуша да се појави преко избора класе било притиском на SHIFT или кликом на дугме 'Spawn'.
tags: ["player", "class"]
---

## Опис

Овај повратни позив се позива када играч покуша да се појави преко избора класе било притиском на SHIFT или кликом на дугме 'Spawn'.

| Име      | Опис                                          |
| -------- | --------------------------------------------- |
| playerid | ID играча који тражи да се спавнује.          |

## Враћа

Увек се прво позива у филтер скриптама, тако да враћање 0 такође блокира остале скрипте да је виде.

## Пример

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

:::tip

To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in [OnPlayerRequestClass](OnPlayerRequestClass).

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerSpawn](OnPlayerSpawn): Овај повратни позив се позива када се играч појави.
- [OnPlayerRequestClass](OnPlayerRequestClass): Овај повратни позив се позива када играч промени класу на избору класе.
