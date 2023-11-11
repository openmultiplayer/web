---
title: OnNPCConnect
description: Ovaj callback je pozvan kada se NPC konektovao na server.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Ovaj callback je pozvan kada se NPC uspješno konektovao na server.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| myplayerid   | playerid koji je dodijeljen NPC-u.                 |

## Examples

```c
public OnNPCConnect(myplayerid)
{
    printf("Uspješno sam se konektovao na server sa ID-em %i!", myplayerid);
}
```

## Related Callbacks

Slijedeći callbackovi mogu biti korisni, zato što su povezani sa ovim callbackom na neki način.

- [OnNPCDisconnect](OnNPCDisconnect): Ovaj callback je pozvan kada se NPC diskonektuje sa servera.
- [OnPlayerConnect](OnPlayerConnect): Ovaj callback je pozvan kada se igrač konektovao na server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Ovaj callback je pozvan kada se igrač diskonektuje sa servera.
