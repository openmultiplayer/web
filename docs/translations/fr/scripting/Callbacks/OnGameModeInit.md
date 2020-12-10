---
title: OnGameModeInit
description: Cette callback est appelée quand le gamemode démarre.
tags: [gamemode, démarré, loaded, started, chargé]
---

## Paramètres

Cette callback est appelée quand le gamemode démarre.

## Exemple

```c
public OnGameModeInit()
{
    print("Gamemode démarré !");
    return 1;
}
```

## Astuce

:::tip

Cette fonction peut aussi être utilisée dans un filterscript pour détecter si le gamemode a changé avec des commandes RCON comme changemode ou gmx, puisque changer de gamemode ne recharge pas les filterscripts.

:::

## Callback connexe

- [OnGameModeExit](OnGameModeExit) : callback appelée quand le gamemode s'éteint
