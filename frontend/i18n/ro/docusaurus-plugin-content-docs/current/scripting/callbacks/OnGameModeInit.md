---
title: OnGameModeInit
description: Acest callback este apelat atunci când gamemode-ul a pornit.
tags: []
---

## Descriere

Acest callback este apelat atunci când gamemode-ul a pornit.

## Returnări

Acest callback nu se ocupă de returnări.

Este întotdeauna numit primul în modul de joc.

## Exemple

```c
public OnGameModeInit()
{
    print("Gamemode pornit!");
    return 1;
}
```

## Note

:::tip

Această funcție poate fi utilizată și într-un filterscript pentru a detecta dacă gamemode-ul se modifică cu comenzi RCON precum changemode sau gmx, deoarece schimbarea de gamemode nu reîncarcă filterscript-ul.

:::

## Callback-uri similare

- [OnFilterScriptInit](OnFilterScriptInit): Apelat când este încărcat un filterscript.
- [OnFilterScriptExit](OnFilterScriptExit): Apelat când un filterscript este descărcat.
