---
title: OnNPCEnterVehicle
sidebar_label: OnNPCEnterVehicle
description: Deze callback wordt aangeroepen wanneer een NPC een voertuig instapt.
tags: ["npc"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een NPC een voertuig instapt.

| Naam      | Beschrijving                   |
| --------- | ----------------------------- |
| vehicleid | Het vehicle ID waar de NPC instapt |
| seatid    | De seatid die de NPC gebruikt  |

## Voorbeelden

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);
    return 1;
}
```

## Gerelateerde Callbacks

- [OnNPCExitVehicle](OnNPCExitVehicle): Deze callback wordt aangeroepen wanneer een NPC een voertuig verlaat.


