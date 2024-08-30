---
title: OnGameModeInit
description: Ова повратна функција се активира када се гамемоде покрене.
tags: []
---

## Опис

Ова повратна функција се активира када се гамемоде покрене.

## Примери

```c
public OnGameModeInit()
{
    print("Gamemode pokrenut!");
    return 1;
}
```

## Белешке

:::tip

Ова функција се такође може користити у филтер скрипти да детектује ако се гамемод промени помоћу RCON команди као што су changemodе или gmx, јер промена гамемода-а не учитава филтер скрипте поново.

:::

## Повезане повртане функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnGameModeExit](OnGameModeExit): This callback is called when a gamemode ends.
- [OnFilterScriptInit](OnFilterScriptInit): This callback is called when a filterscript is loaded.
- [OnFilterSciptExit](OnFilterScriptExit): This callback is called when a filterscript is unloaded.
