---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: Ова повратна функција се позива када се NPC скрипта искључи.
tags: ["npc"]
---

## Опис

Ова повратна функција се позива када се NPC скрипта искључи.


## Пример

```c
public OnNPCModeExit()
{
    print("NPC script unloaded");
    return 1;
}
```


## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnNPCModeInit](OnNPCModeInit): Ова повратна функција се позива када се NPC скрипт учита.
