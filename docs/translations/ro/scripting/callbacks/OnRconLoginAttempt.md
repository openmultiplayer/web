---
title: OnRconLoginAttempt
description: Acest callback este apelat atunci când cineva încearcă să se conecteze la RCON în joc; succes sau nu.
tags: []
---

## Descriere

Acest callback este apelat atunci când cineva încearcă să se conecteze la RCON în joc; succes sau nu.

| Nume       | Descriere                                                  |
| ---------- | ---------------------------------------------------------- |
| ip[]       | IP-ul jucătorului care a încercat să se conecteze la RCON. |
| password[] | Parola folosită pentru a vă autentifica.                   |
| success    | 0 dacă parola a fost incorectă sau 1 dacă a fost corectă.  |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //Dacă parola a fost incorectă
    {
        printf("CONECTARE RCON ESUATA PRIN IP %s FOLOSIND PAROLA %s",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //Buclă prin toți jucătorii
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //Dacă IP-ul unui jucător este IP-ul care a eșuat autentificarea
            {
                SendClientMessage(i, 0xFFFFFFFF, "Parola gresita. Pa!"); //Trimite un mesaj
                Kick(i); //Acum dati afara jucatorul.
            }
        }
    }
    return 1;
}
```

## Note

:::tip

Acest callback este apelat numai când autentificarea /rcon este folosită în joc. Acest callback este apelat numai atunci când jucătorul nu este încă conectat. Când jucătorul este conectat, este apelat OnRconCommand.

:::

## Funcții similare

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Verifică dacă un jucător este conectat la RCON.
- [SendRconCommand](../functions/SendRconCommand): Trimite o comandă RCON prin script.