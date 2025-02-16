---
titlu: OnGameModeInit
descriere: Acest callback este apelat atunci când gamemode-ul a pornit.
tags: []
---

## Descriere

Acest callback este apelat atunci când gamemode-ul a pornit.

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

## Funcții relatate
