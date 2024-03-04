---
title: OnNPCEnterVehicle
description: Ce rappel est appelé lorsqu'un PNJ entre dans un véhicule.
tags: ["npc"]
---

## Description

Ce rappel est appelé lorsqu'un PNJ entre dans un véhicule.

| Nom          | Description                                             |
| ------------ | ------------------------------------------------------- |
| vehicleid    | L'ID du véhicule dans lequel le PNJ entre               |
| seatid       | L'ID de siège que le PNJ utilise                         |

## Exemples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Siège: %d", vehicleid, seatid);
    return 1;
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnNPCExitVehicle](OnNPCExitVehicle): Ce rappel est appelé lorsqu'un PNJ quitte un véhicule.
