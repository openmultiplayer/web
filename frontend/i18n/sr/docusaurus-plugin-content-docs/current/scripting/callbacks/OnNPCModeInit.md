---
title: OnNPCModeInit.
sidebar_label: OnNPCModeInit.
description: Ова повратна функција се позива када се NPC скрипта учита.
tags: ["npc"]
---

## Опис

Ова повратна функција се позива када се NPC скрипта учита.

## Пример

```c
public OnNPCModeInit()
{
    print("NPC script loaded.");
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnNPCModeExit](OnNPCModeExit): Ова повратна функција се позива када се NPC скрипта искључи.
