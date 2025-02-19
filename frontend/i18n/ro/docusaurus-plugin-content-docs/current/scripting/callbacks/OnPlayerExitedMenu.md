---
title: OnPlayerExitedMenu
sidebar_label: OnPlayerExitedMenu
description: Apelat când un jucător iese dintr-un meniu.
tags: ["player", "menu"]
---

## Descriere

Apelat când un jucător iese dintr-un meniu.

| Nume     | Descriere                                 |
| -------- | ----------------------------------------- |
| playerid | ID-ul jucătorului care a ieșit din meniu  |

## Returns

Este întotdeauna numit primul în modul de joc.

## Exemple

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // dezgheață playerul când iese dintr-un meniu
    return 1;
}
```

## Funcții similare

- [CreateMenu](../functions/CreateMenu): Creați un meniu.
- [DestroyMenu](../functions/DestroyMenu): Distrugeți un meniu.