---
title: SetVehicleNumberPlate
sidebar_label: SetVehicleNumberPlate
description: Set plat nomor kendaraan.
tags: ["vehicle"]
---

## Deskripsi

Set plat nomor kendaraan.

| Nama        | Deskripsi                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | ID kendaraan yang ingin di ubah plat nomornya      |
| numberplate | Teks yang harus ditampilkan pada plat nomor. |

## Returns

1: Fungsi berhasil dijalankan.

0: Fungsi gagal dijalankan. Ini berarti kendaraan tidak ada.

## Contoh

```c
new
	vehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);
SetVehicleNumberPlate(vehicleid, "ABCD 123");
```

## Catatan

:::tip

Fungsi ini tidak memiliki pemeriksaan kesalahan internal. Jangan menetapkan plat nomor khusus untuk kendaraan tanpa plat (kapal, pesawat, dll) karena ini akan menghasilkan beberapa waktu pemrosesan yang tidak perlu pada client. Kendaraan harus spawn kembali atau stream ulang agar perubahan berlaku. Ada batas 32 karakter pada setiap plat nomor (termasuk warna tertanam). Panjang teks yang dapat dilihat pada plat nomor adalah sekitar 9 hingga 10 karakter, lebih banyak karakter akan menyebabkan teks terpotong. Beberapa model kendaraan memiliki plat nomor mundur, misalnya Boxville (498) (sebagai alternatif untuk kendaraan ini Anda dapat menggunakan model kendaraan ID 609, yang merupakan Boxville duplikat (alias Boxburg), tetapi dengan plat nomor biasa).

:::

:::tip

kamu dapat memberikan warna pada plat nomor.

:::

## Fungsi terkait

- [SetVehicleToRespawn](SetVehicleToRespawn): Respawn kendaraan.
- [ChangeVehicleColor](ChangeVehicleColor): Set warna pada kendaraan.
- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Merubah paintjob pada kendaraan.
