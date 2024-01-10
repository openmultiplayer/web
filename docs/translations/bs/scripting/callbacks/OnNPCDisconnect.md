---
title: OnNPCDisconnect
description: Ovaj callback je pozvan kada se NPC diskonektuje sa servera.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Deskripcija

Ovaj callback je pozvan kada se NPC diskonektuje sa servera.

| Ime          | Deskripcija                                             |
| ------------ | ------------------------------------------------------- |
| reason[]     | Razlog zašto se NPC diskonektovao sa servera.           |

## Primjeri

```c
public OnNPCDisconnect(reason[])
{
    printf("Diskonektan sa servera. %s", reason);
}
```

## Srodne Funkcije

Slijedeći callbackovi mogu biti korisni, zato što su povezani sa ovim callback-om na neki način.

- [OnNPCConnect](OnNPCConnect): Ovaj callback je pozvan kada se NPC uspješno konektovao na server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ovaj callback je pozvan kada se igrač diskonektuje sa servera.
- [OnPlayerConnect](OnPlayerConnect): Ovaj callback je pozvan kada se igrač konektovao na server.
