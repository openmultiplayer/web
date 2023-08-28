---
title: EditObject
description: Memungkinkan seorang pemain untuk mengatur suatu objek (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Deskripsi

Memungkinkan seorang pemain untuk mengatur suatu objek (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).
| Name     | Description                         |
| -------- | ----------------------------------- |
| playerid | ID dari seorang pemain yang mengatur objek tersebut.     |
| objectid | ID dari sebuah objek yang sedang diatur oleh pemain. |

## Returns

1: Fungsi berhasil dijalankan. Keberhasilan akan ditentukan ketika objek yang tidak ada ditentukan, tetapi tidak akan ada yang terjadi.

0: Fungsi gagal dijalankan. Karena pemain tidak terhubung.

## Contoh

```c
new object;
public OnGameModeInit()
{
    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        EditObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Saat ini kamu bisa mengatur objek!");
        return 1;
    }
    return 0;
}
```

## Catatan

:::tip

Anda dapat menggerakkan kamera saat mengatur dengan menekan dan menahan tombol spasi (atau W di kendaraan) dan menggerakkan mouse Anda.
:::

## Fungsi Terkait

- [CreateObject](CreateObject): Membuat suatu objek.
- [DestroyObject](DestroyObject): Menghapus suatu objek.
- [MoveObject](MoveObject): Memindahkan suatu objek.
- [EditPlayerObject](EditPlayerObject): Mengatur suatu objek pemain.
- [EditAttachedObject](EditAttachedObject): Mengatur suatu objek yang menempel.
- [SelectObject](SelectObject): Memilih suatu index objek.
- [CancelEdit](CancelEdit): Membatalkan mode pengaturan dari suatu objek.
