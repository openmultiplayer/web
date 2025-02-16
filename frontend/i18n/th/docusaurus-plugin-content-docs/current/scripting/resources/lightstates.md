---
title: Light States
---

To be used with [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus) and [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus).

The lights on vehicles with 2 wheels (and thus 2 lights) can not be changed. The two back lights of a vehicle can not be changed separately.

Here is a visual representation of the light states. Vehicle viewed from a top-down perspective, the top is the front of the vehicle.

**o = enabled light**

**x = disabled light**

0: (0000 0000)

```c
    o-o
    | |
    o-o
```

1: (0000 0001)

```c
    x-o
    | |
    o-o
```

4: (0000 0100)

```c
    o-x
    | |
    o-o
```

5: (0000 0101)

```c
    x-x
    | |
    o-o
```

64: (0100 0000)

```c
    o-o
    | |
    x-x
```

65: (0100 0001)

```c
    x-o
    | |
    x-x
```

68: (0100 0100)

```c
    o-x
    | |
    x-x
```

69: (0100 0101)

```c
    x-x
    | |
    x-x
```

Other values not listed here can change the lights, but they are just repeats of other values. For example 15 has the same outcome as 5. After 255 the values will wrap around, 256 will be set as 0, 257 as 1 and so on.

**Example Usage:** To disable the back two lights of a vehicle while keeping the front the same state:

```c
new Panels, Doors, Lights, Tires;
GetVehicleDamageStatus(vehicleid, Panels, Doors, Lights, Tires);
UpdateVehicleDamageStatus(vehicleid, Panels, Doors, (Lights | 0b01000000), Tires); //The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.
```
