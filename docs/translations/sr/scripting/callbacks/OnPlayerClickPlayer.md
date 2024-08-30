---
title: OnPlayerClickPlayer
description: Ова функција се позива када играч двапут кликне на играча на табели резултата.
tags: ["player"]
---

## Опис

Ова функција се позива када играч двапут кликне на играча на табели резултата.

| Име             | Опис                                                             |
| --------------- | ---------------------------------------------------------------- |
| playerid        | ИД играча који је кликнуо на играча на табели резултата.         |
| clickedplayerid | ИД играча на ког је кликнуто.                                    |
| source          | [Извор](../resources/clicksources) клика играча.                 |

## Враћа

**1** - Спречиће друге филтерскрипте да приме овај позив.

**0** - Означава да ће овај позив бити прослеђен следећем филтерскрипту.

Увек се прво позива у филтерскриптима.

## Пример

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new string[32];
    format(string, sizeof(string), "You clicked on player %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Белешке

:::tip

Тренутно постоји само један 'извор' (0 - `CLICK_SOURCE_SCOREBOARD`).

Присуство овог аргумента сугерише да ће у будућности бити подржани и други извори.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Ова функција се позива када играч кликне на текстдрава.

## Повезани ресурси

- [Click Sources](../resources/clicksources)
