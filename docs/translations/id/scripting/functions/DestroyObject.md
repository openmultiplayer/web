---
title: DestroyObject
description: Menghapus sebuah objek yang dibuat menggunakan CreateObject.
tags: []
---

## Deskripsi

Menghapus sebuah objek yang dibuat menggunakan CreateObject.

| Nama     | Deskripsi                                                      |
| -------- | ---------------------------------------------------------------- |
| objectid | ID dari Objek yang akan dihapus. Dikembalikan oleh CreateObject. |

## Pengembalian

Fungsi ini tidak mengembalikan nilai apapun.

## Contoh

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## Fungsi Terkait

- [CreateObject](CreateObject): Membuat suatu objek.
- [IsValidObject](IsValidObject): Memeriksa apakah Objek tertentu valid.
- [MoveObject](MoveObject): Memindahkan suatu Objek.
- [StopObject](StopObject): Menghentikan suatu Objek agar tidak bergerak.
- [SetObjectPos](SetObjectPos): Mengatur posisi suatu Objek.
- [SetObjectRot](SetObjectRot): Mengatur rotasi suatu Objek.
- [GetObjectPos](GetObjectPos): Memeriksa posisi suatu Objek.
- [GetObjectRot](GetObjectRot): Memeriksa rotasi suatu Objek.
- [AttachObjectToPlayer](AttachObjectToPlayer): Menempelkan Objek ke seorang pemain.
- [CreatePlayerObject](CreatePlayerObject): Membuat Objek hanya untuk satu Pemain.
- [DestroyPlayerObject](DestroyPlayerObject): Menghapus suatu Objek dari Pemain.
- [IsValidPlayerObject](IsValidPlayerObject): Memeriksa apakah Objek Pemain tertentu valid.
- [MovePlayerObject](MovePlayerObject): Memindahkan Objek Pemain.
- [StopPlayerObject](StopPlayerObject): Menghentikan Objek Pemain agar tidak bergerak.
- [SetPlayerObjectPos](SetPlayerObjectPos): Mengatur posisi Objek Pemain.
- [SetPlayerObjectRot](SetPlayerObjectRot): Mengatur rotasi Objek Pemain.
- [GetPlayerObjectPos](GetPlayerObjectPos): Memeriksa posisi Objek Pemain.
- [GetPlayerObjectRot](GetPlayerObjectRot): Memeriksa rotasi Objek Pemain.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Menempelkan Objek pemain ke Pemain lain.
): Memeriksa apakah Objek tertentu valid.
- [MoveObject](MoveObject): Memindahkan suatu Objek.
- [StopObject](StopObject): Menghentikan suatu Objek agar tidak bergerak.
- [SetObjectPos](SetObjectPos): Mengatur posisi suatu Objek.
- [SetObjectRot](SetObjectRot): Mengatur rotasi suatu Objek.
- [GetObjectPos](GetObjectPos): Memeriksa posisi suatu Objek.
- [GetObjectRot](GetObjectRot): Memeriksa rotasi suatu Objek.
- [AttachObjectToPlayer](AttachObjectToPlayer): Menempelkan Objek ke seorang pemain.
- [CreatePlayerObject](CreatePlayerObject): Membuat Objek hanya untuk satu Pemain.
- [DestroyPlayerObject](DestroyPlayerObject): Menghapus suatu Objek dari Pemain.
- [IsValidPlayerObject](IsValidPlayerObject): Memeriksa apakah Objek Pemain tertentu valid.
- [MovePlayerObject](MovePlayerObject): Memindahkan Objek Pemain.
- [StopPlayerObject](StopPlayerObject): Menghentikan Objek Pemain agar tidak bergerak.
- [SetPlayerObjectPos](SetPlayerObjectPos): Mengatur posisi Objek Pemain.
- [SetPlayerObjectRot](SetPlayerObjectRot): Mengatur rotasi Objek Pemain.
- [GetPlayerObjectPos](GetPlayerObjectPos): Memeriksa posisi Objek Pemain.
- [GetPlayerObjectRot](GetPlayerObjectRot): Memeriksa rotasi Objek Pemain.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Menempelkan Objek pemain ke Pemain lain.
