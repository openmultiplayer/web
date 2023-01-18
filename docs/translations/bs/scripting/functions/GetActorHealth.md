---
title: GetActorHealth
description: Dobij health actora.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Deskripcija

Dobij health actora

| Ime           | Deskripcija                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| actorid       | ID actora od kojeg uzimate health.                                       |
| &Float:health | Float varijabla proslijeđena referencom u koju se pohranjuje health actora. |

## Returns

1 - uspješno

0 - neuspješno (tj. actor nije kreiran).

NAPOMENA: Health actora je pohranjen u navedenoj varijabli, a ne u returnanoj (povratnoj) vrijednosti.

## Primjeri

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor kao prodavač u Ammunation-u
    SetActorHealth(gMyActor, 100);

    new Float:actorHealth;
    GetActorHealth(gMyActor, actorHealth);
    printf("Actor ID %d ima %.2f health-a.", gMyActor, actorHealth);
    return 1;
}
```

## Srodne Funkcije

- [CreateActor](CreateActor): Kreiranje actora (statički NPC).
- [SetActorHealth](SetActorHealth): Postavite health actoru.
- [SetActorInvulnerable](SetActorInvulnerable): Postavite actora da je neranjiv.
- [IsActorInvulnerable](IsActorInvulnerable): Provjerite da li je actor neranjiv.
