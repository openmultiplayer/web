---
title: tolower
sidebar_label: tolower
description: Fungsi ini mengubah sebuah huruf menjadi huruf kecil.
tags: ["string"]
---

<LowercaseNote />

## Deskripsi

Fungsi ini mengubah sebuah huruf menjadi huruf kecil.

| Nama | Deskripsi                                  |
| ---- | ------------------------------------------ |
| c    | Karakter yang akan diganti ke huruf kecil. |

## Returns

Nilai ASCII dari karakter yang telah disediakan menjadi bentuk huruf kecil.

## Contoh

```c
public OnPlayerText(playerid, text[])
{
    text[0] = tolower(text[0]);
    //Ini mengubah karakter utama menjadi huruf kecil.
    return 1;
}
```

## Fungsi Terkait

- [toupper](toupper): Fungsi ini mengubah sebuah huruf menjadi huruf besar.
