---
title: OnNPCConnect
description: Ovaj callback je pozvan kada se NPC konektovao na server.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Deskripcija

Ovaj callback je pozvan kada se NPC uspješno konektovao na server.

| Ime          | Deskripcija                                        |
| ------------ | -------------------------------------------------- |
| myplayerid   | playerid koji je dodijeljen NPC-u.                 |

## Primjeri

```c
public OnNPCConnect(myplayerid)
{
    printf("Uspješno sam se konektovao na server sa ID-em %i!", myplayerid);
}
```

## Srodne Funkcije

Slijedeći callbackovi mogu biti korisni, zato što su povezani sa ovim callback-om na neki način.

- [OnNPCDisconnect](OnNPCDisconnect): Ovaj callback je pozvan kada se NPC diskonektuje sa servera.
- [OnPlayerConnect](OnPlayerConnect): Ovaj callback je pozvan kada se igrač konektovao na server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ovaj callback je pozvan kada se igrač diskonektuje sa servera.
