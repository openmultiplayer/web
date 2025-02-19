---
title: GetVehicleComponentType
sidebar_label: GetVehicleComponentType
description: Find out what type of component a certain ID is.
tags: ["vehicle"]
---

## คำอธิบาย

Find out what type of component a certain ID is.

| Name      | Description                |
| --------- | -------------------------- |
| component | The component ID to check. |

## ส่งคืน

The component slot ID of the specified component or -1 if the component is invalid.

## ตัวอย่าง

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new componentType = GetVehicleComponentType(componentid);

    if (componentType != -1)
    {
        new clientMessage[41];

        format(clientMessage, sizeof(clientMessage), "You have modified your vehicle on slot %i", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "The component is invalid.");
    }

    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- AddVehicleComponent: Add a component to a vehicle.
- RemoveVehicleComponent: Remove a component from a vehicle.
- GetVehicleComponentInSlot: Check what components a vehicle has.
- OnVehicleMod: Called when a vehicle is modded.
- OnEnterExitModShop: Called when a vehicle enters or exits a mod shop.
