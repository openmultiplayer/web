---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: Callback ini akan terpanggil ketika pemain memasukkan perintah kedalam chat window klien.
tags: ["player"]
---

## Deskripsi

Callback ini akan terpanggil ketika pemain memasukkan perintah kedalam chat window klien. Perintah adalah apapun yang dimulai dengan garis miring, misalnya /help.

| Nama      | Deskripsi                                                |
| --------- | -------------------------------------------------------- |
| playerid  | ID dari pemain yang memasukkan perintah.                 |
| cmdtext[] | Perintah yang dimasukkan (termasuk dengan garis miring). |

## Returns

Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya.

## Contoh

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Ini adalah perintah /help");
        return 1;
        // Mengembalikan nilai 1 akan memberitahukan kepada server bahwa perintah berhasil diproses.
        // OnPlayerCommandText tidak akan dipanggil lagi di skrip lain.
    }
    return 0;
    // Mengembalikan nilai 0 akan memberitahukan kepada server bahwa perintah belum diproses oleh skrip ini.
    // OnPlayerCommandText akan terpanggil di skrip lain sampai salah satunya mengembalikan nilai 1.
    // Jika tidak ada skrip yang mengembalikan nilai 1, pesan 'SERVER: Unknown Command' akan muncuk kepada player.
}
```

## Catatan

:::tip

Callback ini akan terpanggil juga oleh NPC.

:::

## Related Functions

- [SendRconCommand](../functions/SendRconCommand.md): Mengirimkan perintah RCON melalui skrip.
