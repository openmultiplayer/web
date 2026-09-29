---
title: OnGameModeInit
sidebar_label: OnGameModeInit
description: Cette callback est appelée quand le gamemode démarre.
tags: [gamemode, démarré, loaded, started, chargé]
---

## Paramètres

Cette callback est appelée quand le gamemode démarre.

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

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
