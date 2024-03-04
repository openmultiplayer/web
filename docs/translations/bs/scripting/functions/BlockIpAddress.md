---
title: BlockIpAddress
description: Blokira IP adresu iz daljnje komunikacije sa serverom na određeno vrijeme (uz dopuštene zamjenske znakove).
tags: ["ip address"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z R2-2 i ne radi u nižim verzijama!

:::

## Deskripcija

Blokira IP adresu iz daljnje komunikacije sa serverom na određeno vrijeme (uz dopuštene zamjenske znakove). Igrači koji se pokušaju povezati na server s blokiranom IP adresom primit će generičku "You are banned from this server." poruku. Igrači koji su na mreži na navedenoj IP adresi,prije nego što će blokada isteći nakon nekoliko sekundi,nakon ponovnog povezivanja,primit će istu poruku.

| Ime        | Deskripcija                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| ip_address | IP koji se blokira                                                                                         |
| timems     | Vrijeme (u milisekundama) za koje će veza biti blokirana. 0 se može koristiti za neodređeni blok           |

## Returns

Ova funkcija ne vraća nikakve posebne vrijednosti.

## Primjeri

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // ako su isporučili lošu lozinku
    {
        BlockIpAddress(ip, 60 * 1000); // blokira konekcije sa IP-a na jedan minut
    }
    return 1;
}
```

## Zabilješke

:::tip

Sa ovom funkcijom mogu se koristiti zamjenski znakovi, na primjer, blokiranjem IP-a '6.9 ._._' blokirat će se sve IP-ove gdje su prva dva okteta 6, odnosno 9. Bilo koji broj može biti umjesto zvjezdice.

:::

## Srodne Funkcije

- [UnBlockIpAddress](UnBlockIpAddress): Uklanja blokadu za IP adresu koja je prethodno bila blokirana.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Poziva se kada se igrač pokuša povezati na server.
