---
title: OnNPCEnterVehicle
description: Ang callback na ito ay tinatawag kapag ang isang NPC ay sumakay sa isang sasakyan.
tags: ["npc"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Ang callback na ito ay tinatawag kapag ang isang NPC ay sumakay sa isang sasakyan.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| vehicleid    | Ang vehicle id na sinakyan ng NPC                       |
| seatid       | Ang seatid na ginamit ng NPC                            |

## Examples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);
    return 1;
}
```

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnNPCExitVehicle](OnNPCExitVehicle): Ang callback na ito ay tinatawag kapag ang isang NPC ay umalis sa isang Sasakyan.