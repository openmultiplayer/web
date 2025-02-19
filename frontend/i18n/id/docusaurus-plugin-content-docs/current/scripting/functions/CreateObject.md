---
title: CreateObject
sidebar_label: CreateObject
description: Membuat Object pada koordinat tertentu di dalam game.
tags: []
---

## Deskripsi

Membuat Object pada koordinat tertentu di dalam game.

| Name               | Description                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid            | Model Object yang ingin di buat.                                                                                                                                            |
| Float:X            | Cordinat X untuk membuat suatu Object.                                                                                                                                      |
| Float:Y            | Cordinat Y untuk membuat suatu Object.                                                                                                                                      |
| Float:Z            | Cordinat Z untuk membuat suatu Object.                                                                                                                                      |
| Float:rX           | Rotasi X untuk membuat suatu Object.                                                                                                                                        |
| Float:rY           | Rotasi Y untuk membuat suatu Object.                                                                                                                                        |
| Float:rZ           | Rotasi Z untuk membuat suatu Object.                                                                                                                                        |
| Float:DrawDistance | (optional) Jarak yang San Andreas untuk Object di. 0.0 akan menyebabkan objek dirender pada jarak defaultnya. |

## Contoh

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Object akan dirender pada jarak defaultnya.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Object akan dirender pada 300,0 unit.
    return 1;
}
```

## Catatan

:::tip

Ada batas 1000 Object (MAX_OBJECTS). Untuk menghindari batasan ini, Anda dapat menggunakan streamer.
:::

## Fungsi Terkait

- [DestroyObject](DestroyObject): Menghapus suatu Object.
- [IsValidObject](IsValidObject): Memeriksa apakah Object tertentu valid.
- [MoveObject](MoveObject): Memindahkan suatu Object.
- [StopObject](StopObject): Menghentikan suatu Object agar tidak bergerak.
- [SetObjectPos](SetObjectPos): Mengatur posisi suatu Object.
- [SetObjectRot](SetObjectRot): Mengatur rotasi suatu Object.
- [GetObjectPos](GetObjectPos): Mencari Object.
- [GetObjectRot](GetObjectRot): Memeriksa rotasi suatu Object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Menambahkan Object ke Player.
- [SetObjectMaterialText](SetObjectMaterialText): Mengganti tekstur Object dengan teks.
- [SetObjectMaterial](SetObjectMaterial): Mengganti tekstur suatu Object dengan tekstur dari model lain di dalam game.
- [CreatePlayerObject](CreatePlayerObject): Membuat Object hanya untuk satu pemain.
- [DestroyPlayerObject](DestroyPlayerObject): Menghapus suatu Object dari Player.
- [IsValidPlayerObject](IsValidPlayerObject): Memeriksa apakah Object Player tertentu valid.
- [MovePlayerObject](MovePlayerObject): Memindahkan Object Player.
- [StopPlayerObject](StopPlayerObject): Menghentikan Object Player agar tidak bergerak.
- [SetPlayerObjectPos](SetPlayerObjectPos): Mengatur posisi Object Player.
- [SetPlayerObjectRot](SetPlayerObjectRot): Mengatur rotasi Object Player.
- [GetPlayerObjectPos](GetPlayerObjectPos): Mencari Object Player.
- [GetPlayerObjectRot](GetPlayerObjectRot): Memeriksa rotasi Object Player.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Menambahkan Object pemain ke Player.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Replace tekstur Object Player dengan teks.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Mengganti tekstur Object Player dengan tekstur dari model lain dalam game.
