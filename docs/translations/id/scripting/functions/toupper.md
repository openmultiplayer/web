---
title: tolower
description: Fungsi ini mengubah sebuah huruf menjadi huruf besar.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Fungsi ini mengubah sebuah huruf menjadi huruf besar.

| Nama | Deskripsi                                  |
| ---- | ------------------------------------------ |
| c    | Karakter yang akan diganti ke huruf besar. |

## Returns

Nilai ASCII dari karakter yang telah disediakan menjadi bentuk huruf besar.

## Contoh

```c
public OnPlayerText(playerid, text[])
{
    text[0] = toupper(text[0]);
    //Ini mengubah karakter utama menjadi huruf besar.
    return 1;
}
```

## Fungsi Terkait

- [tolower](tolower): Fungsi ini mengubah sebuah huruf menjadi huruf kecil.
