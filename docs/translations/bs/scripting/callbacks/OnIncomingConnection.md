---
title: OnIncomingConnection
description: Ovaj callback se poziva kada IP adresa pokuša da se konektuje na server.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z R2-2 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback se poziva kada IP adresa pokuša da se konektuje na server. Da blokirate nadolazeće konekcije, koristite [BlockIpAddress](../functions/BlockIpAddress).

| Name         | Description                                    |
| ------------ | ---------------------------------------------- |
| playerid     | ID igrača koji pokušava da se konektuje        |
| ip_address[] | IP adresa igrača koji pokušava da se konektuje |
| port         | Port pokušane konekcije                        |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen do sljedeće filterskripte.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Nadolazeca konekcija od igraca ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Srodne Funkcije

- [BlockIpAddress](../functions/BlockIpAddress): Blokirajte IP adresu od konektovanja na server za postavljeno vrijeme.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Odblokirajte IP koji ste prethodno blokirali.
