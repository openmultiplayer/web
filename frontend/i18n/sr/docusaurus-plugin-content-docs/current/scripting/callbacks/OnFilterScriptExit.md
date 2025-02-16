---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Ова повратна функција се позива када се филтер скрипта искључи (или уклони).
tags: []
---

## Опис

Ова повратна функција се позива када се филтер скрипта искључи. Позива се само унутар филтер скрипте који се искључује.

## Примери

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Moja filterskripta je iskljucena.");
    print("--------------------------------------\n");
    return 1;
}
```

## Сличне повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnFilterScriptInit](OnFilterScriptInit): Ова повратна функција се позива када се филтер скрипта учита.
- [OnGameModeInit](OnGameModeInit): Ова повратна функција се позива када се gamemode покрене.
- [OnGameModeExit](OnGameModeExit): Ова повратна функција се позива када се gamemode заврши.
