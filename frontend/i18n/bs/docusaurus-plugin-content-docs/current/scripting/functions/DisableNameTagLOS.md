---
title: DisableNameTagLOS
sidebar_label: DisableNameTagLOS
description: Onemogućava provjeru linije naziva vidljivosti kako bi igrači mogli vidjeti oznake imena kroz objekte.
tags: []
---

## Deskripcija

DOnemogućava provjeru linije naziva vidljivosti kako bi igrači mogli vidjeti oznake imena kroz objekte.

## Primjeri

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## Zabilješke

:::warning

Ovo se ne može poništiti sve dok se server ne restartuje.

:::

## Srodne Funkcije

- [ShowNameTags](ShowNameTags): Postavi nametagove uključeno ili isključeno.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Prikaži ili sakrij nametag za određenog igrača.
