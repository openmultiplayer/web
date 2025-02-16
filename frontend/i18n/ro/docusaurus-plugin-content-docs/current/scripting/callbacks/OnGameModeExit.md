---
title: OnGameModeExit
description: Acest callback este apelat atunci când un mod de joc se termină, fie prin „gmx”, serverul fiind oprit, fie GameModeExit.
tags: []
---

## Descriere

Acest callback este apelat atunci când un mod de joc se termină, fie prin „gmx”, serverul fiind oprit, fie GameModeExit.

## Exemple

```c
public OnGameModeExit()
{
    print("Modul de joc s-a încheiat.");
    return 1;
}
```

## Note

:::tip

Această funcție poate fi, de asemenea, utilizată într-un filterscript pentru a detecta dacă modul de joc se schimbă cu comenzi RCON precum changemode sau gmx, deoarece schimbarea modului de joc nu reîncarcă un filterscript. Când utilizați OnGameModeExit împreună cu comanda consolei „rcon gmx”, rețineți că există potențialul de apariție a erorilor clientului, un exemplu în acest sens este apelurile excesive la RemoveBuildingForPlayer în timpul OnGameModeInit, care ar putea duce la o blocare a clientului. Acest callback NU va fi apelat dacă serverul se blochează sau procesul este oprit prin alte mijloace, cum ar fi utilizarea comenzii Linux kill sau apăsarea butonului de închidere de pe consola Windows.

:::


## Funcții similare

- [GameModeExit](../functions/GameModeExit): Ieși din modul de joc curent.

## Callback-uri similare

- [OnGameModeInit](OnGameModeInit): Apelat când pornește un mod de joc.
- [OnFilterScriptInit](OnFilterScriptInit): Apelat când este încărcat un filterscript.
- [OnFilterSciptExit](OnFilterScriptExit): Apelat când un filterscript este descărcat.