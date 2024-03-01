---
title: UpdateVehicleDamageStatus
description: Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.
tags: ["vehicle"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the damage of.       |
| panels    | A set of bits containing the panel damage status. |
| doors     | A set of bits containing the door damage status.  |
| lights    | A set of bits containing the light damage status. |
| tires     | A set of bits containing the tire damage status.  |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

tires = VEHICLE_TIRE_STATUS:15; // Setting tires to 15 will pop them all

// Or do it like this:
tires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);

UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
```

## บันทึก

:::tip

For some useful functions for working with vehicle damage values, see here.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleHealth](SetVehicleHealth): Set the health of a vehicle.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
- [RepairVehicle](RepairVehicle): Fully repair a vehicle.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): Get the vehicle damage state for each part individually.

## Related Callbacks

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Called when a vehicle's damage state changes.

## Related Resources

- [Damage Status](../resources/damagestatus)
- [Vehicle Panel Status](../resources/vehicle-panel-status)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Vehicle Tire Status](../resources/vehicle-tire-status)
