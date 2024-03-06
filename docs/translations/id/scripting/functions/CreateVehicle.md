---
title: CreateVehicle
description: Membuat kendaraan di dunia.
tags: ["vehicle"]
---

## Deskripsi

Membuat kendaraan di dunia. Dapat digunakan sebagai pengganti AddStaticVehicleEx kapan saja dalam skrip.

| Nama                                     | Deskripsi                                                                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tipe Kendaraan                              | Model dari Kendaraan                                                                                                                       |
| Float:X                                  | Kordinat x dari kendaraan                                                                                                                |
| Float:Y                                  | Kordinat y dari kendaraan                                                                                                                |
| Float:Z                                  | Kordinat z dari kendaraan                                                                                                                |
| Float:rotation                           | Sudut menghadap dari kendaraan                                                                                                                |
| [color1](../resources/vehiclecolorid) |ID warna primer kendaraan                                                                                                                            |
| [color2](../resources/vehiclecolorid) | ID warna sekunder                                                                                                                          |
| respawn_delay                            | Penundaan hingga mobil respawn tanpa pengemudi dalam hitungan detik. Menggunakan -1 akan mencegah kendaraan dari respawning.                             |
| bool:addsiren                            | Ditambahkan di 0.3.7; Tidak akan berfungsi di versi sebelumnya. Memiliki nilai bawaan 'false'. Memungkinkan kendaraan memiliki sirine, asalkan kendaraan memiliki klakson. |

## Returns

ID kendaraan dari kendaraan yang dibuat (1 hingga MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) jika kendaraan tidak dibuat (batas kendaraan terlewati atau ID model kendaraan tidak valid).

0 jika kendaraan tidak dibuat (IDs 538 or 537 berhasil, yaitu kereta api).

## Contoh

```c
public OnGameModeInit()
{
    // Menambahkan Hydra (520) ke game dengan waktu respon 60 detik
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## Catatan

:::peringatan

Kereta api hanya bisa ditambahkan dengan AddStaticVehicle dan AddStaticVehicleEx.

:::

## Fungsi Terkait

- [DestroyVehicle](DestroyVehicle): Menghancurkan kendaraan.
- [AddStaticVehicle](AddStaticVehicle): Menambahkan kendaraan statis.
- [AddStaticVehicleEx](AddStaticVehicleEx): Menambahkan kendaraan statis dengan custom waktu respawn.
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): Mengecek apakah sirine kendaraan hidup atau mati.
- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): Memanggil ketika kendaraan respawn.
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): Memanggil ketika sirine kendaraan beralih hidup/mati.