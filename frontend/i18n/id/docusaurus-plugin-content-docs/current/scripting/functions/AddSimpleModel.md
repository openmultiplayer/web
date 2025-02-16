---
title: AddSimpleModel
description: Menambahkan sebuah simpel objek model untuk diunggah.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Menambahkan model simpel kustom objek diunggah. Model file bawaanya terletak pada folder Documents\GTA San Andreas User Files\SAMP\cache milik player bernama IP dan PORT dalam bentuk nama CRC.

| Name         | Description                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| virtualworld | Virtual world ID untuk membuat model tersedia. Gunakan -1 untuk semua world.                                                |
| baseid       | Basis object model ID untuk digunakan (object original akan digunakan jika download gagal).                                 |
| newid        | Object model ID baru berkisar dari -1000 ke -30000 (29000 slots) digunakan nanti dengan CreateObject atau Create PlayerObject|
| dffname      | Nama dari .dff model file collision berlokasi di models server folder secara bawaan (artpath setting).                      |
| txdname      | Nama dari .txd model tekstur file berlokasi di models server secara bawaan (artpath setting.                                |

## Returns

1: Function berhasil dijalankan.

0: Function gagal dijalankan

## Examples

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Notes

:::tip

`useartwork` harus diaktifkan terlebih dahulu dalam pengaturan server agar dapat berfungsi ketika virtualworld diatur, model akan didownload setelah player memasuki world tertentu

:::

:::warning

Saat ini tidak ada batasan kapan Anda dapat memanggil fungsi ini, tetapi perhatikan bahwa jika Anda tidak memanggilnya di dalam OnFilterScriptInit/OnGameModeInit, Anda berisiko bahwa beberapa player, yang sudah ada di server, mungkin belum mendownload modelnya.

:::

## Related Functions

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Dipanggil jika player sudah mendownload custom models.
