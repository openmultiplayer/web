---
title: EditObject
sidebar_label: EditObject
description: Memungkinkan Player untuk mengedit object (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).
tags: []
---

## Deskripsi

Memungkinkan Player untuk mengedit object (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).

| Name     | Description                         |
| -------- | ----------------------------------- |
| playerid | ID Player yang mengedit Object.     |
| objectid | ID Object yang di edit oleh Player. |

## Returns

1: Function berhasil dijalankan. Sukses akan di laporkan ketika Object tidak di tentukan, Tetapi tidak akan terjadi apa-apa.

0: Function gagal di jalankan. Karena pemain tidak terhubung.

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
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Sekarang anda bisa mengedit Object!");
        return 1;
    }
    return 0;
}
```

## Catatan

:::tip

Anda dapat menggerakkan kamera saat mengedit dengan menekan dan menahan spasi (atau W di kendaraan) dan menggerakkan mouse Anda.
:::

## Fungsi Terkait

- [CreateObject](CreateObject): Membuat suatu Object.
- [DestroyObject](DestroyObject): Menghapus suatu Object.
- [MoveObject](MoveObject): Memindahkan suatu Object.
- [EditPlayerObject](EditPlayerObject): Mengedit suatu Object.
- [EditAttachedObject](EditAttachedObject): Mengedit suatu Attached Object.
- [SelectObject](SelectObject): Memilih suatu Object.
- [CancelEdit](CancelEdit): Membatalkan mengedit suatu Object.
