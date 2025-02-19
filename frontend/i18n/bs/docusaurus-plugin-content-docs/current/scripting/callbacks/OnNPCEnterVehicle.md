---
title: OnNPCEnterVehicle
sidebar_label: OnNPCEnterVehicle
description: Ovaj callback je pozvan kada NPC uđe u vozilo.
tags: ["npc"]
---

## Deskripcija

Ovaj callback je pozvan kada NPC uđe u vozilo.

| Ime          | Deskripcija                                             |
| ------------ | ------------------------------------------------------- |
| vehicleid    | ID vozila u koje NPC ulazi.                             |
| seatid       | ID sjedišta na kojem NPC sjedi.                         |

## Primjeri

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Sjedište: %d", vehicleid, seatid);
    return 1;
}
```

## Srodne Funkcije

Slijedeći callbackovi mogu biti korisni, zato što su povezani sa ovim callback-om na neki način.

- [OnNPCExitVehicle](OnNPCExitVehicle): Ovaj callback je pozvan kada NPC izađe iz vozila.
