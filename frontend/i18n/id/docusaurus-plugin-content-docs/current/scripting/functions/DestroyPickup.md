---
title: DestroyObject
description: Menghancurkan (menghapus) objek yang sudah di buat dengan CreateObject.
tags: []
---

## Deskripsi

Menghancurkan (menghapus) objek yang sudah di buat dengan CreateObject.

| Nama     | Deskripsi                                                  |
| -------- | ---------------------------------------------------------- |
| objectid | ID dari objek yang akan di hancurkan.                      |

## Returns

Fungsi ini tidak mengembalikan nilai spesifik apapun.

## Contoh

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## Fungsi Terkait 

- [CreateObject](CreateObject): Membuat Objek.
- [IsValidObject](IsValidObject): Mengecek apakah objek tertentu valid.
- [MoveObject](MoveObject): Memindahkan objek.
- [StopObject](StopObject): Menghentikan suatu objek agar tidak bergerak.
- [SetObjectPos](SetObjectPos): Mengatur posisi objek.
- [SetObjectRot](SetObjectRot): Mengatur rotasi objek.
- [GetObjectPos](GetObjectPos): Mencari lokasi objek.
- [GetObjectRot](GetObjectRot): Mengecek rotasi dari objek.
- [AttachObjectToPlayer](AttachObjectToPlayer): Menempelkan objek ke pemain.
- [CreatePlayerObject](CreatePlayerObject): Membuat satu objek hanya untuk satu pemain.
- [DestroyPlayerObject](DestroyPlayerObject): Menghancurkan objek pemain.
- [IsValidPlayerObject](IsValidPlayerObject): Mengecek apakah objek pemain tersebut valid.
- [MovePlayerObject](MovePlayerObject): Memindahkan objek pemain.
- [StopPlayerObject](StopPlayerObject): Memberhentikan objek pemain.
- [SetPlayerObjectPos](SetPlayerObjectPos): Mengatur posisi objek pemain.
- [SetPlayerObjectRot](SetPlayerObjectRot): Mengatur rotasi objek pemain.
- [GetPlayerObjectPos](GetPlayerObjectPos): Mencari lokasi objek pemain
- [GetPlayerObjectRot](GetPlayerObjectRot): Mengecek rotasi objek pemain.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Menempelkan objek pemain ke pemain.