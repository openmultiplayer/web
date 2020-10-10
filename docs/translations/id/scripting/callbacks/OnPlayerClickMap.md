---
id: OnPlayerClickMap
title: OnPlayerClickMap
description: OnPlayerClickMap akan terpanggil ketika player menaruh target/waypoint saat jeda map menu (dengan cara klik kanan).
tags: ["player"]
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3d dan tidak akan bekerja pada versi sebelumnya!

:::

## Deskripsi

OnPlayerClickMap akan terpanggil ketika player menaruh target/waypoint saat jeda map menu (dengan cara klik kanan).

| Nama     | Deskripsi                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| playerid | ID dari player yang menaruh target/waypoint                            |
| Float:fX | Koordinasi float X dimana player mengklik                               |
| Float:fY | Koordinasi float Y dimana player mengklik                               |
| Float:fZ | Koordinasi float Z dimana player mengklik (tidak akurat - lihat catatan dibawah) |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPostFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Catatan

:::tip

Nilai Z akan berubah menjadi 0 (invalid) jika sangat jauh dari player, gunakan MapAndreas plugin untuk mendapatkan koordinat Z yang akurat.

:::

## Fungsi Terkait
