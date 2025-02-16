---
title: OnNPCEnterVehicle
description: Ова повратна функција се позива када NPC уђе у возило.
tags: ["npc"]
---

## Опис

Ова повратна функција се позива када NPC уђе у возило.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| vehicleid    | ID возила у које је NPC ушао.                           |
| seatid       | ID седишта које NPC користи.                            |

## Примери

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [OnNPCExitVehicle](OnNPCExitVehicle): Ова повратна функција се позива када NPC напусти возило.
