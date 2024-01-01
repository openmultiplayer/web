---
title: CreatePickup
description: Ova funkcija radi isto sto i AddStaticPickup, osim sto vraca ID pickup-a koji mozemo da pratimo pod OnPlayerPickUpPickup ili da ga unistimo.
tags: []
---

## Opis

Ova funkcija radi isto sto i AddStaticPickup, osim sto vraca ID pickup-a koji mozemo da pratimo pod OnPlayerPickUpPickup ili da ga unistimo.

| Ime          | Opis                                                                            |
| ------------ | ------------------------------------------------------------------------------- |
| model        | [Model](../resources/pickupids) pickup-a                                        |
| type         | Spawn [tip](../resources/pickuptypes) pickup-a                                  |
| Float:X      | X koordinata gde se pickup kreira                                               |
| Float:Y      | Y koordinata gde se pickup kreira                                               |
| Float:Z      | Z koordinata gde se pickup kreira                                               |
| virtualworld | Virtuelni svet pickup-a. Koristite -1 da bi se pickup pokazao u svim svetovima. |

## Vraca

ID kreiranog pickup-a, ili -1 ako ne uspe da ga kreira (pickup max limit).

## Primeri

```c
new pickup; // Kreiramo varijablu gde cemo drzati ID pickup-a

public OnGameModeInit()
{
    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Kreiramo pickup za armor i sacuvamo ID pickup-a u varijablu pickup
    return 1;
}

// Kasnije..
DestroyPickup(pickup); // Primer koriscenja ID-a pickup-a ( unistavamo pickup )
pickup = 0; // pickup varijabla se mora resetovati da bi se izbeglo mesanje sa ostalim
```

## Beleske

:::tip

Jedini tip pickup-a koji moze da se pokupi iz unutrasnjosti vozila je 14 ( osim par specijalnih pickup-ova kao sto su bribes). Pickup-ovi su prikazani svima i mogu se pokupiti od strane svih igraca. Moguce je da, ako se DestroyPickup() koristi kada se pickup pokupio, vise od jednog igraca moze da pokupi pickup, zbog lag-a. Ovo moze da se izbegne koristeci varijable. Neki pickup-ovi dolaze sa 'automatskim odgovorom', na primer M4 model ce automatski dati igracu oruzije i malo municije. Za potpuno skriptovane pickup-ove, tip 1 bi trebalo da se koristi.

:::

:::warning

Poznati bagovi: Pickup-ovi koji imaju X ili Y manji od -4096.0 ili veci od 4096.0 se nece prikazati i nece izazvati OnPlayerPickUpPickup.

:::

## Srodne Funkcije

- [AddStaticPickup](AddStaticPickup): Doda statican pickup.
- [DestroyPickup](DestroyPickup): Unistava pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Poziva se kada igrac pokupi pickup.
