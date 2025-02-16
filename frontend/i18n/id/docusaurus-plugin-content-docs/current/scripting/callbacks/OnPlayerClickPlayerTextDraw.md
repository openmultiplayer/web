---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: Callback ini terpanggil ketika pemain mengklik sebuah player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Deskripsi

Callback ini terpanggil ketika pemain mengklik sebuah player-textdraw. Ini tidak akan terpanggil ketika player membatalkan mode 'select' (ESC) - tetapi pengecualian untuk OnPlayerClickTextDraw.

| Nama         | Deskripsi                                |
| ------------ | ---------------------------------------- |
| playerid     | ID dari pemain yang mengklik textdraw.   |
| playertextid | ID dari player-textraw yang pemain klik. |

## Returns

Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya.

## Contoh

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Buat TexDraw nya disini
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "TextDrawKu");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Buat ini bisa dipencet
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Lalu tunjukkan ke player
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if(newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if(playertextid == gPlayerTextDraw[playerid])
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "Anda mengklik sebuah TextDraw, wow!.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Notes

:::warning

Ketika player menekan ESC untuk membatalkan pemilihan textdraw, OnPlayerClickTextDraw akan dipanggil dengan ID textraw yang menjadi 'INVALID_TEXT_DRAW'. OnPlayerClickPlayerTextDraw tentu tidak akan terpanggil.

:::

## Fungsi Terkait

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable.md): Mengatur apakah player-textdraw dapat dipilih menggunakan SelectTextDraw
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Terpanggil ketika player mengklik sebuah textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer.md): Terpanggil ketika player mengklik yang lain.
