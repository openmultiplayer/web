---
id: damagestatus
title: Status Kerusakan
description: Informasi tentang status kerusakan pada kendaraan dan contoh kodenya.
---

:::note

ID ini untuk digunakan dengan [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) dan [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

Kerusakan kendaraan disimpan dalam 4 nilai: **Panel**, **Pintu**, **Lampu**, dan **Ban**. Setiap nilai disimpan dalam bentuk bit dari keadaan semua panel, pintu, lampu, dan ban. Artinya, Anda memerlukan operator bitwise untuk mengoperasikannya (setiap waktu).

Sebagai contohnya, status ban menyimpan 4 bit untuk 4 ban. Nilainya bernilai 1 jika bannya pecah (kempes), dan 0 jika bannya tidak pecah (kempes). Jadi, sebagai contohnya, arti nilai dari `1010` adalah kedua ban depan pecah (kempes), sedangkan kedua ban belakangnya tidak pecah (kempes).

:::note

Untuk informasi selebihnya mengenai keadaan panel, lihat [Keadaan Panel](../resources/panelstates).  
Untuk informasi selebihnya mengenai keadaan pintu, lihat [Keadaan Pintu](../resources/doorstates).  
Untuk informasi selebihnya mengenai keadaan lampu, lihat [Keadaan Lampu](../resources/lightstates).  
Untuk informasi selebihnya mengenai keadaan ban, lihat [Keadaan Ban](../resources/tirestates).

:::

Untuk membuatnya jadi lebih mudah, ada beberapa fungsi untuk _encode_ dan _decode_ di bawah ini.

```c
// Panel
decode_panels(panels, &front_left_panel, &front_right_panel, &rear_left_panel, &rear_right_panel, &windshield, &front_bumper, &rear_bumper)
{
    front_left_panel = panels & 15;
    front_right_panel = panels >> 4 & 15;
    rear_left_panel = panels >> 8 & 15;
    rear_right_panel = panels >> 12 & 15;
    windshield = panels >> 16 & 15;
    front_bumper = panels >> 20 & 15;
    rear_bumper = panels >> 24 & 15;
}

encode_panels(front_left_panel, front_right_panel, rear_left_panel, rear_right_panel, windshield, front_bumper, rear_bumper)
{
    return front_left_panel | (front_right_panel << 4) | (rear_left_panel << 8) | (rear_right_panel << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);
}

// Pintu
decode_doors(doors, &bonnet, &boot, &driver_door, &passenger_door)
{
    bonnet = doors & 7;
    boot = doors >> 8 & 7;
    driver_door = doors >> 16 & 7;
    passenger_door = doors >> 24 & 7;
}

encode_doors(bonnet, boot, driver_door, passenger_door)
{
    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);
}

// Lampu
decode_lights(lights, &front_left_light, &front_right_light, &back_lights)
{
    front_left_light = lights & 1;
    front_right_light = lights >> 2 & 1;
    back_lights = lights >> 6 & 1;
}

encode_lights(front_left_light, front_right_light, back_lights)
{
    return front_left_light | (front_right_light << 2) | (back_lights << 6);
}

// Ban
decode_tires(tires, &rear_right_tire, &front_right_tire, &rear_left_tire, &front_left_tire)
{
    rear_right_tire = tires & 1;
    front_right_tire = tires >> 1 & 1;
    rear_left_tire = tires >> 2 & 1;
    front_left_tire = tires >> 3 & 1;
}

encode_tires(rear_right_tire, front_right_tire, rear_left_tire, front_left_tire)
{
    return rear_right_tire | (front_right_tire << 1) | (rear_left_tire << 2) | (front_left_tire << 3);
}
```
