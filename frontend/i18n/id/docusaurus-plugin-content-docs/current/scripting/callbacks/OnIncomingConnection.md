---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: Callback ini akan terpanggil ketika sebuah IP address mencoba untuk koneksi kedalam server.
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika sebuah IP address mencoba untuk koneksi kedalam server. Untuk memblokir koneksi yang ingin masuk, gunakan BlockIpAddress.

| Nama         | Deskripsi                                         |
| ------------ | ------------------------------------------------- |
| playerid     | ID dari pemain yang mencoba untuk koneksi         |
| ip_address[] | IP address dari pemain yang mencoba untuk koneksi |
| port         | Port dari pembuat koneksi                         |

## Returns

0 - Akan melarang filterscript lain untuk menerima callback ini.

1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Pemain ID %d mencoba untuk koneksikan kedalam server [IP/Port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Fungsi Terkait

- [BlockIpAddress](../functions/BlockIpAddress): Blokir sebuah IP Address untuk mengkoneksi kedalam server dalam waktu yang ditentukan.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Membuka Blokir sebuah IP Address yang sebelumnya di blokir.
