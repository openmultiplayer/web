---
title: AddCharModel
sidebar_label: AddCharModel
description: Menambah sebuah custom character model untuk didownload.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Deskripsi

Menambah sebuah custom character model untuk didownload. Model file biasanya terletak di Player Documents\GTA San Andreas User Files\SAMP\cache didalam folder Server IP dan Port dalam bentuk nama CRC.

| Nama    | Deskripsi                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| baseid  | Model ID skin dasar yang ingin digunakan (sifat dari karakter & original karakter untuk dipakai setelah download gagal). |
| newid   | Model ID skin baru dari jangkauan 20000 sampai 30000 (10000 slot) untuk digunakan nanti bersamaan dengan SetPlayerSkin             |
| dffname | Nama file model collision file .dff didalam folder models server secara default (setting artpath).            |
| txdname | Nama file model texture file .txd didalam folder models server secara default (setting artpath).              |

## Returns

1: Function berhasil dijalankan.

0: Function gagal dijalankan.

## Contoh

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## Catatan

:::tip

useartwork harus diaktifkan terlebih dahulu di server settings agar fungsi ini berfungsi.

:::

:::warning

Saat ini tidak ada batasan kapan Anda dapat memanggil fungsi ini, tetapi perhatikan bahwa jika Anda tidak memanggilnya di dalam OnFilterScriptInit/OnGameModeInit, anda bisa membuat player lain beresiko, dimana sudah didalam server, tidak bisa mendownload models.

:::

## Fungsi Terkait

- [SetPlayerSkin](SetPlayerSkin): Mengatur skin player.
