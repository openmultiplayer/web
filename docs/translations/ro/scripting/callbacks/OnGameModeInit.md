---
id: OnGameModeInit
titlu: OnGameModeInit
descriere: Acest callback este declansat cand gamemode-ul porneste.
tags: []
---

## Descriere

Acest callback este declansat cand gamemode-ul porneste.

## Exemplu

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Note

:::sfat

Această function poate fi utilizată și într-un filterscript pentru a detecta dacă gamemode de joc se modifică cu comenzi RCON precum changemode sau gmx, deoarece schimbarea gamemode de joc nu reîncarcă un filterscript.

:::

## Related Functions
