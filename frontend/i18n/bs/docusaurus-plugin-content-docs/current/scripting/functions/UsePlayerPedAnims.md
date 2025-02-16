---
title: UsePlayerPedAnims
sidebar_label: UsePlayerPedAnims
description: Koristi standardnu ​​animaciju hodanja igrača (animacija CJ kože) umjesto prilagođenih animacija za svaku kožu (npr. Klizanje za kože klizača).
tags: ["player"]
---

## Deskripcija

Koristi standardnu ​​animaciju hodanja igrača (animacija CJ kože) umjesto prilagođenih animacija za svaku kožu (npr. Klizanje za kože klizača).

## Primjeri

```c
public OnGameModeInit()
{
    UsePlayerPedAnims();
    return 1;
}
```

## Zabilješke

:::tip

Radi samo kada se postavi pod [OnGameModeInit](../callbacks/OnGameModeInit).

Neupotreba ove funkcije dovodi do toga da se dvoručno oružje (ne dvostruko - jedno oružje koje drže obje ruke) drži u samo jednoj ruci.

:::

:::tip

You can also enable standard player walking animation via [config.json](../../server/config.json)

```json
"use_player_ped_anims": true,
```

:::

## Srodne Funkcije

- [ApplyAnimation](ApplyAnimation): Primijeni animaciju na igrača.
- [ClearAnimations](ClearAnimations): Očisti svaku animaciju koju igrač izvodi.
