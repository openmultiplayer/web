---
title: GetVehicleComponentInSlot
description: Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.
tags: ["vehicle"]
---

## คำอธิบาย

Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| vehicleid | The ID of the vehicle to check for the component. |
| slot      | The component slot to check for components.       |

## ส่งคืน

The ID of the component installed in the specified slot. Returns 0 if no component in specified vehicle's specified slot, or if vehicle doesn't exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/myspoiler", cmdtext) && IsPlayerInAnyVehicle(playerid))
    {
        new component;
        component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);
        if (component == 1049)
        {
            SendClientMessage(playerid,0xFFFFFFFF,"You have an Alien spoiler installed in your Elegy!");
        }
    }
}
```

## บันทึก

:::warning

Known Bug(s): Doesn't work for CARMODTYPE_STEREO. Both front bull bars and front bumper components are saved in the CARMODTYPE_FRONT_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last. Both rear bull bars and rear bumper components are saved in the CARMODTYPE_REAR_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last. Both left side skirt and right side skirt are saved in the CARMODTYPE_SIDESKIRT slot. If a vehicle has both of them installed, this function will only return the one which was installed last.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- AddVehicleComponent: Add a component to a vehicle.
- GetVehicleComponentType: Check the type of component via the ID.
- OnVehicleMod: Called when a vehicle is modded.
- OnEnterExitModShop: Called when a vehicle enters or exits a mod shop.
