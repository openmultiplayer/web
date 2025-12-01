---
title: OnRconLoginAttempt
sidebar_label: OnRconLoginAttempt
description: Ovaj callback je potvan kada neko pokuša da se uloguje/da pristupi RCONu in-game; uspješno ili ne.
tags: []
---

## Deskripcija

Ovaj callback je potvan kada neko pokuša da se uloguje/da pristupi RCONu in-game; uspješno ili ne.

| Ime        | Deskripcija                                          |
| ---------- | ---------------------------------------------------- |
| ip[]       | IP igrača koji se pokušao ulogovati/pristupi u RCON. |
| password[] | Lozinka kojim je pokušao pristupiti.                 |
| success    | 0 ako je lozinka netačna 1 je tačna.                 |

## Returns

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //Ako je lozinka netačna
    {
        printf("NESUPJESNA KONEKCIJA NA RCON, IP %s KORISTIO LOZINKU %s",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //Petlja kroz sve igrače
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //Ako je IP igrača isti kao i IP koji nije uspio pristupiti RCONu
            {
                SendClientMessage(i, 0xFFFFFFFF, "Pogresna lozinka. Cao!"); //Posalji poruku
                Kick(i); //Sada je kickovan.
            }
        }
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback je pozvan samo kada se /rcon login iskoristi unutar igra. Ovaj callback je pozvan samo kada igral nije još ulogovan (nije još pristupio) u RCON. Kada se igrač prijavi/uloguje u RCON, OnRconCommand se poziva umjesto toga.

:::

## Srodne Funkcije

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Provjerava da li je igrač pristupio/ulogovan u RCON.
- [SendRconCommand](../functions/SendRconCommand): Šalje RCON komandu preko skripte.
