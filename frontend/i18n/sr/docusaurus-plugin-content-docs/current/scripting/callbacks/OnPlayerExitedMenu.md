---
title: OnPlayerExitedMenu
sidebar_label: OnPlayerExitedMenu
description: Ова функција се позива када играч изађе из менија.
tags: ["player", "menu"]
---

## Опис

Ова функција се позива када играч изађе из менија.

| Име      | Опис                                      |
| -------- | ----------------------------------------- |
| playerid | ID играча који је изашао из менија.       |

## Враћа

Увек се позива прво у гамемод-у.

## Пример

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid, true); // Одледи играча када изађе из менија.
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): Ова функција се позива када играч изабере ред у менију.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreateMenu](../functions/CreateMenu): Креирај мени.
- [DestroyMenu](../functions/DestroyMenu): Уништи мени.
