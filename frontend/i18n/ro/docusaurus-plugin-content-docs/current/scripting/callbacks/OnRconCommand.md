---
title: OnRconCommand
description: Acest callback este apelat atunci când o comandă este trimisă prin consola serverului, RCON la distanță sau prin comanda „/rcon” din joc.
tags: []
---

## Descriere

Acest callback este apelat atunci când o comandă este trimisă prin consola serverului, RCON la distanță sau prin comanda „/rcon” din joc.

| Nume  | Descriere                                                                             |
| ----- | ------------------------------------------------------------------------------------- |
| cmd[] | Un șir care conține comanda care a fost introdusă, precum și orice parametri trecuți. |

## Returnări

It is always called first in filterscripts so returning 1 there blocks gamemode from seeing it.

## Exemple

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: ați tastat „/rcon %s”!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Salut Lume!");
        print("Ai salutat lumea."); // Acesta va apărea jucătorului care a tastat comanda rcon în chat în alb
        return 1;
    }
    return 0;
}
```

## Note

:::tip

„/rcon” nu este inclus în „cmd” atunci când un jucător introduce o comandă. Dacă utilizați funcția „printare” aici, aceasta va trimite un mesaj jucătorului care a tastat comanda în joc, precum și jurnalul. Acest apel invers nu este apelat atunci când jucătorul nu este conectat ca administrator RCON. Când jucătorul nu este conectat ca administrator RCON și folosește /rcon login, acest apel invers nu va fi apelat și OnRconLoginAttempt este apelat în schimb. Cu toate acestea, atunci când jucătorul este conectat ca administrator RCON, utilizarea acestei comenzi va apela acest apel invers.

:::

:::warning

Va trebui să includeți acest apel invers într-un script de filtru încărcat pentru ca acesta să funcționeze în modul de joc!

:::

## Funcții similare

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Verifică dacă un jucător este conectat la RCON.
- [OnRconLoginAttempt](OnRconLoginAttempt): Apelat atunci când se încearcă autentificare la RCON.