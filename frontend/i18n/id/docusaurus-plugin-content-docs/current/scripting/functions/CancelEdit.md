---
title: CancelEdit
sidebar_label: CancelEdit
description: Membatalkan mode mengedit objek untuk pemain.
tags: []
---

## Deskripsi

Membatalkan mode mengedit objek untuk pemain.

| Nama     | Deskripsi                              |
| -------- | ------------------------------------------ |
| playerid | ID pemain untuk membatalkan edit.      |

## Returns

Fungsi ini tidak mengembalikan nilai spesifik apapun.

## Contoh

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Anda telah selesai mengedit objek!");
        return 1;
    }
    return 0;
}
```

## Fungsi Terkait

- [SelectObject](SelectObject): Untuk memilih objek.
- [EditObject](EditObject): Untuk mengedit objek.
- [EditPlayerObject](EditPlayerObject): Untuk mengedit objek
- [EditAttachedObject](EditAttachedObject): Untuk menempelkan objek.
- [CreateObject](CreateObject): Untuk membuat object.
- [DestroyObject](DestroyObject): Untuk menghapus objek.
- [MoveObject](MoveObject): Untuk memindahkan objek.
