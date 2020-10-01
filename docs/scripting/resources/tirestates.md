---
title: Tire States
description: Information about byte size and its corresponding tire state bits.
---

:::note

To be used with [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus) and [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus).  
Even vehicles with more than 4 wheels (e.g. trucks) only have 4 tire states.

:::

Each tire has two states - popped and not popped. Binary Digits (bits) also have two states - 0 and 1. A technique called [bit masking](<http://en.wikipedia.org/wiki/Mask_(computing)>) is used to store more information in less memory. Bit 1 represents a popped tire, and bit 0 represents a tire that isn't popped. For example, `0101` - two tires are popped, two are not.

[Bitwise operators](https://webcache.googleusercontent.com/search?q=cache:LMkbueHJOgcJ:https://forum.sa-mp.com/showthread.php%3Ft%3D177523+&cd=1&hl=en&ct=clnk&gl=my) can be used to work with bit masking.

Here is a visual representation of the tire states. Vehicle viewed from a top-down perspective, the top is the front of the vehicle.

**o = inflated tire**

**x = popped tire**

## 4-Wheeled Vehicles

4 binary bits for 4-wheeled vehicles: (FL)(BL)(FR)(BR) (Front-Left, Back-Left, Front-Right and Back-Right)

0: (0000)

    o-o
    | |
    o-o

1: (0001)

    o-o
    | |
    o-x

2: (0010)

    o-x
    | |
    o-o

3: (0011)

    o-x
    | |
    o-x

4: (0100)

    o-o
    | |
    x-o

5: (0101)

    o-o
    | |
    x-x

6: (0110)

    o-x
    | |
    x-o

7: (0111)

    o-x
    | |
    x-x

8: (1000)

    x-o
    | |
    o-o

9: (1001)

    x-o
    | |
    o-x

10: (1010)

    x-x
    | |
    o-o

11: (1011)

    x-x
    | |
    o-x

12: (1100)

    x-o
    | |
    x-o

13: (1101)

    x-o
    | |
    x-x

14: (1110)

    x-x
    | |
    x-o

15: (1111)

    x-x
    | |
    x-x

After 15 the values are repeated, so 16 is 0, 17 is 1 and so on.

## 2-Wheeled Vehicles (Bikes)

Bike viewed from a top-down perspective, the top is the front of the bike.

2 binary bits for 2-wheeled vehicles: (F)(B) (Front and Back)

0: (00)

    o
    |
    o

1: (01)

    o
    |
    x

2: (10)

    x
    |
    o

3: (11)

    x
    |
    x

After 3 the values are repeated, so 4 is 0, 5 is 1 and so on.

## Example Usage

To pop the back two tires of a vehicle (with 4 wheels) while keeping the front the same state:

```c
new Panels, Doors, Lights, Tires;
GetVehicleDamageStatus(vehicleid, Panels, Doors, Lights, Tires);
UpdateVehicleDamageStatus(vehicleid, Panels, Doors, Lights, (Tires | 0b0101));
```
