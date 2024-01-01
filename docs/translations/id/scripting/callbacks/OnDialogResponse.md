---
title: OnDialogResponse
description: Callback ini akan terpanggil ketika pemain merespon kepada dialog yang muncul menggunakan ShowPlayerDialog entah itu dengan cara mengklik tombol, menekan ENTER/ESC atau mengklik dua kali list item (jika menggunakan list style dialog).
tags: []
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3a dan tidak akan bekerja pada versi sebelumnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika pemain merespon kepada dialog yang muncul menggunakan ShowPlayerDialog entah itu dengan cara mengklik tombol, menekan ENTER/ESC atau mengklik dua kali list item (jika menggunakan list style dialog).

| Nama        | Deskripsi                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID dari pemain yang merespon dialog.                                                                                                  |
| dialogid    | ID dari dialog yang pemain respond sebagaimana ditetapkan di ShowPlayerDialog.                                                        |
| response    | 1 Untuk tombol kiri dan 0 untuk tombol kanan (Jika hanya satu tombol yang ada, maka hanya 1)                                          |
| listitem    | ID dari list item yang dipilih oleh player (dimulai dari 0) (hanya ketika menggunakan list style dialog, sebaliknya akan menjadi -1). |
| inputtext[] | Sebuah text yang dimasukkan kedalam input box dari player atau text dari list item yang terpilih.                                     |

## Returns

Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya.

## Contoh

```c
// Define dialog ID agar nantinya kita bisa mengelola responses
#define DIALOG_RULES 1

// Di sebuah perintah
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- Gaboleh Curang\n- Gaboleh Spamming\n- Respect sesama admin\n\nApakah anda setuju dengan peraturan diatas?", "Ya", "Tidak");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_RULES)
    {
        if(response) // Jika mereka mengklik tombol 'Ya' atau menekan enter
        {
            SendClientMessage(playerid, COLOR_GREEN, "Terimakasih telah menyetujui persyaratannya!");
        }
        else // Menekan ESC atau mengklik tombol 'Tidak'
        {
            Kick(playerid);
        }
        return 1; // Kita berhasil mengelola dialog, jadi return 1. Sama seperti OnPlayerCommandText.
    }

    return 0; // Anda WAJIB return 0 disini! sama seperti OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// Di sebuah perintah
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Masukkan passwordnya say:", "Login", "Quit");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_LOGIN)
    {
        if(!response) // Jika dia mengklik tombol 'Quit' atau menekan ESC
        {
            Kick(playerid);
        }
        else // Menekan ENTER atau mengklik tombol 'Login'
        {
            if(CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "You are now logged in!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN GAGAL.");

                // Menampilkan ulang dialog loginnya
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Masukkan passwordnya say:", "Login", "Quit");
            }
        }
        return 1; // Kita berhasil mengelola dialog, jadi return 1. Sama seperti OnPlayerCommandText.
    }

    return 0; // Anda WAJIB return 0 disini! sama seperti OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Pilih", "Tutup");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Jika mereka mengklik 'Pilih' atau mengklik dua kali senjata yang dipilih
        {
            // Berikan mereka senjata yang mereka mau
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Berikan mereka sebuah desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Berikan mereka sebuah AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Berikan mereka sebuah Combat Shotgun
            }
        }
        return 1; // Kita berhasil mengelola dialog, jadi return 1. Sama seperti OnPlayerCommandText.
    }

    return 0; // Anda WAJIB return 0 disini! sama seperti OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// In some command
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Pilih", "Tutup");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Jika mereka mengklik 'Pilih' atau mengklik dua kali senjata yang dipilih
        {
            // Berikan mereka senjata yang mereka mau
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Berikan mereka sebuah M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Berikan mereka sebuah MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Berikan mereka sebuah AK-47
            }
        }
        return 1; // Kita berhasil mengelola dialog, jadi return 1. Sama seperti OnPlayerCommandText.
    }

    return 0; // Anda WAJIB return 0 disini! sama seperti OnPlayerCommandText.
}
```

## Notes

:::tip

Parameters dapat memuat nilai yang berbeda berdasarkan style dialog ([klik disini untuk info lebih lanjut](../resources/dialogstyles)).

:::

:::tip

Menggunakan switch untuk mensortir dialogid sangatlah dianjurkan, jika anda memiliki banyak dialogid.

:::

:::warning

Dialog pemain tidak akan disembunyikan ketika gamemode dimuat ulang, membuat server untuk mencetak "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last send dialog ID" jika pemain merespon kepada dialog tersebut setelah dimuat ulang.

:::

## Fungsi Terkait

- [ShowPlayerDialog](../functions/ShowPlayerDialog): Menampilkan dialog kepada pemain.
