---
title: DestroyObject
description: Menghancurkan (menghapus) Object yang dibuat menggunakan CreateObject.
tags: []
---

## Deskripsi

Menghancurkan (menghapus) Object yang dibuat menggunakan CreateObject..

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| objectid | ID Object yang akan dihancurkan. Dikembalikan oleh CreateObject. |

## Returns

Function ini tidak mengembalikan nilai tertentu.

## Contoh

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## Fungsi Terkait

- [CreateObject](CreateObject): Membuat suatu Object.
- [IsValidObject](IsValidObject): Memeriksa apakah Object tertentu valid.
- [MoveObject](MoveObject): Memindahkan suatu Object.
- [StopObject](StopObject): Menghentikan suatu Object agar tidak bergerak.
- [SetObjectPos](SetObjectPos): Mengatur posisi suatu Object.
- [SetObjectRot](SetObjectRot): Mengatur rotasi suatu Object.
- [GetObjectPos](GetObjectPos): Mencari Object.
- [GetObjectRot](GetObjectRot): Memeriksa rotasi suatu Object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Menambahkan Object ke Player.
- [CreatePlayerObject](CreatePlayerObject): Membuat Object hanya untuk satu Player.
- [DestroyPlayerObject](DestroyPlayerObject): Menghapus suatu Object dari Player.
- [IsValidPlayerObject](IsValidPlayerObject): Memeriksa apakah Object Player tertentu valid.
- [MovePlayerObject](MovePlayerObject): Memindahkan Object Player.
- [StopPlayerObject](StopPlayerObject): Menghentikan Object Player agar tidak bergerak.
- [SetPlayerObjectPos](SetPlayerObjectPos): Mengatur posisi Object Player.
- [SetPlayerObjectRot](SetPlayerObjectRot): Mengatur rotasi Object Player.
- [GetPlayerObjectPos](GetPlayerObjectPos): Mencari Object Player.
- [GetPlayerObjectRot](GetPlayerObjectRot): Memeriksa rotasi Object Player.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Menambahkan Object pemain ke Player.
