---
title: GetActorHealth
description: Dobij helte/zdravlje aktora.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij helte/zdravlje aktora.

| Ime           | Deskripcija                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------ |
| actorid       | ID aktora za dobiti helte.                                                                       |
| &Float:health | Float varijabla, proslijeđena referencom, u kojoj će biti pohranjeni helti (zdravlje/HP) aktora. |

## Returns

1 - uspješno

1 - greška (i.e. aktor nije kreiran).

ZABILJEŠKA: Helti (zdravlje/HP) aktora je pohranjen u navedenoj varijabli, ne u return/vraćenoj vrijednosti.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor kao prodavač u Ammunation
    SetActorHealth(gMyActor, 100);

    new Float:actorHealth;
    GetActorHealth(gMyActor, actorHealth);
    printf("Aktor ID %d ima %.2f health-a.", gMyActor, actorHealth);
    return 1;
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiraj aktora (statičnog NPC-a).
- [SetActorHealth](SetActorHealth): Postavi zdravlje aktoru.
- [SetActorInvulnerable](SetActorInvulnerable): Postavi aktoru neranjivost.
- [IsActorInvulnerable](IsActorInvulnerable): Provjeri da li je aktor neranjiv.
