---
title: OnVehicleDeath
description: Acest callback este apelat atunci când un vehicul este distrus - fie prin explozie, fie prin scufundare în apă.
tags: ["vehicle"]
---

## Descriere

Acest callback este apelat atunci când un vehicul este distrus - fie prin explozie, fie prin scufundare în apă.

| Nume      | Descriere                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | ID-ul vehiculului care a fost distrus.                                                                                                                       |
| killerid  | ID-ul jucătorului care a raportat (sincronizat) distrugerea vehiculului (numele este înșelător). În general, șoferul sau un pasager (dacă există) sau cel mai apropiat jucător. |

## Returnări

It is always called first in filterscripts.

## Exemple

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Acest apel invers va fi apelat și atunci când un vehicul intră în apă, dar vehiculul poate fi salvat de la distrugere prin teleportare sau alungare (dacă este doar parțial scufundat). Reapelarea nu va fi apelată a doua oară, iar vehiculul poate dispărea când șoferul iese sau după o scurtă perioadă de timp.

:::

## Funcții similare

- [SetVehicleHealth](../functions/SetVehicleHealth): Setați starea de sănătate a unui vehicul.