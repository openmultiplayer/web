---
title: OnClientMessage
description: Callback ini akan terpanggil ketika NPC melihat sebuah ClientMessage.
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika NPC melihat sebuah ClientMessage. Ini akan terjadi setiap fungsi SendClientMessageToAll digunakan dan setiap fungsi SendClientMessage di kirimkan kepada NPC. Callback ini tidak akan terpanggil ketika seseorang berkata sesuatu. Untuk versi seperti ini dengan player text, lihat NPC:OnPlayerText.

| Nama   | Deskripsi                  |
| ------ | -------------------------- |
| color  | Warna dari pesan tersebut. |
| text[] | Pesan yang sebenarnya.     |

## Returns

Callback ini tidak mengelola pengembalian nilai.

## Contoh

```c
public OnClientMessage(color, text[])
{
    if(strfind(text,"Saldo Bank: $0") != -1) SendChat("Aku kok miskin? :(");
}
```

## Fungsi Terkait
