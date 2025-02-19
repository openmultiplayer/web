---
title: OnNPCExitVehicle
sidebar_label: OnNPCExitVehicle
description: Ang callback na ito ay tinatawag kapag ang isang NPC ay umalis sa isang sasakyan.
tags: ["npc"]
---

## Description

Ang callback na ito ay tinatawag kapag ang isang NPC ay umalis sa isang sasakyan.

## Examples

```c
public OnNPCExitVehicle()
{
    print("The NPC left the vehicle");
    return 1;
}
```

## Related Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Ang callback na ito ay tinatawag kapag ang isang NPC ay sumakay sa isang sasakyan.