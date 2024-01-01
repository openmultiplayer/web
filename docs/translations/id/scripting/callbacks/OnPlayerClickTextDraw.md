---
title: OnPlayerClickTextDraw
description: Callback ini akan terpanggil ketika pemain mengklik sebuah textraw atau membatalkan 'select' mode dengan tombol ESC.
tags: ["player", "textdraw"]
---

:::warning

Fungsi ini telah ditambahkan dalam SA-MP 0.3e dan tidak bekerja pada versi dibawahnya!

:::

## Deskripsi

Callback ini akan terpanggil ketika pemain mengklik sebuah textraw atau membatalkan 'select' mode dengan tombol ESC.

| Nama      | Deskripsi                                                               |
| --------- | ----------------------------------------------------------------------- |
| playerid  | ID dari pemain yang mengklik textdraw.                                  |
| clickedid | ID dari textraw yang diklik. INVALID_TEXT_DRAW jika seleksi dibatalkan. |

## Returns

Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya.

## Contoh

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "TextDrawKu");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
    return 1;
}

public OnPlayerKeyStateChange(playerid, newkeys, oldkeys)
{
    if(newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if(clickedid == gTextDraw)
    {
         SendClientMessage(playerid, 0xFFFFFFAA, "Anda mengklik sebuah TextDraw, wow!.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Catatan

:::warning

Area yang dapat diklik ditentukan oleh TextDrawTextSize. parameter x dan y yang diteruskan ke fungsi tersbut tidak boleh nol atau negatif. Jangan pernah gunakan CancelSelectextDraw tanpa pengecekan dalam callback ini. Kemungkinan pengulangan tak terbatas bisa terjadi.

:::

## Fungsi Terkait

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Terpanggil ketika player mengklik sebuah player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Terpanggil ketika player mengklik yang lain.
